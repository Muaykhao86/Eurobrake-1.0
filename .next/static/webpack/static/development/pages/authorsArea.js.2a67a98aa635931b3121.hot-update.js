webpackHotUpdate("static/development/pages/authorsArea.js",{

/***/ "./components/Forms.js":
/*!*****************************!*\
  !*** ./components/Forms.js ***!
  \*****************************/
/*! exports provided: GetForm, SendFile, SendForm, AbstractForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetForm", function() { return GetForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFile", function() { return SendFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendForm", function() { return SendForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractForm", function() { return AbstractForm; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/Forms.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









function GetForm(_x) {
  return _GetForm.apply(this, arguments);
}

function _GetForm() {
  _GetForm = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
    var _cookie$get, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _cookie$get = js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get(), logintoken = _cookie$get.logintoken;
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
            return _context.abrupt("return", data.__csrf_token);

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
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
    var csrf, file, formData, _cookie$get2, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            csrf = _ref.csrf, file = _ref.file;
            formData = new FormData();
            _cookie$get2 = js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get(), logintoken = _cookie$get2.logintoken;
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
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref2) {
    var csrf, formData, url, form, _cookie$get3, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            csrf = _ref2.csrf, formData = _ref2.formData, url = _ref2.url;
            form = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(formData);
            _cookie$get3 = js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get(), logintoken = _cookie$get3.logintoken;

            if (!(logintoken && csrf && formData)) {
              _context3.next = 24;
              break;
            }

            _context3.prev = 4;
            apiUrl = url;
            _context3.next = 8;
            return fetch(apiUrl, {
              body: form,
              credentials: 'include',
              headers: {
                Authorization: 'Bearer ' + logintoken
              }
            });

          case 8:
            response = _context3.sent;
            _context3.next = 11;
            return response.json();

          case 11:
            data = _context3.sent;

            if (!(data.status === 'success')) {
              _context3.next = 16;
              break;
            }

            console.log('getForm', data);
            _context3.next = 19;
            break;

          case 16:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 19:
            _context3.next = 24;
            break;

          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](4);
            console.error('Failed to get form, please try again', _context3.t0);

          case 24:
            return _context3.abrupt("return");

          case 25:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 21]]);
  }));
  return _SendForm.apply(this, arguments);
}

var AbstractSchema = yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
  author_firstname: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  author_lastname: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  author_email: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().email().required('Required'),
  author_jobtitle: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  author_company: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  author_address1: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  author_address2: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  author_address3: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  author_city: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  author_scp: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  author_postal: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  author_country: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  author_phone: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  is_presenting_author: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  submission_type: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  presentationtype_full: yup__WEBPACK_IMPORTED_MODULE_7__["string"](),
  papertitle: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  theme: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  subtheme: yup__WEBPACK_IMPORTED_MODULE_7__["array"]().max(3, 'Please select max of three subthemes!').required('Required'),
  "abstract": yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  keywords: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  previouspapers: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  consider_for_journal: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
  secondary_authors: yup__WEBPACK_IMPORTED_MODULE_7__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
    title: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
    firstname: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
    lastname: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
    email: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().email().required('Required'),
    company: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
    country: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required'),
    is_presenting_author: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Required')
  }))
});
var StyledForm = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"]).withConfig({
  displayName: "Forms__StyledForm",
  componentId: "sc-1q22qaj-0"
})(["display:flex;flex-flow:column;justify-content:space-between;align-items:center;min-width:100%;.MuiInput-underline:after{color:", ";}.MuiFormHelperText-root{font-size:1.5rem;}.MuiInputBase-root{font-family:", ";font-size:2rem;color:", ";}input:-internal-autofill-selected{}.login_form{&-field{margin:1rem 0;width:100%;display:flex;justify-content:space-between;align-items:flex-end;}&-label{font-family:", ";font-size:2.6rem;color:", ";}&-input{min-width:40rem;font-family:", ";font-size:2rem;color:", ";}&-link{font-family:", ";font-size:1.7rem;color:", ";}&-radio{text-align:end;}}"], function (props) {
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
}); // !    FUNCTIONS
// MAXTHREE CHECKBOX
// ? Handled by yup atm => doesnt disable but brings msg and stops submit
// ONLYONE PRESENTING
// ? ONLY GONE AND DONE IT N I?? 

var AbstractForm = function AbstractForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      presenter = _useState[0],
      setPresenter = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log('presenter is changing');
  }, [presenter]);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: emptyInitial,
    onSubmit: function onSubmit(values, actions) {
      setTimeout(function () {
        alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    },
    validationSchema: AbstractSchema,
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, function (_ref3) {
    var values = _ref3.values,
        isSubmitting = _ref3.isSubmitting,
        isValidating = _ref3.isValidating,
        handleChange = _ref3.handleChange,
        setFieldValue = _ref3.setFieldValue;

    var allNo = function allNo(_ref4) {
      var name = _ref4.name;

      if (true) {
        var radios = document.querySelectorAll('input[name*="is_presenting_author"]');
        {
          /* console.log(name) */
        }
        radios.forEach(function (input) {
          input.name !== name && setFieldValue(input.name, input.value) && console.log('gonna change...', input.name, 'cos it aint the same as...', name);
        });
      }
    };

    var onPresenterChange = function onPresenterChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      value === 'no' ? setPresenter('') : setPresenter(name);
      setFieldValue(name, value);
      allNo({
        name: name
      });
      return console.log({
        values: values
      });
    };

    return __jsx(StyledForm, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, "Primary Author"), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, "Title"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_title,
      style: {
        color: '#134381'
      },
      name: "author_title",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, titles.map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, "First Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_firstname,
      style: {
        color: '#134381'
      },
      name: "author_firstname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, "Last Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_lastname,
      style: {
        color: '#134381'
      },
      name: "author_lastname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_email,
      style: {
        color: '#134381'
      },
      name: "author_email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    }, "Job Title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_jobtitle,
      style: {
        color: '#134381'
      },
      name: "author_jobtitle",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373
      },
      __self: this
    }, "Company:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_company,
      style: {
        color: '#134381'
      },
      name: "author_company",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: this
    }, "Address:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_address1,
      style: {
        color: '#134381'
      },
      name: "author_address1",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_address2,
      style: {
        color: '#134381'
      },
      name: "author_address2",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_address3,
      style: {
        color: '#134381'
      },
      name: "author_address3",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: this
    }, "City:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_city,
      style: {
        color: '#134381'
      },
      name: "author_city",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448
      },
      __self: this
    }, "State/county/province:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_scp,
      style: {
        color: '#134381'
      },
      name: "author_scp",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    }, "Postal/Zip code:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_postal,
      style: {
        color: '#134381'
      },
      name: "author_postal",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478
      },
      __self: this
    }, "Country"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_country,
      style: {
        color: '#134381'
      },
      name: "author_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483
      },
      __self: this
    }, countries.map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496
      },
      __self: this
    }, "Phone:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onClick: handleChange,
      value: values.author_phone,
      style: {
        color: '#134381'
      },
      name: "author_phone",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511
      },
      __self: this
    }, "Is this the presenting author?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-radio",
      value: values.is_presenting_author,
      style: {
        color: '#134381'
      },
      name: "is_presenting_author",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516
      },
      __self: this
    }, __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523
      },
      __self: this
    }, "Yes", __jsx("input", {
      checked: presenter === 'is_presenting_author',
      onChange: function onChange(event) {
        onPresenterChange(event);
      },
      type: "radio",
      name: "is_presenting_author",
      value: "yes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528
      },
      __self: this
    })), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539
      },
      __self: this
    }, "No", __jsx("input", {
      onChange: function onChange(event) {
        onPresenterChange(event);
      },
      checked: presenter !== 'is_presenting_author',
      type: "radio",
      name: "is_presenting_author",
      value: "no",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544
      },
      __self: this
    })))), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558
      },
      __self: this
    }, "Secondary Author(s)"), __jsx("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["FieldArray"], {
      name: "secondary_authors",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560
      },
      __self: this
    }, function (_ref5) {
      var swap = _ref5.swap,
          push = _ref5.push,
          remove = _ref5.remove,
          setSubmitting = _ref5.setSubmitting;
      return values.secondary_authors && values.secondary_authors.length > 0 && values.secondary_authors.map(function (authors, index) {
        return __jsx("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 566
          },
          __self: this
        }, __jsx("div", {
          className: "login_form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 567
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "login_form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 568
          },
          __self: this
        }, "Title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          className: "login_form-input",
          onClick: handleChange,
          value: "secondary_authors[".concat(index, "].title"),
          style: {
            color: '#134381'
          },
          name: "secondary_authors[".concat(index, "].title"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 573
          },
          __self: this
        })), __jsx("div", {
          className: "login_form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 582
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "login_form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 583
          },
          __self: this
        }, "First Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          className: "login_form-input",
          onClick: handleChange,
          value: "secondary_authors[".concat(index, "].firstname"),
          style: {
            color: '#134381'
          },
          name: "secondary_authors[".concat(index, "].firstname"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 588
          },
          __self: this
        })), __jsx("div", {
          className: "login_form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 597
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "login_form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 598
          },
          __self: this
        }, "Last Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          className: "login_form-input",
          onClick: handleChange,
          value: "secondary_authors[".concat(index, "].lastname"),
          style: {
            color: '#134381'
          },
          name: "secondary_authors[".concat(index, "].lastname"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 603
          },
          __self: this
        })), __jsx("div", {
          className: "login_form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 612
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "login_form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 613
          },
          __self: this
        }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          className: "login_form-input",
          onClick: handleChange,
          value: "secondary_authors[".concat(index, "].email"),
          style: {
            color: '#134381'
          },
          name: "secondary_authors[".concat(index, "].email"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 618
          },
          __self: this
        })), __jsx("div", {
          className: "login_form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 627
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "login_form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 628
          },
          __self: this
        }, "Company:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          className: "login_form-input",
          onClick: handleChange,
          value: "secondary_authors[".concat(index, "].company"),
          style: {
            color: '#134381'
          },
          name: "secondary_authors[".concat(index, "].company"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 633
          },
          __self: this
        })), __jsx("div", {
          className: "login_form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 642
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "login_form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 643
          },
          __self: this
        }, "Country:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          className: "login_form-input",
          onClick: handleChange,
          value: "secondary_authors[".concat(index, "].country"),
          style: {
            color: '#134381'
          },
          name: "secondary_authors[".concat(index, "].country"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 648
          },
          __self: this
        })), __jsx("div", {
          className: "login_form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 657
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "login_form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 658
          },
          __self: this
        }, "Is this the presenting Author?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          className: "login_form-radio",
          style: {
            color: '#134381'
          },
          value: "secondary_authors[".concat(index, "].is_presenting_author"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"],
          name: "secondary_authors[".concat(index, "].is_presenting_author"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 663
          },
          __self: this
        }, __jsx("label", {
          style: {
            margin: '1rem'
          },
          htmlFor: "label",
          className: "login_form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 670
          },
          __self: this
        }, "Yes", __jsx("input", {
          checked: presenter == "secondary_authors[".concat(index, "].is_presenting_author"),
          onChange: function onChange(event) {
            onPresenterChange(event);
          },
          type: "radio",
          value: "yes",
          name: "secondary_authors[".concat(index, "].is_presenting_author"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 675
          },
          __self: this
        })), __jsx("label", {
          style: {
            margin: '1rem'
          },
          htmlFor: "label",
          className: "login_form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 686
          },
          __self: this
        }, "No", __jsx("input", {
          checked: presenter != "secondary_authors[".concat(index, "].is_presenting_author"),
          onChange: function onChange(event) {
            onPresenterChange(event);
          },
          type: "radio",
          value: "no",
          name: "secondary_authors[".concat(index, "].is_presenting_author"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 691
          },
          __self: this
        })))), __jsx(_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "add",
          onClick: function onClick() {
            push({
              title: '',
              firstname: '',
              lastname: '',
              email: '',
              company: '',
              country: '',
              is_presenting_author: ''
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 704
          },
          __self: this
        }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["AddCircle"], {
          style: {
            color: 'green'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 715
          },
          __self: this
        })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "remove",
          onClick: function onClick() {
            return values.secondary_authors.length > 1 && remove(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 717
          },
          __self: this
        }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["RemoveCircle"], {
          style: {
            color: 'red'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 718
          },
          __self: this
        })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "upgrade",
          onClick: function onClick() {
            return values.secondary_authors.length > 1 && index !== 0 && swap(index, index - 1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 720
          },
          __self: this
        }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["ArrowUpwardRounded"], {
          style: {
            color: 'red'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 721
          },
          __self: this
        })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "downgrade",
          onClick: function onClick() {
            return values.secondary_authors.length > 1 && index !== values.secondary_authors.length - 1 && swap(index, index + 1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 723
          },
          __self: this
        }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["ArrowDownwardRounded"], {
          style: {
            color: 'red'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 724
          },
          __self: this
        })));
      });
    })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      type: "submit",
      bcolor: "#134381",
      padding: "0.5rem 2rem",
      background: "#134381",
      br: "100rem",
      style: {
        margin: ".5rem 0"
      },
      fontSize: "1.7rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 733
      },
      __self: this
    }, "Submit"), console.log('main', values.is_presenting_author, 'second', values.secondary_authors));
  });
}; // ! NOT NEEDED ANYMORE !!!! £$!*er
//  <h1>Your Abstract</h1>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Submission Type:
//                         </label>
//                             <Field
//                                 className="login_form-radio"
//                                 onClick={handleChange}
//                                 value={values.submission_type}
//                                 style={{ color: '#134381' }}
//                                 name="submission_type"
//                                 component={RadioGroup}
//                             >
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="login_form-label">
//                                     I will make a full technical paper submission
//                             <Field
//                                         type="radio"
//                                         name="submission_type"
//                                         value="full"
//                                     />
//                                 </label>
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="login_form-label">
//                                     I will make an oral-only submission
//                             <Field
//                                         type="radio"
//                                         name="submission_type"
//                                         value="oral"
//                                     />
//                                 </label>
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="login_form-label">
//                                     I will make a poster-only submission
//                             <Field
//                                         type="radio"
//                                         name="submission_type"
//                                         value="poster"
//                                     />
//                                 </label>
//                             </Field>
//                         </div>
//                         {values.submission_type === 'full' && <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Presentation Type:
//                         </label>
//                             <Field
//                                 className="login_form-radio"
//                                 onClick={handleChange}
//                                 value={values.presentationtype_full}
//                                 style={{ color: '#134381' }}
//                                 name="presentationtype_full"
//                                 component={RadioGroup}
//                             >
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="login_form-label">
//                                     My full paper submission will be accompanied by an oral presentation
//                             <Field
//                                         type="radio"
//                                         name="presentationtype_full"
//                                         value="programme"
//                                     />
//                                 </label>
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="login_form-label">
//                                     My full paper submission will be accompanied by an poster presentation
//                             <Field
//                                         type="radio"
//                                         name="presentationtype_full"
//                                         value="poster"
//                                     />
//                                 </label>
//                             </Field>
//                         </div>}
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Paper Title:
//                         </label>
//                             <Field
//                                 className="login_form-input"
//                                 onClick={handleChange}
//                                 value={values.papertitle}
//                                 style={{ color: '#134381' }}
//                                 name="papertitle"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Which topic does your paper belong to?
//                         </label>
//                             <Field
//                                 className="login_form-radio"
//                                 onClick={handleChange}
//                                 value={values.theme}
//                                 style={{ color: '#134381' }}
//                                 name="theme"
//                                 component={RadioGroup}
//                             >
//                                 {themes.map(theme =>
//                                     <label
//                                         style={{ margin: '1rem' }}
//                                         htmlFor="label"
//                                         className="login_form-label">
//                                         {theme.label}
//                                         <Field
//                                             type="radio"
//                                             name="theme"
//                                             value={theme.value}
//                                         />
//                                     </label>)}
//                             </Field>
//                         </div>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Please choose up to three sub-topics for your paper:
//                         </label>
//                             {
//                                 values.theme === 'BC50E220-9412-11E8-85AF-D97B4D95EBB1' ?
//                                     subTheme1.map((sub, i) => (
//                                         <label
//                                             htmlFor="label"
//                                             className="login_form-label">
//                                             <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                             {sub.label}
//                                         </label>
//                                     )
//                                     )
//                                     :
//                                     values.theme === '48C9561C-7865-11E7-AA75-C89000D85D50' ?
//                                         subTheme2.map((sub, i) => (
//                                             <label
//                                                 htmlFor="label"
//                                                 className="login_form-label">
//                                                 <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                 {sub.label}
//                                             </label>
//                                         )
//                                         )
//                                         :
//                                         values.theme === '5D49D9C2-7865-11E7-9112-887F12D54550' ?
//                                             subTheme3.map((sub, i) => (
//                                                 <label
//                                                     htmlFor="label"
//                                                     className="login_form-label">
//                                                     <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                     {sub.label}
//                                                 </label>
//                                             )
//                                             )
//                                             :
//                                             values.theme === '7C15061A-7865-11E7-8178-84D2A73AF9BC' ?
//                                                 subTheme4.map((sub, i) => (
//                                                     <label
//                                                         htmlFor="label"
//                                                         className="login_form-label">
//                                                         <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                         {sub.label}
//                                                     </label>
//                                                 )
//                                                 )
//                                                 :
//                                                 values.theme === '925B5F3C-7865-11E7-8659-8C8422753A7C' ?
//                                                     subTheme5.map((sub, i) => (
//                                                         <label
//                                                             htmlFor="label"
//                                                             className="login_form-label">
//                                                             <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                             {sub.label}
//                                                         </label>
//                                                     )
//                                                     )
//                                                     :
//                                                     values.theme === 'B6F53F20-7865-11E7-A9B1-FC3D434D4D51' ?
//                                                         subTheme6.map((sub, i) => (
//                                                             <label
//                                                                 htmlFor="label"
//                                                                 className="login_form-label">
//                                                                 <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                                 {sub.label}
//                                                             </label>
//                                                         )
//                                                         )
//                                                         : null
//                             }
//                             <ErrorMessage component={Typography} name="subtheme" style={{ color: 'red', fontSize: '1.5rem' }} />
//                         </div>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Abstract:
//                         </label>
//                             <Field
//                                 className="login_form-input"
//                                 onClick={handleChange}
//                                 value={values.abstract}
//                                 style={{ color: '#134381' }}
//                                 name="abstract"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Keywords:
//                         </label>
//                             <Field
//                                 className="login_form-input"
//                                 onClick={handleChange}
//                                 value={values.keywords}
//                                 style={{ color: '#134381' }}
//                                 name="keywords"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Previous Papers:
//                         </label>
//                             <Field
//                                 className="login_form-input"
//                                 onClick={handleChange}
//                                 value={values.previouspapers}
//                                 style={{ color: '#134381' }}
//                                 name="previouspapers"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Do you wish your paper to be considered for inclusion in a list of the best papers given at EuroBrake to be published in an academic journal?:
//                         </label>
//                             <Field
//                                 className="login_form-input"
//                                 onClick={handleChange}
//                                 value={values.consider_for_journal}
//                                 style={{ color: '#134381' }}
//                                 name="consider_for_journal"
//                                 component={TextField}
//                             />
//                         </div>

