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
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Icons */ "./components/Icons.js");







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
})(["max-width:40rem;@media only screen  and (max-device-width:1500px)  and (-webkit-min-device-pixel-ratio:2){max-width:20rem;}cursor:pointer;"]);

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
      return __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["NavStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["HiddenNavBG"], {
        isOpen: this.state.isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["HiddenContainer"], {
        isOpen: this.state.isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("div", {
        className: "nav_box-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(NavLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), __jsx("div", {
        className: "nav-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-inner-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Europe's braking technology conference & exhibition"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-inner-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "2-4 June 2020, CCIB, Barcelona, Spain"))), __jsx("div", {
        className: "nav_container-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        className: "nav_box-right",
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(_Dates__WEBPACK_IMPORTED_MODULE_13__["Box"], {
        MW: "35rem",
        handleClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), __jsx("div", {
        className: "nav_box-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("div", {
        className: "nav_box-middle-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("div", {
        className: "nav-title-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "For Delegates"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        style: {
          color: '#F9B721'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "& Visitors")), __jsx("div", {
        className: "nav-links-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "About"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitorsRegistration",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Registration"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/technicalProgram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Technical Program"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/welcome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Welcome to Barcelona"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/f/[id]/[formType]",
        as: "/f/FISITA/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Contact Us")))), __jsx("div", {
        className: "nav-title-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "For Students"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        style: {
          color: '#F9B721'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "& Educators")), __jsx("div", {
        className: "nav-links-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/esop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "ESOP - Student Opportunities Programme"))))), __jsx("div", {
        className: "nav_box-middle-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("div", {
        className: "nav-title-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "For Exhibitors"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        style: {
          color: '#F9B721'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "& Sponsors")), __jsx("div", {
        className: "nav-links-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitAndSponsor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Exhibit And Sponsor"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/exhibitors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Exhibitor Directory"))))), __jsx("div", {
        className: "nav_box-middle-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("div", {
        className: "nav-title-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "For Authors"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        style: {
          color: '#F9B721'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "& Speakers")), __jsx("div", {
        className: "nav-links-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/authorsArea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Authors Area"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/authorsAreaInstructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Templates")))))), __jsx("div", {
        className: "nav_box-left",
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx(_Dates__WEBPACK_IMPORTED_MODULE_13__["Dates"], {
        MW: "35rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }))), __jsx("div", {
        className: "nav_box-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "nav_box-bottom-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Organised by"), __jsx("a", {
        href: "https://www.fisita.com/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_15__["FLogoWhite"], {
        width: "16rem",
        height: "5rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })))), __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["Burger"], {
        isOpen: this.state.isOpen,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_11__["TopBun"], {
        isOpen: this.state.isOpen,
        sticky: this.props.sticky,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); // <Link href="/"><a onClick={this.handleClick} >Home</a></Link>
//                             <Link href="/about"><a onClick={this.handleClick} >About</a></Link>
//                             <Link href="/authorsArea"><a onClick={this.handleClick}>Authors Area</a></Link>
//                             {/* <Link href="/exhibitorsArea"><a onClick={this.handleClick}>Exhibitors Area</a></Link> */}
//                             <Link href="/f/[id]/[formType]" as={`/f/FISITA/contact`} ><a onClick={this.handleClick} >Contact Us</a></Link>
//                             <Link href="/esop"><a onClick={this.handleClick}>Student Opportunities Programme</a></Link>
//                             <Link href="/exhibitAndSponsor"><a onClick={this.handleClick}>Exhibition And Sponsorship</a></Link>
//                             <Link href="/welcome"><a onClick={this.handleClick}>Welcome to Barcelona</a></Link>
//                             <Link href="/exhibitors"><a onClick={this.handleClick}>Exhibitors List</a></Link>
//                             <Link href="/exhibitorsRegistration"><a onClick={this.handleClick}>Delegate Registration</a></Link>
//                             <Link href="/technicalProgram"><a onClick={this.handleClick}>Technical Program</a></Link>
//                             <Link href="/studentArea" ><a onClick={this.handleClick}>Testing</a></Link>




/***/ })

})
//# sourceMappingURL=index.js.5515137bc378f74b1b34.hot-update.js.map