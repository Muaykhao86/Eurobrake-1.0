webpackHotUpdate("static/development/pages/exhibitorsRegistration.js",{

/***/ "./components/ExpandTable.js":
/*!***********************************!*\
  !*** ./components/ExpandTable.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExpandTable; });
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

var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/ExpandTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var ExpansionPanel = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "ExpandTable__ExpansionPanel",
  componentId: "g6m2mr-0"
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
  displayName: "ExpandTable__ExpansionPanelSummary",
  componentId: "g6m2mr-1"
})([".MuiExpansionPanelSummary-content{flex-flow:column;}&&{padding:0;margin-bottom:-1;min-height:56;}"]);
var ExpansionPanelDetails = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "ExpandTable__ExpansionPanelDetails",
  componentId: "g6m2mr-2"
})(["padding:2rem;"]);
var StyledCell = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"]).withConfig({
  displayName: "ExpandTable__StyledCell",
  componentId: "g6m2mr-3"
})(["&&.MuiTableCell-root{border-bottom:0;padding:.5rem;}&&.StyledCell-title{font-family:", ";font-size:2rem;color:", ";}&&.StyledCell-data{font-family:", ";font-size:2rem;color:", ";}"], function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBold;
}, function (props) {
  return props.theme.primary;
});
function ExpandTable() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('panel1'),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var handleChange = function handleChange(panel) {
    return function (event, newExpanded) {
      setExpanded(newExpanded ? panel : false);
    };
  };

  function createData(days, Early, Full, walk) {
    return {
      days: days,
      Early: Early,
      Full: Full,
      walk: walk
    };
  }

  var delegateRows = [createData('3 x days', 940, 1180), createData('2 x days', 640, 800), createData('1 x days', 320, 400)];
  var delegateMemberRows = [createData('3 x days', 846, 1000), createData('2 x days', 576, 720), createData('1 x days', 288, 360)];
  var studentRows = [createData('3 x days', 170, 170), createData('2 x days', 170, 170), createData('1 x days', 170, 170)];
  var expoRows = [createData('3 x days', 220, 250, 280), createData('2 x days', 150, 180, 200), createData('1 x days', 70, 100, 150)];
  var academicRows = [createData('3 x days', 658, 826), createData('2 x days', 448, 560), createData('1 x days', 224, 280)];
  var academicSessionRows = [createData('3 x days', 348, 348), createData('2 x days', 237, 237), createData('1 x days', 118, 118)];
  var sessionRows = [createData('3 x days', 517, 517), createData('2 x days', 352, 352), createData('1 x days', 176, 176)];
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
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
      lineNumber: 141
    },
    __self: this
  }, __jsx(ExpansionPanelSummary, {
    "aria-controls": "panel1d-content",
    id: "panel1d-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    className: "table_summary-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, expanded === 'panel1' ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RemoveCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Delegate")), expanded !== 'panel1' ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Click to reveal prices") : null), __jsx(ExpansionPanelDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "",
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, delegateRows.map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: row.days,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx(StyledCell, {
      component: "th",
      scope: "row",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, row.days), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, "Earlybird price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "\u20AC ", row.Early.toFixed(2)), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Full Price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "\u20AC ", row.Full.toFixed(2)));
  }))))), __jsx(ExpansionPanel, {
    square: true,
    expanded: expanded === 'panel2',
    onChange: handleChange('panel2'),
    style: {
      boxShadow: '0 0 0 0 rgba(0,0,0,0)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(ExpansionPanelSummary, {
    "aria-controls": "panel2d-content",
    id: "panel2d-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("div", {
    className: "table_summary-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, expanded === 'panel2' ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RemoveCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Delegate - Member Society")), expanded !== 'panel2' ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Click to reveal prices") : null), __jsx(ExpansionPanelDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "",
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, delegateMemberRows.map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: row.days,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx(StyledCell, {
      component: "th",
      scope: "row",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, row.days), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "Earlybird price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, "\u20AC ", row.Early.toFixed(2)), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "Full Price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, "\u20AC ", row.Full.toFixed(2)));
  }))))), __jsx(ExpansionPanel, {
    square: true,
    expanded: expanded === 'panel3',
    onChange: handleChange('panel3'),
    style: {
      boxShadow: '0 0 0 0 rgba(0,0,0,0)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx(ExpansionPanelSummary, {
    "aria-controls": "panel3d-content",
    id: "panel3d-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("div", {
    className: "table_summary-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, expanded === 'panel3' ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RemoveCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Student")), expanded !== 'panel3' ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Click to reveal prices") : null), __jsx(ExpansionPanelDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "",
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, studentRows.map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: row.days,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, __jsx(StyledCell, {
      component: "th",
      scope: "row",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, row.days), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, "Earlybird price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, "\u20AC ", row.Early.toFixed(2)), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, "Full Price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, "\u20AC ", row.Full.toFixed(2)));
  }))))), __jsx(ExpansionPanel, {
    square: true,
    expanded: expanded === 'panel4',
    onChange: handleChange('panel4'),
    style: {
      boxShadow: '0 0 0 0 rgba(0,0,0,0)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx(ExpansionPanelSummary, {
    "aria-controls": "panel4d-content",
    id: "panel4d-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx("div", {
    className: "table_summary-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, expanded === 'panel4' ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RemoveCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Expo Only")), expanded !== 'panel4' ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "Click to reveal prices") : null), __jsx(ExpansionPanelDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "",
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, expoRows.map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: row.days,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, __jsx(StyledCell, {
      component: "th",
      scope: "row",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, row.days), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, "Earlybird price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, "\u20AC ", row.Early.toFixed(2)), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, "Full Price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, "\u20AC ", row.Full.toFixed(2)), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, "Walk in"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, "\u20AC ", row.walk.toFixed(2)));
  }))))), __jsx(ExpansionPanel, {
    square: true,
    expanded: expanded === 'panel5',
    onChange: handleChange('panel5'),
    style: {
      boxShadow: '0 0 0 0 rgba(0,0,0,0)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx(ExpansionPanelSummary, {
    "aria-controls": "panel5d-content",
    id: "panel5d-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx("div", {
    className: "table_summary-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, expanded === 'panel5' ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RemoveCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, "Academic")), expanded !== 'panel5' ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, "Click to reveal prices") : null), __jsx(ExpansionPanelDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "",
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, academicRows.map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: row.days,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, __jsx(StyledCell, {
      component: "th",
      scope: "row",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, row.days), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, "Earlybird price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, "\u20AC ", row.Early.toFixed(2)), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, "Full Price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, "\u20AC ", row.Full.toFixed(2)));
  }))))), __jsx(ExpansionPanel, {
    square: true,
    expanded: expanded === 'panel6',
    onChange: handleChange('panel6'),
    style: {
      boxShadow: '0 0 0 0 rgba(0,0,0,0)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx(ExpansionPanelSummary, {
    "aria-controls": "panel6d-content",
    id: "panel6d-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx("div", {
    className: "table_summary-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, expanded === 'panel6' ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RemoveCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, "Academic Session - Chair/Speaker/Author")), expanded !== 'panel6' ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "Click to reveal prices") : null), __jsx(ExpansionPanelDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "",
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, academicSessionRows.map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: row.days,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      },
      __self: this
    }, __jsx(StyledCell, {
      component: "th",
      scope: "row",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, row.days), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: this
    }, "Earlybird price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, "\u20AC ", row.Early.toFixed(2)), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, "Full Price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }, "\u20AC ", row.Full.toFixed(2)));
  }))))), __jsx(ExpansionPanel, {
    square: true,
    expanded: expanded === 'panel7',
    onChange: handleChange('panel7'),
    style: {
      boxShadow: '0 0 0 0 rgba(0,0,0,0)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, __jsx(ExpansionPanelSummary, {
    "aria-controls": "panel7d-content",
    id: "panel7d-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, __jsx("div", {
    className: "table_summary-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, expanded === 'panel7' ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RemoveCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "Session - Chair/Speaker/Author")), expanded !== 'panel7' ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, "Click to reveal prices") : null), __jsx(ExpansionPanelDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "",
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, sessionRows.map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: row.days,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, __jsx(StyledCell, {
      component: "th",
      scope: "row",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }, row.days), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: this
    }, "Earlybird price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, "\u20AC ", row.Early.toFixed(2)), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }, "Full Price"), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }, "\u20AC ", row.Full.toFixed(2)));
  }))))));
}

/***/ })

})
//# sourceMappingURL=exhibitorsRegistration.js.7f38de7a166ea75f9b0e.hot-update.js.map