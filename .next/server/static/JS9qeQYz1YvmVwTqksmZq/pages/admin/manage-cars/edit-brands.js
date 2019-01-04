module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var ArrayImageSrcs = [{
  name: 1,
  url: "http://placehold.it/160x120"
}, {
  name: 2,
  url: "http://placehold.it/160x120"
}, {
  name: 3,
  url: "http://placehold.it/160x120"
}, {
  name: 4,
  url: "http://placehold.it/160x120"
}];
var MainImage = "http://placehold.it/800x450";
var CloseImage = "https://storage.googleapis.com/thuexequytam/default-images/close_resize3.png";
var MaxNumberOfImages = 4;
var ImageRatio = 1.54;
var HomeUIDocId = "KHeYE2KSI0qTVJ5bZHNe";
var TypeOrder = 100;
var DefaultType = {
  id: "type-hTs0Kk21RLNVnAFRR8HD",
  name: "Mặc định",
  listCars: []
};
var JumbotronImage = "https://storage.googleapis.com/thuexequytam-firebase/default-images/deadsea2.jpg";
var urlType = "loai-xe-du-lich";
var urlCar = "thue-xe-du-lich";
var Default = {
  ArrayImageSrcs: ArrayImageSrcs,
  MainImage: MainImage,
  CloseImage: CloseImage,
  MaxNumberOfImages: MaxNumberOfImages,
  ImageRatio: ImageRatio,
  HomeUIDocId: HomeUIDocId,
  TypeOrder: TypeOrder,
  DefaultType: DefaultType,
  JumbotronImage: JumbotronImage,
  urlCar: urlCar,
  urlType: urlType
}; // export default Default;

module.exports = Default;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HideLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShowLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_1__);



var Loader = function Loader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "loader",
    className: " mt-0",
    style: {
      zIndex: 9999
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_1__["BarLoader"], {
    width: "100%",
    color: "#004d40",
    height: 4,
    loading: true
  }));
};

var HideLoader = function HideLoader() {
  var el = document.getElementById("loader");
  el.className = "hidden";
};
var ShowLoader = function ShowLoader() {
  var el = document.getElementById("loader");
  el.className = "visible";
};
/* harmony default export */ __webpack_exports__["c"] = (Loader);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
// import * as firebase from "firebase";
// import firebase from "firebase";


var config = {
  apiKey: "AIzaSyBIG6hlZT8NYMQwQfAxVJ-VQ1VZkwm1cQk",
  authDomain: "thuexequytam-firebase.firebaseapp.com",
  databaseURL: "https://thuexequytam-firebase.firebaseio.com",
  projectId: "thuexequytam-firebase",
  messagingSenderId: "82777450298"
};

if (!_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

var Db = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app().firestore();
Db.settings({
  timestampsInSnapshots: true
});
/* harmony default export */ __webpack_exports__["a"] = (Db);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsMobile; });
var IsMobile = function IsMobile() {
  if (typeof window !== "undefined") {
    if (window.innerWidth > 768) {
      return false;
    }

    return true;
  }

  return false;
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToURL; });
function xoa_dau(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
}

var ToURL = function ToURL(name) {
  return xoa_dau(name).replace(/\s+/g, "-").toLowerCase();
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



var HomeLink = function HomeLink(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    scroll: false,
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: className,
    onClick: function onClick() {
      return Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_1__[/* ShowLoader */ "b"])();
    }
  }, children));
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeDetailsLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_ToURL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);





var TypeDetailsLink = function TypeDetailsLink(_ref) {
  var id = _ref.id,
      name = _ref.name,
      children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    scroll: false,
    prefetch: true,
    as: "/".concat(_helper_Default__WEBPACK_IMPORTED_MODULE_2___default.a.urlType, "/").concat(id, "/thue-xe-").concat(Object(_helper_ToURL__WEBPACK_IMPORTED_MODULE_4__[/* ToURL */ "a"])(name)),
    href: "/details/type-details?id=".concat(id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: className,
    onClick: function onClick() {
      return Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_1__[/* ShowLoader */ "b"])();
    }
  }, children));
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@firebase/app");

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-scrollable-anchor");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css_bootstrap_flatly_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _custom_css_bootstrap_flatly_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_custom_css_bootstrap_flatly_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _custom_css_global_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _custom_css_global_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_custom_css_global_style_css__WEBPACK_IMPORTED_MODULE_3__);





var DefaultHead = function DefaultHead() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (DefaultHead);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _helper_ToURL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helper_IsMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4);
/* harmony import */ var _HomeLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10);
/* harmony import */ var _TypeDetailsLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11);



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












