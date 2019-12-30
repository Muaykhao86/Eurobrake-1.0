webpackHotUpdate("static/development/pages/authorsArea.js",{

/***/ "./components/forms/FormActions.js":
/*!*****************************************!*\
  !*** ./components/forms/FormActions.js ***!
  \*****************************************/
/*! exports provided: GetForm, SendFile, SendForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetForm", function() { return GetForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFile", function() { return SendFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendForm", function() { return SendForm; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




function GetForm(_x) {
  return _GetForm.apply(this, arguments);
}

function _GetForm() {
  _GetForm = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(url) {
    var _cookie$get, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _cookie$get = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(), logintoken = _cookie$get.logintoken;
            console.log({
              logintoken: logintoken
            });
            _context.prev = 2;
            apiUrl = url;
            _context.next = 6;
            return fetch(apiUrl, {
              credentials: 'include',
              headers: {
                Authorization: 'Bearer ' + logintoken
              }
            });

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            data = _context.sent;

            if (!(data.status === 'success')) {
              _context.next = 16;
              break;
            }

            console.log('getForm', data);
            console.log('tkn', data.__csrf_token);
            return _context.abrupt("return", data);

          case 16:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 19:
            _context.next = 24;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](2);
            console.error('Failed to get form, please try again', _context.t0); // return error.message

          case 24:
            return _context.abrupt("return");

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 21]]);
  }));
  return _GetForm.apply(this, arguments);
}

function SendFile(_x2) {
  return _SendFile.apply(this, arguments);
}

function _SendFile() {
  _SendFile = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref) {
    var csrf, file, formData, _cookie$get2, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            csrf = _ref.csrf, file = _ref.file;
            formData = new FormData();
            _cookie$get2 = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(), logintoken = _cookie$get2.logintoken;
            formData.append('__csrf_token', csrf);
            formData.append('filename', file);
            console.log({
              logintoken: logintoken,
              csrf: csrf,
              file: file
            });

            if (!(logintoken && csrf && file)) {
              _context2.next = 29;
              break;
            }

            _context2.prev = 7;
            apiUrl = 'https://prelude.eurobrake.net/upload';
            _context2.next = 11;
            return fetch(apiUrl, {
              method: 'POST',
              body: formData,
              credentials: 'include',
              headers: {
                Authorization: 'Bearer ' + logintoken
              }
            });

          case 11:
            response = _context2.sent;
            _context2.next = 14;
            return response.json();

          case 14:
            data = _context2.sent;
            _context2.next = 17;
            return console.log({
              data: data
            });

          case 17:
            if (!(data.status === 'success')) {
              _context2.next = 21;
              break;
            }

            console.log('getForm', data);
            _context2.next = 24;
            break;

          case 21:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 24:
            _context2.next = 29;
            break;

          case 26:
            _context2.prev = 26;
            _context2.t0 = _context2["catch"](7);
            console.error('Failed to get form, please try again', _context2.t0); // this.setState({ error: error.message });

          case 29:
            return _context2.abrupt("return");

          case 30:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 26]]);
  }));
  return _SendFile.apply(this, arguments);
}

function SendForm(_x3) {
  return _SendForm.apply(this, arguments);
}

function _SendForm() {
  _SendForm = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(_ref2) {
    var _this = this;

    var csrf, formData, url, form, _cookie$get3, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            csrf = _ref2.csrf, formData = _ref2.formData, url = _ref2.url;
            form = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(formData);
            _cookie$get3 = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(), logintoken = _cookie$get3.logintoken;

            if (!(logintoken && csrf && formData)) {
              _context4.next = 24;
              break;
            }

            _context4.prev = 4;
            apiUrl = url;
            _context4.next = 8;
            return fetch(apiUrl, {
              body: form,
              credentials: 'include',
              headers: {
                Authorization: 'Bearer ' + logintoken
              }
            });

          case 8:
            response = _context4.sent;
            _context4.next = 11;
            return response.json();

          case 11:
            data = _context4.sent;

            if (!(data.status === 'success')) {
              _context4.next = 16;
              break;
            }

            console.log('getForm', data);
            _context4.next = 19;
            break;

          case 16:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 19:
            _context4.next = 24;
            break;

          case 21:
            _context4.prev = 21;
            _context4.t0 = _context4["catch"](4);
            console.error('Failed to get form, please try again', _context4.t0);

          case 24:
            if (url === 'https://prelude.eurobrake.net/login') {
              onSubmit =
              /*#__PURE__*/
              function () {
                var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(e) {
                  var _this$state, username, password, error, formData, _response, _data, _logintoken, _error;

                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          e.preventDefault();
                          _this$state = _this.state, username = _this$state.username, password = _this$state.password, error = _this$state.error; // const apiUrl = authorLogin ? 'https://prelude.eurobrake.net/login' : '' ;
                          // action="//2019.eurobrake.net/exhibition/exhibitors/login" SHOULD BE LOGIN FORM FOR EXHIBITORS

                          formData = {
                            username: username,
                            password: password
                          };
                          _context3.prev = 3;
                          _context3.next = 6;
                          return fetch('https://prelude.eurobrake.net/login', {
                            method: 'POST',
                            credentials: 'include',
                            body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(formData),
                            headers: {
                              'Content-Type': 'application/json'
                            }
                          });

                        case 6:
                          _response = _context3.sent;
                          _context3.next = 9;
                          return _response.json();

                        case 9:
                          _data = _context3.sent;

                          if (!(data2.status === 'success')) {
                            _context3.next = 17;
                            break;
                          }

                          _logintoken = _data.logintoken;
                          _context3.next = 14;
                          return login({
                            logintoken: _logintoken
                          });

                        case 14:
                          return _context3.abrupt("return", {});

                        case 17:
                          _error = new Error(_data.error);
                          _error.response = _response;
                          throw _error;

                        case 20:
                          _context3.next = 26;
                          break;

                        case 22:
                          _context3.prev = 22;
                          _context3.t0 = _context3["catch"](3);
                          console.error('Failed to login, please try again', _context3.t0);

                          _this.setState({
                            error: _context3.t0.message
                          });

                        case 26:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, null, [[3, 22]]);
                }));

                return function onSubmit(_x4) {
                  return _ref3.apply(this, arguments);
                };
              }();
            }

            return _context4.abrupt("return");

          case 26:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 21]]);
  }));
  return _SendForm.apply(this, arguments);
}

/***/ }),

/***/ "./components/forms/LoginForm.js":
/*!***************************************!*\
  !*** ./components/forms/LoginForm.js ***!
  \***************************************/
/*! exports provided: LoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/LoginForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var LoginForm = function LoginForm() {
  return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_1__["StyledForm"], {
    className: "login_form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "login_form-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "label",
    className: "login_form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Email:"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      color: '#134381'
    },
    label: "Required",
    className: "login_form-input",
    type: "text",
    name: "username",
    onChange: _this.saveToState,
    value: _this.state.username,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("div", {
    className: "login_form-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("label", {
    className: "login_form-label",
    htmlFor: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Password:"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Required",
    className: "login_form-input",
    type: "password",
    name: "password",
    onChange: _this.saveToState,
    value: _this.state.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: function onClick() {
      return Object(_FormActions__WEBPACK_IMPORTED_MODULE_6__["SendForm"])({
        url: 'https://prelude.eurobrake.net/login'
      });
    },
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
      lineNumber: 46
    },
    __self: this
  }, "Login"), __jsx("a", {
    className: "login_form-link",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Forgotten your password?"));
};

/***/ })

})
//# sourceMappingURL=authorsArea.js.bfaa1efc497bb3409ed2.hot-update.js.map