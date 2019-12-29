webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Button */ "./components/Button.js");







var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/Nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Nav, _Component);

  function Nav(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function () {
      _this.setState(function (prev) {
        return {
          isOpen: !prev.isOpen
        };
      });
    });

    _this.state = {
      isOpen: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "render",
    value: function render() {
      return __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_10__["NavStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_10__["HiddenNavBG"], {
        isOpen: this.state.isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_10__["HiddenContainer"], {
        isOpen: this.state.isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        className: "nav_box-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        className: "Nav-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Main"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/authorsArea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Authors Area")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitorsArea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Exhibitors Area")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/studentArea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Student Area")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitAndSponsor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Exhibition And Sponsorship")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/ticketPortal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Ticket Portal"))), __jsx("div", {
        className: "nav_box-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        className: "Nav-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Quick Links"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/welcome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Welcome to Barcelona")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Exhibitors List")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitorsRegistration",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Exhibitors Registration")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/authorsAreaInstructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Authors Area Instructions & Templates")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Technical Program"))), __jsx("div", {
        className: "nav_box-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("div", {
        className: "nav_box-5",
        style: {
          height: '50rem',
          width: '35rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        className: "Nav-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "IMPORTANT DATES")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/ticketPortal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        style: {
          width: '35rem',
          height: '15rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "BOOK NOW")))), __jsx("h1", {
        style: {
          alignSelf: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Menu"), __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_10__["Burger"], {
        isOpen: this.state.isOpen,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_10__["TopBun"], {
        isOpen: this.state.isOpen,
        sticky: this.props.sticky,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.33098d7b61054cadb900.hot-update.js.map