webpackHotUpdate("static/development/pages/authorsAreaInstructions.js",{

/***/ "./components/InstructionsPopup.js":
/*!*****************************************!*\
  !*** ./components/InstructionsPopup.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstructionsPopup; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ "./components/Button.js");


var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/InstructionsPopup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    display: flex;\n    flex-flow: column wrap;\n    align-self: center;\n    justify-content: space-between;\n    /* min-width: 55vw; */\n    background-color: ", ";\n    padding: 2rem;\n    \n    \n.MuiDialog-paperWidthSm {\n    max-width: 55vw;\n}\n    a{  cursor: pointer;\n          color: ", ";\n        font-family: ", ";\n        font-size: 2rem;\n   \n    }\n    .popup{\n        color: ", ";\n        font-family: ", ";\n        font-size: 2rem;\n\n        width: 55vw;\n        \n   \n    &-title{\n        color: ", ";\n        font-family: ", ";\n        font-size: 4.4rem;\n        margin-top: 3rem;\n        margin-bottom: 3rem;\n    }\n   \n    &_sub-title{\n        color: ", ";\n        font-size: 3.5rem;\n        font-family: ", ";\n        padding-bottom: .5rem;\n        margin-top: 3rem;\n        margin-bottom: 3rem;\n    }\n    &-bold{\n        font-family: ", ";\n    }\n    &-it{\n        font-family: ", ";\n    }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var StyledPopup = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBold;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPSemibold;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.MPBold;
}, function (props) {
  return props.theme.MPLightIt;
});
function InstructionsPopup(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("a", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setOpen(function (open) {
        return !open;
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, props.children), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    onClose: function onClose() {
      return setOpen(function (open) {
        return !open;
      });
    },
    "aria-labelledby": "dialog-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "dialog-title",
    className: "popup-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "popup-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Assignment of copyright of your Technical Paper")), __jsx(StyledPopup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    className: "popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "As the organiser of EuroBrake and publisher of the conference proceedings, FISITA needs to acquire copyright in all Technical Papers. There are two reasons for this:"), __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    className: "popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Ownership of the copyright ensures maximum international protection against infringement")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    className: "popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, " It also ensures that requests by third parties to reprint a Technical Paper, or part of it, are handled efficiently and centrally in accordance with FISITA's general policy to encourage the dissemination of technical knowledge inside the framework of copyright."))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    className: "popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "If for any reason your Technical Paper is not published, the rights revert to the present copyright holder."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    className: "popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Your Technical Paper may be published and / or stored electronically by us and then transmitted to meet individual requests. You hereby agree to us making the necessary arrangements to include your Technical Paper in document delivery services and electronic databases."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    className: "popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Where the copyright is held by a number of joint authors, the Principal or Presenting Author must assign copyright to FISITA on behalf of all authors of the Technical Paper, and is responsible for securing any necessary consents from such co-authors to assign copyright of the work to us."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    className: "popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "If you are unable to assign copyright to us for any reason, we may be unable to publish your paper. Please contact us immediately at g.wilkins@fisita.com if you are not able to assign copyright or if you require any clarification about copyright assignment."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    className: "popup-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Liscensing others to use the Copyright Work"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    className: "popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "We will not withhold permission for any reasonable request from you to publish any part of your Technical Paper in connection with any other work by you."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    className: "popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Should you wish to copy, modify or reproduce all or part of the Copyright Work, please complete the correct license agreement from the downloads below and send this in to Philippa Morrell at ", __jsx("span", {
    className: "popup-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "p.morrell@fisita.com.")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    className: "popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "The correct acknowledgements regarding copyright attribution can be found on the license agreement."))));
  {
    /* <form>
       <DialogTitle id="form-dialog-title">Upload File</DialogTitle>
       <DialogContent>
         <DialogContentText>
           Please do not exceed 50mb file size example
       </DialogContentText>
       
       </DialogContent>
       <DialogActions>
         <Button onClick={() => setOpen(open => !open)} value="cancel" color="#134381" bcolor="#134381">
           Cancel
       </Button>
         
       </DialogActions>
    </form> */
  }
}

/***/ })

})
//# sourceMappingURL=authorsAreaInstructions.js.d55cc65a8a1412c03064.hot-update.js.map