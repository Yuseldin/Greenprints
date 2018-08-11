"use strict";

let initialized = false;

function init() {
	if (initialized) return;
	initEvents();

	const DEFAULT_LAT = -25.344490;
	const DEFAULT_LNG = 131.035431;
	const DEFAULT_ZOOM = 4;

	let myMap = L.map('mapid').setView([DEFAULT_LAT, DEFAULT_LNG], DEFAULT_ZOOM);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'your.mapbox.access.token'
	}).addTo(myMap);

	let featuresLayer = L.geoJson(geojsonFeature, { onEachFeature: handleFeature })
	featuresLayer.addTo(myMap);

	function handleFeature(feature, layer) {
	layer.on({click: clickfunction,});
	}

	let marker = {};

	function clickfunction(e) {
		
		let region = e.target.feature.properties.REG_NAME_7;
		let subregion = e.target.feature.properties.SUB_NAME_7;
			document.getElementById("subregion-detail").innerHTML = region;
			
		if (marker != undefined) {
			myMap.removeLayer(marker);
		}
		marker = L.marker(e.latlng).addTo(myMap);
	}

	/*
		Searching features
	*/
	// let searchCtlOption = {
	//     layer: featuresLayer,
	//     propertyName: 'REG_NAME_7',
	//     marker:false,
	//     moveToLocation: (latLng, title, map) => {
	//         let zoom = myMap.getBoundsZoom(latLng.layer.getBounds());
	//         myMap.setView(latLng, zoom);
	//     }
	// }
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

	myMap.addControl( searchControl );

	initialized = true;
}

function initEvents() {
	document.getElementById("fullscreen").addEventListener("click", fullscreen)

	document.getElementById("panel-toggle").addEventListener("click", panelOpen)
}

function fullscreen() {
	// let container = document.getElementsByClassName("middle")[0];
	// for(let i=0; i != container.children.length; ++i) container.children.item(i).style.height = "100%";

	// document.getElementById("mapid").style.height = "100%";
	// document.getElementsByClassName("information-display")[0].style.height = "100%";

	let container = document.getElementsByClassName("panel-container")[0];
	container.style.position = "absolute";
	container.style.top = 0;
	container.style.bottomm = 0;
	container.style.right = 0;
	container.style.left = 0;
	let map = document.getElementById("mapid")
	map.style.height = "100%";
	map.style.width = "100%"
}

function panelOpen() {
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

init();

// expose only init?