var LifeCycle = Object(recompose__WEBPACK_IMPORTED_MODULE_4__["lifecycle"])({
  componentDidMount: function () {
    var _componentDidMount = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var types, uiType, show;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].collection("types").orderBy("order", "asc").get();

            case 2:
              types = _context.sent;
              uiType = types.docs.map(function (type) {
                return {
                  name: type.data().name,
                  id: type.id
                };
              });
              show = "";

              if (Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_9__[/* IsMobile */ "a"])()) {
                show = "show";
              }

              this.setState({
                types: uiType,
                show: show
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function componentDidMount() {
      return _componentDidMount.apply(this, arguments);
    };
  }()
});
var enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])( // SetStatic,
next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"], LifeCycle);

var Nav = function Nav(_ref) {
  var router = _ref.router,
      types = _ref.types,
      show = _ref.show;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark p-2 pl-3 bg-primary font-size-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HomeLink__WEBPACK_IMPORTED_MODULE_11__[/* HomeLink */ "a"], {
    className: "navbar-brand font-size-14"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons"
  }, "directions_car"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ml-2"
  }, "Thu\xEA xe Qu\xFD T\xE2m")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarResponsive",
    "aria-controls": "navbarResponsive",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarResponsive"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "navbar-nav ml-auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "nav-item ".concat(router.route === "/" ? "active" : "")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HomeLink__WEBPACK_IMPORTED_MODULE_11__[/* HomeLink */ "a"], {
    className: "nav-link"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ml-1"
  }, "Trang ch\u1EE7"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "nav-item dropdown ".concat(router.asPath.includes(_helper_Default__WEBPACK_IMPORTED_MODULE_7___default.a.urlType) ? "active show" : "")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "navbarDropdownMenuLink",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ml-1"
  }, "C\xE1c lo\u1EA1i xe")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      zIndex: 9999
    },
    className: "dropdown-menu ".concat(router.asPath.includes(_helper_Default__WEBPACK_IMPORTED_MODULE_7___default.a.urlType) ? show : ""),
    "aria-labelledby": "navbarDropdownMenuLink"
  }, types && types.map(function (type) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TypeDetailsLink__WEBPACK_IMPORTED_MODULE_12__[/* TypeDetailsLink */ "a"], {
      key: type.id,
      id: type.id,
      name: type.name,
      className: "font-size-11 dropdown-item ".concat(router.asPath.includes("/thue-xe-".concat(Object(_helper_ToURL__WEBPACK_IMPORTED_MODULE_6__[/* ToURL */ "a"])(type.name))) ? "active" : "")
    }, "Xe ", type.name);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "nav-link"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ml-1"
  }, "Ho\u1EA1t \u0111\u1ED9ng")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "nav-link"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ml-1"
  }, "Gi\u1EDBi thi\u1EC7u")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "nav-link"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ml-1"
  }, "Li\xEAn h\u1EC7")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "nav-item ".concat(router.route.includes("/admin") ? "active" : "")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/admin/manage-cars/add-new-car"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "nav-link"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ml-1"
  }, "Qu\u1EA3n l\xFD"))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (enhance(Nav));

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadCrumb; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _CarDetailsLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _HomeLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _TypeDetailsLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _helper_IsMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);












var WithType = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["withState"])("type", "updateType", null);
var WithCar = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["withState"])("car", "updateCar", null);
var WithHome = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["withState"])("home", "updateHome", null);
var WithLifeCycle = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    var _this = this;

    var url = decodeURI(this.props.router.asPath); // if(IsMobile()){
    //   this.setState({})
    // }

    if (url.includes(_helper_Default__WEBPACK_IMPORTED_MODULE_4___default.a.urlType)) {
      var typeId = url.split("/")[2];
      _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].collection("types").doc(typeId).get().then(function (doc) {
        return _this.props.updateType(doc.data());
      });
    } else if (url.includes(_helper_Default__WEBPACK_IMPORTED_MODULE_4___default.a.urlCar)) {
      var carId = url.split("/")[2];
      _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].collection("cars").doc(carId).get().then(function (doc) {
        return _this.props.updateCar(doc.data());
      });
    } else {
      this.props.updateHome(1);
    }
  }
});
var enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(WithType, WithCar, WithHome, next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], WithLifeCycle);
var BreadCrumb = enhance(function (_ref) {
  var router = _ref.router,
      type = _ref.type,
      car = _ref.car,
      home = _ref.home,
      nav = _ref.nav;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "mt-2 sticky-top font-size-11",
    "aria-label": "breadcrumb"
  }, type && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeLink__WEBPACK_IMPORTED_MODULE_7__[/* HomeLink */ "a"], null, "Trang ch\u1EE7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item active",
    "aria-current": "page"
  }, "Thu\xEA xe ", type.name)), car && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeLink__WEBPACK_IMPORTED_MODULE_7__[/* HomeLink */ "a"], null, "Trang ch\u1EE7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TypeDetailsLink__WEBPACK_IMPORTED_MODULE_8__[/* TypeDetailsLink */ "a"], {
    id: car.typeId,
    name: car.typeName
  }, "Thu\xEA xe ", car.typeName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item active",
    "aria-current": "page"
  }, car.brandName, " ", car.name)), home && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item active",
    "aria-current": "page"
  }, "Trang ch\u1EE7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helper_Loader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"], null));
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_react_fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _material_react_fab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_react_fab__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_react_fab_dist_fab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _material_react_fab_dist_fab_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_react_fab_dist_fab_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _custom_css_fab_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _custom_css_fab_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_custom_css_fab_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);







