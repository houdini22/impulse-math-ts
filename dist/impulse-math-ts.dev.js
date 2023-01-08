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
/* harmony export */   "AbstractComputation": () => (/* binding */ AbstractComputation)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AbstractComputation = /*#__PURE__*/function () {
  function AbstractComputation() {
    _classCallCheck(this, AbstractComputation);
    _defineProperty(this, "kernels", {});
  }
  _createClass(AbstractComputation, [{
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
  return AbstractComputation;
}();

/***/ }),

/***/ "./src/typescript/Computation/ComputationCPU.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/ComputationCPU.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputationCPU": () => (/* binding */ ComputationCPU),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "addNumber": () => (/* binding */ addNumber),
/* harmony export */   "divideNumber": () => (/* binding */ divideNumber),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "elementWiseDivide": () => (/* binding */ elementWiseDivide),
/* harmony export */   "elementWiseMultiply": () => (/* binding */ elementWiseMultiply),
/* harmony export */   "fillRandom": () => (/* binding */ fillRandom),
/* harmony export */   "fillZeros": () => (/* binding */ fillZeros),
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "logMinusOne": () => (/* binding */ logMinusOne),
/* harmony export */   "logisticActivation": () => (/* binding */ logisticActivation),
/* harmony export */   "logisticBackpropagation": () => (/* binding */ logisticBackpropagation),
/* harmony export */   "logisticLoss": () => (/* binding */ logisticLoss),
/* harmony export */   "multiplyNumber": () => (/* binding */ multiplyNumber),
/* harmony export */   "penalty": () => (/* binding */ penalty),
/* harmony export */   "pow": () => (/* binding */ pow),
/* harmony export */   "purelinLoss": () => (/* binding */ purelinLoss),
/* harmony export */   "reluActivation": () => (/* binding */ reluActivation),
/* harmony export */   "reluBackpropagation": () => (/* binding */ reluBackpropagation),
/* harmony export */   "setOnes": () => (/* binding */ setOnes),
/* harmony export */   "softplusActivation": () => (/* binding */ softplusActivation),
/* harmony export */   "sqrt": () => (/* binding */ sqrt),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "subtractFromNumber": () => (/* binding */ subtractFromNumber),
/* harmony export */   "tanhActivation": () => (/* binding */ tanhActivation),
/* harmony export */   "transpose": () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var elementWiseDivide = function elementWiseDivide(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = m1.data[row][col] / m2.data[row][col];
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m2.cols, data);
};
var divideNumber = function divideNumber(m1, num) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = m1.data[row][col] / num;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var logisticActivation = function logisticActivation(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      data[row][col] = 1.0 / (1.0 + Math.exp(-m.data[row][col]));
    }
  }
  return _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.from(data);
};
var logisticLoss = function logisticLoss(output, predictions) {
  var log = [];
  var epsilon = 1e-8;
  for (var row = 0; row < predictions.rows; row += 1) {
    log[row] = [];
    for (var col = 0; col < predictions.cols; col += 1) {
      if (predictions.data) {
        log[row][col] = Math.log(predictions.data[row][col] + epsilon);
      }
    }
  }
  var firstMatrix = elementWiseMultiply(new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(predictions.rows, predictions.cols, log), output);
  var sub = [];
  for (var _row = 0; _row < output.rows; _row += 1) {
    sub[_row] = [];
    for (var _col = 0; _col < output.cols; _col += 1) {
      if (output.data) {
        sub[_row][_col] = 1.0 - output.data[_row][_col];
      }
    }
  }
  var toMultiply2 = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(output.rows, output.cols, sub);
  var data = [];
  for (var _row2 = 0; _row2 < predictions.rows; _row2 += 1) {
    data[_row2] = [];
    for (var _col2 = 0; _col2 < predictions.cols; _col2 += 1) {
      if (predictions.data) {
        data[_row2][_col2] = Math.log(1.0 - predictions.data[_row2][_col2] + epsilon);
      }
    }
  }
  var toMultiply1 = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(predictions.rows, predictions.cols, data);
  return add(elementWiseMultiply(multiplyNumber(firstMatrix, -1), output), elementWiseMultiply(multiplyNumber(toMultiply1, -1), subtractFromNumber(toMultiply2, 1))).sum();
};
var logisticBackpropagation = function logisticBackpropagation(sigma, oldY) {
  return logisticActivation(oldY).multiply(logisticActivation(oldY).minusOne());
};
var tanhActivation = function tanhActivation(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      data[row][col] = (1 - Math.exp(-2 * m.data[row][col])) / (1 + Math.exp(-2 * m.data[row][col]));
    }
  }
  return _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.from(data);
};
var reluActivation = function reluActivation(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.max(0.0, m.data[row][col]);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, data);
};
var reluBackpropagation = function reluBackpropagation(sigma, oldY) {
  var data = [];
  for (var row = 0; row < sigma.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < sigma.cols; col += 1) {
      if (sigma.data) {
        data[row][col] = oldY.data[row][col] > 0 ? 1 : 0;
      }
    }
  }
  return elementWiseMultiply(new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(sigma.rows, sigma.cols, data), sigma);
};
var softplusActivation = function softplusActivation(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.log(1 + Math.exp(m.data[row][col]));
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, data);
};
var penalty = function penalty(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.pow(m.data[row][col], 2);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, data).sum();
};
var sqrt = function sqrt(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.sqrt(m.data[row][col] + 1e-8);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, data);
};
var purelinLoss = function purelinLoss(output, predictions) {
  var data = [];
  for (var row = 0; row < output.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < output.cols; col += 1) {
      if (output.data) {
        data[row][col] = output.data[row][col] - Math.pow(predictions[row][col], 2);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(output.rows, output.cols, data).sum();
};
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
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m2.cols, data);
};
var add = function add(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal. m1.cols ".concat(m1.cols, " !== m2.cols ").concat(m2.cols));
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data && m2.data) {
        data[row][col] = m1.data[row][col] + m2.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var subtract = function subtract(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal: m1.rows ".concat(m1.rows, " !== m2.rows ").concat(m2.rows));
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal: m1.cols ".concat(m1.cols, " !== m2.cols ").concat(m2.cols));
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data && m2.data) {
        data[row][col] = m1.data[row][col] - m2.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var fillRandom = function fillRandom(m1, parameter) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution
    }
  }

  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var fillZeros = function fillZeros(m1) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = 0;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var setOnes = function setOnes(m1) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = 1;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var elementWiseMultiply = function elementWiseMultiply(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal: m1.rows ".concat(m1.rows, " !== m2.rows ").concat(m2.rows));
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal: m1.cols ".concat(m1.cols, " !== m2.cols ").concat(m2.cols));
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data && m2.data) {
        data[row][col] = m1.data[row][col] * m2.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var multiplyNumber = function multiplyNumber(m1, num) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = m1.data[row][col] * num;
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var subtractFromNumber = function subtractFromNumber(m1, num) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = num - m1.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var pow = function pow(m1, _pow) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = Math.pow(m1.data[row][col], _pow);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var log = function log(m1, pow) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = Math.log(m1.data[row][col] + 1e-8);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var logMinusOne = function logMinusOne(m1, pow) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = Math.log(1 - m1.data[row][col]);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var addNumber = function addNumber(m1, num) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = m1.data[row][col] + num;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var transpose = function transpose(m) {
  var data = [];
  for (var col = 0; col < m.cols; col += 1) {
    data[col] = [];
    for (var row = 0; row < m.rows; row += 1) {
      if (m.data) {
        data[col][row] = m.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.cols, m.rows, data);
};
var ComputationCPU = /*#__PURE__*/function (_AbstractComputation) {
  _inherits(ComputationCPU, _AbstractComputation);
  var _super = _createSuper(ComputationCPU);
  function ComputationCPU() {
    var _this;
    _classCallCheck(this, ComputationCPU);
    _this = _super.call(this);
    _this.addKernel("multiply", dot);
    _this.addKernel("add", add);
    _this.addKernel("subtract", subtract);
    _this.addKernel("subtractFromNumber", subtractFromNumber);
    _this.addKernel("fillRandom", fillRandom);
    _this.addKernel("fillZeros", fillZeros);
    _this.addKernel("elementWiseMultiply", elementWiseMultiply);
    _this.addKernel("multiplyNumber", multiplyNumber);
    _this.addKernel("elementWiseDivide", elementWiseDivide);
    _this.addKernel("divideNumber", divideNumber);
    _this.addKernel("logisticActivation", logisticActivation);
    _this.addKernel("logisticLoss", logisticLoss);
    _this.addKernel("logisticBackpropagation", logisticBackpropagation);
    _this.addKernel("tanhActivation", tanhActivation);
    _this.addKernel("reluActivation", reluActivation);
    _this.addKernel("reluBackpropagation", reluBackpropagation);
    _this.addKernel("softplusActivation", softplusActivation);
    _this.addKernel("penalty", penalty);
    _this.addKernel("sqrt", sqrt);
    _this.addKernel("transpose", transpose);
    _this.addKernel("pow", pow);
    _this.addKernel("log", log);
    _this.addKernel("logMinusOne", logMinusOne);
    _this.addKernel("addNumber", addNumber);
    return _this;
  }
  return _createClass(ComputationCPU);
}(_AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation);

/***/ }),

/***/ "./src/typescript/Computation/ComputationGPU.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/ComputationGPU.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputationGPU": () => (/* binding */ ComputationGPU)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ComputationGPU = /*#__PURE__*/function (_AbstractComputation) {
  _inherits(ComputationGPU, _AbstractComputation);
  var _super = _createSuper(ComputationGPU);
  function ComputationGPU() {
    _classCallCheck(this, ComputationGPU);
    return _super.call(this);
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
  }
  return _createClass(ComputationGPU);
}(_AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation);

/***/ }),

