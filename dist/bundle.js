(()=>{var e={808:(e,o,n)=>{var t,r;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(a){if(void 0===(r="function"==typeof(t=a)?t.call(o,n,o,e):t)||(e.exports=r),!0,e.exports=a(),!!0){var i=window.Cookies,c=window.Cookies=a();c.noConflict=function(){return window.Cookies=i,c}}}((function(){function e(){for(var e=0,o={};e<arguments.length;e++){var n=arguments[e];for(var t in n)o[t]=n[t]}return o}function o(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(t){function r(){}function a(o,n,a){if("undefined"!=typeof document){"number"==typeof(a=e({path:"/"},r.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(e){}n=t.write?t.write(n,o):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),o=encodeURIComponent(String(o)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var s in a)a[s]&&(c+="; "+s,!0!==a[s]&&(c+="="+a[s].split(";")[0]));return document.cookie=o+"="+n+c}}function i(e,n){if("undefined"!=typeof document){for(var r={},a=document.cookie?document.cookie.split("; "):[],i=0;i<a.length;i++){var c=a[i].split("="),s=c.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var d=o(c[0]);if(s=(t.read||t)(s,d)||o(s),n)try{s=JSON.parse(s)}catch(e){}if(r[d]=s,e===d)break}catch(e){}}return e?r[e]:r}}return r.set=a,r.get=function(e){return i(e,!1)},r.getJSON=function(e){return i(e,!0)},r.remove=function(o,n){a(o,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var a=o[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";var e=$("#monday-specials"),o=$("#tuesday-specials"),t=$("#wednesday-specials"),r=$("#thursday-specials"),a=(new Date).getDay();const i=function(){0===a||6===a||5===a?console.log("Not today, freak!"):1===a?(e.css("display","flex"),console.log("Monday!")):2===a?(o.css("display","flex"),console.log("Tuesday!")):3===a?(t.css("display","flex"),console.log("Wednesday!")):4===a&&(r.css("display","flex"),console.log("Thursday!"))};var c=n(808),s=n.n(c),d=$("body"),l=$(".age-gate"),f=$(".age-gate__form"),u=$("#verify-age");$("#remember-me");const p=function(){s().get("Remember Me")||s().get("Default")||(l.addClass("age-gate--active"),d.addClass("active-modal"),console.log("No Cookies!"),f.submit((function(e){e.preventDefault(),u.prop("checked")?u.prop("checked")&&consoole.log("Of Age"):console.log("Underage")})))};$((function(){i(),p()}))})()})();