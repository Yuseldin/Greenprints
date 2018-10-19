!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,n){var o=e.__flags||(e.__flags=Object.create(null));if(3!==arguments.length)return o[t];o[t]=n}},function(e,t,n){e.exports=n(2)},function(e,t,n){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=[];
/*!
 * Chai version
 */t.version="4.1.2",
/*!
 * Assertion Error
 */
t.AssertionError=n(11);
/*!
 * Utils for plugins (not exported)
 */
var r=n(19);t.use=function(e){return~o.indexOf(e)||(e(t,r),o.push(e)),t},
/*!
 * Utility Functions
 */
t.util=r;
/*!
 * Configuration
 */
var s=n(3);t.config=s;
/*!
 * Primary `Assertion` prototype
 */
var i=n(36);t.use(i);
/*!
 * Core Assertions
 */
var a=n(37);t.use(a);
/*!
 * Expect interface
 */
var c=n(38);t.use(c);
/*!
 * Should interface
 */
var u=n(39);t.use(u);
/*!
 * Assert interface
 */
var h=n(40);t.use(h)},function(e,t){e.exports={includeStack:!1,showDiff:!0,truncateThreshold:40,useProxy:!0,proxyExcludedKeys:["then","inspect","toJSON"]}},function(e,t){
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,n){var o=e.__flags||(e.__flags=Object.create(null));for(var r in t.__flags||(t.__flags=Object.create(null)),n=3!==arguments.length||n,o)(n||"object"!==r&&"ssfi"!==r&&"lockSsfi"!==r&&"message"!=r)&&(t.__flags[r]=o[r])}},function(e,t){function n(e){return new Promise((t,n)=>{let o=new XMLHttpRequest;o.open(e.method,e.url),o.send(),o.addEventListener("load",e=>{if(e.currentTarget.status>=200&&e.currentTarget.status<300)return t(e.currentTarget.response);n(e.currentTarget.response)}),o.addEventListener("error",e=>{n(`Error in request/response: ${JSON.stringify(e)}`)})})}e.exports.sendRequest=n,e.exports.sendRequests=function(e){return Promise.all(e.map(e=>n(e)))}},function(e,t,n){var o=n(13),r=n(14),s=n(24),i=n(3);e.exports=function(e,t,n,o){return c({showHidden:t,seen:[],stylize:function(e){return e}},e,void 0===n?2:n)};var a=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&"nodeType"in e&&1===e.nodeType&&"string"==typeof e.nodeName};function c(e,n,y){if(n&&"function"==typeof n.inspect&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var b=n.inspect(y,e);return"string"!=typeof b&&(b=c(e,b,y)),b}var g=function(e,t){switch(typeof t){case"undefined":return e.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string");case"number":return 0===t&&1/t==-1/0?e.stylize("-0","number"):e.stylize(""+t,"number");case"boolean":return e.stylize(""+t,"boolean");case"symbol":return e.stylize(t.toString(),"symbol")}if(null===t)return e.stylize("null","null")}(e,n);if(g)return g;if(a(n)){if("outerHTML"in n)return n.outerHTML;try{if(document.xmlVersion)return(new XMLSerializer).serializeToString(n);var w=document.createElementNS("http://www.w3.org/1999/xhtml","_");w.appendChild(n.cloneNode(!1));var m=w.innerHTML.replace("><",">"+n.innerHTML+"<");return w.innerHTML="",m}catch(e){}}var v,x,O=s(n),E=e.showHidden?r(n):O;if(0===E.length||l(n)&&(1===E.length&&"stack"===E[0]||2===E.length&&"description"===E[0]&&"stack"===E[1])){if("function"==typeof n)return x=(v=o(n))?": "+v:"",e.stylize("[Function"+x+"]","special");if(f(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(d(n))return e.stylize(Date.prototype.toUTCString.call(n),"date");if(l(n))return u(n)}var j,S="",M=!1,N=!1,P=["{","}"];if(function(e){return"object"==typeof e&&/\w+Array]$/.test(p(e))}(n)&&(N=!0,P=["[","]"]),function(e){return Array.isArray(e)||"object"==typeof e&&"[object Array]"===p(e)}(n)&&(M=!0,P=["[","]"]),"function"==typeof n&&(S=" [Function"+(x=(v=o(n))?": "+v:"")+"]"),f(n)&&(S=" "+RegExp.prototype.toString.call(n)),d(n)&&(S=" "+Date.prototype.toUTCString.call(n)),l(n))return u(n);if(0===E.length&&(!M||0==n.length))return P[0]+S+P[1];if(y<0)return f(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");if(e.seen.push(n),M)j=function(e,t,n,o,r){for(var s=[],i=0,a=t.length;i<a;++i)Object.prototype.hasOwnProperty.call(t,String(i))?s.push(h(e,t,n,o,String(i),!0)):s.push("");return r.forEach(function(r){r.match(/^\d+$/)||s.push(h(e,t,n,o,r,!0))}),s}(e,n,y,O,E);else{if(N)return function(e){for(var t="[ ",n=0;n<e.length;++n){if(t.length>=i.truncateThreshold-7){t+="...";break}t+=e[n]+", "}-1!==(t+=" ]").indexOf(",  ]")&&(t=t.replace(",  ]"," ]"));return t}(n);j=E.map(function(t){return h(e,n,y,O,t,M)})}return e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(j,S,P)}function u(e){return"["+Error.prototype.toString.call(e)+"]"}function h(e,t,n,o,r,s){var i,a,u=Object.getOwnPropertyDescriptor(t,r);if(u&&(u.get?a=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(a=e.stylize("[Setter]","special"))),o.indexOf(r)<0&&(i="["+r+"]"),a||(e.seen.indexOf(t[r])<0?(a=c(e,t[r],null===n?null:n-1)).indexOf("\n")>-1&&(a=s?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n")):a=e.stylize("[Circular]","special")),void 0===i){if(s&&r.match(/^\d+$/))return a;(i=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(i=i.substr(1,i.length-2),i=e.stylize(i,"name")):(i=i.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),i=e.stylize(i,"string"))}return i+": "+a}function f(e){return"object"==typeof e&&"[object RegExp]"===p(e)}function d(e){return"object"==typeof e&&"[object Date]"===p(e)}function l(e){return"object"==typeof e&&"[object Error]"===p(e)}function p(e){return Object.prototype.toString.call(e)}},function(e,t,n){var o=n(3);
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */e.exports=function(){return o.useProxy&&"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect}},function(e,t,n){n(3);var o=Object.getOwnPropertyDescriptor(function(){},"length");
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,n){return o.configurable?(Object.defineProperty(e,"length",{get:function(){if(n)throw Error("Invalid Chai property: "+t+'.length. Due to a compatibility issue, "length" cannot directly follow "'+t+'". Use "'+t+'.lengthOf" instead.');throw Error("Invalid Chai property: "+t+'.length. See docs for proper usage of "'+t+'".')}}),e):e}},function(e,t,n){var o=n(3),r=n(0),s=n(14),i=n(7),a=["__flags","__methods","_obj","assert"];function c(e,t,n){if(!n){n=[];for(var o=0;o<=e.length;o++)n[o]=[]}return n[e.length]&&n[e.length][t.length]||(0===e.length||0===t.length?n[e.length][t.length]=Math.max(e.length,t.length):n[e.length][t.length]=Math.min(c(e.slice(0,-1),t,n)+1,c(e,t.slice(0,-1),n)+1,c(e.slice(0,-1),t.slice(0,-1),n)+(e.slice(-1)===t.slice(-1)?0:1))),n[e.length][t.length]}e.exports=function(e,t){return i()?new Proxy(e,{get:function e(n,i){if("string"==typeof i&&-1===o.proxyExcludedKeys.indexOf(i)&&!Reflect.has(n,i)){if(t)throw Error("Invalid Chai property: "+t+"."+i+'. See docs for proper usage of "'+t+'".');var u=s(n).filter(function(e){return!Object.prototype.hasOwnProperty(e)&&-1===a.indexOf(e)}).sort(function(e,t){return c(i,e)-c(i,t)});throw u.length&&c(u[0],i)<4?Error("Invalid Chai property: "+i+'. Did you mean "'+u[0]+'"?'):Error("Invalid Chai property: "+i)}return-1!==a.indexOf(i)||r(n,"lockSsfi")||r(n,"ssfi",e),Reflect.get(n,i)}}):e}},function(e,t,n){!function(t,n){e.exports=n()}(0,function(){"use strict";var e="function"==typeof Promise,t="object"==typeof self?self:global,n="undefined"!=typeof Symbol,o="undefined"!=typeof Map,r="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,i="undefined"!=typeof WeakSet,a="undefined"!=typeof DataView,c=n&&void 0!==Symbol.iterator,u=n&&void 0!==Symbol.toStringTag,h=r&&"function"==typeof Set.prototype.entries,f=o&&"function"==typeof Map.prototype.entries,d=h&&Object.getPrototypeOf((new Set).entries()),l=f&&Object.getPrototypeOf((new Map).entries()),p=c&&"function"==typeof Array.prototype[Symbol.iterator],y=p&&Object.getPrototypeOf([][Symbol.iterator]()),b=c&&"function"==typeof String.prototype[Symbol.iterator],g=b&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,m=-1;return function(n){var c=typeof n;if("object"!==c)return c;if(null===n)return"null";if(n===t)return"global";if(Array.isArray(n)&&(!1===u||!(Symbol.toStringTag in n)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&n===window.location)return"Location";if("object"==typeof window.document&&n===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&n===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&n===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&n instanceof window.HTMLElement){if("BLOCKQUOTE"===n.tagName)return"HTMLQuoteElement";if("TD"===n.tagName)return"HTMLTableDataCellElement";if("TH"===n.tagName)return"HTMLTableHeaderCellElement"}}var h=u&&n[Symbol.toStringTag];if("string"==typeof h)return h;var f=Object.getPrototypeOf(n);return f===RegExp.prototype?"RegExp":f===Date.prototype?"Date":e&&f===Promise.prototype?"Promise":r&&f===Set.prototype?"Set":o&&f===Map.prototype?"Map":i&&f===WeakSet.prototype?"WeakSet":s&&f===WeakMap.prototype?"WeakMap":a&&f===DataView.prototype?"DataView":o&&f===l?"Map Iterator":r&&f===d?"Set Iterator":p&&f===y?"Array Iterator":b&&f===g?"String Iterator":null===f?"Object":Object.prototype.toString.call(n).slice(w,m)}})},function(e,t){
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function n(){var e=[].slice.call(arguments);function t(t,n){Object.keys(n).forEach(function(o){~e.indexOf(o)||(t[o]=n[o])})}return function(){for(var e=[].slice.call(arguments),n=0,o={};n<e.length;n++)t(o,e[n]);return o}}function o(e,t,r){var s=n("name","message","stack","constructor","toJSON")(t||{});for(var i in this.message=e||"Unspecified AssertionError",this.showDiff=!1,s)this[i]=s[i];if(r=r||o,Error.captureStackTrace)Error.captureStackTrace(this,r);else try{throw new Error}catch(e){this.stack=e.stack}}
/*!
 * Inherit from Error.prototype
 */
/*!
 * Primary Exports
 */
e.exports=o,o.prototype=Object.create(Error.prototype),
/*!
 * Statically set name
 */
o.prototype.name="AssertionError",
/*!
 * Ensure correct constructor
 */
o.prototype.constructor=o,o.prototype.toJSON=function(e){var t=n("constructor","toJSON","stack")({name:this.name},this);return!1!==e&&this.stack&&(t.stack=this.stack),t}},function(e,t){
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){return t.length>4?t[4]:e._obj}},function(e,t,n){"use strict";var o=Function.prototype.toString,r=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;e.exports=function(e){if("function"!=typeof e)return null;var t="";if(void 0===Function.prototype.name&&void 0===e.name){var n=o.call(e).match(r);n&&(t=n[1])}else t=e.name;return t}},function(e,t){
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){var t=Object.getOwnPropertyNames(e);function n(e){-1===t.indexOf(e)&&t.push(e)}for(var o=Object.getPrototypeOf(e);null!==o;)Object.getOwnPropertyNames(o).forEach(n),o=Object.getPrototypeOf(o);return t}},function(e,t,n){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(6),r=n(3);e.exports=function(e){var t=o(e),n=Object.prototype.toString.call(e);if(r.truncateThreshold&&t.length>=r.truncateThreshold){if("[object Function]"===n)return e.name&&""!==e.name?"[Function: "+e.name+"]":"[Function]";if("[object Array]"===n)return"[ Array("+e.length+") ]";if("[object Object]"===n){var s=Object.keys(e);return"{ Object ("+(s.length>2?s.splice(0,2).join(", ")+", ...":s.join(", "))+") }"}return t}return t}},function(e,t){
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){return"function"!=typeof Object.getOwnPropertySymbols?[]:Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}},function(e,t,n){
/**
 * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
 *
 * This can be used with JS designed for browsers to improve reuse of code and
 * allow the use of existing libraries.
 *
 * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
 *
 * @author Dan DeFelippi <dan@driverdan.com>
 * @contributor David Ellis <d.f.ellis@ieee.org>
 * @license MIT
 */
var o=n(41),r=n(42).spawn,s=n(43);t.XMLHttpRequest=function(){"use strict";var e,t,i=this,a=n(44),c=n(45),u={},h=!1,f={"User-Agent":"node-XMLHttpRequest",Accept:"*/*"},d={},l={},p=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","content-transfer-encoding","cookie","cookie2","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via"],y=["TRACE","TRACK","CONNECT"],b=!1,g=!1,w={};this.UNSENT=0,this.OPENED=1,this.HEADERS_RECEIVED=2,this.LOADING=3,this.DONE=4,this.readyState=this.UNSENT,this.onreadystatechange=null,this.responseText="",this.responseXML="",this.status=null,this.statusText=null,this.withCredentials=!1;this.open=function(e,t,n,o,r){if(this.abort(),g=!1,!function(e){return e&&-1===y.indexOf(e)}(e))throw new Error("SecurityError: Request method not allowed");u={method:e,url:t.toString(),async:"boolean"!=typeof n||n,user:o||null,password:r||null},m(this.OPENED)},this.setDisableHeaderCheck=function(e){h=e},this.setRequestHeader=function(e,t){if(this.readyState!==this.OPENED)throw new Error("INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN");if(function(e){return h||e&&-1===p.indexOf(e.toLowerCase())}(e)){if(b)throw new Error("INVALID_STATE_ERR: send flag is true");e=l[e.toLowerCase()]||e,l[e.toLowerCase()]=e,d[e]=d[e]?d[e]+", "+t:t}else console.warn('Refused to set unsafe header "'+e+'"')},this.getResponseHeader=function(e){return"string"==typeof e&&this.readyState>this.OPENED&&t&&t.headers&&t.headers[e.toLowerCase()]&&!g?t.headers[e.toLowerCase()]:null},this.getAllResponseHeaders=function(){if(this.readyState<this.HEADERS_RECEIVED||g)return"";var e="";for(var n in t.headers)"set-cookie"!==n&&"set-cookie2"!==n&&(e+=n+": "+t.headers[n]+"\r\n");return e.substr(0,e.length-2)},this.getRequestHeader=function(e){return"string"==typeof e&&l[e.toLowerCase()]?d[l[e.toLowerCase()]]:""},this.send=function(n){if(this.readyState!==this.OPENED)throw new Error("INVALID_STATE_ERR: connection must be opened before send() is called");if(b)throw new Error("INVALID_STATE_ERR: send has already been called");var h,p=!1,y=!1,w=o.parse(u.url);switch(w.protocol){case"https:":p=!0;case"http:":h=w.hostname;break;case"file:":y=!0;break;case void 0:case null:case"":h="localhost";break;default:throw new Error("Protocol not supported.")}if(y){if("GET"!==u.method)throw new Error("XMLHttpRequest: Only GET method is supported");if(u.async)s.readFile(w.pathname,"utf8",function(e,t){e?i.handleError(e):(i.status=200,i.responseText=t,m(i.DONE))});else try{this.responseText=s.readFileSync(w.pathname,"utf8"),this.status=200,m(i.DONE)}catch(e){this.handleError(e)}}else{var v=w.port||(p?443:80),x=w.pathname+(w.search?w.search:"");for(var O in f)l[O.toLowerCase()]||(d[O]=f[O]);if(d.Host=h,p&&443===v||80===v||(d.Host+=":"+w.port),u.user){void 0===u.password&&(u.password="");var E=new Buffer(u.user+":"+u.password);d.Authorization="Basic "+E.toString("base64")}"GET"===u.method||"HEAD"===u.method?n=null:n?(d["Content-Length"]=Buffer.isBuffer(n)?n.length:Buffer.byteLength(n),d["Content-Type"]||(d["Content-Type"]="text/plain;charset=UTF-8")):"POST"===u.method&&(d["Content-Length"]=0);var j={host:h,port:v,path:x,method:u.method,headers:d,agent:!1,withCredentials:i.withCredentials};if(g=!1,u.async){var S=p?c.request:a.request;b=!0,i.dispatchEvent("readystatechange");var M=function(e){i.handleError(e)};e=S(j,function n(r){if(301!==(t=r).statusCode&&302!==t.statusCode&&303!==t.statusCode&&307!==t.statusCode)t.setEncoding("utf8"),m(i.HEADERS_RECEIVED),i.status=t.statusCode,t.on("data",function(e){e&&(i.responseText+=e),b&&m(i.LOADING)}),t.on("end",function(){b&&(m(i.DONE),b=!1)}),t.on("error",function(e){i.handleError(e)});else{u.url=t.headers.location;var s=o.parse(u.url);h=s.hostname;var a={hostname:s.hostname,port:s.port,path:s.path,method:303===t.statusCode?"GET":u.method,headers:d,withCredentials:i.withCredentials};(e=S(a,n).on("error",M)).end()}}).on("error",M),n&&e.write(n),e.end(),i.dispatchEvent("loadstart")}else{var N=".node-xmlhttprequest-content-"+process.pid,P=".node-xmlhttprequest-sync-"+process.pid;s.writeFileSync(P,"","utf8");for(var k="var http = require('http'), https = require('https'), fs = require('fs');var doRequest = http"+(p?"s":"")+".request;var options = "+JSON.stringify(j)+";var responseText = '';var req = doRequest(options, function(response) {response.setEncoding('utf8');response.on('data', function(chunk) {  responseText += chunk;});response.on('end', function() {fs.writeFileSync('"+N+"', JSON.stringify({err: null, data: {statusCode: response.statusCode, headers: response.headers, text: responseText}}), 'utf8');fs.unlinkSync('"+P+"');});response.on('error', function(error) {fs.writeFileSync('"+N+"', JSON.stringify({err: error}), 'utf8');fs.unlinkSync('"+P+"');});}).on('error', function(error) {fs.writeFileSync('"+N+"', JSON.stringify({err: error}), 'utf8');fs.unlinkSync('"+P+"');});"+(n?"req.write('"+JSON.stringify(n).slice(1,-1).replace(/'/g,"\\'")+"');":"")+"req.end();",D=r(process.argv[0],["-e",k]);s.existsSync(P););var A=JSON.parse(s.readFileSync(N,"utf8"));D.stdin.end(),s.unlinkSync(N),A.err?i.handleError(A.err):(t=A.data,i.status=A.data.statusCode,i.responseText=A.data.text,m(i.DONE))}}},this.handleError=function(e){this.status=0,this.statusText=e,this.responseText=e.stack,g=!0,m(this.DONE),this.dispatchEvent("error")},this.abort=function(){e&&(e.abort(),e=null),d=f,this.status=0,this.responseText="",this.responseXML="",g=!0,this.readyState===this.UNSENT||this.readyState===this.OPENED&&!b||this.readyState===this.DONE||(b=!1,m(this.DONE)),this.readyState=this.UNSENT,this.dispatchEvent("abort")},this.addEventListener=function(e,t){e in w||(w[e]=[]),w[e].push(t)},this.removeEventListener=function(e,t){e in w&&(w[e]=w[e].filter(function(e){return e!==t}))},this.dispatchEvent=function(e){if("function"==typeof i["on"+e]&&i["on"+e](),e in w)for(var t=0,n=w[e].length;t<n;t++)w[e][t].call(i)};var m=function(e){e!=i.LOADING&&i.readyState===e||(i.readyState=e,(u.async||i.readyState<i.OPENED||i.readyState===i.DONE)&&i.dispatchEvent("readystatechange"),i.readyState!==i.DONE||g||(i.dispatchEvent("load"),i.dispatchEvent("loadend")))}}},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(17),s=n(5);describe("integration",function(){global.XMLHttpRequest=r.XMLHttpRequest,describe("utils",function(){let e="http://www.google.com";describe("sendRequest",function(){it("Should resolve with response",function(){let t={method:"GET",url:e};s.sendRequest(t).then(e=>{Object(o.expect)(e).to.not.be.undefined,Object(o.expect)("string"==typeof e).to.be.true})}),it("Should reject if request is unsuccessful",function(){let e={method:"GET",url:"http://www.vevwevw.c"};s.sendRequest(e).then(e=>{Object(o.expect)(!0).to.be.false},e=>{Object(o.expect)(!0).to.be.true})})}),describe("Sendrequests",function(){it("Should resolve if requests succeeds",function(){let t=[{method:"GET",url:e},{method:"GET",url:e},{method:"GET",url:e}];s.sendRequests(t).then(e=>{Object(o.expect)(e.length).to.equal(t.length)},e=>{Object(o.expect)(!0).to.be.false})}),it("Should reject if request fails",function(){let t=[{method:"GET",url:"http://www.vevwevw.c"},{method:"GET",url:e},{method:"GET",url:e}];s.sendRequests(t).then(e=>{Object(o.expect)(!0).to.be.false},e=>{Object(o.expect)(!0).to.be.true})})})})})},function(e,t,n){
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Dependencies that are used for multiple exports are required here only once
 */
var o=n(20);
/*!
 * test utility
 */t.test=n(21),
/*!
 * type utility
 */
t.type=n(10),
/*!
 * expectTypes utility
 */
t.expectTypes=n(22),
/*!
 * message utility
 */
t.getMessage=n(23),
/*!
 * actual utility
 */
t.getActual=n(12),
/*!
 * Inspect util
 */
t.inspect=n(6),
/*!
 * Object Display util
 */
t.objDisplay=n(15),
/*!
 * Flag utility
 */
t.flag=n(0),
/*!
 * Flag transferring utility
 */
t.transferFlags=n(4),
/*!
 * Deep equal utility
 */
t.eql=n(25),
/*!
 * Deep path info
 */
t.getPathInfo=o.getPathInfo,
/*!
 * Check if a property exists
 */
t.hasProperty=o.hasProperty,
/*!
 * Function name
 */
t.getName=n(13),
/*!
 * add Property
 */
t.addProperty=n(26),
/*!
 * add Method
 */
t.addMethod=n(27),
/*!
 * overwrite Property
 */
t.overwriteProperty=n(28),
/*!
 * overwrite Method
 */
t.overwriteMethod=n(29),
/*!
 * Add a chainable method
 */
t.addChainableMethod=n(30),
/*!
 * Overwrite chainable method
 */
t.overwriteChainableMethod=n(31),
/*!
 * Compare by inspect method
 */
t.compareByInspect=n(32),
/*!
 * Get own enumerable property symbols method
 */
t.getOwnEnumerablePropertySymbols=n(16),
/*!
 * Get own enumerable properties method
 */
t.getOwnEnumerableProperties=n(33),
/*!
 * Checks error against a given set of criteria
 */
t.checkError=n(34),
/*!
 * Proxify util
 */
t.proxify=n(9),
/*!
 * addLengthGuard util
 */
t.addLengthGuard=n(8),
/*!
 * isProxyEnabled helper
 */
t.isProxyEnabled=n(7),
/*!
 * isNaN method
 */
t.isNaN=n(35)},function(e,t,n){"use strict";function o(e,t){return void 0!==e&&null!==e&&t in Object(e)}function r(e){return e.replace(/([^\\])\[/g,"$1.[").match(/(\\\.|[^.]+?)+/g).map(function(e){var t=/^\[(\d+)\]$/.exec(e);return t?{i:parseFloat(t[1])}:{p:e.replace(/\\([.\[\]])/g,"$1")}})}function s(e,t,n){var o=e,r=null;n=void 0===n?t.length:n;for(var s=0;s<n;s++){var i=t[s];o&&(o=void 0===i.p?o[i.i]:o[i.p],s===n-1&&(r=o))}return r}function i(e,t){var n=r(t),i=n[n.length-1],a={parent:n.length>1?s(e,n,n.length-1):e,name:i.p||i.i,value:s(e,n)};return a.exists=o(a.parent,a.name),a}e.exports={hasProperty:o,getPathInfo:i,getPathValue:function(e,t){return i(e,t).value},setPathValue:function(e,t,n){return function(e,t,n){for(var o=e,r=n.length,s=null,i=0;i<r;i++){var a=null,c=null;if(s=n[i],i===r-1)o[a=void 0===s.p?s.i:s.p]=t;else if(void 0!==s.p&&o[s.p])o=o[s.p];else if(void 0!==s.i&&o[s.i])o=o[s.i];else{var u=n[i+1];a=void 0===s.p?s.i:s.p,c=void 0===u.p?[]:{},o[a]=c,o=o[a]}}}(e,n,r(t)),e}}},function(e,t,n){
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(0);e.exports=function(e,t){var n=o(e,"negate"),r=t[0];return n?!r:r}},function(e,t,n){
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(11),r=n(0),s=n(10);e.exports=function(e,t){var n=r(e,"message"),i=r(e,"ssfi");n=n?n+": ":"",e=r(e,"object"),(t=t.map(function(e){return e.toLowerCase()})).sort();var a=t.map(function(e,n){var o=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an":"a";return(t.length>1&&n===t.length-1?"or ":"")+o+" "+e}).join(", "),c=s(e).toLowerCase();if(!t.some(function(e){return c===e}))throw new o(n+"object tested must be "+a+", but "+c+" given",void 0,i)}},function(e,t,n){
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(0),r=n(12),s=(n(6),n(15));e.exports=function(e,t){var n=o(e,"negate"),i=o(e,"object"),a=t[3],c=r(e,t),u=n?t[2]:t[1],h=o(e,"message");return"function"==typeof u&&(u=u()),u=(u=u||"").replace(/#\{this\}/g,function(){return s(i)}).replace(/#\{act\}/g,function(){return s(c)}).replace(/#\{exp\}/g,function(){return s(a)}),h?h+": "+u:u}},function(e,t){
/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){var t=[];for(var n in e)t.push(n);return t}},function(e,t,n){"use strict";
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */var o=n(10);function r(){this._key="chai/deep-eql__"+Math.random()+Date.now()}r.prototype={get:function(e){return e[this._key]},set:function(e,t){Object.isExtensible(e)&&Object.defineProperty(e,this._key,{value:t,configurable:!0})}};var s="function"==typeof WeakMap?WeakMap:r;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function i(e,t,n){if(!n||b(e)||b(t))return null;var o=n.get(e);if(o){var r=o.get(t);if("boolean"==typeof r)return r}return null}
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function a(e,t,n,o){if(n&&!b(e)&&!b(t)){var r=n.get(e);r?r.set(t,o):((r=new s).set(t,o),n.set(e,r))}}
/*!
 * Primary Export
 */function c(e,t,n){if(n&&n.comparator)return h(e,t,n);var o=u(e,t);return null!==o?o:h(e,t,n)}function u(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t||!b(e)&&!b(t)&&null}
/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function h(e,t,n){(n=n||{}).memoize=!1!==n.memoize&&(n.memoize||new s);var r=n&&n.comparator,h=i(e,t,n.memoize);if(null!==h)return h;var b=i(t,e,n.memoize);if(null!==b)return b;if(r){var g=r(e,t);if(!1===g||!0===g)return a(e,t,n.memoize,g),g;var w=u(e,t);if(null!==w)return w}var m=o(e);if(m!==o(t))return a(e,t,n.memoize,!1),!1;a(e,t,n.memoize,!0);var v=function(e,t,n,o){switch(n){case"String":case"Number":case"Boolean":case"Date":return c(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":case"Error":return e===t;case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return d(e,t,o);case"RegExp":
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
return function(e,t){return e.toString()===t.toString()}
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */(e,t);case"Generator":
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
return function(e,t,n){return d(p(e),p(t),n)}
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */(e,t,o);case"DataView":return d(new Uint8Array(e.buffer),new Uint8Array(t.buffer),o);case"ArrayBuffer":return d(new Uint8Array(e),new Uint8Array(t),o);case"Set":case"Map":return f(e,t,o);default:
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
return function(e,t,n){var o=y(e),r=y(t);if(o.length&&o.length===r.length)return o.sort(),r.sort(),!1!==d(o,r)&&
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function(e,t,n,o){var r=n.length;if(0===r)return!0;for(var s=0;s<r;s+=1)if(!1===c(e[n[s]],t[n[s]],o))return!1;return!0}(e,t,o,n);var s=l(e),i=l(t);if(s.length&&s.length===i.length)return s.sort(),i.sort(),d(s,i,n);if(0===o.length&&0===s.length&&0===r.length&&0===i.length)return!0;return!1}
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */(e,t,o)}}(e,t,m,n);return a(e,t,n.memoize,v),v}function f(e,t,n){if(e.size!==t.size)return!1;if(0===e.size)return!0;var o=[],r=[];return e.forEach(function(e,t){o.push([e,t])}),t.forEach(function(e,t){r.push([e,t])}),d(o.sort(),r.sort(),n)}
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function d(e,t,n){var o=e.length;if(o!==t.length)return!1;if(0===o)return!0;for(var r=-1;++r<o;)if(!1===c(e[r],t[r],n))return!1;return!0}
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function l(e){if(function(e){return"undefined"!=typeof Symbol&&"object"==typeof e&&void 0!==Symbol.iterator&&"function"==typeof e[Symbol.iterator]}(e))try{return p(e[Symbol.iterator]())}catch(e){return[]}return[]}
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function p(e){for(var t=e.next(),n=[t.value];!1===t.done;)t=e.next(),n.push(t.value);return n}
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function y(e){var t=[];for(var n in e)t.push(n);return t}function b(e){return null===e||"object"!=typeof e}e.exports=c,e.exports.MemoizeMap=s},function(e,t,n){
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(2),r=n(0),s=n(7),i=n(4);e.exports=function(e,t,n){n=void 0===n?function(){}:n,Object.defineProperty(e,t,{get:function e(){s()||r(this,"lockSsfi")||r(this,"ssfi",e);var t=n.call(this);if(void 0!==t)return t;var a=new o.Assertion;return i(this,a),a},configurable:!0})}},function(e,t,n){
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(8),r=n(2),s=n(0),i=n(9),a=n(4);e.exports=function(e,t,n){var c=function(){s(this,"lockSsfi")||s(this,"ssfi",c);var e=n.apply(this,arguments);if(void 0!==e)return e;var t=new r.Assertion;return a(this,t),t};o(c,t,!1),e[t]=i(c,t)}},function(e,t,n){
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(2),r=n(0),s=n(7),i=n(4);e.exports=function(e,t,n){var a=Object.getOwnPropertyDescriptor(e,t),c=function(){};a&&"function"==typeof a.get&&(c=a.get),Object.defineProperty(e,t,{get:function e(){s()||r(this,"lockSsfi")||r(this,"ssfi",e);var t=r(this,"lockSsfi");r(this,"lockSsfi",!0);var a=n(c).call(this);if(r(this,"lockSsfi",t),void 0!==a)return a;var u=new o.Assertion;return i(this,u),u},configurable:!0})}},function(e,t,n){
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(8),r=n(2),s=n(0),i=n(9),a=n(4);e.exports=function(e,t,n){var c=e[t],u=function(){throw new Error(t+" is not a function")};c&&"function"==typeof c&&(u=c);var h=function(){s(this,"lockSsfi")||s(this,"ssfi",h);var e=s(this,"lockSsfi");s(this,"lockSsfi",!0);var t=n(u).apply(this,arguments);if(s(this,"lockSsfi",e),void 0!==t)return t;var o=new r.Assertion;return a(this,o),o};o(h,t,!1),e[t]=i(h,t)}},function(e,t,n){
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var o=n(8),r=n(2),s=n(0),i=n(9),a=n(4),c="function"==typeof Object.setPrototypeOf,u=function(){},h=Object.getOwnPropertyNames(u).filter(function(e){var t=Object.getOwnPropertyDescriptor(u,e);return"object"!=typeof t||!t.configurable}),f=Function.prototype.call,d=Function.prototype.apply;e.exports=function(e,t,n,u){"function"!=typeof u&&(u=function(){});var l={method:n,chainingBehavior:u};e.__methods||(e.__methods={}),e.__methods[t]=l,Object.defineProperty(e,t,{get:function(){l.chainingBehavior.call(this);var n=function(){s(this,"lockSsfi")||s(this,"ssfi",n);var e=l.method.apply(this,arguments);if(void 0!==e)return e;var t=new r.Assertion;return a(this,t),t};if(o(n,t,!0),c){var u=Object.create(this);u.call=f,u.apply=d,Object.setPrototypeOf(n,u)}else{Object.getOwnPropertyNames(e).forEach(function(t){if(-1===h.indexOf(t)){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,o)}})}return a(this,n),i(n)},configurable:!0})}},function(e,t,n){
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(2),r=n(4);e.exports=function(e,t,n,s){var i=e.__methods[t],a=i.chainingBehavior;i.chainingBehavior=function(){var e=s(a).call(this);if(void 0!==e)return e;var t=new o.Assertion;return r(this,t),t};var c=i.method;i.method=function(){var e=n(c).apply(this,arguments);if(void 0!==e)return e;var t=new o.Assertion;return r(this,t),t}}},function(e,t,n){
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(6);e.exports=function(e,t){return o(e)<o(t)?-1:1}},function(e,t,n){
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(16);e.exports=function(e){return Object.keys(e).concat(o(e))}},function(e,t,n){"use strict";var o=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;function r(e){var t="";if(void 0===e.name){var n=String(e).match(o);n&&(t=n[1])}else t=e.name;return t}e.exports={compatibleInstance:function(e,t){return t instanceof Error&&e===t},compatibleConstructor:function(e,t){return t instanceof Error?e.constructor===t.constructor||e instanceof t.constructor:(t.prototype instanceof Error||t===Error)&&(e.constructor===t||e instanceof t)},compatibleMessage:function(e,t){var n="string"==typeof e?e:e.message;return t instanceof RegExp?t.test(n):"string"==typeof t&&-1!==n.indexOf(t)},getMessage:function(e){var t="";return e&&e.message?t=e.message:"string"==typeof e&&(t=e),t},getConstructorName:function(e){var t=e;return e instanceof Error?t=r(e.constructor):"function"==typeof e&&(t=r(e).trim()||r(new e)),t}}},function(e,t){e.exports=Number.isNaN||
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
function(e){return e!=e}},function(e,t,n){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(3);e.exports=function(e,t){
/*!
   * Module dependencies.
   */
var n=e.AssertionError,r=t.flag;
/*!
   * Module export.
   */
/*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */
function s(e,n,o,i){return r(this,"ssfi",o||s),r(this,"lockSsfi",i),r(this,"object",e),r(this,"message",n),t.proxify(this)}e.Assertion=s,Object.defineProperty(s,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),o.includeStack},set:function(e){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),o.includeStack=e}}),Object.defineProperty(s,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),o.showDiff},set:function(e){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),o.showDiff=e}}),s.addProperty=function(e,n){t.addProperty(this.prototype,e,n)},s.addMethod=function(e,n){t.addMethod(this.prototype,e,n)},s.addChainableMethod=function(e,n,o){t.addChainableMethod(this.prototype,e,n,o)},s.overwriteProperty=function(e,n){t.overwriteProperty(this.prototype,e,n)},s.overwriteMethod=function(e,n){t.overwriteMethod(this.prototype,e,n)},s.overwriteChainableMethod=function(e,n,o){t.overwriteChainableMethod(this.prototype,e,n,o)},s.prototype.assert=function(e,s,i,a,c,u){var h=t.test(this,arguments);if(!1!==u&&(u=!0),void 0===a&&void 0===c&&(u=!1),!0!==o.showDiff&&(u=!1),!h){s=t.getMessage(this,arguments);var f=t.getActual(this,arguments);throw new n(s,{actual:f,expected:a,showDiff:u},o.includeStack?this.assert:r(this,"ssfi"))}},
/*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
Object.defineProperty(s.prototype,"_obj",{get:function(){return r(this,"object")},set:function(e){r(this,"object",e)}})}},function(e,t){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){var n=e.Assertion,o=e.AssertionError,r=t.flag;function s(e,n){n&&r(this,"message",n),e=e.toLowerCase();var o=r(this,"object"),s=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an ":"a ";this.assert(e===t.type(o).toLowerCase(),"expected #{this} to be "+s+e,"expected #{this} not to be "+s+e)}function i(e,n){return t.isNaN(e)&&t.isNaN(n)||e===n}function a(){r(this,"contains",!0)}function c(e,s){s&&r(this,"message",s);var a=r(this,"object"),c=t.type(a).toLowerCase(),u=r(this,"message"),h=r(this,"negate"),f=r(this,"ssfi"),d=r(this,"deep"),l=d?"deep ":"";u=u?u+": ":"";var p=!1;switch(c){case"string":p=-1!==a.indexOf(e);break;case"weakset":if(d)throw new o(u+"unable to use .deep.include with WeakSet",void 0,f);p=a.has(e);break;case"map":var y=d?t.eql:i;a.forEach(function(t){p=p||y(t,e)});break;case"set":d?a.forEach(function(n){p=p||t.eql(n,e)}):p=a.has(e);break;case"array":p=d?a.some(function(n){return t.eql(n,e)}):-1!==a.indexOf(e);break;default:if(e!==Object(e))throw new o(u+"object tested must be an array, a map, an object, a set, a string, or a weakset, but "+c+" given",void 0,f);var b=Object.keys(e),g=null,w=0;if(b.forEach(function(s){var i=new n(a);if(t.transferFlags(this,i,!0),r(i,"lockSsfi",!0),h&&1!==b.length)try{i.property(s,e[s])}catch(e){if(!t.checkError.compatibleConstructor(e,o))throw e;null===g&&(g=e),w++}else i.property(s,e[s])},this),h&&b.length>1&&w===b.length)throw g;return}this.assert(p,"expected #{this} to "+l+"include "+t.inspect(e),"expected #{this} to not "+l+"include "+t.inspect(e))}function u(){var e=r(this,"object"),n=t.type(e);this.assert("Arguments"===n,"expected #{this} to be arguments but got "+n,"expected #{this} to not be arguments")}function h(e,t){t&&r(this,"message",t);var n=r(this,"object");if(r(this,"deep"))return this.eql(e);this.assert(e===n,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",e,this._obj,!0)}function f(e,n){n&&r(this,"message",n),this.assert(t.eql(e,r(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",e,this._obj,!0)}function d(e,s){s&&r(this,"message",s);var i=r(this,"object"),a=r(this,"doLength"),c=r(this,"message"),u=c?c+": ":"",h=r(this,"ssfi"),f=t.type(i).toLowerCase(),d=t.type(e).toLowerCase(),l=!0;if(a&&new n(i,c,h,!0).to.have.property("length"),a||"date"!==f||"date"===d)if("number"===d||!a&&"number"!==f)if(a||"date"===f||"number"===f)l=!1;else{errorMessage=u+"expected "+("string"===f?"'"+i+"'":i)+" to be a number or a date"}else errorMessage=u+"the argument to above must be a number";else errorMessage=u+"the argument to above must be a date";if(l)throw new o(errorMessage,void 0,h);if(a){var p=i.length;this.assert(p>e,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",e,p)}else this.assert(i>e,"expected #{this} to be above #{exp}","expected #{this} to be at most #{exp}",e)}function l(e,s){s&&r(this,"message",s);var i=r(this,"object"),a=r(this,"doLength"),c=r(this,"message"),u=c?c+": ":"",h=r(this,"ssfi"),f=t.type(i).toLowerCase(),d=t.type(e).toLowerCase(),l=!0;if(a&&new n(i,c,h,!0).to.have.property("length"),a||"date"!==f||"date"===d)if("number"===d||!a&&"number"!==f)if(a||"date"===f||"number"===f)l=!1;else{errorMessage=u+"expected "+("string"===f?"'"+i+"'":i)+" to be a number or a date"}else errorMessage=u+"the argument to least must be a number";else errorMessage=u+"the argument to least must be a date";if(l)throw new o(errorMessage,void 0,h);if(a){var p=i.length;this.assert(p>=e,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",e,p)}else this.assert(i>=e,"expected #{this} to be at least #{exp}","expected #{this} to be below #{exp}",e)}function p(e,s){s&&r(this,"message",s);var i=r(this,"object"),a=r(this,"doLength"),c=r(this,"message"),u=c?c+": ":"",h=r(this,"ssfi"),f=t.type(i).toLowerCase(),d=t.type(e).toLowerCase(),l=!0;if(a&&new n(i,c,h,!0).to.have.property("length"),a||"date"!==f||"date"===d)if("number"===d||!a&&"number"!==f)if(a||"date"===f||"number"===f)l=!1;else{errorMessage=u+"expected "+("string"===f?"'"+i+"'":i)+" to be a number or a date"}else errorMessage=u+"the argument to below must be a number";else errorMessage=u+"the argument to below must be a date";if(l)throw new o(errorMessage,void 0,h);if(a){var p=i.length;this.assert(p<e,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",e,p)}else this.assert(i<e,"expected #{this} to be below #{exp}","expected #{this} to be at least #{exp}",e)}function y(e,s){s&&r(this,"message",s);var i=r(this,"object"),a=r(this,"doLength"),c=r(this,"message"),u=c?c+": ":"",h=r(this,"ssfi"),f=t.type(i).toLowerCase(),d=t.type(e).toLowerCase(),l=!0;if(a&&new n(i,c,h,!0).to.have.property("length"),a||"date"!==f||"date"===d)if("number"===d||!a&&"number"!==f)if(a||"date"===f||"number"===f)l=!1;else{errorMessage=u+"expected "+("string"===f?"'"+i+"'":i)+" to be a number or a date"}else errorMessage=u+"the argument to most must be a number";else errorMessage=u+"the argument to most must be a date";if(l)throw new o(errorMessage,void 0,h);if(a){var p=i.length;this.assert(p<=e,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",e,p)}else this.assert(i<=e,"expected #{this} to be at most #{exp}","expected #{this} to be above #{exp}",e)}function b(e,n){n&&r(this,"message",n);var s=r(this,"object"),i=r(this,"ssfi"),a=r(this,"message");try{var c=s instanceof e}catch(n){if(n instanceof TypeError)throw new o((a=a?a+": ":"")+"The instanceof assertion needs a constructor but "+t.type(e)+" was given.",void 0,i);throw n}var u=t.getName(e);null===u&&(u="an unnamed constructor"),this.assert(c,"expected #{this} to be an instance of "+u,"expected #{this} to not be an instance of "+u)}function g(e,n,s){s&&r(this,"message",s);var i=r(this,"nested"),a=r(this,"own"),c=r(this,"message"),u=r(this,"object"),h=r(this,"ssfi");if(i&&a)throw new o((c=c?c+": ":"")+'The "nested" and "own" flags cannot be combined.',void 0,h);if(null===u||void 0===u)throw new o((c=c?c+": ":"")+"Target cannot be null or undefined.",void 0,h);var f,d=r(this,"deep"),l=r(this,"negate"),p=i?t.getPathInfo(u,e):null,y=i?p.value:u[e],b="";d&&(b+="deep "),a&&(b+="own "),i&&(b+="nested "),b+="property ",f=a?Object.prototype.hasOwnProperty.call(u,e):i?p.exists:t.hasProperty(u,e),l&&1!==arguments.length||this.assert(f,"expected #{this} to have "+b+t.inspect(e),"expected #{this} to not have "+b+t.inspect(e)),arguments.length>1&&this.assert(f&&(d?t.eql(n,y):n===y),"expected #{this} to have "+b+t.inspect(e)+" of #{exp}, but got #{act}","expected #{this} to not have "+b+t.inspect(e)+" of #{act}",n,y),r(this,"object",y)}function w(e,t,n){r(this,"own",!0),g.apply(this,arguments)}function m(e,n,o){"string"==typeof n&&(o=n,n=null),o&&r(this,"message",o);var s=r(this,"object"),i=Object.getOwnPropertyDescriptor(Object(s),e);i&&n?this.assert(t.eql(n,i),"expected the own property descriptor for "+t.inspect(e)+" on #{this} to match "+t.inspect(n)+", got "+t.inspect(i),"expected the own property descriptor for "+t.inspect(e)+" on #{this} to not match "+t.inspect(n),n,i,!0):this.assert(i,"expected #{this} to have an own property descriptor for "+t.inspect(e),"expected #{this} to not have an own property descriptor for "+t.inspect(e)),r(this,"object",i)}function v(){r(this,"doLength",!0)}function x(e,t){t&&r(this,"message",t);var o=r(this,"object"),s=r(this,"message"),i=r(this,"ssfi");new n(o,s,i,!0).to.have.property("length");var a=o.length;this.assert(a==e,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",e,a)}function O(e,t){t&&r(this,"message",t);var n=r(this,"object");this.assert(e.exec(n),"expected #{this} to match "+e,"expected #{this} not to match "+e)}function E(e){var n,s=r(this,"object"),i=t.type(s),a=t.type(e),c=r(this,"ssfi"),u=r(this,"deep"),h="",f=!0,d=r(this,"message"),l=(d=d?d+": ":"")+"when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";if("Map"===i||"Set"===i)h=u?"deeply ":"",p=[],s.forEach(function(e,t){p.push(t)}),"Array"!==a&&(e=Array.prototype.slice.call(arguments));else{switch(p=t.getOwnEnumerableProperties(s),a){case"Array":if(arguments.length>1)throw new o(l,void 0,c);break;case"Object":if(arguments.length>1)throw new o(l,void 0,c);e=Object.keys(e);break;default:e=Array.prototype.slice.call(arguments)}e=e.map(function(e){return"symbol"==typeof e?e:String(e)})}if(!e.length)throw new o(d+"keys required",void 0,c);var p,y=e.length,b=r(this,"any"),g=r(this,"all"),w=e;if(b||g||(g=!0),b&&(f=w.some(function(e){return p.some(function(n){return u?t.eql(e,n):e===n})})),g&&(f=w.every(function(e){return p.some(function(n){return u?t.eql(e,n):e===n})}),r(this,"contains")||(f=f&&e.length==p.length)),y>1){var m=(e=e.map(function(e){return t.inspect(e)})).pop();g&&(n=e.join(", ")+", and "+m),b&&(n=e.join(", ")+", or "+m)}else n=t.inspect(e[0]);n=(y>1?"keys ":"key ")+n,n=(r(this,"contains")?"contain ":"have ")+n,this.assert(f,"expected #{this} to "+h+n,"expected #{this} to not "+h+n,w.slice(0).sort(t.compareByInspect),p.sort(t.compareByInspect),!0)}function j(e,o,s){s&&r(this,"message",s);var i,a=r(this,"object"),c=r(this,"ssfi"),u=r(this,"message"),h=r(this,"negate")||!1;new n(a,u,c,!0).is.a("function"),(e instanceof RegExp||"string"==typeof e)&&(o=e,e=null);try{a()}catch(e){i=e}var f=void 0===e&&void 0===o,d=Boolean(e&&o),l=!1,p=!1;if(f||!f&&!h){var y="an error";e instanceof Error?y="#{exp}":e&&(y=t.checkError.getConstructorName(e)),this.assert(i,"expected #{this} to throw "+y,"expected #{this} to not throw an error but #{act} was thrown",e&&e.toString(),i instanceof Error?i.toString():"string"==typeof i?i:i&&t.checkError.getConstructorName(i))}if(e&&i){if(e instanceof Error)t.checkError.compatibleInstance(i,e)===h&&(d&&h?l=!0:this.assert(h,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(i&&!h?" but #{act} was thrown":""),e.toString(),i.toString()));t.checkError.compatibleConstructor(i,e)===h&&(d&&h?l=!0:this.assert(h,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(i?" but #{act} was thrown":""),e instanceof Error?e.toString():e&&t.checkError.getConstructorName(e),i instanceof Error?i.toString():i&&t.checkError.getConstructorName(i)))}if(i&&void 0!==o&&null!==o){var b="including";o instanceof RegExp&&(b="matching"),t.checkError.compatibleMessage(i,o)===h&&(d&&h?p=!0:this.assert(h,"expected #{this} to throw error "+b+" #{exp} but got #{act}","expected #{this} to throw error not "+b+" #{exp}",o,t.checkError.getMessage(i)))}l&&p&&this.assert(h,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(i?" but #{act} was thrown":""),e instanceof Error?e.toString():e&&t.checkError.getConstructorName(e),i instanceof Error?i.toString():i&&t.checkError.getConstructorName(i)),r(this,"object",i)}function S(e,n){n&&r(this,"message",n);var o=r(this,"object"),s=r(this,"itself"),i="function"!=typeof o||s?o[e]:o.prototype[e];this.assert("function"==typeof i,"expected #{this} to respond to "+t.inspect(e),"expected #{this} to not respond to "+t.inspect(e))}function M(e,n){n&&r(this,"message",n);var o=e(r(this,"object"));this.assert(o,"expected #{this} to satisfy "+t.objDisplay(e),"expected #{this} to not satisfy"+t.objDisplay(e),!r(this,"negate"),o)}function N(e,t,s){s&&r(this,"message",s);var i=r(this,"object"),a=r(this,"message"),c=r(this,"ssfi");if(new n(i,a,c,!0).is.a("number"),"number"!=typeof e||"number"!=typeof t)throw new o((a=a?a+": ":"")+"the arguments to closeTo or approximately must be numbers",void 0,c);this.assert(Math.abs(i-e)<=t,"expected #{this} to be close to "+e+" +/- "+t,"expected #{this} not to be close to "+e+" +/- "+t)}function P(e,t,o){o&&r(this,"message",o);var s,i=r(this,"object"),a=r(this,"message"),c=r(this,"ssfi");new n(i,a,c,!0).is.a("function"),t?(new n(e,a,c,!0).to.have.property(t),s=e[t]):(new n(e,a,c,!0).is.a("function"),s=e()),i();var u=void 0===t||null===t?e():e[t],h=void 0===t||null===t?s:"."+t;r(this,"deltaMsgObj",h),r(this,"initialDeltaValue",s),r(this,"finalDeltaValue",u),r(this,"deltaBehavior","change"),r(this,"realDelta",u!==s),this.assert(s!==u,"expected "+h+" to change","expected "+h+" to not change")}function k(e,t,o){o&&r(this,"message",o);var s,i=r(this,"object"),a=r(this,"message"),c=r(this,"ssfi");new n(i,a,c,!0).is.a("function"),t?(new n(e,a,c,!0).to.have.property(t),s=e[t]):(new n(e,a,c,!0).is.a("function"),s=e()),new n(s,a,c,!0).is.a("number"),i();var u=void 0===t||null===t?e():e[t],h=void 0===t||null===t?s:"."+t;r(this,"deltaMsgObj",h),r(this,"initialDeltaValue",s),r(this,"finalDeltaValue",u),r(this,"deltaBehavior","increase"),r(this,"realDelta",u-s),this.assert(u-s>0,"expected "+h+" to increase","expected "+h+" to not increase")}function D(e,t,o){o&&r(this,"message",o);var s,i=r(this,"object"),a=r(this,"message"),c=r(this,"ssfi");new n(i,a,c,!0).is.a("function"),t?(new n(e,a,c,!0).to.have.property(t),s=e[t]):(new n(e,a,c,!0).is.a("function"),s=e()),new n(s,a,c,!0).is.a("number"),i();var u=void 0===t||null===t?e():e[t],h=void 0===t||null===t?s:"."+t;r(this,"deltaMsgObj",h),r(this,"initialDeltaValue",s),r(this,"finalDeltaValue",u),r(this,"deltaBehavior","decrease"),r(this,"realDelta",s-u),this.assert(u-s<0,"expected "+h+" to decrease","expected "+h+" to not decrease")}["to","be","been","is","and","has","have","with","that","which","at","of","same","but","does"].forEach(function(e){n.addProperty(e)}),n.addProperty("not",function(){r(this,"negate",!0)}),n.addProperty("deep",function(){r(this,"deep",!0)}),n.addProperty("nested",function(){r(this,"nested",!0)}),n.addProperty("own",function(){r(this,"own",!0)}),n.addProperty("ordered",function(){r(this,"ordered",!0)}),n.addProperty("any",function(){r(this,"any",!0),r(this,"all",!1)}),n.addProperty("all",function(){r(this,"all",!0),r(this,"any",!1)}),n.addChainableMethod("an",s),n.addChainableMethod("a",s),n.addChainableMethod("include",c,a),n.addChainableMethod("contain",c,a),n.addChainableMethod("contains",c,a),n.addChainableMethod("includes",c,a),n.addProperty("ok",function(){this.assert(r(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),n.addProperty("true",function(){this.assert(!0===r(this,"object"),"expected #{this} to be true","expected #{this} to be false",!r(this,"negate"))}),n.addProperty("false",function(){this.assert(!1===r(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!r(this,"negate"))}),n.addProperty("null",function(){this.assert(null===r(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),n.addProperty("undefined",function(){this.assert(void 0===r(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),n.addProperty("NaN",function(){this.assert(t.isNaN(r(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")}),n.addProperty("exist",function(){var e=r(this,"object");this.assert(null!==e&&void 0!==e,"expected #{this} to exist","expected #{this} to not exist")}),n.addProperty("empty",function(){var e,n=r(this,"object"),s=r(this,"ssfi"),i=r(this,"message");switch(i=i?i+": ":"",t.type(n).toLowerCase()){case"array":case"string":e=n.length;break;case"map":case"set":e=n.size;break;case"weakmap":case"weakset":throw new o(i+".empty was passed a weak collection",void 0,s);case"function":var a=i+".empty was passed a function "+t.getName(n);throw new o(a.trim(),void 0,s);default:if(n!==Object(n))throw new o(i+".empty was passed non-string primitive "+t.inspect(n),void 0,s);e=Object.keys(n).length}this.assert(0===e,"expected #{this} to be empty","expected #{this} not to be empty")}),n.addProperty("arguments",u),n.addProperty("Arguments",u),n.addMethod("equal",h),n.addMethod("equals",h),n.addMethod("eq",h),n.addMethod("eql",f),n.addMethod("eqls",f),n.addMethod("above",d),n.addMethod("gt",d),n.addMethod("greaterThan",d),n.addMethod("least",l),n.addMethod("gte",l),n.addMethod("below",p),n.addMethod("lt",p),n.addMethod("lessThan",p),n.addMethod("most",y),n.addMethod("lte",y),n.addMethod("within",function(e,s,i){i&&r(this,"message",i);var a=r(this,"object"),c=r(this,"doLength"),u=r(this,"message"),h=u?u+": ":"",f=r(this,"ssfi"),d=t.type(a).toLowerCase(),l=t.type(e).toLowerCase(),p=t.type(s).toLowerCase(),y=!0,b="date"===l&&"date"===p?e.toUTCString()+".."+s.toUTCString():e+".."+s;if(c&&new n(a,u,f,!0).to.have.property("length"),c||"date"!==d||"date"===l&&"date"===p)if("number"===l&&"number"===p||!c&&"number"!==d)if(c||"date"===d||"number"===d)y=!1;else{errorMessage=h+"expected "+("string"===d?"'"+a+"'":a)+" to be a number or a date"}else errorMessage=h+"the arguments to within must be numbers";else errorMessage=h+"the arguments to within must be dates";if(y)throw new o(errorMessage,void 0,f);if(c){var g=a.length;this.assert(g>=e&&g<=s,"expected #{this} to have a length within "+b,"expected #{this} to not have a length within "+b)}else this.assert(a>=e&&a<=s,"expected #{this} to be within "+b,"expected #{this} to not be within "+b)}),n.addMethod("instanceof",b),n.addMethod("instanceOf",b),n.addMethod("property",g),n.addMethod("ownProperty",w),n.addMethod("haveOwnProperty",w),n.addMethod("ownPropertyDescriptor",m),n.addMethod("haveOwnPropertyDescriptor",m),n.addChainableMethod("length",x,v),n.addChainableMethod("lengthOf",x,v),n.addMethod("match",O),n.addMethod("matches",O),n.addMethod("string",function(e,o){o&&r(this,"message",o);var s=r(this,"object"),i=r(this,"message"),a=r(this,"ssfi");new n(s,i,a,!0).is.a("string"),this.assert(~s.indexOf(e),"expected #{this} to contain "+t.inspect(e),"expected #{this} to not contain "+t.inspect(e))}),n.addMethod("keys",E),n.addMethod("key",E),n.addMethod("throw",j),n.addMethod("throws",j),n.addMethod("Throw",j),n.addMethod("respondTo",S),n.addMethod("respondsTo",S),n.addProperty("itself",function(){r(this,"itself",!0)}),n.addMethod("satisfy",M),n.addMethod("satisfies",M),n.addMethod("closeTo",N),n.addMethod("approximately",N),n.addMethod("members",function(e,o){o&&r(this,"message",o);var s=r(this,"object"),i=r(this,"message"),a=r(this,"ssfi");new n(s,i,a,!0).to.be.an("array"),new n(e,i,a,!0).to.be.an("array");var c,u,h,f=r(this,"contains"),d=r(this,"ordered");f?(u="expected #{this} to be "+(c=d?"an ordered superset":"a superset")+" of #{exp}",h="expected #{this} to not be "+c+" of #{exp}"):(u="expected #{this} to have the same "+(c=d?"ordered members":"members")+" as #{exp}",h="expected #{this} to not have the same "+c+" as #{exp}");var l=r(this,"deep")?t.eql:void 0;this.assert(function(e,t,n,o,r){if(!o){if(e.length!==t.length)return!1;t=t.slice()}return e.every(function(e,s){if(r)return n?n(e,t[s]):e===t[s];if(!n){var i=t.indexOf(e);return-1!==i&&(o||t.splice(i,1),!0)}return t.some(function(r,s){return!!n(e,r)&&(o||t.splice(s,1),!0)})})}(e,s,l,f,d),u,h,e,s,!0)}),n.addMethod("oneOf",function(e,t){t&&r(this,"message",t);var o=r(this,"object"),s=r(this,"message"),i=r(this,"ssfi");new n(e,s,i,!0).to.be.an("array"),this.assert(e.indexOf(o)>-1,"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",e,o)}),n.addMethod("change",P),n.addMethod("changes",P),n.addMethod("increase",k),n.addMethod("increases",k),n.addMethod("decrease",D),n.addMethod("decreases",D),n.addMethod("by",function(e,t){t&&r(this,"message",t);var n,o=r(this,"deltaMsgObj"),s=r(this,"initialDeltaValue"),i=r(this,"finalDeltaValue"),a=r(this,"deltaBehavior"),c=r(this,"realDelta");n="change"===a?Math.abs(i-s)===Math.abs(e):c===Math.abs(e),this.assert(n,"expected "+o+" to "+a+" by "+e,"expected "+o+" to not "+a+" by "+e)}),n.addProperty("extensible",function(){var e=r(this,"object"),t=e===Object(e)&&Object.isExtensible(e);this.assert(t,"expected #{this} to be extensible","expected #{this} to not be extensible")}),n.addProperty("sealed",function(){var e=r(this,"object"),t=e!==Object(e)||Object.isSealed(e);this.assert(t,"expected #{this} to be sealed","expected #{this} to not be sealed")}),n.addProperty("frozen",function(){var e=r(this,"object"),t=e!==Object(e)||Object.isFrozen(e);this.assert(t,"expected #{this} to be frozen","expected #{this} to not be frozen")}),n.addProperty("finite",function(e){var t=r(this,"object");this.assert("number"==typeof t&&isFinite(t),"expected #{this} to be a finite number","expected #{this} to not be a finite number")})}},function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){e.expect=function(t,n){return new e.Assertion(t,n)},e.expect.fail=function(t,n,o,r){throw o=o||"expect.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:r},e.expect.fail)}}},function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){var n=e.Assertion;function o(){Object.defineProperty(Object.prototype,"should",{set:function(e){Object.defineProperty(this,"should",{value:e,enumerable:!0,configurable:!0,writable:!0})},get:function e(){return this instanceof String||this instanceof Number||this instanceof Boolean||"function"==typeof Symbol&&this instanceof Symbol?new n(this.valueOf(),null,e):new n(this,null,e)},configurable:!0});var t={fail:function(n,o,r,s){throw r=r||"should.fail()",new e.AssertionError(r,{actual:n,expected:o,operator:s},t.fail)},equal:function(e,t,o){new n(e,o).to.equal(t)},Throw:function(e,t,o,r){new n(e,r).to.Throw(t,o)},exist:function(e,t){new n(e,t).to.exist},not:{}};return t.not.equal=function(e,t,o){new n(e,o).to.not.equal(t)},t.not.Throw=function(e,t,o,r){new n(e,r).to.not.Throw(t,o)},t.not.exist=function(e,t){new n(e,t).to.not.exist},t.throw=t.Throw,t.not.throw=t.not.Throw,t}e.should=o,e.Should=o}},function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){
/*!
   * Chai dependencies.
   */
