webpackHotUpdate("static/development/pages/ticketPortal.js",{

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




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "StyledCarousel__Container",
  componentId: "zmlu3k-0"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;flex:2 1 80%;"]);
var StyledSlide = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "StyledCarousel__StyledSlide",
  componentId: "zmlu3k-1"
})(["object-fit:cover;object-position:center center;width:100%;height:100%;"]);

var CarouselUI = function CarouselUI(_ref) {
  var children = _ref.children;
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, children);
};

var Carousel = react_reveal_makeCarousel__WEBPACK_IMPORTED_MODULE_2___default()(CarouselUI);
function StyledCarousel() {
  return __jsx(Carousel, {
    defaultWait: 4000
    /*wait for 1000 milliseconds*/
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3___default.a, {
    right: true,
    style: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(StyledSlide, {
    srcSet: "/images/pic11.png",
    alt: "EuroBrake Greating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3___default.a, {
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(StyledSlide, {
    srcSet: "/images/pic2.png",
    alt: "EuroBrake Greating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=ticketPortal.js.4499f4b5432c07cb0390.hot-update.js.map