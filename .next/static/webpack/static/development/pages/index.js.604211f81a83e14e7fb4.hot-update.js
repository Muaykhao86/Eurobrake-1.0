webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/exhibitors/ExhibitionSection.js":
/*!****************************************************!*\
  !*** ./components/exhibitors/ExhibitionSection.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExhibitionSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_withReveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/withReveal */ "./node_modules/react-reveal/withReveal.js");
/* harmony import */ var react_reveal_withReveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_withReveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Bounce */ "./node_modules/react-reveal/Bounce.js");
/* harmony import */ var react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_HomeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/HomeStyles */ "./components/styles/HomeStyles.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Card */ "./components/Card.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _utils_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/mixins */ "./utils/mixins.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/exhibitors/ExhibitionSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function ExhibitionSection() {
  return __jsx(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_4__["StyledSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Exhibition and Sponsorship"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "EuroBrake\u2019s accompanying technical exhibition offers an ideal opportunity to present your company\u2019s products, services and technical capabilities to key decision-makers, from industry players to new entrants in specialist engineering."), __jsx("div", {
    className: "innerContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "mediaBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: "/images/pic2.png",
    alt: "EuroBrake Greating",
    style: {
      width: '100%',
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), Object(_utils_mixins__WEBPACK_IMPORTED_MODULE_7__["winWidth"])() ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Card__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    left: true,
    style: {
      opacity: '1'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Partner your brand with EuroBrake"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/exhibitAndSponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    br: "500rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "EXHIBIT/SPONSOR")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_3___default.a, {
    ssrFadeout: true,
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Partner your brand with EuroBrake"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/exhibitAndSponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    br: "500rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "EXHIBIT/SPONSOR")))))));
}

/***/ }),

/***/ "./node_modules/react-reveal/withReveal.js":
/*!*************************************************!*\
  !*** ./node_modules/react-reveal/withReveal.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function withReveal(e,t){var r=void 0;return"function"==typeof e&&"string"==typeof e.styledComponentId&&(r="innerRef"),function(n){var o=n.force,i=n.mountOnEnter,a=n.unmountOnExit,p=n.opposite,u=n.mirror,l=n.wait,c=n.onReveal,s=n.in,f=n.when,d=n.spy,x=n.collapse,v=n.onExited,_=n.enter,m=n.exit,O=n.appear,y=_objectWithoutProperties(n,["force","mountOnEnter","unmountOnExit","opposite","mirror","wait","onReveal","in","when","spy","collapse","onExited","enter","exit","appear"]);return _react2.default.createElement(t.type,_extends({force:o,mountOnEnter:i,unmountOnExit:a,opposite:p,mirror:u,wait:l,onReveal:c,in:s,when:f,spy:d,collapse:x,onExited:v,enter:_,exit:m,appear:O},t.props,{refProp:r}),_react2.default.createElement(e,y))}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_react=__webpack_require__(/*! react */ "./node_modules/react/index.js"),_react2=_interopRequireDefault(_react);exports.default=withReveal,module.exports=exports.default;

/***/ })

})
//# sourceMappingURL=index.js.604211f81a83e14e7fb4.hot-update.js.map