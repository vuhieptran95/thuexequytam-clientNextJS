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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "recompose"
var external_recompose_ = __webpack_require__(1);

// EXTERNAL MODULE: ./config/FirebaseConfig.jsx
var FirebaseConfig = __webpack_require__(5);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(31);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./config/ServerConfig.jsx
var Server = "http://localhost:2610/";
// EXTERNAL MODULE: ./helper/Default.jsx
var Default = __webpack_require__(3);
var Default_default = /*#__PURE__*/__webpack_require__.n(Default);

// CONCATENATED MODULE: ./helper/Resize.jsx

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
        var height = width / Default_default.a.ImageRatio;
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
// CONCATENATED MODULE: ./helper/Status.jsx
var SUCCESS = "SUCCESS";
var FAILED = "FAILED";
var PROCESSING = "PROCESSING";
var Status = {
  SUCCESS: SUCCESS,
  FAILED: FAILED,
  PROCESSING: PROCESSING
};
/* harmony default export */ var helper_Status = (Status);
// EXTERNAL MODULE: ./helper/Message.jsx
var Message = __webpack_require__(33);

// CONCATENATED MODULE: ./validation/FormValidation.jsx



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

  return helper_Status.SUCCESS;
}

function MaxImages(images, max) {
  if (images.length > max) {
    return Message["a" /* default */].MaxImages(max);
  }

  return helper_Status.SUCCESS;
}

var Validation = {
  MaxImages: MaxImages,
  ValidateImages: ValidateImages
};
/* harmony default export */ var FormValidation = (Validation);
// EXTERNAL MODULE: ./helper/MoveItem.jsx
var MoveItem = __webpack_require__(24);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// CONCATENATED MODULE: ./helper/Convert.jsx


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
  regenerator_default.a.mark(function _callee(listCarsPromise) {
    var results, listCars;
    return regenerator_default.a.wrap(function _callee$(_context) {
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
/* harmony default export */ var helper_Convert = (Convert);
// CONCATENATED MODULE: ./helper/Wait.jsx
var WaitPromise = function WaitPromise(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("done");
    }, time);
  });
};
// CONCATENATED MODULE: ./helper/EnableImages.jsx
var EnableImages = function EnableImages(func) {
  var carIdValue = "";
  if (document.getElementById("carId").value) carIdValue = document.getElementById("carId").value;
  var typeIdValue = "";
  if (document.getElementById("typeId").value) typeIdValue = document.getElementById("typeId").value;
  var brandIdValue = "";
  if (document.getElementById("brandId").value) brandIdValue = document.getElementById("brandId").value;
  if (carIdValue == "" || typeIdValue == "" || brandIdValue == "") func(true);else func(false);
};
// CONCATENATED MODULE: ./shared/HOCs/FormHOCs.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return WithSelectedCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WithBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return WithTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return WithMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return WithMainImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WithImageSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return WithIsImagesHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WithIsHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return WithFormHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormEditDeleteLifeCycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormAddNewLifeCycle; });
function FormHOCs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { FormHOCs_defineProperty(target, key, source[key]); }); } return target; }

function FormHOCs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }













