(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{16:function(e,t,a){"use strict";var n={MoveItemLeft:function(e,t,a){var n=e.filter(function(e){return null!==e}),r=n.findIndex(function(e){return e[a]===t});if(r<0)return!1;var c=r-1;if(c>=0){var i=n[r];return n[r]=n[c],n[c]=i,n}return!1},MoveItemRight:function(e,t,a){var n=e.filter(function(e){return null!==e}),r=n.findIndex(function(e){return e[a]===t});if(r<0)return!1;var c=r+1;if(c<n.length){var i=n[r];return n[r]=n[c],n[c]=i,n}return!1}};t.a=n},369:function(e,t,a){__NEXT_REGISTER_PAGE("/admin/manage-ui/home-ui",function(){return e.exports=a(380),{page:e.exports.default}})},380:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),l=a(15),o=a(30),u=Object(l.withRouter)(function(e){var t=e.router.route;return r.a.createElement(o.a,null,r.a.createElement("ul",{className:"nav nav-pills margin-top-30"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.a,{prefetch:!0,href:"/admin/manage-ui/home-ui"},r.a.createElement("a",{className:"nav-link ".concat(t.includes("/admin/manage-ui/home-ui")?"active":"")},"Trang chủ")))),r.a.createElement("div",{className:"mt-4"},e.children))}),d=a(1),m=a(6),s=a.n(m),f=a(4),p=a(2),h=a.n(p),v=a(16);function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){b(e,t,a[t])})}return e}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e,t,a,n,r,c,i){try{var l=e[c](i),o=l.value}catch(e){return void a(e)}l.done?t(o):Promise.resolve(o).then(n,r)}function g(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var c=e.apply(t,a);function i(e){y(c,n,r,i,l,"next",e)}function l(e){y(c,n,r,i,l,"throw",e)}i(void 0)})}}var E,U=Object(d.e)("homeUI","updateHomeUI",[]),C=Object(d.e)("selectedCarUI","updateSelectedCarUI",{typeId:"",carId:""}),w=Object(d.e)("defaultType","updateDefaultType",h.a.DefaultType),N=Object(d.d)({handleSubmit:function(e){return function(t){var a,n=1;e.homeUI.forEach(function(e){f.a.collection("types").doc(e.id).update({order:n++}),a=1,e.listCars.forEach(function(e){f.a.collection("cars").doc(e.id).update({order:a++})})}),console.log(n,a),f.a.collection("UI_Home").doc(h.a.HomeUIDocId).update({display:e.homeUI})}},handleSelectCar:function(e){return function(t){t.preventDefault(),t.target.name==e.selectedCarUI.typeId&&t.target.value==e.selectedCarUI.carId?e.updateSelectedCarUI({typeId:"",carId:""}):e.updateSelectedCarUI({typeId:t.target.name,carId:t.target.value})}},handleMoveLeft:function(e){return function(t){t.preventDefault();var a=e.homeUI.find(function(t){return t.id===e.selectedCarUI.typeId}),n=v.a.MoveItemLeft(a.listCars,e.selectedCarUI.carId,"id");n&&(a.listCars=n,e.updateHomeUI(e.homeUI))}},handleMoveRight:function(e){return function(t){t.preventDefault();var a=e.homeUI.find(function(t){return t.id===e.selectedCarUI.typeId}),n=v.a.MoveItemRight(a.listCars,e.selectedCarUI.carId,"id");n&&(a.listCars=n,e.updateHomeUI(e.homeUI))}},handleMoveUp:function(e){return function(t){t.preventDefault();var a=v.a.MoveItemLeft(e.homeUI,e.selectedCarUI.typeId,"id");a&&e.updateHomeUI(a)}},handleMoveDown:function(e){return function(t){t.preventDefault();var a=v.a.MoveItemRight(e.homeUI,e.selectedCarUI.typeId,"id");a&&e.updateHomeUI(a)}}}),k=Object(d.b)({componentDidMount:(E=g(s.a.mark(function e(){var t,a,n,r,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.collection("types").orderBy("order","asc").get();case 2:return t=e.sent,a=t.docs.map(function(){var e=g(s.a.mark(function e(t){var a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.collection("cars").where("typeId","==",t.id).orderBy("order","asc").get();case 2:return a=e.sent,n=a.docs.map(function(e){return I({id:e.id},e.data(),{type:"",brand:""})}),e.abrupt("return",{id:t.id,name:t.data().name,listCars:n});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),Promise.all(a).then(this.props.updateHomeUI),e.next=7,f.a.collection("cars").where("typeId","==",h.a.DefaultType.id).get();case 7:n=e.sent,r=[],n.forEach(function(e){return r.push(I({},e.data(),{type:"",brand:""}))}),c=I({},h.a.DefaultType,{listCars:r}),this.props.updateDefaultType(c);case 12:case"end":return e.stop()}},e,this)})),function(){return E.apply(this,arguments)})}),D=Object(d.a)(U,C,w,N,k);t.default=D(function(e){var t=e.homeUI,a=e.defaultType,n=e.selectedCarUI,c=e.handleSelectCar,l=e.handleMoveLeft,o=e.handleMoveRight,d=e.handleMoveUp,m=e.handleMoveDown,s=e.handleSubmit;return r.a.createElement(u,null,r.a.createElement("button",{className:"btn btn-success mb-3",onClick:s},"Lưu thay đổi"),t.map(function(e){return r.a.createElement("div",{className:n.typeId===e.id?"border border-danger rounded img-thumbnail":"",key:e.id},r.a.createElement("button",{hidden:n.typeId!==e.id,className:"btn btn-primary",href:"",onClick:d},"UP"),r.a.createElement("h4",{className:"ml-2 mr-2 inline"},e.name),r.a.createElement("button",{hidden:n.typeId!==e.id,className:"btn btn-primary",href:"",onClick:m},"DOWN"),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{hidden:n.typeId!==e.id,className:"col-lg-2 col-sm-4 col-6 mb-2 mt-3"},r.a.createElement("a",{href:"",onClick:l},"RIGHT")),e.listCars.map(function(t){return r.a.createElement("div",{key:t.id,className:"col-lg-2 col-sm-4 col-6 mb-2"},r.a.createElement("input",{type:"image",onClick:c,name:e.id,value:t.id,className:"img-fluid ".concat(n.carId===t.id?"border border-success img-thumbnail":""),src:t.thumbnail,alt:""}),r.a.createElement(i.a,{prefetch:!0,href:"/admin/manage-cars/edit-delete-car?id=".concat(t.id)},r.a.createElement("a",null,r.a.createElement("h5",null,t.name))))}),r.a.createElement("div",{hidden:n.typeId!==e.id,className:"col-lg-2 col-sm-4 col-6 mb-2 mt-3"},r.a.createElement("a",{href:"",onClick:o},"LEFT"))))}),r.a.createElement("div",{key:a.id},r.a.createElement("h4",{className:"ml-2 mr-2 inline"},a.name),r.a.createElement("div",{className:"row mt-4"},a.listCars.map(function(e){return r.a.createElement("div",{key:e.id,className:"col-lg-2 col-sm-4 col-6 mb-2"},r.a.createElement("input",{type:"image",onClick:c,name:a.id,value:e.id,className:"img-fluid ".concat(n.carId===e.id?"border border-success img-thumbnail":""),src:e.thumbnail,alt:""}),r.a.createElement(i.a,{prefetch:!0,href:"/admin/manage-cars/edit-delete-car?id=".concat(e.id)},r.a.createElement("a",null,r.a.createElement("h5",null,e.name))))}))))})}},[[369,1,0,2]]]);