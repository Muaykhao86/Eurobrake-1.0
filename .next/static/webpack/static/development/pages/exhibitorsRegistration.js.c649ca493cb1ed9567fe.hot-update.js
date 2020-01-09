webpackHotUpdate("static/development/pages/exhibitorsRegistration.js",{

/***/ "./pages/exhibitorsRegistration.js":
/*!*****************************************!*\
  !*** ./pages/exhibitorsRegistration.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandMoreOutlined */ "./node_modules/@material-ui/icons/ExpandMoreOutlined.js");
/* harmony import */ var _material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HeroSection */ "./components/HeroSection.js");
/* harmony import */ var _components_ExpandTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ExpandTable */ "./components/ExpandTable.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styles/PageStyles */ "./components/styles/PageStyles.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/exhibitorsRegistration.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "exhibitorsRegistration__StyledPage",
  componentId: "be5dik-0"
})(["display:flex;flex-direction:column;align-self:center;width:", ";background-color:", ";margin-top:7rem;@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){width:", ";}.Registration{color:", ";font-family:", ";font-size:2rem;&_text{line-height:3.5rem;position:relative;margin-left:3rem;font-size:2rem;}&-title{color:", ";font-family:", ";font-size:4.4rem;margin-top:3rem;}&_list{li{position:relative;list-style-type:none;list-style-position:inside;margin-left:3rem;margin-bottom:1rem;line-height:3.5rem;&:before{content:'\u25A0';position:absolute;font-size:3.14rem;left:-27px;top:-6.1px;}}}&_list-title{margin-bottom:1rem;font-family:", ";font-size:2rem;}&_sub-title{color:", ";font-size:3.5rem;font-family:", ";padding-bottom:.5rem;}&-bold{font-family:", ";}}"], function (props) {
  return props.max || props.theme.minWidth;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.mobileWidth;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPSemibold;
}, function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.MPBold;
});

var FilledBanner = function FilledBanner() {
  return __jsx(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_8__["StyledBanner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_8__["StyledContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "banner-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Earlybird registration is open"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "banner-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Book before 1 April 2020 to secure discount ticket prices"), __jsx("div", {
    className: "banner_bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "banner_bottom-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    varient: "h3",
    className: "banner_bottom-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "See below for more details"))));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    banner: FilledBanner,
    max: "55%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "EuroBrake 2020 Registration"), __jsx(StyledPage, {
    mt: "10rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    className: "Registration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutterBottom: true,
    className: "Registration-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Delegate Registration"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutterBottom: true,
    className: "Registration_list-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Full Delegate registration includes:"), __jsx("ul", {
    className: "Registration_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, " Admission to all Plenary and Technical Sessions")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, " Admission to the EuroBrake Dinner")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, " Admission to Exhibition")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, " Access to the EuroBarake app including all abstracts")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, " Conference Proceedings USB stick")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, " Admission to the Welcome and Farewell Receptions")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, " Coffee/Refresments")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, " Lunches"))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration_list-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "All prices are qouted in ", __jsx("span", {
    className: "Registration-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "\u20AC EUR"))), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration_sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Earlybird registration must be made before 1 April 2020"), __jsx(_components_ExpandTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    br: "100rem",
    bcolor: "#134381",
    background: "#134381",
    style: {
      maxWidth: "24rem",
      margin: "5rem 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "book now"), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutterBottom: true,
    className: "Registration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Please note:"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutterBottom: true,
    className: "Registration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "All prices are subject to Spanish VAT 21%"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Dinner is only included in a 2 or 3-day package, on a first come, first served basis. You can purchase a ticket with a 1-day package or for a guest at a cost of EUR 80 + VAT per person  ")), __jsx("div", {
    className: "Registration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Methods of Payment"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Payments can be made by bank transfer or credit card using our secure online payment system"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration Registration-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "40 days prior to the event the only method of payment will be via credit card. Bank transfers will not be acceptable after this time. "), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Read the event terms and conditions ", __jsx("span", {
    className: " Registration-bold ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "here.")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "For more information or help with registration, please call:"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Registration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("span", {
    className: " Registration-bold ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "+44 (0) 1279883470"), " or email ", __jsx("span", {
    className: "Registration-bold ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "info@eurobrake.net"))), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    br: "100rem",
    bcolor: "#134381",
    background: "#134381",
    style: {
      maxWidth: "24rem",
      margin: "5rem 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "book now")));
}); // TODO NEED TO PUT IN CALL TO ACTION CARDS!!!!
//! THIS INCLUDES CREATING A METHOFD FOR LINKING TO EVENTS FORCE

/***/ })

})
//# sourceMappingURL=exhibitorsRegistration.js.c649ca493cb1ed9567fe.hot-update.js.map