/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/typescript/Computation/AbstractComputation.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Computation/AbstractComputation.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractComputation: () => (/* binding */ AbstractComputation)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AbstractComputation = /*#__PURE__*/function () {
  function AbstractComputation() {
    _classCallCheck(this, AbstractComputation);
    _defineProperty(this, "kernels", {});
  }
  return _createClass(AbstractComputation, [{
    key: "addKernel",
    value: function addKernel(name, func) {
      this.kernels[name] = func;
      return this;
    }
  }, {
    key: "execute",
    value: function execute(name) {
      if (!this.kernels[name]) {
        throw new Error("Kernel '".concat(name, "' not exists."));
      }
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return this.kernels[name].apply(null, args);
    }
  }]);
}();

/***/ }),

/***/ "./src/typescript/Computation/CPU/abs.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/abs.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var abs = function abs(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.abs(value);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/add.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/add.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var add = function add(m1, m) {
  if (typeof m === "number") {
    var data = _toConsumableArray(m1.data);
    data.forEach(function (value, index) {
      data[index] = value + m;
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
  } else if (m instanceof _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix) {
    if (m.rows !== m1.rows || m.cols !== m1.cols) {
      throw new Error("Dimention error: rows (x: ".concat(m1.rows, ", y: ").concat(m1.cols, ") !== (x: ").concat(m.rows, ", y: ").concat(m.cols, ")"));
    }
    var _data = _toConsumableArray(m1.data);
    _data.forEach(function (value, index) {
      _data[index] = value + m.data[index];
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, _data);
  }
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/col.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/col.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   col: () => (/* binding */ col)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var col = function col(m1, _col) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = m1.data[m1.cols * row + _col];
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, 1, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/colMaxCoeffIndex.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Computation/CPU/colMaxCoeffIndex.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colMaxCoeffIndex: () => (/* binding */ colMaxCoeffIndex)
/* harmony export */ });
var colMaxCoeffIndex = function colMaxCoeffIndex(m1, col) {
  var maxIndex = -1;
  var max = -Infinity;
  for (var row = 0; row < m1.rows; row += 1) {
    if (m1.data[row * m1.cols + col] > max) {
      max = m1.data[row * m1.cols + col];
      maxIndex = row;
    }
  }
  return maxIndex;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/colwiseSum.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/CPU/colwiseSum.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colwiseSum: () => (/* binding */ colwiseSum)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var colwiseSum = function colwiseSum(m1) {
  var data = [];
  var t = m1.transpose();
  for (var row = 0; row < t.rows; row += 1) {
    data[row] = 0;
    for (var col = 0; col < t.cols; col += 1) {
      data[row] += t.data[row * t.cols + col];
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.cols, 1, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/divide.ts":
/*!**************************************************!*\
  !*** ./src/typescript/Computation/CPU/divide.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   divide: () => (/* binding */ divide)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var divide = function divide(m1, num) {
  if (typeof num === "number") {
    var data = _toConsumableArray(m1.data);
    data.forEach(function (value, index) {
      data[index] = value / num;
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
  } else {
    if (num.rows !== m1.rows || num.cols !== m1.cols) {
      throw new Error("Dimensions error (".concat(m1.rows, ", ").concat(m1.cols, ") !== (").concat(num.rows, ", ").concat(num.cols, ")"));
    }
    var _data = _toConsumableArray(m1.data);
    _data.forEach(function (value, index) {
      _data[index] = value / num.data[index];
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, _data);
  }
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/dot.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/dot.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dot: () => (/* binding */ dot)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var dot = function dot(m1, m2) {
  if (m1.cols !== m2.rows) {
    throw new Error("DIMENSIONS error. m1.cols ".concat(m1.rows, " ").concat(m1.cols, " !== m2.rows ").concat(m2.rows, " ").concat(m2.cols, "."));
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = new Array(m2.cols);
    for (var col = 0; col < m2.cols; col += 1) {
      data[row][col] = 0;
      for (var i = 0; i < m1.cols; i += 1) {
        for (var j = 0; j < m2.rows; j += 1) {
          data[row][col] += m1.data[row * m1.cols + i] * m2.data[j * m2.cols + col];
        }
      }
    }
  }
  var newData = [];
  data.forEach(function (row) {
    newData = [].concat(_toConsumableArray(newData), _toConsumableArray(row));
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m2.cols, newData);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/exp.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/exp.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exp: () => (/* binding */ exp)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var exp = function exp(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.exp(value + 1e-16);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/fraction.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/fraction.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fraction: () => (/* binding */ fraction)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var fraction = function fraction(m1, num) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = num / value;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/log.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/log.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var log = function log(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.log(value + 1e-8);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/max.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/max.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   max: () => (/* binding */ max)
/* harmony export */ });
var max = function max(m1) {
  var max = -Infinity;
  for (var index = 0; index < m1.rows * m1.cols; index += 1) {
    max = Math.max(m1.data[index], max);
  }
  return max;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/mean.ts":
/*!************************************************!*\
  !*** ./src/typescript/Computation/CPU/mean.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mean: () => (/* binding */ mean)
/* harmony export */ });
var mean = function mean(m1) {
  var sum = 0;
  var numberOfElements = m1.rows * m1.cols;
  for (var index = 0; index < m1.rows * m1.cols; index += 1) {
    sum += m1.data[index];
  }
  return sum / numberOfElements;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/minusOne.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/minusOne.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   minusOne: () => (/* binding */ minusOne)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var minusOne = function minusOne(m1) {
  var data = _toConsumableArray(m1.data);
  for (var index = 0; index < m1.rows * m1.cols; index += 1) {
    data[index] = 1 - data[index];
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/multiply.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/multiply.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   multiply: () => (/* binding */ multiply)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var multiply = function multiply(m1, num) {
  if (typeof num === "number") {
    var data = _toConsumableArray(m1.data);
    data.forEach(function (value, index) {
      data[index] = value * num;
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
  } else {
    if (num.rows !== m1.rows || m1.cols !== num.cols) {
      throw new Error("Dimension error: ".concat(m1.shape(), " !== ").concat(num.shape()));
    }
    var _data = _toConsumableArray(m1.data);
    _data.forEach(function (value, index) {
      _data[index] = value * num.data[index];
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, _data);
  }
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/pow.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/pow.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pow: () => (/* binding */ pow)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var pow = function pow(m1, num) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.pow(value, num);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/reluBackpropagation.ts":
/*!***************************************************************!*\
  !*** ./src/typescript/Computation/CPU/reluBackpropagation.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reluBackpropagation: () => (/* binding */ reluBackpropagation)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var reluBackpropagation = function reluBackpropagation(delta, A) {
  var data = _toConsumableArray(A.data);
  data.forEach(function (value, index) {
    data[index] = value > 0 ? 1 : 0;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(A.rows, A.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/replicate.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Computation/CPU/replicate.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   replicate: () => (/* binding */ replicate)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var replicate = function replicate(m1, rows, cols) {
  if (rows === 1 && m1.cols === 1 && cols > 1) {
    var newData = [];
    for (var col = 0; col < cols; col += 1) {
      for (var row = 0; row < m1.rows; row += 1) {
        newData[row * cols + col] = m1.data[row * m1.cols];
      }
    }
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, cols, newData);
  } else if (cols === 1 && m1.rows === 1 && rows > 1) {
    var _newData = [];
    for (var _row = 0; _row < rows; _row += 1) {
      for (var _col = 0; _col < m1.cols; _col += 1) {
        _newData[_row * m1.cols + _col] = m1.data[_col];
      }
    }
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(rows, m1.cols, _newData);
  }
  return m1;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/rollToColMatrix.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Computation/CPU/rollToColMatrix.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rollToColMatrix: () => (/* binding */ rollToColMatrix)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var rollToColMatrix = function rollToColMatrix(m1) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    for (var col = 0; col < m1.cols; col += 1) {
      data.push(m1.data[row * m1.cols + col]);
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows * m1.cols, 1, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/row.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/row.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   row: () => (/* binding */ row)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var row = function row(m1, _row) {
  var startIndex = _row * m1.cols;
  var data = [];
  for (var i = startIndex; i < startIndex + m1.cols; i += 1) {
    data.push(m1.data[i]);
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(1, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/rowMaxCoeffIndex.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Computation/CPU/rowMaxCoeffIndex.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rowMaxCoeffIndex: () => (/* binding */ rowMaxCoeffIndex)
/* harmony export */ });
var rowMaxCoeffIndex = function rowMaxCoeffIndex(m1, row) {
  var maxIndex = -1;
  var max = -Infinity;
  for (var col = 0; col < m1.cols; col += 1) {
    if (m1.data[row * m1.cols + col] > max) {
      max = m1[row * m1.cols + col];
      maxIndex = col;
    }
  }
  return maxIndex;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/rowwiseSum.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/CPU/rowwiseSum.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rowwiseSum: () => (/* binding */ rowwiseSum)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var rowwiseSum = function rowwiseSum(m1) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    var sum = 0.0;
    for (var col = 0; col < m1.cols; col += 1) {
      sum += m1.data[row * m1.cols + col];
    }
    data.push(sum);
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(1, m1.rows, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setMax.ts":
/*!**************************************************!*\
  !*** ./src/typescript/Computation/CPU/setMax.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setMax: () => (/* binding */ setMax)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setMax = function setMax(m1, max) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.min(value, max);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setMin.ts":
/*!**************************************************!*\
  !*** ./src/typescript/Computation/CPU/setMin.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setMin: () => (/* binding */ setMin)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setMin = function setMin(m1, min) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.max(value, min);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setOnes.ts":
/*!***************************************************!*\
  !*** ./src/typescript/Computation/CPU/setOnes.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setOnes: () => (/* binding */ setOnes)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setOnes = function setOnes(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = 1;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setRandom.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Computation/CPU/setRandom.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setRandom: () => (/* binding */ setRandom)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setRandom = function setRandom(m1, parameter) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setZeros.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/setZeros.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setZeros: () => (/* binding */ setZeros)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setZeros = function setZeros(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = 0;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/sqrt.ts":
/*!************************************************!*\
  !*** ./src/typescript/Computation/CPU/sqrt.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sqrt: () => (/* binding */ sqrt)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var sqrt = function sqrt(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.sqrt(value + 1e-8);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/subtract.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/subtract.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subtract: () => (/* binding */ subtract)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var subtract = function subtract(m1, m) {
  if (typeof m === "number") {
    var data = _toConsumableArray(m1.data);
    data.forEach(function (value, index) {
      data[index] = value - m;
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
  } else {
    if (m1.rows !== m.rows || m1.cols !== m.cols) {
      throw new Error("Dimensions error: ".concat(m1.rows, ", ").concat(m1.cols, " !== ").concat(m.rows, ", ").concat(m.cols));
    }
    var _data = _toConsumableArray(m1.data);
    _data.forEach(function (value, index) {
      _data[index] = value - m.data[index];
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, _data);
  }
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/subtractNumberFrom.ts":
/*!**************************************************************!*\
  !*** ./src/typescript/Computation/CPU/subtractNumberFrom.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subtractNumberFrom: () => (/* binding */ subtractNumberFrom)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var subtractNumberFrom = function subtractNumberFrom(m1, num) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = num - value;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/sum.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/sum.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sum: () => (/* binding */ sum)
/* harmony export */ });
var sum = function sum(m1) {
  var sum = 0.0;
  for (var index = 0; index < m1.rows * m1.cols; index += 1) {
    sum += m1.data[index];
  }
  return sum;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/transpose.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Computation/CPU/transpose.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var transpose = function transpose(m1) {
  var data = [];
  for (var col = 0; col < m1.cols; ++col) {
    for (var row = 0; row < m1.rows; ++row) {
      data.push(m1.data[row * m1.cols + col]);
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.cols, m1.rows, data);
};

/***/ }),

/***/ "./src/typescript/Computation/ComputationCPU.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/ComputationCPU.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputationCPU: () => (/* binding */ ComputationCPU)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _CPU_dot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CPU/dot */ "./src/typescript/Computation/CPU/dot.ts");
/* harmony import */ var _CPU_transpose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CPU/transpose */ "./src/typescript/Computation/CPU/transpose.ts");
/* harmony import */ var _CPU_reluBackpropagation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CPU/reluBackpropagation */ "./src/typescript/Computation/CPU/reluBackpropagation.ts");
/* harmony import */ var _CPU_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CPU/add */ "./src/typescript/Computation/CPU/add.ts");
/* harmony import */ var _CPU_subtract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CPU/subtract */ "./src/typescript/Computation/CPU/subtract.ts");
/* harmony import */ var _CPU_multiply__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CPU/multiply */ "./src/typescript/Computation/CPU/multiply.ts");
/* harmony import */ var _CPU_divide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CPU/divide */ "./src/typescript/Computation/CPU/divide.ts");
/* harmony import */ var _CPU_minusOne__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CPU/minusOne */ "./src/typescript/Computation/CPU/minusOne.ts");
/* harmony import */ var _CPU_log__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CPU/log */ "./src/typescript/Computation/CPU/log.ts");
/* harmony import */ var _CPU_pow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CPU/pow */ "./src/typescript/Computation/CPU/pow.ts");
/* harmony import */ var _CPU_exp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CPU/exp */ "./src/typescript/Computation/CPU/exp.ts");
/* harmony import */ var _CPU_sqrt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CPU/sqrt */ "./src/typescript/Computation/CPU/sqrt.ts");
/* harmony import */ var _CPU_subtractNumberFrom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CPU/subtractNumberFrom */ "./src/typescript/Computation/CPU/subtractNumberFrom.ts");
/* harmony import */ var _CPU_setMin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CPU/setMin */ "./src/typescript/Computation/CPU/setMin.ts");
/* harmony import */ var _CPU_setMax__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CPU/setMax */ "./src/typescript/Computation/CPU/setMax.ts");
/* harmony import */ var _CPU_setOnes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CPU/setOnes */ "./src/typescript/Computation/CPU/setOnes.ts");
/* harmony import */ var _CPU_setZeros__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CPU/setZeros */ "./src/typescript/Computation/CPU/setZeros.ts");
/* harmony import */ var _CPU_setRandom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./CPU/setRandom */ "./src/typescript/Computation/CPU/setRandom.ts");
/* harmony import */ var _CPU_fraction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./CPU/fraction */ "./src/typescript/Computation/CPU/fraction.ts");
/* harmony import */ var _CPU_max__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CPU/max */ "./src/typescript/Computation/CPU/max.ts");
/* harmony import */ var _CPU_abs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./CPU/abs */ "./src/typescript/Computation/CPU/abs.ts");
/* harmony import */ var _CPU_mean__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./CPU/mean */ "./src/typescript/Computation/CPU/mean.ts");
/* harmony import */ var _CPU_sum__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./CPU/sum */ "./src/typescript/Computation/CPU/sum.ts");
/* harmony import */ var _CPU_rowwiseSum__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./CPU/rowwiseSum */ "./src/typescript/Computation/CPU/rowwiseSum.ts");
/* harmony import */ var _CPU_colwiseSum__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./CPU/colwiseSum */ "./src/typescript/Computation/CPU/colwiseSum.ts");
/* harmony import */ var _CPU_replicate__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./CPU/replicate */ "./src/typescript/Computation/CPU/replicate.ts");
/* harmony import */ var _CPU_colMaxCoeffIndex__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./CPU/colMaxCoeffIndex */ "./src/typescript/Computation/CPU/colMaxCoeffIndex.ts");
/* harmony import */ var _CPU_rowMaxCoeffIndex__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./CPU/rowMaxCoeffIndex */ "./src/typescript/Computation/CPU/rowMaxCoeffIndex.ts");
/* harmony import */ var _CPU_row__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./CPU/row */ "./src/typescript/Computation/CPU/row.ts");
/* harmony import */ var _CPU_col__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./CPU/col */ "./src/typescript/Computation/CPU/col.ts");
/* harmony import */ var _CPU_rollToColMatrix__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./CPU/rollToColMatrix */ "./src/typescript/Computation/CPU/rollToColMatrix.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
































