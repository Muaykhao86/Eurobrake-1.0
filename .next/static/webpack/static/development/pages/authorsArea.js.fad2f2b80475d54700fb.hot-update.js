webpackHotUpdate("static/development/pages/authorsArea.js",{

/***/ "./components/HeroSection.js":
/*!***********************************!*\
  !*** ./components/HeroSection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_CountDownBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CountDownBanner */ "./components/CountDownBanner.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/HeroSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var StyledHero = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HeroSection__StyledHero",
  componentId: "sc-1rt21yv-0"
})(["min-width:100%;height:100vh;display:flex;flex-flow:column;img{flex:2 1 80%;object-fit:cover;}.banner{display:flex;flex:1 1 20%;}"]);
var StyledText = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "HeroSection__StyledText",
  componentId: "sc-1rt21yv-1"
})(["&&.MuiTypography-body1{font-size:", ";font-family:", ";line-height:1;}align-self:center;width:", ";position:absolute;line-height:1;top:", ";color:", ";text-align:left;text-shadow:0px 3px 50px #0000008C;"], function (props) {
  return props.fs || '11rem';
}, function (props) {
  return props.theme.MPBlack;
}, function (props) {
  return props.max || props.theme.minWidth;
}, function (props) {
  return props.t || '20rem';
}, function (props) {
  return props.theme.white;
});
function HeroSection(props) {
  var t = props.t,
      max = props.max,
      fs = props.fs;
  return __jsx(StyledHero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("img", {
    src: props.src ? props.src : "/images/pic1.png",
    alt: "EuroBrake Greating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(StyledText, {
    t: t,
    max: max,
    fs: fs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, props.children), __jsx("div", {
    className: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, props.banner ? __jsx(props.banner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }) : __jsx(_components_CountDownBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=authorsArea.js.fad2f2b80475d54700fb.hot-update.js.map