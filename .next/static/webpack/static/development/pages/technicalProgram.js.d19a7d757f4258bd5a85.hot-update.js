webpackHotUpdate("static/development/pages/technicalProgram.js",{

/***/ "./components/TechExpandTable.js":
/*!***************************************!*\
  !*** ./components/TechExpandTable.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TechExpandTable; });
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

var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/TechExpandTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var ExpansionPanel = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "TechExpandTable__ExpansionPanel",
  componentId: "sc-1yprg2e-0"
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
  displayName: "TechExpandTable__ExpansionPanelSummary",
  componentId: "sc-1yprg2e-1"
})([".MuiExpansionPanelSummary-content{flex-flow:column;}&&{padding:0;margin-bottom:-1;min-height:56;}"]);
var ExpansionPanelDetails = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "TechExpandTable__ExpansionPanelDetails",
  componentId: "sc-1yprg2e-2"
})(["padding:2rem;"]);
var StyledCell = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"]).withConfig({
  displayName: "TechExpandTable__StyledCell",
  componentId: "sc-1yprg2e-3"
})(["&&.MuiTableCell-root{border-bottom:0;padding:.5rem;}&&.StyledCell-title{font-family:", ";font-size:2rem;color:", ";}&&.StyledCell-data{font-family:", ";font-size:2rem;color:", ";}&&.StyledCell-sesh{font-family:", ";font-size:2rem;color:", ";}"], function (props) {
  return props.theme.MPLight;
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
});
function TechExpandTable() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('panel1'),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var handleChange = function handleChange(panel) {
    return function (event, newExpanded) {
      setExpanded(newExpanded ? panel : false);
    };
  };

  function createData(time, session, sessionName) {
    return {
      time: time,
      session: session,
      sessionName: sessionName
    };
  }

  var tuesday = [createData('10:00–12:00', 'Student Introductory Lecture', ''), createData('10:30–12:30', 'Registration and light lunch', ''), createData('13:00–13:15', 'Opening Ceremony', ''), createData('14:00–14:20', 'Break', ''), createData('14:40–16:00', 'Technical Sessions', ''), createData('', '', 'Brake Components in Transition'), createData('', '', 'Creep-groan Noise'), createData('', '', 'Electrification of Commercial Vehicles and Effects on Pneumatic Braking Systems'), createData('16:00–16:20', 'Break', ''), createData('16:20–18:00', 'Technical Sessions', ''), createData('', '', 'Fundamentals: Big Data Analytics and Uncertainty'), createData('', '', 'Innovative Raw Materials'), createData('', '', 'Innovative Technologies and Functions in Electronic Brake Systems'), createData('18:00–19:30', 'Welcome Reception', '')];
  var wednesday = [createData('08:30–10:10', 'Technical Sessions', ''), createData('', '', 'New Brake Control Strategies'), createData('', '', 'Fundamentals: Friction, Wear and Brake Emissions'), createData('', '', 'Squeal Noise: Simulation and Test Methods'), createData('10:10–10:40', 'Break', ''), createData('10:40–12:20', 'Technical Sessions', ''), createData('', '', 'Brake Emissions: Macroscopic Level Part 1'), createData('', '', 'Friction Induced Vibrations'), createData('', '', 'Innovative Brake System Design Approaches'), createData('12:20–13:50', 'Lunch', ''), createData('12:30–13:30', 'Open Seminar', ''), createData('13:50–15:30', 'Technical Sessions', ''), createData('', '', 'Advanced Formulations'), createData('', '', 'Brake Emissions: Macroscopic Level Part 2'), createData('', '', 'Poster Session'), createData('15:30–16:00', 'Break', ''), createData('16:00–17:40', 'Technical Sessions', ''), createData('', '', 'Brake Emissions: Microscopic Level'), createData('', '', 'Long Life Friction Materials: Opportunities and Challenges'), createData('', '', 'NVH challenges of Brakes in Electric Vehicles'), createData('18:00–19:00', 'Drinks Reception', ''), createData('19:00–22:30', 'EuroBrake Dinner including Awards', '')];
  var thursday = [createData('08:30–10:10', 'Technical Sessions', ''), createData('', '', 'Environmental Friendly Formulations'), createData('', '', 'Progressive Disc Coatings'), createData('', '', 'Virtual Development of Electronic Brake Systems'), createData('10:10–10:40', 'Break', ''), createData('10:40–12:20', 'Technical Sessions', ''), createData('', '', 'Innovative Brake Rotors'), createData('', '', 'Strategy Panel'), createData('12:20–13:20', 'Lunch', ''), createData('13:20–15:00', 'Technical Sessions', ''), createData('', '', 'Advanced Manufacturing with integrated Quality Control Friction Material'), createData('', '', 'Challenges Around the Physical Characterisation of Brake Discs: Theory and Metrology'), createData('', '', 'Latest Developments in Motorsport and Motorbike Brake Systems'), createData('15:00–15:30', 'Break', ''), createData('15:30–17:10', 'Technical Sessions', ''), createData('', '', 'Artificial Intelligence and Machine Learning'), createData('', '', 'Fundamentals of Friction'), createData('', '', 'International Regulations and Standards - ISO Project Review'), createData('17:10–18:10', 'Farewell Drinks Reception', '')];
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
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
      lineNumber: 176
    },
    __self: this
  }, __jsx(ExpansionPanelSummary, {
    "aria-controls": "panel1d-content",
    id: "panel1d-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("div", {
    className: "table_summary-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, expanded === 'panel1' ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RemoveCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Tuesday 2 June")), expanded !== 'panel1' ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Click to reveal timings") : null), __jsx(ExpansionPanelDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "",
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, tuesday.map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: row.time,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx(StyledCell, {
      component: "th",
      scope: "row",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, row.time), row.sessionName ? __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-sesh",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, row.sessionName) : __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, row.session));
  }))))), __jsx(ExpansionPanel, {
    square: true,
    expanded: expanded === 'panel2',
    onChange: handleChange('panel2'),
    style: {
      boxShadow: '0 0 0 0 rgba(0,0,0,0)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(ExpansionPanelSummary, {
    "aria-controls": "panel2d-content",
    id: "panel2d-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("div", {
    className: "table_summary-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, expanded === 'panel2' ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RemoveCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Wednesday 3 June")), expanded !== 'panel2' ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Click to reveal timimgs") : null), __jsx(ExpansionPanelDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "",
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, wednesday.map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: row.time,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, __jsx(StyledCell, {
      component: "th",
      scope: "row",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, row.time), row.sessionName ? __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-sesh",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, row.sessionName) : __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, row.session));
  }))))), __jsx(ExpansionPanel, {
    square: true,
    expanded: expanded === 'panel3',
    onChange: handleChange('panel3'),
    style: {
      boxShadow: '0 0 0 0 rgba(0,0,0,0)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx(ExpansionPanelSummary, {
    "aria-controls": "panel3d-content",
    id: "panel3d-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx("div", {
    className: "table_summary-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, expanded === 'panel3' ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["RemoveCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircle"], {
    className: "table-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "Thursday 4 June")), expanded !== 'panel3' ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "table-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Click to reveal timings") : null), __jsx(ExpansionPanelDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "",
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, thursday.map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: row.time,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, __jsx(StyledCell, {
      component: "th",
      scope: "row",
      className: "StyledCell-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, row.time), __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, row.session), row.sessionName && __jsx(StyledCell, {
      align: "left",
      className: "StyledCell-sesh",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, row.sessionName));
  }))))));
}

/***/ })

})
//# sourceMappingURL=technicalProgram.js.d19a7d757f4258bd5a85.hot-update.js.map