var ComputationCPU = /*#__PURE__*/function (_AbstractComputation) {
  function ComputationCPU() {
    var _this;
    _classCallCheck(this, ComputationCPU);
    _this = _callSuper(this, ComputationCPU);
    _this.addKernel("dot", _CPU_dot__WEBPACK_IMPORTED_MODULE_1__.dot);
    _this.addKernel("transpose", _CPU_transpose__WEBPACK_IMPORTED_MODULE_2__.transpose);
    _this.addKernel("reluBackpropagation", _CPU_reluBackpropagation__WEBPACK_IMPORTED_MODULE_3__.reluBackpropagation);
    _this.addKernel("add", _CPU_add__WEBPACK_IMPORTED_MODULE_4__.add);
    _this.addKernel("subtract", _CPU_subtract__WEBPACK_IMPORTED_MODULE_5__.subtract);
    _this.addKernel("multiply", _CPU_multiply__WEBPACK_IMPORTED_MODULE_6__.multiply);
    _this.addKernel("divide", _CPU_divide__WEBPACK_IMPORTED_MODULE_7__.divide);
    _this.addKernel("minusOne", _CPU_minusOne__WEBPACK_IMPORTED_MODULE_8__.minusOne);
    _this.addKernel("subtractNumberFrom", _CPU_subtractNumberFrom__WEBPACK_IMPORTED_MODULE_13__.subtractNumberFrom);
    _this.addKernel("log", _CPU_log__WEBPACK_IMPORTED_MODULE_9__.log);
    _this.addKernel("exp", _CPU_exp__WEBPACK_IMPORTED_MODULE_11__.exp);
    _this.addKernel("pow", _CPU_pow__WEBPACK_IMPORTED_MODULE_10__.pow);
    _this.addKernel("sqrt", _CPU_sqrt__WEBPACK_IMPORTED_MODULE_12__.sqrt);
    _this.addKernel("setMin", _CPU_setMin__WEBPACK_IMPORTED_MODULE_14__.setMin);
    _this.addKernel("setMax", _CPU_setMax__WEBPACK_IMPORTED_MODULE_15__.setMax);
    _this.addKernel("setOnes", _CPU_setOnes__WEBPACK_IMPORTED_MODULE_16__.setOnes);
    _this.addKernel("setZeros", _CPU_setZeros__WEBPACK_IMPORTED_MODULE_17__.setZeros);
    _this.addKernel("setRandom", _CPU_setRandom__WEBPACK_IMPORTED_MODULE_18__.setRandom);
    _this.addKernel("fraction", _CPU_fraction__WEBPACK_IMPORTED_MODULE_19__.fraction);
    _this.addKernel("max", _CPU_max__WEBPACK_IMPORTED_MODULE_20__.max);
    _this.addKernel("abs", _CPU_abs__WEBPACK_IMPORTED_MODULE_21__.abs);
    _this.addKernel("mean", _CPU_mean__WEBPACK_IMPORTED_MODULE_22__.mean);
    _this.addKernel("sum", _CPU_sum__WEBPACK_IMPORTED_MODULE_23__.sum);
    _this.addKernel("rowwiseSum", _CPU_rowwiseSum__WEBPACK_IMPORTED_MODULE_24__.rowwiseSum);
    _this.addKernel("colwiseSum", _CPU_colwiseSum__WEBPACK_IMPORTED_MODULE_25__.colwiseSum);
    _this.addKernel("replicate", _CPU_replicate__WEBPACK_IMPORTED_MODULE_26__.replicate);
    _this.addKernel("colMaxCoeffIndex", _CPU_colMaxCoeffIndex__WEBPACK_IMPORTED_MODULE_27__.colMaxCoeffIndex);
    _this.addKernel("rowMaxCoeffIndex", _CPU_rowMaxCoeffIndex__WEBPACK_IMPORTED_MODULE_28__.rowMaxCoeffIndex);
    _this.addKernel("row", _CPU_row__WEBPACK_IMPORTED_MODULE_29__.row);
    _this.addKernel("col", _CPU_col__WEBPACK_IMPORTED_MODULE_30__.col);
    _this.addKernel("rollToColMatrix", _CPU_rollToColMatrix__WEBPACK_IMPORTED_MODULE_31__.rollToColMatrix);
    /*
    this.addKernel("subtractFromNumber", subtractFromNumber);
    this.addKernel("fillRandom", fillRandom);
    this.addKernel("fillZeros", fillZeros);
    this.addKernel("elementWiseMultiply", elementWiseMultiply);
    this.addKernel("elementWiseDivide", elementWiseDivide);
    this.addKernel("divideNumber", divideNumber);
    this.addKernel("logisticActivation", logisticActivation);
    this.addKernel("logisticLoss", logisticLoss);
    this.addKernel("logisticBackpropagation", logisticBackpropagation);
    this.addKernel("tanhActivation", tanhActivation);
    this.addKernel("reluActivation", reluActivation);
    this.addKernel("softplusActivation", softplusActivation);
    this.addKernel("penalty", penalty);
    this.addKernel("sqrt", sqrt);
    this.addKernel("transpose", transpose);
    this.addKernel("pow", pow);
    this.addKernel("log", log);
    this.addKernel("logMinusOne", logMinusOne);
    this.addKernel("addNumber", addNumber);*/
    return _this;
  }
  _inherits(ComputationCPU, _AbstractComputation);
  return _createClass(ComputationCPU);
}(_AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation);