var titles = [{
  value: "",
  label: "—"
}, {
  value: "Mr.",
  label: "Mr."
}, {
  value: "Ms.",
  label: "Ms."
}, {
  value: "Mrs.",
  label: "Mrs."
}, {
  value: "Dr.",
  label: "Dr."
}, {
  value: "Dr.-Ing.",
  label: "Dr.-Ing."
}, {
  value: "Dr. Eng.",
  label: "Dr. Eng."
}, {
  value: "Prof.",
  label: "Prof."
}, {
  value: "Prof. Dr.",
  label: "Prof. Dr."
}, {
  value: "Prof. Dr.-Ing.",
  label: "Prof. Dr.-Ing."
}, {
  value: "Ing.",
  label: "Ing."
}, {
  value: "Dipl.-Ing.",
  label: "Dipl.-Ing."
}, {
  value: "Ir.",
  label: "Ir."
}];
var countries = [{
  value: "",
  label: "—"
}, {
  value: "DZ",
  label: "Algeria"
}, {
  value: "AR",
  label: "Argentina"
}, {
  value: "AU",
  label: "Australia"
}, {
  value: "AT",
  label: "Austria"
}, {
  value: "BD",
  label: "Bangladesh"
}, {
  value: "BY",
  label: "Belarus"
}, {
  value: "BE",
  label: "Belgium"
}, {
  value: "BA",
  label: "Bosnia and Herzegovina"
}, {
  value: "BR",
  label: "Brazil"
}, {
  value: "BG",
  label: "Bulgaria"
}, {
  value: "CA",
  label: "Canada"
}, {
  value: "CL",
  label: "Chile"
}, {
  value: "CN",
  label: "China"
}, {
  value: "HK",
  label: "China - Hong Kong"
}, {
  value: "CO",
  label: "Colombia"
}, {
  value: "HR",
  label: "Croatia"
}, {
  value: "CZ",
  label: "Czech Republic"
}, {
  value: "DK",
  label: "Denmark"
}, {
  value: "EC",
  label: "Ecuador"
}, {
  value: "EG",
  label: "Egypt"
}, {
  value: "EE",
  label: "Estonia"
}, {
  value: "FI",
  label: "Finland"
}, {
  value: "MK",
  label: "Fmr. Yugoslav Republic of Macedonia"
}, {
  value: "FR",
  label: "France"
}, {
  value: "GE",
  label: "Georgia"
}, {
  value: "DE",
  label: "Germany"
}, {
  value: "GR",
  label: "Greece"
}, {
  value: "HU",
  label: "Hungary"
}, {
  value: "IS",
  label: "Iceland"
}, {
  value: "IN",
  label: "India"
}, {
  value: "ID",
  label: "Indonesia"
}, {
  value: "IR",
  label: "Iran (Islamic Republic of)"
}, {
  value: "IQ",
  label: "Iraq"
}, {
  value: "IE",
  label: "Ireland"
}, {
  value: "IL",
  label: "Israel"
}, {
  value: "IT",
  label: "Italy"
}, {
  value: "JP",
  label: "Japan"
}, {
  value: "KG",
  label: "Kyrgyzstan"
}, {
  value: "LV",
  label: "Latvia"
}, {
  value: "LT",
  label: "Lithuania"
}, {
  value: "LU",
  label: "Luxembourg"
}, {
  value: "MY",
  label: "Malaysia"
}, {
  value: "MT",
  label: "Malta"
}, {
  value: "MX",
  label: "Mexico"
}, {
  value: "MN",
  label: "Mongolia"
}, {
  value: "MA",
  label: "Morocco"
}, {
  value: "NP",
  label: "Nepal"
}, {
  value: "NL",
  label: "Netherlands"
}, {
  value: "NZ",
  label: "New Zealand"
}, {
  value: "NG",
  label: "Nigeria"
}, {
  value: "NO",
  label: "Norway"
}, {
  value: "PK",
  label: "Pakistan"
}, {
  value: "PE",
  label: "Peru"
}, {
  value: "PH",
  label: "Philippines"
}, {
  value: "PL",
  label: "Poland"
}, {
  value: "PT",
  label: "Portugal"
}, {
  value: "KR",
  label: "Republic of Korea"
}, {
  value: "PA",
  label: "Republic of Panama"
}, {
  value: "RO",
  label: "Romania"
}, {
  value: "RU",
  label: "Russian Federation"
}, {
  value: "SA",
  label: "Saudi Arabia"
}, {
  value: "RS",
  label: "Serbia"
}, {
  value: "SG",
  label: "Singapore"
}, {
  value: "SK",
  label: "Slovakia"
}, {
  value: "SI",
  label: "Slovenia"
}, {
  value: "ZA",
  label: "South Africa"
}, {
  value: "ES",
  label: "Spain"
}, {
  value: "LK",
  label: "Sri Lanka"
}, {
  value: "SE",
  label: "Sweden"
}, {
  value: "CH",
  label: "Switzerland"
}, {
  value: "TW",
  label: "Taiwan"
}, {
  value: "TH",
  label: "Thailand"
}, {
  value: "TN",
  label: "Tunisia"
}, {
  value: "TR",
  label: "Turkey"
}, {
  value: "TM",
  label: "Turkmenistan"
}, {
  value: "UA",
  label: "Ukraine"
}, {
  value: "AE",
  label: "United Arab Emirates"
}, {
  value: "GB",
  label: "United Kingdom"
}, {
  value: "US",
  label: "United States"
}, {
  value: "UZ",
  label: "Uzbekistan"
}, {
  value: "VE",
  label: "Venezuela"
}, {
  value: "VN",
  label: "Viet Nam"
}];
var themes = [{
  value: "BC50E220-9412-11E8-85AF-D97B4D95EBB1",
  label: "Intelligent Braking and Braking Control"
}, {
  value: "48C9561C-7865-11E7-AA75-C89000D85D50",
  label: "Environmentally-friendly Braking Systems"
}, {
  value: "5D49D9C2-7865-11E7-9112-887F12D54550",
  label: "Fundamentals of Brakes"
}, {
  value: "7C15061A-7865-11E7-8178-84D2A73AF9BC",
  label: "Manufacturing and Markets"
}, {
  value: "925B5F3C-7865-11E7-8659-8C8422753A7C",
  label: "Materials and Design"
}, {
  value: "B6F53F20-7865-11E7-A9B1-FC3D434D4D51",
  label: "Simulation, Testing, Innovative Development Processes"
}];
var subThemes = [{
  value: "06CE3888-9414-11E8-AE34-9BA1BE5E3471",
  label: "Brake Systems for Highly Automated Road and Rail Vehicles"
}, {
  value: "0DD80384-9414-11E8-A380-9320CF01B393",
  label: "Braking for Electric and Hybrid Vehicles"
}, {
  value: "1BFDEE9C-9414-11E8-A7E0-A07B6C067014",
  label: "Innovative Parking Brake Systems"
}, {
  value: "1C01065E-9414-11E8-A93F-A546BD18FAA0",
  label: "Innovative Brake Actuators and System Controls (Software and Function Development)"
}, {
  value: "1C04A9BC-9414-11E8-B1D2-8516A557BE68",
  label: "Safety relevant braking functions"
}, {
  value: "1C082150-9414-11E8-AF92-B5E7B5B9337D",
  label: "Railway Traffic Management Systems"
}, {
  value: "2604091C-9414-11E8-A078-CC3BFBB45A3C",
  label: "Sustainability in Brake Systems"
}, {
  value: "26093DE2-9414-11E8-B272-A7C4EBADAE4A",
  label: "Brake Energy Management and Recuperation"
}, {
  value: "260E56E2-9414-11E8-B9F8-E613015D1408",
  label: "Brake Noise and Drag Reduction"
}, {
  value: "26126F98-9414-11E8-BBB3-D3A884B3E943",
  label: "Lightweight Brake Components"
}, {
  value: "26176674-9414-11E8-8A0E-C108E25B228C",
  label: "Brake Emission findings and available countermeasures"
}, {
  value: "2FE079A2-9414-11E8-AA53-C7435EE03528",
  label: "Friction Interface Dynamics"
}, {
  value: "2FE4D18C-9414-11E8-B418-87A1883F2046",
  label: "Friction Induced Vibration"
}, {
  value: "2FE958F6-9414-11E8-A0E5-9911B184DEC0",
  label: "Thermal Effects"
}, {
  value: "2FECE066-9414-11E8-A9FA-A830F1ADACA6",
  label: "Wear and Emissions"
}, {
  value: "36935E7C-9414-11E8-830E-8F6C9F83D892",
  label: "Manufacturing, Quality Control and Warranty Claims"
}, {
  value: "369B7C92-9414-11E8-8D9F-E0E2215D2248",
  label: "Global Standardisation"
}, {
  value: "36A067CA-9414-11E8-8D58-F172FE98C949",
  label: "Aftermarket, Global Sourcing"
}, {
  value: "36A436C0-9414-11E8-AAB2-F98B8437A38B",
  label: "Governmental Regulation and Homologation of Brake Systems"
}, {
  value: "3DAE1288-9414-11E8-85DC-B1A03E97F386",
  label: "Innovative Friction Materials and Components"
}, {
  value: "3DB1BDC0-9414-11E8-81E9-D82DD1471F92",
  label: "Disc, Drum, Wheel Materials, Coatings and Design"
}, {
  value: "E65121F6-B77B-11E9-A3BF-935F1E4F73DC",
  label: "Virtual Development Methods of Braking Hardware and Software "
}, {
  value: "E6542694-B77B-11E9-BAAD-C06218C5F3E9",
  label: "Friction Material and Friction Couple Characterisation"
}, {
  value: "E6572D62-B77B-11E9-AEEC-DEEBD990D172",
  label: "Simulation and Testing of Noise Vibration Harshness"
}, {
  value: "E65A4448-B77B-11E9-925C-E3659DA380C2",
  label: "Simulating and Testing of Particulate Emissions"
}, {
  value: "E65D5C1E-B77B-11E9-B6C9-A62E81FFC1F7",
  label: "Brake System and Component Performance"
}, {
  value: "E6607750-B77B-11E9-A508-CA68AAFEDEBE",
  label: "Scale Testing for Research Development and Quality Control"
}, {
  value: "E66375B8-B77B-11E9-B730-BE1C3C7011F1",
  label: "Virtual Validation and Certification of Brake Systems"
}, {
  value: "E6668E42-B77B-11E9-8175-950FC9BD5E64",
  label: "State-of-the-Art Engineering Processes for Safety Relevant Functions and Systems"
}, {
  value: "E6699C68-B77B-11E9-BE37-D0A72E493802",
  label: "Development (Process/Products) of Cooperating Software and Hardware Solutions in Brakes"
}];
var subTheme1 = [{
  value: "06CE3888-9414-11E8-AE34-9BA1BE5E3471",
  label: "Brake Systems for Highly Automated Road and Rail Vehicles"
}, {
  value: "0DD80384-9414-11E8-A380-9320CF01B393",
  label: "Braking for Electric and Hybrid Vehicles"
}, {
  value: "1BFDEE9C-9414-11E8-A7E0-A07B6C067014",
  label: "Innovative Parking Brake Systems"
}, {
  value: "1C01065E-9414-11E8-A93F-A546BD18FAA0",
  label: "Innovative Brake Actuators and System Controls (Software and Function Development)"
}, {
  value: "1C04A9BC-9414-11E8-B1D2-8516A557BE68",
  label: "Safety relevant braking functions"
}, {
  value: "1C082150-9414-11E8-AF92-B5E7B5B9337D",
  label: "Railway Traffic Management Systems"
}];
var subTheme2 = [{
  value: "2604091C-9414-11E8-A078-CC3BFBB45A3C",
  label: "Sustainability in Brake Systems"
}, {
  value: "26093DE2-9414-11E8-B272-A7C4EBADAE4A",
  label: "Brake Energy Management and Recuperation"
}, {
  value: "260E56E2-9414-11E8-B9F8-E613015D1408",
  label: "Brake Noise and Drag Reduction"
}, {
  value: "26126F98-9414-11E8-BBB3-D3A884B3E943",
  label: "Lightweight Brake Components"
}, {
  value: "26176674-9414-11E8-8A0E-C108E25B228C",
  label: "Brake Emission findings and available countermeasures"
}];
var subTheme3 = [{
  value: "2FE079A2-9414-11E8-AA53-C7435EE03528",
  label: "Friction Interface Dynamics"
}, {
  value: "2FE4D18C-9414-11E8-B418-87A1883F2046",
  label: "Friction Induced Vibration"
}, {
  value: "2FE958F6-9414-11E8-A0E5-9911B184DEC0",
  label: "Thermal Effects"
}, {
  value: "2FECE066-9414-11E8-A9FA-A830F1ADACA6",
  label: "Wear and Emissions"
}];
var subTheme4 = [{
  value: "36935E7C-9414-11E8-830E-8F6C9F83D892",
  label: "Manufacturing, Quality Control and Warranty Claims"
}, {
  value: "369B7C92-9414-11E8-8D9F-E0E2215D2248",
  label: "Global Standardisation"
}, {
  value: "36A067CA-9414-11E8-8D58-F172FE98C949",
  label: "Aftermarket, Global Sourcing"
}, {
  value: "36A436C0-9414-11E8-AAB2-F98B8437A38B",
  label: "Governmental Regulation and Homologation of Brake Systems"
}];
var subTheme5 = [{
  value: "3DAE1288-9414-11E8-85DC-B1A03E97F386",
  label: "Innovative Friction Materials and Components"
}, {
  value: "3DB1BDC0-9414-11E8-81E9-D82DD1471F92",
  label: "Disc, Drum, Wheel Materials, Coatings and Design"
}];
var subTheme6 = [{
  value: "E65121F6-B77B-11E9-A3BF-935F1E4F73DC",
  label: "Virtual Development Methods of Braking Hardware and Software "
}, {
  value: "E6542694-B77B-11E9-BAAD-C06218C5F3E9",
  label: "Friction Material and Friction Couple Characterisation"
}, {
  value: "E6572D62-B77B-11E9-AEEC-DEEBD990D172",
  label: "Simulation and Testing of Noise Vibration Harshness"
}, {
  value: "E65A4448-B77B-11E9-925C-E3659DA380C2",
  label: "Simulating and Testing of Particulate Emissions"
}, {
  value: "E65D5C1E-B77B-11E9-B6C9-A62E81FFC1F7",
  label: "Brake System and Component Performance"
}, {
  value: "E6607750-B77B-11E9-A508-CA68AAFEDEBE",
  label: "Scale Testing for Research Development and Quality Control"
}, {
  value: "E66375B8-B77B-11E9-B730-BE1C3C7011F1",
  label: "Virtual Validation and Certification of Brake Systems"
}, {
  value: "E6668E42-B77B-11E9-8175-950FC9BD5E64",
  label: "State-of-the-Art Engineering Processes for Safety Relevant Functions and Systems"
}, {
  value: "E6699C68-B77B-11E9-BE37-D0A72E493802",
  label: "Development (Process/Products) of Cooperating Software and Hardware Solutions in Brakes"
}];
var submissionType = [{
  value: "full",
  label: "I will make a full technical paper submission"
}, {
  value: "oral",
  label: "I will make an oral-only submission"
}, {
  value: "poster",
  label: "I will make a poster-only submission"
}];
var ifFull = [{
  value: "programme",
  label: "My full paper submission will be accompanied by an oral presentation"
}, {
  value: "poster",
  label: "My full paper submission will be accompanied by a poster presentation"
}];
var presets = {
  "abstract": "lorem ipsum",
  author_address1: "10 Hamilton Road",
  author_address2: null,
  author_address3: null,
  author_city: "Sidcup",
  author_company: "Article Seven Limited",
  author_country: "GB",
  author_email: "andrew@article7.co.uk",
  author_firstname: "Andrew",
  author_jobtitle: "Director",
  author_lastname: "Green",
  author_phone: "+44 20 8305 1224",
  author_postal: "DA15 7HB",
  author_scp: "Kent",
  author_title: "Mr.",
  consider_for_journal: "no",
  is_presenting_author: "yes",
  keywords: "lorem, ipsum",
  papertitle: "Duis aute irure dolor",
  presentationtype_full: "programme",
  previouspapers: null,
  secondary_authors: [{
    company: "Article Seven",
    country: "GB",
    email: "ava@article7.co.uk",
    firstname: "Ava",
    is_presenting_author: "no",
    lastname: "Green",
    ref: "2399A3C8-1823-11EA-BBE7-BDC53B013130",
    title: null
  }],
  submission_type: "full",
  subtheme: ["3DB1BDC0-9414-11E8-81E9-D82DD1471F92"],
  theme: "925B5F3C-7865-11E7-8659-8C8422753A7C",
  __csrf_token: "5d159fb224ed613dce89a64553f36f5eda1fa97c,2caaa318bb55c8c19d660a1e420d1c602dfc59f9,1576603105"
};
var emptyInitial = {
  author_title: '',
  author_firstname: '',
  author_lastname: '',
  author_email: '',
  author_jobtitle: '',
  author_company: '',
  author_address1: '',
  author_address2: '',
  author_address3: '',
  author_city: '',
  author_scp: '',
  author_postal: '',
  author_country: '',
  author_phone: '',
  is_presenting_author: '',
  submission_type: '',
  presentationtype_full: '',
  papertitle: '',
  theme: '',
  subtheme: [],
  "abstract": '',
  keywords: '',
  previouspapers: '',
  consider_for_journal: '',
  secondary_authors: [{
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    country: '',
    is_presenting_author: '',
    ref: ''
  }],
  __csrf_token: ''
};

/***/ })

})
//# sourceMappingURL=authorsArea.js.2a67a98aa635931b3121.hot-update.js.map