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
})(["position:relative;padding-top:10rem;z-index:10;min-width:100%;min-height:", ";display:flex;flex-flow:column;@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2)  and (orientation:portrait){min-height:", ";}img{flex:2 1 80%;object-fit:cover;}.banner{display:flex;}"], function (props) {
  return props.h || props.theme.heroHeightBig;
}, function (props) {
  return props.h || props.theme.heroHeightSml;
});
var StyledText = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "HeroSection__StyledText",
  componentId: "sc-1rt21yv-1"
})(["position:absolute;z-index:10;top:", ";align-self:center;width:", ";color:", ";text-align:center;text-shadow:0px 4px 7px rgba(0,0,0,0.74);&&.MuiTypography-body1{font-size:", ";@media only screen  and (max-device-width:1200px)  and (-webkit-min-device-pixel-ratio:2){font-size:", ";top:", ";}@media only screen  and (max-device-width:1024px)  and (-webkit-min-device-pixel-ratio:2) and (orientation:landscape){font-size:", ";top:", ";}@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){font-size:", ";width:", ";top:", ";}font-family:", ";line-height:1;}"], function (props) {
  return props.secondary ? '60%' : '20%';
}, function (props) {
  return props.max || '80%';
}, function (props) {
  return props.color || props.theme.white;
}, function (props) {
  return props.fs || props.sfs || '12rem';
}, function (props) {
  return props.tfs || props.tsfs || '9rem';
}, function (props) {
  return props.tt ? props.tt : '20%';
}, function (props) {
  return props.tfs || props.sfs || '9rem';
}, function (props) {
  return props.tt ? props.tt : '20%';
}, function (props) {
  return props.mfs || props.tsfs || '10rem';
}, function (props) {
  return props.mmax || '80%';
}, function (props) {
  return props.mt ? props.mt : '20%';
}, function (props) {
  return props.sfont ? props.theme.MPLight : props.theme.MPBlack;
});
function HeroSection(props) {
  var t = props.t,
      tt = props.tt,
      mt = props.mt,
      st = props.st,
      mst = props.mst,
      tst = props.tst,
      max = props.max,
      mmax = props.mmax,
      smax = props.smax,
      msmax = props.msmax,
      fs = props.fs,
      tfs = props.tfs,
      mfs = props.mfs,
      sfs = props.sfs,
      tsfs = props.tsfs,
      msfs = props.msfs,
      cara = props.cara,
      scolor = props.scolor;
  return __jsx(StyledHero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, cara ? __jsx(_StyledCarousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }) : __jsx("img", {
    srcSet: props.src ? props.src : "/images/pic11.png",
    alt: "EuroBrake Greating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(StyledText, {
    t: t,
    mt: mt,
    tt: tt,
    max: max,
    mmax: mmax,
    fs: fs,
    tfs: tfs,
    mfs: mfs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, props.children), __jsx(StyledText, {
    t: st,
    mt: mst,
    tt: tst,
    max: smax,
    mmax: msmax,
    fs: sfs,
    tfs: tsfs,
    msfs: msfs,
    color: scolor,
    sfont: true,
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, props.secondary), __jsx("div", {
    className: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, props.banner ? __jsx(props.banner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }) : __jsx(_CountDownBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.1d6bf5b05dadf61fd1fa.hot-update.js.map