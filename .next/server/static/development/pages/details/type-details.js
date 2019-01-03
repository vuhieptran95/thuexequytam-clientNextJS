module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/FirebaseConfig.jsx":
/*!***********************************!*\
  !*** ./config/FirebaseConfig.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "@firebase/app");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ "@firebase/firestore");
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
/* harmony default export */ __webpack_exports__["default"] = (Db);

/***/ }),

/***/ "./custom-css/bootstrap-flatly.css":
/*!*****************************************!*\
  !*** ./custom-css/bootstrap-flatly.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./custom-css/custom-card.css":
/*!************************************!*\
  !*** ./custom-css/custom-card.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./custom-css/fab.css":
/*!****************************!*\
  !*** ./custom-css/fab.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./custom-css/global-style.css":
/*!*************************************!*\
  !*** ./custom-css/global-style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./heads/DefaultHead.jsx":
/*!*******************************!*\
  !*** ./heads/DefaultHead.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css_bootstrap_flatly_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-css/bootstrap-flatly.css */ "./custom-css/bootstrap-flatly.css");
/* harmony import */ var _custom_css_bootstrap_flatly_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_custom_css_bootstrap_flatly_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _custom_css_global_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-css/global-style.css */ "./custom-css/global-style.css");
/* harmony import */ var _custom_css_global_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_custom_css_global_style_css__WEBPACK_IMPORTED_MODULE_3__);





var DefaultHead = function DefaultHead() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultHead);

/***/ }),

/***/ "./helper/Default.jsx":
/*!****************************!*\
  !*** ./helper/Default.jsx ***!
  \****************************/
/*! no static exports found */
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

/***/ "./helper/IsMobile.jsx":
/*!*****************************!*\
  !*** ./helper/IsMobile.jsx ***!
  \*****************************/
/*! exports provided: IsMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsMobile", function() { return IsMobile; });
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

/***/ "./helper/Loader.jsx":
/*!***************************!*\
  !*** ./helper/Loader.jsx ***!
  \***************************/
/*! exports provided: HideLoader, ShowLoader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideLoader", function() { return HideLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowLoader", function() { return ShowLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ "react-spinners");
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
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./helper/ToURL.jsx":
/*!**************************!*\
  !*** ./helper/ToURL.jsx ***!
  \**************************/
/*! exports provided: ToURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToURL", function() { return ToURL; });
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

/***/ "./node_modules/@material/react-fab/dist/fab.css":
/*!*******************************************************!*\
  !*** ./node_modules/@material/react-fab/dist/fab.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/details/type-details.jsx":
/*!****************************************!*\
  !*** ./pages/details/type-details.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_layouts_DefaultLayoutWithIntro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/layouts/DefaultLayoutWithIntro */ "./shared/layouts/DefaultLayoutWithIntro.jsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_HOCs_TypeDetailsHOCs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/HOCs/TypeDetailsHOCs */ "./shared/HOCs/TypeDetailsHOCs.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/Footer */ "./shared/Footer.jsx");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_CarDetailsLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/CarDetailsLink */ "./shared/CarDetailsLink.jsx");

// import { WithMessage } from "./../shared/HOCs/FormHOCs";


 // import { withRouter } from "next/router";






var enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(_shared_HOCs_TypeDetailsHOCs__WEBPACK_IMPORTED_MODULE_3__["TypeDetailsSetStatic"], _shared_HOCs_TypeDetailsHOCs__WEBPACK_IMPORTED_MODULE_3__["TypesLifeCycle"] //   WithMessage
//   WithHomeHandlers
);

var TypeDetails = function TypeDetails(_ref) {
  var typeWithCars = _ref.typeWithCars,
      message = _ref.message,
      handleTest = _ref.handleTest;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_layouts_DefaultLayoutWithIntro__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: typeWithCars.id
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-9 mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Thu\xEA xe ", typeWithCars.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, typeWithCars.cars && typeWithCars.cars.map(function (car) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: car.id,
      className: "col-lg-3 col-md-6 mb-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "card-img-top",
      src: car.thumbnail,
      alt: car.alt
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "card-title font-size-15"
    }, car.brandName, " ", car.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "lead mb-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "phone_in_talk"), " 0913 580 831"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "lead mb-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "phone_in_talk"), " 098 116 9988")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-footer text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_CarDetailsLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: car.id,
      name: car.name,
      brandName: car.brandName,
      typeName: car.typeName,
      className: "btn btn-primary btn-block font-size-12"
    }, "Chi ti\u1EBFt"))));
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (enhance(TypeDetails));

