"use strict";

/*
	TODO:

	Spawn a worker to incrementally load ala region data.
*/

const DEFAULT_LAT = -25.344490;
const DEFAULT_LNG = 131.035431;
const DEFAULT_ZOOM = 4;
const DEFAULT_MARKER_RADIUS = 50000;

//trying not to expose anything.
(function(){

	let {
		sendRequest,
		sendRequests
	} = require("./utils.js");

	function main() {
		this.isInitialized = false;
		this.defaultStyle = {
			fillColor: "#3388ff"
		}
		this.showBioregions = true;
		this.showSubBioregions = true;

		this.detailElement = document.getElementById("subregion-detail");
		this.regionDetailModal = document.getElementById("region-detail-modal");
		this.regionDetailBody = document.getElementById("region-detail-body");
		this.regionDetailTitle = document.getElementById("region-detail-title");
		this.regionDetailBodyAccordion = document.getElementById("accordion");
		this.regionLoading = document.getElementById("region-loading");

		this.showMoreButton = document.createElement("button");
		this.showMoreButton.id = "show-more-button";
		this.showMoreButton.classList.add("btn", "btn-info");
		this.showMoreButton.innerHTML = "More";

		this.showMoreButton.addEventListener("click", () => {
			this.toggleModal();
			this.getRegionInfo([
				'Mammals',
				'Birds',
				'Amphibians'
			], false);
		});
	}

	/*
		Define functions here.
	*/

	main.prototype.init = function() {
		if (this.isInitialized) return;
		this.initMap();
		this.initEvents();
		this.initCarto();
		this.initData();	

		this.isInitialized = true;

		document.getElementById("show-bioregions").checked = true;
		document.getElementById("show-subregions").checked = true;

	}

	main.prototype.getRegionInfo = function(groups, more) {	
		let regionPid = this.alaRegionsMapping[this.currentRegionName].pid;

		let timePeriod = 10;

		this.regionDetailTitle.innerHTML = this.currentRegionName
		
		let groupsUrl = `https://regions.ala.org.au/region/showGroups?\
		regionFid=cl1048&regionType=Biogeographic+regions&\
		regionName=${this.currentRegionName.split(' ').join('+')}&regionPid=${regionPid}&aazones=groupsZone&aatags=tbody`;

		let parser = new DOMParser();
		this.regionLoading.style.display = "block";
		sendRequest({method: "GET", url: groupsUrl})
		.then((result) => {
			let xml = parser.parseFromString(result, 'text/xml');
			let groupsZone = xml.querySelector("#groupsZone");

			let cdata = groupsZone.firstChild.data;

			let tbody = parser.parseFromString(cdata.replace(/(\w+)=([\w-:]+)/g,  '$1="$2"'), 'text/xml');
			
			let requests = groups.map((group) => 
				new Promise((res, rej) => {
					let mammalsRow = tbody.querySelectorAll(`[parent="${group}-row"]`);
					let speciesSubgroup = [];
					mammalsRow.forEach((r) => { speciesSubgroup.push(`"${r.childNodes[1].innerHTML.trim()}"`) });

					let to = (new Date).getFullYear(), from = to - timePeriod;
					
					let speciesSubgroupString = encodeURI(speciesSubgroup.join(' OR ')).replace(/,/g, '\\u002c');

					//Species record with images.
					let speciesUrl = `https://biocache.ala.org.au/ws/occurrences/search?q=cl1048:%22${this.currentRegionName.split(' ').join('%20')}%22&\
					fq=species_subgroup:(${speciesSubgroupString})&\
					fq=occurrence_year:[${from}-01-01T00:00:00Z%20TO%20${to}-12-31T23:59:59Z]&fq=rank:(species%20OR%20subspecies)&\
					fq=-occurrence_status_s:absent&fq=geospatial_kosher:true&fq=occurrence_year:*&fq=multimedia:%22Image%22&pageSize=500`

					sendRequest({method: "GET", url: speciesUrl})
					.then(result => res({group, result}))
				})
			)

			return Promise.all(requests);
		}).then((results) => {
			if (!more)
			{
				this.regionDetailBodyAccordion.innerHTML = `
				<h5>Animal occurrences</h5>
				<p>Last ${timePeriod} years</p>
				<hr/>
				`;
			}
			
			results.forEach(({group, result}) => {
				result = JSON.parse(result);
				let uniq = new Map();
				result.occurrences.forEach(oc => {
					if (!uniq.has(oc.vernacularName)) uniq.set(oc.vernacularName, {
						specie: oc.species || oc.raw_species, name: oc.vernacularName || oc.raw_vernacularName, image: oc.smallImageUrl});
				});

				let iterator = uniq.values();
				this.regionDetailBodyAccordion.innerHTML += `<div class="card">
					<div class="card-header" data-toggle="collapse" href="#${group}" aria-expanded="false"  aria-controls="${group}">
						<h5 class="mb-0">
							${group}
						</h5>
					</div>
					
					<div id="${group}" class="group-detail collapse">
						${(uniq.size) ? 
							`<ul style="list-style: none;">
								${function(){
									let oc, li = [];
									while(oc = iterator.next().value) li.push(`<li>${oc.specie} | ${oc.name} <img src="${oc.image}"></li>`);
									return li.join('');
								}()}
							</ul>` : '0 occurrences of ' + group
						}
					</div>
				</div>`
			})

			if (!more)
			{
				this.regionDetailBodyAccordion.innerHTML += `<div id="more-animal-data" class="card">
					<div class="card-header text-center"><h5 class="mb-0"><b> ... </b></h5> </div></div>
				`;
				let xcvzcvx = document.getElementById('more-animal-data');
				
				xcvzcvx.addEventListener('click', () => {
					xcvzcvx.parentNode.removeChild(xcvzcvx);
					this.getRegionInfo(["Plants", "Crustaceans", "Molluscs", "Fish"], true);
				})
			}
			
			this.regionLoading.style.display = "none";
		}).catch((e) => {
			console.log(e);
			console.log("Failed to retrieve region data");
			this.handleErrors(e);
		})
	}

	main.prototype.initMap = function() {
		this.map = L.map('mapid').setView([DEFAULT_LAT, DEFAULT_LNG], DEFAULT_ZOOM);
		this.zoomLevels = {
			start: this.map.getZoom(),
			end: this.map.getZoom()
		}
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}', {
			maxZoom: 18,
			id: 'mapbox.streets',
			accessToken: 'your.mapbox.access.token'
		}).addTo(this.map);

		let searchCtlOption = {
			url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
			jsonpParam: 'json_callback',
			propertyName: 'display_name',
			propertyLoc: ['lat','lon'],
			marker: L.marker([0,0]),
			autoCollapse: true,
			autoType: false,
			minLength: 2,
			zoom: 10
		};

		L.control.locate({flyTo: false, keepCurrentZoomLevel: true}).addTo(this.map);

		L.easyButton('fa-expand', (btn, map) => {
			this.fullscreen();
		}).addTo( this.map );

		let searchControl = new L.Control.Search(searchCtlOption);

		this.map.addControl( searchControl );
	}

	main.prototype.initCarto = function() {
		var client1 = new carto.Client({
			apiKey: 'default_public',
			username: 'yuseldin'
		});

		var client2 = new carto.Client({
			apiKey: 'default_public',
			username: 'yuseldin'
		});

		var client3 = new carto.Client({
			apiKey: 'default_public',
			username: 'yuseldin'
		});

		const RegionsDataset = new carto.source.Dataset(`
			ibra7_regions
		`);
		const RegionsStyle = new carto.style.CartoCSS(`
		  #layer {		
			::outline {
			  line-width: 2;
			  line-color: #000000;
			  line-opacity: 0.5;
			}
			[zoom<6]{
				polygon-fill: #162945;
				polygon-opacity: 0.5;
			}
		  }
		`);
		const Regions = new carto.layer.Layer(RegionsDataset, RegionsStyle, {
			featureClickColumns: ['reg_name_7']
		});
				
		const SubRegionsDataset = new carto.source.Dataset(`
			ibra7_subregions
		`);

		const SubRegionsStyle = new carto.style.CartoCSS(`
		  #layer {
			[zoom >=6]{
			polygon-fill: #162945;
			polygon-opacity: 0.5;
			::outline {
			  line-width: 1;
			  line-color: #FFFFFF;
			  line-opacity: 0.5;
			}
			}
		  }
		`);

		const SubRegions = new carto.layer.Layer(SubRegionsDataset, SubRegionsStyle, {
			featureClickColumns: ['sub_name_7', 'reg_name_7']
		});		
		

		client1.addLayers([SubRegions, Regions]);
		this.bothLayer = client1.getLeafletLayer();
		this.bothLayer.addTo(this.map);

		client2.addLayer(Regions);
		this.regionsLayer = client2.getLeafletLayer();
		
		client3.addLayer(SubRegions);
		this.subRegionsLayer = client3.getLeafletLayer();

		let marker = {};
		Regions.on('featureClicked', e => {
			this.currentRegionName = e.data.reg_name_7;
			this.detailElement.innerHTML = '<strong>Bioregion: </strong>'+this.currentRegionName;

			if (marker != undefined) {
				this.map.removeLayer(marker);
			}

			marker = L.marker(e.latLng).addTo(this.map);
			marker.bindPopup(this.showMoreButton).openPopup();

			// this.getBioInfo({lat: e.latLng.lat, lng: e.latLng.lng})
		});

		SubRegions.on('featureClicked', featureEvent => {
			let subregionName = featureEvent.data.sub_name_7;
			let regionName = featureEvent.data.reg_name_7;
			this.detailElement.innerHTML = '<strong>Bioregion: </strong>'+regionName + '</br><strong>Sub-region: </strong>'+subregionName ;
		}); 
	}

	main.prototype.initData = function() {
		let alaRegionsUrl = `https://regions.ala.org.au/regions/regionList?type=Biogeographic regions`;

		sendRequest({method: "GET", url: alaRegionsUrl})
		.then((result) => {
			this.alaRegionsMapping = JSON.parse(result).objects;
		})
	}

	main.prototype.initEvents = function() {
		document.getElementById("panel-toggle").addEventListener("click", this.panelOpen.bind(this))
		document.getElementById("modal-close-button").addEventListener("click", this.toggleModal.bind(this))
		document.getElementById("show-bioregions").addEventListener("click", this.toggleBioregion.bind(this));
		document.getElementById("show-subregions").addEventListener("click", this.toggleSubBioregion.bind(this));
	}
	
	main.prototype.fullscreen = function() {
		let container = document.getElementsByClassName("container-flex")[0];
		let mapdiv = document.getElementById("mapid")
		let infoDisplay = document.getElementsByClassName("information-display")[0];
		let panelSide = document.getElementById("panel-side");

		/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent) ?
			(() => {
				container = document.getElementsByClassName("panel-container")[0];
				if (this.isFullScreen) {
					container.style.position = 'relative';
					container.style.width = '100%';
					container.style.height = '100%';
					mapdiv.style.height = '100%';
					panelSide.style.height = "100%";
				} else {
					container.style.position = "fixed";
					container.style.top = 0;
					container.style.bottom = 0;
					container.style.right = 0;
					container.style.left = 0;				
					mapdiv.style.height = "100%";	
					panelSide.style.height = "100%";	
				}
			})(): 
			(() => {
				if (this.isFullScreen) {
					container.style.position = 'relative';
					container.style.width = '100%';
					container.style.height = '100%';
					mapdiv.style.height = '70%';
					infoDisplay.style.height = "70%";
					panelSide.style.height = "70%";
				} else {
					container.style.position = "fixed";
					container.style.top = 0;
					container.style.bottom = 0;
					container.style.right = 0;
					container.style.left = 0;
					
					mapdiv.style.height = "100%";
					infoDisplay.style.height = "100%";
		
					panelSide.style.height = "100%";	
				}
			})()
		this.map.invalidateSize();
		this.isFullScreen = !this.isFullScreen
		this.map.setView([DEFAULT_LAT, DEFAULT_LNG], DEFAULT_ZOOM);
	}

	main.prototype.panelOpen = function() {
		//Probably store these as states.
		let toggle = document.getElementById("panel-toggle");
		let panel = document.getElementById("panel-side");
		if (toggle.className == "panel-toggle") {
			toggle.className = "panel-toggle-close"
			panel.style.display = "block"
		} else {
			toggle.className = "panel-toggle";
			panel.style.display = "none"
		}
	}

	main.prototype.toggleModal = function() {
		if (this.regionDetailModal.classList.contains("show")) {
			this.regionDetailModal.classList.remove("show");
			this.regionDetailModal.style.display = "none";
			this.regionDetailBodyAccordion.innerHTML = ''
		} else {
			this.regionDetailModal.classList.add("show");
			this.regionDetailModal.style.display = "block";
		}
	}

	main.prototype.toggleLayer = function() {
		if (this.showBioregions && this.showSubBioregions)
		{
			this.regionsLayer.removeFrom(this.map);
			this.subRegionsLayer.removeFrom(this.map);
			this.bothLayer.addTo(this.map);
		}
		else if (!this.showBioregions && this.showSubBioregions)
		{
			this.regionsLayer.removeFrom(this.map);
			this.bothLayer.removeFrom(this.map);
			this.subRegionsLayer.addTo(this.map);
		} 
		else if (this.showBioregions && !this.showSubBioregions)
		{
			this.bothLayer.removeFrom(this.map);
			this.subRegionsLayer.removeFrom(this.map);
			this.regionsLayer.addTo(this.map);
		}
		else
		{
			this.bothLayer.removeFrom(this.map);
			this.subRegionsLayer.removeFrom(this.map);
			this.regionsLayer.removeFrom(this.map);
		}
	}

	main.prototype.toggleBioregion = function() {
		this.showBioregions = !this.showBioregions;
		this.toggleLayer();
	}

	main.prototype.toggleSubBioregion = function() {
		this.showSubBioregions = !this.showSubBioregions;
		this.toggleLayer();
	}

	main.prototype.getBioInfo = function(args) {
		let base = "https://biocache.ala.org.au/ws/explore";
		let lat = args.lat, lng = args.lng, radius = this.apiQueryParams.radius;
		let groupsUrl = `${base}/groups.json?` +
						`lat=${lat}&lon=${lng}&` +
						`radius=${radius}&fq=geospatial_kosher%3Atrue&facets=species_group&qc=&_=1534039843703`

		let animalsUrl = `${base}/group/Animals.json?` +
				   `lat=${lat}&lon=${lng}` +
				   `&radius=${radius}&fq=geospatial_kosher%3Atrue&qc=&pageSize=50&_=1534036317736`;
		

		sendRequest({method: "GET", url: groupsUrl})
		.then((result) => {
			result = JSON.parse(result);
			if (this.circle) this.circle.removeFrom(this.map)
			this.circle = L.circle(
				[lat, lng],
				{ radius: radius * 1000, color: "#89ff77", weight: 1 }
			)
			
			this.circle.addTo(this.map);

			// let panel = document.getElementById("subregion-detail");
			// panel.innerHTML += `
			// 	<ul>
			// 		${result.map(info => `<li>${info.name} - ${info.speciesCount}</li>`).join('')}
			// 	</ul>
			// `
		})
	}

	main.prototype.handleErrors = function(error) {

		// TODO

	}

	return new main();
})().init();
