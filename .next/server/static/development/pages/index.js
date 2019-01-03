module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./config/ServerConfig.jsx":
/*!*********************************!*\
  !*** ./config/ServerConfig.jsx ***!
  \*********************************/
/*! exports provided: Server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
var Server = "http://localhost:2610/";

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

/***/ "./heads/HomeHead.jsx":
/*!****************************!*\
  !*** ./heads/HomeHead.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



var HomeHead = function HomeHead() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "This is Home Page")));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeHead);

/***/ }),

/***/ "./helper/Convert.jsx":
/*!****************************!*\
  !*** ./helper/Convert.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ImageSrcsToImageUrls = function ImageSrcsToImageUrls(imageSrcs) {
  var imageUrls = [];
  imageSrcs.forEach(function (i) {
    return imageUrls.push(i.url);
  });
  return imageUrls;
};

var ListCarsPromiseToListCars =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(listCarsPromise) {
    var results, listCars;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all(listCarsPromise);

          case 2:
            results = _context.sent;
            listCars = [];
            results.forEach(function (car) {
              listCars.push(_objectSpread({
                id: car.id
              }, car.data()));
            });
            console.log(listCars);
            return _context.abrupt("return", listCars);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function ListCarsPromiseToListCars(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Convert = {
  ImageSrcsToImageUrls: ImageSrcsToImageUrls,
  ListCarsPromiseToListCars: ListCarsPromiseToListCars
};
/* harmony default export */ __webpack_exports__["default"] = (Convert);

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

/***/ "./helper/EnableImages.jsx":
/*!*********************************!*\
  !*** ./helper/EnableImages.jsx ***!
  \*********************************/
/*! exports provided: EnableImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableImages", function() { return EnableImages; });
var EnableImages = function EnableImages(func) {
  var carIdValue = "";
  if (document.getElementById("carId").value) carIdValue = document.getElementById("carId").value;
  var typeIdValue = "";
  if (document.getElementById("typeId").value) typeIdValue = document.getElementById("typeId").value;
  var brandIdValue = "";
  if (document.getElementById("brandId").value) brandIdValue = document.getElementById("brandId").value;
  if (carIdValue == "" || typeIdValue == "" || brandIdValue == "") func(true);else func(false);
};

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

/***/ "./helper/Message.jsx":
/*!****************************!*\
  !*** ./helper/Message.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var MaxImages = function MaxImages(max) {
  return "Ch\u1EC9 cho ph\xE9p upload t\u1ED1i \u0111a ".concat(max, " \u1EA3nh");
};

var AltTextImage = function AltTextImage(typeName, brandName, carName) {
  return "Thu\xEA xe ".concat(typeName, " ").concat(brandName, " ").concat(carName, " du l\u1ECBch c\u01B0\u1EDBi h\u1ECFi \u0111\u01B0a \u0111\xF3n");
};

/* harmony default export */ __webpack_exports__["default"] = ({
  MaxImages: MaxImages,
  AltTextImage: AltTextImage
});

/***/ }),

/***/ "./helper/MoveItem.jsx":
/*!*****************************!*\
  !*** ./helper/MoveItem.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var MoveItemRight = function MoveItemRight(arrayOfItems, currentItemId, id) {
  var array = arrayOfItems.filter(function (i) {
    return i !== null;
  });
  var currentIndex = array.findIndex(function (i) {
    return i[id] === currentItemId;
  });
  if (currentIndex < 0) return false;
  var nextIndex = currentIndex + 1;

  if (nextIndex < array.length) {
    var temp = array[currentIndex];
    array[currentIndex] = array[nextIndex];
    array[nextIndex] = temp;
    return array;
  }

  return false;
};

var MoveItemLeft = function MoveItemLeft(arrayOfItems, currentItemId, id) {
  var array = arrayOfItems.filter(function (i) {
    return i !== null;
  });
  var currentIndex = array.findIndex(function (i) {
    return i[id] === currentItemId;
  });
  if (currentIndex < 0) return false;
  var nextIndex = currentIndex - 1;

  if (nextIndex >= 0) {
    var temp = array[currentIndex];
    array[currentIndex] = array[nextIndex];
    array[nextIndex] = temp;
    return array;
  }

  return false;
};

var MoveItem = {
  MoveItemLeft: MoveItemLeft,
  MoveItemRight: MoveItemRight
};
/* harmony default export */ __webpack_exports__["default"] = (MoveItem);

