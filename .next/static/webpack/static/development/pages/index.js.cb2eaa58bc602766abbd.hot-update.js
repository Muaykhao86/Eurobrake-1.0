webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Dates.js":
/*!*****************************!*\
  !*** ./components/Dates.js ***!
  \*****************************/
/*! exports provided: Dates, BounceFixedDates, FixedDates, FixedBox, Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dates", function() { return Dates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BounceFixedDates", function() { return BounceFixedDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedDates", function() { return FixedDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedBox", function() { return FixedBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_reveal_withReveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/withReveal */ "./node_modules/react-reveal/withReveal.js");
/* harmony import */ var react_reveal_withReveal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_withReveal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Bounce */ "./node_modules/react-reveal/Bounce.js");
/* harmony import */ var react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Icons */ "./components/Icons.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/Dates.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var StyledDates = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dates__StyledDates",
  componentId: "sc-2eodxj-0"
})(["max-width:100%;max-height:100%;background-color:", ";padding:2rem;border:5px solid ", ";display:flex;flex:1 1 auto;flex-flow:column;justify-content:space-between;font-size:2rem;.Dates{&-title{font-size:3rem;font-family:", ";color:", ";align-self:flex-start;max-width:90%;}&-date{font-size:2rem;font-family:", ";color:", ";align-self:flex-start;max-width:90%;}&-text{font-size:2rem;font-family:", ";color:", ";align-self:flex-start;max-width:90%;}}"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.MPBlack;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.MPBold;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.white;
});
function Dates(props) {
  return __jsx(StyledDates, {
    MW: props.MW,
    MH: props.MH,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Important Dates"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "26 January 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Deadline for submission of review ready papers"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "12 April 2020 "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Final deadline for modifications to technical papers"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "01 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Deadline for draft oral-only presentations, posters and presentations associated with a technical paper"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "01 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Deadline for speakers to register"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "24 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Deadline to upload PPTs for on-site presentation"));
}
var StyledFixedDates = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dates__StyledFixedDates",
  componentId: "sc-2eodxj-1"
})(["position:fixed;z-index:1;top:14vh;right:0;width:25rem;max-height:50rem;min-height:47rem;background-color:", ";padding:1rem;padding-left:1.5rem;border-left:5px solid ", ";display:flex;@media only screen  and (max-device-width:1000px)  and (-webkit-min-device-pixel-ratio:2){display:none;}flex-flow:column;justify-content:space-between;flex:1 1 auto;.Dates{&-title{font-size:2rem;font-family:", ";color:", ";align-self:flex-start;max-width:90%;}&-date{font-size:1.5rem;font-family:", ";color:", ";align-self:flex-start;max-width:90%;}&-text{font-size:1.5rem;font-family:", ";color:", ";align-self:flex-start;max-width:90%;}}"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.MPBlack;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.MPBold;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.white;
}); // * IF I PUT IT IN I NEED TO HACVE IT TRIGGER AFTER THE HERO IMAGE

var BounceFixedDates = react_reveal_withReveal__WEBPACK_IMPORTED_MODULE_4___default()(FixedDates, __jsx(react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_5___default.a, {
  left: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}));
