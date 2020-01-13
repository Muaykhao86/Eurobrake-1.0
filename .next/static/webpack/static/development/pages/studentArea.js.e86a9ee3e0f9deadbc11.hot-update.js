webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./pages/studentArea.js":
/*!******************************!*\
  !*** ./pages/studentArea.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HeroSection */ "./components/HeroSection.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMoreOutlined */ "./node_modules/@material-ui/icons/ExpandMoreOutlined.js");
/* harmony import */ var _material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/PageStyles */ "./components/styles/PageStyles.js");
/* harmony import */ var _components_Dates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Dates */ "./components/Dates.js");
/* harmony import */ var _components_forms_FormActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/forms/FormActions */ "./components/forms/FormActions.js");


var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/studentArea.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







 // * NEED TO SORT OUT A PAGE TO TEST FORMSA AND LINKS FORM ONE PAGE WOITH PIUT BEIN ONLINE AL THE TIME

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var GetDef =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var type, paper, formData, res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = _ref.type, paper = _ref.paper;
              console.log({
                type: type,
                paper: paper
              });
              _context.next = 4;
              return Object(_components_forms_FormActions__WEBPACK_IMPORTED_MODULE_9__["GetForm"])("https://prelude.eurobrake.net/authors/tasks/".concat(type, "/").concat(paper, "?definition=1"));

            case 4:
              formData = _context.sent;
              _context.next = 7;
              return formData;

            case 7:
              res = _context.sent;
              return _context.abrupt("return", console.log({
                res: res
              }));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function GetDef(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    max: "60%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Testing of the forms we are"), __jsx(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_7__["StyledPage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Get some definitions"), __jsx("button", {
    onClick: function onClick() {
      return GetDef('paper', 'EB2020-MDS-002');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Tech paper"), __jsx("button", {
    onClick: function onClick() {
      return GetDef('ppt', 'EB2020-MDS-002');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "PPT"), __jsx("button", {
    onClick: function onClick() {
      return GetDef('permissions', 'EB2020-MDS-002');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "permissions"), __jsx("button", {
    onClick: function onClick() {
      return GetDef('poster-accept', 'EB2020-MDS-002');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "poster-accept"), __jsx("button", {
    onClick: function onClick() {
      return GetDef('poster', 'EB2020-MDS-002');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "poster"), __jsx("button", {
    onClick: function onClick() {
      return GetDef('pitchvideo', 'EB2020-MDS-002');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "pitchvideo")));
});

/***/ })

})
//# sourceMappingURL=studentArea.js.e86a9ee3e0f9deadbc11.hot-update.js.map