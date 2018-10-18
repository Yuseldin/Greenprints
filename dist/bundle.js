!function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";(function(){let{sendRequest:t,sendRequests:e}=o(1);function i(){this.isInitialized=!1,this.defaultStyle={fillColor:"#3388ff"},this.showBioregions=!0,this.showSubBioregions=!0,this.detailElement=document.getElementById("subregion-detail"),this.regionDetailModal=document.getElementById("region-detail-modal"),this.regionDetailBody=document.getElementById("region-detail-body"),this.regionDetailTitle=document.getElementById("region-detail-title"),this.regionDetailBodyAccordion=document.getElementById("accordion"),this.regionLoading=document.getElementById("region-loading"),this.showMoreButton=document.createElement("button"),this.showMoreButton.id="show-more-button",this.showMoreButton.classList.add("btn","btn-info"),this.showMoreButton.innerHTML="More",this.showMoreButton.addEventListener("click",()=>{this.toggleModal(),this.getRegionInfo(["Mammals","Birds","Amphibians"],!1)})}return i.prototype.init=function(){this.isInitialized||(this.initMap(),this.initEvents(),this.initCarto(),this.initData(),this.isInitialized=!0,document.getElementById("show-bioregions").checked=!0,document.getElementById("show-subregions").checked=!0)},i.prototype.getRegionInfo=function(e,o){let i=this.alaRegionsMapping[this.currentRegionName].pid;this.regionDetailTitle.innerHTML=this.currentRegionName;let n=`https://regions.ala.org.au/region/showGroups?\t\tregionFid=cl1048&regionType=Biogeographic+regions&\t\tregionName=${this.currentRegionName.split(" ").join("+")}&regionPid=${i}&aazones=groupsZone&aatags=tbody`,r=new DOMParser;this.regionLoading.style.display="block",t({method:"GET",url:n}).then(o=>{let i=r.parseFromString(o,"text/xml").querySelector("#groupsZone").firstChild.data,n=r.parseFromString(i.replace(/(\w+)=([\w-:]+)/g,'$1="$2"'),"text/xml"),s=e.map(e=>new Promise((o,i)=>{let r=[];n.querySelectorAll(`[parent="${e}-row"]`).forEach(t=>{r.push(`"${t.childNodes[1].innerHTML.trim()}"`)});let s=(new Date).getFullYear(),a=s-10,l=encodeURI(r.join(" OR ")).replace(/,/g,"\\u002c"),c=`https://biocache.ala.org.au/ws/occurrences/search?q=cl1048:%22${this.currentRegionName.split(" ").join("%20")}%22&\t\t\t\t\tfq=species_subgroup:(${l})&\t\t\t\t\tfq=occurrence_year:[${a}-01-01T00:00:00Z%20TO%20${s}-12-31T23:59:59Z]&fq=rank:(species%20OR%20subspecies)&\t\t\t\t\tfq=-occurrence_status_s:absent&fq=geospatial_kosher:true&fq=occurrence_year:*&fq=multimedia:%22Image%22&pageSize=500`;t({method:"GET",url:c}).then(t=>o({group:e,result:t}))}));return Promise.all(s)}).then(t=>{if(o||(this.regionDetailBodyAccordion.innerHTML="\n\t\t\t\t<h5>Animal occurrences</h5>\n\t\t\t\t<p>Last 10 years</p>\n\t\t\t\t<hr/>\n\t\t\t\t"),t.forEach(({group:t,result:e})=>{e=JSON.parse(e);let o=new Map;e.occurrences.forEach(t=>{o.has(t.vernacularName)||o.set(t.vernacularName,{specie:t.species||t.raw_species,name:t.vernacularName||t.raw_vernacularName,image:t.smallImageUrl})});let i=o.values();this.regionDetailBodyAccordion.innerHTML+=`<div class="card">\n\t\t\t\t\t<div class="card-header" data-toggle="collapse" href="#${t}" aria-expanded="false"  aria-controls="${t}">\n\t\t\t\t\t\t<h5 class="mb-0">\n\t\t\t\t\t\t\t${t}\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div id="${t}" class="group-detail collapse">\n\t\t\t\t\t\t${o.size?`<ul style="list-style: none;">\n\t\t\t\t\t\t\t\t${function(){let t,e=[];for(;t=i.next().value;)e.push(`<li>${t.specie} | ${t.name} <img src="${t.image}"></li>`);return e.join("")}()}\n\t\t\t\t\t\t\t</ul>`:"0 occurrences of "+t}\n\t\t\t\t\t</div>\n\t\t\t\t</div>`}),!o){this.regionDetailBodyAccordion.innerHTML+='<div id="more-animal-data" class="card">\n\t\t\t\t\t<div class="card-header text-center"><h5 class="mb-0"><b> ... </b></h5> </div></div>\n\t\t\t\t';let t=document.getElementById("more-animal-data");t.addEventListener("click",()=>{t.parentNode.removeChild(t),this.getRegionInfo(["Plants","Crustaceans","Molluscs","Fish"],!0)})}this.regionLoading.style.display="none"}).catch(t=>{console.log(t),console.log("Failed to retrieve region data"),this.handleErrors(t)})},i.prototype.initMap=function(){this.map=L.map("mapid").setView([-25.34449,131.035431],4),this.zoomLevels={start:this.map.getZoom(),end:this.map.getZoom()},L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox.streets",accessToken:"your.mapbox.access.token"}).addTo(this.map);let t={url:"http://nominatim.openstreetmap.org/search?format=json&q={s}",jsonpParam:"json_callback",propertyName:"display_name",propertyLoc:["lat","lon"],marker:L.marker([0,0]),autoCollapse:!0,autoType:!1,minLength:2,zoom:10};L.control.locate({flyTo:!1,keepCurrentZoomLevel:!0}).addTo(this.map),L.easyButton("fa-expand",(t,e)=>{this.fullscreen()}).addTo(this.map);let e=new L.Control.Search(t);this.map.addControl(e)},i.prototype.initCarto=function(){var t=new carto.Client({apiKey:"default_public",username:"yuseldin"}),e=new carto.Client({apiKey:"default_public",username:"yuseldin"}),o=new carto.Client({apiKey:"default_public",username:"yuseldin"});const i=new carto.source.Dataset("\n\t\t\tibra7_regions\n\t\t"),n=new carto.style.CartoCSS("\n\t\t  #layer {\t\t\n\t\t\t::outline {\n\t\t\t  line-width: 2;\n\t\t\t  line-color: #000000;\n\t\t\t  line-opacity: 0.5;\n\t\t\t}\n\t\t\t[zoom<6]{\n\t\t\t\tpolygon-fill: #162945;\n\t\t\t\tpolygon-opacity: 0.5;\n\t\t\t}\n\t\t  }\n\t\t"),r=new carto.layer.Layer(i,n,{featureClickColumns:["reg_name_7"]}),s=new carto.source.Dataset("\n\t\t\tibra7_subregions\n\t\t"),a=new carto.style.CartoCSS("\n\t\t  #layer {\n\t\t\t[zoom >=6]{\n\t\t\tpolygon-fill: #162945;\n\t\t\tpolygon-opacity: 0.5;\n\t\t\t::outline {\n\t\t\t  line-width: 1;\n\t\t\t  line-color: #FFFFFF;\n\t\t\t  line-opacity: 0.5;\n\t\t\t}\n\t\t\t}\n\t\t  }\n\t\t"),l=new carto.layer.Layer(s,a,{featureClickColumns:["sub_name_7","reg_name_7"]});t.addLayers([l,r]),this.bothLayer=t.getLeafletLayer(),this.bothLayer.addTo(this.map),e.addLayer(r),this.regionsLayer=e.getLeafletLayer(),o.addLayer(l),this.subRegionsLayer=o.getLeafletLayer();let c={};r.on("featureClicked",t=>{this.currentRegionName=t.data.reg_name_7,this.detailElement.innerHTML="<strong>Bioregion: </strong>"+this.currentRegionName,void 0!=c&&this.map.removeLayer(c),(c=L.marker(t.latLng).addTo(this.map)).bindPopup(this.showMoreButton).openPopup()}),l.on("featureClicked",t=>{let e=t.data.sub_name_7,o=t.data.reg_name_7;this.detailElement.innerHTML="<strong>Bioregion: </strong>"+o+"</br><strong>Sub-region: </strong>"+e})},i.prototype.initData=function(){t({method:"GET",url:"https://regions.ala.org.au/regions/regionList?type=Biogeographic regions"}).then(t=>{this.alaRegionsMapping=JSON.parse(t).objects})},i.prototype.initEvents=function(){document.getElementById("panel-toggle").addEventListener("click",this.panelOpen.bind(this)),document.getElementById("modal-close-button").addEventListener("click",this.toggleModal.bind(this)),document.getElementById("show-bioregions").addEventListener("click",this.toggleBioregion.bind(this)),document.getElementById("show-subregions").addEventListener("click",this.toggleSubBioregion.bind(this))},i.prototype.fullscreen=function(){window.map=this.map;let t=document.getElementsByClassName("container-flex")[0],e=document.getElementById("mapid"),o=document.getElementsByClassName("information-display")[0],i=document.getElementById("panel-side");this.isFullScreen?(this.isFullScreen=!1,t.style.position="relative",t.style.width="100%",t.style.height="100%",e.style.height="70%",o.style.height="70%",i.style.height="70%"):(this.isFullScreen=!0,t.style.position="fixed",t.style.top=0,t.style.bottom=0,t.style.right=0,t.style.left=0,e.style.height="100%",o.style.height="100%",i.style.height="100%",this.map.invalidateSize()),this.map.setView([-25.34449,131.035431],4)},i.prototype.panelOpen=function(){let t=document.getElementById("panel-toggle"),e=document.getElementById("panel-side");"panel-toggle"==t.className?(t.className="panel-toggle-close",e.style.display="block"):(t.className="panel-toggle",e.style.display="none")},i.prototype.toggleModal=function(){this.regionDetailModal.classList.contains("show")?(this.regionDetailModal.classList.remove("show"),this.regionDetailModal.style.display="none",this.regionDetailBodyAccordion.innerHTML=""):(this.regionDetailModal.classList.add("show"),this.regionDetailModal.style.display="block")},i.prototype.toggleLayer=function(){this.showBioregions&&this.showSubBioregions?(this.regionsLayer.removeFrom(this.map),this.subRegionsLayer.removeFrom(this.map),this.bothLayer.addTo(this.map)):!this.showBioregions&&this.showSubBioregions?(this.regionsLayer.removeFrom(this.map),this.bothLayer.removeFrom(this.map),this.subRegionsLayer.addTo(this.map)):this.showBioregions&&!this.showSubBioregions?(this.bothLayer.removeFrom(this.map),this.subRegionsLayer.removeFrom(this.map),this.regionsLayer.addTo(this.map)):(this.bothLayer.removeFrom(this.map),this.subRegionsLayer.removeFrom(this.map),this.regionsLayer.removeFrom(this.map))},i.prototype.toggleBioregion=function(){this.showBioregions=!this.showBioregions,this.toggleLayer()},i.prototype.toggleSubBioregion=function(){this.showSubBioregions=!this.showSubBioregions,this.toggleLayer()},i.prototype.getBioInfo=function(e){let o="https://biocache.ala.org.au/ws/explore",i=e.lat,n=e.lng,r=this.apiQueryParams.radius;t({method:"GET",url:`${o}/groups.json?`+`lat=${i}&lon=${n}&`+`radius=${r}&fq=geospatial_kosher%3Atrue&facets=species_group&qc=&_=1534039843703`}).then(t=>{t=JSON.parse(t),this.circle&&this.circle.removeFrom(this.map),this.circle=L.circle([i,n],{radius:1e3*r,color:"#89ff77",weight:1}),this.circle.addTo(this.map)})},i.prototype.handleErrors=function(t){},new i})().init()},function(t,e){function o(t){return new Promise((e,o)=>{let i=new XMLHttpRequest;i.open(t.method,t.url),i.send(),i.addEventListener("load",t=>{if(200==t.currentTarget.status)return e(t.currentTarget.response);o(t.currentTarget.response)}),i.addEventListener("error",t=>{o("Error while retriving location information")})})}t.exports.sendRequest=o,t.exports.sendRequests=function(t){return Promise.all(t.map(t=>o(t)))}}]);