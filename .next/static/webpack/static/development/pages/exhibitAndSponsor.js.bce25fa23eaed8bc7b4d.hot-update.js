webpackHotUpdate("static/development/pages/exhibitAndSponsor.js",{

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
})(["position:relative;padding-top:10rem;z-index:10;min-width:100%;min-height:", ";display:flex;flex-flow:column;@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){min-height:", ";}img{flex:2 1 80%;object-fit:cover;}.banner{display:flex;}"], function (props) {
  return props.h || props.theme.heroHeightBig;
}, function (props) {
  return props.h || props.theme.heroHeightSml;
});
var StyledText = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "HeroSection__StyledText",
  componentId: "sc-1rt21yv-1"
})(["position:absolute;z-index:10;top:", ";align-self:center;width:", ";line-height:", ";color:", ";text-align:center;text-shadow:0px 4px 7px rgba(0,0,0,0.74);&&.MuiTypography-body1{font-size:", ";@media only screen  and (max-device-width:1200px)  and (-webkit-min-device-pixel-ratio:2){font-size:", ";}@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){font-size:", ";width:", ";}font-family:", ";line-height:1;}"], function (props) {
  return props.secondary ? '60%' : '20%';
}, function (props) {
  return props.max || '80%';
}, function (props) {
  return props.LH || '1';
}, function (props) {
  return props.color || props.theme.white;
}, function (props) {
  return props.fs || props.sfs || '12rem';
}, function (props) {
  return props.tfs || props.tsfs || '9rem';
}, function (props) {
  return props.mfs || props.msfs || '10rem';
}, function (props) {
  return props.mmax || '80%';
}, function (props) {
  return props.sfont ? props.theme.MPLight : props.theme.MPBlack;
});
function HeroSection(props) {
  var t = props.t,
      max = props.max,
      fs = props.fs,
      cara = props.cara,
      st = props.st,
      smax = props.smax,
      sfs = props.sfs,
      scolor = props.scolor,
      mfs = props.mfs,
      msfs = props.msfs,
      mmax = props.mmax,
      smt = props.smt,
      mt = props.mt,
      smmt = props.smmt,
      mmt = props.mmt;
  return __jsx(StyledHero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, cara ? __jsx(_StyledCarousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }) : __jsx("img", {
    srcSet: props.src ? props.src : "/images/pic11.png",
    alt: "EuroBrake Greating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(StyledText, {
    t: t,
    mt: mt,
    mmt: mmt,
    max: max,
    fs: fs,
    mfs: mfs,
    mmax: mmax,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, props.children), __jsx(StyledText, {
    q: true,
    t: st,
    mt: smt,
    mmt: smmt,
    max: smax,
    fs: sfs,
    color: scolor,
    msfs: msfs,
    sfont: true,
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, props.secondary), __jsx("div", {
    className: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, props.banner ? __jsx(props.banner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }) : __jsx(_CountDownBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=exhibitAndSponsor.js.bce25fa23eaed8bc7b4d.hot-update.js.map