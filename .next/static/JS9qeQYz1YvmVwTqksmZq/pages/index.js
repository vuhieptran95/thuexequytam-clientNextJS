(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{16:function(e,t,n){"use strict";var r={MoveItemLeft:function(e,t,n){var r=e.filter(function(e){return null!==e}),a=r.findIndex(function(e){return e[n]===t});if(a<0)return!1;var o=a-1;if(o>=0){var i=r[a];return r[a]=r[o],r[o]=i,r}return!1},MoveItemRight:function(e,t,n){var r=e.filter(function(e){return null!==e}),a=r.findIndex(function(e){return e[n]===t});if(a<0)return!1;var o=a+1;if(o<r.length){var i=r[a];return r[a]=r[o],r[o]=i,r}return!1}};t.a=r},20:function(e,t,n){e.exports=n(71)},27:function(e,t,n){"use strict";(function(t){var r=n(5),a=n(74),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,s={adapter:("undefined"!=typeof XMLHttpRequest?c=n(40):void 0!==t&&(c=n(40)),c),transformRequest:[function(e,t){return a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){s.headers[e]={}}),r.forEach(["post","put","patch"],function(e){s.headers[e]=r.merge(o)}),e.exports=s}).call(this,n(69))},33:function(e,t,n){"use strict";t.a={MaxImages:function(e){return"Chỉ cho phép upload tối đa ".concat(e," ảnh")},AltTextImage:function(e,t,n){return"Thuê xe ".concat(e," ").concat(t," ").concat(n," du lịch cưới hỏi đưa đón")}}},373:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(379),{page:e.exports.default}})},379:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(44),i=(n(7),n(6)),c=n.n(i),s=n(1),u=n(4),l=n(2),f=n.n(l),m=(n(33),n(9)),d=n(13);function p(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){p(o,r,a,i,c,"next",e)}function c(e){p(o,r,a,i,c,"throw",e)}i(void 0)})}}var g=Object(s.c)("getInitialProps",h(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.collection("UI_Home").where("name","==","type").get();case 2:return t=e.sent,e.abrupt("return",{defaultTypes:t.docs[0].data().display});case 4:case"end":return e.stop()}},e,this)}))),v=Object(s.d)({handleTest:function(e){return function(){var e=h(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}}),y=Object(s.b)({componentDidMount:function(){Object(m.a)(),Object(d.a)()&&window.scroll({top:430,left:0,behavior:"smooth"})}}),E=n(108),b=n.n(E),w=function(){return a.a.createElement("div",null,a.a.createElement(b.a,null,a.a.createElement("title",null,"This is Home Page")))},x=n(3),S=n.n(x),I=n(90),N=n(24),C=n(89),j=Object(s.a)(g,v,y);t.default=j(function(e){var t=e.defaultTypes,n=e.handleTest;return a.a.createElement("div",null,a.a.createElement(I.a,null,a.a.createElement(w,null),a.a.createElement("button",{hidden:!0,className:"btn btn-primary",onClick:n},"Test only"),t&&t.map(function(e){return e&&a.a.createElement("div",{key:e.id},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-9 mt-3"},a.a.createElement("h2",null,a.a.createElement(S.a,{scroll:!1,as:"/".concat(f.a.urlType,"/").concat(e.id,"/thue-xe-").concat(Object(N.a)(e.name),"#point"),href:"/details/type-details?id=".concat(e.id)},a.a.createElement("a",{onClick:function(){return Object(m.b)()}},"Thuê xe ",e.name)))),a.a.createElement("div",{className:"col-md-3"})),a.a.createElement("div",{className:"row"},e.listCars&&e.listCars.map(function(e){return a.a.createElement("div",{key:e.id,className:"col-lg-3 col-md-6 mb-4"},a.a.createElement("div",{className:"card text-center"},a.a.createElement("img",{className:"card-img-top",src:e.thumbnail,alt:e.alt}),a.a.createElement("div",{className:"card-body"},a.a.createElement("h3",{className:"card-title font-size-15"},e.brandName," ",e.name),a.a.createElement("p",{className:"lead mb-1"},a.a.createElement("i",{className:"material-icons"},"phone_in_talk")," 0913 580 831"),a.a.createElement("p",{className:"lead mb-1"},a.a.createElement("i",{className:"material-icons"},"phone_in_talk")," 098 116 9988")),a.a.createElement("div",{className:"card-footer text-center"},a.a.createElement(C.a,{id:e.id,name:e.name,brandName:e.brandName,typeName:e.typeName,className:"btn btn-primary btn-block font-size-12"},"Chi tiết"))))})))})),a.a.createElement(o.a,null))})},39:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},40:function(e,t,n){"use strict";var r=n(5),a=n(75),o=n(77),i=n(78),c=n(79),s=n(41),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(80);e.exports=function(e){return new Promise(function(t,l){var f=e.data,m=e.headers;r.isFormData(f)&&delete m["Content-Type"];var d=new XMLHttpRequest,p="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||c(e.url)||(d=new window.XDomainRequest,p="onload",h=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var g=e.auth.username||"",v=e.auth.password||"";m.Authorization="Basic "+u(g+":"+v)}if(d.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[p]=function(){if(d&&(4===d.readyState||h)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};a(t,l,r),d=null}},d.onerror=function(){l(s("Network Error",e,null,d)),d=null},d.ontimeout=function(){l(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(81),E=(e.withCredentials||c(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;E&&(m[e.xsrfHeaderName]=E)}if("setRequestHeader"in d&&r.forEach(m,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete m[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),l(e),d=null)}),void 0===f&&(f=null),d.send(f)})}},41:function(e,t,n){"use strict";var r=n(76);e.exports=function(e,t,n,a,o){var i=new Error(e);return r(i,t,n,a,o)}},42:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},43:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},44:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n(13),c=Object(o.b)({componentDidMount:function(){Object(i.a)()||this.setState({fontSize:"font-size-11"})}});t.a=c(function(e){var t=e.fontSize;return a.a.createElement("footer",{className:"py-0 bg-primary"},a.a.createElement("div",{className:"container ".concat(t)},a.a.createElement("p",{className:"m-0 text-center text-white"},"Công ty TNHH vận tải - du lịch và thương mại Quý Tâm"),a.a.createElement("p",{className:"m-0 text-center text-white"},"Trụ sở: 84 + 86 Đường Ngọc Hồi - Quốc Bảo - Văn Điển - Thanh Trì - Hà Nội"),a.a.createElement("p",{className:"m-0 text-center text-white"},"Hotline: ",a.a.createElement("a",{href:"tel:0913 580 831"},"0913 580 831")," - ",a.a.createElement("a",{href:"tel:098 116 9988"},"098 116 9988"))))})},5:function(e,t,n){"use strict";var r=n(39),a=n(72),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function c(e){return null!==e&&"object"==typeof e}function s(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:a,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:s,isStream:function(e){return c(e)&&s(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,a=arguments.length;r<a;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},7:function(e,t,n){"use strict";var r=n(1),a=n(4),o=n(20),i=n.n(o),c="http://localhost:2610/",s=n(2),u=n.n(s);function l(e,t){return new Promise(function(n,r){var a=document.createElement("img"),o=new FileReader;o.onload=function(e){a.onload=function(){var e=document.createElement("canvas"),r=e.getContext("2d"),o=t/u.a.ImageRatio;e.width=t,e.height=o,r.drawImage(a,0,0,t,o),e.toBlob(function(e){return n(e)},"image/jpeg")},a.src=e.target.result},o.readAsDataURL(e)})}var f={SUCCESS:"SUCCESS",FAILED:"FAILED",PROCESSING:"PROCESSING"},m=n(33);var d={MaxImages:function(e,t){return e.length>t?m.a.MaxImages(t):f.SUCCESS},ValidateImages:function(e){var t="",n=!0,r=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value;"image/jpeg"!==c.type&&(t+="".concat(c.name,". "))}}catch(e){r=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}if(""==!t)return t+"không phải là ảnh";var s=!0,u=!1,l=void 0;try{for(var m,d=e[Symbol.iterator]();!(s=(m=d.next()).done);s=!0){var p=m.value;p.size>8388608&&(t+="".concat(p.name,". "))}}catch(e){u=!0,l=e}finally{try{s||null==d.return||d.return()}finally{if(u)throw l}}return""==!t?t+"vượt quá dung lượng 8 MB":f.SUCCESS}},p=n(16),h=n(6),g=n.n(h);function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}var b={ImageSrcsToImageUrls:function(e){var t=[];return e.forEach(function(e){return t.push(e.url)}),t},ListCarsPromiseToListCars:function(){var e,t=(e=g.a.mark(function e(t){var n,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t);case 2:return n=e.sent,r=[],n.forEach(function(e){r.push(v({id:e.id},e.data()))}),console.log(r),e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){E(o,r,a,i,c,"next",e)}function c(e){E(o,r,a,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()},w=function(e){var t="";document.getElementById("carId").value&&(t=document.getElementById("carId").value);var n="";document.getElementById("typeId").value&&(n=document.getElementById("typeId").value);var r="";document.getElementById("brandId").value&&(r=document.getElementById("brandId").value),e(""==t||""==n||""==r)};function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){S(e,t,n[t])})}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"j",function(){return N}),n.d(t,"c",function(){return C}),n.d(t,"k",function(){return j}),n.d(t,"i",function(){return O}),n.d(t,"h",function(){return T}),n.d(t,"e",function(){return R}),n.d(t,"g",function(){return A}),n.d(t,"f",function(){return B}),n.d(t,"d",function(){return D}),n.d(t,"b",function(){return P}),n.d(t,"a",function(){return M});var N=Object(r.e)("selectedCar","updateSelectedCar",{}),C=Object(r.e)("brands","updateBrands",[]),j=Object(r.e)("types","updateTypes",[]),O=Object(r.e)("message","updateMessage",""),T=Object(r.e)("mainImage","updateMainImage",u.a.MainImage),R=Object(r.e)("imgSrcs","updateImgSrcs",[]),A=Object(r.e)("isImagesHidden","updateIsImagesHidden",!0),B=Object(r.e)("isHidden","updateIsHidden",!0),D=Object(r.d)({handleSubmitAddNew:function(e){return function(t){t.preventDefault();var n=new FormData(document.getElementById("addnew"));n.append("images",b.ImageSrcsToImageUrls(e.imgSrcs)),n.append("mainImage",e.mainImage),i.a.post("".concat(c,"cars"),n).then(console.log)}},handleSubmitEdit:function(e){return function(t){t.preventDefault();var n=new FormData(document.getElementById("edit"));n.append("images",b.ImageSrcsToImageUrls(e.imgSrcs)),n.append("mainImage",e.mainImage),i.a.put("".concat(c,"cars/").concat(e.selectedCar.id),n).then(console.log)}},handleSelectImage:function(e){return function(t){t.preventDefault(),e.updateMainImage(t.target.src)}},handleRemoveImage:function(e){return function(t){t.preventDefault();var n=t.target.value;e.mainImage===n&&e.updateMainImage(u.a.MainImage);var r=e.imgSrcs.filter(function(e){return e.url!==n});e.updateImgSrcs(r)}},handleMoveLeft:function(e){return function(t){var n=p.a.MoveItemLeft(e.imgSrcs,e.mainImage,"url");n&&e.updateImgSrcs(n)}},handleMoveRight:function(e){return function(t){var n=p.a.MoveItemRight(e.imgSrcs,e.mainImage,"url");n&&e.updateImgSrcs(n)}},handleImagesChange:function(e){return function(t){try{var n=t.target.files,r=e.imgSrcs.length,a=u.a.MaxNumberOfImages-r,o=d.MaxImages(n,a);if(o!==f.SUCCESS)return void e.updateMessage(o);if(0!=n.length){if((o=d.ValidateImages(n))!==f.SUCCESS)return void e.updateMessage(o);var s=new FormData(document.getElementById("addnew")?document.getElementById("addnew"):document.getElementById("edit")),m=[],p=!0,h=!1,g=void 0;try{for(var v,y=n[Symbol.iterator]();!(p=(v=y.next()).done);p=!0){var E=l(v.value,800);m.push(E)}}catch(e){h=!0,g=e}finally{try{p||null==y.return||y.return()}finally{if(h)throw g}}Promise.all(m).then(function(t){t.forEach(function(e){return s.append("images",e)}),i.a.post("".concat(c,"images"),s).then(function(t){e.updateImgSrcs(I(e.imgSrcs).concat(I(t.data)))})})}}catch(t){e.updateMessage(t)}}},handleTextChange:function(e){return function(t){w(e.updateIsImagesHidden)}},handleDeleteCar:function(e){return function(t){if(t.preventDefault(),window.confirm("Muốn xóa thật không?")){var n=t.target.value;a.a.collection("cars").doc(n).delete().then(function(){e.updateSelectedCar({}),e.updateImgSrcs([]),e.updateMainImage(u.a.MainImage)})}}}}),P=Object(r.b)({componentDidMount:function(){var e=this;this.props.router.query.id&&(this.props.updateIsHidden(!1),a.a.collection("cars").doc(this.props.router.query.id).get().then(function(t){if(t.exists){var n=x({id:t.id},t.data());e.props.updateSelectedCar(n);var r=n.images.map(function(e){return{name:Math.random().toString(),url:e}}),a=n.mainImage;e.props.updateImgSrcs(r),e.props.updateMainImage(a),w(e.props.updateIsImagesHidden)}}),a.a.collection("brands").onSnapshot(function(t){var n=[];t.forEach(function(e){return n.push(x({id:e.id},e.data()))}),e.setState({brands:n}),w(e.props.updateIsImagesHidden)}),a.a.collection("types").onSnapshot(function(t){var n=[];t.forEach(function(e){return n.push(x({id:e.id},e.data()))}),e.setState({types:n}),w(e.props.updateIsImagesHidden)}))}}),M=Object(r.b)({componentDidMount:function(){var e=this;a.a.collection("brands").onSnapshot(function(t){var n=[];t.forEach(function(e){return n.push(x({id:e.id},e.data()))}),e.setState({brands:n})}),a.a.collection("types").onSnapshot(function(t){var n=[];t.forEach(function(e){return n.push(x({id:e.id},e.data()))}),e.setState({types:n})})}})},71:function(e,t,n){"use strict";var r=n(5),a=n(39),o=n(73),i=n(27);function c(e){var t=new o(e),n=a(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var s=c(i);s.Axios=o,s.create=function(e){return c(r.merge(i,e))},s.Cancel=n(43),s.CancelToken=n(87),s.isCancel=n(42),s.all=function(e){return Promise.all(e)},s.spread=n(88),e.exports=s,e.exports.default=s},72:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},73:function(e,t,n){"use strict";var r=n(27),a=n(5),o=n(82),i=n(83);function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),(e=a.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){c.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=c},74:function(e,t,n){"use strict";var r=n(5);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},75:function(e,t,n){"use strict";var r=n(41);e.exports=function(e,t,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},76:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e}},77:function(e,t,n){"use strict";var r=n(5);function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var i=[];r.forEach(t,function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(a(t)+"="+a(e))}))}),o=i.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},78:function(e,t,n){"use strict";var r=n(5),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(i[t]&&a.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},79:function(e,t,n){"use strict";var r=n(5);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},80:function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function a(){this.message="String contains an invalid character"}a.prototype=new Error,a.prototype.code=5,a.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,o=String(e),i="",c=0,s=r;o.charAt(0|c)||(s="=",c%1);i+=s.charAt(63&t>>8-c%1*8)){if((n=o.charCodeAt(c+=.75))>255)throw new a;t=t<<8|n}return i}},81:function(e,t,n){"use strict";var r=n(5);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,o,i){var c=[];c.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),r.isString(a)&&c.push("path="+a),r.isString(o)&&c.push("domain="+o),!0===i&&c.push("secure"),document.cookie=c.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},82:function(e,t,n){"use strict";var r=n(5);function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=a},83:function(e,t,n){"use strict";var r=n(5),a=n(84),o=n(42),i=n(27),c=n(85),s=n(86);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!c(e.url)&&(e.url=s(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return u(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(u(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},84:function(e,t,n){"use strict";var r=n(5);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},85:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},86:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},87:function(e,t,n){"use strict";var r=n(43);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a(function(t){e=t}),cancel:e}},e.exports=a},88:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},90:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(56),i=n(57),c=(n(185),n(9),function(){return a.a.createElement("div",null,a.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},a.a.createElement("div",{className:"carousel-inner",role:"listbox"},a.a.createElement("div",{className:"carousel-item active"},a.a.createElement("div",{className:"jumbotron myjumbotron jumbotron-fluid mb-1 flex-container text-align-left text-light"},a.a.createElement("div",{className:"ml-3 mr-3"},a.a.createElement("h1",{className:"mt-2"},"Công ty TNHH vận tải - du lịch và thương mại Quý Tâm",a.a.createElement("br",null)),a.a.createElement("div",{className:"info mt-4 ml-2"},a.a.createElement("p",null,a.a.createElement("i",{className:"material-icons mr-3"},"location_on"),"Địa chỉ: 41 Tổ 2 Quốc Bảo - Văn Điển - Thanh Trì - Hà Nội"),a.a.createElement("p",null,a.a.createElement("i",{className:"material-icons mr-3"},"location_city"),"Trụ sở: 84 + 86 Đường Ngọc Hồi - Quốc Bảo - Văn Điển - Thanh Trì - Hà Nội"),a.a.createElement("p",null,a.a.createElement("i",{className:"material-icons mr-3"},"phone_in_talk"),"Hotline: ",a.a.createElement("a",{href:"tel:0913 580 831"},"0913 580 831")," - ",a.a.createElement("a",{href:"tel:098 116 9988"},"098 116 9988")),a.a.createElement("p",null,a.a.createElement("img",{className:"mr-3 pb-2",src:"https://storage.googleapis.com/thuexequytam-firebase/default-images/facebook-box_2.png",alt:"logo"}),"Facebook: ",a.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100005097907757"},"QUY TAM CO., LTD")))))),a.a.createElement("div",{className:"carousel-item"},a.a.createElement("div",{className:"jumbotron myjumbotron myjumbotron2 jumbotron-fluid mb-1 flex-container text-light"},a.a.createElement("div",{className:"ml-3 mr-3"},a.a.createElement("h1",{className:"mt-2"},a.a.createElement("img",{className:"logo",src:"https://storage.googleapis.com/thuexequytam-firebase/default-images/logo3.png",alt:""}),"QUY TAM CO., LTD",a.a.createElement("br",null)),a.a.createElement("div",{className:"info mt-4 ml-2"},a.a.createElement("p",null,a.a.createElement("i",{className:"material-icons mr-3"},"receipt"),"Nhận hợp đồng xe du lịch - xe ô tô tự lái"),a.a.createElement("p",null,a.a.createElement("i",{className:"material-icons mr-3"},"receipt"),"Nhận hợp đồng tham quan du lịch - lễ hội - hiếu hỷ"),a.a.createElement("p",null,a.a.createElement("i",{className:"material-icons mr-3"},"folder_shared"),"Nhận hồ sơ học lái xe ô tô - xe máy"),a.a.createElement("p",null,a.a.createElement("i",{className:"material-icons mr-3"},"folder_shared"),"Nhận nâng cấp đổi bằng lái xe ô tô: C - D - E - F")))))),a.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},a.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),a.a.createElement("span",{className:"sr-only"},"Previous")),a.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},a.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),a.a.createElement("span",{className:"sr-only"},"Next"))))}),s=n(59),u=n(58);t.a=function(e){return a.a.createElement("div",{style:{minHeight:"100vh"}},a.a.createElement(o.a,null),a.a.createElement(i.a,null),a.a.createElement(c,null),a.a.createElement("div",{className:"container mybody"},a.a.createElement(s.a,null),a.a.createElement(u.a,null),e.children))}}},[[373,1,0,2]]]);