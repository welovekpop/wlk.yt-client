!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=459)}({450:function(e,t,n){var r,a;!function(n,o){function i(e,t){return e&&t&&e.type===t.type&&e.name===t.name&&m(e.metaData,t.metaData)}function u(e){try{if("function"!=typeof e)return e;if(!e.bugsnag){var t=s();e.bugsnag=function(){if(j=t,!D){var n=e.apply(this,arguments);return j=null,n}try{return e.apply(this,arguments)}catch(e){throw w("autoNotify",!0)&&(U.notifyException(e,null,null,"error"),T()),e}finally{j=null}},e.bugsnag.bugsnag=e.bugsnag}return e.bugsnag}catch(t){return e}}function c(){_=!1}function s(){var e=document.currentScript||j;if(!e&&_){var t=document.scripts||document.getElementsByTagName("script");e=t[t.length-1]}return e}function l(e){var t=s();t&&(e.script={src:t.src,content:w("inlineScript",!0)?t.innerHTML:""})}function d(e,t,n){var r=e[t];e[t]=function(){n.apply(this,arguments),"function"==typeof r&&r.apply(this,arguments)}}function f(e){var t=w("disableLog"),r=n.console;void 0===r||void 0===r.log||t||r.log("[Bugsnag] "+e)}function m(e,t){return h(e)===h(t)}function p(e){var t=e.textContent||e.innerText||"";return"submit"!==e.type&&"button"!==e.type||(t=e.value),t=t.replace(/^\s+|\s+$/g,""),v(t,140)}function g(e){var t=[e.tagName];if(e.id&&t.push("#"+e.id),e.className&&e.className.length){t.push("."+e.className.split(" ").join("."))}var n=t.join("");if(!document.querySelectorAll||!Array.prototype.indexOf)return n;try{if(1===document.querySelectorAll(n).length)return n}catch(e){return n}if(e.parentNode.childNodes.length>1){var r=Array.prototype.indexOf.call(e.parentNode.childNodes,e)+1;n=n+":nth-child("+r+")"}return 1===document.querySelectorAll(n).length?n:e.parentNode?g(e.parentNode)+" > "+n:n}function v(e,t){return e&&e.length>t?e.slice(0,t-5)+"(...)":e}function b(e){return"[object Array]"===Object.prototype.toString.call(e)}function y(e,t,n){var r=(n||0)+1;if(n>w("maxDepth",G))return"[RECURSIVE]";if("string"==typeof e)return v(e,t);if(b(e)){for(var a=[],o=0;o<e.length;o++)a[o]=y(e[o],t,r);return a}if("object"==typeof e&&null!=e){var i={};for(var u in e)e.hasOwnProperty(u)&&(i[u]=y(e[u],t,r));return i}return e}function h(e,t,r){if(r>=w("maxDepth",G))return encodeURIComponent(t)+"=[RECURSIVE]";r=r+1||1;try{if(n.Node&&e instanceof n.Node)return encodeURIComponent(t)+"="+encodeURIComponent(R(e));var a=[];for(var o in e)if(e.hasOwnProperty(o)&&null!=o&&null!=e[o]){var i=t?t+"["+o+"]":o,u=e[o];a.push("object"==typeof u?h(u,i,r):encodeURIComponent(i)+"="+encodeURIComponent(u))}return a.sort().join("&")}catch(e){return encodeURIComponent(t)+"="+encodeURIComponent(""+e)}}function B(e,t,n){if(null==t)return e;if(n>=w("maxDepth",G))return"[RECURSIVE]";e=e||{};for(var r in t)if(t.hasOwnProperty(r))try{e[r]=t[r].constructor===Object?B(e[r],t[r],n+1||1):t[r]}catch(n){e[r]=t[r]}return e}function N(e,t){if(e+="?"+h(t)+"&ct=img&cb="+(new Date).getTime(),"undefined"!=typeof BUGSNAG_TESTING&&U.testRequest)U.testRequest(e,t);else{if("xhr"===w("notifyHandler")){var n=new XMLHttpRequest;n.open("GET",e,!0),n.send()}else{(new Image).src=e}}}function E(e){var t={},n=/^data\-([\w\-]+)$/;if(e)for(var r=e.attributes,a=0;a<r.length;a++){var o=r[a];if(n.test(o.nodeName)){var i=o.nodeName.match(n)[1];t[i]=o.value||o.nodeValue}}return t}function w(e,t){V=V||E(F);var n=void 0!==U[e]?U[e]:V[e.toLowerCase()];return"false"===n&&(n=!1),void 0!==n?n:t}function A(e){return!(!e||!e.match(H))||(f("Invalid API key '"+e+"'"),!1)}function C(e){return w(e,w("autoBreadcrumbs",!0))}function S(e,t){var r=w("apiKey");if(A(r)&&q){q-=1;var a=w("releaseStage","production"),o=w("notifyReleaseStages");if(o){for(var i=!1,u=0;u<o.length;u++)if(a===o[u]){i=!0;break}if(!i)return}var c=[e.name,e.message,e.stacktrace].join("|");if(c!==I){I=c;var s={device:{time:(new Date).getTime()}},l={notifierVersion:K,apiKey:r,projectRoot:w("projectRoot")||n.location.protocol+"//"+n.location.host,context:w("context")||n.location.pathname,user:w("user"),metaData:B(B(s,w("metaData")),t),releaseStage:a,appVersion:w("appVersion"),url:n.location.href,userAgent:navigator.userAgent,language:navigator.language||navigator.userLanguage,severity:e.severity,name:e.name,message:e.message,stacktrace:e.stacktrace,file:e.file,lineNumber:e.lineNumber,columnNumber:e.columnNumber,breadcrumbs:M,payloadVersion:"3"},d=U.beforeNotify;if("function"==typeof d){if(!1===d(l,l.metaData))return}if(0===l.lineNumber&&/Script error\.?/.test(l.message))return f("Ignoring cross-domain or eval script error. See https://docs.bugsnag.com/platforms/browsers/faq/#3-cross-origin-script-errors");N(w("endpoint")||$,l)}}}function L(){var e,t;try{throw Error("")}catch(n){e="<generated>\n",t=k(n)}if(!t){e="<generated-ie>\n";var n=[];try{for(var r=arguments.callee.caller.caller;r&&n.length<10;){n.push(W.test(""+r)?RegExp.$1||"[anonymous]":"[anonymous]"),r=r.caller}}catch(e){f(e)}t=n.join("\n")}return e+t}function k(e){return e.stack||e.backtrace||e.stacktrace}function R(e){if(e){var t=e.attributes;if(t){for(var n="<"+e.nodeName.toLowerCase(),r=0;r<t.length;r++)t[r].value&&""+t[r].value!="null"&&(n+=" "+t[r].name+'="'+t[r].value+'"');return n+">"}return e.nodeName}}function T(){O+=1,n.setTimeout(function(){O-=1})}function x(e,t,r){var a=e[t],o=r(a);e[t]=o,"undefined"!=typeof BUGSNAG_TESTING&&n.undo&&n.undo.push(function(){e[t]=a})}var j,I,U={},D=!0,O=0,M=[],q=10,G=5;U.breadcrumbLimit=20,U.noConflict=function(){return n.Bugsnag=o,void 0===o&&delete n.Bugsnag,U},U.refresh=function(){q=10},U.notifyException=function(e,t,n,r){if(!e){var a="Bugsnag.notifyException() was called with no arguments";return f(a),void U.notify("BugsnagNotify",a)}if("string"==typeof e)return f("Bugsnag.notifyException() was called with a string. Expected instance of Error. To send a custom message instantiate a new Error or use Bugsnag.notify('<string>'). see https://docs.bugsnag.com/platforms/browsers/#reporting-handled-exceptions"),void U.notify.apply(null,arguments);t&&"string"!=typeof t&&(n=t,t=void 0),n||(n={}),l(n),S({name:t||e.name,message:e.message||e.description,stacktrace:k(e)||L(),file:e.fileName||e.sourceURL,lineNumber:e.lineNumber||e.line,columnNumber:e.columnNumber?e.columnNumber+1:void 0,severity:r||"warning"},n)},U.notify=function(e,t,r,a){e||(e="BugsnagNotify",t="Bugsnag.notify() was called with no arguments",f(t)),S({name:e,message:t,stacktrace:L(),file:""+n.location,lineNumber:1,severity:a||"warning"},r)},U.leaveBreadcrumb=function(e,t){var n={type:"manual",name:"Manual",timestamp:(new Date).getTime()};switch(typeof e){case"object":n=B(n,e);break;case"string":t&&"object"==typeof t?n=B(n,{name:e,metaData:t}):n.metaData={message:e};break;default:return void f("expecting 1st argument to leaveBreadcrumb to be a 'string' or 'object', got "+typeof e)}for(var r=["manual","error","log","navigation","process","request","state","user"],a=!1,o=0;o<8;o++)if(r[o]===n.type){a=!0;break}a||(f("Converted invalid breadcrumb type '"+n.type+"' to 'manual'"),n.type="manual");var u=M.slice(-1)[0];if(i(n,u))u.count=u.count||1,u.count++;else{var c=Math.min(U.breadcrumbLimit,40);n.name=v(n.name,32),M.push(y(n,140)),M.length>c&&(M=M.slice(-c))}};var P=void 0!==n.addEventListener;U.enableAutoBreadcrumbsConsole=function(){},U.disableAutoBreadcrumbsConsole=function(){},U.enableAutoBreadcrumbsNavigation=function(){},U.disableAutoBreadcrumbsNavigation=function(){},U.enableAutoBreadcrumbsErrors=function(){U.autoBreadcrumbsErrors=!0},U.disableAutoBreadcrumbsErrors=function(){U.autoBreadcrumbsErrors=!1},U.enableAutoBreadcrumbsClicks=function(){U.autoBreadcrumbsClicks=!0},U.disableAutoBreadcrumbsClicks=function(){U.autoBreadcrumbsClicks=!1},U.enableAutoBreadcrumbs=function(){U.enableAutoBreadcrumbsClicks(),U.enableAutoBreadcrumbsConsole(),U.enableAutoBreadcrumbsErrors(),U.enableAutoBreadcrumbsNavigation()},U.disableAutoBreadcrumbs=function(){U.disableAutoBreadcrumbsClicks(),U.disableAutoBreadcrumbsConsole(),U.disableAutoBreadcrumbsErrors(),U.disableAutoBreadcrumbsNavigation()},U.enableNotifyUnhandledRejections=function(){U.notifyUnhandledRejections=!0},U.disableNotifyUnhandledRejections=function(){U.notifyUnhandledRejections=!1};var _="complete"!==document.readyState;document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!0),n.addEventListener("load",c,!0)):n.attachEvent("onload",c);var V,H=/^[0-9a-f]{32}$/i,W=/function\s*([\w\-$]+)?\s*\(/i,$="https://notify.bugsnag.com/js",K="3.2.0",X=document.getElementsByTagName("script"),F=X[X.length-1];if(n.atob){if(n.ErrorEvent)try{0===new n.ErrorEvent("test").colno&&(D=!1)}catch(e){}}else D=!1;if(w("autoNotify",!0)){x(n,"onerror",function(e){return"undefined"!=typeof BUGSNAG_TESTING&&(U._onerror=e),function(t,r,a,o,i){var u=w("autoNotify",!0),c={};if(!o&&n.event&&(o=n.event.errorCharacter),l(c),j=null,u&&!O){var s=i&&i.name||"window.onerror";S({name:s,message:t,file:r,lineNumber:a,columnNumber:o,stacktrace:i&&k(i)||L(),severity:"error"},c),C("autoBreadcrumbsErrors")&&U.leaveBreadcrumb({type:"error",name:s,metaData:{severity:"error",file:r,message:t,line:a}})}"undefined"!=typeof BUGSNAG_TESTING&&(e=U._onerror),e&&e(t,r,a,o,i)}});var z=function(e){return function(t,n){if("function"==typeof t){t=u(t);var r=Array.prototype.slice.call(arguments,2);return e(function(){t.apply(this,r)},n)}return e(t,n)}};x(n,"setTimeout",z),x(n,"setInterval",z),n.requestAnimationFrame&&x(n,"requestAnimationFrame",function(e){return function(t){return e(u(t))}}),n.setImmediate&&x(n,"setImmediate",function(e){return function(){var t=Array.prototype.slice.call(arguments);return t[0]=u(t[0]),e.apply(this,t)}}),"onunhandledrejection"in n&&n.addEventListener("unhandledrejection",function(e){if(w("notifyUnhandledRejections",!1)){var t=e.reason;t&&(t instanceof Error||t.message)?U.notifyException(t):U.notify("UnhandledRejection",t)}}),"EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g,function(e){var t=n[e]&&n[e].prototype;t&&t.hasOwnProperty&&t.hasOwnProperty("addEventListener")&&(x(t,"addEventListener",function(e){return function(t,n,r,a){try{n&&n.handleEvent&&(n.handleEvent=u(n.handleEvent))}catch(e){f(e)}return e.call(this,t,u(n),r,a)}}),x(t,"removeEventListener",function(e){return function(t,n,r,a){return e.call(this,t,n,r,a),e.call(this,t,u(n),r,a)}}))})}!function(){P&&n.addEventListener("click",function(e){if(C("autoBreadcrumbsClicks")){var t,n;try{t=p(e.target),n=g(e.target)}catch(e){t="[hidden]",n="[hidden]",f("Cross domain error when tracking click event. See https://docs.bugsnag.com/platforms/browsers/faq/#3-cross-origin-script-errors")}U.leaveBreadcrumb({type:"user",name:"UI click",metaData:{targetText:t,targetSelector:n}})}},!0)}(),function(){function e(e,t){C("autoBreadcrumbsConsole")&&U.leaveBreadcrumb({type:"log",name:"Console output",metaData:{severity:e,message:Array.prototype.slice.call(t).join(", ")}})}if(void 0!==n.console){var t=console.log,r=console.warn,a=console.error;U.enableAutoBreadcrumbsConsole=function(){U.autoBreadcrumbsConsole=!0,d(console,"log",function(){e("log",arguments)}),d(console,"warn",function(){e("warn",arguments)}),d(console,"error",function(){e("error",arguments)})},U.disableAutoBreadcrumbsConsole=function(){U.autoBreadcrumbsConsole=!1,console.log=t,console.warn=r,console.error=a},C("autoBreadcrumbsConsole")&&U.enableAutoBreadcrumbsConsole()}}(),function(){function e(e){return e.split("#")[1]||""}function t(t){var n=t.oldURL,r=t.newURL,a={};return n&&r?(a.from=e(n),a.to=e(r)):a.to=location.hash,{type:"navigation",name:"Hash changed",metaData:a}}function r(){return{type:"navigation",name:"Navigated back"}}function a(){return{type:"navigation",name:"Page hidden"}}function o(){return{type:"navigation",name:"Page shown"}}function i(){return{type:"navigation",name:"Page loaded"}}function u(){return{type:"navigation",name:"DOMContentLoaded"}}function c(e,t,n,r){var a=location.pathname+location.search+location.hash;return{type:"navigation",name:"History "+e,metaData:{from:a,to:r||a,prevState:history.state,nextState:t}}}function s(e,t,n){return c("pushState",e,t,n)}function l(e,t,n){return c("replaceState",e,t,n)}function f(e){return function(){C("autoBreadcrumbsNavigation")&&U.leaveBreadcrumb(e.apply(null,arguments))}}if(P&&n.history&&n.history.state&&n.history.pushState&&n.history.pushState.bind){var m=history.pushState,p=history.replaceState;U.enableAutoBreadcrumbsNavigation=function(){U.autoBreadcrumbsNavigation=!0,d(history,"pushState",f(s)),d(history,"replaceState",f(l))},U.disableAutoBreadcrumbsNavigation=function(){U.autoBreadcrumbsNavigation=!1,history.pushState=m,history.replaceState=p},n.addEventListener("hashchange",f(t),!0),n.addEventListener("popstate",f(r),!0),n.addEventListener("pagehide",f(a),!0),n.addEventListener("pageshow",f(o),!0),n.addEventListener("load",f(i),!0),n.addEventListener("DOMContentLoaded",f(u),!0),C("autoBreadcrumbsNavigation")&&U.enableAutoBreadcrumbsNavigation()}}(),w("autoBreadcrumbs",!0)&&U.leaveBreadcrumb({type:"navigation",name:"Bugsnag Loaded"}),n.Bugsnag=U,r=[],void 0!==(a=function(){return U}.apply(t,r))&&(e.exports=a)}(window,window.Bugsnag)},459:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(450),a=n.n(r);a.a.apiKey="a3246545081c8decaf0185c7a7f8d402",a.a.appVersion="1.0.0-beta.10",a.a.beforeNotify=function(){var e=uw.store.getState(),t=e.auth&&e.auth.user;t&&(a.a.user={id:t._id,name:t.username})}}});