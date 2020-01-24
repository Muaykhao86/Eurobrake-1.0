webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: HeaderLogo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLogo", function() { return HeaderLogo; });
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
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");







var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var HeaderBar = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Header__HeaderBar",
  componentId: "zfe6h7-0"
})(["color:white;position:fixed;background-color:", ";min-width:100%;height:10rem;display:flex;justify-content:flex-end;align-items:center;z-index:100;border-bottom:5px solid ", ";.logo{position:absolute;left:8rem;}.head{position:absolute;display:flex;flex-flow:column;justify-content:flex-start;align-items:center;&-title{text-align:end;font-size:2rem;font-family:", ";color:", ";align-self:flex-start;max-width:95%;}&-date{text-align:end;font-size:1.8rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}&-text{text-align:end;font-size:1.8rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}&-text-it{text-align:end;font-size:1.5rem;font-family:", ";color:", ";align-self:flex-end;max-width:90%;}}"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.MPBlack;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.MPSemibold;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.white;
});
var HeaderLogo = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].img.attrs(function (props) {
  return {
    src: "/images/logo.png",
    alt: "Logo"
  };
}).withConfig({
  displayName: "Header__HeaderLogo",
  componentId: "zfe6h7-1"
})(["max-width:16.8rem;cursor:pointer;"]);

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "headerScroll", function () {
      if (global.window.scrollY === 0) {
        _this.setState(function (prev) {
          return {
            sticky: false
          };
        });
      } else {
        _this.setState(function (prev) {
          return {
            sticky: true
          };
        });
      }
    });

    _this.myRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.state = {
      sticky: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.headerScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.addEventListener('scroll', this.headerScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(HeaderBar, {
        sticky: this.state.sticky,
        ref: this.myRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("a", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx(HeaderLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }))), __jsx("div", {
        className: "head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "head-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Europe's braking technology conference & exhibition"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: "head-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "2-4 June 2020, CCIB, Barcelona, Spain")), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        sticky: this.state.sticky,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Header); // const HeaderButton = styled.button`
//     font-size: 1.5rem;
//     font-family: ${props => props.theme.MPBold};
//     margin-left: 2rem;
//     text-transform: uppercase;
//     align-self: flex-end;
//     min-width: 16rem;
//     min-height: 100%;
//     background-color: ${props => props.sticky ?
//     props.theme.secondary : 'transparent'};
//     border: none;
//     color:${props => props.theme.white};
//      /* ${props => props.sticky ? 
//     props.theme.primary : props.theme.white}; */
//     cursor: pointer;
//     outline: none;
//     &:hover{
//         background-color: ${props => props.sticky ?
//         props.theme.primary : props.theme.secondary};
//         color: ${props => props.sticky ?
//         props.theme.secondary : props.theme.primary};
//         border: 2px solid ${props => props.sticky ?
//         props.theme.secondary : 'transparent'};
//         box-shadow: (0, 0, 0, 0.5);
//     }
//     `;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.dce0f0410c5b2bc29b4b.hot-update.js.map