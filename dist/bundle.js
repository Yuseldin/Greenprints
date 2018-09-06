!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";(function(){let{sendRequest:t,sendRequests:e}=o(1);function n(){this.isInitialized=!1,this.map,this.defaultStyle={fillColor:"#3388ff"},this.prevLayer,this.apiQueryParams={radius:50},this.detailElement=document.getElementById("subregion-detail"),this.regionDetailModal=document.getElementById("region-detail-modal"),this.regionDetailBody=document.getElementById("region-detail-body"),this.regionDetailTitle=document.getElementById("region-detail-title"),this.regionDetailBodyAccordion=document.getElementById("accordion"),this.regionLoading=document.getElementById("region-loading"),this.showMoreButton=document.createElement("button"),this.showMoreButton.id="show-more-button",this.showMoreButton.classList.add("btn","btn-info"),this.showMoreButton.innerHTML="More",this.showMoreButton.addEventListener("click",()=>{this.toggleModal(),this.getRegionInfo()})}return n.prototype.init=function(){this.isInitialized||(this.initEvents(),this.initMap(),this.initCarto(),this.initData(),this.isInitialized=!0)},n.prototype.getRegionInfo=function(){let e=this.alaRegionsMapping[this.currentRegionName].pid,o=["Mammals","Birds","Amphibians"];this.regionDetailTitle.innerHTML=this.currentRegionName;let n=`https://regions.ala.org.au/region/showGroups?\t\tregionFid=cl1048&regionType=Biogeographic+regions&\t\tregionName=${this.currentRegionName.split(" ").join("+")}&regionPid=${e}&aazones=groupsZone&aatags=tbody`,i=new DOMParser;this.regionLoading.style.display="block",t({method:"GET",url:n}).then(e=>{let n=i.parseFromString(e,"text/xml").querySelector("#groupsZone").firstChild.data,r=i.parseFromString(n.replace(/(\w+)=([\w-:]+)/g,'$1="$2"'),"text/xml"),a=o.map(e=>new Promise((o,n)=>{let i=[];r.querySelectorAll(`[parent="${e}-row"]`).forEach(t=>{i.push(`"${t.childNodes[1].innerHTML.trim()}"`)});let a=(new Date).getFullYear(),s=a-10,l=encodeURI(i.join(" OR ")).replace(/,/g,"\\u002c"),c=`https://biocache.ala.org.au/ws/occurrences/search?q=cl1048:%22${this.currentRegionName.split(" ").join("%20")}%22&\t\t\t\t\tfq=species_subgroup:(${l})&\t\t\t\t\tfq=occurrence_year:[${s}-01-01T00:00:00Z%20TO%20${a}-12-31T23:59:59Z]&fq=rank:(species%20OR%20subspecies)&\t\t\t\t\tfq=-occurrence_status_s:absent&fq=geospatial_kosher:true&fq=occurrence_year:*&fq=multimedia:%22Image%22&pageSize=500`;t({method:"GET",url:c}).then(t=>o({group:e,result:t}))}));return Promise.all(a)}).then(t=>{this.regionDetailBodyAccordion.innerHTML="",t.forEach(({group:t,result:e})=>{e=JSON.parse(e);let o=new Map;e.occurrences.forEach(t=>{o.has(t.vernacularName)||o.set(t.vernacularName,{specie:t.species||t.raw_species,name:t.vernacularName||t.raw_vernacularName,image:t.smallImageUrl})}),console.log(o.size);let n=o.values();this.regionDetailBodyAccordion.innerHTML+=`<div class="card">\n\t\t\t\t\t<div class="card-header" data-toggle="collapse" href="#${t}" aria-expanded="false"  aria-controls="${t}">\n\t\t\t\t\t\t<h5 class="mb-0">\n\t\t\t\t\t\t\t${t}\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div id="${t}" class="collapse">\n\t\t\t\t\t\t${o.size?`<ul>\n\t\t\t\t\t\t\t\t${function(){let t,e=[];for(;t=n.next().value;)e.push(`<li>${t.specie} | ${t.name} <img src="${t.image}"></li>`);return e.join("")}()}\n\t\t\t\t\t\t\t</ul>`:"0 occurrences of "+t}\n\t\t\t\t\t</div>\n\t\t\t\t</div>`}),this.regionDetailBodyAccordion.innerHTML+='<div class="card">\n\t\t\t\t<div class="card-header text-center"><h5 class="mb-0"><b> + </b></h5> </div></div>\n\t\t\t',this.regionLoading.style.display="none"}).catch(t=>{console.log(t),console.log("Failed to retrieve region data"),this.handleErrors(t)})},n.prototype.initMap=function(){this.map=L.map("mapid").setView([-25.34449,131.035431],4),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox.streets",accessToken:"your.mapbox.access.token"}).addTo(this.map);let t={url:"http://nominatim.openstreetmap.org/search?format=json&q={s}",jsonpParam:"json_callback",propertyName:"display_name",propertyLoc:["lat","lon"],marker:L.marker([0,0]),autoCollapse:!0,autoType:!1,minLength:2,zoom:10},e=new L.Control.Search(t);this.map.addControl(e)},n.prototype.initCarto=function(){var t=new carto.Client({apiKey:"default_public",username:"yuseldin"});const e=new carto.source.Dataset("\n\t\t\tibra7_regions\n\t\t"),o=new carto.style.CartoCSS("\n\t\t  #layer {\t\t\n\t\t\t::outline {\n\t\t\t  line-width: 2;\n\t\t\t  line-color: #000000;\n\t\t\t  line-opacity: 0.5;\n\t\t\t}\n\t\t\t[zoom<6]{\n\t\t\t\tpolygon-fill: #162945;\n\t\t\t\tpolygon-opacity: 0.5;\n\t\t\t}\n\t\t  }\n\t\t"),n=new carto.layer.Layer(e,o,{featureClickColumns:["reg_name_7"]}),i=new carto.source.Dataset("\n\t\t\tibra7_subregions\n\t\t"),r=new carto.style.CartoCSS("\n\t\t  #layer {\n\t\t\t[zoom >=6]{\n\t\t\tpolygon-fill: #162945;\n\t\t\tpolygon-opacity: 0.5;\n\t\t\t::outline {\n\t\t\t  line-width: 1;\n\t\t\t  line-color: #FFFFFF;\n\t\t\t  line-opacity: 0.5;\n\t\t\t}\n\t\t\t}\n\t\t  }\n\t\t"),a=new carto.layer.Layer(i,r,{featureClickColumns:["sub_name_7","reg_name_7"]});t.addLayers([a,n]);t.getLeafletLayer().addTo(this.map);let s={};n.on("featureClicked",t=>{this.currentRegionName=t.data.reg_name_7,this.detailElement.innerHTML="<strong>Bioregion: </strong>"+this.currentRegionName,void 0!=s&&this.map.removeLayer(s),(s=L.marker(t.latLng).addTo(this.map)).bindPopup(this.showMoreButton).openPopup()}),a.on("featureClicked",t=>{let e=t.data.sub_name_7,o=t.data.reg_name_7;this.detailElement.innerHTML="<strong>Bioregion: </strong>"+o+"</br><strong>Sub-region: </strong>"+e})},n.prototype.initData=function(){t({method:"GET",url:"https://regions.ala.org.au/regions/regionList?type=Biogeographic regions"}).then(t=>{this.alaRegionsMapping=JSON.parse(t).objects})},n.prototype.initEvents=function(){document.getElementById("fullscreen").addEventListener("click",this.fullscreen.bind(this)),document.getElementById("panel-toggle").addEventListener("click",this.panelOpen.bind(this)),document.getElementById("geolocation").addEventListener("click",this.geolocation.bind(this)),document.getElementById("modal-close-button").addEventListener("click",this.toggleModal.bind(this))},n.prototype.fullscreen=function(){let t=document.getElementsByClassName("panel-container")[0];t.style.position="fixed",t.style.top=0,t.style.bottom=0,t.style.right=0,t.style.left=0;let e=document.getElementById("mapid");e.style.height="100%",e.style.width="100%",document.getElementById("panel-side").style.height="100%",this.map.invalidateSize()},n.prototype.panelOpen=function(){let t=document.getElementById("panel-toggle"),e=document.getElementById("panel-side");"panel-toggle"==t.className?(t.className="panel-toggle-close",e.style.display="block"):(t.className="panel-toggle",e.style.display="none")},n.prototype.toggleModal=function(){this.regionDetailModal.classList.contains("show")?(this.regionDetailModal.classList.remove("show"),this.regionDetailModal.style.display="none",this.regionDetailBodyAccordion.innerHTML=""):(this.regionDetailModal.classList.add("show"),this.regionDetailModal.style.display="block")},n.prototype.showMoreInfo=function(){},n.prototype.geolocation=function(){this.isLocationOn||(/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)?this.gpsLocation():this.ipLocation())},n.prototype.gpsLocation=function(){let t={enableHighAccuracy:!0};"geolocation"in navigator&&(navigator.geolocation.getCurrentPosition(t=>{console.log(t),L.circle([t.coords.latitude,t.coords.longitude],{radius:2e3,color:"#000000",weight:4}).addTo(this.map),this.isLocationOn=!0},this.handleErrors,t),navigator.geolocation.watchPosition(t=>{},this.handleErrors,t))},n.prototype.ipLocation=function(){t({method:"GET",url:"http://api.ipstack.com/check?access_key=c7de56c920dfe9a06b36d80df9c287ac"}).then(t=>{t=JSON.parse(t),L.circle([t.latitude,t.longitude],{radius:2e3,color:"#000000",weight:4}).addTo(this.map)}).catch(t=>{console.log(t),this.handleErrors(t)})},n.prototype.getBioInfo=function(e){let o="https://biocache.ala.org.au/ws/explore",n=e.lat,i=e.lng,r=this.apiQueryParams.radius;t({method:"GET",url:`${o}/groups.json?`+`lat=${n}&lon=${i}&`+`radius=${r}&fq=geospatial_kosher%3Atrue&facets=species_group&qc=&_=1534039843703`}).then(t=>{t=JSON.parse(t),this.circle&&this.circle.removeFrom(this.map),this.circle=L.circle([n,i],{radius:1e3*r,color:"#89ff77",weight:1}),this.circle.addTo(this.map)})},n.prototype.handleErrors=function(t){},new n})().init()},function(t,e){function o(t){return new Promise((e,o)=>{let n=new XMLHttpRequest;n.open(t.method,t.url),n.send(),n.addEventListener("load",t=>{if(200==t.currentTarget.status)return e(t.currentTarget.response);o(t.currentTarget.response)}),n.addEventListener("error",t=>{o("Error while retriving location information")})})}t.exports.sendRequest=o,t.exports.sendRequests=function(t){return Promise.all(t.map(t=>o(t)))}}]);