var n=e.Assertion,o=t.flag,r=e.assert=function(t,o){new n(null,null,e.assert,!0).assert(t,o,"[ negation message unavailable ]")};
/*!
   * Module export.
   */r.fail=function(t,n,o,s){throw o=o||"assert.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:s},r.fail)},r.isOk=function(e,t){new n(e,t,r.isOk,!0).is.ok},r.isNotOk=function(e,t){new n(e,t,r.isNotOk,!0).is.not.ok},r.equal=function(e,t,s){var i=new n(e,s,r.equal,!0);i.assert(t==o(i,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",t,e,!0)},r.notEqual=function(e,t,s){var i=new n(e,s,r.notEqual,!0);i.assert(t!=o(i,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",t,e,!0)},r.strictEqual=function(e,t,o){new n(e,o,r.strictEqual,!0).to.equal(t)},r.notStrictEqual=function(e,t,o){new n(e,o,r.notStrictEqual,!0).to.not.equal(t)},r.deepEqual=r.deepStrictEqual=function(e,t,o){new n(e,o,r.deepEqual,!0).to.eql(t)},r.notDeepEqual=function(e,t,o){new n(e,o,r.notDeepEqual,!0).to.not.eql(t)},r.isAbove=function(e,t,o){new n(e,o,r.isAbove,!0).to.be.above(t)},r.isAtLeast=function(e,t,o){new n(e,o,r.isAtLeast,!0).to.be.least(t)},r.isBelow=function(e,t,o){new n(e,o,r.isBelow,!0).to.be.below(t)},r.isAtMost=function(e,t,o){new n(e,o,r.isAtMost,!0).to.be.most(t)},r.isTrue=function(e,t){new n(e,t,r.isTrue,!0).is.true},r.isNotTrue=function(e,t){new n(e,t,r.isNotTrue,!0).to.not.equal(!0)},r.isFalse=function(e,t){new n(e,t,r.isFalse,!0).is.false},r.isNotFalse=function(e,t){new n(e,t,r.isNotFalse,!0).to.not.equal(!1)},r.isNull=function(e,t){new n(e,t,r.isNull,!0).to.equal(null)},r.isNotNull=function(e,t){new n(e,t,r.isNotNull,!0).to.not.equal(null)},r.isNaN=function(e,t){new n(e,t,r.isNaN,!0).to.be.NaN},r.isNotNaN=function(e,t){new n(e,t,r.isNotNaN,!0).not.to.be.NaN},r.exists=function(e,t){new n(e,t,r.exists,!0).to.exist},r.notExists=function(e,t){new n(e,t,r.notExists,!0).to.not.exist},r.isUndefined=function(e,t){new n(e,t,r.isUndefined,!0).to.equal(void 0)},r.isDefined=function(e,t){new n(e,t,r.isDefined,!0).to.not.equal(void 0)},r.isFunction=function(e,t){new n(e,t,r.isFunction,!0).to.be.a("function")},r.isNotFunction=function(e,t){new n(e,t,r.isNotFunction,!0).to.not.be.a("function")},r.isObject=function(e,t){new n(e,t,r.isObject,!0).to.be.a("object")},r.isNotObject=function(e,t){new n(e,t,r.isNotObject,!0).to.not.be.a("object")},r.isArray=function(e,t){new n(e,t,r.isArray,!0).to.be.an("array")},r.isNotArray=function(e,t){new n(e,t,r.isNotArray,!0).to.not.be.an("array")},r.isString=function(e,t){new n(e,t,r.isString,!0).to.be.a("string")},r.isNotString=function(e,t){new n(e,t,r.isNotString,!0).to.not.be.a("string")},r.isNumber=function(e,t){new n(e,t,r.isNumber,!0).to.be.a("number")},r.isNotNumber=function(e,t){new n(e,t,r.isNotNumber,!0).to.not.be.a("number")},r.isFinite=function(e,t){new n(e,t,r.isFinite,!0).to.be.finite},r.isBoolean=function(e,t){new n(e,t,r.isBoolean,!0).to.be.a("boolean")},r.isNotBoolean=function(e,t){new n(e,t,r.isNotBoolean,!0).to.not.be.a("boolean")},r.typeOf=function(e,t,o){new n(e,o,r.typeOf,!0).to.be.a(t)},r.notTypeOf=function(e,t,o){new n(e,o,r.notTypeOf,!0).to.not.be.a(t)},r.instanceOf=function(e,t,o){new n(e,o,r.instanceOf,!0).to.be.instanceOf(t)},r.notInstanceOf=function(e,t,o){new n(e,o,r.notInstanceOf,!0).to.not.be.instanceOf(t)},r.include=function(e,t,o){new n(e,o,r.include,!0).include(t)},r.notInclude=function(e,t,o){new n(e,o,r.notInclude,!0).not.include(t)},r.deepInclude=function(e,t,o){new n(e,o,r.deepInclude,!0).deep.include(t)},r.notDeepInclude=function(e,t,o){new n(e,o,r.notDeepInclude,!0).not.deep.include(t)},r.nestedInclude=function(e,t,o){new n(e,o,r.nestedInclude,!0).nested.include(t)},r.notNestedInclude=function(e,t,o){new n(e,o,r.notNestedInclude,!0).not.nested.include(t)},r.deepNestedInclude=function(e,t,o){new n(e,o,r.deepNestedInclude,!0).deep.nested.include(t)},r.notDeepNestedInclude=function(e,t,o){new n(e,o,r.notDeepNestedInclude,!0).not.deep.nested.include(t)},r.ownInclude=function(e,t,o){new n(e,o,r.ownInclude,!0).own.include(t)},r.notOwnInclude=function(e,t,o){new n(e,o,r.notOwnInclude,!0).not.own.include(t)},r.deepOwnInclude=function(e,t,o){new n(e,o,r.deepOwnInclude,!0).deep.own.include(t)},r.notDeepOwnInclude=function(e,t,o){new n(e,o,r.notDeepOwnInclude,!0).not.deep.own.include(t)},r.match=function(e,t,o){new n(e,o,r.match,!0).to.match(t)},r.notMatch=function(e,t,o){new n(e,o,r.notMatch,!0).to.not.match(t)},r.property=function(e,t,o){new n(e,o,r.property,!0).to.have.property(t)},r.notProperty=function(e,t,o){new n(e,o,r.notProperty,!0).to.not.have.property(t)},r.propertyVal=function(e,t,o,s){new n(e,s,r.propertyVal,!0).to.have.property(t,o)},r.notPropertyVal=function(e,t,o,s){new n(e,s,r.notPropertyVal,!0).to.not.have.property(t,o)},r.deepPropertyVal=function(e,t,o,s){new n(e,s,r.deepPropertyVal,!0).to.have.deep.property(t,o)},r.notDeepPropertyVal=function(e,t,o,s){new n(e,s,r.notDeepPropertyVal,!0).to.not.have.deep.property(t,o)},r.ownProperty=function(e,t,o){new n(e,o,r.ownProperty,!0).to.have.own.property(t)},r.notOwnProperty=function(e,t,o){new n(e,o,r.notOwnProperty,!0).to.not.have.own.property(t)},r.ownPropertyVal=function(e,t,o,s){new n(e,s,r.ownPropertyVal,!0).to.have.own.property(t,o)},r.notOwnPropertyVal=function(e,t,o,s){new n(e,s,r.notOwnPropertyVal,!0).to.not.have.own.property(t,o)},r.deepOwnPropertyVal=function(e,t,o,s){new n(e,s,r.deepOwnPropertyVal,!0).to.have.deep.own.property(t,o)},r.notDeepOwnPropertyVal=function(e,t,o,s){new n(e,s,r.notDeepOwnPropertyVal,!0).to.not.have.deep.own.property(t,o)},r.nestedProperty=function(e,t,o){new n(e,o,r.nestedProperty,!0).to.have.nested.property(t)},r.notNestedProperty=function(e,t,o){new n(e,o,r.notNestedProperty,!0).to.not.have.nested.property(t)},r.nestedPropertyVal=function(e,t,o,s){new n(e,s,r.nestedPropertyVal,!0).to.have.nested.property(t,o)},r.notNestedPropertyVal=function(e,t,o,s){new n(e,s,r.notNestedPropertyVal,!0).to.not.have.nested.property(t,o)},r.deepNestedPropertyVal=function(e,t,o,s){new n(e,s,r.deepNestedPropertyVal,!0).to.have.deep.nested.property(t,o)},r.notDeepNestedPropertyVal=function(e,t,o,s){new n(e,s,r.notDeepNestedPropertyVal,!0).to.not.have.deep.nested.property(t,o)},r.lengthOf=function(e,t,o){new n(e,o,r.lengthOf,!0).to.have.lengthOf(t)},r.hasAnyKeys=function(e,t,o){new n(e,o,r.hasAnyKeys,!0).to.have.any.keys(t)},r.hasAllKeys=function(e,t,o){new n(e,o,r.hasAllKeys,!0).to.have.all.keys(t)},r.containsAllKeys=function(e,t,o){new n(e,o,r.containsAllKeys,!0).to.contain.all.keys(t)},r.doesNotHaveAnyKeys=function(e,t,o){new n(e,o,r.doesNotHaveAnyKeys,!0).to.not.have.any.keys(t)},r.doesNotHaveAllKeys=function(e,t,o){new n(e,o,r.doesNotHaveAllKeys,!0).to.not.have.all.keys(t)},r.hasAnyDeepKeys=function(e,t,o){new n(e,o,r.hasAnyDeepKeys,!0).to.have.any.deep.keys(t)},r.hasAllDeepKeys=function(e,t,o){new n(e,o,r.hasAllDeepKeys,!0).to.have.all.deep.keys(t)},r.containsAllDeepKeys=function(e,t,o){new n(e,o,r.containsAllDeepKeys,!0).to.contain.all.deep.keys(t)},r.doesNotHaveAnyDeepKeys=function(e,t,o){new n(e,o,r.doesNotHaveAnyDeepKeys,!0).to.not.have.any.deep.keys(t)},r.doesNotHaveAllDeepKeys=function(e,t,o){new n(e,o,r.doesNotHaveAllDeepKeys,!0).to.not.have.all.deep.keys(t)},r.throws=function(e,t,s,i){("string"==typeof t||t instanceof RegExp)&&(s=t,t=null);var a=new n(e,i,r.throws,!0).to.throw(t,s);return o(a,"object")},r.doesNotThrow=function(e,t,o,s){("string"==typeof t||t instanceof RegExp)&&(o=t,t=null),new n(e,s,r.doesNotThrow,!0).to.not.throw(t,o)},r.operator=function(s,i,a,c){var u;switch(i){case"==":u=s==a;break;case"===":u=s===a;break;case">":u=s>a;break;case">=":u=s>=a;break;case"<":u=s<a;break;case"<=":u=s<=a;break;case"!=":u=s!=a;break;case"!==":u=s!==a;break;default:throw c=c?c+": ":c,new e.AssertionError(c+'Invalid operator "'+i+'"',void 0,r.operator)}var h=new n(u,c,r.operator,!0);h.assert(!0===o(h,"object"),"expected "+t.inspect(s)+" to be "+i+" "+t.inspect(a),"expected "+t.inspect(s)+" to not be "+i+" "+t.inspect(a))},r.closeTo=function(e,t,o,s){new n(e,s,r.closeTo,!0).to.be.closeTo(t,o)},r.approximately=function(e,t,o,s){new n(e,s,r.approximately,!0).to.be.approximately(t,o)},r.sameMembers=function(e,t,o){new n(e,o,r.sameMembers,!0).to.have.same.members(t)},r.notSameMembers=function(e,t,o){new n(e,o,r.notSameMembers,!0).to.not.have.same.members(t)},r.sameDeepMembers=function(e,t,o){new n(e,o,r.sameDeepMembers,!0).to.have.same.deep.members(t)},r.notSameDeepMembers=function(e,t,o){new n(e,o,r.notSameDeepMembers,!0).to.not.have.same.deep.members(t)},r.sameOrderedMembers=function(e,t,o){new n(e,o,r.sameOrderedMembers,!0).to.have.same.ordered.members(t)},r.notSameOrderedMembers=function(e,t,o){new n(e,o,r.notSameOrderedMembers,!0).to.not.have.same.ordered.members(t)},r.sameDeepOrderedMembers=function(e,t,o){new n(e,o,r.sameDeepOrderedMembers,!0).to.have.same.deep.ordered.members(t)},r.notSameDeepOrderedMembers=function(e,t,o){new n(e,o,r.notSameDeepOrderedMembers,!0).to.not.have.same.deep.ordered.members(t)},r.includeMembers=function(e,t,o){new n(e,o,r.includeMembers,!0).to.include.members(t)},r.notIncludeMembers=function(e,t,o){new n(e,o,r.notIncludeMembers,!0).to.not.include.members(t)},r.includeDeepMembers=function(e,t,o){new n(e,o,r.includeDeepMembers,!0).to.include.deep.members(t)},r.notIncludeDeepMembers=function(e,t,o){new n(e,o,r.notIncludeDeepMembers,!0).to.not.include.deep.members(t)},r.includeOrderedMembers=function(e,t,o){new n(e,o,r.includeOrderedMembers,!0).to.include.ordered.members(t)},r.notIncludeOrderedMembers=function(e,t,o){new n(e,o,r.notIncludeOrderedMembers,!0).to.not.include.ordered.members(t)},r.includeDeepOrderedMembers=function(e,t,o){new n(e,o,r.includeDeepOrderedMembers,!0).to.include.deep.ordered.members(t)},r.notIncludeDeepOrderedMembers=function(e,t,o){new n(e,o,r.notIncludeDeepOrderedMembers,!0).to.not.include.deep.ordered.members(t)},r.oneOf=function(e,t,o){new n(e,o,r.oneOf,!0).to.be.oneOf(t)},r.changes=function(e,t,o,s){3===arguments.length&&"function"==typeof t&&(s=o,o=null),new n(e,s,r.changes,!0).to.change(t,o)},r.changesBy=function(e,t,o,s,i){if(4===arguments.length&&"function"==typeof t){var a=s;s=o,i=a}else 3===arguments.length&&(s=o,o=null);new n(e,i,r.changesBy,!0).to.change(t,o).by(s)},r.doesNotChange=function(e,t,o,s){return 3===arguments.length&&"function"==typeof t&&(s=o,o=null),new n(e,s,r.doesNotChange,!0).to.not.change(t,o)},r.changesButNotBy=function(e,t,o,s,i){if(4===arguments.length&&"function"==typeof t){var a=s;s=o,i=a}else 3===arguments.length&&(s=o,o=null);new n(e,i,r.changesButNotBy,!0).to.change(t,o).but.not.by(s)},r.increases=function(e,t,o,s){return 3===arguments.length&&"function"==typeof t&&(s=o,o=null),new n(e,s,r.increases,!0).to.increase(t,o)},r.increasesBy=function(e,t,o,s,i){if(4===arguments.length&&"function"==typeof t){var a=s;s=o,i=a}else 3===arguments.length&&(s=o,o=null);new n(e,i,r.increasesBy,!0).to.increase(t,o).by(s)},r.doesNotIncrease=function(e,t,o,s){return 3===arguments.length&&"function"==typeof t&&(s=o,o=null),new n(e,s,r.doesNotIncrease,!0).to.not.increase(t,o)},r.increasesButNotBy=function(e,t,o,s,i){if(4===arguments.length&&"function"==typeof t){var a=s;s=o,i=a}else 3===arguments.length&&(s=o,o=null);new n(e,i,r.increasesButNotBy,!0).to.increase(t,o).but.not.by(s)},r.decreases=function(e,t,o,s){return 3===arguments.length&&"function"==typeof t&&(s=o,o=null),new n(e,s,r.decreases,!0).to.decrease(t,o)},r.decreasesBy=function(e,t,o,s,i){if(4===arguments.length&&"function"==typeof t){var a=s;s=o,i=a}else 3===arguments.length&&(s=o,o=null);new n(e,i,r.decreasesBy,!0).to.decrease(t,o).by(s)},r.doesNotDecrease=function(e,t,o,s){return 3===arguments.length&&"function"==typeof t&&(s=o,o=null),new n(e,s,r.doesNotDecrease,!0).to.not.decrease(t,o)},r.doesNotDecreaseBy=function(e,t,o,s,i){if(4===arguments.length&&"function"==typeof t){var a=s;s=o,i=a}else 3===arguments.length&&(s=o,o=null);return new n(e,i,r.doesNotDecreaseBy,!0).to.not.decrease(t,o).by(s)},r.decreasesButNotBy=function(e,t,o,s,i){if(4===arguments.length&&"function"==typeof t){var a=s;s=o,i=a}else 3===arguments.length&&(s=o,o=null);new n(e,i,r.decreasesButNotBy,!0).to.decrease(t,o).but.not.by(s)}
/*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */,r.ifError=function(e){if(e)throw e},r.isExtensible=function(e,t){new n(e,t,r.isExtensible,!0).to.be.extensible},r.isNotExtensible=function(e,t){new n(e,t,r.isNotExtensible,!0).to.not.be.extensible},r.isSealed=function(e,t){new n(e,t,r.isSealed,!0).to.be.sealed},r.isNotSealed=function(e,t){new n(e,t,r.isNotSealed,!0).to.not.be.sealed},r.isFrozen=function(e,t){new n(e,t,r.isFrozen,!0).to.be.frozen},r.isNotFrozen=function(e,t){new n(e,t,r.isNotFrozen,!0).to.not.be.frozen},r.isEmpty=function(e,t){new n(e,t,r.isEmpty,!0).to.be.empty},r.isNotEmpty=function(e,t){new n(e,t,r.isNotEmpty,!0).to.not.be.empty},
/*!
   * Aliases.
   */
function e(t,n){return r[n]=r[t],e}("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")("isEmpty","empty")("isNotEmpty","notEmpty")}},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("https")}]);