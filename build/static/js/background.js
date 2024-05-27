/*! For license information please see background.js.LICENSE.txt */
!function(){var e={990:function(e,r,t){var n,o,s,a=t(861).default,i=t(690).default,c=t(728).default,u=t(588).default,l=t(808).default,g=t(655).default,m=t(389).default,f=t(496).default;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,o=[e],n=function(e){"use strict";var r,t;if(null===(r=globalThis.chrome)||void 0===r||null===(t=r.runtime)||void 0===t||!t.id)throw new Error("This script should only be loaded in a browser extension.");if("undefined"===typeof globalThis.browser||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){var n="The message port closed before a response was received.",o=function(e){var r={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(r).length)throw new Error("api-metadata.json has not been included in browser-polyfill");var t=function(e){g(t,e);var r=m(t);function t(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return i(this,t),(n=r.call(this,o)).createItem=e,n}return c(t,[{key:"get",value:function(e){return this.has(e)||this.set(e,this.createItem(e)),u(l(t.prototype),"get",this).call(this,e)}}]),t}(f(WeakMap)),o=function(e){return e&&"object"===typeof e&&"function"===typeof e.then},s=function(r,t){return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):t.singleCallbackArg||o.length<=1&&!1!==t.singleCallbackArg?r.resolve(o[0]):r.resolve(o)}},p=function(e){return 1==e?"argument":"arguments"},A=function(e,r){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];if(o.length<r.minArgs)throw new Error("Expected at least ".concat(r.minArgs," ").concat(p(r.minArgs)," for ").concat(e,"(), got ").concat(o.length));if(o.length>r.maxArgs)throw new Error("Expected at most ".concat(r.maxArgs," ").concat(p(r.maxArgs)," for ").concat(e,"(), got ").concat(o.length));return new Promise((function(n,a){if(r.fallbackToNoCallback)try{t[e].apply(t,o.concat([s({resolve:n,reject:a},r)]))}catch(i){console.warn("".concat(e," API method doesn't seem to support the callback parameter, ")+"falling back to call it without a callback: ",i),t[e].apply(t,o),r.fallbackToNoCallback=!1,r.noCallback=!0,n()}else r.noCallback?(t[e].apply(t,o),n()):t[e].apply(t,o.concat([s({resolve:n,reject:a},r)]))}))}},x=function(e,r,t){return new Proxy(r,{apply:function(r,n,o){return t.call.apply(t,[n,e].concat(a(o)))}})},d=Function.call.bind(Object.prototype.hasOwnProperty),h=function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=Object.create(null),s={has:function(e,t){return t in r||t in o},get:function(s,a,i){if(a in o)return o[a];if(a in r){var c=r[a];if("function"===typeof c)if("function"===typeof t[a])c=x(r,r[a],t[a]);else if(d(n,a)){var u=A(a,n[a]);c=x(r,r[a],u)}else c=c.bind(r);else if("object"===typeof c&&null!==c&&(d(t,a)||d(n,a)))c=e(c,t[a],n[a]);else{if(!d(n,"*"))return Object.defineProperty(o,a,{configurable:!0,enumerable:!0,get:function(){return r[a]},set:function(e){r[a]=e}}),c;c=e(c,t[a],n["*"])}return o[a]=c,c}},set:function(e,t,n,s){return t in o?o[t]=n:r[t]=n,!0},defineProperty:function(e,r,t){return Reflect.defineProperty(o,r,t)},deleteProperty:function(e,r){return Reflect.deleteProperty(o,r)}},a=Object.create(r);return new Proxy(a,s)},y=function(e){return{addListener:function(r,t){for(var n=arguments.length,o=new Array(n>2?n-2:0),s=2;s<n;s++)o[s-2]=arguments[s];r.addListener.apply(r,[e.get(t)].concat(o))},hasListener:function(r,t){return r.hasListener(e.get(t))},removeListener:function(r,t){r.removeListener(e.get(t))}}},v=new t((function(e){return"function"!==typeof e?e:function(r){var t=h(r,{},{getContent:{minArgs:0,maxArgs:0}});e(t)}})),b=new t((function(e){return"function"!==typeof e?e:function(r,t,n){var s,a,i=!1,c=new Promise((function(e){s=function(r){i=!0,e(r)}}));try{a=e(r,t,s)}catch(g){a=Promise.reject(g)}var u=!0!==a&&o(a);if(!0!==a&&!u&&!i)return!1;var l=function(e){e.then((function(e){n(e)}),(function(e){var r;r=e&&(e instanceof Error||"string"===typeof e.message)?e.message:"An unexpected error occurred",n({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((function(e){console.error("Failed to send onMessage rejected reply",e)}))};return l(u?a:c),!0}})),w=function(r,t){var o=r.reject,s=r.resolve;e.runtime.lastError?e.runtime.lastError.message===n?s():o(new Error(e.runtime.lastError.message)):t&&t.__mozWebExtensionPolyfillReject__?o(new Error(t.message)):s(t)},_=function(e,r,t){for(var n=arguments.length,o=new Array(n>3?n-3:0),s=3;s<n;s++)o[s-3]=arguments[s];if(o.length<r.minArgs)throw new Error("Expected at least ".concat(r.minArgs," ").concat(p(r.minArgs)," for ").concat(e,"(), got ").concat(o.length));if(o.length>r.maxArgs)throw new Error("Expected at most ".concat(r.maxArgs," ").concat(p(r.maxArgs)," for ").concat(e,"(), got ").concat(o.length));return new Promise((function(e,r){var n=w.bind(null,{resolve:e,reject:r});o.push(n),t.sendMessage.apply(t,o)}))},k={devtools:{network:{onRequestFinished:y(v)}},runtime:{onMessage:y(b),onMessageExternal:y(b),sendMessage:_.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:_.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},j={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return r.privacy={network:{"*":j},services:{"*":j},websites:{"*":j}},h(e,k,r)};e.exports=o(chrome)}else e.exports=globalThis.browser},void 0===(s="function"===typeof n?n.apply(r,o):n)||(e.exports=s)},897:function(e){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n},e.exports.__esModule=!0,e.exports.default=e.exports},405:function(e,r,t){var n=t(897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},115:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},690:function(e){e.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},515:function(e,r,t){var n=t(15),o=t(617);function s(r,t,a){return o()?(e.exports=s=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=s=function(e,r,t){var o=[null];o.push.apply(o,r);var s=new(Function.bind.apply(e,o));return t&&n(s,t.prototype),s},e.exports.__esModule=!0,e.exports.default=e.exports),s.apply(null,arguments)}e.exports=s,e.exports.__esModule=!0,e.exports.default=e.exports},728:function(e,r,t){var n=t(62);function o(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}e.exports=function(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},389:function(e,r,t){var n=t(808),o=t(617),s=t(993);e.exports=function(e){var r=o();return function(){var t,o=n(e);if(r){var a=n(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return s(this,t)}},e.exports.__esModule=!0,e.exports.default=e.exports},588:function(e,r,t){var n=t(753);function o(){return"undefined"!==typeof Reflect&&Reflect.get?(e.exports=o=Reflect.get.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,r,t){var o=n(e,r);if(o){var s=Object.getOwnPropertyDescriptor(o,r);return s.get?s.get.call(arguments.length<3?e:t):s.value}},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(this,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},808:function(e){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},655:function(e,r,t){var n=t(15);e.exports=function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&n(e,r)},e.exports.__esModule=!0,e.exports.default=e.exports},35:function(e){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},e.exports.__esModule=!0,e.exports.default=e.exports},617:function(e){e.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},498:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},993:function(e,r,t){var n=t(698).default,o=t(115);e.exports=function(e,r){if(r&&("object"===n(r)||"function"===typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},15:function(e){function r(t,n){return e.exports=r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t,n)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},753:function(e,r,t){var n=t(808);e.exports=function(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=n(e)););return e},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,r,t){var n=t(405),o=t(498),s=t(116),a=t(281);e.exports=function(e){return n(e)||o(e)||s(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},36:function(e,r,t){var n=t(698).default;e.exports=function(e,r){if("object"!==n(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,r||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},62:function(e,r,t){var n=t(698).default,o=t(36);e.exports=function(e){var r=o(e,"string");return"symbol"===n(r)?r:String(r)},e.exports.__esModule=!0,e.exports.default=e.exports},698:function(e){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},116:function(e,r,t){var n=t(897);e.exports=function(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},496:function(e,r,t){var n=t(808),o=t(15),s=t(35),a=t(515);function i(r){var t="function"===typeof Map?new Map:void 0;return e.exports=i=function(e){if(null===e||!s(e))return e;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return a(e,arguments,n(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,e)},e.exports.__esModule=!0,e.exports.default=e.exports,i(r)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var s=r[n]={exports:{}};return e[n].call(s.exports,s,s.exports,t),s.exports}!function(){"use strict";function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}function r(){r=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,s=Object.defineProperty||function(e,r,t){e[r]=t.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{l({},"")}catch(S){l=function(e,r,t){return e[r]=t}}function g(e,r,t,n){var o=r&&r.prototype instanceof p?r:p,a=Object.create(o.prototype),i=new P(n||[]);return s(a,"_invoke",{value:_(e,t,i)}),a}function m(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(S){return{type:"throw",arg:S}}}t.wrap=g;var f={};function p(){}function A(){}function x(){}var d={};l(d,i,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(M([])));y&&y!==n&&o.call(y,i)&&(d=y);var v=x.prototype=p.prototype=Object.create(d);function b(e){["next","throw","return"].forEach((function(r){l(e,r,(function(e){return this._invoke(r,e)}))}))}function w(r,t){function n(s,a,i,c){var u=m(r[s],r,a);if("throw"!==u.type){var l=u.arg,g=l.value;return g&&"object"==e(g)&&o.call(g,"__await")?t.resolve(g.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(g).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}var a;s(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}})}function _(e,r,t){var n="suspendedStart";return function(o,s){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw s;return O()}for(t.method=o,t.arg=s;;){var a=t.delegate;if(a){var i=k(a,t);if(i){if(i===f)continue;return i}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===n)throw n="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n="executing";var c=m(e,r,t);if("normal"===c.type){if(n=t.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(n="completed",t.method="throw",t.arg=c.arg)}}}function k(e,r){var t=r.method,n=e.iterator[t];if(void 0===n)return r.delegate=null,"throw"===t&&e.iterator.return&&(r.method="return",r.arg=void 0,k(e,r),"throw"===r.method)||"return"!==t&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+t+"' method")),f;var o=m(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var s=o.arg;return s?s.done?(r[e.resultName]=s.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function j(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function E(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function M(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var t=-1,n=function r(){for(;++t<e.length;)if(o.call(e,t))return r.value=e[t],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return A.prototype=x,s(v,"constructor",{value:x,configurable:!0}),s(x,"constructor",{value:A,configurable:!0}),A.displayName=l(x,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===A||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,l(e,u,"GeneratorFunction")),e.prototype=Object.create(v),e},t.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,s){void 0===s&&(s=Promise);var a=new w(g(e,r,n,o),s);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(v),l(v,u,"Generator"),l(v,i,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var r=Object(e),t=[];for(var n in r)t.push(n);return t.reverse(),function e(){for(;t.length;){var n=t.pop();if(n in r)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=M,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function t(t,n){return a.type="throw",a.arg=e,r.next=t,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n],a=s.completion;if("root"===s.tryLoc)return t("end");if(s.tryLoc<=this.prev){var i=o.call(s,"catchLoc"),c=o.call(s,"finallyLoc");if(i&&c){if(this.prev<s.catchLoc)return t(s.catchLoc,!0);if(this.prev<s.finallyLoc)return t(s.finallyLoc)}else if(i){if(this.prev<s.catchLoc)return t(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return t(s.finallyLoc)}}}},abrupt:function(e,r){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=r&&r<=s.finallyLoc&&(s=null);var a=s?s.completion:{};return a.type=e,a.arg=r,s?(this.method="next",this.next=s.finallyLoc,f):this.complete(a)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),f},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),E(t),f}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var o=n.arg;E(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,t){return this.delegate={iterator:M(e),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=void 0),f}},t}function n(r){var t=function(r,t){if("object"!==e(r)||null===r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,t||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===e(t)?t:String(t)}function o(e,r,t,n,o,s,a){try{var i=e[s](a),c=i.value}catch(u){return void t(u)}i.done?r(c):Promise.resolve(c).then(n,o)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,s){var a=e.apply(r,t);function i(e){o(a,n,s,i,c,"next",e)}function c(e){o(a,n,s,i,c,"throw",e)}i(void 0)}))}}var a=t(990);function i(){return c.apply(this,arguments)}function c(){return(c=s(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.tabs.query({active:!0,currentWindow:!0});case 2:return t=e.sent,e.abrupt("return",t[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return l.apply(this,arguments)}function l(){return(l=s(r().mark((function e(t){var o,s,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.storage.local.get(t);case 2:return s=e.sent,i=null!==(o=null===s||void 0===s?void 0:s[t])&&void 0!==o?o:0,e.abrupt("return",a.storage.local.set((r={},u=i+1,(c=n(c=t))in r?Object.defineProperty(r,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[c]=u,r)));case 5:case"end":return e.stop()}var r,c,u}),e)})))).apply(this,arguments)}function g(){return g=s(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.storage.local.clear();case 2:a.runtime.onMessage.addListener(function(){var e=s(r().mark((function e(t){var n,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("background"!==t.to){e.next=8;break}return console.log("background handled: ",t.action),e.next=4,i();case 4:if(n=e.sent,!(o=n.id)){e.next=8;break}return e.abrupt("return",u(o.toString()));case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}a.runtime.onInstalled.addListener((function(){(function(){return g.apply(this,arguments)})().then((function(){console.log("[background] loaded ")}))}))}()}();
//# sourceMappingURL=background.js.map