var WithSelectedCar = Object(external_recompose_["withState"])("selectedCar", "updateSelectedCar", {});
var WithBrands = Object(external_recompose_["withState"])("brands", "updateBrands", []);
var WithTypes = Object(external_recompose_["withState"])("types", "updateTypes", []);
var WithMessage = Object(external_recompose_["withState"])("message", "updateMessage", "");
var WithMainImage = Object(external_recompose_["withState"])("mainImage", "updateMainImage", Default_default.a.MainImage);
var WithImageSources = Object(external_recompose_["withState"])("imgSrcs", "updateImgSrcs", []);
var WithIsImagesHidden = Object(external_recompose_["withState"])("isImagesHidden", "updateIsImagesHidden", true);
var WithIsHidden = Object(external_recompose_["withState"])("isHidden", "updateIsHidden", true);
var WithFormHandlers = Object(external_recompose_["withHandlers"])({
  handleSubmitAddNew: function handleSubmitAddNew(props) {
    return function (event) {
      event.preventDefault();
      var addnewForm = new FormData(document.getElementById("addnew"));
      addnewForm.append("images", helper_Convert.ImageSrcsToImageUrls(props.imgSrcs));
      addnewForm.append("mainImage", props.mainImage);
      external_axios_default.a.post("".concat(Server, "cars"), addnewForm).then(console.log);
    };
  },
  handleSubmitEdit: function handleSubmitEdit(props) {
    return function (event) {
      event.preventDefault();
      var editDeleteForm = new FormData(document.getElementById("edit"));
      editDeleteForm.append("images", helper_Convert.ImageSrcsToImageUrls(props.imgSrcs));
      editDeleteForm.append("mainImage", props.mainImage);
      external_axios_default.a.put("".concat(Server, "cars/").concat(props.selectedCar.id), editDeleteForm).then(console.log);
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
      if (props.mainImage === removedImageUrl) props.updateMainImage(Default_default.a.MainImage);
      var imagesArray = props.imgSrcs.filter(function (i) {
        return i.url !== removedImageUrl;
      });
      props.updateImgSrcs(imagesArray);
    };
  },
  handleMoveLeft: function handleMoveLeft(props) {
    return function (event) {
      var newImgSrcs = MoveItem["a" /* default */].MoveItemLeft(props.imgSrcs, props.mainImage, "url");
      if (newImgSrcs) props.updateImgSrcs(newImgSrcs);
    };
  },
  handleMoveRight: function handleMoveRight(props) {
    return function (event) {
      var newImgSrcs = MoveItem["a" /* default */].MoveItemRight(props.imgSrcs, props.mainImage, "url");
      if (newImgSrcs) props.updateImgSrcs(newImgSrcs);
    };
  },
  handleImagesChange: function handleImagesChange(props) {
    return function (event) {
      try {
        var images = event.target.files;
        var currentNumberOfImgs = props.imgSrcs.length;
        var remainNumberofImgs = Default_default.a.MaxNumberOfImages - currentNumberOfImgs;
        var response = FormValidation.MaxImages(images, remainNumberofImgs);

        if (response !== helper_Status.SUCCESS) {
          props.updateMessage(response);
          return;
        }

        if (images.length != 0) {
          response = FormValidation.ValidateImages(images);

          if (response !== helper_Status.SUCCESS) {
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
              var promise = ResizePromise(i, 800);
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
            external_axios_default.a.post("".concat(Server, "images"), imagesForm).then(function (res) {
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
      EnableImages(props.updateIsImagesHidden);
    };
  },
  handleDeleteCar: function handleDeleteCar(props) {
    return function (event) {
      event.preventDefault();

      if (window.confirm("Muốn xóa thật không?")) {
        var carId = event.target.value;
        FirebaseConfig["a" /* default */].collection("cars").doc(carId).delete().then(function () {
          props.updateSelectedCar({});
          props.updateImgSrcs([]);
          props.updateMainImage(Default_default.a.MainImage);
        });
      }
    };
  }
});
var FormEditDeleteLifeCycle = Object(external_recompose_["lifecycle"])({
  componentDidMount: function componentDidMount() {
    var _this = this;

    if (this.props.router.query.id) {
      this.props.updateIsHidden(false);
      FirebaseConfig["a" /* default */].collection("cars").doc(this.props.router.query.id).get().then(function (doc) {
        if (doc.exists) {
          var selectedCar = FormHOCs_objectSpread({
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

          EnableImages(_this.props.updateIsImagesHidden);
        }
      });
      FirebaseConfig["a" /* default */].collection("brands").onSnapshot(function (docs) {
        var brands = [];
        docs.forEach(function (doc) {
          return brands.push(FormHOCs_objectSpread({
            id: doc.id
          }, doc.data()));
        });

        _this.setState({
          brands: brands
        });

        EnableImages(_this.props.updateIsImagesHidden);
      });
      FirebaseConfig["a" /* default */].collection("types").onSnapshot(function (docs) {
        var types = [];
        docs.forEach(function (doc) {
          return types.push(FormHOCs_objectSpread({
            id: doc.id
          }, doc.data()));
        });

        _this.setState({
          types: types
        });

        EnableImages(_this.props.updateIsImagesHidden);
      });
    }
  }
});
var FormAddNewLifeCycle = Object(external_recompose_["lifecycle"])({
  componentDidMount: function componentDidMount() {
    var _this2 = this;

    FirebaseConfig["a" /* default */].collection("brands").onSnapshot(function (docs) {
      var brands = [];
      docs.forEach(function (doc) {
        return brands.push(FormHOCs_objectSpread({
          id: doc.id
        }, doc.data()));
      });

      _this2.setState({
        brands: brands
      });
    });
    FirebaseConfig["a" /* default */].collection("types").onSnapshot(function (docs) {
      var types = [];
      docs.forEach(function (doc) {
        return types.push(FormHOCs_objectSpread({
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (MoveItem);

/***/ }),
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
/* 31 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var MaxImages = function MaxImages(max) {
  return "Ch\u1EC9 cho ph\xE9p upload t\u1ED1i \u0111a ".concat(max, " \u1EA3nh");
};

var AltTextImage = function AltTextImage(typeName, brandName, carName) {
  return "Thu\xEA xe ".concat(typeName, " ").concat(brandName, " ").concat(carName, " du l\u1ECBch c\u01B0\u1EDBi h\u1ECFi \u0111\u01B0a \u0111\xF3n");
};

/* harmony default export */ __webpack_exports__["a"] = ({
  MaxImages: MaxImages,
  AltTextImage: AltTextImage
});

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOCs_FormHOCs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _helper_Default__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helper_Default__WEBPACK_IMPORTED_MODULE_3__);




var enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(_HOCs_FormHOCs__WEBPACK_IMPORTED_MODULE_2__[/* WithBrands */ "c"], _HOCs_FormHOCs__WEBPACK_IMPORTED_MODULE_2__[/* WithTypes */ "k"], _HOCs_FormHOCs__WEBPACK_IMPORTED_MODULE_2__[/* WithMessage */ "i"], _HOCs_FormHOCs__WEBPACK_IMPORTED_MODULE_2__[/* WithMainImage */ "h"], _HOCs_FormHOCs__WEBPACK_IMPORTED_MODULE_2__[/* WithImageSources */ "e"], _HOCs_FormHOCs__WEBPACK_IMPORTED_MODULE_2__[/* WithIsImagesHidden */ "g"], _HOCs_FormHOCs__WEBPACK_IMPORTED_MODULE_2__[/* WithFormHandlers */ "d"], _HOCs_FormHOCs__WEBPACK_IMPORTED_MODULE_2__[/* FormAddNewLifeCycle */ "a"]);

var FormAddNew = function FormAddNew(_ref) {
  var brands = _ref.brands,
      mainImage = _ref.mainImage,
      types = _ref.types,
      message = _ref.message,
      imgSrcs = _ref.imgSrcs,
      isImagesHidden = _ref.isImagesHidden,
      handleSubmitAddNew = _ref.handleSubmitAddNew,
      handleSelectImage = _ref.handleSelectImage,
      handleMoveRight = _ref.handleMoveRight,
      handleMoveLeft = _ref.handleMoveLeft,
      handleImagesChange = _ref.handleImagesChange,
      handleRemoveImage = _ref.handleRemoveImage,
      handleTextChange = _ref.handleTextChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "max-width-100",
    src: mainImage,
    alt: ""
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 col-6 margin-top-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    hidden: isImagesHidden,
    onClick: handleMoveLeft
  }, "D\u1ECBch Tr\xE1i")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 col-6 margin-top-10 text-align-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    hidden: isImagesHidden,
    onClick: handleMoveRight
  }, " ", "D\u1ECBch Ph\u1EA3i"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-container2"
  }, imgSrcs.map(function (src) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: src.name,
      className: "col-lg-6 relative margin-top-10 text-align-right no-padding-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "image",
      onClick: handleRemoveImage,
      value: src.url,
      className: "absolute",
      src: _helper_Default__WEBPACK_IMPORTED_MODULE_3___default.a.CloseImage,
      alt: "Close"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "image",
      onClick: handleSelectImage,
      src: src.url,
      className: "max-width-100"
    }));
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    hidden: isImagesHidden,
    className: "margin-top-10",
    type: "file",
    onChange: handleImagesChange,
    multiple: true,
    name: "images"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "addnew",
    className: "col-lg-4",
    onSubmit: handleSubmitAddNew
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-4"
  }, "T\xEAn xe (*)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "carId",
    onChange: handleTextChange,
    type: "text",
    className: "form-control col-lg-8",
    name: "name",
    placeholder: "T\xEAn xe",
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-4"
  }, "Lo\u1EA1i xe (*)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    id: "typeId",
    name: "type",
    onChange: handleTextChange,
    required: true,
    className: "form-control col-lg-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: null
  }), types.map(function (type) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: type.id,
      value: type.id
    }, type.name);
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-4"
  }, "H\xE3ng xe (*)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    id: "brandId",
    onChange: handleTextChange,
    name: "brand",
    required: true,
    className: "form-control col-lg-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: null
  }), brands.map(function (brand) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: brand.id,
      value: brand.id
    }, brand.name);
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "T\u1EA1o m\u1EDBi")));
};

