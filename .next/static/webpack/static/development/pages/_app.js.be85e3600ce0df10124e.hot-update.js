webpackHotUpdate("static/development/pages/_app.js",{

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
  componentId: "sc-2i9r8j-0"
})(["display:flex;position:absolute;transform:translateX(-20rem);z-index:200;a{font-family:", ";font-size:1.6rem;color:", ";margin:1rem;text-transform:uppercase;cursor:pointer;z-index:100;}"], function (props) {
  return props.theme.MPBold;
}, function (props) {
  return props.sticky ? props.theme.white : props.theme.secondary;
});
var Rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["100%{transform:rotate(360deg);}"]);
var BunFun = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["40%{top:0;}100%{transform:rotate(-90deg);}"]);
var Rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_BaseAnimation__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "NavStyles__Rotate",
  componentId: "sc-2i9r8j-1"
})(["animation-name:", ";transform-origin:center center;"], Rotate360);
var Burger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles__Burger",
  componentId: "sc-2i9r8j-2"
})(["margin:0 1rem;width:4rem;height:4rem;cursor:pointer;display:flex;align-items:center;z-index:300;"]);
var TopBun = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles__TopBun",
  componentId: "sc-2i9r8j-3"
})(["position:relative;width:100%;height:.2rem;background-color:", ";&:before{width:100%;height:100%;position:absolute;top:-1.2rem;content:'';border-bottom:2px solid ", ";}&:after{border-bottom:2px solid ", ";width:100%;height:100%;position:absolute;content:'';top:1.2rem;}"], function (props) {
  return props.sticky ? props.theme.white : props.theme.secondary;
}, function (props) {
  return props.sticky ? props.theme.white : props.theme.secondary;
}, function (props) {
  return props.sticky ? props.theme.white : props.theme.secondary;
});
var Scale1000 = 'scale(1000)';
var Scale0 = 'scale(0)';
var HiddenNavBG = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles__HiddenNavBG",
  componentId: "sc-2i9r8j-4"
})(["background-color:", ";position:absolute;top:-4rem;right:0rem;width:1rem;height:1rem;border-radius:40%;transition:transform 1s ease-in-out;transform:", ";"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.isOpen ? Scale1000 : Scale0;
});
var HiddenContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "NavStyles__HiddenContainer",
  componentId: "sc-2i9r8j-5"
})(["position:absolute;right:-15rem;top:0;display:flex;min-width:90vw;min-height:90vh;padding:2rem;margin:2rem;transition:transform .8s ease-in-out;transform:", ";.nav_box-1{border:2px solid white;padding:2rem;margin:2rem;display:flex;flex-flow:column;align-items:flex-start;}.nav_box-2{border:2px solid white;padding:2rem;margin:2rem;margin-right:auto;display:flex;flex-flow:column;align-items:flex-start;}.nav_box-3{border:2px solid white;padding:2rem;margin:2rem;display:flex;flex-flow:column;align-items:center;justify-content:space-around;}.nav_box-4{border:2px solid white;padding:2rem;margin:2rem;min-height:15rem;min-width:15rem;}.nav_box-5{border:2px solid white;padding:2rem;margin:2rem;min-height:15rem;min-width:15rem;}.nav_box-6{border:2px solid white;padding:2rem;margin:2rem;min-height:15rem;min-width:15rem;}"], function (props) {
  return props.isOpen ? null : 'translateX(-200rem)';
});

/***/ })

})
//# sourceMappingURL=_app.js.be85e3600ce0df10124e.hot-update.js.map