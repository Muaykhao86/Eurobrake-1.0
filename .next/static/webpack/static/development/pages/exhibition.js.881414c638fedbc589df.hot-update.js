webpackHotUpdate("static/development/pages/exhibition.js",{

/***/ "./pages/exhibition.js":
/*!*****************************!*\
  !*** ./pages/exhibition.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HeroSection */ "./components/HeroSection.js");
/* harmony import */ var _material_ui_icons_Stop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Stop */ "./node_modules/@material-ui/icons/Stop.js");
/* harmony import */ var _material_ui_icons_Stop__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Stop__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Icons */ "./components/Icons.js");
/* harmony import */ var _components_Dates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Dates */ "./components/Dates.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/exhibition.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var StyledFloorPlan = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "exhibition__StyledFloorPlan",
  componentId: "mmbavj-0"
})(["background-color:#FFF;width:", ";height:", ";display:flex;position:", ";z-index:", ";top:0;left:", ";right:", ";margin-left:", ";margin-right:", ";"], function (props) {
  return props.width || '100%';
}, function (props) {
  return props.height || '100%';
}, function (props) {
  return props.full ? 'Fixed' : 'relative';
}, function (props) {
  return props.full ? '1000' : '90';
}, function (props) {
  return props.full ? '50%' : '';
}, function (props) {
  return props.full ? '50%' : '';
}, function (props) {
  return props.full ? '-50vw' : '0';
}, function (props) {
  return props.full ? '-50vw' : '0';
});
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "exhibition__StyledPage",
  componentId: "mmbavj-1"
})(["display:flex;flex-direction:column;align-self:center;width:", ";background-color:", ";@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){width:", ";}.Exhibit{color:", ";font-family:", ";font-size:2rem;&-icon{position:absolute;left:-29px;top:9px;&_text{line-height:3.5rem;position:relative;margin-left:3rem;}}&-title{color:", ";font-family:", ";font-size:4.4rem;margin-top:3rem;}&_list{li{position:relative;list-style-type:none;list-style-position:inside;margin-left:3rem;margin-bottom:1rem;line-height:3.5rem;&:before{content:'\u25A0';position:absolute;font-size:3.14rem;left:-27px;top:-6.1px;}}}&_list-title{margin-bottom:1rem;font-family:", ";font-size:2rem;}&_sub-title{color:", ";font-size:3.5rem;font-family:", ";padding-bottom:.5rem;}&-bold{font-family:", ";}&-italic{font-family:", "}&-boldIt{font-family:", "}}.button_box{display:flex;flex-flow:column;justify-content:flex-start;align-items:flex-start;}.infoBox{display:flex;flex-flow:column;justify-content:center;min-height:24rem;background-color:", ";width:100vw;position:relative;left:50%;right:50%;margin-left:-50.5vw;margin-right:-50.5vw;&-text{padding:2rem;align-self:center;width:50%;@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){width:80%;};}}.margin-top5{margin-top:5rem;}.margin-bottom1.5{margin-bottom:1.5rem;}"], function (props) {
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
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.MPBoldIt;
}, function (props) {
  return props.theme.primary2;
});
var StyledQuote = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "exhibition__StyledQuote",
  componentId: "mmbavj-2"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      full = _useState[0],
      setFull = _useState[1];

  var svgWidth = full ? '100vw' : '1000';
  var svgHeight = full ? '100vh' : '';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    max: "55%",
    src: "https://live.staticflickr.com/65535/48016099856_3d2f30aedc_b.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Exhibition and Sponsorship"), __jsx(StyledPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(_components_Dates__WEBPACK_IMPORTED_MODULE_8__["FixedDates"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx(_components_Dates__WEBPACK_IMPORTED_MODULE_8__["FixedBox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx("div", {
    className: "Exhibit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutterBottom: true,
    className: "Exhibit-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Exhibit & Sponsor at EuroBrake"), __jsx("div", {
    className: "margin-bottom1.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("img", {
    src: "/images/ccibClip.png",
    alt: "",
    style: {
      width: '100%',
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutterBottom: true,
    className: "Exhibit Exhibit-bold margin-top5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "EuroBrake\u2019s accompanying technical exhibition offers an ideal opportunity to present your company\u2019s products, services and technical capabilities to key decision-makers, from industry players to new entrants in specialist engineering. "), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutterBottom: true,
    className: "Exhibit ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "There were around 100 companies that took part in the EuroBrake 2019 exhibition, representing the entire value chain from leading industry players to new entrants, including brake suppliers, component suppliers, material manufacturers and specialist engineering, testing, measurement and simulation providers. EuroBrake\u2019s exhibition has rapidly sold out in previous years, companies are advised to book well in advance of the event as in-demand booths are sold on a first-come, first-served basis."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutterBottom: true,
    className: "Exhibit ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "A range of sought-after sponsorship packages are available to help position your company as a leader in the braking technology world."), __jsx("div", {
    className: "button_box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    target: "_blank",
    href: "https://www.fisita.com/documents/EuroBrake_2020_Exhibition_and_Sponsorship_Brochure.pdf",
    background: "#134381",
    br: "100rem",
    bcolor: "#134381",
    style: {
      margin: '3.5rem 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Download the exhibition & sponsorship brochure")), __jsx(StyledQuote, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_7__["Quote"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutterBottom: true,
    className: "Exhibit-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Why exhibit at EuroBrake?"), __jsx("ul", {
    className: "Exhibit_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, " ", __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Exhibit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "Build relationships with existing and new customers throughout the vehicle and braking communities")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, " ", __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Exhibit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Save time and cost with an efficient programme located in a convenient European location"), " "), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, " ", __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Exhibit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Take advantage of great value exhibition and sponsorship packages which include delegate attendance, visibility in the programme and on line \u2013 all promoted throughout the FISITA network"))), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutterBottom: true,
    className: "Exhibit  Exhibit-bold",
    style: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "For more information please contact FISITA: "), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutterBottom: true,
    className: "Exhibit  Exhibit-bold Exhibit-icon_text",
    style: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_7__["PhoneIcon"], {
    className: "Exhibit-icon",
    width: "20",
    height: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }), " +44 (0) 1279883470 "), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gutterBottom: true,
    className: "Exhibit Exhibit-bold  Exhibit-icon_text",
    style: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_7__["MailIcon"], {
    className: "Exhibit-icon",
    width: "20",
    height: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }), " sales@fisita.com")), __jsx("div", {
    className: "button_box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    target: "_blank",
    href: "https://www.fisita.com/documents/EuroBrake_Exhibition_Terms_Conditions_2020.pdf",
    background: "#134381",
    br: "100rem",
    bcolor: "#134381",
    style: {
      margin: '3rem 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "DOWNLOAD THE EXHBITOR TERMS & CONDITIONS"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    target: "_blank",
    href: "https://www.fisita.com/documents/EB20_Floor_Plan.pdf",
    background: "#134381",
    br: "100rem",
    bcolor: "#134381",
    style: {
      margin: '1rem 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "View the event floor plan")))));
});
{
  /* <Link href="/exhibitors">
                 <Al>
                     List of Exhibitors
                 </Al>
             </Link>
             <Link href="/exhibitorsRegistration">
                 <Al>
                     Register
                 </Al>
             </Link> */
}

/***/ })

})
//# sourceMappingURL=exhibition.js.881414c638fedbc589df.hot-update.js.map