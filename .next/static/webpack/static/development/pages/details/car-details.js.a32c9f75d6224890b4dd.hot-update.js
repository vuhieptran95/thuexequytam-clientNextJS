webpackHotUpdate("static\\development\\pages\\details\\car-details.js",{

/***/ "./shared/HOCs/CarDetailsHOCs.jsx":
/*!****************************************!*\
  !*** ./shared/HOCs/CarDetailsHOCs.jsx ***!
  \****************************************/
/*! exports provided: CarDetailsStatic, CarDetailsLifeCycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailsStatic", function() { return CarDetailsStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailsLifeCycle", function() { return CarDetailsLifeCycle; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../config/FirebaseConfig */ "./config/FirebaseConfig.jsx");
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../helper/Loader */ "./helper/Loader.jsx");
/* harmony import */ var _helper_IsMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/IsMobile */ "./helper/IsMobile.jsx");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var CarDetailsStatic = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["setStatic"])("getInitialProps",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var car;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__["default"].collection("cars").doc(context.query.id).get();

          case 2:
            car = _context.sent;
            return _context.abrupt("return", {
              carDetails: _objectSpread({
                id: car.id
              }, car.data(), {
                type: "",
                brand: ""
              })
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var CarDetailsLifeCycle = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_3__["HideLoader"])();

    if (Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_4__["IsMobile"])()) {
      this.setState({
        h1: "font-size-20",
        h2: "font-size-18"
      });
      window.scroll({
        top: 60,
        left: 0,
        behavior: "smooth"
      });
    }
  }
});

/***/ })

})
//# sourceMappingURL=car-details.js.a32c9f75d6224890b4dd.hot-update.js.map