/***/ }),

/***/ "./helper/Resize.jsx":
/*!***************************!*\
  !*** ./helper/Resize.jsx ***!
  \***************************/
/*! exports provided: Resize, ResizePromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resize", function() { return Resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizePromise", function() { return ResizePromise; });
/* harmony import */ var _Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default */ "./helper/Default.jsx");
/* harmony import */ var _Default__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Default__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Add two numbers.
 * @param {File} file
 * @param {number} width
 * @param {number} height
 * @param {Function} callbackFn
 */

function Resize(file, width, height, callbackFn) {
  var img = document.createElement("img");
  var reader = new FileReader();

  reader.onload = function (e) {
    img.src = e.target.result;

    img.onload = function () {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(function (blob) {
        return callbackFn(blob);
      }, "image/jpeg");
    };
  };

  reader.readAsDataURL(file);
}
function ResizePromise(file, width) {
  return new Promise(function (resolve, reject) {
    var img = document.createElement("img");
    var reader = new FileReader();

    reader.onload = function (e) {
      img.onload = function () {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var height = width / _Default__WEBPACK_IMPORTED_MODULE_0___default.a.ImageRatio;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(function (blob) {
          return resolve(blob);
        }, "image/jpeg");
      };

      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });
}

/***/ }),

/***/ "./helper/Status.jsx":
/*!***************************!*\
  !*** ./helper/Status.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SUCCESS = "SUCCESS";
var FAILED = "FAILED";
var PROCESSING = "PROCESSING";
var Status = {
  SUCCESS: SUCCESS,
  FAILED: FAILED,
  PROCESSING: PROCESSING
};
/* harmony default export */ __webpack_exports__["default"] = (Status);

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

/***/ "./helper/Wait.jsx":
/*!*************************!*\
  !*** ./helper/Wait.jsx ***!
  \*************************/
/*! exports provided: WaitPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitPromise", function() { return WaitPromise; });
var WaitPromise = function WaitPromise(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("done");
    }, time);
  });
};

/***/ }),

/***/ "./node_modules/@material/react-fab/dist/fab.css":
/*!*******************************************************!*\
  !*** ./node_modules/@material/react-fab/dist/fab.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/Footer */ "./shared/Footer.jsx");
/* harmony import */ var _shared_HOCs_FormHOCs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/HOCs/FormHOCs */ "./shared/HOCs/FormHOCs.jsx");
/* harmony import */ var _shared_HOCs_HomeHOCs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/HOCs/HomeHOCs */ "./shared/HOCs/HomeHOCs.jsx");
/* harmony import */ var _heads_HomeHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../heads/HomeHead */ "./heads/HomeHead.jsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_layouts_DefaultLayoutWithIntro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/layouts/DefaultLayoutWithIntro */ "./shared/layouts/DefaultLayoutWithIntro.jsx");
/* harmony import */ var _helper_ToURL__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../helper/ToURL */ "./helper/ToURL.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helper/Default */ "./helper/Default.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helper_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helper/Loader */ "./helper/Loader.jsx");
/* harmony import */ var _shared_CarDetailsLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/CarDetailsLink */ "./shared/CarDetailsLink.jsx");













var enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])( // HomeStaticTransition,
_shared_HOCs_HomeHOCs__WEBPACK_IMPORTED_MODULE_3__["HomeSetStatic"], // WithMessage,
_shared_HOCs_HomeHOCs__WEBPACK_IMPORTED_MODULE_3__["WithHomeHandlers"], _shared_HOCs_HomeHOCs__WEBPACK_IMPORTED_MODULE_3__["HomeLifeCycle"]);

