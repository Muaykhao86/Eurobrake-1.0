webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/StyledCarousel.js":
/*!**************************************!*\
  !*** ./components/StyledCarousel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StyledCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_reveal_makeCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/makeCarousel */ "./node_modules/react-reveal/makeCarousel.js");
/* harmony import */ var react_reveal_makeCarousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_makeCarousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Slide */ "./node_modules/react-reveal/Slide.js");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/StyledCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "StyledCarousel__Overlay",
  componentId: "zmlu3k-0"
})(["overflow:hidden;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "StyledCarousel__Container",
  componentId: "zmlu3k-1"
})(["width:100%;height:80vh;@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){height:", ";}display:flex;position:relative;background-color:black;"], function (props) {
  return props.h || props.theme.heroHeightSml;
});
var StyledSlide = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "StyledCarousel__StyledSlide",
  componentId: "zmlu3k-2"
})(["width:110%;height:100%;@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){height:", ";}"], function (props) {
  return props.h || props.theme.heroHeightSml;
});

var CarouselUI = function CarouselUI(_ref) {
  var children = _ref.children;
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, children);
};

var Carousel = react_reveal_makeCarousel__WEBPACK_IMPORTED_MODULE_2___default()(CarouselUI);
function StyledCarousel() {
  return __jsx(Overlay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(Carousel, {
    count: 10,
    defaultWait: 3000
    /*wait for 1000 milliseconds*/
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3___default.a, {
    ssr: true,
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(StyledSlide, {
    style: {},
    srcSet: "/images/pic1.png",
    alt: "EuroBrake Greating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3___default.a, {
    ssr: true,
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(StyledSlide, {
    style: {},
    srcSet: "/images/barcelona.png",
    alt: "EuroBrake Greating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=studentArea.js.0f2639aa363f1e3e6b36.hot-update.js.map