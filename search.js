
	
	mymap.addControl( new L.Control.Search({
		url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
		jsonpParam: 'json_callback',
		propertyName: 'display_name',
		propertyLoc: ['lat','lon'],
		marker: L.marker([0,0]),
		autoCollapse: true,
		autoType: false,
		minLength: 2,
		zoom: 10
	}) );
