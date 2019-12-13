webpackHotUpdate("static/development/pages/authorsArea.js",{

/***/ "./components/LoginExpandTable.js":
/*!****************************************!*\
  !*** ./components/LoginExpandTable.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginExpandTable; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/login */ "./components/login.js");
/* harmony import */ var _components_Forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Forms */ "./components/Forms.js");

var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/LoginExpandTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var ExpansionPanel = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "LoginExpandTable__ExpansionPanel",
  componentId: "qzdpfy-0"
})(["border:'1px solid rgba(0, 0, 0, .125)';box-shadow:0;border-top:2px solid ", ";&:last-child{border-bottom:2px solid ", ";}&::before{background-color:transparent;}.table_summary-box{display:flex;}.table-icon{font-size:5rem;color:", ";}.table-heading{color:", ";font-family:", ";font-size:3rem;margin:0 2rem;}.table-sub{color:", ";font-family:", ";font-size:3rem;margin-left:7rem;}"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPSemibold;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLightIt;
});
var ExpansionPanelSummary = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "LoginExpandTable__ExpansionPanelSummary",
  componentId: "qzdpfy-1"
})([".MuiExpansionPanelSummary-content{flex-flow:column;}&&{padding:0;margin-bottom:-1;min-height:56;}"]);
var ExpansionPanelDetails = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "LoginExpandTable__ExpansionPanelDetails",
  componentId: "qzdpfy-2"
})(["padding:2rem;"]);
var StyledCell = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"]).withConfig({
  displayName: "LoginExpandTable__StyledCell",
  componentId: "qzdpfy-3"
})(["&&.MuiTableCell-root{border-bottom:0;padding:.5rem;}&&.StyledCell-title{font-family:", ";font-size:2rem;color:", ";}&&.StyledCell-data{font-family:", ";font-size:2rem;color:", ";}"], function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBold;
}, function (props) {
  return props.theme.primary;
});
function LoginExpandTable() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('panel1'),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var handleChange = function handleChange(panel) {
    return function (event, newExpanded) {
      setExpanded(newExpanded ? panel : false);
    };
  };

  function createData(days, Early, Full) {
    return {
      days: days,
      Early: Early,
      Full: Full
    };
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(ExpansionPanel, {
    square: true,
    expanded: expanded === 'panel1',
    onChange: handleChange('panel1'),
    style: {
      boxShadow: '0 0 0 0 rgba(0,0,0,0)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(ExpansionPanelSummary, {
    "aria-controls": "panel1d-content",
    id: "panel1d-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    className: "table_summary-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, expanded === 'panel1' ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RemoveCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Login")), expanded !== 'panel1' ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Click to reveal Login Form") : null), __jsx(ExpansionPanelDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_components_login__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }))), __jsx(ExpansionPanel, {
    square: true,
    expanded: expanded === 'panel2',
    onChange: handleChange('panel2'),
    style: {
      boxShadow: '0 0 0 0 rgba(0,0,0,0)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(ExpansionPanelSummary, {
    "aria-controls": "panel2d-content",
    id: "panel2d-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: "table_summary-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, expanded === 'panel2' ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RemoveCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Create Author Account")), expanded !== 'panel2' ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Click to reveal Form") : null), __jsx(ExpansionPanelDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(_components_Forms__WEBPACK_IMPORTED_MODULE_13__["AbstractForm"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=authorsArea.js.7daf64e4b62adee41696.hot-update.js.map