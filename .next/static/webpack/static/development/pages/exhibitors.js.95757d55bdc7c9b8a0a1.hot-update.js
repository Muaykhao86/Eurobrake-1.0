webpackHotUpdate("static/development/pages/exhibitors.js",{

/***/ "./components/exhibitors/ExhibitorsPop.js":
/*!************************************************!*\
  !*** ./components/exhibitors/ExhibitorsPop.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServerModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ "./node_modules/@material-ui/icons/AddCircleOutline.js");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Icons */ "./components/Icons.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Page */ "./components/Page.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/exhibitors/ExhibitorsPop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ExhibitorsPop__StyledModal",
  componentId: "i20f48-0"
})(["width:100%;height:100%;display:flex;flex:1;flex-flow:column;align-items:center;margin-top:5rem;justify-content:stretch;.paper{padding:2rem;margin:2rem;width:30vw;@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){width:70vw;}}.closeBtn{transform:rotate(45deg);font-size:2.5rem;}.ModalLogo{width:50%;margin-bottom:2rem;}.ModalTitle{font-family:", ";font-size:2.1rem;color:", ";}.ModalContact{font-family:", ";font-size:1.4rem;margin-right:.5rem;}.ModalIcon{transform:translateY(-.3rem);width:70%;height:70%;}.ModalSummary{max-height:15rem;font-family:", ";font-size:1.4rem;padding-top:1rem;overflow:auto;}.ModalBooth{font-family:", ";font-size:1.7rem;color:", ";padding:1rem 0;}.ModalMapTitle{font-family:", ";font-size:1.7rem;color:", ";padding:1rem 0;}"], function (props) {
  return props.theme.MPSemibold;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.MPSemiLight;
}, function (props) {
  return props.theme.MPBlack;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.primary;
});
var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["keyframes"])(["0%{opacity:1;}20%{opacity:.8;}50%{opacity:.6;}80%{opacity:.2;}100%{opacity:0;}"]);
var StyledMapBox = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ExhibitorsPop__StyledMapBox",
  componentId: "i20f48-1"
})(["position:", ";top:-1;left:", ";right:", ";margin-left:", ";margin-right:", ";background-color:", ";width:", ";height:", ";border:1px solid ", ";align-self:center;overflow:hidden;svg{.findMe{fill:#134381;animation:1s ", " ease-in-out infinite;}}"], function (props) {
  return props.full ? 'Fixed' : 'relative';
}, function (props) {
  return props.full ? '50%' : '';
}, function (props) {
  return props.full ? '50%' : '';
}, function (props) {
  return props.full ? '-50vw' : '0';
}, function (props) {
  return props.full ? '-50vw' : '0';
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.width || '100%';
}, function (props) {
  return props.width || '100%';
}, function (props) {
  return props.theme.primary;
}, fadeIn);
function ServerModal(props) {
  var rootRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      full = _useState2[0],
      setFull = _useState2[1];

  var name = props.name,
      img = props.img,
      booth = props.booth,
      country = props.country,
      height = props.height,
      summary = props.summary,
      website = props.website,
      phone = props.phone,
      email = props.email;
  var svgWidth = full ? '100vw' : '';
  var svgHeight = full ? '100vh' : '';
  var selectedSvg = "#prefix__booth-".concat(booth);

  var handleOpen = function handleOpen() {
    setOpen(true);
    handleSvg();
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleSvg = function handleSvg() {
    console.log({
      booth: booth
    }); // const svg = document.querySelector("#MapBox");
  }; //Image handler Component


  var addDefaultSrc = function addDefaultSrc(e) {
    e.target.src = "/images/logo.png";
    e.target.onerror = null;
    return;
  };

  return __jsx("div", {
    className: "",
    ref: rootRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    fontSize: "1.1rem",
    background: "#134381",
    bcolor: "#134381",
    padding: ".8rem ",
    type: "button",
    onClick: handleOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Learn more"), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2__["default"],
    BackdropProps: {
      timeout: 500
    },
    open: open,
    onClose: handleClose,
    disablePortal: true,
    disableEnforceFocus: true,
    disableAutoFocus: true,
    "aria-labelledby": "server-modal-title",
    "aria-describedby": "server-modal-description",
    className: "modal",
    container: function container() {
      return rootRef.current;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "in": open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx(StyledModal, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "paper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 1,
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx("img", {
    className: "ModalLogo",
    src: img,
    alt: "logo",
    onError: function onError(e) {
      return addDefaultSrc(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 6,
    style: {
      textAlign: 'end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-label": "close",
    onClick: handleClose,
    style: {
      padding: '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fontSize: "large",
    className: "closeBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gutterBottom: true,
    className: "ModalTitle",
    id: "server-modal-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, name)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 1,
    style: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_11__["PhoneIcon"], {
    className: "ModalIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gutterBottom: true,
    className: "ModalContact",
    id: "server-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, phone)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 1,
    style: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_11__["GlobeIcon"], {
    className: "ModalIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gutterBottom: true,
    className: "ModalContact",
    id: "server-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, website)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 1,
    style: {
      transform: 'translateY(.4rem)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_11__["MailIcon"], {
    className: "ModalIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gutterBottom: true,
    className: "ModalContact",
    id: "server-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, email)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "ModalSummary",
    id: "server-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, summary)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "ModalBooth",
    id: "server-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "Booth #", booth)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      return console.log('HEY');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "ModalMapTitle",
    id: "server-modal-description",
    style: {
      textAlign: 'end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "View full screen map"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx(StyledMapBox, {
    width: svgWidth,
    height: svgHeight,
    full: full,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_11__["EBFloorPlan"], {
    id: "FP",
    booth: booth,
    onClick: function onClick() {
      return setFull(function (full) {
        return !full;
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  })))))))));
}

/***/ })

})
//# sourceMappingURL=exhibitors.js.95757d55bdc7c9b8a0a1.hot-update.js.map