var Home = function Home(_ref) {
  var defaultTypes = _ref.defaultTypes,
      handleTest = _ref.handleTest;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_layouts_DefaultLayoutWithIntro__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_heads_HomeHead__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    hidden: true,
    className: "btn btn-primary",
    onClick: handleTest
  }, "Test only"), defaultTypes && defaultTypes.map(function (type) {
    return type && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: type.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-9 mt-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      scroll: false,
      as: "/".concat(_helper_Default__WEBPACK_IMPORTED_MODULE_9___default.a.urlType, "/").concat(type.id, "/thue-xe-").concat(Object(_helper_ToURL__WEBPACK_IMPORTED_MODULE_8__["ToURL"])(type.name), "#point"),
      href: "/details/type-details?id=".concat(type.id)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: function onClick() {
        return Object(_helper_Loader__WEBPACK_IMPORTED_MODULE_10__["ShowLoader"])();
      }
    }, "Thu\xEA xe ", type.name)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, type.listCars && type.listCars.map(function (car) {
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_CarDetailsLink__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: car.id,
        name: car.name,
        brandName: car.brandName,
        typeName: car.typeName,
        className: "btn btn-primary btn-block font-size-12"
      }, "Chi ti\u1EBFt"))));
    })));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (enhance(Home));

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

/***/ "./shared/HOCs/FormHOCs.jsx":
/*!**********************************!*\
  !*** ./shared/HOCs/FormHOCs.jsx ***!
  \**********************************/
/*! exports provided: WithSelectedCar, WithBrands, WithTypes, WithMessage, WithMainImage, WithImageSources, WithIsImagesHidden, WithIsHidden, WithFormHandlers, FormEditDeleteLifeCycle, FormAddNewLifeCycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithSelectedCar", function() { return WithSelectedCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithBrands", function() { return WithBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithTypes", function() { return WithTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithMessage", function() { return WithMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithMainImage", function() { return WithMainImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithImageSources", function() { return WithImageSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithIsImagesHidden", function() { return WithIsImagesHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithIsHidden", function() { return WithIsHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithFormHandlers", function() { return WithFormHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEditDeleteLifeCycle", function() { return FormEditDeleteLifeCycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAddNewLifeCycle", function() { return FormAddNewLifeCycle; });
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../config/FirebaseConfig */ "./config/FirebaseConfig.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_ServerConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/ServerConfig */ "./config/ServerConfig.jsx");
/* harmony import */ var _helper_Resize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../helper/Resize */ "./helper/Resize.jsx");
/* harmony import */ var _validation_FormValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../validation/FormValidation */ "./validation/FormValidation.jsx");
/* harmony import */ var _helper_Status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helper/Status */ "./helper/Status.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helper/Default */ "./helper/Default.jsx");
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helper_MoveItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../helper/MoveItem */ "./helper/MoveItem.jsx");
/* harmony import */ var _helper_Convert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helper/Convert */ "./helper/Convert.jsx");
/* harmony import */ var _helper_Wait__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../helper/Wait */ "./helper/Wait.jsx");
/* harmony import */ var _helper_EnableImages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../helper/EnableImages */ "./helper/EnableImages.jsx");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }













