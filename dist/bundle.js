!function(t){var e={};function i(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";(function(){let{sendRequest:t,sendRequests:e}=i(1);function o(){this.isInitialized=!1,this.defaultStyle={fillColor:"#3388ff"},this.alwaysShowBioregions=!1,this.alwaysShowSubBioregions=!1,this.hideBioregions=!1,this.hideSubBioregions=!1,this.data={},this.detailElement=document.getElementById("subregion-detail"),this.regionDetailModal=document.getElementById("region-detail-modal"),this.regionDetailBody=document.getElementById("region-detail-body"),this.regionDetailTitle=document.getElementById("region-detail-title"),this.regionDetailBodyAccordion=document.getElementById("accordion"),this.regionLoading=document.getElementById("region-loading"),this.showMoreButton=document.createElement("button"),this.showMoreButton.id="show-more-button",this.showMoreButton.classList.add("btn","btn-info"),this.showMoreButton.innerHTML="More",this.showMoreButton.addEventListener("click",()=>{this.toggleModal(),this.getRegionInfo(["Mammals","Birds","Amphibians"],!1)})}return o.prototype.init=function(){this.isInitialized||(this.initMap(),this.initEvents(),this.initCarto(),this.initData(),this.isInitialized=!0,this.zoomedIn=!1,this.currentZoom=4,document.getElementById("show-bioregions").checked=!1,document.getElementById("show-subregions").checked=!1,document.getElementById("hide-bioregions").checked=!1,document.getElementById("hide-subregions").checked=!1)},o.prototype.getRegionInfo=function(e,i){let o=this.alaRegionsMapping[this.currentRegionName].pid;this.regionDetailTitle.innerHTML=this.currentRegionName;let s=`https://regions.ala.org.au/region/showGroups?\t\tregionFid=cl1048&regionType=Biogeographic+regions&\t\tregionName=${this.currentRegionName.split(" ").join("+")}&regionPid=${o}&aazones=groupsZone&aatags=tbody`,n=new DOMParser;this.regionLoading.style.display="block",t({method:"GET",url:s}).then(i=>{let o=n.parseFromString(i,"text/xml").querySelector("#groupsZone").firstChild.data,s=n.parseFromString(o.replace(/(\w+)=([\w-:]+)/g,'$1="$2"'),"text/xml"),r=e.map(e=>new Promise((i,o)=>{let n=[];if(s.querySelectorAll(`[parent="${e}-row"]`).forEach(t=>{n.push(`"${t.childNodes[1].innerHTML.trim()}"`)}),!n.length)return i({group:e,result:null});let r=(new Date).getFullYear(),a=r-10,l=encodeURI(n.join(" OR ")).replace(/,/g,"\\u002c"),h=`https://biocache.ala.org.au/ws/occurrences/search?q=cl1048:%22${this.currentRegionName.split(" ").join("%20")}%22&\t\t\t\t\tfq=species_subgroup:(${l})&\t\t\t\t\tfq=occurrence_year:[${a}-01-01T00:00:00Z%20TO%20${r}-12-31T23:59:59Z]&fq=rank:(species%20OR%20subspecies)&\t\t\t\t\tfq=-occurrence_status_s:absent&fq=geospatial_kosher:true&fq=occurrence_year:*&fq=multimedia:%22Image%22&pageSize=500`;t({method:"GET",url:h}).then(t=>i({group:e,result:t}))}));return Promise.all(r)}).then(t=>{if(i||(this.regionDetailBodyAccordion.innerHTML="\n\t\t\t\t<h5>Animal occurrences</h5>\n\t\t\t\t<p>Last 10 years</p>\n\t\t\t\t<hr/>\n\t\t\t\t"),t.forEach(({group:t,result:e})=>{if(!e)return void(this.regionDetailBodyAccordion.innerHTML+=`<div class="card">\n\t\t\t\t\t<div class="card-header" data-toggle="collapse" href="#${t}" aria-expanded="false"  aria-controls="${t}">\n\t\t\t\t\t\t<h5 class="mb-0">\n\t\t\t\t\t\t\t${t}\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t<div id="${t}" class="group-detail collapse">\n\t\t\t\t\t\t\t0 occurrences of ${t}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>`);e=JSON.parse(e);let i=new Map;e.occurrences.forEach(t=>{i.has(t.vernacularName)||i.set(t.vernacularName,{specie:t.species||t.raw_species,name:t.vernacularName||t.raw_vernacularName,image:t.smallImageUrl})});let o=i.values();this.regionDetailBodyAccordion.innerHTML+=`<div class="card">\n\t\t\t\t\t<div class="card-header" data-toggle="collapse" href="#${t}" aria-expanded="false"  aria-controls="${t}">\n\t\t\t\t\t\t<h5 class="mb-0">\n\t\t\t\t\t\t\t${t}\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div id="${t}" class="group-detail collapse">\n\t\t\t\t\t\t${i.size?`<ul style="list-style: none;">\n\t\t\t\t\t\t\t\t${function(){let t,e=[];for(;t=o.next().value;)e.push(`<li>${t.specie} | ${t.name} <img src="${t.image}"></li>`);return e.join("")}()}\n\t\t\t\t\t\t\t</ul>`:"0 occurrences of "+t}\n\t\t\t\t\t</div>\n\t\t\t\t</div>`}),!i){this.regionDetailBodyAccordion.innerHTML+='<div id="more-animal-data" class="card">\n\t\t\t\t\t<div class="card-header text-center"><h5 class="mb-0"><b> ... </b></h5> </div></div>\n\t\t\t\t';let t=document.getElementById("more-animal-data");t.addEventListener("click",()=>{t.parentNode.removeChild(t),this.getRegionInfo(["Plants","Crustaceans","Molluscs","Fish"],!0)})}this.regionLoading.style.display="none"}).catch(t=>{console.log(t),console.log("Failed to retrieve region data"),this.handleErrors(t)})},o.prototype.initMap=function(){this.map=L.map("mapid").setView([-25.34449,131.035431],4),this.zoomLevels={start:this.map.getZoom(),end:this.map.getZoom()};let t={"OpenStreetMap Default":L.tileLayer.provider("OpenStreetMap.Mapnik").addTo(this.map),"Esri.WorldStreetMap":L.tileLayer.provider("Esri.WorldStreetMap"),"Esri WorldImagery":L.tileLayer.provider("Esri.WorldImagery"),NASAGIBS:L.tileLayer.provider("NASAGIBS.ViirsEarthAtNight2012")};L.control.layers(t,{},{collapsed:!0,position:"bottomright"}).addTo(this.map);let e={url:"https://nominatim.openstreetmap.org/search?format=json&q={s}",jsonpParam:"json_callback",propertyName:"display_name",propertyLoc:["lat","lon"],marker:L.marker([0,0]),autoCollapse:!0,autoType:!1,minLength:2,zoom:10};L.control.locate({flyTo:!1,keepCurrentZoomLevel:!0}).addTo(this.map),L.easyButton("fa-expand",(t,e)=>{this.fullscreen()}).addTo(this.map);let i=new L.Control.Search(e);this.map.addControl(i)},o.prototype.handleGeoJson=function(t,e,i){return new Promise((o,s)=>{o(L.geoJson(JSON.parse(t),{onEachFeature:e,style:t=>Object.assign(i||{},{fillColor:`rgb(${t.properties.rgb[0]}, ${t.properties.rgb[1]}, ${t.properties.rgb[2]})`})}))})},o.prototype.onEachFeatureRegions=function(e,i){i.on({click:e=>{this.currentRegionName=e.target.feature.properties.n,this.detailElement.innerHTML="<strong>Bioregion: </strong>"+this.currentRegionName+"<hr/>",void 0!=this.marker&&this.map.removeLayer(this.marker),this.marker=L.marker(e.latlng).addTo(this.map),this.marker.bindPopup(this.showMoreButton).openPopup();var i=this.currentRegionName.replace(/ /g,"-");let o="https://www.greenprints.org.au/wp-json/wp/v2/posts?categories=39&slug="+i;this.data[i]||(this.data[i]={}),1!=this.data[i].loading&&(this.data[i].data?this.detailElement.innerHTML+=this.data[i].data:(this.data[i].loading=!0,t({method:"GET",url:o}).then(t=>{let e=JSON.parse(t);e.length?(this.data[i].data=e[0].content.rendered,this.detailElement.innerHTML+=this.data[i].data):this.detailElement.innerHTML+="<p>This region currently has no information</p>",this.data[i].loading=!1},()=>{this.data[i].loading=!1})))}})},o.prototype.onEachFeatureSubRegions=function(e,i){i.on({click:e=>{this.currentRegionName=e.target.feature.properties.n,this.currentSubRegionName=e.target.feature.properties.sub_n,this.detailElement.innerHTML="<strong>Bioregion: </strong>"+this.currentRegionName+"<hr/>",this.currentSubRegionName&&(this.detailElement.innerHTML+="<strong>Sub-bioregion: </strong>"+this.currentSubRegionName+"<hr/>"),void 0!=this.marker&&this.map.removeLayer(this.marker),this.marker=L.marker(e.latlng).addTo(this.map),this.marker.bindPopup(this.showMoreButton).openPopup();var i=this.currentRegionName.replace(/ /g,"-");let o="https://www.greenprints.org.au/wp-json/wp/v2/posts?categories=39&slug="+i;this.data[i]||(this.data[i]={}),1!=this.data[i].loading&&(this.data[i].data?this.detailElement.innerHTML+=this.data[i].data:(this.data[i].loading=!0,t({method:"GET",url:o}).then(t=>{let e=JSON.parse(t);e.length?(this.data[i].data=e[0].content.rendered,this.detailElement.innerHTML+=this.data[i].data):this.detailElement.innerHTML+="<p>This region currently has no information</p>",this.data[i].loading=!1},()=>{this.data[i].loading=!1})))}})},o.prototype.initCarto=function(){t({method:"GET",url:"https://www.greenprints.org.au/map-app/regions.json"}).then(t=>this.handleGeoJson(t,this.onEachFeatureRegions.bind(this),{color:"#333",weight:1.5,opacity:1,fillOpacity:.4})).then(t=>{this.regions=t,this.regions.addTo(this.map)}),t({method:"GET",url:"https://www.greenprints.org.au/map-app/subregions_simplified.json"}).then(t=>this.handleGeoJson(t,this.onEachFeatureSubRegions.bind(this),{color:"#333",weight:1,opacity:.5,fillOpacity:.2})).then(t=>{this.subregions_simple=t,this.map.on("zoomend",t=>{this.currentZoom=this.map.getZoom(),this.currentZoom>6?this.zoomedIn||(this.zoomedIn=!0,this.alwaysShowBioregions||this.map.removeLayer(this.regions),this.hideSubBioregions||(this.subregions_simple?this.subregions_simple.addTo(this.map):this.subregions.addTo(this.map))):this.zoomedIn&&(this.zoomedIn=!1,this.alwaysShowSubBioregions||(this.subregions_simple?this.map.removeLayer(this.subregions_simple):this.map.removeLayer(this.subregions)),this.hideBioregions||this.regions.addTo(this.map))}),this.alwaysShowSubBioregions&&this.subregions_simple.addTo(this.map)}),t({method:"GET",url:"https://www.greenprints.org.au/map-app/subregions.json"}).then(t=>this.handleGeoJson(t,this.onEachFeatureSubRegions.bind(this),{color:"#333",weight:1,opacity:.5,fillOpacity:.2})).then(t=>{this.subregions=t,console.log("detailed subregions loaded"),this.alwaysShowSubBioregions&&this.subregions.addTo(this.map)})},o.prototype.initData=function(){t({method:"GET",url:"https://regions.ala.org.au/regions/regionList?type=Biogeographic regions"}).then(t=>{this.alaRegionsMapping=JSON.parse(t).objects})},o.prototype.initEvents=function(){document.getElementById("panel-toggle").addEventListener("click",this.panelOpen.bind(this)),document.getElementById("modal-close-button").addEventListener("click",this.toggleModal.bind(this)),document.getElementById("show-bioregions").addEventListener("click",this.toggleBioregion.bind(this)),document.getElementById("show-subregions").addEventListener("click",this.toggleSubBioregion.bind(this)),document.getElementById("hide-bioregions").addEventListener("click",this.hideBioregion.bind(this)),document.getElementById("hide-subregions").addEventListener("click",this.hideSubBioregion.bind(this))},o.prototype.fullscreen=function(){let t=document.getElementsByClassName("container-flex")[0],e=document.getElementById("mapid"),i=document.getElementsByClassName("information-display")[0],o=document.getElementById("panel-side");/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)?(()=>{t=document.getElementsByClassName("panel-container")[0],this.isFullScreen?(t.style.position="relative",t.style.width="100%",t.style.height="100%",e.style.height="100%",o.style.height="100%"):(t.style.position="fixed",t.style.top=0,t.style.bottom=0,t.style.right=0,t.style.left=0,e.style.height="100%",o.style.height="100%")})():(()=>{this.isFullScreen?(t.style.position="relative",t.style.width="100%",t.style.height="100%",e.style.height="70%",i.style.height="70%",o.style.height="70%"):(t.style.position="fixed",t.style.top=0,t.style.bottom=0,t.style.right=0,t.style.left=0,e.style.height="100%",i.style.height="100%",o.style.height="100%")})(),this.map.invalidateSize(),this.isFullScreen=!this.isFullScreen,this.map.setView([-25.34449,131.035431],4)},o.prototype.panelOpen=function(){let t=document.getElementById("panel-toggle"),e=document.getElementById("panel-side");"panel-toggle"==t.className?(t.className="panel-toggle-close",e.style.display="block"):(t.className="panel-toggle",e.style.display="none")},o.prototype.toggleModal=function(){this.regionDetailModal.classList.contains("show")?(this.regionDetailModal.classList.remove("show"),this.regionDetailModal.style.display="none",this.regionDetailBodyAccordion.innerHTML=""):(this.regionDetailModal.classList.add("show"),this.regionDetailModal.style.display="block")},o.prototype.toggleLayer=function(){this.regions&&(this.subregions_simple||this.subregion)&&(console.log(`alwaysShowSubBioregions: ${this.alwaysShowSubBioregions}`),console.log(`alwaysShowBioregions: ${this.alwaysShowBiorsegions}`),this.alwaysShowSubBioregions&&(this.subregions_simple?this.subregions_simple.addTo(this.map):this.subregions.addTo(this.map)),this.alwaysShowBioregions&&this.regions.addTo(this.map),!this.alwaysShowSubBioregions&&this.currentZoom<=6&&this.map.removeLayer(this.subregions_simple?this.subregions_simple:this.subregions),!this.alwaysShowBioregions&&this.currentZoom>6&&this.map.removeLayer(this.regions))},o.prototype.toggleBioregion=function(){this.alwaysShowBioregions=!this.alwaysShowBioregions,this.toggleLayer()},o.prototype.toggleSubBioregion=function(){this.alwaysShowSubBioregions=!this.alwaysShowSubBioregions,this.toggleLayer()},o.prototype.hideBioregion=function(){this.hideBioregions=!this.hideBioregions,this.hideBioregions?this.map.removeLayer(this.regions):(this.currentZoom<=6||this.alwaysShowBioregions)&&this.regions.addTo(this.map)},o.prototype.hideSubBioregion=function(){this.hideSubBioregions=!this.hideSubBioregions,this.hideSubBioregions?this.map.removeLayer(this.subregions_simple?this.subregions_simple:this.subregions):(this.currentZoom>6||this.alwaysShowSubBioregions)&&(this.subregions_simple?this.subregions_simple.addTo(this.map):this.subregions.addTo(this.map))},o.prototype.getBioInfo=function(e){let i="https://biocache.ala.org.au/ws/explore",o=e.lat,s=e.lng,n=this.apiQueryParams.radius;t({method:"GET",url:`${i}/groups.json?`+`lat=${o}&lon=${s}&`+`radius=${n}&fq=geospatial_kosher%3Atrue&facets=species_group&qc=&_=1534039843703`}).then(t=>{t=JSON.parse(t),this.circle&&this.circle.removeFrom(this.map),this.circle=L.circle([o,s],{radius:1e3*n,color:"#89ff77",weight:1}),this.circle.addTo(this.map)})},o.prototype.handleErrors=function(t){},new o})().init()},function(t,e){function i(t){return new Promise((e,i)=>{let o=new XMLHttpRequest;o.open(t.method,t.url),o.send(),o.addEventListener("load",t=>{if(t.currentTarget.status>=200&&t.currentTarget.status<300)return e(t.currentTarget.response);i(t.currentTarget.response)}),o.addEventListener("error",t=>{i(`Error in request/response: ${JSON.stringify(t)}`)})})}t.exports.sendRequest=i,t.exports.sendRequests=function(t){return Promise.all(t.map(t=>i(t)))}}]);