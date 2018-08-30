"use strict";

const DEFAULT_LAT = -25.344490;
const DEFAULT_LNG = 131.035431;
const DEFAULT_ZOOM = 4;

//trying not to expose anything.
(function(){

	function sendRequest(args) {
		return new Promise((resolve, reject) => {

			let req = new XMLHttpRequest();
			req.open(args.method, args.url);
			req.send();

			req.addEventListener("load", (e) => {
				if (e.currentTarget.status == 200) return resolve(e.currentTarget.response);
				reject(e.currentTarget.response);
			})

			req.addEventListener("error", (e) => {
				reject("Error while retriving location information");
			})
		})
	}

	function sendRequests(args) {
		return Promise.all(args.map(arg => sendRequest(arg)));
	}

	function main() {
		this.isInitialized = false;
		this.map;
		this.defaultStyle = {
			fillColor: "#3388ff"
		}
		this.prevLayer;
		this.apiQueryParams = {
			radius: 50 // in km
		}
	}

	/*
		Define functions here.
	*/

	main.prototype.init = function() {
		if (this.isInitialized) return;
		
		this.initEvents();
		this.map = L.map('mapid').setView([DEFAULT_LAT, DEFAULT_LNG], DEFAULT_ZOOM);
 
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox.streets',
			accessToken: 'your.mapbox.access.token'
		}).addTo(this.map);

		var client = new carto.Client({
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
			
		client.addLayers([SubRegions, Regions]);
		let leafletLayer = client.getLeafletLayer()
		leafletLayer.addTo(this.map);

		let marker = {};
		Regions.on('featureClicked', e => {
			let regionName = e.data.reg_name_7;
			document.getElementById("subregion-detail").innerHTML = '<strong>Bioregion: </strong>'+regionName;
			this.getRegionInfo(regionName);

			if (marker != undefined) {
				this.map.removeLayer(marker);
			}

			marker = L.marker(e.latLng).addTo(this.map);

			this.getBioInfo({lat: e.latLng.lat, lng: e.latLng.lng})
		});

		SubRegions.on('featureClicked', featureEvent => {
			let subregionName = featureEvent.data.sub_name_7;
			let regionName = featureEvent.data.reg_name_7;
			document.getElementById("subregion-detail").innerHTML = '<strong>Bioregion: </strong>'+regionName + '</br><strong>Sub-region: </strong>'+subregionName ;
		}); 
				
		/**Layer control */
		/* this.map.on('zoomend', function(){
			var z = this.map.getZoom();
			document.getElementById("subregion-detail").innerHTML +='<br>Zoom: '+z;
			if (z < 4) {
				client.getLeafletLayer().removeFrom(this.map);
			}

		}); */
		
		/***/
		
		
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

		let searchControl = new L.Control.Search(searchCtlOption);

		this.map.addControl( searchControl );

		this.isInitialized = true;
	}

	main.prototype.getRegionInfo = function(regionName) {
		let groupsUrl = `https://regions.ala.org.au/region/showGroups?\
		regionFid=cl1048&regionType=Biogeographic+regions&regionName=Brigalow+Belt+South&\
		regionPid=5746765&aazones=groupsZone&aatags=tbody`;

		//Get g
		let speciesUrl = `https://regions.ala.org.au/region/showSpecies?\
		aazones=speciesZone&aatags=tbody&regionName=Nullarbor&regionType=\
		Biogeographic+regions&regionFid=cl1048&regionPid=5746790&\
		regionLayerName=ibra7_regions&group=Mammals&subgroup=&guid=&\
		fq=species_subgroup:("Carnivorous+Marsupials"+OR+"Herbivorous+Marsupials"+OR+"Marsupial+Moles"+OR+"Bandicoots\u002c+Bilbies"+OR+"Monotremes"+OR+"Even-toed+hoofed"+OR+"Carnivores"+OR+"Dolphins\u002c+Porpoises\u002c+Whales"+OR+"Bats"+OR+"Hares\u002c+Pikas\u002c+Rabbits"+OR+"Rodents")&from=1850&to=2018&tab=speciesTab&q=cl1048%3A%22Nullarbor%22&qc=&hubFilter=&fq=rank:(species%20OR%20subspecies)&fq=-occurrence_status_s:absent&fq=geospatial_kosher:true&fq=occurrence_year:*&showHubData=false`;

		console.log(`sending to ${groupsUrl}`);
		sendRequest({method: "GET", url: groupsUrl})
		.then((result) => {
			console.log(result);
			let parser = new DOMParser();
			let xml = parser.parseFromString(result, 'text/xml');
			let groupsZone = xml.querySelector("#groupsZone");

			let cdata = groupsZone.firstChild.data;

			let tbody = parser.parseFromString(cdata.replace(/(\w+)=([\w-:]+)/g,  '$1="$2"'), 'text/xml');
			let mammalsRow = tbody.querySelectorAll('[parent="Mammals-row"]');
			mammalsRow.forEach((r) => {console.log(r.childNodes[1].innerHTML)})

		}).catch((e) => {
			console.log(e);
		})
	}


	main.prototype.initEvents = function() {
		document.getElementById("fullscreen").addEventListener("click", this.fullscreen.bind(this))
		document.getElementById("panel-toggle").addEventListener("click", this.panelOpen.bind(this))
		document.getElementById("geolocation").addEventListener("click", this.geolocation.bind(this))
	}

	main.prototype.fullscreen = function() {
		//store these as states instead of querying.
		let container = document.getElementsByClassName("panel-container")[0];
		container.style.position = "fixed";
		container.style.top = 0;
		container.style.bottom = 0;
		container.style.right = 0;
		container.style.left = 0;
		let mapdiv = document.getElementById("mapid")
		mapdiv.style.height = "100%";
		mapdiv.style.width = "100%";

		document.getElementById("panel-side").style.height = "100%";

		this.map.invalidateSize();
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

	main.prototype.geolocation = function() {
		//	Add timeout, accuracy and max age options if needed.
		if (this.isLocationOn) return;

		/*
		
		*/
		/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent) ?
			this.gpsLocation(): 
			this.ipLocation();
	}

	main.prototype.gpsLocation = function() {
		let options = {
			enableHighAccuracy: true
		};

		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				console.log(position);
				L.circle(
					[position.coords.latitude, position.coords.longitude],
					{ radius: 2000, color: "#000000", weight: 4 }
				).addTo(this.map);
				this.isLocationOn = true;
			}, this.handleErrors, options);

			navigator.geolocation.watchPosition((position) => {

				// Update user position.

			}, this.handleErrors, options);
		} else {

		}
	}

	main.prototype.ipLocation = function() {
		const url = "http://api.ipstack.com/check?access_key=c7de56c920dfe9a06b36d80df9c287ac";

		sendRequest({ method: "GET", url: url})
		.then(response => {
			response = JSON.parse(response);

			L.circle(
				[response.latitude, response.longitude],
				{ radius: 2000, color: "#000000", weight: 4 }
			).addTo(this.map);

		}).catch((error) => {
			console.log(error);
			this.handleErrors(error);
		})
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

			L.circle(
				[lat, lng],
				{ radius: radius * 1000, color: "#89ff77", weight: 1 }
			).addTo(this.map);

			let panel = document.getElementById("subregion-detail");
			panel.innerHTML += `
				<ul>
					${result.map(info => `<li>${info.name} - ${info.speciesCount}</li>`).join('')}
				</ul>
			`
		})
	}

	main.prototype.handleErrors = function(error) {

		// TODO

	}

	return new main();
})().init();