/***/ }),

/***/ "./shared/BreadCrumb.jsx":
/*!*******************************!*\
  !*** ./shared/BreadCrumb.jsx ***!
  \*******************************/
/*! exports provided: BreadCrumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumb", function() { return BreadCrumb; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helper/Loader */ "./helper/Loader.jsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../helper/Default */ "./helper/Default.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../config/FirebaseConfig */ "./config/FirebaseConfig.jsx");
/* harmony import */ var _CarDetailsLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CarDetailsLink */ "./shared/CarDetailsLink.jsx");
/* harmony import */ var _HomeLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HomeLink */ "./shared/HomeLink.jsx");
/* harmony import */ var _TypeDetailsLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TypeDetailsLink */ "./shared/TypeDetailsLink.jsx");
/* harmony import */ var _helper_IsMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helper/IsMobile */ "./helper/IsMobile.jsx");












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
      _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__["default"].collection("types").doc(typeId).get().then(function (doc) {
        return _this.props.updateType(doc.data());
      });
    } else if (url.includes(_helper_Default__WEBPACK_IMPORTED_MODULE_4___default.a.urlCar)) {
      var carId = url.split("/")[2];
      _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__["default"].collection("cars").doc(carId).get().then(function (doc) {
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeLink__WEBPACK_IMPORTED_MODULE_7__["HomeLink"], null, "Trang ch\u1EE7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item active",
    "aria-current": "page"
  }, "Thu\xEA xe ", type.name)), car && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeLink__WEBPACK_IMPORTED_MODULE_7__["HomeLink"], null, "Trang ch\u1EE7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TypeDetailsLink__WEBPACK_IMPORTED_MODULE_8__["TypeDetailsLink"], {
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
  }, "Trang ch\u1EE7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helper_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});

/***/ }),

/***/ "./shared/CarDetailsLink.jsx":
/*!***********************************!*\
  !*** ./shared/CarDetailsLink.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helper/Default */ "./helper/Default.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_ToURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../helper/ToURL */ "./helper/ToURL.jsx");
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/Loader */ "./helper/Loader.jsx");






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
    as: "/".concat(_helper_Default__WEBPACK_IMPORTED_MODULE_2___default.a.urlCar, "/").concat(id, "/thue-xe-").concat(Object(_helper_ToURL__WEBPACK_IMPORTED_MODULE_3__["ToURL"])(brandName), "-").concat(Object(_helper_ToURL__WEBPACK_IMPORTED_MODULE_3__["ToURL"])(name), "-").concat(Object(_helper_ToURL__WEBPACK_IMPORTED_MODULE_3__["ToURL"])(typeName)),
    href: "/details/car-details?id=".concat(id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_4__["ShowLoader"])();
    },
    className: className
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (CarDetailsLink);

/***/ }),

/***/ "./shared/FabButton.jsx":
/*!******************************!*\
  !*** ./shared/FabButton.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_react_fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/react-fab */ "@material/react-fab");
/* harmony import */ var _material_react_fab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_react_fab__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_react_fab_dist_fab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/react-fab/dist/fab.css */ "./node_modules/@material/react-fab/dist/fab.css");
/* harmony import */ var _material_react_fab_dist_fab_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_react_fab_dist_fab_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _custom_css_fab_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-css/fab.css */ "./custom-css/fab.css");
/* harmony import */ var _custom_css_fab_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_custom_css_fab_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../helper/IsMobile */ "./helper/IsMobile.jsx");







var LifeCycle = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    if (Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__["IsMobile"])()) {
      this.setState({
        isMobile: Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__["IsMobile"])(),
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
        isMobile: Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_6__["IsMobile"])()
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

/* harmony default export */ __webpack_exports__["default"] = (LifeCycle(FabButton));

/***/ }),

/***/ "./shared/Footer.jsx":
/*!***************************!*\
  !*** ./shared/Footer.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_IsMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helper/IsMobile */ "./helper/IsMobile.jsx");



var LifeCycle = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    if (!Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_2__["IsMobile"])()) {
      this.setState({
        fontSize: "font-size-11"
      });
    }
  }
});

