webpackHotUpdate("static/development/pages/studentArea.js",{

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");








var handleCheckBox =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var accept, copyright;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            accept = values.accept;
            copyright = values.copyright;
            accept === true && setFieldValue('accept', 'yes');
            return _context.abrupt("return");

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleCheckBox() {
    return _ref.apply(this, arguments);
  };
}();

function GetFormSSR(_x) {
  return _GetFormSSR.apply(this, arguments);
}

function _GetFormSSR() {
  _GetFormSSR = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref2) {
    var url, context, _cookies, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _ref2.url, context = _ref2.context;
            // We use `nextCookie` to get the cookie and pass the token to the frontend in the `props`.
            _cookies = next_cookies__WEBPACK_IMPORTED_MODULE_4___default()(context), logintoken = _cookies.logintoken;
            console.log({
              logintoken: logintoken
            });
            _context2.prev = 3;
            apiUrl = url;
            _context2.next = 7;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(apiUrl, {
              credentials: 'include',
              cache: 'no-cache',
              headers: {
                Authorization: 'Bearer ' + logintoken
              }
            });

          case 7:
            response = _context2.sent;
            _context2.next = 10;
            return response.json();

          case 10:
            data = _context2.sent;

            if (!(data.status === 'success')) {
              _context2.next = 17;
              break;
            }

            console.log('getForm', data);
            console.log('tkn', data.__csrf_token);
            return _context2.abrupt("return", data);

          case 17:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 20:
            _context2.next = 25;
            break;

          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](3);
            console.error('Failed to get form, please try again', _context2.t0); // return error.message

          case 25:
            return _context2.abrupt("return");

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 22]]);
  }));
  return _GetFormSSR.apply(this, arguments);
}

function GetForm(_x2) {
  return _GetForm.apply(this, arguments);
}

function _GetForm() {
  _GetForm = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(url) {
    var _cookie$get, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _cookie$get = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(), logintoken = _cookie$get.logintoken;
            console.log({
              logintoken: logintoken
            });
            _context3.prev = 2;
            apiUrl = url;
            _context3.next = 6;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(apiUrl, {
              credentials: 'include',
              headers: {
                Authorization: 'Bearer ' + logintoken
              }
            });

          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return response.json();

          case 9:
            data = _context3.sent;

            if (!(data.status === 'success')) {
              _context3.next = 16;
              break;
            }

            console.log('getForm', data);
            console.log('tkn', data.__csrf_token);
            return _context3.abrupt("return", data);

          case 16:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 19:
            _context3.next = 24;
            break;

          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](2);
            console.error('Failed to get form, please try again', _context3.t0); // return error.message

          case 24:
            return _context3.abrupt("return");

          case 25:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 21]]);
  }));
  return _GetForm.apply(this, arguments);
}

function SendFile(_x3) {
  return _SendFile.apply(this, arguments);
}

function _SendFile() {
  _SendFile = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(_ref3) {
    var values, url, formData, _cookie$get2, logintoken;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            values = _ref3.values, url = _ref3.url;
            formData = new FormData(values);
            _cookie$get2 = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(), logintoken = _cookie$get2.logintoken; // formData.append('filename', file);

            console.log({
              logintoken: logintoken,
              csrf: csrf,
              formData: formData,
              url: url
            }); // if (logintoken && csrf && file) {
            //     try {
            //         const apiUrl = url;
            //         const response = await fetch(apiUrl, {
            //             method: 'POST',
            //             body: formData,
            //             credentials: 'include',
            //             headers: {
            //                 Authorization: 'Bearer ' + logintoken,
            //             }
            //         });
            //         const data = await response.json();
            //         await console.log({ data })
            //         if (data.status === 'success') {
            //             console.log('getForm', data);
            //         } else {
            //             let error = new Error(data.error)
            //             error.response = response
            //             throw error
            //         }
            //     } catch (error) {
            //         console.error(
            //             'Failed to get form, please try again', error
            //         )
            //         // this.setState({ error: error.message });
            //     }
            // }

            return _context4.abrupt("return");

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _SendFile.apply(this, arguments);
}

function SendForm(_x4) {
  return _SendForm.apply(this, arguments);
}

function _SendForm() {
  _SendForm = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(_ref4) {
    var csrf, values, url, form, _cookie$get3, logintoken, apiUrl, response, data, error, _response, _data, _logintoken, _error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            csrf = _ref4.csrf, values = _ref4.values, url = _ref4.url;
            form = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values);
            _cookie$get3 = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(), logintoken = _cookie$get3.logintoken;
            console.log({
              url: url,
              form: form
            });

            if (!(logintoken && csrf && form)) {
              _context5.next = 25;
              break;
            }

            _context5.prev = 5;
            apiUrl = url;
            _context5.next = 9;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(apiUrl, {
              method: 'POST',
              body: form,
              credentials: 'include',
              headers: {
                Authorization: 'Bearer ' + logintoken,
                'Content-Type': 'application/json'
              }
            });

          case 9:
            response = _context5.sent;
            _context5.next = 12;
            return response.json();

          case 12:
            data = _context5.sent;

            if (!(data.status === 'success')) {
              _context5.next = 17;
              break;
            }

            console.log('getForm', data);
            _context5.next = 20;
            break;

          case 17:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 20:
            _context5.next = 25;
            break;

          case 22:
            _context5.prev = 22;
            _context5.t0 = _context5["catch"](5);
            console.error('Failed to get form, please try again', _context5.t0);

          case 25:
            if (!(url === 'https://prelude.eurobrake.net/authors/login')) {
              _context5.next = 49;
              break;
            }

            console.log({
              url: url,
              form: form
            });
            _context5.prev = 27;
            _context5.next = 30;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(url, {
              method: 'POST',
              credentials: 'include',
              body: form,
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 30:
            _response = _context5.sent;
            _context5.next = 33;
            return _response.json();

          case 33:
            _data = _context5.sent;

            if (!(_data.status === 'success')) {
              _context5.next = 41;
              break;
            }

            _logintoken = _data.logintoken;
            _context5.next = 38;
            return Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__["login"])({
              logintoken: _logintoken
            });

          case 38:
            return _context5.abrupt("return", {});

          case 41:
            _error = new Error(_data.error);
            _error.response = _response;
            throw _error;

          case 44:
            _context5.next = 49;
            break;

          case 46:
            _context5.prev = 46;
            _context5.t1 = _context5["catch"](27);
            console.error('Failed to login, please try again', _context5.t1);

          case 49:
            return _context5.abrupt("return");

          case 50:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[5, 22], [27, 46]]);
  }));
  return _SendForm.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=studentArea.js.99b5533eda2eb4c8f464.hot-update.js.map