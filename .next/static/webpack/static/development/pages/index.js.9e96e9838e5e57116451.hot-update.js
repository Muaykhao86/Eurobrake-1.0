webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/*! exports provided: NavStyles, Rotate, Burger, TopBun, HiddenNavBG, HiddenContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavStyles", function() { return NavStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rotate", function() { return Rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Burger", function() { return Burger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBun", function() { return TopBun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenNavBG", function() { return HiddenNavBG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenContainer", function() { return HiddenContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _BaseAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseAnimation */ "./components/styles/BaseAnimation.js");


var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles",
  componentId: "sc-1ltvdnj-0"
})(["display:flex;position:absolute;transform:translateX(-20rem);z-index:200;"]);
var Rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["100%{transform:rotate(360deg);}"]);
var Rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_BaseAnimation__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "NavStyles__Rotate",
  componentId: "sc-1ltvdnj-1"
})(["animation-name:", ";transform-origin:center center;"], Rotate360);
var Burger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles__Burger",
  componentId: "sc-1ltvdnj-2"
})(["position:absolute;top:-4rem;left:5rem;margin:0 1rem;width:6rem;height:8rem;cursor:pointer;display:flex;align-items:center;z-index:300;transition:all .6s linear;"]);
var trans = {
  up: 'translateY(1.2rem)',
  stay: 'translateY(0)',
  down: 'translateY(-1.2rem)',
  spin0: 'rotate(0)',
  spin90: 'rotate(90deg)',
  spin315: 'rotate(315deg)',
  scale100: 'scale(107)',
  scale0: 'scale(0)',
  "in": 'transform .6s cubic-bezier(0.22, 0.61, 0.36, 1) .3s',
  out: 'transform .6s cubic-bezier(.55,.055,.675,.19); .3 '
};
var TopBun = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles__TopBun",
  componentId: "sc-1ltvdnj-3"
})(["position:relative;width:100%;height:.3rem;transition:", ";background-color:", ";transform:", ";&:before{width:100%;height:100%;position:absolute;transition:top .2s ease-out,transform .22s cubic-bezier(.215,.61,.355,1) .12s;top:", ";content:'';transform:", ";border-bottom:3px solid ", ";}&:after{border-bottom:3px solid ", ";width:100%;height:100%;position:absolute;content:'';transition:top .2s ease-out;top:", ";}"], function (props) {
  return props.isOpen ? trans["in"] : trans.out;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.isOpen ? trans.spin315 : trans.spin0;
}, function (props) {
  return props.isOpen ? 0 : '-1.6rem';
}, function (props) {
  return props.isOpen ? trans.spin90 : trans.spin0;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.isOpen ? 0 : '1.6rem';
});
var HiddenNavBG = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles__HiddenNavBG",
  componentId: "sc-1ltvdnj-4"
})(["background-color:", ";position:absolute;top:-3rem;left:8rem;width:5rem;height:5rem;border-radius:50%;transition:transform .8s ease-in-out;transform:", ";"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.isOpen ? trans.scale100 : trans.scale0;
});
var HiddenContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles__HiddenContainer",
  componentId: "sc-1ltvdnj-5"
})(["border:10px solid white;position:absolute;right:-20rem;top:-5rem;display:flex;align-items:flex-start;justify-content:flex-start;flex-flow:column;padding:2rem;transition:all .8s ease-in-out;opacity:", ";transform:", ";min-width:99vw;min-height:99vh;@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){min-height:27vh;}.nav{&-title{font-size:2rem;font-family:", ";color:", ";&-box{display:flex;flex-flow:column;align-items:flex-start;margin-bottom:3rem;}}&-links{font-size:2rem;font-family:", ";color:", ";&-box{display:flex;flex-flow:column;align-items:flex-start;margin-bottom:3rem;}}&_container-1{width:100%;border:10px solid white;height:100%;display:flex;flex-flow:row;flex:1 1 auto;justify-content:space-between;@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){margin-top:0;}}&-inner{display:flex;flex-flow:column;&-title{font-size:3rem;font-family:", ";color:", ";}&-text{font-size:3rem;font-family:", ";color:", ";}}&_box-1{margin-left:5rem;padding:2rem;width:70%;max-height:20rem;flex:1 1 auto;border:10px solid white;display:flex;justify-content:space-between;align-items:flex-end;@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){padding:0;margin:0;}}&_box-middle{height:50rem;max-width:95rem;flex:1 1 auto;border:10px solid white;margin:2rem;padding:2rem;display:flex;flex-flow:row;justify-content:space-between;&-1{display:flex;flex-flow:column;width:26rem;height:50rem;}&-2{width:26rem;height:50rem;}&-3{width:18rem;height:50rem;}}&_box-right{border:10px solid white;height:50rem;max-width:30rem;flex:1 1 auto;margin:2rem;display:flex;flex-flow:column;align-items:center;justify-content:space-between;}&_box-left{border:10px solid white;height:50rem;max-width:30rem;flex:1 1 auto;margin:2rem;display:flex;flex-flow:column;align-items:center;justify-content:space-between;}&_box-bottom{margin-left:5rem;display:flex;flex-flow:row;align-items:flex-end;&-text{margin-right:2rem;}}}"], function (props) {
  return props.isOpen ? '1' : '0';
}, function (props) {
  return props.isOpen ? null : 'translateX(-250rem)';
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.MPBlackIt;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.MPSemibold;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.white;
});

/***/ })

})
//# sourceMappingURL=index.js.9e96e9838e5e57116451.hot-update.js.map