(()=>{var t={382:(t,r,o)=>{t=o.nmd(t);try{process.dlopen(t,__dirname+o(17).sep+o.p+"9e034ce62a57cddc1a2b4486c9983546.node")}catch(t){throw new Error("node-loader:\n"+t)}},17:t=>{"use strict";t.exports=require("path")}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return t[e](i,i.exports,o),i.loaded=!0,i.exports}o.d=(t,r)=>{for(var e in r)o.o(r,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.p="";var e={};(()=>{"use strict";function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(t,r){for(var o=0;o<r.length;o++){var e=r[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,n(e.key),e)}}function n(r){var o=function(r,o){if("object"!==t(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,"string");if("object"!==t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===t(o)?o:String(o)}o.r(e),o.d(e,{ComputationCPU:()=>m,ComputationMultiCore:()=>h,Matrix:()=>M,getComputation:()=>O,im2col:()=>E,maxpool:()=>_,round:()=>C,setComputation:()=>k});var i=function(){function t(){var r,o,e;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,e={},(o=n(o="kernels"))in r?Object.defineProperty(r,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[o]=e}var o,e;return o=t,e=[{key:"addKernel",value:function(t,r){return this.kernels[t]=r,this}},{key:"execute",value:function(t){if(!this.kernels[t])throw new Error("Kernel '".concat(t,"' not exists."));for(var r=arguments.length,o=new Array(r>1?r-1:0),e=1;e<r;e++)o[e-1]=arguments[e];return this.kernels[t].apply(null,o)}}],e&&r(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),t}(),a=o(382),s=function(t,r){console.log((0,a.MatrixMultiply)([1,2,3,4],[4,3,2,1]))};function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(t,r){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},f(t,r)}function c(t,r){if(r&&("object"===u(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var h=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&f(t,r)}(i,t);var r,o,e,n=(o=i,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=l(o);if(e){var n=l(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return c(this,t)});function i(){var t;return function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,i),(t=n.call(this)).addKernel("dot",s),t}return r=i,Object.defineProperty(r,"prototype",{writable:!1}),r}(i),v=function(t,r){if(t.cols!==r.rows)throw new Error("DIMENSIONS error. m1.cols ".concat(t.rows," ").concat(t.cols," !== m2.rows ").concat(r.rows," ").concat(r.cols,"."));for(var o=[],e=0;e<t.rows;++e){o[e]=new Array(r.cols);for(var n=0;n<r.cols;++n){o[e][n]=0;for(var i=0;i<t.cols;++i)t.data&&r.data&&(o[e][n]+=t.data[e][i]*r.data[i][n])}}return new M(t.rows,r.cols,o)};function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function p(t,r){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},p(t,r)}function d(t,r){if(r&&("object"===y(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var m=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&p(t,r)}(i,t);var r,o,e,n=(o=i,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=w(o);if(e){var n=w(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return d(this,t)});function i(){var t;return function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,i),(t=n.call(this)).addKernel("multiply",v),t}return r=i,Object.defineProperty(r,"prototype",{writable:!1}),r}(i),b=new m,k=function(t){b=t},O=function(){return b};function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function x(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function S(t,r){for(var o=0;o<r.length;o++){var e=r[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,P(e.key),e)}}function j(t,r,o){return(r=P(r))in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function P(t){var r=function(t,r){if("object"!==g(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var e=o.call(t,"string");if("object"!==g(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===g(r)?r:String(r)}var M=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;x(this,t),j(this,"rows",0),j(this,"cols",0),j(this,"data",null),this.resize(r,o),e&&this.generateData(e)}var r,o,e;return r=t,o=[{key:"resize",value:function(t,r){this.rows=t,this.cols=r,this.data=new Array(this.rows);for(var o=0;o<this.rows;o+=1)this.data[o]=new Array(this.cols);return this}},{key:"generateData",value:function(t){for(var r=[],o=0;o<this.rows;o+=1)r[o]=new Array(this.cols);for(var e=0;e<this.cols;e+=1)for(var n=0;n<this.rows;n+=1)"number"==typeof t[n]?r[n][e]=t[n]:"string"==typeof t[n][e]&&/^[0-9.]+$/.test(String(t[n][e]))?r[n][e]=Number(t[n][e]):r[n][e]=t[n][e];return this.data=r,this}},{key:"sum",value:function(){for(var t=0,r=0;r<this.rows;r+=1)for(var o=0;o<this.cols;o+=1)t+=this.data[r][o];return t}},{key:"colwiseSum",value:function(){for(var r=[],o=this.transpose(),e=0;e<o.rows;e+=1){r[e]=[0];for(var n=0;n<o.cols;n+=1)r[e][0]+=o.data[e][n]}return new t(this.cols,1,r)}},{key:"rowwiseSum",value:function(){for(var r=[[]],o=0;o<this.rows;o+=1){for(var e=0,n=0;n<this.cols;n+=1)e+=this.data[o][n];r[0].push(e)}return new t(1,this.rows,r)}},{key:"flatten",value:function(){for(var t=[],r=0;r<this.rows;r+=1)for(var o=0;o<this.cols;o+=1)t.push(this.data[r][o]);return t}},{key:"replicate",value:function(r,o){if(1===r&&1===this.cols&&o>1){for(var e=[],n=0;n<this.rows;n+=1){e[n]=[];for(var i=0;i<o;i+=1)e[n][i]=this.data[n][0]}return t.from(e)}if(1===o&&1===this.rows&&r>1){for(var a=[],s=0;s<r;s+=1){a[s]=[];for(var u=0;u<this.cols;u+=1)a[s][u]=this.data[0][u]}return t.from(a)}return this}},{key:"transpose",value:function(){return O().execute("transpose",this)}},{key:"colMaxCoeffIndex",value:function(t){for(var r=-1,o=-1/0,e=0;e<this.rows;e+=1)this.data&&this.data[e][t]>o&&(o=this.data[e][t],r=e);return r}},{key:"rowMaxCoeffIndex",value:function(t){for(var r=-1,o=-1/0,e=0;e<this.cols;e+=1)this.data[t][e]>o&&(o=this.data[t][e],r=e);return r}},{key:"block",value:function(r,o,e,n){for(var i=[],a=r,s=0;a<this.rows&&a<r+e;a+=1,s+=1){i[s]=new Array(n);for(var u=o,f=0;u<this.cols&&u<o+n;u+=1,f+=1)i[s][f]=this.data[a][u]}return new t(e,n,i)}},{key:"col",value:function(r){for(var o=[],e=0;e<this.rows;e+=1)o[e]=[this.data[e][r]];return new t(this.rows,1,o)}},{key:"row",value:function(r){for(var o=[],e=0;e<this.cols;e+=1)o[e]=[this.data[r][e]];return new t(this.cols,1,o)}},{key:"setCol",value:function(t,r){for(var o=0;o<this.rows;o+=1)this.data&&r.data&&(this.data[o][t]=r.data[o][0]);return this}},{key:"sigmoid",value:function(){return this.multiply(-1).exp().add(1).fraction(1)}},{key:"rollToColMatrix",value:function(){for(var r=[],o=0,e=0;e<this.rows;e+=1)for(var n=0;n<this.cols;n+=1)r[o]=[],r[o++][0]=this.data[e][n];return t.from(r)}},{key:"abs",value:function(){for(var r=[],o=0;o<this.rows;o+=1){r[o]=[];for(var e=0;e<this.cols;e+=1)r[o][e]=Math.abs(this.data[o][e])}return t.from(r)}},{key:"mean",value:function(){for(var t=0,r=this.rows*this.cols,o=0;o<this.rows;o+=1)for(var e=0;e<this.cols;e+=1)t+=this.data[o][e];return t/r}},{key:"max",value:function(){for(var t=-1/0,r=0;r<this.rows;r+=1)for(var o=0;o<this.cols;o+=1)t=Math.max(this.data[r][o],t);return t}},{key:"setMax",value:function(r){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=Math.min(this.data[e][n],r)}return t.from(o)}},{key:"setMin",value:function(r){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=Math.max(this.data[e][n],r)}return t.from(o)}},{key:"setZeros",value:function(){for(var r=[],o=0;o<this.rows;o+=1){r[o]=[];for(var e=0;e<this.cols;e+=1)r[o][e]=0}return t.from(r)}},{key:"setOnes",value:function(){for(var r=[],o=0;o<this.rows;o+=1){r[o]=[];for(var e=0;e<this.cols;e+=1)r[o][e]=1}return t.from(r)}},{key:"setRandom",value:function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=(4*Math.random()-2)*Math.sqrt(2/r)}return t.from(o)}},{key:"fraction",value:function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=r/this.data[e][n]}return t.from(o)}},{key:"sqrt",value:function(){for(var r=[],o=0;o<this.rows;o+=1){r[o]=[];for(var e=0;e<this.cols;e+=1)r[o][e]=Math.sqrt(this.data[o][e]+1e-8)}return t.from(r)}},{key:"dot",value:function(t){return O().execute("dot",this,t)}},{key:"multiply",value:function(r){if("number"==typeof r){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=this.data[e][n]*r}return t.from(o)}if(r.rows!==this.rows||this.cols!==r.cols)throw new Error("Dimension error: ".concat(this.shape()," !== ").concat(r.shape()));for(var i=[],a=0;a<this.rows;a+=1){i[a]=[];for(var s=0;s<this.cols;s+=1)i[a][s]=this.data[a][s]*r.data[a][s]}return t.from(i)}},{key:"subtract",value:function(r){if("number"==typeof r){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=this.data[e][n]-r}return t.from(o)}if(this.rows!==r.rows||this.cols!==r.cols)throw new Error("Dimensions error: ".concat(this.rows,", ").concat(this.cols," !== ").concat(r.rows,", ").concat(r.cols));for(var i=[],a=0;a<this.rows;a+=1){i[a]=[];for(var s=0;s<this.cols;s+=1)i[a][s]=this.data[a][s]-r.data[a][s]}return t.from(i)}},{key:"forEach",value:function(r){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=r(this.data[e][n])}return t.from(o)}},{key:"shape",value:function(){return[this.rows,this.cols]}},{key:"divide",value:function(r){if("number"==typeof r){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=this.data[e][n]/r}return t.from(o)}if(r.rows!==this.rows||r.cols!==this.cols)throw new Error("Dimensions error (".concat(this.rows,", ").concat(this.cols,") !== (").concat(r.rows,", ").concat(r.cols,")"));for(var i=[],a=0;a<this.rows;a+=1){i[a]=[];for(var s=0;s<this.cols;s+=1)i[a][s]=this.data[a][s]/r.data[a][s]}return t.from(i)}},{key:"minusOne",value:function(){for(var r=[],o=0;o<this.rows;o+=1){r[o]=[];for(var e=0;e<this.cols;e+=1)r[o][e]=1-this.data[o][e]}return t.from(r)}},{key:"subtractFromNumber",value:function(r){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=r-this.data[e][n]}return t.from(o)}},{key:"add",value:function(r){if("number"==typeof r){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=this.data[e][n]+r}return t.from(o)}if(r instanceof t){if(r.rows!==this.rows||r.cols!==this.cols)throw new Error("Dimention error: rows (x: ".concat(this.rows,", y: ").concat(this.cols,") !== (x: ").concat(r.rows,", y: ").concat(r.cols,")"));for(var i=[],a=0;a<this.rows;a+=1){i[a]=[];for(var s=0;s<this.cols;s+=1)i[a][s]=this.data[a][s]+r.data[a][s]}return t.from(i)}return this}},{key:"log",value:function(){for(var r=[],o=0;o<this.rows;o+=1){r[o]=[];for(var e=0;e<this.cols;e+=1)r[o][e]=Math.log(this.data[o][e]+1e-8)}return t.from(r)}},{key:"tanh",value:function(){return this.exp().subtract(this.multiply(-1).exp()).divide(this.exp().add(this.multiply(-1).exp()))}},{key:"softmax",value:function(){var t=this.max()-1e-8;return this.subtract(t).exp().divide(this.rowwiseSum().replicate(this.cols,1).transpose())}},{key:"exp",value:function(){for(var r=[],o=0;o<this.rows;o+=1){r[o]=[];for(var e=0;e<this.cols;e+=1)r[o][e]=Math.exp(this.data[o][e]+1e-8)}return t.from(r)}},{key:"pow",value:function(r){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var n=0;n<this.cols;n+=1)o[e][n]=Math.pow(this.data[e][n],r)}return t.from(o)}},{key:"value",value:function(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return void 0===o?this.data[t][r]:(this.data[t][r]=o,this)}},{key:"copy",value:function(){return t.from(this.data)}},{key:"concat",value:function(t){for(var r=0;r<t.rows;r+=1)this.data.push(t.data[r]);return this}}],e=[{key:"from",value:function(r){var o;return new t(r.length,(null===(o=r[0])||void 0===o?void 0:o.length)||0,r)}}],o&&S(r.prototype,o),e&&S(r,e),Object.defineProperty(r,"prototype",{writable:!1}),t}(),E=function(t,r,o,e,n,i,a,s,u,f){for(var c=0,l=new M(((e-i+2*s)/f+1)*((o-n+2*a)/u+1),i*n*r).setZeros(),h=-a;h+n<=o+a;h+=u)for(var v=-s;v+i<=e+s;v+=f){for(var y=0,p=0;p<r;p++)for(var d=o*e*p,w=0;w<n;w++)for(var m=0;m<i;m++)h+w>=0&&v+m>=0&&v+m<e&&h+w<o&&(l.data[c][y]=t.data[(w+h)*e+v+m+d][0]),y++;c++}return l},_=function(t,r,o,e,n,i,a,s){for(var u=(e-i)/s+1,f=(o-n)/a+1,c=0,l=new M(u*f*r,1).setZeros(),h=0;h+n<=o;h+=a)for(var v=0;v+i<=e;v+=s){for(var y=0;y<r;y++){for(var p=-1/0,d=o*e*y,w=u*f*y,m=0;m<n;m++)for(var b=0;b<i;b++)p=Math.max(p,t.data[d+(m+h)*e+v+b][0]);l.data[w+c][0]=p}c++}return l},C=function(t,r){return Math.round((t+223e-18)*Math.pow(10,r))/Math.pow(10,r)}})(),module.exports=e})();
//# sourceMappingURL=impulse-math-ts.js.map