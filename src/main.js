"use strict";

const DEFAULT_LAT = -25.344490;
const DEFAULT_LNG = 131.035431;
const DEFAULT_ZOOM = 4;

//trying not to expose anything.
(function(){

	function main() {
		this.initialized = false;
		this.map;
	}

	/*
		Define functions here.
	*/

	main.prototype.init = function() {
		if (this.initialized) return;
		
		this.initEvents();
		this.map = L.map('mapid').setView([DEFAULT_LAT, DEFAULT_LNG], DEFAULT_ZOOM);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox.streets',
			accessToken: 'your.mapbox.access.token'
		}).addTo(this.map);

		let featuresLayer = L.geoJson(geojsonFeature, { onEachFeature: handleFeature })
		featuresLayer.addTo(this.map);

		function handleFeature(feature, layer) {
			layer.on({click: clickfunction,});
		}

		let marker = {};

		function clickfunction(e) {
			
			let region = e.target.feature.properties.REG_NAME_7;
			let subregion = e.target.feature.properties.SUB_NAME_7;
				document.getElementById("subregion-detail").innerHTML = region;
				
			if (marker != undefined) {
				this.map.removeLayer(marker);
			}
			marker = L.marker(e.latlng).addTo(this.map);
		}

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

		this.initialized = true;
	}


	main.prototype.initEvents = function() {
		document.getElementById("fullscreen").addEventListener("click", this.fullscreen.bind(this))
		document.getElementById("panel-toggle").addEventListener("click", this.panelOpen.bind(this))
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

	return new main();
})().init();