/***/ }),

/***/ "./src/typescript/Computation/ComputationMultiCore.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Computation/ComputationMultiCore.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputationMultiCore: () => (/* binding */ ComputationMultiCore)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _MultiCore_dot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiCore/dot */ "./src/typescript/Computation/MultiCore/dot.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ComputationMultiCore = /*#__PURE__*/function (_AbstractComputation) {
  function ComputationMultiCore() {
    var _this;
    _classCallCheck(this, ComputationMultiCore);
    _this = _callSuper(this, ComputationMultiCore);
    _this.addKernel("dot", _MultiCore_dot__WEBPACK_IMPORTED_MODULE_1__.dot);

    /*this.addKernel("multiply", dot);
    this.addKernel("add", add);
    this.addKernel("subtract", subtract);
    this.addKernel("fillRandom", fillRandom);
    this.addKernel("fillZeros", fillZeros);
    this.addKernel("elementWiseMultiply", elementWiseMultiply);
    this.addKernel("multiplyNumber", multiplyNumber);
    this.addKernel("elementWiseDivide", elementWiseDivide);
    this.addKernel("divideNumber", divideNumber);
    this.addKernel("softmaxActivation", softmaxActivation);
    this.addKernel("softmaxLoss", softmaxLoss);
    this.addKernel("logisticActivation", logisticActivation);
    this.addKernel("logisticLoss", logisticLoss);
    this.addKernel("tanhActivation", tanhActivation);
    this.addKernel("reluActivation", reluActivation);
    this.addKernel("softplusActivation", softplusActivation);
    this.addKernel("penalty", penalty);
    this.addKernel("sqrt", sqrt);
    this.addKernel("purelinLoss", purelinLoss);
    this.addKernel("transpose", transpose);*/
    return _this;
  }
  _inherits(ComputationMultiCore, _AbstractComputation);
  return _createClass(ComputationMultiCore);
}(_AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation);

