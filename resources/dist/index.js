!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/index.js")}({"./node_modules/redux-thunk/dist/redux-thunk.min.js":function(e,t,n){e.exports=function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,i=t.getState;return function(t){return function(r){return"function"==typeof r?r(n,i,e):t(r)}}}}t.__esModule=!0;var i=n();i.withExtraArgument=n,t.default=i}])},"./node_modules/redux/dist/redux.min.js":function(e,t,n){e.exports=function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var r=n(2),o=i(r),a=n(7),s=i(a),u=n(6),p=i(u),c=n(5),l=i(c),d=n(1),f=i(d),v=n(3);i(v),t.createStore=o.default,t.combineReducers=s.default,t.bindActionCreators=p.default,t.applyMiddleware=l.default,t.compose=f.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var i=t[t.length-1],r=t.slice(0,-1);return function(){return r.reduceRight(function(e,t){return t(e)},i.apply(void 0,arguments))}}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ActionTypes=void 0,t.default=function e(t,n,i){function r(){g===v&&(g=v.slice())}function a(){return f}function p(e){if("function"!=typeof e)throw Error("Expected listener to be a function.");var t=!0;return r(),g.push(e),function(){if(t){t=!1,r();var n=g.indexOf(e);g.splice(n,1)}}}function c(e){if(!(0,o.default)(e))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(h)throw Error("Reducers may not dispatch actions.");try{h=!0,f=d(f,e)}finally{h=!1}for(var t=v=g,n=0;t.length>n;n++)t[n]();return e}var l;if("function"==typeof n&&void 0===i&&(i=n,n=void 0),void 0!==i){if("function"!=typeof i)throw Error("Expected the enhancer to be a function.");return i(e)(t,n)}if("function"!=typeof t)throw Error("Expected the reducer to be a function.");var d=t,f=n,v=[],g=v,h=!1;return c({type:u.INIT}),(l={dispatch:c,subscribe:p,getState:a,replaceReducer:function(e){if("function"!=typeof e)throw Error("Expected the nextReducer to be a function.");d=e,c({type:u.INIT})}})[s.default]=function(){var e,t=p;return(e={subscribe:function(e){function n(){e.next&&e.next(a())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");n();var i=t(n);return{unsubscribe:i}}})[s.default]=function(){return this},e},l};var r=n(4),o=i(r),a=n(12),s=i(a),u=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw Error(e)}catch(e){}}},function(e,t,n){var i=n(8),r=n(9),o=n(11),a="[object Object]",s=Function.prototype,u=Object.prototype,p=s.toString,c=u.hasOwnProperty,l=p.call(Object),d=u.toString;e.exports=function(e){if(!o(e)||d.call(e)!=a||r(e))return!1;var t=i(e);if(null===t)return!0;var n=c.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&p.call(n)==l}},function(e,t,n){"use strict";t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,r,a){var s=e(n,r,a),u=s.dispatch,p=[],c={getState:s.getState,dispatch:function(e){return u(e)}};return p=t.map(function(e){return e(c)}),u=o.default.apply(void 0,p)(s.dispatch),i({},s,{dispatch:u})}}};var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}t.__esModule=!0,t.default=function(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var i=Object.keys(e),r={},o=0;i.length>o;o++){var a=i[o],s=e[a];"function"==typeof s&&(r[a]=n(s,t))}return r}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=t&&t.type,i=n&&'"'+n+'"'||"an action";return"Given action "+i+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(e){Object.keys(e).forEach(function(t){var n=e[t],i=n(void 0,{type:a.ActionTypes.INIT});if(void 0===i)throw Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var r="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if(void 0===n(void 0,{type:r}))throw Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}t.__esModule=!0,t.default=function(e){for(var t=Object.keys(e),n={},i=0;t.length>i;i++){var a=t[i];"function"==typeof e[a]&&(n[a]=e[a])}var s,u=Object.keys(n);try{o(n)}catch(e){s=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(s)throw s;for(var i=!1,o={},a=0;u.length>a;a++){var p=u[a],c=n[p],l=e[p],d=c(l,t);if(void 0===d){var f=r(p,t);throw Error(f)}o[p]=d,i=i||d!==l}return i?o:e}};var a=n(2),s=n(4),u=(i(s),n(3));i(u)},function(e,t,n){var i=n(10),r=i(Object.getPrototypeOf,Object);e.exports=r},function(e,t){e.exports=function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t){e.exports=function(e){return!!e&&"object"==typeof e}},function(e,t,n){e.exports=n(13)},function(e,t,n){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),r=function(e){return e&&e.__esModule?e:{default:e}}(i),o=void 0;void 0!==e?o=e:"undefined"!=typeof window&&(o=window);var a=(0,r.default)(o);t.default=a}).call(t,function(){return this}())},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}}])},"./src/counts.js":function(e,t){t.getEditCountBucket=function(e){var t=void 0;return 0===e?t="0":e>=1&&e<=4?t="1-4":e>=5&&e<=99?t="5-99":e>=100&&e<=999?t="100-999":e>=1e3&&(t="1000+"),t+" edits"},t.getPreviewCountBucket=function(e){var t=void 0;return 0===e?t="0":e>=1&&e<=4?t="1-4":e>=5&&e<=20?t="5-20":e>=21&&(t="21+"),void 0!==t?t+" previews":"unknown"}},"./src/index.js":function(e,t,n){"use strict";n.r(t);var i={};n.d(i,"boot",function(){return Se}),n.d(i,"fetch",function(){return ke}),n.d(i,"linkDwell",function(){return Ie}),n.d(i,"abandon",function(){return xe}),n.d(i,"linkClick",function(){return Ae}),n.d(i,"previewDwell",function(){return Pe}),n.d(i,"previewShow",function(){return Le}),n.d(i,"pageviewLogged",function(){return Ne}),n.d(i,"showSettings",function(){return Ce}),n.d(i,"hideSettings",function(){return Oe}),n.d(i,"saveSettings",function(){return De}),n.d(i,"eventLogged",function(){return Ge}),n.d(i,"statsvLogged",function(){return Re});var r=n("./node_modules/redux/dist/redux.min.js"),o=n("./node_modules/redux-thunk/dist/redux-thunk.min.js"),a=n.n(o),s=jQuery,u={off:"off",on:"on",control:"control"},p={THUMBNAIL_SIZE:320*(s.bracketedDevicePixelRatio&&s.bracketedDevicePixelRatio()||1),EXTRACT_LENGTH:525},c={TYPE_GENERIC:"generic",TYPE_PAGE:"page",TYPE_DISAMBIGUATION:"disambiguation"};function l(e,t,n,i,r,o,a,s){var u=function(e){if(void 0===e||null===e||0===e.length)return;return e}(r);return{title:e,url:t,languageCode:n,languageDirection:i,extract:u,type:function(e,t){if(void 0===t)return c.TYPE_GENERIC;switch(e){case c.TYPE_GENERIC:case c.TYPE_DISAMBIGUATION:case c.TYPE_PAGE:return e;default:return c.TYPE_PAGE}}(o,u),thumbnail:a,pageId:s}}function d(e,t){return l(e,t,"","",[],"")}var f=jQuery,v=window.mediaWiki;function g(e,t){var n=e;return void 0===e?[]:0===n.length?[]:n=function(e,t){var n=[],i="<bi-"+Math.random()+">",r="<snip-"+Math.random()+">";t=t.replace(/\s+/g," ").trim();var o=v.RegExp.escape(t),a=new RegExp("(^|\\s)("+o+")(|$)","i");return(e=(e=(e=e.replace(/\s+/," ")).replace(a,"$1"+r+i+"$2"+r+"$3")).split(r)).forEach(function(e){0===e.indexOf(i)?n.push(f("<b>").text(e.substring(i.length))):n.push(document.createTextNode(e))}),n}(n,t)}var h=300,w=jQuery;function m(e){if(e.query&&e.query.pages&&e.query.pages.length)return e.query.pages[0];throw new Error("API response `query.pages` is empty.")}function E(e){var t=w.extend({},e);return t.extract=g(e.extract,e.title),t}function T(e){return l(e.title,e.canonicalurl,e.pagelanguagehtmlcode,e.pagelanguagedir,e.extract,e.type,e.thumbnail,e.pageid)}var y="https://www.mediawiki.org/wiki/Specs/Summary/1.2.0",b=window.mediaWiki,_=jQuery;function S(e,t,n){function i(n){var i=t.endpoint;return e({url:i+encodeURIComponent(n),headers:{Accept:'application/json; charset=utf-8; profile="'+y+'"'}})}return{fetch:i,convertPageToModel:k,getPageSummary:function(e){var r=_.Deferred();return i(e).then(function(i){i&&i.title||(i=_.extend(!0,i||{},{title:e})),void 0===i.extract&&(i.extract=""),r.resolve(k(i,t.THUMBNAIL_SIZE,n))},function(t,n,i){404===t.status?r.resolve(d(e,new b.Title(e).getUrl())):r.reject("http",{xhr:t,textStatus:n,exception:i})}),r.promise()}}}function k(e,t,n){return l(e.title,new b.Title(e.title).getUrl(),e.lang,e.dir,n(e),e.type,e.thumbnail?function(e,t,n){var i=e.source.split("/"),r=i[i.length-1],o=r.indexOf("px-");if(-1===o)return t;var a=r.substr(o+3),s=void 0,u=void 0;return e.width>e.height?(s=n,u=Math.floor(n/e.width*e.height)):(s=Math.floor(n/e.height*e.width),u=n),s>=t.width&&-1===a.indexOf(".svg")?t:(i[i.length-1]=s+"px-"+a,{source:i.join("/"),width:s,height:u})}(e.thumbnail,e.originalimage,t):void 0,e.pageid)}function I(e){var t=e.extract_html;return 0===t.length?[]:$.parseHTML(t)}function x(e){return g(e.extract,e.title)}var A=mediaWiki,P=jQuery;function L(e){var t=P.extend({},p,{endpoint:e.get("wgPopupsRestGatewayEndpoint")});switch(e.get("wgPopupsGateway")){case"mwApiPlain":return function(e,t){function n(n){return e.get({action:"query",prop:"info|extracts|pageimages|revisions|info",formatversion:2,redirects:!0,exintro:!0,exchars:t.EXTRACT_LENGTH,explaintext:!0,piprop:"thumbnail",pithumbsize:t.THUMBNAIL_SIZE,pilicense:"any",rvprop:"timestamp",inprop:"url",titles:n,smaxage:h,maxage:h,uselang:"content"},{headers:{"X-Analytics":"preview=1"}})}return{fetch:n,extractPageFromResponse:m,convertPageToModel:T,getPageSummary:function(e){return n(e).then(m).then(E).then(T)},formatPlainTextExtract:E}}(new A.Api,p);case"restbasePlain":return S(P.ajax,t,x);case"restbaseHTML":return S(P.ajax,t,I);default:throw new Error("Unknown gateway")}}var N="mwe-popups-enabled",C="ext.popups.core.previewCount";var O=window.mediaWiki,D=jQuery;var G=window.mediaWiki;function R(e){return G.html.escape(e)}function H(e){var t=R(e.heading),n=R(e.saveLabel),i=R(e.helpText);return("\n\t\t<section id='mwe-popups-settings'>\n\t\t\t<header>\n\t\t\t\t<div>\n\t\t\t\t\t<div class='mw-ui-icon mw-ui-icon-element mw-ui-icon-popups-close close'>Close</div>\n\t\t\t\t</div>\n\t\t\t\t<h1>"+t+"</h1>\n\t\t\t\t<div>\n\t\t\t\t\t<button class='save mw-ui-button mw-ui-progressive'>"+n+"</button>\n\t\t\t\t\t<button class='okay mw-ui-button mw-ui-progressive' style='display:none;'>"+R(e.okLabel)+"</button>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t\t<main id='mwe-popups-settings-form'>\n\t\t\t\t<form>\n\t\t\t\t\t"+function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){var t=e.id,n=e.name,i=e.description,r=e.isChecked;return{id:R(t),name:R(n),description:i?R(i):"",isChecked:r}})}(e.choices).map(function(e){var t=e.id,n=e.name,i=e.description;return"\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tname='mwe-popups-setting'\n\t\t\t\t\t\t\t"+(e.isChecked?"checked":"")+"\n\t\t\t\t\t\t\tvalue='"+t+"'\n\t\t\t\t\t\t\ttype='radio'\n\t\t\t\t\t\t\tid='mwe-popups-settings-"+t+"'>\n\t\t\t\t\t\t<label for='mwe-popups-settings-"+t+"'>\n\t\t\t\t\t\t\t<span>"+n+"</span>\n\t\t\t\t\t\t\t"+i+"\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>"}).join("")+"\n\t\t\t\t</form>\n\t\t\t</main>\n\t\t\t<div class='mwe-popups-settings-help' style='display:none;'>\n\t\t\t\t<p>"+i+"</p>\n\t\t\t</div>\n\t\t</section>\n\t").trim()}var W=window.mediaWiki;var j=jQuery;function M(){var e=void 0,t=void 0;return function(n){var i,r,o;return e||(i=B(),r=W.config.get("wgExtensionAssetsPath")+"/Popups/resources/ext.popups.main/images/",o=[{id:"simple",name:W.msg("popups-settings-option-simple"),description:W.msg("popups-settings-option-simple-description"),image:r+"hovercard.svg",isChecked:!0},{id:"advanced",name:W.msg("popups-settings-option-advanced"),description:W.msg("popups-settings-option-advanced-description"),image:r+"navpop.svg"},{id:"off",name:W.msg("popups-settings-option-off")}],i||o.splice(1,1),e=$($.parseHTML(H({heading:W.msg("popups-settings-title"),closeLabel:W.msg("popups-settings-cancel"),saveLabel:W.msg("popups-settings-save"),helpText:W.msg("popups-settings-help"),okLabel:W.msg("popups-settings-help-ok"),descriptionText:W.msg("popups-settings-description"),choices:o}))),t=j("<div>").addClass("mwe-popups-overlay"),e.find(".save").click(function(){var t="simple"===e.find("input[name=mwe-popups-setting]:checked, #mwe-popups-settings").val();n.saveSettings(t)}),e.find(".close, .okay").click(n.hideSettings)),{appendTo:function(n){t.appendTo(n),e.appendTo(t)},show:function(){t.show()},hide:function(){t.hide()},toggleHelp:function(e){!function(e,t){var n=j("#mwe-popups-settings");t?(n.find("main, .save, .close").hide(),n.find(".mwe-popups-settings-help, .okay").show()):(n.find("main, .save, .close").show(),n.find(".mwe-popups-settings-help, .okay").hide())}(0,e)},setEnabled:function(t){var n="off";t?n="simple":B()&&(n="advanced"),e.find("#mwe-popups-settings-"+n).prop("checked",!0)}}}}function B(){return"undefined"!=typeof pg&&void 0!==pg.fn.disablePopups}function F(e,t){var n=void 0;e.subscribe(function(){var i=n;i!==(n=e.getState())&&t(i,n)})}var U=window.mediaWiki;function V(e,t){return function(e,t){if(!e)return null;var n=U.Title.newFromText(e);return n&&$.inArray(n.namespace,t)>=0?n:null}(function(e,t){var n=new RegExp(U.RegExp.escape(t.get("wgArticlePath")).replace("\\$1","(.+)")),i=void 0;try{i=new U.Uri(e)}catch(e){return}if(i.host===location.hostname){var r=Object.keys(i.query).length;if(!r){var o=n.exec(i.path);return o?decodeURIComponent(o[1]):void 0}return 1===r&&i.query.hasOwnProperty("title")?i.query.title:void 0}}(e.href,t),t.get("wgContentNamespaces"))}var Y=jQuery;function K(e){var t=Y.Deferred();return setTimeout(function(){t.resolve()},e),t.promise()}var X=n("./src/ui/pokey-mask.svg"),Q=n.n(X),q={portraitImage:{h:250,w:203},landscapeImage:{h:200,w:320}},z=jQuery;function Z(e){var t=z.bracketedDevicePixelRatio();if(!e)return null;var n=e.width<e.height,i=e.width/t,r=e.height/t;if(!n&&i<q.landscapeImage.w||n&&r<q.portraitImage.h||e.source.indexOf("\\")>-1||e.source.indexOf("'")>-1||e.source.indexOf('"')>-1)return null;var o=void 0,a=void 0,s=void 0,u=void 0,p=void 0;return n?(o=i>q.portraitImage.w?(i-q.portraitImage.w)/-2:q.portraitImage.w-i,a=r>q.portraitImage.h?(r-q.portraitImage.h)/-2:0,s=q.portraitImage.w,u=q.portraitImage.h):(o=0,a=r>q.landscapeImage.h?(r-q.landscapeImage.h)/-2:0,s=q.landscapeImage.w+3,u=r>q.landscapeImage.h?q.landscapeImage.h:r,p="mwe-popups-mask"),{el:function(e,t,n,i,r,o,a,s,u){var p="http://www.w3.org/2000/svg",c=z(document.createElementNS(p,"image"));return c[0].setAttributeNS("http://www.w3.org/1999/xlink","href",t),c.addClass(e).attr({x:n,y:i,width:r,height:o,"clip-path":"url(#"+u+")"}),z(document.createElementNS(p,"svg")).attr({xmlns:p,width:a,height:s}).append(c)}(n?"mwe-popups-is-tall":"mwe-popups-is-not-tall",e.source,o,a,i,r,s,u,p),isTall:n,width:i,height:r}}function J(e,t,n,i){var r=e.title,o=e.url,a=e.type;return r=R(r),n=R(n),i=R(i),("\n\t<div class='mwe-popups mwe-popups-type-"+a+"' role='tooltip' aria-hidden>\n\t\t<div class='mwe-popups-container'>\n\t\t\t<div class='mw-ui-icon mw-ui-icon-element mw-ui-icon-preview-"+a+"'></div>\n\t\t\t"+(t?"<strong class='mwe-popups-title'>"+r+"</strong>":"")+"\n\t\t\t<a href='"+o+"' class='mwe-popups-extract'>\n\t\t\t\t\t<span class='mwe-popups-message'>"+n+"</span>\n\t\t\t</a>\n\t\t\t<footer>\n\t\t\t\t<a href='"+o+"' class='mwe-popups-read-link'>"+i+"</a>\n\t\t\t</footer>\n\t\t</div>\n\t</div>\n\t").trim()}var ee=window.mediaWiki,te=jQuery,ne=te(window),ie=450,re=320,oe=8;function ae(){var e;e=document.body,te("<div>").attr("id","mwe-popups-svg").html(Q.a).appendTo(e)}function se(e){var t=function(e){switch(e.type){case c.TYPE_PAGE:return function(e){var t=Z(e.thumbnail),n=null!==t,i=e.extract,r=te(te.parseHTML(function(e,t){var n=e.url,i=e.languageCode,r=e.languageDirection;return("\n\t\t<div class='mwe-popups' role='tooltip' aria-hidden>\n\t\t\t<div class='mwe-popups-container'>\n\t\t\t\t"+(t?"<a href='"+n+"' class='mwe-popups-discreet'></a>":"")+"\n\t\t\t\t<a dir='"+r+"' lang='"+i+"' class='mwe-popups-extract' href='"+n+"'></a>\n\t\t\t\t<footer>\n\t\t\t\t\t<a class='mwe-popups-settings-icon mw-ui-icon mw-ui-icon-element mw-ui-icon-popups-settings'></a>\n\t\t\t\t</footer>\n\t\t\t</div>\n\t\t</div>\n\t").trim()}(e,n)));n&&r.find(".mwe-popups-discreet").append(t.el);i&&r.find(".mwe-popups-extract").append(i);return{el:r,hasThumbnail:n,thumbnail:t,isTall:n&&t.isTall}}(e);case c.TYPE_DISAMBIGUATION:return function(e){var t=ee.msg("popups-preview-disambiguation"),n=ee.msg("popups-preview-disambiguation-link");return{el:te(te.parseHTML(J(e,!0,t,n))),hasThumbnail:!1,isTall:!1}}(e);default:return function(e){var t=ee.msg("popups-preview-no-preview"),n=ee.msg("popups-preview-footer-read");return{el:te(te.parseHTML(J(e,!1,t,n))),hasThumbnail:!1,isTall:!1}}(e)}}(e);return{show:function(e,n,i){return function(e,t,n,i,r,o){var a=function(e,t,n,i,r){var o=!1,a=!1,s=t.pageY?ue(t.pageY-i.scrollTop,n.clientRects,!1)+i.scrollTop+r:n.offset.top+n.height+r,u=t.pageX?t.pageX:n.offset.left,p=t.clientY?t.clientY:s;u>i.width/2&&(u+=t.pageX?0:n.width,u-=e?ie:re,o=!0);t.pageX&&(u+=o?20:-20);p>i.height/2&&(a=!0,s=n.offset.top,t.pageY&&(s=ue(t.pageY-i.scrollTop,n.clientRects,!0)+i.scrollTop),s-=r);return{offset:{top:s,left:u},flippedX:o,flippedY:a}}(e.isTall,{pageX:t.pageX,pageY:t.pageY,clientY:t.clientY},{clientRects:n.get(0).getClientRects(),offset:n.offset(),width:n.width(),height:n.height()},{scrollTop:ne.scrollTop(),width:ne.width(),height:ne.height()},oe);return e.el.appendTo(o),function(e,t,n,i,r){var o=e.el,a=e.isTall,s=e.hasThumbnail,u=e.thumbnail,p=t.flippedY,c=t.flippedX,l=t.offset.top;!p&&!a&&s&&u.height<i&&o.find(".mwe-popups-extract").css("margin-top",u.height-r),o.addClass(n.join(" ")),p&&(l-=o.outerHeight()),o.css({top:l,left:t.offset.left+"px"}),p&&s&&o.find("image")[0].removeAttribute("clip-path"),p&&c&&s&&a&&o.find("image")[0].setAttribute("clip-path","url(#mwe-popups-landscape-mask-flip)"),c&&!p&&s&&!a&&o.find("image")[0].setAttribute("clip-path","url(#mwe-popups-mask-flip)"),c&&!p&&s&&a&&o.removeClass("mwe-popups-no-image-tri").find("image")[0].setAttribute("clip-path","url(#mwe-popups-landscape-mask)")}(e,a,function(e,t){var n=[];return t.flippedY?n.push("mwe-popups-fade-in-down"):n.push("mwe-popups-fade-in-up"),t.flippedY&&t.flippedX&&n.push("flipped_x_y"),t.flippedY&&!t.flippedX&&n.push("flipped_y"),t.flippedX&&!t.flippedY&&n.push("flipped_x"),e.hasThumbnail&&!e.isTall||t.flippedY||n.push("mwe-popups-no-image-tri"),!e.hasThumbnail||e.isTall||t.flippedY||n.push("mwe-popups-image-tri"),e.isTall?n.push("mwe-popups-is-tall"):n.push("mwe-popups-is-not-tall"),n}(e,a),q.landscapeImage.h,oe),e.el.show(),K(200).then(function(){!function(e,t){e.el.on("mouseenter",t.previewDwell).on("mouseleave",t.previewAbandon),e.el.click(t.click),e.el.find(".mwe-popups-settings-icon").attr("href",t.settingsUrl).click(function(e){e.stopPropagation(),t.showSettings(e)})}(e,i)}).then(function(){i.previewShow(r)})}(t,e,te(e.target),n,i,document.body)},hide:function(){return function(e){var t=e.el.hasClass("mwe-popups-fade-in-up")?"mwe-popups-fade-in-up":"mwe-popups-fade-in-down",n="mwe-popups-fade-in-up"===t?"mwe-popups-fade-out-down":"mwe-popups-fade-out-up";return e.el.removeClass(t).addClass(n),K(150).then(function(){e.el.remove()})}(t)}}}function ue(e,t,n){var i=null,r=void 0;return Array.prototype.slice.call(t).forEach(function(t){var o=Math.abs(e-t.top+e-t.bottom);(null===i||i>o)&&(i=o,r=n?Math.floor(t.top):Math.ceil(t.bottom))}),r}var pe=window.mediaWiki,ce=jQuery;var le=jQuery;var de=jQuery;function fe(e,t,n){return e[t]&&e[t][n]}function ve(e,t,n,i,r){var o=fe(t,n,i);e&&fe(e,n,i)!==o&&r(o)}var ge={footerLink:function(e){var t=void 0;return function(n,i){void 0===t&&(t=function(){var e=ce("<li>").append(ce("<a>").attr("href","#").text(pe.message("popups-settings-enable").text()));e.hide();var t=ce("#footer-places, #f-list");return 0===t.length&&(t=ce("#footer li").parent()),t.append(e),e}()).click(function(t){t.preventDefault(),e.showSettings()}),i.settings.shouldShowFooterLink?t.show():t.hide()}},eventLogging:function(e,t,n){return function(i,r){var o=r.eventLogging,a=o.event;a&&(a=le.extend(!0,{},o.baseData,a,{timestamp:n()}),t("event.Popups",a),e.eventLogged(a))}},linkTitle:function(){var e=void 0;return function(t,n){var i,r=t&&t.preview.activeLink;n.preview.enabled&&(r&&t.preview.activeLink!==n.preview.activeLink&&(i=t.preview.activeLink,de(i).attr("title",e),e=void 0),n.preview.activeLink&&function(t){var n=de(t);e||(e=n.attr("title"),n.attr("title",""))}(n.preview.activeLink))}},pageviews:function(e,t){return function(n,i){var r=void 0;i.pageviews&&i.pageviews.pageview&&i.pageviews.page&&(r=i.pageviews.page,t("event.VirtualPageView",$.extend({},{source_page_id:r.id,source_namespace:r.namespaceId,source_title:r.title,source_url:r.url},i.pageviews.pageview)),e.pageviewLogged())}},render:function(e){var t=void 0;return function(n,i){i.preview.shouldShow&&!t?(t=se(i.preview.fetchResponse)).show(i.preview.activeEvent,e,i.preview.activeToken):!i.preview.shouldShow&&t&&(t.hide(),t=void 0)}},settings:function(e,t){var n=void 0;return function(i,r){i&&(!1===i.settings.shouldShow&&!0===r.settings.shouldShow?(n||(n=t(e)).appendTo(document.body),n.setEnabled(r.preview.enabled),n.show()):!0===i.settings.shouldShow&&!1===r.settings.shouldShow&&n.hide(),i.settings.showHelp!==r.settings.showHelp&&n.toggleHelp(r.settings.showHelp))}},statsv:function(e,t){return function(n,i){var r=i.statsv;r.action&&(t(r.action,r.data),e.statsvLogged())}},syncUserSettings:function(e){return function(t,n){ve(t,n,"eventLogging","previewCount",e.setPreviewCount),ve(t,n,"preview","enabled",e.setIsEnabled)}}},he={BOOT:"BOOT",LINK_DWELL:"LINK_DWELL",ABANDON_START:"ABANDON_START",ABANDON_END:"ABANDON_END",LINK_CLICK:"LINK_CLICK",FETCH_START:"FETCH_START",FETCH_END:"FETCH_END",FETCH_COMPLETE:"FETCH_COMPLETE",FETCH_FAILED:"FETCH_FAILED",PAGEVIEW_LOGGED:"PAGEVIEW_LOGGED",PREVIEW_DWELL:"PREVIEW_DWELL",PREVIEW_SHOW:"PREVIEW_SHOW",PREVIEW_CLICK:"PREVIEW_CLICK",PREVIEW_SEEN:"PREVIEW_SEEN",SETTINGS_SHOW:"SETTINGS_SHOW",SETTINGS_HIDE:"SETTINGS_HIDE",SETTINGS_CHANGE:"SETTINGS_CHANGE",EVENT_LOGGED:"EVENT_LOGGED",STATSV_LOGGED:"STATSV_LOGGED"},we=jQuery,me=window.mediaWiki,Ee=150,Te=1e3,ye=500,be=300;function _e(e){return e.timestamp=me.now(),e}function Se(e,t,n,i,r,o){var a=r.get("wgUserEditCount"),s=n.getPreviewCount();return{type:he.BOOT,isEnabled:e,isNavPopupsEnabled:r.get("wgPopupsConflictsWithNavPopupGadget"),sessionToken:t.sessionId(),pageToken:i(),page:{url:o,title:r.get("wgTitle"),namespaceId:r.get("wgNamespaceNumber"),id:r.get("wgArticleId")},user:{isAnon:t.isAnon(),editCount:a,previewCount:s}}}function ke(e,t,n,i){var r=t.getPrefixedDb(),o=t.namespace;return function(a){a(_e({type:he.FETCH_START,el:n,title:r,namespaceId:o}));var s=e.getPageSummary(r).then(function(e){return a(_e({type:he.FETCH_END,el:n})),e}).catch(function(e){throw a({type:he.FETCH_FAILED,el:n}),e});return we.when(s,K(ye-Ee)).then(function(e){a({type:he.FETCH_COMPLETE,el:n,result:e,token:i})}).catch(function(e,o){o&&o.xhr&&0===o.xhr.readyState&&"error"===o.textStatus&&""===o.exception||a({type:he.FETCH_COMPLETE,el:n,result:d(r,t.getUrl()),token:i})})}}function Ie(e,t,n,i,r){var o=r(),a=e.getPrefixedDb(),s=e.namespace;return function(r,u){var p=_e({type:he.LINK_DWELL,el:t,event:n,token:o,title:a,namespaceId:s});function c(){return u().preview.activeToken===o}return r(p),c()?K(Ee).then(function(){if(u().preview.enabled&&c())return r(ke(i,e,t,o))}):we.Deferred().resolve().promise()}}function xe(){return function(e,t){var n=t().preview.activeToken;return n?(e(_e({type:he.ABANDON_START,token:n})),K(be).then(function(){e({type:he.ABANDON_END,token:n})})):we.Deferred().resolve().promise()}}function Ae(e){return _e({type:he.LINK_CLICK,el:e})}function Pe(){return{type:he.PREVIEW_DWELL}}function Le(e){return function(t,n){return t(_e({type:he.PREVIEW_SHOW,token:e})),K(Te).then(function(){var i=n().preview,r=i&&i.fetchResponse,o=i&&i.activeToken,a=r&&[c.TYPE_PAGE,c.TYPE_DISAMBIGUATION].indexOf(r.type)>-1;o&&o===e&&r&&a&&t({type:he.PREVIEW_SEEN,title:r.title,pageId:r.pageId,namespace:0})})}}function Ne(){return{type:he.PAGEVIEW_LOGGED}}function Ce(){return{type:he.SETTINGS_SHOW}}function Oe(){return{type:he.SETTINGS_HIDE}}function De(e){return function(t,n){t({type:he.SETTINGS_CHANGE,wasEnabled:n().preview.enabled,enabled:e})}}function Ge(e){return{type:he.EVENT_LOGGED,event:e}}function Re(){return{type:he.STATSV_LOGGED}}function He(e,t){var n={};for(var i in e)e.hasOwnProperty(i)&&!t.hasOwnProperty(i)&&(n[i]=e[i]);for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}var We=n("./src/counts.js");function je(e,t){return t.linkInteractionToken=e.token,t.pageTitleHover=e.title,t.namespaceIdHover=e.namespaceId,void 0!==e.timeToPreviewShow&&(t.previewType=e.previewType,t.perceivedWait=e.timeToPreviewShow),t}function Me(e){var t={totalInteractionTime:Math.round(e.finished-e.started)};if(!e.finalized)return t.action=e.timeToPreviewShow?"dismissed":"dwelledButAbandoned",je(e,t)}var Be={eventLogging:function(e,t){var n,i,r=void 0,o=void 0,a=[he.FETCH_COMPLETE,he.ABANDON_END,he.PREVIEW_SHOW];if(void 0===e&&(e={previewCount:void 0,baseData:{},interaction:void 0,event:void 0}),-1!==a.indexOf(t.type)&&(!e.interaction||t.token!==e.interaction.token))return e;if(!e.interaction&&t.type!==he.BOOT&&t.type!==he.LINK_DWELL&&t.type!==he.EVENT_LOGGED&&t.type!==he.SETTINGS_CHANGE)return e;switch(t.type){case he.BOOT:return He(e,{previewCount:t.user.previewCount,baseData:(n=t,i={pageTitleSource:n.page.title,namespaceIdSource:n.page.namespaceId,pageIdSource:n.page.id,isAnon:n.user.isAnon,popupEnabled:n.isEnabled,pageToken:n.pageToken,sessionToken:n.sessionToken,previewCountBucket:We.getPreviewCountBucket(n.user.previewCount),hovercardsSuppressedByGadget:n.isNavPopupsEnabled},n.user.isAnon||(i.editCountBucket=We.getEditCountBucket(n.user.editCount)),i),event:{action:"pageLoaded"}});case he.EVENT_LOGGED:return o=He(e,{event:void 0}),t.event.linkInteractionToken&&e.interaction&&t.event.linkInteractionToken===e.interaction.token&&(o.interaction=void 0),o;case he.FETCH_COMPLETE:return He(e,{interaction:He(e.interaction,{previewType:t.result.type})});case he.PREVIEW_SHOW:return He(e,{previewCount:r=e.previewCount+1,baseData:He(e.baseData,{previewCountBucket:We.getPreviewCountBucket(r)}),interaction:He(e.interaction,{timeToPreviewShow:Math.round(t.timestamp-e.interaction.started)})});case he.LINK_DWELL:return e.interaction&&t.el===e.interaction.link?He(e,{interaction:He(e.interaction,{isUserDwelling:!0})}):He(e,{interaction:{link:t.el,title:t.title,namespaceId:t.namespaceId,token:t.token,started:t.timestamp,isUserDwelling:!0},event:e.interaction?Me(e.interaction):void 0});case he.PREVIEW_DWELL:return He(e,{interaction:He(e.interaction,{isUserDwelling:!0})});case he.LINK_CLICK:return He(e,{interaction:He(e.interaction,{finalized:!0}),event:je(e.interaction,{action:"opened",totalInteractionTime:Math.round(t.timestamp-e.interaction.started)})});case he.ABANDON_START:return He(e,{interaction:He(e.interaction,{finished:t.timestamp,isUserDwelling:!1})});case he.ABANDON_END:return e.interaction.isUserDwelling?e:He(e,{interaction:void 0,event:Me(e.interaction)});case he.SETTINGS_SHOW:return He(e,{event:je(e.interaction,{action:"tapped settings cog"})});case he.SETTINGS_CHANGE:return t.wasEnabled&&!t.enabled?He(e,{event:{action:"disabled",popupEnabled:!1}}):e;default:return e}},pageviews:function(e,t){switch(void 0===e&&(e={pageview:void 0}),t.type){case he.BOOT:return He(e,{page:t.page});case he.PAGEVIEW_LOGGED:return He(e,{pageview:void 0});case he.PREVIEW_SEEN:return He(e,{pageview:{page_title:t.title,page_id:t.pageId,page_namespace:t.namespace}});default:return e}},preview:function(e,t){switch(void 0===e&&(e={enabled:void 0,activeLink:void 0,activeEvent:void 0,activeToken:"",shouldShow:!1,isUserDwelling:!1}),t.type){case he.BOOT:return He(e,{enabled:t.isEnabled});case he.SETTINGS_CHANGE:return He(e,{enabled:t.enabled});case he.LINK_DWELL:return t.el!==e.activeLink?He(e,{activeLink:t.el,activeEvent:t.event,activeToken:t.token,shouldShow:!1,isUserDwelling:!0}):He(e,{isUserDwelling:!0});case he.ABANDON_END:return t.token!==e.activeToken||e.isUserDwelling?e:He(e,{activeLink:void 0,activeToken:void 0,activeEvent:void 0,fetchResponse:void 0,shouldShow:!1});case he.PREVIEW_DWELL:return He(e,{isUserDwelling:!0});case he.ABANDON_START:return He(e,{isUserDwelling:!1});case he.FETCH_START:return He(e,{fetchResponse:void 0});case he.FETCH_COMPLETE:if(t.token===e.activeToken)return He(e,{fetchResponse:t.result,shouldShow:e.isUserDwelling});default:return e}},settings:function(e,t){switch(void 0===e&&(e={shouldShow:!1,showHelp:!1,shouldShowFooterLink:!1}),t.type){case he.SETTINGS_SHOW:return He(e,{shouldShow:!0,showHelp:!1});case he.SETTINGS_HIDE:return He(e,{shouldShow:!1,showHelp:!1});case he.SETTINGS_CHANGE:return t.wasEnabled===t.enabled?He(e,{shouldShow:!1}):He(e,{shouldShow:!t.enabled,showHelp:!t.enabled,shouldShowFooterLink:!t.enabled});case he.BOOT:return He(e,{shouldShowFooterLink:t.user.isAnon&&!t.isEnabled});default:return e}},statsv:function(e,t){switch(e=e||{},t.type){case he.FETCH_START:return He(e,{fetchStartedAt:t.timestamp});case he.FETCH_END:return He(e,{action:"timing.PagePreviewsApiResponse",data:t.timestamp-e.fetchStartedAt});case he.FETCH_FAILED:return He(e,{action:"counter.PagePreviewsApiFailure",data:1});case he.LINK_DWELL:return He(e,{linkDwellStartedAt:t.timestamp});case he.PREVIEW_SHOW:return He(e,{action:"timing.PagePreviewsPreviewShow",data:t.timestamp-e.linkDwellStartedAt});case he.STATSV_LOGGED:return He(e,{action:null,data:null});default:return e}}};var Fe=function(e,t,n){var i=t/2;return t?e.getBucket({name:"ext.Popups.visibility",enabled:!0,buckets:{off:1-t,control:i,on:i}},n):"on"},Ue=mediaWiki,Ve=jQuery,Ye=[".extiw",".image",".new",".internal",".external",".oo-ui-buttonedElement-button",".cancelLink a"];function Ke(e,t,n,i){return function(e,t,n,i){return!0===t.get("debug")||!!t.get("wgPopupsEventLogging")&&!(!i.navigator||!$.isFunction(i.navigator.sendBeacon))&&e.isAnon()&&n!==u.off}(e,t,n,i)?Ue.track:Ve.noop}function Xe(){return window.performance&&window.performance.now?Math.round(window.performance.now()):null}Ue.requestIdleCallback(function(){var e,t,n=r.compose,o=Ue.user.generateRandomSessionId,s=L(Ue.config),p=Fe(Ue.experiments,Ue.config.get("wgPopupsAnonsExperimentalGroupSize"),Ue.user.sessionId()),c=(e=Ue.storage,{getIsEnabled:function(){return"0"!==e.get(N)},setIsEnabled:function(t){e.set(N,t?"1":"0")},hasIsEnabled:function(){var t=e.get(N);return!1!==Boolean(t)},getPreviewCount:function(){var t=e.get(C);if(!1===t)return-1;if(null===t)return 0;var n=parseInt(t,10);return isNaN(n)&&(n=0,this.setPreviewCount(n)),n},setPreviewCount:function(t){e.set(C,t.toString())}}),l=M(),d=(t=Ue.experiments,{weightedBoolean:function(e,n,i){return"true"===t.getBucket({enabled:!0,name:e,buckets:{true:n,false:1-n}},i)}}),f=function(e,t,n){return function(e,t,n){var i=t.get("wgPopupsStatsvSamplingRate",0);return n.weightedBoolean("ext.Popups.statsv",i,e.sessionId())}(e,t,n)?Ue.track:Ve.noop}(Ue.user,Ue.config,d),v=Ue.config.get("wgPopupsVirtualPageViews")?Ue.track:Ve.noop,g=Ke(Ue.user,Ue.config,p,window),h=function(e,t,n,i){return!n.get("wgPopupsConflictsWithNavPopupGadget")&&(e.isAnon()?!n.get("wgPopupsBetaFeature")&&(t.hasIsEnabled()?t.getIsEnabled():i===u.on):n.get("wgPopupsShouldSendModuleToUser"))}(Ue.user,c,Ue.config,p);!0===Ue.config.get("debug")&&(n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n);var w=r.createStore(r.combineReducers(Be),n(r.applyMiddleware(a.a))),m=r.bindActionCreators(i,w.dispatch),E=function(e,t,n){var i=e.get("wgPopupsBetaFeature"),r=void 0,o=D.noop;if(t.isAnon())o=function(e){e.preventDefault(),n.showSettings()};else{var a="Special:Preferences#mw-prefsection-";a+=i?"betafeatures":"rendering",r=O.Title.newFromText(a).getUrl()}return{settingsUrl:r,showSettings:o,previewDwell:n.previewDwell,previewAbandon:n.abandon,previewShow:n.previewShow,click:n.linkClick}}(Ue.config,Ue.user,m);!function(e,t,n,i,r,o,a,s,u){F(e,ge.footerLink(t)),F(e,ge.linkTitle()),F(e,ge.render(r)),F(e,ge.statsv(t,o)),F(e,ge.syncUserSettings(n)),F(e,ge.settings(t,i)),F(e,ge.eventLogging(t,a,u)),F(e,ge.pageviews(t,s))}(w,m,c,l,E,f,g,v,Xe),m.boot(h,Ue.user,c,o,Ue.config,window.location.href),Ue.popups=function(e){return{isEnabled:function(){return e.getState().preview.enabled}}}(w),Ue.hook("wikipage.content").add(function(e){var t="a[href][title]:not("+Ye.join(", ")+")";ae(),e.on("mouseover keyup",t,function(e){var t=V(this,Ue.config);t&&m.linkDwell(t,this,e,s,o)}).on("mouseout blur",t,function(){V(this,Ue.config)&&m.abandon(this)}).on("click",t,function(){V(this,Ue.config)&&m.linkClick(this)})})}),window.Redux=r,window.ReduxThunk=o},"./src/ui/pokey-mask.svg":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs><clippath id="mwe-popups-mask"><polygon points="0 8, 10 8, 18 0, 26 8, 1000 8, 1000 1000, 0 1000"></polygon></clippath><clippath id="mwe-popups-mask-flip"><polygon points="0 8, 274 8, 282 0, 290 8, 1000 8, 1000 1000, 0 1000"></polygon></clippath><clippath id="mwe-popups-landscape-mask"><polygon points="0 8, 174 8, 182 0, 190 8, 1000 8, 1000 1000, 0 1000"></polygon></clippath><clippath id="mwe-popups-landscape-mask-flip"><polygon points="0 0, 1000 0, 1000 242, 190 242, 182 250, 174 242, 0 242"></polygon></clippath></defs></svg>'}});
//# sourceMappingURL=index.js.json