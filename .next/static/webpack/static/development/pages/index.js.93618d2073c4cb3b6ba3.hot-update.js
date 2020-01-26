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
/* harmony import */ var _material_ui_icons_ArrowBackOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowBackOutlined */ "./node_modules/@material-ui/icons/ArrowBackOutlined.js");
/* harmony import */ var _material_ui_icons_ArrowBackOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBackOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/Bounce */ "./node_modules/react-reveal/Bounce.js");
/* harmony import */ var react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Icons */ "./components/Icons.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/Dates.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var StyledDates = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dates__StyledDates",
  componentId: "sc-2eodxj-0"
})(["max-width:100%;max-height:100%;background-color:", ";padding:2rem;border-left:5px solid ", ";display:flex;flex:1 1 auto;flex-flow:column;justify-content:space-between;font-size:2rem;.Dates{&-title{font-size:2rem;font-family:", ";color:", ";align-self:flex-start;max-width:90%;}&-date{font-size:1.8rem;font-family:", ";color:", ";align-self:flex-start;max-width:90%;}&-text{font-size:1.5rem;font-family:", ";color:", ";align-self:flex-start;max-width:90%;}}"], function (props) {
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
      lineNumber: 58
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "h1",
    className: "Dates-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Important Dates"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "26 January 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Deadline for submission of review ready papers"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "12 April 2020 "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Final deadline for modifications to technical papers"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
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
  }, "Deadline for draft oral-only presentations, posters and presentations associated with a technical paper"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "01 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Deadline for speakers to register"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "24 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
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

var BounceFixedDates = react_reveal_withReveal__WEBPACK_IMPORTED_MODULE_4___default()(FixedDates, __jsx(react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_6___default.a, {
  left: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}));
function FixedDates() {
  return __jsx(StyledFixedDates, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Important Dates"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "26 January 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Deadline for submission of review ready papers"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "12 April 2020 "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Final deadline for modifications to technical papers"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
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
  }, "Deadline for draft oral-only presentations, posters and presentations associated with a technical paper"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "01 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Deadline for speakers to register"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "24 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Deadline to upload PPTs for on-site presentation"));
}
var StyledFixedBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dates__StyledFixedBox",
  componentId: "sc-2eodxj-2"
})(["position:fixed;z-index:1;top:14vh;left:0;width:25rem;max-height:50rem;min-height:47rem;background-color:", ";padding:1rem;padding-right:1.5rem;border-right:5px solid ", ";display:flex;@media only screen  and (max-device-width:1000px)  and (-webkit-min-device-pixel-ratio:2){display:none;}flex-flow:column;justify-content:space-between;flex:1 1 auto;.hide-box{bottom:0rem;right:0;}.Box{&-title{text-align:end;font-size:2rem;font-family:", ";color:", ";align-self:flex-end;max-width:95%;}&-date{text-align:end;font-size:1.8rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}&-text{text-align:end;font-size:1.8rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}&-text-it{text-align:end;font-size:1.5rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}}.logo_box{height:10rem;display:flex;align-items:center;justify-content:center;flex:1 1 auto;}"], function (props) {
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
      lineNumber: 233
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "Book your Early Bird Tickets for EuroBrake"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text-it",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "Secure your tickets by 1 April 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, " Europe's braking technology conference & exhibition"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "2-4 June 2020,"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "CCIB, Barcelona, Spain"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/ticketPortal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    br: "500rem",
    padding: "1rem",
    fontSize: "1.5rem",
    style: {
      marginTop: '1rem',
      color: '#FFF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "Book Now")), __jsx("div", {
    className: "logo_box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_8__["SmlLogo"], {
    width: "10rem",
    height: "10rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  })), __jsx("div", {
    className: "hide-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx(_material_ui_icons_ArrowBackOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      background: '#134381',
      color: '#FFF',
      width: '5rem',
      height: '5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  })));
}
var StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Dates__StyledBox",
  componentId: "sc-2eodxj-3"
})(["max-width:100%;max-height:100%;background-color:", ";padding:2rem;border-right:5px solid ", ";display:flex;flex:1 1 auto;flex-flow:column;justify-content:space-between;font-size:2rem;.Box{&-title{text-align:end;font-size:2rem;font-family:", ";color:", ";align-self:flex-end;max-width:95%;}&-date{text-align:end;font-size:1.8rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}&-text{text-align:end;font-size:1.8rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}&-text-it{text-align:end;font-size:1.5rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}}.logo_box{height:10rem;display:flex;align-items:center;justify-content:center;flex:1 1 auto;}"], function (props) {
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
function Box(props) {
  return __jsx(StyledBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, "Book your Early Bird Tickets for EuroBrake"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text-it",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "Secure your tickets by 1 April 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, " Europe's braking technology conference & exhibition"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, "2-4 June 2020,"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, "CCIB, Barcelona, Spain"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/ticketPortal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: props.handleClick,
    br: "500rem",
    padding: "1rem",
    fontSize: "1.5rem",
    style: {
      color: '#FFF',
      fontSize: '1.5rem',
      margin: '0',
      marginTop: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "Book Now")), __jsx("div", {
    className: "logo_box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_8__["SmlLogo"], {
    width: "10rem",
    height: "10rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.93618d2073c4cb3b6ba3.hot-update.js.map