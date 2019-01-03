webpackHotUpdate("static\\development\\pages\\details\\type-details.js",{

/***/ "./shared/TypeDetailsLink.jsx":
/*!************************************!*\
  !*** ./shared/TypeDetailsLink.jsx ***!
  \************************************/
/*! exports provided: TypeDetailsLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDetailsLink", function() { return TypeDetailsLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helper/Loader */ "./helper/Loader.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helper/Default */ "./helper/Default.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_ToURL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../helper/ToURL */ "./helper/ToURL.jsx");





var TypeDetailsLink = function TypeDetailsLink(_ref) {
  var id = _ref.id,
      name = _ref.name,
      children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    scroll: false,
    prefetch: true,
    as: "/".concat(_helper_Default__WEBPACK_IMPORTED_MODULE_2___default.a.urlType, "/").concat(id, "/thue-xe-").concat(Object(_helper_ToURL__WEBPACK_IMPORTED_MODULE_4__["ToURL"])(name)),
    href: "/details/type-details?id=".concat(id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: className,
    onClick: function onClick() {
      return Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_1__["ShowLoader"])();
    }
  }, children));
};

/***/ })

})
//# sourceMappingURL=type-details.js.9aa278eef479153f68a4.hot-update.js.map