/***/ "./src/typescript/Computation/index.ts":
/*!*********************************************!*\
  !*** ./src/typescript/Computation/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractComputation": () => (/* reexport safe */ _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation),
/* harmony export */   "ComputationCPU": () => (/* reexport safe */ _ComputationCPU__WEBPACK_IMPORTED_MODULE_2__.ComputationCPU),
/* harmony export */   "ComputationGPU": () => (/* reexport safe */ _ComputationGPU__WEBPACK_IMPORTED_MODULE_1__.ComputationGPU),
/* harmony export */   "getComputation": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.getComputation),
/* harmony export */   "setComputation": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.setComputation)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _ComputationGPU__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputationGPU */ "./src/typescript/Computation/ComputationGPU.ts");
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
/* harmony export */   "getComputation": () => (/* binding */ getComputation),
/* harmony export */   "setComputation": () => (/* binding */ setComputation)
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
/* harmony export */   "Matrix": () => (/* binding */ Matrix)
/* harmony export */ });
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Computation */ "./src/typescript/Computation/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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
  _createClass(Matrix, [{
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
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("multiply", this, m);
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
  }], [{
    key: "from",
    value: function from(arr) {
      var _arr$;
      return new Matrix(arr.length, ((_arr$ = arr[0]) === null || _arr$ === void 0 ? void 0 : _arr$.length) || 0, arr);
    }
  }]);
  return Matrix;
}();