/***/ }),

/***/ "./src/typescript/Computation/MultiCore/dot.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Computation/MultiCore/dot.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dot: () => (/* binding */ dot)
/* harmony export */ });
//import { MatrixMultiply } from "../../../../build/Debug/computation.node";

var dot = function dot(m1, m2) {
  //console.log(MatrixMultiply([1, 2, 3, 4], [4, 3, 2, 1]));
};

/***/ }),

/***/ "./src/typescript/Computation/index.ts":
/*!*********************************************!*\
  !*** ./src/typescript/Computation/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractComputation: () => (/* reexport safe */ _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation),
/* harmony export */   ComputationCPU: () => (/* reexport safe */ _ComputationCPU__WEBPACK_IMPORTED_MODULE_2__.ComputationCPU),
/* harmony export */   ComputationMultiCore: () => (/* reexport safe */ _ComputationMultiCore__WEBPACK_IMPORTED_MODULE_1__.ComputationMultiCore),
/* harmony export */   getComputation: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.getComputation),
/* harmony export */   setComputation: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.setComputation)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _ComputationMultiCore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputationMultiCore */ "./src/typescript/Computation/ComputationMultiCore.ts");
/* harmony import */ var _ComputationCPU__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputationCPU */ "./src/typescript/Computation/ComputationCPU.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/typescript/Computation/utils.ts");






