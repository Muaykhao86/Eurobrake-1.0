webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/SponsorCarousel.js":
/*!***************************************!*\
  !*** ./components/SponsorCarousel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SponsorCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_reveal_makeCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/makeCarousel */ "./node_modules/react-reveal/makeCarousel.js");
/* harmony import */ var react_reveal_makeCarousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_makeCarousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Slide */ "./node_modules/react-reveal/Slide.js");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _SponsorIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SponsorIcons */ "./components/SponsorIcons.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/SponsorCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SponsorContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SponsorCarousel__SponsorContainer",
  componentId: "p6ud71-0"
})(["margin-top:5rem;align-self:center;display:flex;flex-flow:column;align-items:center;width:", ";@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){width:", ";}.sponsor-top{&_title{color:", ";font-family:", ";font-size:2rem;}}"], function (props) {
  return props.theme.minWidth;
}, function (props) {
  return props.theme.mobileWidth;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLightIt;
});
var SponsorBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SponsorCarousel__SponsorBox",
  componentId: "p6ud71-1"
})(["height:10rem;display:flex;flex-flow:wrap;border:1px solid white;display:flex;justify-content:flex-start;align-items:center;.sponsor{margin:1rem;cursor:pointer;}"]);

var CarouselUI = function CarouselUI(_ref) {
  var children = _ref.children;
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, children);
};

var Carousel = react_reveal_makeCarousel__WEBPACK_IMPORTED_MODULE_2___default()(CarouselUI);
function SponsorCarousel() {
  return __jsx(SponsorContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "sponsor-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    className: "sponsor-top_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Confirmed EuroBrake 2020 Sponsors")), __jsx(SponsorBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "sponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("a", {
    href: "http://www.applusidiada.com/en/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_SponsorIcons__WEBPACK_IMPORTED_MODULE_5__["Applus"], {
    width: "14rem",
    height: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }))), __jsx("div", {
    className: "sponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("a", {
    href: "http://www.itt.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_SponsorIcons__WEBPACK_IMPORTED_MODULE_5__["Itt"], {
    width: "14rem",
    height: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), __jsx("div", {
    className: "sponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("a", {
    href: "http://www.horiba.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(_SponsorIcons__WEBPACK_IMPORTED_MODULE_5__["Horiba"], {
    width: "14rem",
    height: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx("div", {
    className: "sponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("a", {
    href: "http://www.nofmetalcoatings.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_SponsorIcons__WEBPACK_IMPORTED_MODULE_5__["Nof"], {
    width: "14rem",
    height: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))), __jsx("div", {
    className: "sponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("a", {
    href: "http://www.itaprochim.it/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_SponsorIcons__WEBPACK_IMPORTED_MODULE_5__["Itaprochim"], {
    width: "14rem",
    height: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), " ")), __jsx("div", {
    className: "sponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("a", {
    href: "http://www.linkeng.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_SponsorIcons__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    width: "14rem",
    height: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), __jsx("div", {
    className: "sponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("a", {
    href: "http://www.fagorederlan.es/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_SponsorIcons__WEBPACK_IMPORTED_MODULE_5__["Fagor"], {
    width: "14rem",
    height: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))), __jsx("div", {
    className: "sponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("a", {
    href: "http://www.lapinus.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_SponsorIcons__WEBPACK_IMPORTED_MODULE_5__["Lapinus"], {
    width: "14rem",
    height: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx("div", {
    className: "sponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("a", {
    href: "http://www.sadeca.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(_SponsorIcons__WEBPACK_IMPORTED_MODULE_5__["Sadeca"], {
    width: "14rem",
    height: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx("div", {
    className: "sponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("a", {
    href: "http://www.alroko.de/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_SponsorIcons__WEBPACK_IMPORTED_MODULE_5__["Alroko"], {
    width: "14rem",
    height: "5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=_app.js.372dc8ab719372cc548e.hot-update.js.map