webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: device, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/Page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    @font-face {\n    font-family: 'MyriadPro-Regular';\n    src: url('/fonts/MyriadPro-Regular.otf');\n    font-weight: normal;\n    font-display: auto;\n    font-style: normal;\n    };\n    @font-face {\n    font-family: 'MyriadPro-Bold';\n    src: url('/fonts/MyriadPro-Bold.otf');\n    font-weight: bold;\n    font-display: auto;\n    font-style: normal;\n    };\n    @font-face {\n    font-family: 'MyriadPro-BoldIt';\n    src: url('/fonts/MyriadPro-BoldIt.otf');\n    font-weight: bold;\n    font-display: auto;\n    font-style: normal;\n    };\n    @font-face {\n    font-family: 'MyriadPro-Semibold';\n    src: url('/fonts/MyriadPro-Semibold.otf');\n    font-weight: 600;\n    font-display: auto;\n    font-style: normal;\n    };\n    @font-face {\n    font-family: 'MyriadPro-Light';\n    src: url('/fonts/MyriadPro-Light.otf');\n    font-weight: 300;\n    font-display: auto;\n    font-style: normal;\n    };\n    @font-face {\n    font-family: 'MyriadPro-LightIt';\n    src: url('/fonts/MyriadPro-LightIt.otf');\n    font-weight: lighter;\n    font-display: auto;\n    font-style: normal;\n    };\n    @font-face {\n    font-family: 'MyriadPro-It';\n    src: url('/fonts/MyriadPro-It.otf');\n    font-display: auto;\n    font-style: normal;\n    };\n    @font-face {\n    font-family: 'MyriadPro-Black';\n    src: url('/fonts/MyriadPro-Black.otf');\n    font-weight: 300;\n    font-display: auto;\n    font-style: normal;\n    };\n    *,\n    *::before,\n    *::after{\n        margin: 0;\n        padding: 0;\n        box-sizing: inherit;\n    };\n    html{\n        height: 100%;\n        box-sizing:  border-box;\n        font-size: 62.5%; \n        \n    };\n    body{\n        /* To set the footer at the bottom we have to leave space for it in the parent container */\n        position: relative;\n        min-height: 100%;\n        padding-bottom: 40rem; /* ! FOOTER PADDING , HAS BEEN KNOW TO PUSH PAGE UP\n        font-family: ", ";\n        color: black;\n        line-height: 1.6;\n        /* 1.2 */\n    }\n    \n    a{\n        text-decoration: none;\n        color: black;\n    }\n    ;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var size = {
  mobile: '26.5rem',
  // 425px
  tablet: '48rem',
  // 768px
  laptop: '64rem',
  // 1024px
  desktop: '160rem' // 2560px

};
var device = {
  mobile: "(max-width: ".concat(size.mobile, ")"),
  tablet: "(max-width: ".concat(size.tablet, ")"),
  laptop: "(max-width: ".concat(size.laptop, ")"),
  desktop: "(max-width: ".concat(size.desktop, ")")
};
var theme = {
  black: '#000',
  white: '#FFF',
  primary: '#134381',
  primary2: '#D2E6FF',
  secondary: '#F9B721',
  MPRegular: 'MyriadPro-Regular',
  MPBold: 'MyriadPro-Bold',
  MPBoldIt: 'MyriadPro-BoldIt',
  MPSemibold: 'MyriadPro-Semibold',
  MPLight: 'MyriadPro-Light',
  MPLightIt: 'MyriadPro-LightIt',
  MPIt: 'MyriadPro-It',
  MPBlack: 'MyriadPro-Black',
  heroHeightSml: '50%',
  heroHeightBig: '100vh',
  laptopWidth: '65%',
  mobileWidth: '80%',
  tabletWidth: '90%',
  minWidth: '50%',
  bs: '0 1.2rem 2.4rem rgba(0, 0, 0, .09)'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-1cyutnt-0"
})(["display:flex;flex-flow:column;justify-content:space-between;background:white;"]);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.MPRegular;
});

var Page =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, __jsx(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), __jsx(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), this.props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      })));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.d39381f09e268e5e15c2.hot-update.js.map