/***/ }),

/***/ "./src/typescript/Computation/utils.ts":
/*!*********************************************!*\
  !*** ./src/typescript/Computation/utils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComputation: () => (/* binding */ getComputation),
/* harmony export */   setComputation: () => (/* binding */ setComputation)
/* harmony export */ });
/* harmony import */ var _ComputationCPU__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComputationCPU */ "./src/typescript/Computation/ComputationCPU.ts");

var currentComputation = new _ComputationCPU__WEBPACK_IMPORTED_MODULE_0__.ComputationCPU();
var setComputation = function setComputation(type) {
  currentComputation = type;
};
var getComputation = function getComputation() {
  return currentComputation;
};

/***/ }),

/***/ "./src/typescript/Math/Matrix.ts":
/*!***************************************!*\
  !*** ./src/typescript/Math/Matrix.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix: () => (/* binding */ Matrix)
/* harmony export */ });
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Computation */ "./src/typescript/Computation/index.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Matrix = /*#__PURE__*/function () {
  function Matrix() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, Matrix);
    _defineProperty(this, "rows", 0);
    _defineProperty(this, "cols", 0);
    _defineProperty(this, "data", null);
    this.rows = rows;
    this.cols = cols;
    this.data = data;
    if (!data) {
      this.data = new Array(rows * cols);
    }
  }
  return _createClass(Matrix, [{
    key: "resize",
    value: function resize(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.data = new Array(rows * cols);
    }
  }, {
    key: "sum",
    value: function sum() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("sum", this);
    }
  }, {
    key: "colwiseSum",
    value: function colwiseSum() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("colwiseSum", this);
    }
  }, {
    key: "rowwiseSum",
    value: function rowwiseSum() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("rowwiseSum", this);
    }
  }, {
    key: "flatten",
    value: function flatten() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          data.push(this.data[row][col]);
        }
      }
      return data;
    }
  }, {
    key: "replicate",
    value: function replicate(rows, cols) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("replicate", this, rows, cols);
    }
  }, {
    key: "transpose",
    value: function transpose() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("transpose", this);
    }
  }, {
    key: "colMaxCoeffIndex",
    value: function colMaxCoeffIndex(col) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("colMaxCoeffIndex", this, col);
    }
  }, {
    key: "rowMaxCoeffIndex",
    value: function rowMaxCoeffIndex(row) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("rowMaxCoeffIndex", this, row);
    } /*
      block(startRow: number, startCol: number, blockRows: number, blockCols: number): Matrix {
       const data = [];
        for (let row = startRow, newRow = 0; row < this.rows && row < startRow + blockRows; row += 1, newRow += 1) {
         data[newRow] = new Array(blockCols);
         for (let col = startCol, newCol = 0; col < this.cols && col < startCol + blockCols; col += 1, newCol += 1) {
           data[newRow][newCol] = this.data[row][col];
         }
       }
        return new Matrix(blockRows, blockCols, data);
      }*/
  }, {
    key: "col",
    value: function col(_col) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("col", this, _col);
    }
  }, {
    key: "row",
    value: function row(_row) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("row", this, _row);
    }
  }, {
    key: "sigmoid",
    value: function sigmoid() {
      return this.multiply(-1).exp().add(1).fraction(1);
    }
  }, {
    key: "rollToColMatrix",
    value: function rollToColMatrix() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("rollToColMatrix", this);
    }
  }, {
    key: "abs",
    value: function abs() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("abs", this);
    }
  }, {
    key: "mean",
    value: function mean() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("mean", this);
    }
  }, {
    key: "max",
    value: function max() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("max", this);
    }
  }, {
    key: "setMax",
    value: function setMax(max) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setMax", this, max);
    }
  }, {
    key: "setMin",
    value: function setMin(min) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setMin", this, min);
    }
  }, {
    key: "setZeros",
    value: function setZeros() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setZeros", this);
    }
  }, {
    key: "setOnes",
    value: function setOnes() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setOnes", this);
    }
  }, {
    key: "setRandom",
    value: function setRandom() {
      var parameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      // todo: gaussian distribution
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setRandom", this, parameter);
    }
  }, {
    key: "fraction",
    value: function fraction() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("fraction", this, num);
    }
  }, {
    key: "sqrt",
    value: function sqrt() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("sqrt", this);
    }
  }, {
    key: "dot",
    value: function dot(m) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("dot", this, m);
    }
  }, {
    key: "multiply",
    value: function multiply(num) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("multiply", this, num);
    }
  }, {
    key: "subtract",
    value: function subtract(m) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("subtract", this, m);
    }
  }, {
    key: "forEach",
    value: function forEach(cb) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = cb(this.data[row][col]);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "shape",
    value: function shape() {
      return [this.rows, this.cols];
    }
  }, {
    key: "divide",
    value: function divide(num) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("divide", this, num);
    }
  }, {
    key: "minusOne",
    value: function minusOne() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("subtractNumberFrom", this, -1);
    }
  }, {
    key: "subtractNumberFrom",
    value: function subtractNumberFrom(num) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("subtractNumberFrom", this, num);
    }
  }, {
    key: "add",
    value: function add(m) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("add", this, m);
    }
  }, {
    key: "log",
    value: function log() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("log", this);
    }
  }, {
    key: "tanh",
    value: function tanh() {
      return this.exp().subtract(this.multiply(-1).exp()).divide(this.exp().add(this.multiply(-1).exp()));
    }
  }, {
    key: "softmax",
    value: function softmax() {
      var max = this.max() - 1e-8;
      return this.subtract(max).exp().divide(this.rowwiseSum().replicate(this.cols, 1).transpose());
    }
  }, {
    key: "exp",
    value: function exp() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("exp", this);
    }
  }, {
    key: "pow",
    value: function pow(num) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("pow", this, num);
    }
  }, {
    key: "value",
    value: function value(row, col) {
      var _value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      if (_value === undefined) {
        return this.data[row][col];
      }
      this.data[row][col] = _value;
      return this;
    }
  }, {
    key: "copy",
    value: function copy() {
      return Matrix.from(this.data);
    }
  }, {
    key: "concat",
    value: function concat(m) {
      for (var row = 0; row < m.rows; row += 1) {
        this.data.push(m.data[row]);
      }
      return this;
    }
  }], [{
    key: "from",
    value: function from(arr) {
      var _arr$;
      return new Matrix(arr.length, ((_arr$ = arr[0]) === null || _arr$ === void 0 ? void 0 : _arr$.length) || 0, arr);
    }
  }]);
}();

