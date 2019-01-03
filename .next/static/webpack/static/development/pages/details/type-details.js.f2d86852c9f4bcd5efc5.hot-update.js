webpackHotUpdate("static\\development\\pages\\details\\type-details.js",{

/***/ "./shared/HOCs/TypeDetailsHOCs.jsx":
/*!*****************************************!*\
  !*** ./shared/HOCs/TypeDetailsHOCs.jsx ***!
  \*****************************************/
/*! exports provided: TypeDetailsSetStatic, TypesLifeCycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDetailsSetStatic", function() { return TypeDetailsSetStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesLifeCycle", function() { return TypesLifeCycle; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../config/FirebaseConfig */ "./config/FirebaseConfig.jsx");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scrollable-anchor */ "./node_modules/react-scrollable-anchor/lib/index.js");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../helper/Loader */ "./helper/Loader.jsx");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var TypeDetailsSetStatic = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["setStatic"])("getInitialProps",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var docs, carsByType, typeName;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__["default"].collection("cars").where("typeId", "==", context.query.id).get();

          case 2:
            docs = _context.sent;
            carsByType = docs.docs.map(function (doc) {
              return _objectSpread({}, doc.data(), {
                type: "",
                brand: ""
              });
            });
            typeName = carsByType[0].typeName; // var typeName = (await Db.collection("types")
            //   .doc(context.query.id)
            //   .get()).data().name;
            // goToAnchor("point", false);

            return _context.abrupt("return", {
              typeWithCars: {
                id: context.query.id,
                name: typeName,
                cars: carsByType
              }
            });

          case 6:
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
var TypesLifeCycle = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_4__["HideLoader"])();
    window.scroll({
      top: 430,
      left: 0,
      behavior: "smooth"
    }); // console.log(window.history.length);
    // console.log(window.history);
  },
  componentWillReceiveProps: function componentWillReceiveProps() {
    Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_4__["HideLoader"])(); // console.log(window.history.length);
    // console.log(window.history);
  }
});

/***/ })

})
//# sourceMappingURL=type-details.js.f2d86852c9f4bcd5efc5.hot-update.js.map