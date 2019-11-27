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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ "./node_modules/@material-ui/icons/AddCircleOutline.js");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Icons */ "./components/Icons.js");

var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/exhibitors/ExhibitorsPop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "ExhibitorsPop__StyledModal",
  componentId: "i20f48-0"
})(["display:flex;flex:1;flex-flow:column;justify-content:center;align-items:center;margin-top:9rem;.paper{max-width:42rem;max-height:62.5rem;padding:2rem;}.closeBtn{transform:rotate(45deg);font-size:2.5rem;}.ModalLogo{width:50%;margin-bottom:2rem;}.ModalTitle{font-family:", ";font-size:3.1rem;color:", ";}.ModalContact{font-family:", ";font-size:1.1rem;margin-right:.5rem;}.ModalIcon{transform:translateY(-1rem);width:80%;}.ModalSummary{font-family:", ";font-size:1.1rem;padding-top:1rem;}.ModalBooth{font-family:", ";font-size:1.7rem;color:", ";padding:1rem 0;}.ModalMapTitle{font-family:", ";font-size:1.7rem;color:", ";padding:1rem 0;}.ModalMapBox{}"], function (props) {
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
var StyledMapBox = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "ExhibitorsPop__StyledMapBox",
  componentId: "i20f48-1"
})(["width:37.9rem;height:22.9rem;background-color:goldenrod;align-self:center;"]);
function ServerModal(props) {
  var rootRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var name = props.name,
      img = props.img,
      booth = props.booth,
      country = props.country,
      height = props.height,
      summary = props.summary,
      website = props.website,
      phone = props.phone,
      email = props.email;

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
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
      lineNumber: 133
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    fontSize: "1.1rem",
    background: "#134381",
    bcolor: "#134381",
    padding: ".8rem ",
    type: "button",
    onClick: handleOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Learn more"), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3__["default"],
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
    className: "",
    container: function container() {
      return rootRef.current;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "in": open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(StyledModal, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "paper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 12,
    direction: "row",
    wrap: true,
    justify: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("img", {
    className: "ModalLogo",
    src: img,
    alt: "logo",
    onError: addDefaultSrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 6,
    style: {
      textAlign: 'end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    "aria-label": "close",
    onClick: handleClose,
    style: {
      padding: '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fontSize: "large",
    className: "closeBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "ModalTitle",
    id: "server-modal-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, name)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    item: true,
    xs: 1,
    style: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_12__["PhoneIcon"], {
    className: "ModalIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "ModalContact",
    id: "server-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, phone)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    item: true,
    xs: 1,
    style: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_12__["GlobeIcon"], {
    className: "ModalIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "ModalContact",
    id: "server-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, website)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    item: true,
    xs: 1,
    style: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_12__["MailIcon"], {
    className: "ModalIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    item: true,
    xs: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "ModalContact",
    id: "server-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, email)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "ModalSummary",
    id: "server-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, summary)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "ModalBooth",
    id: "server-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Booth #", booth)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "ModalMapTitle",
    id: "server-modal-description",
    style: {
      textAlign: 'end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "View on map below")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx(StyledMapBox, {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }))))))));
}

/***/ })

})
//# sourceMappingURL=exhibitors.js.e01cae4c15f9ccdb2962.hot-update.js.map