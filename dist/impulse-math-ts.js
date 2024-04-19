(()=>{"use strict";var r={d:(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(r,t)=>Object.prototype.hasOwnProperty.call(r,t),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}},t={};function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e(r)}function n(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,o(n.key),n)}}function o(r){var t=function(r,t){if("object"!=e(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"==e(t)?t:t+""}r.r(t),r.d(t,{ComputationCPU:()=>wr,ComputationMultiCore:()=>y,Matrix:()=>Er,getComputation:()=>gr,im2col:()=>Mr,maxpool:()=>kr,round:()=>Cr,setComputation:()=>Sr});var a=function(){return r=function r(){var t,e,n;!function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t=this,n={},(e=o(e="kernels"))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n},t=[{key:"addKernel",value:function(r,t){return this.kernels[r]=t,this}},{key:"execute",value:function(r){if(!this.kernels[r])throw new Error("Kernel '".concat(r,"' not exists."));for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return this.kernels[r].apply(null,e)}}],t&&n(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,t}(),i=function(r,t){};function u(r){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},u(r)}function c(r,t,e){return t=f(t),function(r,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}(r,l()?Reflect.construct(t,e||[],f(r).constructor):t.apply(r,e))}function l(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(r){}return(l=function(){return!!r})()}function f(r){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},f(r)}function s(r,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},s(r,t)}var y=function(r){function t(){var r;return function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=c(this,t)).addKernel("dot",i),r}return function(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),t&&s(r,t)}(t,r),e=t,Object.defineProperty(e,"prototype",{writable:!1}),e;var e}(a);function d(r){return function(r){if(Array.isArray(r))return p(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(r){if("string"==typeof r)return p(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?p(r,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var m=function(r,t){if(r.cols!==t.rows)throw new Error("DIMENSIONS error. m1.cols ".concat(r.rows," ").concat(r.cols," !== m2.rows ").concat(t.rows," ").concat(t.cols,"."));for(var e=[],n=0;n<r.rows;n+=1){e[n]=new Array(t.cols);for(var o=0;o<t.cols;o+=1){e[n][o]=0;for(var a=0;a<r.cols;a+=1)for(var i=0;i<t.rows;i+=1)e[n][o]+=r.data[n*r.cols+a]*t.data[i*t.cols+o]}}var u=[];return e.forEach((function(r){u=[].concat(d(u),d(r))})),new Er(r.rows,t.cols,u)},b=function(r){for(var t=[],e=0;e<r.cols;++e)for(var n=0;n<r.rows;++n)t.push(r.data[n*r.cols+e]);return new Er(r.cols,r.rows,t)};function v(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var h=function(r,t){var e,n=function(r){if(Array.isArray(r))return v(r)}(e=t.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(r,t){if(r){if("string"==typeof r)return v(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?v(r,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return n.forEach((function(r,t){n[t]=r>0?1:0})),new Er(t.rows,t.cols,n)};function w(r){return function(r){if(Array.isArray(r))return A(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(r){if("string"==typeof r)return A(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?A(r,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var S=function(r,t){if("number"==typeof t){var e=w(r.data);return e.forEach((function(r,n){e[n]=r+t})),new Er(r.rows,r.cols,e)}if(t instanceof Er){if(t.rows!==r.rows||t.cols!==r.cols)throw new Error("Dimention error: rows (x: ".concat(r.rows,", y: ").concat(r.cols,") !== (x: ").concat(t.rows,", y: ").concat(t.cols,")"));var n=w(r.data);return n.forEach((function(r,e){n[e]=r+t.data[e]})),new Er(r.rows,r.cols,n)}};function g(r){return function(r){if(Array.isArray(r))return j(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(r){if("string"==typeof r)return j(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?j(r,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var O=function(r,t){if("number"==typeof t){var e=g(r.data);return e.forEach((function(r,n){e[n]=r-t})),new Er(r.rows,r.cols,e)}if(r.rows!==t.rows||r.cols!==t.cols)throw new Error("Dimensions error: ".concat(r.rows,", ").concat(r.cols," !== ").concat(t.rows,", ").concat(t.cols));var n=g(r.data);return n.forEach((function(r,e){n[e]=r-t.data[e]})),new Er(r.rows,r.cols,n)};function x(r){return function(r){if(Array.isArray(r))return I(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(r){if("string"==typeof r)return I(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?I(r,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var E=function(r,t){if("number"==typeof t){var e=x(r.data);return e.forEach((function(r,n){e[n]=r*t})),new Er(r.rows,r.cols,e)}if(t.rows!==r.rows||r.cols!==t.cols)throw new Error("Dimension error: ".concat(r.shape()," !== ").concat(t.shape()));var n=x(r.data);return n.forEach((function(r,e){n[e]=r*t.data[e]})),new Er(r.rows,r.cols,n)};function M(r){return function(r){if(Array.isArray(r))return k(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(r){if("string"==typeof r)return k(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?k(r,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var C=function(r,t){if("number"==typeof t){var e=M(r.data);return e.forEach((function(r,n){e[n]=r/t})),new Er(r.rows,r.cols,e)}if(t.rows!==r.rows||t.cols!==r.cols)throw new Error("Dimensions error (".concat(r.rows,", ").concat(r.cols,") !== (").concat(t.rows,", ").concat(t.cols,")"));var n=M(r.data);return n.forEach((function(r,e){n[e]=r/t.data[e]})),new Er(r.rows,r.cols,n)};function K(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var T=function(r){for(var t=function(r){if(Array.isArray(r))return K(r)}(n=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(n)||function(r,t){if(r){if("string"==typeof r)return K(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?K(r,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),e=0;e<r.rows*r.cols;e+=1)t[e]=1-t[e];var n;return new Er(r.rows,r.cols,t)};function P(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var U=function(r){var t,e=function(r){if(Array.isArray(r))return P(r)}(t=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(r,t){if(r){if("string"==typeof r)return P(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?P(r,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return e.forEach((function(r,t){e[t]=Math.log(r+1e-8)})),new Er(r.rows,r.cols,e)};function $(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var _=function(r,t){var e,n=function(r){if(Array.isArray(r))return $(r)}(e=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(r,t){if(r){if("string"==typeof r)return $(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?$(r,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return n.forEach((function(r,e){n[e]=Math.pow(r,t)})),new Er(r.rows,r.cols,n)};function R(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var D=function(r){var t,e=function(r){if(Array.isArray(r))return R(r)}(t=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(r,t){if(r){if("string"==typeof r)return R(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?R(r,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return e.forEach((function(r,t){e[t]=Math.exp(r+1e-16)})),new Er(r.rows,r.cols,e)};function N(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var q=function(r){var t,e=function(r){if(Array.isArray(r))return N(r)}(t=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(r,t){if(r){if("string"==typeof r)return N(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?N(r,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return e.forEach((function(r,t){e[t]=Math.sqrt(r+1e-8)})),new Er(r.rows,r.cols,e)};function B(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var Z=function(r,t){var e,n=function(r){if(Array.isArray(r))return B(r)}(e=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(r,t){if(r){if("string"==typeof r)return B(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?B(r,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return n.forEach((function(r,e){n[e]=t-r})),new Er(r.rows,r.cols,n)};function F(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var z=function(r,t){var e,n=function(r){if(Array.isArray(r))return F(r)}(e=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(r,t){if(r){if("string"==typeof r)return F(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?F(r,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return n.forEach((function(r,e){n[e]=Math.max(r,t)})),new Er(r.rows,r.cols,n)};function G(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var H=function(r,t){var e,n=function(r){if(Array.isArray(r))return G(r)}(e=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(r,t){if(r){if("string"==typeof r)return G(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?G(r,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return n.forEach((function(r,e){n[e]=Math.min(r,t)})),new Er(r.rows,r.cols,n)};function J(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var L=function(r){var t,e=function(r){if(Array.isArray(r))return J(r)}(t=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(r,t){if(r){if("string"==typeof r)return J(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?J(r,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return e.forEach((function(r,t){e[t]=1})),new Er(r.rows,r.cols,e)};function Q(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var V=function(r){var t,e=function(r){if(Array.isArray(r))return Q(r)}(t=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(r,t){if(r){if("string"==typeof r)return Q(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Q(r,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return e.forEach((function(r,t){e[t]=0})),new Er(r.rows,r.cols,e)};function W(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var X=function(r,t){var e,n=function(r){if(Array.isArray(r))return W(r)}(e=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(r,t){if(r){if("string"==typeof r)return W(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?W(r,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return n.forEach((function(r,e){n[e]=(4*Math.random()-2)*Math.sqrt(2/t)})),new Er(r.rows,r.cols,n)};function Y(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var rr=function(r,t){var e,n=function(r){if(Array.isArray(r))return Y(r)}(e=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(r,t){if(r){if("string"==typeof r)return Y(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Y(r,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return n.forEach((function(r,e){n[e]=t/r})),new Er(r.rows,r.cols,n)},tr=function(r){for(var t=-1/0,e=0;e<r.rows*r.cols;e+=1)t=Math.max(r.data[e],t);return t};function er(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var nr=function(r){var t,e=function(r){if(Array.isArray(r))return er(r)}(t=r.data)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(r,t){if(r){if("string"==typeof r)return er(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?er(r,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return e.forEach((function(r,t){e[t]=Math.abs(r)})),new Er(r.rows,r.cols,e)},or=function(r){for(var t=0,e=r.rows*r.cols,n=0;n<r.rows*r.cols;n+=1)t+=r.data[n];return t/e},ar=function(r){for(var t=0,e=0;e<r.rows*r.cols;e+=1)t+=r.data[e];return t},ir=function(r){for(var t=[],e=0;e<r.rows;e+=1){for(var n=0,o=0;o<r.cols;o+=1)n+=r.data[e*r.cols+o];t.push(n)}return new Er(1,r.rows,t)},ur=function(r){for(var t=[],e=r.transpose(),n=0;n<e.rows;n+=1){t[n]=0;for(var o=0;o<e.cols;o+=1)t[n]+=e.data[n*e.cols+o]}return new Er(r.cols,1,t)},cr=function(r,t,e){if(1===t&&1===r.cols&&e>1){for(var n=[],o=0;o<e;o+=1)for(var a=0;a<r.rows;a+=1)n[a*e+o]=r.data[a*r.cols];return new Er(r.rows,e,n)}if(1===e&&1===r.rows&&t>1){for(var i=[],u=0;u<t;u+=1)for(var c=0;c<r.cols;c+=1)i[u*r.cols+c]=r.data[c];return new Er(t,r.cols,i)}return r},lr=function(r,t){for(var e=-1,n=-1/0,o=0;o<r.rows;o+=1)r.data[o*r.cols+t]>n&&(n=r.data[o*r.cols+t],e=o);return e},fr=function(r,t){for(var e=-1,n=-1/0,o=0;o<r.cols;o+=1)r.data[t*r.cols+o]>n&&(n=r[t*r.cols+o],e=o);return e},sr=function(r,t){for(var e=t*r.cols,n=[],o=e;o<e+r.cols;o+=1)n.push(r.data[o]);return new Er(1,r.cols,n)},yr=function(r,t){for(var e=[],n=0;n<r.rows;n+=1)e[n]=r.data[r.cols*n+t];return new Er(r.rows,1,e)},dr=function(r){for(var t=[],e=0;e<r.rows;e+=1)for(var n=0;n<r.cols;n+=1)t.push(r.data[e*r.cols+n]);return new Er(r.rows*r.cols,1,t)};function pr(r){return pr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},pr(r)}function mr(r,t,e){return t=vr(t),function(r,t){if(t&&("object"===pr(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}(r,br()?Reflect.construct(t,e||[],vr(r).constructor):t.apply(r,e))}function br(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(r){}return(br=function(){return!!r})()}function vr(r){return vr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},vr(r)}function hr(r,t){return hr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},hr(r,t)}var wr=function(r){function t(){var r;return function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=mr(this,t)).addKernel("dot",m),r.addKernel("transpose",b),r.addKernel("reluBackpropagation",h),r.addKernel("add",S),r.addKernel("subtract",O),r.addKernel("multiply",E),r.addKernel("divide",C),r.addKernel("minusOne",T),r.addKernel("subtractNumberFrom",Z),r.addKernel("log",U),r.addKernel("exp",D),r.addKernel("pow",_),r.addKernel("sqrt",q),r.addKernel("setMin",z),r.addKernel("setMax",H),r.addKernel("setOnes",L),r.addKernel("setZeros",V),r.addKernel("setRandom",X),r.addKernel("fraction",rr),r.addKernel("max",tr),r.addKernel("abs",nr),r.addKernel("mean",or),r.addKernel("sum",ar),r.addKernel("rowwiseSum",ir),r.addKernel("colwiseSum",ur),r.addKernel("replicate",cr),r.addKernel("colMaxCoeffIndex",lr),r.addKernel("rowMaxCoeffIndex",fr),r.addKernel("row",sr),r.addKernel("col",yr),r.addKernel("rollToColMatrix",dr),r}return function(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),t&&hr(r,t)}(t,r),e=t,Object.defineProperty(e,"prototype",{writable:!1}),e;var e}(a),Ar=new wr,Sr=function(r){Ar=r},gr=function(){return Ar};function jr(r){return jr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},jr(r)}function Or(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,Ir(n.key),n)}}function xr(r,t,e){return(t=Ir(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function Ir(r){var t=function(r,t){if("object"!=jr(r)||!r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,"string");if("object"!=jr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"==jr(t)?t:t+""}var Er=function(){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;!function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),xr(this,"rows",0),xr(this,"cols",0),xr(this,"data",null),this.rows=t,this.cols=e,this.data=n,n||(this.data=new Array(t*e))}return t=r,e=[{key:"resize",value:function(r,t){this.rows=r,this.cols=t,this.data=new Array(r*t)}},{key:"sum",value:function(){return gr().execute("sum",this)}},{key:"colwiseSum",value:function(){return gr().execute("colwiseSum",this)}},{key:"rowwiseSum",value:function(){return gr().execute("rowwiseSum",this)}},{key:"flatten",value:function(){for(var r=[],t=0;t<this.rows;t+=1)for(var e=0;e<this.cols;e+=1)r.push(this.data[t][e]);return r}},{key:"replicate",value:function(r,t){return gr().execute("replicate",this,r,t)}},{key:"transpose",value:function(){return gr().execute("transpose",this)}},{key:"colMaxCoeffIndex",value:function(r){return gr().execute("colMaxCoeffIndex",this,r)}},{key:"rowMaxCoeffIndex",value:function(r){return gr().execute("rowMaxCoeffIndex",this,r)}},{key:"col",value:function(r){return gr().execute("col",this,r)}},{key:"row",value:function(r){return gr().execute("row",this,r)}},{key:"sigmoid",value:function(){return this.multiply(-1).exp().add(1).fraction(1)}},{key:"rollToColMatrix",value:function(){return gr().execute("rollToColMatrix",this)}},{key:"abs",value:function(){return gr().execute("abs",this)}},{key:"mean",value:function(){return gr().execute("mean",this)}},{key:"max",value:function(){return gr().execute("max",this)}},{key:"setMax",value:function(r){return gr().execute("setMax",this,r)}},{key:"setMin",value:function(r){return gr().execute("setMin",this,r)}},{key:"setZeros",value:function(){return gr().execute("setZeros",this)}},{key:"setOnes",value:function(){return gr().execute("setOnes",this)}},{key:"setRandom",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return gr().execute("setRandom",this,r)}},{key:"fraction",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return gr().execute("fraction",this,r)}},{key:"sqrt",value:function(){return gr().execute("sqrt",this)}},{key:"dot",value:function(r){return gr().execute("dot",this,r)}},{key:"multiply",value:function(r){return gr().execute("multiply",this,r)}},{key:"subtract",value:function(r){return gr().execute("subtract",this,r)}},{key:"forEach",value:function(t){for(var e=[],n=0;n<this.rows;n+=1){e[n]=[];for(var o=0;o<this.cols;o+=1)e[n][o]=t(this.data[n][o])}return r.from(e)}},{key:"shape",value:function(){return[this.rows,this.cols]}},{key:"divide",value:function(r){return gr().execute("divide",this,r)}},{key:"minusOne",value:function(){return gr().execute("subtractNumberFrom",this,-1)}},{key:"subtractNumberFrom",value:function(r){return gr().execute("subtractNumberFrom",this,r)}},{key:"add",value:function(r){return gr().execute("add",this,r)}},{key:"log",value:function(){return gr().execute("log",this)}},{key:"tanh",value:function(){return this.exp().subtract(this.multiply(-1).exp()).divide(this.exp().add(this.multiply(-1).exp()))}},{key:"softmax",value:function(){var r=this.max()-1e-8;return this.subtract(r).exp().divide(this.rowwiseSum().replicate(this.cols,1).transpose())}},{key:"exp",value:function(){return gr().execute("exp",this)}},{key:"pow",value:function(r){return gr().execute("pow",this,r)}},{key:"value",value:function(r,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return void 0===e?this.data[r][t]:(this.data[r][t]=e,this)}},{key:"copy",value:function(){return r.from(this.data)}},{key:"concat",value:function(r){for(var t=0;t<r.rows;t+=1)this.data.push(r.data[t]);return this}}],n=[{key:"from",value:function(t){var e;return new r(t.length,(null===(e=t[0])||void 0===e?void 0:e.length)||0,t)}}],e&&Or(t.prototype,e),n&&Or(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,n}(),Mr=function(r,t,e,n,o,a,i,u,c,l){for(var f=0,s=new Er(((n-a+2*u)/l+1)*((e-o+2*i)/c+1),a*o*t).setZeros(),y=-i;y+o<=e+i;y+=c)for(var d=-u;d+a<=n+u;d+=l){for(var p=0,m=0;m<t;m++)for(var b=e*n*m,v=0;v<o;v++)for(var h=0;h<a;h++)y+v>=0&&d+h>=0&&d+h<n&&y+v<e&&(s.data[f][p]=r.data[(v+y)*n+d+h+b][0]),p++;f++}return s},kr=function(r,t,e,n,o,a,i,u){for(var c=(n-a)/u+1,l=(e-o)/i+1,f=0,s=new Er(c*l*t,1).setZeros(),y=0;y+o<=e;y+=i)for(var d=0;d+a<=n;d+=u){for(var p=0;p<t;p++){for(var m=-1/0,b=e*n*p,v=c*l*p,h=0;h<o;h++)for(var w=0;w<a;w++)m=Math.max(m,r.data[b+(h+y)*n+d+w][0]);s.data[v+f][0]=m}f++}return s},Cr=function(r,t){return Math.round((r+223e-18)*Math.pow(10,t))/Math.pow(10,t)};module.exports=t})();
//# sourceMappingURL=impulse-math-ts.js.map