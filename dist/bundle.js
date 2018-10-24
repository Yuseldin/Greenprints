!function(e){var t={};function i(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(o,s,function(t){return e[t]}.bind(null,s));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";(function(){let{sendRequest:e,sendRequests:t}=i(1);function o(){this.isInitialized=!1,this.defaultStyle={fillColor:"#3388ff"},this.alwaysShowBioregions=!1,this.alwaysShowSubBioregions=!1,this.hideBioregions=!1,this.hideSubBioregions=!1,this.detailElement=document.getElementById("subregion-detail"),this.regionDetailModal=document.getElementById("region-detail-modal"),this.regionDetailBody=document.getElementById("region-detail-body"),this.regionDetailTitle=document.getElementById("region-detail-title"),this.regionDetailBodyAccordion=document.getElementById("accordion"),this.regionLoading=document.getElementById("region-loading"),this.showMoreButton=document.createElement("button"),this.showMoreButton.id="show-more-button",this.showMoreButton.classList.add("btn","btn-info"),this.showMoreButton.innerHTML="More",this.showMoreButton.addEventListener("click",()=>{this.toggleModal(),this.getRegionInfo(["Mammals","Birds","Amphibians"],!1)})}return o.prototype.init=function(){this.isInitialized||(this.initMap(),this.initEvents(),this.initCarto(),this.initData(),this.isInitialized=!0,this.zoomedIn=!1,this.currentZoom=4,document.getElementById("show-bioregions").checked=!1,document.getElementById("show-subregions").checked=!1,document.getElementById("hide-bioregions").checked=!1,document.getElementById("hide-subregions").checked=!1)},o.prototype.getRegionInfo=function(t,i){let o=this.alaRegionsMapping[this.currentRegionName].pid;this.regionDetailTitle.innerHTML=this.currentRegionName;let s=`https://regions.ala.org.au/region/showGroups?\t\tregionFid=cl1048&regionType=Biogeographic+regions&\t\tregionName=${this.currentRegionName.split(" ").join("+")}&regionPid=${o}&aazones=groupsZone&aatags=tbody`,n=new DOMParser;this.regionLoading.style.display="block",e({method:"GET",url:s}).then(i=>{let o=n.parseFromString(i,"text/xml").querySelector("#groupsZone").firstChild.data,s=n.parseFromString(o.replace(/(\w+)=([\w-:]+)/g,'$1="$2"'),"text/xml"),r=t.map(t=>new Promise((i,o)=>{let n=[];if(s.querySelectorAll(`[parent="${t}-row"]`).forEach(e=>{n.push(`"${e.childNodes[1].innerHTML.trim()}"`)}),!n.length)return i({group:t,result:null});let r=(new Date).getFullYear(),a=r-10,l=encodeURI(n.join(" OR ")).replace(/,/g,"\\u002c"),h=`https://biocache.ala.org.au/ws/occurrences/search?q=cl1048:%22${this.currentRegionName.split(" ").join("%20")}%22&\t\t\t\t\tfq=species_subgroup:(${l})&\t\t\t\t\tfq=occurrence_year:[${a}-01-01T00:00:00Z%20TO%20${r}-12-31T23:59:59Z]&fq=rank:(species%20OR%20subspecies)&\t\t\t\t\tfq=-occurrence_status_s:absent&fq=geospatial_kosher:true&fq=occurrence_year:*&fq=multimedia:%22Image%22&pageSize=500`;e({method:"GET",url:h}).then(e=>i({group:t,result:e}))}));return Promise.all(r)}).then(e=>{if(i||(this.regionDetailBodyAccordion.innerHTML="\n\t\t\t\t<h5>Animal occurrences</h5>\n\t\t\t\t<p>Last 10 years</p>\n\t\t\t\t<hr/>\n\t\t\t\t"),e.forEach(({group:e,result:t})=>{if(!t)return void(this.regionDetailBodyAccordion.innerHTML+=`<div class="card">\n\t\t\t\t\t<div class="card-header" data-toggle="collapse" href="#${e}" aria-expanded="false"  aria-controls="${e}">\n\t\t\t\t\t\t<h5 class="mb-0">\n\t\t\t\t\t\t\t${e}\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t<div id="${e}" class="group-detail collapse">\n\t\t\t\t\t\t\t0 occurrences of ${e}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>`);t=JSON.parse(t);let i=new Map;t.occurrences.forEach(e=>{i.has(e.vernacularName)||i.set(e.vernacularName,{specie:e.species||e.raw_species,name:e.vernacularName||e.raw_vernacularName,image:e.smallImageUrl})});let o=i.values();this.regionDetailBodyAccordion.innerHTML+=`<div class="card">\n\t\t\t\t\t<div class="card-header" data-toggle="collapse" href="#${e}" aria-expanded="false"  aria-controls="${e}">\n\t\t\t\t\t\t<h5 class="mb-0">\n\t\t\t\t\t\t\t${e}\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div id="${e}" class="group-detail collapse">\n\t\t\t\t\t\t${i.size?`<ul style="list-style: none;">\n\t\t\t\t\t\t\t\t${function(){let e,t=[];for(;e=o.next().value;)t.push(`<li>${e.specie} | ${e.name} <img src="${e.image}"></li>`);return t.join("")}()}\n\t\t\t\t\t\t\t</ul>`:"0 occurrences of "+e}\n\t\t\t\t\t</div>\n\t\t\t\t</div>`}),!i){this.regionDetailBodyAccordion.innerHTML+='<div id="more-animal-data" class="card">\n\t\t\t\t\t<div class="card-header text-center"><h5 class="mb-0"><b> ... </b></h5> </div></div>\n\t\t\t\t';let e=document.getElementById("more-animal-data");e.addEventListener("click",()=>{e.parentNode.removeChild(e),this.getRegionInfo(["Plants","Crustaceans","Molluscs","Fish"],!0)})}this.regionLoading.style.display="none"}).catch(e=>{console.log(e),console.log("Failed to retrieve region data"),this.handleErrors(e)})},o.prototype.initMap=function(){this.map=L.map("mapid").setView([-25.34449,131.035431],4),this.zoomLevels={start:this.map.getZoom(),end:this.map.getZoom()};let e={"OpenStreetMap Default":L.tileLayer.provider("OpenStreetMap.Mapnik").addTo(this.map),"Esri.WorldStreetMap":L.tileLayer.provider("Esri.WorldStreetMap"),"Esri WorldImagery":L.tileLayer.provider("Esri.WorldImagery"),NASAGIBS:L.tileLayer.provider("NASAGIBS.ViirsEarthAtNight2012")};L.control.layers(e,{},{collapsed:!0,position:"bottomright"}).addTo(this.map);let t={url:"https://nominatim.openstreetmap.org/search?format=json&q={s}",jsonpParam:"json_callback",propertyName:"display_name",propertyLoc:["lat","lon"],marker:L.marker([0,0]),autoCollapse:!0,autoType:!1,minLength:2,zoom:10};L.control.locate({flyTo:!1,keepCurrentZoomLevel:!0}).addTo(this.map),L.easyButton("fa-expand",(e,t)=>{this.fullscreen()}).addTo(this.map);let i=new L.Control.Search(t);this.map.addControl(i)},o.prototype.handleGeoJson=function(e,t,i){return new Promise((o,s)=>{o(L.geoJson(JSON.parse(e),{onEachFeature:t,style:e=>Object.assign(i||{},{fillColor:`rgb(${e.properties.rgb[0]}, ${e.properties.rgb[1]}, ${e.properties.rgb[2]})`})}))})},o.prototype.onEachFeatureRegions=function(e,t){t.on({click:e=>{this.currentRegionName=e.target.feature.properties.n,this.detailElement.innerHTML="<strong>Bioregion: </strong>"+this.currentRegionName,void 0!=this.marker&&this.map.removeLayer(this.marker),this.marker=L.marker(e.latlng).addTo(this.map),this.marker.bindPopup(this.showMoreButton).openPopup();var t=new XMLHttpRequest;t.open("GET","https://www.greenprints.org.au/wp-json/wp/v2/posts?categories=39&search="+this.currentRegionName),t.onload=function(){if(t.status>=200&&t.status<400){for(var e=JSON.parse(t.responseText),i="",o=0;o<e.length;o++)i+=e[o].content.rendered;document.getElementById("subregion-detail").innerHTML+=i}else console.log("Conected to the server, but it returend an error.")},t.onerror=function(){console.log("Connection error")},t.send()}})},o.prototype.onEachFeatureSubRegions=function(e,t){t.on({click:e=>{this.currentRegionName=e.target.feature.properties.n,this.currentSubRegionName=e.target.feature.properties.sub_n,console.log(e.target.feature.properties),this.detailElement.innerHTML="<strong>Bioregion: </strong>"+this.currentRegionName,this.currentSubRegionName&&(this.detailElement.innerHTML+="<br/><strong>Sub-bioregion: </strong>"+this.currentSubRegionName),void 0!=this.marker&&this.map.removeLayer(this.marker),this.marker=L.marker(e.latlng).addTo(this.map),this.marker.bindPopup(this.showMoreButton).openPopup()}})},o.prototype.initCarto=function(){e({method:"GET",url:"https://www.greenprints.org.au/map-app/regions.json"}).then(e=>this.handleGeoJson(e,this.onEachFeatureRegions.bind(this),{color:"#333",weight:1.5,opacity:1,fillOpacity:.4})).then(e=>{this.regions=e,this.regions.addTo(this.map)}),e({method:"GET",url:"https://www.greenprints.org.au/map-app/subregions_simplified.json"}).then(e=>this.handleGeoJson(e,this.onEachFeatureSubRegions.bind(this),{color:"#333",weight:1,opacity:.5,fillOpacity:.2})).then(e=>{this.subregions_simple=e,this.map.on("zoomend",e=>{this.currentZoom=this.map.getZoom(),this.currentZoom>6?this.zoomedIn||(this.zoomedIn=!0,this.alwaysShowBioregions||this.map.removeLayer(this.regions),this.hideSubBioregions||(this.subregions_simple?this.subregions_simple.addTo(this.map):this.subregions.addTo(this.map))):this.zoomedIn&&(this.zoomedIn=!1,this.alwaysShowSubBioregions||(this.subregions_simple?this.map.removeLayer(this.subregions_simple):this.map.removeLayer(this.subregions)),this.hideBioregions||this.regions.addTo(this.map))}),this.alwaysShowSubBioregions&&this.subregions_simple.addTo(this.map)}),e({method:"GET",url:"https://www.greenprints.org.au/map-app/subregions.json"}).then(e=>this.handleGeoJson(e,this.onEachFeatureSubRegions.bind(this),{color:"#333",weight:1,opacity:.5,fillOpacity:.2})).then(e=>{this.subregions=e,console.log("detailed subregions loaded"),this.alwaysShowSubBioregions&&this.subregions.addTo(this.map)})},o.prototype.initData=function(){e({method:"GET",url:"https://regions.ala.org.au/regions/regionList?type=Biogeographic regions"}).then(e=>{this.alaRegionsMapping=JSON.parse(e).objects})},o.prototype.initEvents=function(){document.getElementById("panel-toggle").addEventListener("click",this.panelOpen.bind(this)),document.getElementById("modal-close-button").addEventListener("click",this.toggleModal.bind(this)),document.getElementById("show-bioregions").addEventListener("click",this.toggleBioregion.bind(this)),document.getElementById("show-subregions").addEventListener("click",this.toggleSubBioregion.bind(this)),document.getElementById("hide-bioregions").addEventListener("click",this.hideBioregion.bind(this)),document.getElementById("hide-subregions").addEventListener("click",this.hideSubBioregion.bind(this))},o.prototype.fullscreen=function(){let e=document.getElementsByClassName("container-flex")[0],t=document.getElementById("mapid"),i=document.getElementsByClassName("information-display")[0],o=document.getElementById("panel-side");/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)?(()=>{e=document.getElementsByClassName("panel-container")[0],this.isFullScreen?(e.style.position="relative",e.style.width="100%",e.style.height="100%",t.style.height="100%",o.style.height="100%"):(e.style.position="fixed",e.style.top=0,e.style.bottom=0,e.style.right=0,e.style.left=0,t.style.height="100%",o.style.height="100%")})():(()=>{this.isFullScreen?(e.style.position="relative",e.style.width="100%",e.style.height="100%",t.style.height="70%",i.style.height="70%",o.style.height="70%"):(e.style.position="fixed",e.style.top=0,e.style.bottom=0,e.style.right=0,e.style.left=0,t.style.height="100%",i.style.height="100%",o.style.height="100%")})(),this.map.invalidateSize(),this.isFullScreen=!this.isFullScreen,this.map.setView([-25.34449,131.035431],4)},o.prototype.panelOpen=function(){let e=document.getElementById("panel-toggle"),t=document.getElementById("panel-side");"panel-toggle"==e.className?(e.className="panel-toggle-close",t.style.display="block"):(e.className="panel-toggle",t.style.display="none")},o.prototype.toggleModal=function(){this.regionDetailModal.classList.contains("show")?(this.regionDetailModal.classList.remove("show"),this.regionDetailModal.style.display="none",this.regionDetailBodyAccordion.innerHTML=""):(this.regionDetailModal.classList.add("show"),this.regionDetailModal.style.display="block")},o.prototype.toggleLayer=function(){this.regions&&(this.subregions_simple||this.subregion)&&(console.log(`alwaysShowSubBioregions: ${this.alwaysShowSubBioregions}`),console.log(`alwaysShowBioregions: ${this.alwaysShowBiorsegions}`),this.alwaysShowSubBioregions&&(this.subregions_simple?this.subregions_simple.addTo(this.map):this.subregions.addTo(this.map)),this.alwaysShowBioregions&&this.regions.addTo(this.map),!this.alwaysShowSubBioregions&&this.currentZoom<=6&&this.map.removeLayer(this.subregions_simple?this.subregions_simple:this.subregions),!this.alwaysShowBioregions&&this.currentZoom>6&&this.map.removeLayer(this.regions))},o.prototype.toggleBioregion=function(){this.alwaysShowBioregions=!this.alwaysShowBioregions,this.toggleLayer()},o.prototype.toggleSubBioregion=function(){this.alwaysShowSubBioregions=!this.alwaysShowSubBioregions,this.toggleLayer()},o.prototype.hideBioregion=function(){this.hideBioregions=!this.hideBioregions,this.hideBioregions?this.map.removeLayer(this.regions):(this.currentZoom<=6||this.alwaysShowBioregions)&&this.regions.addTo(this.map)},o.prototype.hideSubBioregion=function(){this.hideSubBioregions=!this.hideSubBioregions,this.hideSubBioregions?this.map.removeLayer(this.subregions_simple?this.subregions_simple:this.subregions):(this.currentZoom>6||this.alwaysShowSubBioregions)&&(this.subregions_simple?this.subregions_simple.addTo(this.map):this.subregions.addTo(this.map))},o.prototype.getBioInfo=function(t){let i="https://biocache.ala.org.au/ws/explore",o=t.lat,s=t.lng,n=this.apiQueryParams.radius;e({method:"GET",url:`${i}/groups.json?`+`lat=${o}&lon=${s}&`+`radius=${n}&fq=geospatial_kosher%3Atrue&facets=species_group&qc=&_=1534039843703`}).then(e=>{e=JSON.parse(e),this.circle&&this.circle.removeFrom(this.map),this.circle=L.circle([o,s],{radius:1e3*n,color:"#89ff77",weight:1}),this.circle.addTo(this.map)})},o.prototype.handleErrors=function(e){},new o})().init()},function(e,t){function i(e){return new Promise((t,i)=>{let o=new XMLHttpRequest;o.open(e.method,e.url),o.send(),o.addEventListener("load",e=>{if(e.currentTarget.status>=200&&e.currentTarget.status<300)return t(e.currentTarget.response);i(e.currentTarget.response)}),o.addEventListener("error",e=>{i(`Error in request/response: ${JSON.stringify(e)}`)})})}e.exports.sendRequest=i,e.exports.sendRequests=function(e){return Promise.all(e.map(e=>i(e)))}}]);