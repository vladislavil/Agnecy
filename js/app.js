!function(s){function e(e){for(var n,t,o=e[0],a=e[1],r=e[2],i=0,l=[];i<o.length;i++)t=o[i],u[t]&&l.push(u[t][0]),u[t]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(s[n]=a[n]);for(p&&p(e);l.length;)l.shift()();return f.push.apply(f,r||[]),c()}function c(){for(var e,n=0;n<f.length;n++){for(var t=f[n],o=!0,a=1;a<t.length;a++){var r=t[a];0!==u[r]&&(o=!1)}o&&(f.splice(n--,1),e=i(i.s=t[0]))}return e}var t={},u={0:0},f=[];function i(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return s[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=s,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var n=window.webpackJsonp=window.webpackJsonp||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var a=0;a<n.length;a++)e(n[a]);var p=o;f.push([24,1]),c()}([,,,function(e,n,t){},,,,,,,,function(e,n,t){"use strict";(function(l){t(35);n.a=function(){var e=l(".header .header__wrapper"),n=l(e),t=l(".header .header__menu"),o=l(t),a={video:l(".header__video video"),playpause:l(".header__play")},r=a.video[0];function i(){r.paused?(r.play(),l(a.playpause).hide(),l(r).attr("controls","controls")):(l(a.playpause).show(),r.pause(),l(r).attr("controls",null))}l(r).on("click",function(){i()}),l(a.playpause).on("click",function(){i()}),o.on("click",function(){l(this).toggleClass("change"),n.toggleClass("menu-opened"),l("body").toggleClass("noscroll"),l("html").toggleClass("noscroll")}),l(window).on("load resize",function(){639<l(window).width()&&n.hasClass("menu-opened")&&(n.toggleClass("menu-opened"),l("body").toggleClass("noscroll"),l("html").toggleClass("noscroll"),o.toggleClass("change"))})}}).call(this,t(0))},,,,,,,,function(e,n,t){"use strict";(function(i){t(53),t(55),t(57),t(58);n.a=function(){var o=i(".products__menu .products__item"),a=i(o),r=i(".tab__products");r.each(function(e,n){0==e?i(n).addClass("show"):i(n).addClass("hide")}),i(".products__menu").on("click",function(e){var n=e.target;if("products__item"==n.className)for(var t=0;t<a.length;t++)n==a[t]?(i(r[t]).addClass("show"),i(o[t]).addClass("active"),i(r[t]).removeClass("hide"),i(r[t]).animate({opacity:1},500)):(i(r[t]).addClass("hide"),i(r[t]).removeClass("show"),i(a[t]).removeClass("active"),i(r[t]).css("opacity",0))}),i(".tab .tab__products .tab__images").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!1,navigateByImgClick:!1,overflowY:hidden,preload:[0,1]}})}}).call(this,t(0))},,,,,function(e,n,t){e.exports=t(71)},function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){"use strict";var o=t(3);t.n(o).a},,,,,,,,,function(e,n,t){},,function(e,n,t){e.exports=t.p+"index.html"},function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,,,,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,,,,function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=(t(25),t(27),t(29),t(31),t(33),t(11)),i=(t(37),t(20)),l={name:"App"},s=(t(39),t(12)),c=Object(s.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"test-vue"},[this._v("test Vue")])},[],!1,null,null,null);c.options.__file="App.vue";var u=c.exports,f=t(13),p=t.n(f),d=t(14),g=t.n(d),h=t(15),v=t.n(h),m=t(16),_=t.n(m),y=t(17),b=t.n(y),C=t(1),w=t.n(C),O=t(18),j=t.n(O),k=function(e){function n(){return p()(this,n),v()(this,_()(n).apply(this,arguments))}return b()(n,e),g()(n,[{key:"render",value:function(){return w.a.createElement("div",{className:"test-react"},"test React")}}]),n}(w.a.Component),x=(t(48),t(50),t(51),t(19)),P=(t(60),t(62),t(64),t(66),function(){Object(x.a)(),console.log(tmpPug()),new i.a({el:"#test-vue",render:function(e){return e(u)}}),j.a.render(w.a.createElement(k,null),document.getElementById("test-react"))});a()(function(){console.log("init layout"),Object(r.a)(),console.log("init blocks"),console.log("init pages"),P()})}]);