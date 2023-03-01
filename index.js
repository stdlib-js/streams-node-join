// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).joinStream=e(r.require$$0$3,r.require$$0$1,r.require$$0$2)}(this,(function(r,e,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,i=Object.defineProperty,a=Object.prototype,u=a.toString,c=a.__defineGetter__,f=a.__defineSetter__,l=a.__lookupGetter__,s=a.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,o,i,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(l.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,p="set"in t,o&&(i||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&c&&c.call(r,e,t.get),p&&f&&f.call(r,e,t.set),r};var p=o;function y(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function g(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var d=/./;function h(r){return"boolean"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function j(r,e){return null!=r&&m.call(r,e)}var O="function"==typeof Symbol?Symbol.toStringTag:"";var A=b()?function(r){var e,t,n;if(null==r)return w.call(r);t=r[O],e=j(r,O);try{r[O]=void 0}catch(e){return w.call(r)}return n=w.call(r),e?r[O]=t:delete r[O],n}:function(r){return w.call(r)},E=Boolean.prototype.toString;var _=b();function S(r){return"object"==typeof r&&(r instanceof Boolean||(_?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===A(r)))}function I(r){return h(r)||S(r)}function T(){return new Function("return this;")()}y(I,"isPrimitive",h),y(I,"isObject",S);var x="object"==typeof self?self:null,k="object"==typeof window?window:null,F="object"==typeof global?global:null;var M=function(r){if(arguments.length){if(!h(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return T()}if(x)return x;if(k)return k;if(F)return F;throw new Error("unexpected error. Unable to resolve global object.")}(),U=M.document&&M.document.childNodes,P=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var $=/^\s*function\s*([^(]*)/i;y(V,"REGEXP",$);var C=Array.isArray?Array.isArray:function(r){return"[object Array]"===A(r)};function N(r){return null!==r&&"object"==typeof r}function B(r){return N(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function W(r){var e,t,n;if(("Object"===(t=A(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=$.exec(n.toString()))return e[1]}return B(r)?"Buffer":t}y(N,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!C(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(N));var R="function"==typeof d||"object"==typeof P||"function"==typeof U?function(r){return W(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?W(r).toLowerCase():e};function H(r){return"function"===R(r)}var L="function"==typeof Buffer?Buffer:null;var z,G=e.Buffer;z=function(){var r,e;if("function"!=typeof L)return!1;try{r=B(e="function"==typeof L.from?L.from([1,2,3,4]):new L([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?G:function(){throw new Error("not implemented")};var q=z,X=H(q.from);function D(r){return"string"==typeof r}var Z=String.prototype.valueOf;var Y=b();function J(r){return"object"==typeof r&&(r instanceof String||(Y?function(r){try{return Z.call(r),!0}catch(r){return!1}}(r):"[object String]"===A(r)))}function K(r){return D(r)||J(r)}function Q(r){return"number"==typeof r}function rr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function er(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+rr(o):rr(o)+r,n&&(r="-"+r)),r}y(K,"isPrimitive",D),y(K,"isObject",J);var tr=String.prototype.toLowerCase,nr=String.prototype.toUpperCase;function or(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Q(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=er(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=er(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===nr.call(r.specifier)?nr.call(t):tr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ir(r){return"string"==typeof r}var ar=Math.abs,ur=String.prototype.toLowerCase,cr=String.prototype.toUpperCase,fr=String.prototype.replace,lr=/e\+(\d)$/,sr=/e-(\d)$/,pr=/^(\d+)$/,yr=/^(\d+)e/,gr=/\.0$/,dr=/\.0*e/,hr=/(\..*[^0])0*e/;function vr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Q(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":ar(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=fr.call(t,hr,"$1e"),t=fr.call(t,dr,"e"),t=fr.call(t,gr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=fr.call(t,lr,"e+0$1"),t=fr.call(t,sr,"e-0$1"),r.alternate&&(t=fr.call(t,pr,"$1."),t=fr.call(t,yr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===cr.call(r.specifier)?cr.call(t):ur.call(t)}function br(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function wr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+br(n):br(n)+r}var mr=String.fromCharCode,jr=isNaN,Or=Array.isArray;function Ar(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Er(r){var e,t,n,o,i,a,u,c,f;if(!Or(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(ir(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=Ar(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,jr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,jr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=or(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!jr(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=jr(i)?String(n.arg):mr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=vr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=er(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=wr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var _r,Sr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Tr(r){var e,t,n,o;for(t=[],o=0,n=Sr.exec(r);n;)(e=r.slice(o,Sr.lastIndex-n[0].length)).length&&t.push(e),t.push(Ir(n)),o=Sr.lastIndex,n=Sr.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function xr(r){return"string"==typeof r}function kr(r){var e,t,n;if(!xr(r))throw new TypeError(kr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Tr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Er.apply(null,t)}_r=X?function(r,e){if(!D(r))throw new TypeError(kr("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!D(e))throw new TypeError(kr("invalid argument. Second argument must be a string. Value: `%s`.",e));return q.from(r,e)}return q.from(r,"utf8")}:function(r,e){if(!D(r))throw new TypeError(kr("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!D(e))throw new TypeError(kr("invalid argument. Second argument must be a string. Value: `%s`.",e));return new q(r,e)}return new q(r,"utf8")};var Fr=_r;function Mr(r){return"number"==typeof r}var Ur=Number,Pr=Ur.prototype.toString;var Vr=b();function $r(r){return"object"==typeof r&&(r instanceof Ur||(Vr?function(r){try{return Pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===A(r)))}function Cr(r){return Mr(r)||$r(r)}y(Cr,"isPrimitive",Mr),y(Cr,"isObject",$r);var Nr=Number.POSITIVE_INFINITY,Br=Ur.NEGATIVE_INFINITY,Wr=Math.floor;function Rr(r){return Wr(r)===r}function Hr(r){return r<Nr&&r>Br&&Rr(r)}function Lr(r){return Mr(r)&&Hr(r)}function zr(r){return $r(r)&&Hr(r.valueOf())}function Gr(r){return Lr(r)||zr(r)}function qr(r){return Lr(r)&&r>=0}function Xr(r){return zr(r)&&r.valueOf()>=0}function Dr(r){return qr(r)||Xr(r)}y(Gr,"isPrimitive",Lr),y(Gr,"isObject",zr),y(Dr,"isPrimitive",qr),y(Dr,"isObject",Xr);var Zr,Yr=Object.getPrototypeOf;Zr=H(Object.getPrototypeOf)?Yr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===A(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Jr=Zr;function Kr(r){return null==r?null:(r=Object(r),Jr(r))}function Qr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function re(r){return r!=r}function ee(r){return Mr(r)&&re(r)}function te(r){return $r(r)&&re(r.valueOf())}function ne(r){return ee(r)||te(r)}y(Qr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),y(ne,"isPrimitive",ee),y(ne,"isObject",te);function oe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Rr(r.length)&&r.length>=0&&r.length<=9007199254740991}function ie(r,e,t){var n,o;if(!oe(r)&&!D(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!Lr(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(ne(e)){for(;o<n;o++)if(ne(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function ae(r){return Object.keys(Object(r))}var ue,ce=void 0!==Object.keys;function fe(r){return"[object Arguments]"===A(r)}ue=function(){return fe(arguments)}();var le=ue,se=Object.prototype.propertyIsEnumerable;var pe=!se.call("beep","0");function ye(r,e){var t;return null!=r&&(!(t=se.call(r,e))&&pe&&K(r)?!ee(e=+e)&&Lr(e)&&e>=0&&e<r.length:t)}var ge=4294967295;var de=le?fe:function(r){return null!==r&&"object"==typeof r&&!C(r)&&"number"==typeof r.length&&Rr(r.length)&&r.length>=0&&r.length<=ge&&j(r,"callee")&&!ye(r,"callee")},he=Array.prototype.slice;var ve=ye((function(){}),"prototype"),be=!ye({toString:null},"toString");function we(r){return r.constructor&&r.constructor.prototype===r}var me=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],je="undefined"==typeof window?void 0:window;var Oe=function(){var r;if("undefined"===R(je))return!1;for(r in je)try{-1===ie(me,r)&&j(je,r)&&null!==je[r]&&"object"===R(je[r])&&we(je[r])}catch(r){return!0}return!1}(),Ae="undefined"!=typeof window;var Ee,_e=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ee=ce?function(){return 2!==(ae(arguments)||"").length}(1,2)?function(r){return de(r)?ae(he.call(r)):ae(r)}:ae:function(r){var e,t,n,o,i,a,u;if(o=[],de(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!j(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!N(r))return o;t=ve&&n}for(i in r)t&&"prototype"===i||!j(r,i)||o.push(String(i));if(be)for(e=function(r){if(!1===Ae&&!Oe)return we(r);try{return we(r)}catch(r){return!1}}(r),u=0;u<_e.length;u++)a=_e[u],e&&"constructor"===a||!j(r,a)||o.push(String(a));return o};var Se=Ee,Ie=void 0!==Object.getOwnPropertyNames,Te=Object.getOwnPropertyNames;var xe=Ie?function(r){return Te(Object(r))}:function(r){return Se(Object(r))},ke=void 0!==Object.getOwnPropertyDescriptor,Fe=Object.getOwnPropertyDescriptor;var Me=ke?function(r,e){var t;return null==r||void 0===(t=Fe(r,e))?null:t}:function(r,e){return j(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var Ue=H(q.from)?function(r){if(!B(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return q.from(r)}:function(r){if(!B(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new q(r)},Pe="function"==typeof Int8Array;var Ve="function"==typeof Int8Array?Int8Array:null;var $e,Ce="function"==typeof Int8Array?Int8Array:void 0;$e=function(){var r,e,t;if("function"!=typeof Ve)return!1;try{e=new Ve([1,3.14,-3.14,128]),t=e,r=(Pe&&t instanceof Int8Array||"[object Int8Array]"===A(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Ce:function(){throw new Error("not implemented")};var Ne=$e,Be="function"==typeof Uint8Array;var We="function"==typeof Uint8Array?Uint8Array:null;var Re,He="function"==typeof Uint8Array?Uint8Array:void 0;Re=function(){var r,e,t;if("function"!=typeof We)return!1;try{e=new We(e=[1,3.14,-3.14,256,257]),t=e,r=(Be&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?He:function(){throw new Error("not implemented")};var Le=Re,ze="function"==typeof Uint8ClampedArray;var Ge="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var qe,Xe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;qe=function(){var r,e,t;if("function"!=typeof Ge)return!1;try{e=new Ge([-1,0,1,3.14,4.99,255,256]),t=e,r=(ze&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===A(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Xe:function(){throw new Error("not implemented")};var De=qe,Ze="function"==typeof Int16Array;var Ye="function"==typeof Int16Array?Int16Array:null;var Je,Ke="function"==typeof Int16Array?Int16Array:void 0;Je=function(){var r,e,t;if("function"!=typeof Ye)return!1;try{e=new Ye([1,3.14,-3.14,32768]),t=e,r=(Ze&&t instanceof Int16Array||"[object Int16Array]"===A(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Ke:function(){throw new Error("not implemented")};var Qe=Je,rt="function"==typeof Uint16Array;var et="function"==typeof Uint16Array?Uint16Array:null;var tt,nt="function"==typeof Uint16Array?Uint16Array:void 0;tt=function(){var r,e,t;if("function"!=typeof et)return!1;try{e=new et(e=[1,3.14,-3.14,65536,65537]),t=e,r=(rt&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nt:function(){throw new Error("not implemented")};var ot=tt,it="function"==typeof Int32Array;var at="function"==typeof Int32Array?Int32Array:null;var ut,ct="function"==typeof Int32Array?Int32Array:void 0;ut=function(){var r,e,t;if("function"!=typeof at)return!1;try{e=new at([1,3.14,-3.14,2147483648]),t=e,r=(it&&t instanceof Int32Array||"[object Int32Array]"===A(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?ct:function(){throw new Error("not implemented")};var ft=ut,lt="function"==typeof Uint32Array;var st="function"==typeof Uint32Array?Uint32Array:null;var pt,yt="function"==typeof Uint32Array?Uint32Array:void 0;pt=function(){var r,e,t;if("function"!=typeof st)return!1;try{e=new st(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(lt&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yt:function(){throw new Error("not implemented")};var gt=pt,dt="function"==typeof Float32Array;var ht="function"==typeof Float32Array?Float32Array:null;var vt,bt="function"==typeof Float32Array?Float32Array:void 0;vt=function(){var r,e,t;if("function"!=typeof ht)return!1;try{e=new ht([1,3.14,-3.14,5e40]),t=e,r=(dt&&t instanceof Float32Array||"[object Float32Array]"===A(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Nr}catch(e){r=!1}return r}()?bt:function(){throw new Error("not implemented")};var wt=vt,mt="function"==typeof Float64Array;var jt="function"==typeof Float64Array?Float64Array:null;var Ot,At="function"==typeof Float64Array?Float64Array:void 0;Ot=function(){var r,e,t;if("function"!=typeof jt)return!1;try{e=new jt([1,3.14,-3.14,NaN]),t=e,r=(mt&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?At:function(){throw new Error("not implemented")};var Et=Ot;function _t(r){return new Ne(r)}function St(r){return new Le(r)}function It(r){return new De(r)}function Tt(r){return new Qe(r)}function xt(r){return new ot(r)}function kt(r){return new ft(r)}function Ft(r){return new gt(r)}function Mt(r){return new wt(r)}function Ut(r){return new Et(r)}var Pt={int8array:_t,uint8array:St,uint8clampedarray:It,int16array:Tt,uint16array:xt,int32array:kt,uint32array:Ft,float32array:Mt,float64array:Ut};function Vt(r,e,t,n,o){var i,a,u,c,f,l,s,y,g,d;if(o-=1,"object"!=typeof r||null===r)return r;if(B(r))return Ue(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===A(r))return!0;r=Kr(r)}return!1}(r))return function(r){var e,t,n,o,i,a,u=[],c=[];for(i=new r.constructor(r.message),u.push(r),c.push(i),r.stack&&(i.stack=r.stack),r.code&&(i.code=r.code),r.errno&&(i.errno=r.errno),r.syscall&&(i.syscall=r.syscall),e=Se(r),a=0;a<e.length;a++)o=e[a],j(t=Me(r,o),"value")&&(n=C(r[o])?[]:{},t.value=Vt(r[o],n,u,c,-1)),p(i,o,t);return i}(r);if("date"===(u=R(r)))return new Date(+r);if("regexp"===u)return function(r){if(!D(r))throw new TypeError(kr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(f=Pt[u])return f(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var e,t,n,o,i,a,u,c;for(e=[],o=[],u=Object.create(Kr(r)),e.push(r),o.push(u),t=xe(r),c=0;c<t.length;c++)n=t[c],j(i=Me(r,n),"value")&&(a=C(r[n])?[]:{},i.value=Vt(r[n],a,e,o,-1)),p(u,n,i);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=Se(r),o>0)for(i=u,d=0;d<a.length;d++)y=r[l=a[d]],u=R(y),"object"!=typeof y||null===y||"array"!==u&&"object"!==u||B(y)?"object"===i?(j(c=Me(r,l),"value")&&(c.value=Vt(y)),p(e,l,c)):e[l]=Vt(y):-1===(g=ie(t,y))?(s=C(y)?new Array(y.length):{},t.push(y),n.push(s),"array"===i?e[l]=Vt(y,s,t,n,o):(j(c=Me(r,l),"value")&&(c.value=Vt(y,s,t,n,o)),p(e,l,c))):e[l]=n[g];else if("array"===u)for(d=0;d<a.length;d++)e[l=a[d]]=r[l];else for(d=0;d<a.length;d++)l=a[d],c=Me(r,l),p(e,l,c);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}function $t(r,e){var t;if(arguments.length>1){if(!qr(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(0===e)return r}else e=Nr;return Vt(r,t=C(r)?new Array(r.length):{},[r],[t],e)}function Ct(r){var e=typeof r;return null===r||"object"!==e&&"function"!==e?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+r+"`."):null}var Nt=Object.create;function Bt(){}var Wt="function"==typeof Nt?Nt:function(r){return Bt.prototype=r,new Bt};function Rt(r,e,t){p(r,e,{configurable:!0,enumerable:!1,writable:!0,value:t})}var Ht=t;var Lt={objectMode:!1,encoding:null,allowHalfOpen:!1,readableObjectMode:!1,sep:"\n"};var zt=Object.prototype;function Gt(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!C(r)}(r)&&(!(e=Kr(r))||!j(r,"constructor")&&j(e,"constructor")&&H(e.constructor)&&"[object Function]"===A(e.constructor)&&j(e,"isPrototypeOf")&&H(e.isPrototypeOf)&&(e===zt||function(r){var e;for(e in r)if(!j(r,e))return!1;return!0}(r)))}function qt(r){return Mr(r)&&r>=0}function Xt(r){return $r(r)&&r.valueOf()>=0}function Dt(r){return qt(r)||Xt(r)}function Zt(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Yt(r,e){return Gt(e)?j(e,"sep")&&(r.sep=e.sep,!D(r.sep))?new TypeError(Zt("0g52i","sep",r.sep)):j(e,"objectMode")&&(r.objectMode=e.objectMode,!h(r.objectMode))?new TypeError(Zt("0g530","objectMode",r.objectMode)):j(e,"readableObjectMode")&&(r.readableObjectMode=e.readableObjectMode,!h(r.readableObjectMode))?new TypeError(Zt("0g530","readableObjectMode",r.readableObjectMode)):j(e,"encoding")&&(r.encoding=e.encoding,!D(r.encoding))?new TypeError(Zt("0g52i","encoding",r.encoding)):j(e,"allowHalfOpen")&&(r.allowHalfOpen=e.allowHalfOpen,!h(r.allowHalfOpen))?new TypeError(Zt("0g530","allowHalfOpen",r.allowHalfOpen)):j(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!qt(r.highWaterMark))?new TypeError(Zt("0g54x","highWaterMark",r.highWaterMark)):null:new TypeError(Zt("0g52h",e))}y(Dt,"isPrimitive",qt),y(Dt,"isObject",Xt);var Jt=g(Object.freeze({__proto__:null,default:()=>()=>{}}))("join-stream"),Kt=r.Transform;function Qt(r){var e,t;if(!(this instanceof Qt))return arguments.length?new Qt(r):new Qt;if(e=$t(Lt),arguments.length&&(t=Yt(e,r)))throw t;return e.writableObjectMode=!0,e.decodeStrings=!1,Jt("Creating a transform stream configured with the following options: %s.",JSON.stringify(e)),Kt.call(this,e),Rt(this,"_destroyed",!1),y(this,"_encoding",null===e.encoding?"utf8":e.encoding),"utf8"!==this._encoding&&(e.sep=Fr(e.sep,this._encoding)),y(this,"_sep",e.sep),Rt(this,"_init",!1),Rt(this,"_idx",-1),this}return function(r,e){var t=Ct(r);if(t)throw t;if(t=Ct(e))throw t;if(void 0===e.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+e.prototype+"`.");r.prototype=Wt(e.prototype),p(r.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:r})}(Qt,Kt),y(Qt.prototype,"_transform",(function(r,e,t){var n;this._idx+=1,Jt("Received a new chunk. Chunk: %s. Encoding: %s. Index: %d.",r.toString(),e,this._idx),"utf8"===this._encoding?this._init?r=this._sep+r:this._init=!0:this._init?(r=new q(r,e),n=this._sep.length+r.length,r=(r=q.concat([this._sep,r],n)).toString(this._encoding)):this._init=!0,this.push(r,this._encoding),t()})),y(Qt.prototype,"_flush",(function(r){Jt("Flushing the stream..."),r()})),y(Qt.prototype,"destroy",(function(r){var e;return this._destroyed?(Jt("Attempted to destroy an already destroyed stream."),this):(e=this,this._destroyed=!0,function(r){var e,t;for(e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);function n(){r.apply(null,e)}Ht.nextTick(n)}((function(){r&&(Jt("Stream was destroyed due to an error. Error: %s.",JSON.stringify(r)),e.emit("error",r));Jt("Closing the stream..."),e.emit("close")})),this)})),y(Qt,"objectMode",(function(r){var e;if(arguments.length){if(!Gt(r))throw new TypeError(Zt("0g52h",r));e=$t(r)}else e={};return e.objectMode=!0,new Qt(e)})),y(Qt,"factory",(function(r){var e;if(arguments.length){if(!Gt(r))throw new TypeError(Zt("0g52h",r));e=$t(r)}else e={};return t;function t(){return new Qt(e)}})),Qt}));
//# sourceMappingURL=index.js.map
