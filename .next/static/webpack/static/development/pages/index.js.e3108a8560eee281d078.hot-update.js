webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./shared/HOCs/HomeHOCs.jsx":
/*!**********************************!*\
  !*** ./shared/HOCs/HomeHOCs.jsx ***!
  \**********************************/
/*! exports provided: HomeSetStatic, WithHomeHandlers, HomeLifeCycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSetStatic", function() { return HomeSetStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithHomeHandlers", function() { return WithHomeHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLifeCycle", function() { return HomeLifeCycle; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../config/FirebaseConfig */ "./config/FirebaseConfig.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../helper/Default */ "./helper/Default.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/Message */ "./helper/Message.jsx");
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../helper/Loader */ "./helper/Loader.jsx");
/* harmony import */ var _helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../helper/IsMobile */ "./helper/IsMobile.jsx");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var HomeSetStatic = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["setStatic"])("getInitialProps",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var uiTypes;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__["default"].collection("UI_Home").where("name", "==", "type").get();

        case 2:
          uiTypes = _context.sent;
          return _context.abrupt("return", {
            defaultTypes: uiTypes.docs[0].data().display
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));
var WithHomeHandlers = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withHandlers"])({
  handleTest: function handleTest(props) {
    return (
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    );
  }
});
var HomeLifeCycle = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_5__["HideLoader"])();

    if (Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__["IsMobile"])()) {
      window.scroll({
        top: 430,
        left: 0,
        behavior: "smooth"
      });
    }
  }
});

/***/ })

})
//# sourceMappingURL=index.js.e3108a8560eee281d078.hot-update.js.map