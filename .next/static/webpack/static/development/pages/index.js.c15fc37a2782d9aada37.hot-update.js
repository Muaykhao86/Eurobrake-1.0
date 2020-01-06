webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _CountDownBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CountDownBanner */ "./components/CountDownBanner.js");
/* harmony import */ var _StyledCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyledCarousel */ "./components/StyledCarousel.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/HeroSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var StyledHero = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HeroSection__StyledHero",
  componentId: "sc-1rt21yv-0"
})(["min-width:100%;min-height:", ";@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){min-height:", ";}display:flex;flex-flow:column;img{flex:2 1 80%;object-fit:cover;}.banner{display:flex;}"], function (props) {
  return props.h || props.theme.heroHeightBig;
}, function (props) {
  return props.h || props.theme.heroHeightSml;
});
var StyledText = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "HeroSection__StyledText",
  componentId: "sc-1rt21yv-1"
})(["position:absolute;z-index:10;top:", ";align-self:center;width:", ";line-height:", ";color:", ";text-align:center;text-shadow:0px 3px 50px #0000008C;&&.MuiTypography-body1{font-size:", ";font-family:", ";line-height:1;}"], function (props) {
  return props.t || '26rem';
}, function (props) {
  return props.max || props.theme.minWidth;
}, function (props) {
  return props.LH || '1';
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.fs || '10rem';
}, function (props) {
  return props.theme.MPBlack;
});
function HeroSection(props) {
  var t = props.t,
      max = props.max,
      fs = props.fs;
  return __jsx(StyledHero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_StyledCarousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      dispaly: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(StyledText, {
    t: t,
    max: max,
    fs: fs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, props.children), __jsx("div", {
    className: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, props.banner ? __jsx(props.banner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }) : __jsx(_CountDownBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.c15fc37a2782d9aada37.hot-update.js.map