var Footer = function Footer(_ref) {
  var fontSize = _ref.fontSize;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "py-0 bg-primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container ".concat(fontSize)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "m-0 text-center text-white"
  }, "C\xF4ng ty TNHH v\u1EADn t\u1EA3i - du l\u1ECBch v\xE0 th\u01B0\u01A1ng m\u1EA1i Qu\xFD T\xE2m"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "m-0 text-center text-white"
  }, "Tr\u1EE5 s\u1EDF: 84 + 86 \u0110\u01B0\u1EDDng Ng\u1ECDc H\u1ED3i - Qu\u1ED1c B\u1EA3o - V\u0103n \u0110i\u1EC3n - Thanh Tr\xEC - H\xE0 N\u1ED9i"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "m-0 text-center text-white"
  }, "Hotline: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:0913 580 831"
  }, "0913 580 831"), " - ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:098 116 9988"
  }, "098 116 9988"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LifeCycle(Footer));

/***/ }),

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../config/FirebaseConfig */ "./config/FirebaseConfig.jsx");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../helper/Loader */ "./helper/Loader.jsx");
/* harmony import */ var _helper_IsMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/IsMobile */ "./helper/IsMobile.jsx");


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

    if (Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_5__["IsMobile"])()) {
      window.scroll({
        top: 430,
        left: 0,
        behavior: "smooth"
      });
    } // console.log(window.history.length);
    // console.log(window.history);

  },
  componentWillReceiveProps: function componentWillReceiveProps() {
    Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_4__["HideLoader"])(); // console.log(window.history.length);
    // console.log(window.history);
  }
});

/***/ }),

/***/ "./shared/HomeLink.jsx":
/*!*****************************!*\
  !*** ./shared/HomeLink.jsx ***!
  \*****************************/
/*! exports provided: HomeLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLink", function() { return HomeLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helper/Loader */ "./helper/Loader.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
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
      return Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_1__["ShowLoader"])();
    }
  }, children));
};

/***/ }),

/***/ "./shared/Intro.jsx":
/*!**************************!*\
  !*** ./shared/Intro.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _custom_css_custom_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom-css/custom-card.css */ "./custom-css/custom-card.css");
/* harmony import */ var _custom_css_custom_card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom_css_custom_card_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/Loader */ "./helper/Loader.jsx");




var Intro = function Intro() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "carouselExampleIndicators",
    className: "carousel slide",
    "data-ride": "carousel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-inner",
    role: "listbox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item active"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jumbotron myjumbotron jumbotron-fluid mb-1 flex-container text-align-left text-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-3 mr-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "mt-2"
  }, "C\xF4ng ty TNHH v\u1EADn t\u1EA3i - du l\u1ECBch v\xE0 th\u01B0\u01A1ng m\u1EA1i Qu\xFD T\xE2m", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info mt-4 ml-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons mr-3"
  }, "location_on"), "\u0110\u1ECBa ch\u1EC9: 41 T\u1ED5 2 Qu\u1ED1c B\u1EA3o - V\u0103n \u0110i\u1EC3n - Thanh Tr\xEC - H\xE0 N\u1ED9i"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons mr-3"
  }, "location_city"), "Tr\u1EE5 s\u1EDF: 84 + 86 \u0110\u01B0\u1EDDng Ng\u1ECDc H\u1ED3i - Qu\u1ED1c B\u1EA3o - V\u0103n \u0110i\u1EC3n - Thanh Tr\xEC - H\xE0 N\u1ED9i"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons mr-3"
  }, "phone_in_talk"), "Hotline: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:0913 580 831"
  }, "0913 580 831"), " - ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:098 116 9988"
  }, "098 116 9988")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "mr-3 pb-2",
    src: "https://storage.googleapis.com/thuexequytam-firebase/default-images/facebook-box_2.png",
    alt: "logo"
  }), "Facebook: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/profile.php?id=100005097907757"
  }, "QUY TAM CO., LTD")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jumbotron myjumbotron myjumbotron2 jumbotron-fluid mb-1 flex-container text-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-3 mr-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "mt-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "logo",
    src: "https://storage.googleapis.com/thuexequytam-firebase/default-images/logo3.png",
    alt: ""
  }), "QUY TAM CO., LTD", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info mt-4 ml-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons mr-3"
  }, "receipt"), "Nh\u1EADn h\u1EE3p \u0111\u1ED3ng xe du l\u1ECBch - xe \xF4 t\xF4 t\u1EF1 l\xE1i"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons mr-3"
  }, "receipt"), "Nh\u1EADn h\u1EE3p \u0111\u1ED3ng tham quan du l\u1ECBch - l\u1EC5 h\u1ED9i - hi\u1EBFu h\u1EF7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons mr-3"
  }, "folder_shared"), "Nh\u1EADn h\u1ED3 s\u01A1 h\u1ECDc l\xE1i xe \xF4 t\xF4 - xe m\xE1y"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons mr-3"
  }, "folder_shared"), "Nh\u1EADn n\xE2ng c\u1EA5p \u0111\u1ED5i b\u1EB1ng l\xE1i xe \xF4 t\xF4: C - D - E - F")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleIndicators",
    role: "button",
    "data-slide": "prev"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Previous")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "carousel-control-next",
    href: "#carouselExampleIndicators",
    role: "button",
    "data-slide": "next"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Next"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./shared/Nav.jsx":