var WithSelectedCar = Object(recompose__WEBPACK_IMPORTED_MODULE_0__["withState"])("selectedCar", "updateSelectedCar", {});
var WithBrands = Object(recompose__WEBPACK_IMPORTED_MODULE_0__["withState"])("brands", "updateBrands", []);
var WithTypes = Object(recompose__WEBPACK_IMPORTED_MODULE_0__["withState"])("types", "updateTypes", []);
var WithMessage = Object(recompose__WEBPACK_IMPORTED_MODULE_0__["withState"])("message", "updateMessage", "");
var WithMainImage = Object(recompose__WEBPACK_IMPORTED_MODULE_0__["withState"])("mainImage", "updateMainImage", _helper_Default__WEBPACK_IMPORTED_MODULE_7___default.a.MainImage);
var WithImageSources = Object(recompose__WEBPACK_IMPORTED_MODULE_0__["withState"])("imgSrcs", "updateImgSrcs", []);
var WithIsImagesHidden = Object(recompose__WEBPACK_IMPORTED_MODULE_0__["withState"])("isImagesHidden", "updateIsImagesHidden", true);
var WithIsHidden = Object(recompose__WEBPACK_IMPORTED_MODULE_0__["withState"])("isHidden", "updateIsHidden", true);
var WithFormHandlers = Object(recompose__WEBPACK_IMPORTED_MODULE_0__["withHandlers"])({
  handleSubmitAddNew: function handleSubmitAddNew(props) {
    return function (event) {
      event.preventDefault();
      var addnewForm = new FormData(document.getElementById("addnew"));
      addnewForm.append("images", _helper_Convert__WEBPACK_IMPORTED_MODULE_9__["default"].ImageSrcsToImageUrls(props.imgSrcs));
      addnewForm.append("mainImage", props.mainImage);
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_config_ServerConfig__WEBPACK_IMPORTED_MODULE_3__["Server"], "cars"), addnewForm).then(console.log);
    };
  },
  handleSubmitEdit: function handleSubmitEdit(props) {
    return function (event) {
      event.preventDefault();
      var editDeleteForm = new FormData(document.getElementById("edit"));
      editDeleteForm.append("images", _helper_Convert__WEBPACK_IMPORTED_MODULE_9__["default"].ImageSrcsToImageUrls(props.imgSrcs));
      editDeleteForm.append("mainImage", props.mainImage);
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("".concat(_config_ServerConfig__WEBPACK_IMPORTED_MODULE_3__["Server"], "cars/").concat(props.selectedCar.id), editDeleteForm).then(console.log);
    };
  },
  handleSelectImage: function handleSelectImage(props) {
    return function (event) {
      event.preventDefault();
      props.updateMainImage(event.target.src);
    };
  },
  handleRemoveImage: function handleRemoveImage(props) {
    return function (event) {
      event.preventDefault();
      var removedImageUrl = event.target.value;
      if (props.mainImage === removedImageUrl) props.updateMainImage(_helper_Default__WEBPACK_IMPORTED_MODULE_7___default.a.MainImage);
      var imagesArray = props.imgSrcs.filter(function (i) {
        return i.url !== removedImageUrl;
      });
      props.updateImgSrcs(imagesArray);
    };
  },
  handleMoveLeft: function handleMoveLeft(props) {
    return function (event) {
      var newImgSrcs = _helper_MoveItem__WEBPACK_IMPORTED_MODULE_8__["default"].MoveItemLeft(props.imgSrcs, props.mainImage, "url");
      if (newImgSrcs) props.updateImgSrcs(newImgSrcs);
    };
  },
  handleMoveRight: function handleMoveRight(props) {
    return function (event) {
      var newImgSrcs = _helper_MoveItem__WEBPACK_IMPORTED_MODULE_8__["default"].MoveItemRight(props.imgSrcs, props.mainImage, "url");
      if (newImgSrcs) props.updateImgSrcs(newImgSrcs);
    };
  },
  handleImagesChange: function handleImagesChange(props) {
    return function (event) {
      try {
        var images = event.target.files;
        var currentNumberOfImgs = props.imgSrcs.length;
        var remainNumberofImgs = _helper_Default__WEBPACK_IMPORTED_MODULE_7___default.a.MaxNumberOfImages - currentNumberOfImgs;
        var response = _validation_FormValidation__WEBPACK_IMPORTED_MODULE_5__["default"].MaxImages(images, remainNumberofImgs);

        if (response !== _helper_Status__WEBPACK_IMPORTED_MODULE_6__["default"].SUCCESS) {
          props.updateMessage(response);
          return;
        }

        if (images.length != 0) {
          response = _validation_FormValidation__WEBPACK_IMPORTED_MODULE_5__["default"].ValidateImages(images);

          if (response !== _helper_Status__WEBPACK_IMPORTED_MODULE_6__["default"].SUCCESS) {
            props.updateMessage(response);
            return;
          }

          var imagesForm = new FormData(document.getElementById("addnew") ? document.getElementById("addnew") : document.getElementById("edit"));
          var promiseArray = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var i = _step.value;
              var promise = Object(_helper_Resize__WEBPACK_IMPORTED_MODULE_4__["ResizePromise"])(i, 800);
              promiseArray.push(promise);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          Promise.all(promiseArray).then(function (ress) {
            ress.forEach(function (res) {
              return imagesForm.append("images", res);
            });
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_config_ServerConfig__WEBPACK_IMPORTED_MODULE_3__["Server"], "images"), imagesForm).then(function (res) {
              props.updateImgSrcs(_toConsumableArray(props.imgSrcs).concat(_toConsumableArray(res.data)));
            });
          });
        }
      } catch (error) {
        props.updateMessage(error);
      }
    };
  },
  handleTextChange: function handleTextChange(props) {
    return function (event) {
      Object(_helper_EnableImages__WEBPACK_IMPORTED_MODULE_11__["EnableImages"])(props.updateIsImagesHidden);
    };
  },
  handleDeleteCar: function handleDeleteCar(props) {
    return function (event) {
      event.preventDefault();

      if (window.confirm("Muốn xóa thật không?")) {
        var carId = event.target.value;
        _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].collection("cars").doc(carId).delete().then(function () {
          props.updateSelectedCar({});
          props.updateImgSrcs([]);
          props.updateMainImage(_helper_Default__WEBPACK_IMPORTED_MODULE_7___default.a.MainImage);
        });
      }
    };
  }
});
var FormEditDeleteLifeCycle = Object(recompose__WEBPACK_IMPORTED_MODULE_0__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    var _this = this;

    if (this.props.router.query.id) {
      this.props.updateIsHidden(false);
      _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].collection("cars").doc(this.props.router.query.id).get().then(function (doc) {
        if (doc.exists) {
          var selectedCar = _objectSpread({
            id: doc.id
          }, doc.data());

          _this.props.updateSelectedCar(selectedCar);

          var imgSrcs = selectedCar.images.map(function (i) {
            return {
              name: Math.random().toString(),
              url: i
            };
          });
          var mainImage = selectedCar.mainImage;

          _this.props.updateImgSrcs(imgSrcs);

          _this.props.updateMainImage(mainImage);

          Object(_helper_EnableImages__WEBPACK_IMPORTED_MODULE_11__["EnableImages"])(_this.props.updateIsImagesHidden);
        }
      });
      _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].collection("brands").onSnapshot(function (docs) {
        var brands = [];
        docs.forEach(function (doc) {
          return brands.push(_objectSpread({
            id: doc.id
          }, doc.data()));
        });

        _this.setState({
          brands: brands
        });

        Object(_helper_EnableImages__WEBPACK_IMPORTED_MODULE_11__["EnableImages"])(_this.props.updateIsImagesHidden);
      });
      _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].collection("types").onSnapshot(function (docs) {
        var types = [];
        docs.forEach(function (doc) {
          return types.push(_objectSpread({
            id: doc.id
          }, doc.data()));
        });

        _this.setState({
          types: types
        });

        Object(_helper_EnableImages__WEBPACK_IMPORTED_MODULE_11__["EnableImages"])(_this.props.updateIsImagesHidden);
      });
    }
  }
});
var FormAddNewLifeCycle = Object(recompose__WEBPACK_IMPORTED_MODULE_0__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    var _this2 = this;

    _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].collection("brands").onSnapshot(function (docs) {
      var brands = [];
      docs.forEach(function (doc) {
        return brands.push(_objectSpread({
          id: doc.id
        }, doc.data()));
      });

      _this2.setState({
        brands: brands
      });
    });
    _config_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].collection("types").onSnapshot(function (docs) {
      var types = [];
      docs.forEach(function (doc) {
        return types.push(_objectSpread({
          id: doc.id
        }, doc.data()));
      });

      _this2.setState({
        types: types
      });
    });
  }
});