/* harmony default export */ __webpack_exports__["a"] = (enhance(FormAddNew));

/***/ }),
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
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(64);


/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./shared/layouts/ManageCarsLayout.jsx
var ManageCarsLayout = __webpack_require__(32);

// EXTERNAL MODULE: ./shared/forms/FormAddNew.jsx
var FormAddNew = __webpack_require__(37);

// EXTERNAL MODULE: external "recompose"
var external_recompose_ = __webpack_require__(1);

// EXTERNAL MODULE: ./shared/HOCs/FormHOCs.jsx + 7 modules
var FormHOCs = __webpack_require__(13);

// EXTERNAL MODULE: ./helper/Default.jsx
var Default = __webpack_require__(3);
var Default_default = /*#__PURE__*/__webpack_require__.n(Default);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(9);

// CONCATENATED MODULE: ./shared/forms/FormEditDelete.jsx





var enhance = Object(external_recompose_["compose"])(FormHOCs["j" /* WithSelectedCar */], FormHOCs["c" /* WithBrands */], FormHOCs["k" /* WithTypes */], FormHOCs["i" /* WithMessage */], FormHOCs["h" /* WithMainImage */], FormHOCs["e" /* WithImageSources */], FormHOCs["g" /* WithIsImagesHidden */], FormHOCs["f" /* WithIsHidden */], FormHOCs["d" /* WithFormHandlers */], router_["withRouter"], FormHOCs["b" /* FormEditDeleteLifeCycle */]);

