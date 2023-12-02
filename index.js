// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).joinStream=r(e.require$$0$3,e.require$$0$1,e.require$$0$2)}(this,(function(e,r,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function i(e){return"number"==typeof e}function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function u(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+a(o):a(o)+e,n&&(e="-"+e)),e}var c=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function l(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=u(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=u(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):c.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var p=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,w=/^(\d+)e/,m=/\.0$/,j=/\.0*e/,O=/(\..*[^0])0*e/;function _(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=h.call(t,O,"$1e"),t=h.call(t,j,"e"),t=h.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,y,"e+0$1"),t=h.call(t,b,"e-0$1"),e.alternate&&(t=h.call(t,v,"$1."),t=h.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,M=isNaN,k=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,o,i,a,c,f,p;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,f=0;f<e.length;f++)if(s(n=e[f]))a+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,M(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,M(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!M(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=M(i)?String(n.arg):T(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,o;for(t=[],o=0,n=I.exec(e);n;)(r=e.slice(o,I.lastIndex-n[0].length)).length&&t.push(r),t.push(P(n)),o=I.lastIndex,n=I.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function N(e){return"string"==typeof e}function A(e){var r,t,n;if(!N(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var $,W=Object.prototype,C=W.toString,B=W.__defineGetter__,G=W.__defineSetter__,H=W.__lookupGetter__,R=W.__lookupSetter__;$=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(H.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=W,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(e,r,t.get),a&&G&&G.call(e,r,t.set),e};var L=$;function q(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function D(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var X=/./;function Z(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;function K(e,r){return null!=e&&J.call(e,r)}var Q="function"==typeof Symbol?Symbol:void 0,ee="function"==typeof Q?Q.toStringTag:"";var re=Y()?function(e){var r,t,n;if(null==e)return z.call(e);t=e[ee],r=K(e,ee);try{e[ee]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[ee]=t:delete e[ee],n}:function(e){return z.call(e)},te=Boolean,ne=Boolean.prototype.toString;var oe=Y();function ie(e){return"object"==typeof e&&(e instanceof te||(oe?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===re(e)))}function ae(e){return Z(e)||ie(e)}function ue(){return new Function("return this;")()}q(ae,"isPrimitive",Z),q(ae,"isObject",ie);var ce="object"==typeof self?self:null,fe="object"==typeof window?window:null,le="object"==typeof global?global:null,se="object"==typeof globalThis?globalThis:null;var pe=function(e){if(arguments.length){if(!Z(e))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ue()}if(se)return se;if(ce)return ce;if(fe)return fe;if(le)return le;throw new Error("unexpected error. Unable to resolve global object.")}(),ge=pe.document&&pe.document.childNodes,de=Int8Array;function he(){return/^\s*function\s*([^(]*)/i}var ye=/^\s*function\s*([^(]*)/i;q(he,"REGEXP",ye);var be=Array.isArray?Array.isArray:function(e){return"[object Array]"===re(e)};function ve(e){return null!==e&&"object"==typeof e}function we(e){return ve(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function me(e){var r,t,n;if(("Object"===(t=re(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ye.exec(n.toString()))return r[1]}return we(e)?"Buffer":t}q(ve,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!be(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ve));var je="function"==typeof X||"object"==typeof de||"function"==typeof ge?function(e){return me(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?me(e).toLowerCase():r};function Oe(e){return"function"===je(e)}var _e="function"==typeof Buffer?Buffer:null;var Ee,Se=r.Buffer;Ee=function(){var e,r;if("function"!=typeof _e)return!1;try{e=we(r="function"==typeof _e.from?_e.from([1,2,3,4]):new _e([1,2,3,4]))&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){e=!1}return e}()?Se:function(){throw new Error("not implemented")};var Te=Ee,Me=Oe(Te.from);function ke(e){return"string"==typeof e}var xe=String.prototype.valueOf;var Ve,Ie=Y();function Pe(e){return"object"==typeof e&&(e instanceof String||(Ie?function(e){try{return xe.call(e),!0}catch(e){return!1}}(e):"[object String]"===re(e)))}function Fe(e){return ke(e)||Pe(e)}q(Fe,"isPrimitive",ke),q(Fe,"isObject",Pe),Ve=Me?function(e,r){if(!ke(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!ke(r))throw new TypeError(A("invalid argument. Second argument must be a string. Value: `%s`.",r));return Te.from(e,r)}return Te.from(e,"utf8")}:function(e,r){if(!ke(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!ke(r))throw new TypeError(A("invalid argument. Second argument must be a string. Value: `%s`.",r));return new Te(e,r)}return new Te(e,"utf8")};var Ne=Ve;function Ae(e){var r=typeof e;return null===e||"object"!==r&&"function"!==r?new TypeError(A("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `%s`.",e)):null}var $e=Object.create;function We(){}var Ce="function"==typeof $e?$e:function(e){return We.prototype=e,new We};function Be(e,r,t){L(e,r,{configurable:!0,enumerable:!1,writable:!0,value:t})}var Ge=t;var He,Re=Object,Le=Object.getPrototypeOf;He=Oe(Object.getPrototypeOf)?Le:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===re(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var qe=He;var De=Object.prototype;function Xe(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!be(e)}(e)&&(r=function(e){return null==e?null:(e=Re(e),qe(e))}(e),!r||!K(e,"constructor")&&K(r,"constructor")&&Oe(r.constructor)&&"[object Function]"===re(r.constructor)&&K(r,"isPrototypeOf")&&Oe(r.isPrototypeOf)&&(r===De||function(e){var r;for(r in e)if(!K(e,r))return!1;return!0}(e)))}function Ze(e){return"number"==typeof e}var Ue=Number,Ye=Ue.prototype.toString;var ze=Y();function Je(e){return"object"==typeof e&&(e instanceof Ue||(ze?function(e){try{return Ye.call(e),!0}catch(e){return!1}}(e):"[object Number]"===re(e)))}function Ke(e){return Ze(e)||Je(e)}function Qe(e){return Ze(e)&&e>=0}function er(e){return Je(e)&&e.valueOf()>=0}function rr(e){return Qe(e)||er(e)}function tr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}function nr(e,r){return Xe(r)?K(r,"sep")&&(e.sep=r.sep,!ke(e.sep))?new TypeError(tr("1MN2W,Gh","sep",e.sep)):K(r,"objectMode")&&(e.objectMode=r.objectMode,!Z(e.objectMode))?new TypeError(tr("1MN2o,GE","objectMode",e.objectMode)):K(r,"readableObjectMode")&&(e.readableObjectMode=r.readableObjectMode,!Z(e.readableObjectMode))?new TypeError(tr("1MN2o,GE","readableObjectMode",e.readableObjectMode)):K(r,"encoding")&&(e.encoding=r.encoding,!ke(e.encoding))?new TypeError(tr("1MN2W,Gh","encoding",e.encoding)):K(r,"allowHalfOpen")&&(e.allowHalfOpen=r.allowHalfOpen,!Z(e.allowHalfOpen))?new TypeError(tr("1MN2o,GE","allowHalfOpen",e.allowHalfOpen)):K(r,"highWaterMark")&&(e.highWaterMark=r.highWaterMark,!Qe(e.highWaterMark))?new TypeError(tr("1MN4k,I9","highWaterMark",e.highWaterMark)):null:new TypeError(tr("1MN2V,FD",r))}q(Ke,"isPrimitive",Ze),q(Ke,"isObject",Je),q(rr,"isPrimitive",Qe),q(rr,"isObject",er);var or=D(Object.freeze({__proto__:null,default:()=>()=>{}}))("join-stream"),ir=e.Transform;function ar(e){var r,t;if(!(this instanceof ar))return arguments.length?new ar(e):new ar;if(r={objectMode:!1,encoding:null,allowHalfOpen:!1,readableObjectMode:!1,sep:"\n"},arguments.length&&(t=nr(r,e)))throw t;return r.writableObjectMode=!0,r.decodeStrings=!1,or("Creating a transform stream configured with the following options: %s.",JSON.stringify(r)),ir.call(this,r),Be(this,"_destroyed",!1),q(this,"_encoding",null===r.encoding?"utf8":r.encoding),"utf8"!==this._encoding&&(r.sep=Ne(r.sep,this._encoding)),q(this,"_sep",r.sep),Be(this,"_init",!1),Be(this,"_idx",-1),this}!function(e,r){var t=Ae(e);if(t)throw t;if(t=Ae(r))throw t;if(void 0===r.prototype)throw new TypeError(A("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `%s`.",r.prototype));e.prototype=Ce(r.prototype),L(e.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:e})}(ar,ir),q(ar.prototype,"_transform",(function(e,r,t){var n;this._idx+=1,or("Received a new chunk. Chunk: %s. Encoding: %s. Index: %d.",e.toString(),r,this._idx),"utf8"===this._encoding?this._init?e=this._sep+e:this._init=!0:this._init?(e=new Te(e,r),n=this._sep.length+e.length,e=(e=Te.concat([this._sep,e],n)).toString(this._encoding)):this._init=!0,this.push(e,this._encoding),t()})),q(ar.prototype,"_flush",(function(e){or("Flushing the stream..."),e()})),q(ar.prototype,"destroy",(function(e){var r;return this._destroyed?(or("Attempted to destroy an already destroyed stream."),this):(r=this,this._destroyed=!0,function(e){var r,t;for(r=[],t=1;t<arguments.length;t++)r.push(arguments[t]);function n(){e.apply(null,r)}Ge.nextTick(n)}((function(){e&&(or("Stream was destroyed due to an error. Error: %s.",JSON.stringify(e)),r.emit("error",e));or("Closing the stream..."),r.emit("close")})),this)}));var ur=Oe(Object.assign),cr=Object.assign;function fr(e){return Object.keys(Object(e))}var lr,sr=void 0!==Object.keys;function pr(e){return"[object Arguments]"===re(e)}lr=function(){return pr(arguments)}();var gr=lr;function dr(e){return e!=e}function hr(e){return Ze(e)&&dr(e)}function yr(e){return Je(e)&&dr(e.valueOf())}function br(e){return hr(e)||yr(e)}q(br,"isPrimitive",hr),q(br,"isObject",yr);var vr=Number.POSITIVE_INFINITY,wr=Ue.NEGATIVE_INFINITY,mr=Math.floor;function jr(e){return mr(e)===e}function Or(e){return e<vr&&e>wr&&jr(e)}function _r(e){return Ze(e)&&Or(e)}function Er(e){return Je(e)&&Or(e.valueOf())}function Sr(e){return _r(e)||Er(e)}q(Sr,"isPrimitive",_r),q(Sr,"isObject",Er);var Tr=Object.prototype.propertyIsEnumerable;var Mr=!Tr.call("beep","0");function kr(e,r){var t;return null!=e&&(!(t=Tr.call(e,r))&&Mr&&Fe(e)?!hr(r=+r)&&_r(r)&&r>=0&&r<e.length:t)}var xr=gr?pr:function(e){return null!==e&&"object"==typeof e&&!be(e)&&"number"==typeof e.length&&jr(e.length)&&e.length>=0&&e.length<=4294967295&&K(e,"callee")&&!kr(e,"callee")},Vr=Array.prototype.slice;var Ir=kr((function(){}),"prototype"),Pr=!kr({toString:null},"toString");function Fr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&jr(e.length)&&e.length>=0&&e.length<=9007199254740991}function Nr(e,r,t){var n,o;if(!Fr(e)&&!ke(e))throw new TypeError(A("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!_r(t))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(br(r)){for(;o<n;o++)if(br(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function Ar(e){return e.constructor&&e.constructor.prototype===e}var $r=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Wr="undefined"==typeof window?void 0:window;var Cr=function(){var e;if("undefined"===je(Wr))return!1;for(e in Wr)try{-1===Nr($r,e)&&K(Wr,e)&&null!==Wr[e]&&"object"===je(Wr[e])&&Ar(Wr[e])}catch(e){return!0}return!1}(),Br="undefined"!=typeof window;var Gr,Hr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Gr=sr?function(){return 2!==(fr(arguments)||"").length}(1,2)?function(e){return xr(e)?fr(Vr.call(e)):fr(e)}:fr:function(e){var r,t,n,o,i,a,u;if(o=[],xr(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!K(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!ve(e))return o;t=Ir&&n}for(i in e)t&&"prototype"===i||!K(e,i)||o.push(String(i));if(Pr)for(r=function(e){if(!1===Br&&!Cr)return Ar(e);try{return Ar(e)}catch(e){return!1}}(e),u=0;u<Hr.length;u++)a=Hr[u],r&&"constructor"===a||!K(e,a)||o.push(String(a));return o};var Rr=Gr,Lr=void 0!==Object.getOwnPropertySymbols,qr=Re.getOwnPropertySymbols;var Dr,Xr=Lr?function(e){return qr(Re(e))}:function(){return[]};function Zr(e){var r,t,n;for(r=Rr(e),t=Xr(e),n=0;n<t.length;n++)kr(e,t[n])&&r.push(t[n]);return r}Dr=ur?cr:function(e){var r,t,n,o,i,a,u;if(null==e)throw new TypeError(A("invalid argument. First argument must be a non-null object. Value: `%s`.",e));for(i=Re(e),a=1;a<arguments.length;a++)if(null!=(r=arguments[a]))for(o=(t=Zr(Re(r))).length,u=0;u<o;u++)i[n=t[u]]=r[n];return i};var Ur=Dr;return q(ar,"objectMode",(function(e){var r;if(arguments.length){if(!Xe(e))throw new TypeError(tr("1MN2V,FD",e));r=Ur({},e)}else r={};return r.objectMode=!0,new ar(r)})),q(ar,"factory",(function(e){var r;if(arguments.length){if(!Xe(e))throw new TypeError(tr("1MN2V,FD",e));r=Ur({},e)}else r={};return t;function t(){return new ar(r)}})),ar}));
//# sourceMappingURL=index.js.map
