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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/Forms.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






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
            _cookie$get = js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get(), logintoken = _cookie$get.logintoken;
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
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref) {
    var csrf, file, formData, _cookie$get2, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            csrf = _ref.csrf, file = _ref.file;
            formData = new FormData();
            _cookie$get2 = js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get(), logintoken = _cookie$get2.logintoken;
            formData.append('__csrf_token', csrf);
            formData.append('filename', file);
            console.log({
              logintoken: logintoken,
              csrf: csrf,
              file: file
            });

            if (!(logintoken && csrf && file)) {
              _context2.next = 27;
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

            if (!(data.status === 'success')) {
              _context2.next = 19;
              break;
            }

            console.log('getForm', data);
            _context2.next = 22;
            break;

          case 19:
            error = new Error(data.error);
            error.response = response;
            throw error;

          case 22:
            _context2.next = 27;
            break;

          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](7);
            console.error('Failed to get form, please try again', _context2.t0); // this.setState({ error: error.message });

          case 27:
            return _context2.abrupt("return");

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 24]]);
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
    var csrf, formData, url, form, _cookie$get3, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            csrf = _ref2.csrf, formData = _ref2.formData, url = _ref2.url;
            form = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(formData);
            _cookie$get3 = js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get(), logintoken = _cookie$get3.logintoken;

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

var SignupSchema = yup__WEBPACK_IMPORTED_MODULE_6__["object"]().shape({
  firstName: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().email('Invalid email').required('Required')
});
var StyledForm = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"]).withConfig({
  displayName: "Forms__StyledForm",
  componentId: "sc-1q22qaj-0"
})(["display:flex;flex-flow:column;justify-content:space-between;align-items:center;min-width:100%;.MuiInput-underline:after{color:", ";}.MuiInputBase-root{font-family:", ";font-size:2rem;color:", ";}input:-internal-autofill-selected{}.login_form{&-field{margin:1rem 0;width:100%;display:flex;justify-content:space-between;align-items:flex-end;}&-label{font-family:", ";font-size:2.6rem;color:", ";}&-input{min-width:40rem;font-family:", ";font-size:5rem;color:", ";}&-link{font-family:", ";font-size:1.7rem;color:", ";}}"], function (props) {
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
var AbstractForm = function AbstractForm() {
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: {
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
      secondary_authors: [],
      secondaryAuthor: {
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        company: '',
        country: '',
        is_presenting_author: ''
      },
      __csrf_token: ''
    },
    onSubmit: function onSubmit(values) {
      // same shape as initial values
      console.log(values);
    },
    validationSchema: SignupSchema,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, function (_ref3) {
    var values = _ref3.values,
        isSubmitting = _ref3.isSubmitting,
        isValidating = _ref3.isValidating,
        handleChange = _ref3.handleChange;
    return __jsx(StyledForm, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, "First Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onChange: handleChange,
      value: values.author_email,
      style: {
        color: '#134381'
      },
      id: "standard-required",
      name: "firstName",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "firstName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, "First Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onChange: handleChange,
      value: values.author_email,
      style: {
        color: '#134381'
      },
      id: "standard-required",
      name: "firstName",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "firstName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, "Last Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onChange: handleChange,
      value: values.author_firstname,
      name: "lastName",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "lastName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    })), __jsx("div", {
      className: "login_form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "login_form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "login_form-input",
      onChange: handleChange,
      value: values.author_lastname,
      name: "email",
      type: "email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: this
    })), __jsx("button", {
      type: "submit",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, "Submit"), console.log({
      isSubmitting: isSubmitting,
      isValidating: isValidating
    }));
  });
};
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

/***/ })

})
//# sourceMappingURL=authorsArea.js.0c6f7d2cdd5f2743bd2d.hot-update.js.map