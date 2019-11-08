webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
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
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");










var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;




var DemoDiv = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].form.withConfig({
  displayName: "login__DemoDiv",
  componentId: "cxdurq-0"
})(["display:flex;flex-direction:column;align-self:center;max-width:", ";"], function (props) {
  return props.theme.maxWidth;
});
var Demo = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h1.withConfig({
  displayName: "login__Demo",
  componentId: "cxdurq-1"
})(["padding:10rem;margin:5rem;color:orangered;"]);

var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Login, _Component);

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
        var _this$state, authorLogin, username, password, error, apiUrl, formData, response, _ref2, logintoken, _error;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log('click');
                _this$state = _this.state, authorLogin = _this$state.authorLogin, username = _this$state.username, password = _this$state.password, error = _this$state.error;
                apiUrl = authorLogin ? 'https://prelude.eurobrake.net/login' : ''; // action="//2019.eurobrake.net/exhibition/exhibitors/login" SHOULD BE LOGIN FORM FOR EXHIBITORS

                formData = {
                  username: username,
                  password: password
                };
                _context.prev = 5;
                _context.next = 8;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()(apiUrl, {
                  method: 'POST',
                  credentials: 'include',
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(formData)
                });

              case 8:
                response = _context.sent;
                console.log(response);

                if (!(response.status === 'success')) {
                  _context.next = 20;
                  break;
                }

                _context.next = 13;
                return response.json();

              case 13:
                _ref2 = _context.sent;
                logintoken = _ref2.logintoken;
                console.log({
                  logintoken: logintoken
                });
                _context.next = 18;
                return Object(_utils_auth__WEBPACK_IMPORTED_MODULE_13__["login"])({
                  logintoken: logintoken
                });

              case 18:
                _context.next = 24;
                break;

              case 20:
                console.log('login failed');
                _error = new Error(response.statusText);
                _error.response = response;
                throw _error;

              case 24:
                _context.next = 30;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](5);
                console.error('Failed to login, please try again', _context.t0);

                _this.setState({
                  error: _context.t0.message
                });

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 26]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      username: '',
      password: '',
      authorLogin: true,
      error: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      var form = this.props.form.form;
      return __jsx(DemoDiv, {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx(Demo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, form[0].label), __jsx("input", {
        type: "text",
        name: form[0].name,
        onChange: this.saveToState,
        value: this.state.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), __jsx("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, form[1].label), __jsx("input", {
        type: "password",
        name: form[1].name,
        onChange: this.saveToState,
        value: this.state.password,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }))), __jsx("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]); // !!! NOTE IF I GO TO '/' IT GETS RID OF THE LOGGED IN COOKIE !!!


Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Login, "getInitialProps",
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()('https://prelude.eurobrake.net/login');

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return res.json()["catch"](function (error) {
            return console.log(error);
          });

        case 5:
          data = _context2.sent;
          ;
          return _context2.abrupt("return", {
            form: data
          });

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));



/***/ })

})
//# sourceMappingURL=login.js.bc494a481908eae92881.hot-update.js.map