/***/ }),

/***/ "./src/typescript/Math/math.ts":
/*!*************************************!*\
  !*** ./src/typescript/Math/math.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "im2col": () => (/* binding */ im2col),
/* harmony export */   "maxpool": () => (/* binding */ maxpool),
/* harmony export */   "round": () => (/* binding */ round)
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
/* harmony export */   "ComputationCPU": () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.ComputationCPU),
/* harmony export */   "ComputationGPU": () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.ComputationGPU),
/* harmony export */   "Matrix": () => (/* reexport safe */ _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix),
/* harmony export */   "getComputation": () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.getComputation),
/* harmony export */   "im2col": () => (/* reexport safe */ _Math_math__WEBPACK_IMPORTED_MODULE_1__.im2col),
/* harmony export */   "maxpool": () => (/* reexport safe */ _Math_math__WEBPACK_IMPORTED_MODULE_1__.maxpool),
/* harmony export */   "round": () => (/* reexport safe */ _Math_math__WEBPACK_IMPORTED_MODULE_1__.round),
/* harmony export */   "setComputation": () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.setComputation)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var _Math_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Math/math */ "./src/typescript/Math/math.ts");
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Computation */ "./src/typescript/Computation/index.ts");




})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=impulse-math-ts.dev.js.map