function FixedDates() {
  return __jsx(StyledFixedDates, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Important Dates"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "26 January 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Deadline for submission of review ready papers"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "12 April 2020 "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Final deadline for modifications to technical papers"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "01 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Deadline for draft oral-only presentations, posters and presentations associated with a technical paper"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "01 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Deadline for speakers to register"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "24 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Deadline to upload PPTs for on-site presentation"));
}
var StyledFixedBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dates__StyledFixedBox",
  componentId: "sc-2eodxj-2"
})(["position:fixed;z-index:1;top:14vh;left:0;width:25rem;max-height:50rem;min-height:47rem;background-color:", ";padding:1rem;padding-right:1.5rem;border-right:5px solid ", ";display:flex;@media only screen  and (max-device-width:1000px)  and (-webkit-min-device-pixel-ratio:2){display:none;}flex-flow:column;justify-content:space-between;flex:1 1 auto;.Box{&-title{text-align:end;font-size:2rem;font-family:", ";color:", ";align-self:flex-end;max-width:95%;}&-date{text-align:end;font-size:1.8rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}&-text{text-align:end;font-size:1.8rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}&-text-it{text-align:end;font-size:1.5rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}}.logo_box{height:10rem;display:flex;align-items:center;justify-content:center;flex:1 1 auto;}"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.MPBlack;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.MPSemibold;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.white;
});
function FixedBox() {
  return __jsx(StyledFixedBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "Book your Early Bird Tickets for EuroBrake"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text-it",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Secure your tickets by 1 April 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, " Europe's braking technology conference & exhibition"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "2-4 June 2020 CCIB, Barcelona, Spain"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/ticketPortal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    br: "500rem",
    padding: "1rem",
    fontSize: "1.5rem",
    style: {
      marginTop: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Book Now")), __jsx("div", {
    className: "logo_box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_7__["SmlLogo"], {
    width: "10rem",
    height: "10rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  })));
}
var StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dates__StyledBox",
  componentId: "sc-2eodxj-3"
})(["position:fixed;z-index:1;top:14vh;left:0;width:25rem;max-height:50rem;min-height:47rem;background-color:", ";padding:1rem;padding-right:1.5rem;border-right:5px solid ", ";display:flex;@media only screen  and (max-device-width:1000px)  and (-webkit-min-device-pixel-ratio:2){display:none;}flex-flow:column;justify-content:space-between;flex:1 1 auto;.Box{&-title{text-align:end;font-size:2rem;font-family:", ";color:", ";align-self:flex-end;max-width:95%;}&-date{text-align:end;font-size:1.8rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}&-text{text-align:end;font-size:1.8rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}&-text-it{text-align:end;font-size:1.5rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}}.logo_box{height:10rem;display:flex;align-items:center;justify-content:center;flex:1 1 auto;}"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.MPBlack;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.MPSemibold;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.white;
});
function Box() {
  return __jsx(StyledBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, "Book your Early Bird Tickets for EuroBrake"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text-it",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, "Secure your tickets by 1 April 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, " Europe's braking technology conference & exhibition"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, "2-4 June 2020 CCIB, Barcelona, Spain"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/ticketPortal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    br: "500rem",
    padding: "1rem",
    fontSize: "1.5rem",
    style: {
      marginTop: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, "Book Now")), __jsx("div", {
    className: "logo_box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_7__["SmlLogo"], {
    width: "10rem",
    height: "10rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: NavLogo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLogo", function() { return NavLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var _Dates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Dates */ "./components/Dates.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Header */ "./components/Header.js");







var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/Nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].img.attrs(function (props) {
  return {
    src: "/images/logo.png",
    alt: "Logo"
  };
}).withConfig({
  displayName: "Nav__NavLogo",
  componentId: "r7d7s0-0"
})(["max-width:40rem;cursor:pointer;"]);

var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Nav, _Component);

  function Nav(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function () {
      _this.setState(function (prev) {
        return {
          isOpen: !prev.isOpen
        };
      });
    });

    _this.state = {
      isOpen: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "render",
    value: function render() {
      return __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["NavStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["HiddenNavBG"], {
        isOpen: this.state.isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["HiddenContainer"], {
        isOpen: this.state.isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "nav_box-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(NavLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), __jsx("div", {
        className: "nav_container-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("div", {
        className: "nav_box-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/authorsArea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Authors Area")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/f/[id]/[formType]",
        as: "/f/FISITA/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Contact Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/esop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Student Opportunities Programme")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitAndSponsor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Exhibition And Sponsorship")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/welcome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Welcome to Barcelona")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Exhibitors List")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitorsRegistration",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Delegate Registration")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/technicalProgram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Technical Program")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/studentArea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Testing"))), __jsx("div", {
        className: "nav_box-left",
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(_Dates__WEBPACK_IMPORTED_MODULE_13__["Dates"], {
        MW: "35rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), __jsx("div", {
        className: "nav_box-right",
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx(_Dates__WEBPACK_IMPORTED_MODULE_13__["Box"], {
        MW: "35rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })))), __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["Burger"], {
        isOpen: this.state.isOpen,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["TopBun"], {
        isOpen: this.state.isOpen,
        sticky: this.props.sticky,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.cb2eaa58bc602766abbd.hot-update.js.map