/*!************************!*\
  !*** ./shared/Nav.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../config/FirebaseConfig */ "./config/FirebaseConfig.jsx");
/* harmony import */ var _helper_ToURL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../helper/ToURL */ "./helper/ToURL.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../helper/Default */ "./helper/Default.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helper_IsMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helper/IsMobile */ "./helper/IsMobile.jsx");
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helper/Loader */ "./helper/Loader.jsx");
/* harmony import */ var _HomeLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HomeLink */ "./shared/HomeLink.jsx");
/* harmony import */ var _TypeDetailsLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TypeDetailsLink */ "./shared/TypeDetailsLink.jsx");



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
              return _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__["default"].collection("types").orderBy("order", "asc").get();

            case 2:
              types = _context.sent;
              uiType = types.docs.map(function (type) {
                return {
                  name: type.data().name,
                  id: type.id
                };
              });
              show = "";

              if (Object(_helper_IsMobile__WEBPACK_IMPORTED_MODULE_9__["IsMobile"])()) {
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HomeLink__WEBPACK_IMPORTED_MODULE_11__["HomeLink"], {
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HomeLink__WEBPACK_IMPORTED_MODULE_11__["HomeLink"], {
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
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TypeDetailsLink__WEBPACK_IMPORTED_MODULE_12__["TypeDetailsLink"], {
      key: type.id,
      id: type.id,
      name: type.name,
      className: "font-size-11 dropdown-item ".concat(router.asPath.includes("/thue-xe-".concat(Object(_helper_ToURL__WEBPACK_IMPORTED_MODULE_6__["ToURL"])(type.name))) ? "active" : "")
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

/* harmony default export */ __webpack_exports__["default"] = (enhance(Nav));

/***/ }),

/***/ "./shared/TypeDetailsLink.jsx":
/*!************************************!*\
  !*** ./shared/TypeDetailsLink.jsx ***!
  \************************************/
/*! exports provided: TypeDetailsLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDetailsLink", function() { return TypeDetailsLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helper/Loader */ "./helper/Loader.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helper/Default */ "./helper/Default.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
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

/***/ }),

/***/ "./shared/layouts/DefaultLayoutWithIntro.jsx":
/*!***************************************************!*\
  !*** ./shared/layouts/DefaultLayoutWithIntro.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heads_DefaultHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../heads/DefaultHead */ "./heads/DefaultHead.jsx");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Nav */ "./shared/Nav.jsx");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Intro */ "./shared/Intro.jsx");
/* harmony import */ var _FabButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FabButton */ "./shared/FabButton.jsx");
/* harmony import */ var _BreadCrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BreadCrumb */ "./shared/BreadCrumb.jsx");
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../helper/Loader */ "./helper/Loader.jsx");








var DefaultLayoutWithIntro = function DefaultLayoutWithIntro(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      minHeight: "100vh"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_heads_DefaultHead__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Intro__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mybody"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FabButton__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BreadCrumb__WEBPACK_IMPORTED_MODULE_5__["BreadCrumb"], null), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayoutWithIntro);

/***/ }),

/***/ 3:
/*!**********************************************!*\
  !*** multi ./pages/details/type-details.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/details/type-details.jsx */"./pages/details/type-details.jsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@firebase/app":
/*!********************************!*\
  !*** external "@firebase/app" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/app");

/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/firestore");

/***/ }),

/***/ "@material/react-fab":
/*!**************************************!*\
  !*** external "@material/react-fab" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material/react-fab");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scrollable-anchor":
/*!******************************************!*\
  !*** external "react-scrollable-anchor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollable-anchor");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ })

/******/ });
//# sourceMappingURL=type-details.js.map