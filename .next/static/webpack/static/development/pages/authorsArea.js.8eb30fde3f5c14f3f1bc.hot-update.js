webpackHotUpdate("static/development/pages/authorsArea.js",{

/***/ "./components/forms/FormActions.js":
/*!*****************************************!*\
  !*** ./components/forms/FormActions.js ***!
  \*****************************************/
/*! exports provided: GetFormSSR, GetForm, SendFile, SendForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFormSSR", function() { return GetFormSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetForm", function() { return GetForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFile", function() { return SendFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendForm", function() { return SendForm; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");








function GetFormSSR(_x) {
  return _GetFormSSR.apply(this, arguments);
}

function _GetFormSSR() {
  _GetFormSSR = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref) {
    var url, context, _cookies, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, context = _ref.context;
            // use `nextCookie` to get the cookie and pass the token to the frontend in the `props`.
            _cookies = next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(context), logintoken = _cookies.logintoken;
            console.log({
              logintoken: logintoken
            });
            _context.prev = 3;
            apiUrl = url;
            _context.next = 7;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(apiUrl, {
              credentials: 'include',
              cache: 'no-cache',
              headers: {
                Authorization: 'Bearer ' + logintoken
              }
            });

          case 7:
            response = _context.sent;
            _context.next = 10;
            return response.json();

          case 10:
            data = _context.sent;

            if (!(data.status === 'success')) {
              _context.next = 17;
              break;
            }

            console.log('getForm', data);
            console.log('tkn', data.__csrf_token);
            return _context.abrupt("return", data);

          case 17:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 20:
            _context.next = 25;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](3);
            console.error('Failed to get form, please try again', _context.t0); // return error.message

          case 25:
            return _context.abrupt("return");

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 22]]);
  }));
  return _GetFormSSR.apply(this, arguments);
}

function GetForm(_x2) {
  return _GetForm.apply(this, arguments);
}

function _GetForm() {
  _GetForm = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(url) {
    var _cookie$get, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _cookie$get = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get(), logintoken = _cookie$get.logintoken;
            console.log({
              logintoken: logintoken
            });
            _context2.prev = 2;
            apiUrl = url;
            _context2.next = 6;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(apiUrl, {
              credentials: 'include',
              cache: 'no-cache',
              headers: {
                Authorization: 'Bearer ' + logintoken
              }
            });

          case 6:
            response = _context2.sent;
            _context2.next = 9;
            return response.json();

          case 9:
            data = _context2.sent;

            if (!(data.status === 'success')) {
              _context2.next = 16;
              break;
            }

            console.log('getForm', data);
            console.log('tkn', data.__csrf_token);
            return _context2.abrupt("return", data);

          case 16:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 19:
            _context2.next = 24;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](2);
            console.error('Failed to get form, please try again', _context2.t0); // return error.message

          case 24:
            return _context2.abrupt("return");

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 21]]);
  }));
  return _GetForm.apply(this, arguments);
}

function SendFile(_x3) {
  return _SendFile.apply(this, arguments);
}

function _SendFile() {
  _SendFile = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(_ref2) {
    var values, url, csrf, _cookie$get2, logintoken, formData, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            values = _ref2.values, url = _ref2.url, csrf = _ref2.csrf;
            _cookie$get2 = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get(), logintoken = _cookie$get2.logintoken;
            formData = new FormData();
            values.accept && values.accept === true ? values.accept = 'yes' : null;
            values.copyright && values.copyright === true ? values.copyright = 'yes' : null;

            _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(values).forEach(function (key) {
              formData.append(key, values[key]);
            });

            console.log({
              logintoken: logintoken,
              url: url
            });

            if (!(logintoken && csrf)) {
              _context3.next = 31;
              break;
            }

            _context3.prev = 8;
            apiUrl = url;
            _context3.next = 12;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(apiUrl, {
              method: 'POST',
              body: formData,
              credentials: 'include',
              headers: {
                Authorization: 'Bearer ' + logintoken
              }
            });

          case 12:
            response = _context3.sent;
            _context3.next = 15;
            return response.json();

          case 15:
            data = _context3.sent;
            _context3.next = 18;
            return console.log({
              data: data
            });

          case 18:
            if (!(data.status === 'success')) {
              _context3.next = 22;
              break;
            }

            console.log('getForm', data);
            _context3.next = 25;
            break;

          case 22:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 25:
            _context3.next = 31;
            break;

          case 27:
            _context3.prev = 27;
            _context3.t0 = _context3["catch"](8);
            console.error('Failed to get form, please try again', _context3.t0);
            this.setState({
              error: _context3.t0.message
            });

          case 31:
            return _context3.abrupt("return");

          case 32:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[8, 27]]);
  }));
  return _SendFile.apply(this, arguments);
}

function SendForm(_x4) {
  return _SendForm.apply(this, arguments);
}

function _SendForm() {
  _SendForm = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(_ref3) {
    var csrf, values, url, FT, form, _cookie$get3, logintoken, apiUrl, response, data, error, _response, _data, _logintoken, _error, _response2, _data2, _error2;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            csrf = _ref3.csrf, values = _ref3.values, url = _ref3.url, FT = _ref3.FT;
            form = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values);
            _cookie$get3 = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get(), logintoken = _cookie$get3.logintoken;
            console.log({
              url: url,
              form: form,
              FT: FT
            });

            if (!(logintoken && csrf && form)) {
              _context4.next = 26;
              break;
            }

            _context4.prev = 5;
            apiUrl = url;
            _context4.next = 9;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(apiUrl, {
              method: 'POST',
              body: form,
              credentials: 'include',
              headers: {
                Authorization: 'Bearer ' + logintoken,
                'Content-Type': 'application/json'
              }
            });

          case 9:
            response = _context4.sent;
            _context4.next = 12;
            return response.json();

          case 12:
            data = _context4.sent;

            if (!(data.status === 'success')) {
              _context4.next = 18;
              break;
            }

            console.log('getForm', data);
            return _context4.abrupt("return", data);

          case 18:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 21:
            _context4.next = 26;
            break;

          case 23:
            _context4.prev = 23;
            _context4.t0 = _context4["catch"](5);
            console.error('Failed to get form, please try again', _context4.t0);

          case 26:
            if (!(url === 'https://prelude.eurobrake.net/authors/login')) {
              _context4.next = 50;
              break;
            }

            console.log({
              url: url,
              form: form
            });
            _context4.prev = 28;
            _context4.next = 31;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(url, {
              method: 'POST',
              credentials: 'include',
              body: form,
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 31:
            _response = _context4.sent;
            _context4.next = 34;
            return _response.json();

          case 34:
            _data = _context4.sent;

            if (!(_data.status === 'success')) {
              _context4.next = 42;
              break;
            }

            _logintoken = _data.logintoken;
            _context4.next = 39;
            return Object(_utils_auth__WEBPACK_IMPORTED_MODULE_7__["login"])({
              logintoken: _logintoken
            });

          case 39:
            return _context4.abrupt("return", {});

          case 42:
            _error = new Error(_data.error);
            _error.response = _response;
            throw _error;

          case 45:
            _context4.next = 50;
            break;

          case 47:
            _context4.prev = 47;
            _context4.t1 = _context4["catch"](28);
            console.error('Failed to login, please try again', _context4.t1);

          case 50:
            if (!(FT === 'reset')) {
              _context4.next = 72;
              break;
            }

            console.log({
              url: url,
              form: form
            });
            _context4.prev = 52;
            _context4.next = 55;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(url, {
              method: 'POST',
              credentials: 'include',
              body: form,
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 55:
            _response2 = _context4.sent;
            _context4.next = 58;
            return _response2.json();

          case 58:
            _data2 = _context4.sent;

            if (!(_data2.status === 'success')) {
              _context4.next = 64;
              break;
            }

            console.log('getForm', _data2);
            return _context4.abrupt("return", _data2);

          case 64:
            _error2 = new Error(_data2.error);
            _error2.response = _response2;
            throw _error2;

          case 67:
            _context4.next = 72;
            break;

          case 69:
            _context4.prev = 69;
            _context4.t2 = _context4["catch"](52);
            console.error('Failed to reset, please try again', _context4.t2);

          case 72:
            return _context4.abrupt("return");

          case 73:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[5, 23], [28, 47], [52, 69]]);
  }));
  return _SendForm.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=authorsArea.js.8eb30fde3f5c14f3f1bc.hot-update.js.map