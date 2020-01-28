webpackHotUpdate("static/development/pages/about.js",{

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
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_reveal_withReveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-reveal/withReveal */ "./node_modules/react-reveal/withReveal.js");
/* harmony import */ var react_reveal_withReveal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_reveal_withReveal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ArrowBackOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowBackOutlined */ "./node_modules/@material-ui/icons/ArrowBackOutlined.js");
/* harmony import */ var _material_ui_icons_ArrowBackOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBackOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-reveal/Bounce */ "./node_modules/react-reveal/Bounce.js");
/* harmony import */ var react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Icons */ "./components/Icons.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/Dates.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var StyledDates = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
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
      lineNumber: 61
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    as: "h1",
    className: "Dates-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Important Dates"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "12 April 2020 "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Final deadline for modifications to technical papers"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "01 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Deadline for draft oral-only presentations, posters and presentations associated with a technical paper"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "01 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Deadline for speakers to register"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "24 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Deadline to upload PPTs for on-site presentation"));
}
var StyledFixedDates = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Dates__StyledFixedDates",
  componentId: "sc-2eodxj-1"
})(["position:fixed;z-index:1;top:14vh;right:", ";width:25rem;max-height:50rem;min-height:47rem;background-color:", ";padding:1rem;padding-left:1.5rem;border-left:5px solid ", ";display:flex;@media only screen  and (max-device-width:1000px)  and (-webkit-min-device-pixel-ratio:2){display:none;}flex-flow:column;justify-content:space-between;flex:1 1 auto;.hide-box-dates{border:2px solid #FFF;position:absolute;z-index:-100;bottom:-2rem;left:-3rem;}.Dates{&-title{font-size:2rem;font-family:", ";color:", ";align-self:flex-start;max-width:90%;&_hide{font-size:2.5rem;font-family:", ";color:", ";align-self:flex-start;max-width:100%;position:absolute;left:-7.9rem;top:44%;transform:rotate(90deg);}}&-date{font-size:1.5rem;font-family:", ";color:", ";align-self:flex-start;max-width:90%;}&-text{font-size:1.5rem;font-family:", ";color:", ";align-self:flex-start;max-width:90%;}}"], function (props) {
  return props.RightHide ? '-21rem' : '0';
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.MPBlack;
}, function (props) {
  return props.theme.white;
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

var BounceFixedDates = react_reveal_withReveal__WEBPACK_IMPORTED_MODULE_7___default()(FixedDates, __jsx(react_reveal_Bounce__WEBPACK_IMPORTED_MODULE_9___default.a, {
  left: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154
  },
  __self: undefined
}));
function FixedDates(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      RightHide = _useState[0],
      setRightHide = _useState[1];

  return __jsx(StyledFixedDates, {
    RightHide: RightHide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("div", {
    style: {
      minHeight: '45rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, RightHide ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-title_hide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Important Dates") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Important Dates"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "12 April 2020 "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Final deadline for modifications to technical papers"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "01 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Deadline for draft oral-only presentations, posters and presentations associated with a technical paper"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "01 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Deadline for speakers to register"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Dates-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "24 May 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Dates-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Deadline to upload PPTs for on-site presentation"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
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
      lineNumber: 180
    },
    __self: this
  }, "Pricing/Registration")))), __jsx("div", {
    className: "hide-box-dates",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      return setRightHide(!RightHide);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, " ", RightHide === true ? __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      background: '#134381',
      color: '#FFF',
      width: '5rem',
      height: '5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }) : __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      background: '#134381',
      color: '#FFF',
      width: '5rem',
      height: '5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), " ")));
}
var StyledFixedBox = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Dates__StyledFixedBox",
  componentId: "sc-2eodxj-2"
})(["position:fixed;z-index:1;top:14vh;left:", ";width:25rem;max-height:50rem;min-height:47rem;background-color:", ";padding:1rem;padding-right:1.5rem;border-right:5px solid ", ";display:flex;@media only screen  and (max-device-width:1000px)  and (-webkit-min-device-pixel-ratio:2){display:none;}flex-flow:column;justify-content:space-between;flex:1 1 auto;.hide-box{border:2px solid #FFF;position:absolute;z-index:-100;bottom:-2rem;right:-3rem;}.Box{&-title{text-align:end;font-size:2rem;font-family:", ";color:", ";align-self:flex-end;max-width:95%;&_hide{font-size:2.5rem;font-family:", ";color:", ";align-self:flex-start;width:45rem;position:absolute;right:-21rem;top:48%;transform:rotate(90deg);}}&-date{text-align:end;font-size:1.8rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}&-text{text-align:end;font-size:1.8rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}&-text-it{text-align:end;font-size:1.5rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}}.logo_box{height:10rem;display:flex;align-items:center;justify-content:center;flex:1 1 auto;}"], function (props) {
  return props.Hide ? '-21rem' : '0';
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.MPBlack;
}, function (props) {
  return props.theme.white;
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
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      Hide = _useState2[0],
      setHide = _useState2[1];

  console.log(Hide);
  return __jsx(StyledFixedBox, {
    Hide: Hide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, Hide ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-title_hide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, "Book your Early Bird Tickets today") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, "Book your Early Bird Tickets for EuroBrake"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text-it",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "Secure your tickets by 1 April 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, " Europe's braking technology conference & exhibition"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, "2-4 June 2020,"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "CCIB, Barcelona, Spain"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    br: "500rem",
    padding: "1rem ",
    fontSize: "1.5rem",
    style: {
      marginTop: '1rem',
      color: '#FFF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, "Pricing/Registration")), __jsx("div", {
    className: "logo_box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_11__["SmlLogo"], {
    width: "10rem",
    height: "10rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }))), __jsx("div", {
    className: "hide-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      return setHide(!Hide);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, " ", Hide === true ? __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      background: '#134381',
      color: '#FFF',
      width: '5rem',
      height: '5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }) : __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      background: '#134381',
      color: '#FFF',
      width: '5rem',
      height: '5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }), " ")));
}
var StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
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
      lineNumber: 384
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, "Book your Early Bird Tickets for EuroBrake"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text-it",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, "Secure your tickets by 1 April 2020"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "h1",
    className: "Box-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, " Europe's braking technology conference & exhibition"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, "2-4 June 2020,"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    as: "p",
    className: "Box-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, "CCIB, Barcelona, Spain"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
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
      lineNumber: 391
    },
    __self: this
  }, "Pricing/Registration")), __jsx("div", {
    className: "logo_box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_11__["SmlLogo"], {
    width: "10rem",
    height: "10rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  })));
} // const StyledMoBox = styled.div`
//      max-width:100%;
//    max-height: 100%;
//    background-color: ${props => props.theme.primary};
//     padding: 2rem;
//     display: flex;
//     flex: 1 1 auto;
//     flex-flow: column;
//     justify-content: space-between;
//     font-size: 2rem;
//     .Box-mob{
//         &-title{
//         font-size: 3rem;
//         font-family: ${props => props.theme.MPBlack};
//         color: ${props => props.theme.white};
//         align-self: center;
//         }
//         &-date{
//         font-size: 1.8rem;
//         font-family: ${props => props.theme.MPSemibold};
//         color: ${props => props.theme.secondary};
//         align-self: center;
//         }
//         &-text{
//             font-size: 1.8rem;
//         font-family: ${props => props.theme.MPLight};
//         color: ${props => props.theme.white};
//         align-self: center;
//         }
//         &-text-it{
//             font-size: 2.5rem;
//         font-family: ${props => props.theme.MPLightIt};
//         color: ${props => props.theme.white};
//         align-self: center;
//         }
//     }
//     .logo_box-mob{
//         height: 10rem;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         flex: 1 1 auto;
//     }
// `;
// export function MoBox(props) {
//     return (
//         <StyledMoBox>
//             <Typography gutterBottom as="h1" className="Box-title" >Book your Early Bird Tickets for EuroBrake</Typography>
//             <Typography gutterBottom as="p"  className="Box-text-it">Secure your tickets by 1 April 2020</Typography>
//             <Link href="/ticketPortal">
//                 <Button onClick={props.handleClick} br="500rem" padding="2rem 11rem" fontSize="2.5rem" style={{ color: '#FFF', fontSize: '2.5rem', margin: '0', marginTop: '2rem', alignSelf: 'center' }}>Book Now</Button>
//             </Link>           
//             <div className="logo_box-mob">
//                 <SmlLogo width="20rem" height="20rem"/>
//             </div>
//         </StyledMoBox>  
//     )
// }

/***/ })

})
//# sourceMappingURL=about.js.104924aad181e95ecaa9.hot-update.js.map