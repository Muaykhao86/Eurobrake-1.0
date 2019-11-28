webpackHotUpdate("static/development/pages/authorsArea.js",{

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Button */ "./components/Button.js");










var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;






var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].form.withConfig({
  displayName: "login__StyledForm",
  componentId: "sc-1otdfux-0"
})(["display:flex;flex-flow:column;justify-content:space-between;align-items:center;min-width:100%;.MuiInput-underline:after{color:", ";}.MuiInputBase-root{font-family:", ";font-size:2rem;color:", ";}input:-internal-autofill-selected{}.login_form{&-field{margin:1rem 0;width:100%;display:flex;justify-content:space-between;align-items:flex-end;}&-label{font-family:", ";font-size:2.6rem;color:", ";}&-input{min-width:40rem;font-family:", ";font-size:5rem;color:", ";}&-link{font-family:", ";font-size:5rem;color:", ";}}"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBoldIt;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBoldIt;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBoldIt;
}, function (props) {
  return props.theme.primary;
});

var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Login, _Component);

  // static getInitialProps = async function () {
  //     const { logintoken } = cookie.get();
  //     const res = await fetch('https://prelude.eurobrake.net/login', {
  //         credentials: 'include',
  //         headers: {
  //             Authorization: `Bearer ${logintoken}`,
  //         }
  //     });
  //     const data = await res.json();
  //     return {
  //         form: data
  //     };
  // };
  function Login(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Login);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Login).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "saveToState", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var _this$state, username, password, error, formData, response, data, logintoken, _error;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _this$state = _this.state, username = _this$state.username, password = _this$state.password, error = _this$state.error; // const apiUrl = authorLogin ? 'https://prelude.eurobrake.net/login' : '' ;
                // action="//2019.eurobrake.net/exhibition/exhibitors/login" SHOULD BE LOGIN FORM FOR EXHIBITORS

                formData = {
                  username: username,
                  password: password
                };
                _context.prev = 3;
                _context.next = 6;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()('https://prelude.eurobrake.net/login', {
                  method: 'POST',
                  credentials: 'include',
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(formData)
                });

              case 6:
                response = _context.sent;
                _context.next = 9;
                return response.json();

              case 9:
                data = _context.sent;

                if (!(data.status === 'success')) {
                  _context.next = 17;
                  break;
                }

                logintoken = data.logintoken;
                _context.next = 14;
                return Object(_utils_auth__WEBPACK_IMPORTED_MODULE_14__["login"])({
                  logintoken: logintoken
                });

              case 14:
                return _context.abrupt("return", {});

              case 17:
                _error = new Error(data.error);
                _error.response = response;
                throw _error;

              case 20:
                _context.next = 26;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](3);
                console.error('Failed to login, please try again', _context.t0);

                _this.setState({
                  error: _context.t0.message
                });

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 22]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      username: '',
      password: '',
      error: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, [{
    key: "render",
    value: function render() {
      return __jsx(StyledForm, {
        className: "login_form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("div", {
        className: "login_form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "label",
        className: "login_form-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Email:"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          color: '#134381'
        },
        id: "standard-required",
        label: "Required",
        required: true,
        className: "login_form-input",
        type: "text",
        name: "username",
        onChange: this.saveToState,
        value: this.state.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      })), __jsx("div", {
        className: "login_form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx("label", {
        className: "login_form-label",
        htmlFor: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Password:"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "standard-required",
        required: true,
        label: "Required",
        className: "login_form-input",
        type: "password",
        name: "password",
        onChange: this.saveToState,
        value: this.state.password,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        onClick: this.onSubmit,
        value: "Submit",
        bcolor: "#134381",
        background: "#134381",
        br: "100rem",
        style: {
          margin: "3rem 0"
        },
        fs: "1.8rem",
        padding: ".5rem 6rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Login"), __jsx("a", {
        className: "login_form-link",
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Forgotten your password?"));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=authorsArea.js.260b965eaa69fea97760.hot-update.js.map