/***/ }),

/***/ "./src/typescript/Math/math.ts":
/*!*************************************!*\
  !*** ./src/typescript/Math/math.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   im2col: () => (/* binding */ im2col),
/* harmony export */   maxpool: () => (/* binding */ maxpool),
/* harmony export */   round: () => (/* binding */ round)
/* harmony export */ });
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix */ "./src/typescript/Math/Matrix.ts");

var im2col = function im2col(input, channels, height, width, kernel_h, kernel_w, pad_h, pad_w, stride_h, stride_w) {
  var cols = kernel_w * kernel_h * channels;
  var rows = ((width - kernel_w + 2 * pad_w) / stride_w + 1) * ((height - kernel_h + 2 * pad_h) / stride_h + 1);
  var currentResultRow = 0;
  var result = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(rows, cols).setZeros();
  for (var boundingY = -pad_h; boundingY + kernel_h <= height + pad_h; boundingY += stride_h) {
    for (var boundingX = -pad_w; boundingX + kernel_w <= width + pad_w; boundingX += stride_w) {
      var currentResultCol = 0;
      for (var channel = 0; channel < channels; channel++) {
        var inputOffset = height * width * channel;
        for (var y = 0; y < kernel_h; y++) {
          for (var x = 0; x < kernel_w; x++) {
            if (boundingY + y >= 0 && boundingX + x >= 0 && boundingX + x < width && boundingY + y < height) {
              result.data[currentResultRow][currentResultCol] = input.data[(y + boundingY) * width + boundingX + x + inputOffset][0];
            }
            currentResultCol++;
          }
        }
      }
      currentResultRow++;
    }
  }
  return result;
};
var maxpool = function maxpool(input, channels, height, width, kernel_h, kernel_w, stride_h, stride_w) {
  var resultWidth = (width - kernel_w) / stride_w + 1;
  var resultHeight = (height - kernel_h) / stride_h + 1;
  var resultDepth = channels;
  var currentResultCol = 0;
  var result = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(resultWidth * resultHeight * resultDepth, 1).setZeros();
  for (var boundingY = 0; boundingY + kernel_h <= height; boundingY += stride_h) {
    for (var boundingX = 0; boundingX + kernel_w <= width; boundingX += stride_w) {
      for (var channel = 0; channel < channels; channel++) {
        var _max = -Infinity;
        var inputOffset = height * width * channel;
        var outputOffset = resultWidth * resultHeight * channel;
        for (var y = 0; y < kernel_h; y++) {
          for (var x = 0; x < kernel_w; x++) {
            _max = Math.max(_max, input.data[inputOffset + (y + boundingY) * width + boundingX + x][0]);
          }
        }
        result.data[outputOffset + currentResultCol][0] = _max;
      }
      currentResultCol++;
    }
  }
  return result;
};
var round = function round(num, decimalPlaces) {
  return Math.round((num + 2.23e-16) * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/typescript/main.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputationCPU: () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.ComputationCPU),
/* harmony export */   ComputationMultiCore: () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.ComputationMultiCore),
/* harmony export */   Matrix: () => (/* reexport safe */ _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix),
/* harmony export */   getComputation: () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.getComputation),
/* harmony export */   im2col: () => (/* reexport safe */ _Math_math__WEBPACK_IMPORTED_MODULE_1__.im2col),
/* harmony export */   maxpool: () => (/* reexport safe */ _Math_math__WEBPACK_IMPORTED_MODULE_1__.maxpool),
/* harmony export */   round: () => (/* reexport safe */ _Math_math__WEBPACK_IMPORTED_MODULE_1__.round),
/* harmony export */   setComputation: () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.setComputation)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var _Math_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Math/math */ "./src/typescript/Math/math.ts");
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Computation */ "./src/typescript/Computation/index.ts");




})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=impulse-math-ts.dev.js.map