/***/ }),

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_1__);
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

/***/ "./validation/FormValidation.jsx":
/*!***************************************!*\
  !*** ./validation/FormValidation.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_Status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helper/Status */ "./helper/Status.jsx");
/* harmony import */ var _helper_Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/Message */ "./helper/Message.jsx");



function ValidateImages(images) {
  var errorMessage = "";
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      if (i.type !== "image/jpeg") errorMessage += "".concat(i.name, ". ");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (!errorMessage == "") {
    return errorMessage + "không phải là ảnh";
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = images[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var k = _step2.value;
      if (k.size > 8 * 1024 * 1024) errorMessage += "".concat(k.name, ". ");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  if (!errorMessage == "") {
    return errorMessage + "vượt quá dung lượng 8 MB";
  }

  return _helper_Status__WEBPACK_IMPORTED_MODULE_0__["default"].SUCCESS;
}

function MaxImages(images, max) {
  if (images.length > max) {
    return _helper_Message__WEBPACK_IMPORTED_MODULE_1__["default"].MaxImages(max);
  }

  return _helper_Status__WEBPACK_IMPORTED_MODULE_0__["default"].SUCCESS;
}

var Validation = {
  MaxImages: MaxImages,
  ValidateImages: ValidateImages
};
/* harmony default export */ __webpack_exports__["default"] = (Validation);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.jsx */"./pages/index.jsx");


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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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
//# sourceMappingURL=index.js.map