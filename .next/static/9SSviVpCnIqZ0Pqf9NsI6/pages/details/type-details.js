(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{371:function(e,a,t){__NEXT_REGISTER_PAGE("/details/type-details",function(){return e.exports=t(382),{page:e.exports.default}})},382:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(90),c=t(1),m=t(6),i=t.n(m),s=t(4),o=(t(70),t(9)),u=t(13);function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(a){p(e,a,t[a])})}return e}function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function E(e,a,t,n,r,l,c){try{var m=e[l](c),i=m.value}catch(e){return void t(e)}m.done?a(i):Promise.resolve(i).then(n,r)}var h=Object(c.c)("getInitialProps",function(){var e,a=(e=i.a.mark(function e(a){var t,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.collection("cars").where("typeId","==",a.query.id).get();case 2:return t=e.sent,n=t.docs.map(function(e){return d({},e.data(),{type:"",brand:""})}),r=n[0].typeName,e.abrupt("return",{typeWithCars:{id:a.query.id,name:r,cars:n}});case 6:case"end":return e.stop()}},e,this)}),function(){var a=this,t=arguments;return new Promise(function(n,r){var l=e.apply(a,t);function c(e){E(l,n,r,c,m,"next",e)}function m(e){E(l,n,r,c,m,"throw",e)}c(void 0)})});return function(e){return a.apply(this,arguments)}}()),f=Object(c.b)({componentDidMount:function(){Object(o.a)(),Object(u.a)()&&window.scroll({top:430,left:0,behavior:"smooth"})},componentWillReceiveProps:function(){Object(o.a)()}}),N=(t(3),t(44)),b=t(89),v=Object(c.a)(h,f);a.default=v(function(e){var a=e.typeWithCars;e.message,e.handleTest;return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement("div",{key:a.id},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9 mt-3"},r.a.createElement("h2",null,"Thuê xe ",a.name)),r.a.createElement("div",{className:"col-md-3"})),r.a.createElement("div",{className:"row"},a.cars&&a.cars.map(function(e){return r.a.createElement("div",{key:e.id,className:"col-lg-3 col-md-6 mb-4"},r.a.createElement("div",{className:"card text-center"},r.a.createElement("img",{className:"card-img-top",src:e.thumbnail,alt:e.alt}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title font-size-15"},e.brandName," ",e.name),r.a.createElement("p",{className:"lead mb-1"},r.a.createElement("i",{className:"material-icons"},"phone_in_talk")," 0913 580 831"),r.a.createElement("p",{className:"lead mb-1"},r.a.createElement("i",{className:"material-icons"},"phone_in_talk")," 098 116 9988")),r.a.createElement("div",{className:"card-footer text-center"},r.a.createElement(b.a,{id:e.id,name:e.name,brandName:e.brandName,typeName:e.typeName,className:"btn btn-primary btn-block font-size-12"},"Chi tiết"))))})))),r.a.createElement(N.a,null))})},44:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(1),c=t(13),m=Object(l.b)({componentDidMount:function(){Object(c.a)()||this.setState({fontSize:"font-size-11"})}});a.a=m(function(e){var a=e.fontSize;return r.a.createElement("footer",{className:"py-0 bg-primary"},r.a.createElement("div",{className:"container ".concat(a)},r.a.createElement("p",{className:"m-0 text-center text-white"},"Công ty TNHH vận tải - du lịch và thương mại Quý Tâm"),r.a.createElement("p",{className:"m-0 text-center text-white"},"Trụ sở: 84 + 86 Đường Ngọc Hồi - Quốc Bảo - Văn Điển - Thanh Trì - Hà Nội"),r.a.createElement("p",{className:"m-0 text-center text-white"},"Hotline: ",r.a.createElement("a",{href:"tel:0913 580 831"},"0913 580 831")," - ",r.a.createElement("a",{href:"tel:098 116 9988"},"098 116 9988"))))})},90:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(56),c=t(57),m=(t(185),t(9),function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner",role:"listbox"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("div",{className:"jumbotron myjumbotron jumbotron-fluid mb-1 flex-container text-align-left text-light"},r.a.createElement("div",{className:"ml-3 mr-3"},r.a.createElement("h1",{className:"mt-2"},"Công ty TNHH vận tải - du lịch và thương mại Quý Tâm",r.a.createElement("br",null)),r.a.createElement("div",{className:"info mt-4 ml-2"},r.a.createElement("p",null,r.a.createElement("i",{className:"material-icons mr-3"},"location_on"),"Địa chỉ: 41 Tổ 2 Quốc Bảo - Văn Điển - Thanh Trì - Hà Nội"),r.a.createElement("p",null,r.a.createElement("i",{className:"material-icons mr-3"},"location_city"),"Trụ sở: 84 + 86 Đường Ngọc Hồi - Quốc Bảo - Văn Điển - Thanh Trì - Hà Nội"),r.a.createElement("p",null,r.a.createElement("i",{className:"material-icons mr-3"},"phone_in_talk"),"Hotline: ",r.a.createElement("a",{href:"tel:0913 580 831"},"0913 580 831")," - ",r.a.createElement("a",{href:"tel:098 116 9988"},"098 116 9988")),r.a.createElement("p",null,r.a.createElement("img",{className:"mr-3 pb-2",src:"https://storage.googleapis.com/thuexequytam-firebase/default-images/facebook-box_2.png",alt:"logo"}),"Facebook: ",r.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100005097907757"},"QUY TAM CO., LTD")))))),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("div",{className:"jumbotron myjumbotron myjumbotron2 jumbotron-fluid mb-1 flex-container text-light"},r.a.createElement("div",{className:"ml-3 mr-3"},r.a.createElement("h1",{className:"mt-2"},r.a.createElement("img",{className:"logo",src:"https://storage.googleapis.com/thuexequytam-firebase/default-images/logo3.png",alt:""}),"QUY TAM CO., LTD",r.a.createElement("br",null)),r.a.createElement("div",{className:"info mt-4 ml-2"},r.a.createElement("p",null,r.a.createElement("i",{className:"material-icons mr-3"},"receipt"),"Nhận hợp đồng xe du lịch - xe ô tô tự lái"),r.a.createElement("p",null,r.a.createElement("i",{className:"material-icons mr-3"},"receipt"),"Nhận hợp đồng tham quan du lịch - lễ hội - hiếu hỷ"),r.a.createElement("p",null,r.a.createElement("i",{className:"material-icons mr-3"},"folder_shared"),"Nhận hồ sơ học lái xe ô tô - xe máy"),r.a.createElement("p",null,r.a.createElement("i",{className:"material-icons mr-3"},"folder_shared"),"Nhận nâng cấp đổi bằng lái xe ô tô: C - D - E - F")))))),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))))}),i=t(59),s=t(58);a.a=function(e){return r.a.createElement("div",{style:{minHeight:"100vh"}},r.a.createElement(l.a,null),r.a.createElement(c.a,null),r.a.createElement(m,null),r.a.createElement("div",{className:"container mybody"},r.a.createElement(i.a,null),r.a.createElement(s.a,null),e.children))}}},[[371,1,0,2]]]);