var LifeCycle = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    if (Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__[/* IsMobile */ "a"])()) {
      this.setState({
        isMobile: Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__[/* IsMobile */ "a"])(),
        toTop: function toTop() {
          return window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        }
      });
    } else {
      this.setState({
        isMobile: Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__[/* IsMobile */ "a"])()
      });
    }
  }
});

var FabButton = function FabButton(_ref) {
  var isMobile = _ref.isMobile,
      toTop = _ref.toTop;
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

/* harmony default export */ __webpack_exports__["a"] = (LifeCycle(FabButton));

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material/react-fab");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_ToURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);






var CarDetailsLink = function CarDetailsLink(_ref) {
  var id = _ref.id,
      brandName = _ref.brandName,
      name = _ref.name,
      typeName = _ref.typeName,
      className = _ref.className,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    scroll: false,
    prefetch: true,
    as: "/".concat(_helper_Default__WEBPACK_IMPORTED_MODULE_2___default.a.urlCar, "/").concat(id, "/thue-xe-").concat(Object(_helper_ToURL__WEBPACK_IMPORTED_MODULE_3__[/* ToURL */ "a"])(brandName), "-").concat(Object(_helper_ToURL__WEBPACK_IMPORTED_MODULE_3__[/* ToURL */ "a"])(name), "-").concat(Object(_helper_ToURL__WEBPACK_IMPORTED_MODULE_3__[/* ToURL */ "a"])(typeName)),
    href: "/details/car-details?id=".concat(id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_4__[/* ShowLoader */ "b"])();
    },
    className: className
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (CarDetailsLink);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heads_DefaultHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _BreadCrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _FabButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);






var DefaultLayout = function DefaultLayout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      minHeight: "100vh"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mybody"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_heads_DefaultHead__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FabButton__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__[/* BreadCrumb */ "a"], null), props.children));
};

/* harmony default export */ __webpack_exports__["a"] = (DefaultLayout);

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {



/***/ }),
/* 26 */
/***/ (function(module, exports) {



/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@firebase/firestore");

/***/ }),
/* 28 */
/***/ (function(module, exports) {



/***/ }),
/* 29 */
/***/ (function(module, exports) {



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);






var LifeCycle = Object(recompose__WEBPACK_IMPORTED_MODULE_4__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_5__[/* HideLoader */ "a"])();
  }
});
var AdminLayout = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (props) {
  var currentRoute = props.router.route;
  var routeManageCars = "/admin/manage-cars";
  var routeManageUI = "/admin/manage-ui";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-size-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Mange cars page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-tabs"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: routeManageUI + "/home-ui"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link ".concat(currentRoute.includes(routeManageUI) ? "active" : "")
  }, "Qu\u1EA3n l\xFD giao di\u1EC7n"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: routeManageCars + "/add-new-car"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link ".concat(currentRoute.includes(routeManageCars) ? "active" : "")
  }, "Qu\u1EA3n l\xFD xe")))), props.children));
});
/* harmony default export */ __webpack_exports__["a"] = (LifeCycle(AdminLayout));

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AdminLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);




var ManageCarsLayout = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (props) {
  var currentRoute = props.router.route;
  var routeAddNew = "/admin/manage-cars/add-new-car";
  var routeEditDelete = "/admin/manage-cars/edit-delete-car";
  var routeEditTypes = "/admin/manage-cars/edit-types";
  var routeEditBrands = "/admin/manage-cars/edit-brands";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminLayout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-pills margin-top-30"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: routeAddNew
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link ".concat(currentRoute.includes(routeAddNew) ? "active" : "")
  }, "Th\xEAm xe m\u1EDBi"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: routeEditDelete
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link ".concat(currentRoute.includes(routeEditDelete) ? "active" : "")
  }, "Ch\u1EC9nh s\u1EEDa xe"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: routeEditTypes
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link ".concat(currentRoute.includes(routeEditTypes) ? "active" : "")
  }, "Thay \u0111\u1ED5i lo\u1EA1i xe"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: routeEditBrands
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link ".concat(currentRoute.includes(routeEditBrands) ? "active" : "")
  }, "Thay \u0111\u1ED5i h\xE3ng xe")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4"
  }, props.children));
});
/* harmony default export */ __webpack_exports__["a"] = (ManageCarsLayout);

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_layouts_ManageCarsLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);



var EditBrands = function EditBrands() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_layouts_ManageCarsLayout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "This is Edit brand page"))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditBrands);

/***/ })
/******/ ]);