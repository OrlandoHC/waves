(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1725:function(t,e,r){"use strict";var a=r(2322);e.Z=function(t){return(0,a.jsx)("div",{className:"w-full h-screen bg-gray-100 dark:bg-gray-800",children:(0,a.jsx)("div",{className:"container h-full mx-auto flex flex-1 items-center justify-center",children:t.children})})}},6699:function(t,e,r){"use strict";r.r(e),r.d(e,{Index:function(){return p},default:function(){return m}});var a=r(2322),i=r(1725),s=JSON.parse('[{"slug":"city","title":"City","logo":"static/images/city.svg","stream":"http://play.global.audio:80/city.aac","player":"howler","playlist":{"strategy":"metacast","url":"https://meta.metacast.eu/aim/?radio=radiocity"}},{"slug":"the-voice","title":"The Voice","logo":"static/images/the-voice.svg","stream":"https://bss.neterra.tv/rtplive/thevoiceradio_live.stream/playlist.m3u8","player":"hls","playlist":{"strategy":"thevoice","url":"https://thevoice.bg/api/rds/radio"}},{"slug":"n-joy","title":"N-JOY","logo":"static/images/njoy.svg","stream":"https://bravo.btv.bg/radio/njoy-radio-proxy/index.php","player":"howler","playlist":{"strategy":"webrad","url":"https://api.webrad.io/data/playlist/76/n-joy"}},{"slug":"fresh","title":"Fresh","logo":"static/images/fresh.png","stream":"http://193.108.24.21:8000/fresh?file=.mp3","player":"howler","playlist":{"strategy":"webrad","url":"https://api.webrad.io/data/playlist/76/fresh"}},{"slug":"vitosha","title":"Vitosha","logo":"static/images/vitosha.png","stream":"https://bss.neterra.tv/rtplive/vitosharadio_live.stream/playlist.m3u8","player":"hls","playlist":{"strategy":"webrad","url":"https://api.webrad.io/data/playlist/76/vitosa"}},{"slug":"energy","title":"Energy","logo":"static/images/energy.svg","stream":"http://play.global.audio:80/nrj.aac","player":"howler","playlist":{"strategy":"metacast","url":"https://meta.metacast.eu/aim/?radio=radioenergy"}},{"slug":"nova","title":"Nova","logo":"static/images/nova.svg","stream":"http://play.global.audio:80/nova.aac","player":"howler","playlist":{"strategy":"metacast","url":"https://meta.metacast.eu/aim/?radio=radionova"}},{"slug":"magic-fm","title":"Magic FM","logo":"static/images/magic-fm.png","stream":"https://bss.neterra.tv/rtplive/magicfmradio_live.stream/playlist.m3u8","player":"hls","playlist":{"strategy":"webrad","url":"https://api.webrad.io/data/playlist/76/magic-fm"}},{"slug":"bnr-horizont","title":"\u0411\u041d\u0420 \u0425\u043e\u0440\u0438\u0437\u043e\u043d\u0442","logo":"static/images/bnr.jpg","stream":"https://edge17.cdn.bg:20320/fls/Horizont.stream/playlist.m3u8","player":"hls","playlist":{}}]'),n=r(6577),o=r(4406),l=r(3607),c=r.n(l);var u=function(t){var e,r=t.radio,i=t.onClick,s=t.active,l=void 0!==s&&s;return(0,a.jsxs)("div",{className:"".concat(c()["radio-badge"]," ").concat(l?c().active:""," group text-center cursor-pointer"),onClick:i,children:[(0,a.jsx)("div",{className:"w-16 h-16 mx-auto mb-1 relative shadow rounded-full group-hover:shadow-light dark:group-hover:shadow-dark dark:bg-gray-800",children:(0,a.jsx)(n.default,{src:(e=r.logo,"".concat(o.env.WAVES_FE_BASE_PATH,"/").concat(e)),alt:r.title,className:"rounded-full",layout:"fill",objectFit:"contain",unoptimized:!0,loader:function(t){return t.src}})}),(0,a.jsx)("span",{className:"text-sm font-medium group-hover:text-blue-500 dark:group-hover:text-gray-100",children:r.title})]})},d=r(2784),h=r(9097);var g=function(t){var e=t.radios,r=(0,d.useState)(null),i=r[0],s=r[1];return(0,a.jsx)("div",{className:"grid grid-cols-3 gap-4 justify-items-center",children:e.map((function(t,e){return(0,a.jsx)(h.default,{href:"/radio/".concat(t.slug),children:(0,a.jsx)("a",{children:(0,a.jsx)(u,{radio:t,onClick:function(){s(t)},active:i===t})})},e)}))})};function p(){return(0,a.jsx)(i.Z,{children:(0,a.jsxs)("div",{className:"w-full max-w-lg rounded px-5 py-10 m-5 bg-white shadow dark:bg-gray-900 dark:text-gray-400",children:[(0,a.jsx)("h2",{className:"text-3xl font-light text-center mb-6 dark:text-gray-200",children:"\u0418\u0437\u0431\u0435\u0440\u0438 \u0440\u0430\u0434\u0438\u043e:"}),(0,a.jsx)(g,{radios:s})]})})}var m=p},8738:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6699)}])},3607:function(t){t.exports={"radio-badge":"radio-badge_radio-badge__3qfOw",active:"radio-badge_active__HRgwP"}},4406:function(t){var e,r,a=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function n(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:i}catch(t){e=i}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var o,l=[],c=!1,u=-1;function d(){c&&o&&(c=!1,o.length?l=o.concat(l):u=-1,l.length&&h())}function h(){if(!c){var t=n(d);c=!0;for(var e=l.length;e;){for(o=l,l=[];++u<e;)o&&o[u].run();u=-1,e=l.length}o=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function p(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];l.push(new g(t,e)),1!==l.length||c||n(h)},g.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}},function(t){t.O(0,[6,774,888,179],(function(){return e=8738,t(t.s=e);var e}));var e=t.O();_N_E=e}]);