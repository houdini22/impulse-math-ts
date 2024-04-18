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

var dot = function dot(m1, m2) {
  if (m1.cols !== m2.rows) {
    throw new Error("DIMENSIONS error. m1.cols ".concat(m1.rows, " ").concat(m1.cols, " !== m2.rows ").concat(m2.rows, " ").concat(m2.cols, "."));
  }
  var data = [];
  for (var row = 0; row < m1.rows; ++row) {
    data[row] = new Array(m2.cols);
    for (var col = 0; col < m2.cols; ++col) {
      data[row][col] = 0;
      for (var i = 0; i < m1.cols; ++i) {
        if (m1.data && m2.data) {
          data[row][col] += m1.data[row][i] * m2.data[i][col];
        }
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m2.cols, data);
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

var reluBackpropagation = function reluBackpropagation(delta, A) {
  var data = [];
  for (var row = 0; row < A.rows; row += 1) {
    data[row] = new Array(A.cols);
    for (var col = 0; col < A.cols; col += 1) {
      data[row][col] = A.data[row][col] > 0 ? 1 : 0;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(A.rows, A.cols, data);
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
    data[col] = new Array(m1.rows);
    for (var row = 0; row < m1.rows; ++row) {
      data[col][row] = m1.data[row][col];
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
    /*this.addKernel("add", add);
    this.addKernel("subtract", subtract);
    this.addKernel("subtractFromNumber", subtractFromNumber);
    this.addKernel("fillRandom", fillRandom);
    this.addKernel("fillZeros", fillZeros);
    this.addKernel("elementWiseMultiply", elementWiseMultiply);
    this.addKernel("multiplyNumber", multiplyNumber);
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
    this.resize(rows, cols);
    if (data) {
      this.generateData(data);
    }
  }
  return _createClass(Matrix, [{
    key: "resize",
    value: function resize(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.data = new Array(this.rows);
      for (var row = 0; row < this.rows; row += 1) {
        this.data[row] = new Array(this.cols);
      }
      return this;
    }
  }, {
    key: "generateData",
    value: function generateData(arr) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = new Array(this.cols);
      }
      for (var col = 0; col < this.cols; col += 1) {
        for (var _row3 = 0; _row3 < this.rows; _row3 += 1) {
          if (typeof arr[_row3] === "number") {
            data[_row3][col] = arr[_row3];
          } else {
            if (typeof arr[_row3][col] === "string") {
              if (/^[0-9.]+$/.test(String(arr[_row3][col]))) {
                data[_row3][col] = Number(arr[_row3][col]);
              } else {
                data[_row3][col] = arr[_row3][col];
              }
            } else {
              data[_row3][col] = arr[_row3][col];
            }
          }
        }
      }
      this.data = data;
      return this;
    }
  }, {
    key: "sum",
    value: function sum() {
      var sum = 0.0;
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          sum += this.data[row][col];
        }
      }
      return sum;
    }
  }, {
    key: "colwiseSum",
    value: function colwiseSum() {
      var data = [];
      var t = this.transpose();
      for (var row = 0; row < t.rows; row += 1) {
        data[row] = [0];
        for (var col = 0; col < t.cols; col += 1) {
          data[row][0] += t.data[row][col];
        }
      }
      return new Matrix(this.cols, 1, data);
    }
  }, {
    key: "rowwiseSum",
    value: function rowwiseSum() {
      var data = [[]];
      for (var row = 0; row < this.rows; row += 1) {
        var sum = 0.0;
        for (var col = 0; col < this.cols; col += 1) {
          sum += this.data[row][col];
        }
        data[0].push(sum);
      }
      return new Matrix(1, this.rows, data);
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
      if (rows === 1 && this.cols === 1 && cols > 1) {
        var newData = [];
        for (var row = 0; row < this.rows; row += 1) {
          newData[row] = [];
          for (var col = 0; col < cols; col += 1) {
            newData[row][col] = this.data[row][0];
          }
        }
        return Matrix.from(newData);
      } else if (cols === 1 && this.rows === 1 && rows > 1) {
        var _newData = [];
        for (var _row4 = 0; _row4 < rows; _row4 += 1) {
          _newData[_row4] = [];
          for (var _col2 = 0; _col2 < this.cols; _col2 += 1) {
            _newData[_row4][_col2] = this.data[0][_col2];
          }
        }
        return Matrix.from(_newData);
      }
      return this;
    }
  }, {
    key: "transpose",
    value: function transpose() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("transpose", this);
    }
  }, {
    key: "colMaxCoeffIndex",
    value: function colMaxCoeffIndex(col) {
      var maxIndex = -1;
      var max = -Infinity;
      for (var row = 0; row < this.rows; row += 1) {
        if (this.data && this.data[row][col] > max) {
          max = this.data[row][col];
          maxIndex = row;
        }
      }
      return maxIndex;
    }
  }, {
    key: "rowMaxCoeffIndex",
    value: function rowMaxCoeffIndex(row) {
      var maxIndex = -1;
      var max = -Infinity;
      for (var col = 0; col < this.cols; col += 1) {
        if (this.data[row][col] > max) {
          max = this.data[row][col];
          maxIndex = col;
        }
      }
      return maxIndex;
    }
  }, {
    key: "block",
    value: function block(startRow, startCol, blockRows, blockCols) {
      var data = [];
      for (var row = startRow, newRow = 0; row < this.rows && row < startRow + blockRows; row += 1, newRow += 1) {
        data[newRow] = new Array(blockCols);
        for (var col = startCol, newCol = 0; col < this.cols && col < startCol + blockCols; col += 1, newCol += 1) {
          data[newRow][newCol] = this.data[row][col];
        }
      }
      return new Matrix(blockRows, blockCols, data);
    }
  }, {
    key: "col",
    value: function col(_col) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [this.data[row][_col]];
      }
      return new Matrix(this.rows, 1, data);
    }
  }, {
    key: "row",
    value: function row(_row2) {
      var data = [];
      for (var col = 0; col < this.cols; col += 1) {
        data[col] = [this.data[_row2][col]];
      }
      return new Matrix(this.cols, 1, data);
    }
  }, {
    key: "setCol",
    value: function setCol(col, tmp) {
      for (var row = 0; row < this.rows; row += 1) {
        if (this.data && tmp.data) {
          this.data[row][col] = tmp.data[row][0];
        }
      }
      return this;
    }
  }, {
    key: "sigmoid",
    value: function sigmoid() {
      return this.multiply(-1).exp().add(1).fraction(1);
    }
  }, {
    key: "rollToColMatrix",
    value: function rollToColMatrix() {
      var data = [];
      var _row = 0;
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          data[_row] = [];
          data[_row++][0] = this.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "abs",
    value: function abs() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.abs(this.data[row][col]);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "mean",
    value: function mean() {
      var sum = 0;
      var numberOfElements = this.rows * this.cols;
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          sum += this.data[row][col];
        }
      }
      return sum / numberOfElements;
    }
  }, {
    key: "max",
    value: function max() {
      var max = -Infinity;
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          max = Math.max(this.data[row][col], max);
        }
      }
      return max;
    }
  }, {
    key: "setMax",
    value: function setMax(max) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.min(this.data[row][col], max);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "setMin",
    value: function setMin(min) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.max(this.data[row][col], min);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "setZeros",
    value: function setZeros() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = 0;
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "setOnes",
    value: function setOnes() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = 1;
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "setRandom",
    value: function setRandom() {
      var parameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution;
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "fraction",
    value: function fraction() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = num / this.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "sqrt",
    value: function sqrt() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.sqrt(this.data[row][col] + 1e-8);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "dot",
    value: function dot(m) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("dot", this, m);
    }
  }, {
    key: "multiply",
    value: function multiply(num) {
      if (typeof num === "number") {
        var data = [];
        for (var row = 0; row < this.rows; row += 1) {
          data[row] = [];
          for (var col = 0; col < this.cols; col += 1) {
            // @ts-ignore
            data[row][col] = this.data[row][col] * num;
          }
        }
        return Matrix.from(data);
      } else {
        if (num.rows !== this.rows || this.cols !== num.cols) {
          throw new Error("Dimension error: ".concat(this.shape(), " !== ").concat(num.shape()));
        }
        var _data = [];
        for (var _row5 = 0; _row5 < this.rows; _row5 += 1) {
          _data[_row5] = [];
          for (var _col3 = 0; _col3 < this.cols; _col3 += 1) {
            // @ts-ignore
            _data[_row5][_col3] = this.data[_row5][_col3] * num.data[_row5][_col3];
          }
        }
        return Matrix.from(_data);
      }
    }
  }, {
    key: "subtract",
    value: function subtract(m) {
      if (typeof m === "number") {
        var data = [];
        for (var row = 0; row < this.rows; row += 1) {
          data[row] = [];
          for (var col = 0; col < this.cols; col += 1) {
            data[row][col] = this.data[row][col] - m;
          }
        }
        return Matrix.from(data);
      } else {
        if (this.rows !== m.rows || this.cols !== m.cols) {
          throw new Error("Dimensions error: ".concat(this.rows, ", ").concat(this.cols, " !== ").concat(m.rows, ", ").concat(m.cols));
        }
        var _data2 = [];
        for (var _row6 = 0; _row6 < this.rows; _row6 += 1) {
          _data2[_row6] = [];
          for (var _col4 = 0; _col4 < this.cols; _col4 += 1) {
            _data2[_row6][_col4] = this.data[_row6][_col4] - m.data[_row6][_col4];
          }
        }
        return Matrix.from(_data2);
      }
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
      if (typeof num === "number") {
        var data = [];
        for (var row = 0; row < this.rows; row += 1) {
          data[row] = [];
          for (var col = 0; col < this.cols; col += 1) {
            data[row][col] = this.data[row][col] / num;
          }
        }
        return Matrix.from(data);
      } else {
        if (num.rows !== this.rows || num.cols !== this.cols) {
          throw new Error("Dimensions error (".concat(this.rows, ", ").concat(this.cols, ") !== (").concat(num.rows, ", ").concat(num.cols, ")"));
        }
        var _data3 = [];
        for (var _row7 = 0; _row7 < this.rows; _row7 += 1) {
          _data3[_row7] = [];
          for (var _col5 = 0; _col5 < this.cols; _col5 += 1) {
            _data3[_row7][_col5] = this.data[_row7][_col5] / num.data[_row7][_col5];
          }
        }
        return Matrix.from(_data3);
      }
    }
  }, {
    key: "minusOne",
    value: function minusOne() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = 1 - this.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "subtractFromNumber",
    value: function subtractFromNumber(num) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = num - this.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "add",
    value: function add(m) {
      if (typeof m === "number") {
        var data = [];
        for (var row = 0; row < this.rows; row += 1) {
          data[row] = [];
          for (var col = 0; col < this.cols; col += 1) {
            data[row][col] = this.data[row][col] + m;
          }
        }
        return Matrix.from(data);
      } else if (m instanceof Matrix) {
        if (m.rows !== this.rows || m.cols !== this.cols) {
          throw new Error("Dimention error: rows (x: ".concat(this.rows, ", y: ").concat(this.cols, ") !== (x: ").concat(m.rows, ", y: ").concat(m.cols, ")"));
        }
        var _data4 = [];
        for (var _row8 = 0; _row8 < this.rows; _row8 += 1) {
          _data4[_row8] = [];
          for (var _col6 = 0; _col6 < this.cols; _col6 += 1) {
            _data4[_row8][_col6] = this.data[_row8][_col6] + m.data[_row8][_col6];
          }
        }
        return Matrix.from(_data4);
      }
      return this;
    }
  }, {
    key: "log",
    value: function log() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.log(this.data[row][col] + 1e-8);
        }
      }
      return Matrix.from(data);
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
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.exp(this.data[row][col] + 1e-8);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "pow",
    value: function pow(num) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.pow(this.data[row][col], num);
        }
      }
      return Matrix.from(data);
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