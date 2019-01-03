webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./shared/FabButton.jsx":
/*!******************************!*\
  !*** ./shared/FabButton.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_react_fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/react-fab */ "./node_modules/@material/react-fab/dist/index.js");
/* harmony import */ var _material_react_fab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_react_fab__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_react_fab_dist_fab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/react-fab/dist/fab.css */ "./node_modules/@material/react-fab/dist/fab.css");
/* harmony import */ var _material_react_fab_dist_fab_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_react_fab_dist_fab_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _custom_css_fab_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-css/fab.css */ "./custom-css/fab.css");
/* harmony import */ var _custom_css_fab_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_custom_css_fab_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollable-anchor */ "./node_modules/react-scrollable-anchor/lib/index.js");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../helper/IsMobile */ "./helper/IsMobile.jsx");







var LifeCycle = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    if (Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__["IsMobile"])()) {
      this.setState({
        isMobile: Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__["IsMobile"])(),
        toTop: window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      });
    }
  }
});

var FabButton = function FabButton(_ref) {
  var isMobile = _ref.isMobile,
      toTop = _ref.toTop;
  // console.log(isMobile);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "toTop",
    onClick: toTop
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_fab__WEBPACK_IMPORTED_MODULE_1___default.a, {
    mini: isMobile,
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "navigation")
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LifeCycle(FabButton));

/***/ })

})
//# sourceMappingURL=index.js.fd517cf9235d14ebe921.hot-update.js.map