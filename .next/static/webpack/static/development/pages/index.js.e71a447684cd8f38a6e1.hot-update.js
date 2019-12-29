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
})(["display:flex;position:absolute;transform:translateX(-20rem);z-index:200;a{font-family:", ";font-size:1.6rem;color:", ";margin:1rem;text-transform:uppercase;cursor:pointer;z-index:100;}"], function (props) {
  return props.theme.MPBold;
}, function (props) {
  return props.sticky ? props.theme.white : props.theme.secondary;
});
var Rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["100%{transform:rotate(360deg);}"]);
var Rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_BaseAnimation__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "NavStyles__Rotate",
  componentId: "sc-1ltvdnj-1"
})(["animation-name:", ";transform-origin:center center;"], Rotate360);
var Burger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles__Burger",
  componentId: "sc-1ltvdnj-2"
})(["margin:0 1rem;width:4rem;height:4rem;cursor:pointer;display:flex;align-items:center;z-index:300;transition:all 10s linear;"]);
var trans = {
  up: 'translateY(1.2rem)',
  stay: 'translateY(0)',
  down: 'translateY(-1.2rem)',
  spin0: 'rotate(0)',
  spin90: 'rotate(-90deg)',
  spin315: 'rotate(-315deg)',
  scale100: 'scale(100)',
  scale0: 'scale(0)',
  "in": 'transform .6s cubic-bezier(0.22, 0.61, 0.36, 1) .3s',
  out: 'transform .6s cubic-bezier(.55,.055,.675,.19); .3 '
};
var TopBun = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles__TopBun",
  componentId: "sc-1ltvdnj-3"
})(["position:relative;width:100%;height:.2rem;transition:", ";background-color:", ";transform:", ";&:before{width:100%;height:100%;position:absolute;transition:top .2s ease-out,transform .22s cubic-bezier(.215,.61,.355,1) .12s;top:", ";content:'';transform:", ";border-bottom:2px solid ", ";}&:after{border-bottom:2px solid ", ";width:100%;height:100%;position:absolute;content:'';transition:top .2s ease-out;top:", ";}"], function (props) {
  return props.isOpen ? trans["in"] : trans.out;
}, function (props) {
  return props.sticky ? props.theme.white : props.theme.secondary;
}, function (props) {
  return props.isOpen ? trans.spin315 : trans.spin0;
}, function (props) {
  return props.isOpen ? 0 : '-1.2rem';
}, function (props) {
  return props.isOpen ? trans.spin90 : trans.spin0;
}, function (props) {
  return props.sticky ? props.theme.white : props.theme.secondary;
}, function (props) {
  return props.sticky ? props.theme.white : props.theme.secondary;
}, function (props) {
  return props.isOpen ? 0 : '1.2rem';
});
var HiddenNavBG = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles__HiddenNavBG",
  componentId: "sc-1ltvdnj-4"
})(["background-color:", ";position:absolute;top:-4rem;right:0rem;width:5rem;height:5rem;border-radius:50%;transition:transform .8s ease-in-out;transform:", ";"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.isOpen ? trans.scale100 : trans.scale0;
});
var HiddenContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles__HiddenContainer",
  componentId: "sc-1ltvdnj-5"
})(["position:absolute;right:-15rem;top:0;display:flex;min-width:90vw;min-height:90vh;padding:2rem;margin:2rem;transition:all .8s ease-in-out;transform:", ";a,.Nav-title{font-size:3rem;@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){width:", ";}}.Nav-title{margin-left:1rem;}.nav_box-1{border:2px solid white;padding:2rem;margin:2rem;display:flex;flex-flow:column;align-items:flex-start;}.nav_box-2{border:2px solid white;padding:2rem;margin:2rem;margin-right:auto;display:flex;flex-flow:column;align-items:flex-start;}.nav_box-3{border:2px solid white;padding:2rem;margin:2rem;display:flex;flex-flow:column;align-items:center;justify-content:space-around;}.nav_box-4{border:2px solid white;padding:2rem;margin:2rem;min-height:15rem;min-width:15rem;}.nav_box-5{border:2px solid white;padding:2rem;margin:2rem;min-height:15rem;min-width:15rem;}.nav_box-6{border:2px solid white;padding:2rem;margin:2rem;min-height:15rem;min-width:15rem;}"], function (props) {
  return props.isOpen ? null : 'translateX(-200rem)';
}, function (props) {
  return props.theme.mobileWidth;
});

/***/ })

})
//# sourceMappingURL=index.js.e71a447684cd8f38a6e1.hot-update.js.map