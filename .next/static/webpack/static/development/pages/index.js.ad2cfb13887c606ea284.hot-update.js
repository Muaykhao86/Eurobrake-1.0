webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: NavLogo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLogo", function() { return NavLogo; });
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var _Dates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Dates */ "./components/Dates.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Header */ "./components/Header.js");







var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/Nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].img.attrs(function (props) {
  return {
    src: "/images/logo.png",
    alt: "Logo"
  };
}).withConfig({
  displayName: "Nav__NavLogo",
  componentId: "r7d7s0-0"
})(["max-width:40rem;cursor:pointer;"]);

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
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "render",
    value: function render() {
      return __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["NavStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["HiddenNavBG"], {
        isOpen: this.state.isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["HiddenContainer"], {
        isOpen: this.state.isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("div", {
        className: "nav_box-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(NavLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), __jsx("div", {
        className: "nav_container-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("div", {
        className: "nav_box-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
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
      }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/authorsArea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Authors Area")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/f/[id]/[formType]",
        as: "/f/FISITA/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Contact Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/esop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Student Opportunities Programme")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitAndSponsor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Exhibition And Sponsorship")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/welcome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Welcome to Barcelona")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Exhibitors List")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitorsRegistration",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Delegate Registration")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/technicalProgram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Technical Program")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/studentArea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Testing"))), __jsx("div", {
        className: "nav_box-3",
        style: {
          marginTop: '2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(_Dates__WEBPACK_IMPORTED_MODULE_13__["Dates"], {
        MW: "35rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })))), __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["Burger"], {
        isOpen: this.state.isOpen,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["TopBun"], {
        isOpen: this.state.isOpen,
        sticky: this.props.sticky,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.ad2cfb13887c606ea284.hot-update.js.map