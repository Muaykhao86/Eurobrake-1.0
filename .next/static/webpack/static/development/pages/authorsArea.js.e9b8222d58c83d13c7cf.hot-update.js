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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");






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
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(apiUrl, {
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
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(apiUrl, {
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
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref2) {
    var csrf, values, url, form, _cookie$get3, logintoken, apiUrl, response, data, error, _response, _data, _logintoken, _error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            csrf = _ref2.csrf, values = _ref2.values, url = _ref2.url;
            form = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values);
            _cookie$get3 = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(), logintoken = _cookie$get3.logintoken;
            console.log({
              url: url,
              form: form
            });

            if (!(logintoken && csrf && form)) {
              _context3.next = 25;
              break;
            }

            _context3.prev = 5;
            apiUrl = url;
            _context3.next = 9;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(apiUrl, {
              body: form,
              credentials: 'include',
              headers: {
                Authorization: 'Bearer ' + logintoken
              }
            });

          case 9:
            response = _context3.sent;
            _context3.next = 12;
            return response.json();

          case 12:
            data = _context3.sent;

            if (!(data.status === 'success')) {
              _context3.next = 17;
              break;
            }

            console.log('getForm', data);
            _context3.next = 20;
            break;

          case 17:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 20:
            _context3.next = 25;
            break;

          case 22:
            _context3.prev = 22;
            _context3.t0 = _context3["catch"](5);
            console.error('Failed to get form, please try again', _context3.t0);

          case 25:
            if (!(url === 'https://prelude.eurobrake.net/login')) {
              _context3.next = 49;
              break;
            }

            console.log({
              url: url,
              form: form
            });
            _context3.prev = 27;
            _context3.next = 30;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(url, {
              method: 'POST',
              credentials: 'include',
              body: form,
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 30:
            _response = _context3.sent;
            _context3.next = 33;
            return _response.json();

          case 33:
            _data = _context3.sent;

            if (!(_data.status === 'success')) {
              _context3.next = 41;
              break;
            }

            _logintoken = _data.logintoken;
            _context3.next = 38;
            return Object(_utils_auth__WEBPACK_IMPORTED_MODULE_5__["login"])({
              logintoken: _logintoken
            });

          case 38:
            return _context3.abrupt("return", {});

          case 41:
            _error = new Error(_data.error);
            _error.response = _response;
            throw _error;

          case 44:
            _context3.next = 49;
            break;

          case 46:
            _context3.prev = 46;
            _context3.t1 = _context3["catch"](27);
            console.error('Failed to login, please try again', _context3.t1);

          case 49:
            return _context3.abrupt("return");

          case 50:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 22], [27, 46]]);
  }));
  return _SendForm.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=authorsArea.js.e9b8222d58c83d13c7cf.hot-update.js.map