var FormEditDelete_FormEditDelete = function FormEditDelete(_ref) {
  var selectedCar = _ref.selectedCar,
      brands = _ref.brands,
      mainImage = _ref.mainImage,
      types = _ref.types,
      message = _ref.message,
      imgSrcs = _ref.imgSrcs,
      isImagesHidden = _ref.isImagesHidden,
      isHidden = _ref.isHidden,
      handleSubmitEdit = _ref.handleSubmitEdit,
      handleSelectImage = _ref.handleSelectImage,
      handleMoveRight = _ref.handleMoveRight,
      handleMoveLeft = _ref.handleMoveLeft,
      handleImagesChange = _ref.handleImagesChange,
      handleRemoveImage = _ref.handleRemoveImage,
      handleTextChange = _ref.handleTextChange,
      handleDeleteCar = _ref.handleDeleteCar;
  return external_react_default.a.createElement("div", {
    hidden: isHidden,
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-lg-7"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-lg-12"
  }, external_react_default.a.createElement("img", {
    className: "max-width-100",
    src: mainImage,
    alt: ""
  }))), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-lg-6 margin-top-10"
  }, external_react_default.a.createElement("button", {
    hidden: isImagesHidden,
    onClick: handleMoveLeft
  }, "D\u1ECBch Tr\xE1i")), external_react_default.a.createElement("div", {
    className: "col-lg-6 margin-top-10 text-align-right"
  }, external_react_default.a.createElement("button", {
    hidden: isImagesHidden,
    onClick: handleMoveRight
  }, " ", "D\u1ECBch Ph\u1EA3i"))), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-lg-6"
  }, external_react_default.a.createElement("div", {
    className: "flex-container2"
  }, imgSrcs.map(function (src) {
    return external_react_default.a.createElement("div", {
      key: src.name,
      className: "col-lg-6 relative margin-top-10 text-align-right no-padding-left"
    }, external_react_default.a.createElement("input", {
      type: "image",
      onClick: handleRemoveImage,
      value: src.url,
      className: "absolute",
      src: Default_default.a.CloseImage,
      alt: "Close"
    }), external_react_default.a.createElement("input", {
      type: "image",
      onClick: handleSelectImage,
      src: src.url,
      className: "max-width-100"
    }));
  })))), external_react_default.a.createElement("input", {
    hidden: isImagesHidden,
    className: "margin-top-10",
    type: "file",
    onChange: handleImagesChange,
    multiple: true,
    name: "images"
  }), external_react_default.a.createElement("h4", null, message)), external_react_default.a.createElement("form", {
    id: "edit",
    className: "col-lg-4",
    onSubmit: handleSubmitEdit
  }, external_react_default.a.createElement("div", {
    className: "form-group"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("label", {
    className: "col-lg-4"
  }, "T\xEAn xe (*)"), external_react_default.a.createElement("input", {
    id: "carId",
    onChange: handleTextChange,
    type: "text",
    className: "form-control col-lg-8",
    defaultValue: selectedCar.name,
    name: "name",
    placeholder: "T\xEAn xe",
    required: true
  }))), external_react_default.a.createElement("div", {
    className: "form-group"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("label", {
    className: "col-lg-4"
  }, "Lo\u1EA1i xe (*)"), external_react_default.a.createElement("select", {
    id: "typeId",
    onChange: handleTextChange,
    name: "type",
    required: true,
    className: "form-control col-lg-8"
  }, external_react_default.a.createElement("option", {
    value: null
  }), types.map(function (type) {
    return external_react_default.a.createElement("option", {
      key: type.id,
      selected: selectedCar.typeId === type.id ? true : false,
      value: type.id
    }, type.name);
  })))), external_react_default.a.createElement("div", {
    className: "form-group"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("label", {
    className: "col-lg-4"
  }, "H\xE3ng xe (*)"), external_react_default.a.createElement("select", {
    id: "brandId",
    onChange: handleTextChange,
    name: "brand",
    required: true,
    className: "form-control col-lg-8"
  }, external_react_default.a.createElement("option", {
    value: null
  }), brands.map(function (brand) {
    return external_react_default.a.createElement("option", {
      key: brand.id,
      selected: selectedCar.brandId === brand.id ? true : false,
      value: brand.id
    }, brand.name);
  })))), external_react_default.a.createElement("div", {
    className: "form-group"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-lg-3"
  }, external_react_default.a.createElement("button", {
    onClick: handleDeleteCar,
    value: selectedCar.id,
    className: "btn btn-danger"
  }, "X\xF3a xe")), external_react_default.a.createElement("div", {
    className: "col-lg-3 offset-lg-6"
  }, external_react_default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Ch\u1EC9nh s\u1EEDa")))), external_react_default.a.createElement("input", {
    type: "text",
    hidden: true,
    name: "id",
    defaultValue: selectedCar.id
  })));
};

/* harmony default export */ var forms_FormEditDelete = (enhance(FormEditDelete_FormEditDelete));
// CONCATENATED MODULE: ./pages/admin/manage-cars/edit-delete-car.jsx





var edit_delete_car_EditDeleteCar = function EditDeleteCar() {
  return external_react_default.a.createElement(ManageCarsLayout["a" /* default */], null, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("h3", null, "Ch\u1EC9nh s\u1EEDa xe")), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement(forms_FormEditDelete, null))));
};

/* harmony default export */ var edit_delete_car = __webpack_exports__["default"] = (edit_delete_car_EditDeleteCar);

/***/ })
/******/ ]);