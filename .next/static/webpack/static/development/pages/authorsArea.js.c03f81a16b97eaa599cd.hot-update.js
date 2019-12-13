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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/Forms.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    \n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function GetForm(_x) {
  return _GetForm.apply(this, arguments);
}

function _GetForm() {
  _GetForm = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(url) {
    var _cookie$get, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
  _SendFile = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref) {
    var csrf, file, formData, _cookie$get2, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            csrf = _ref.csrf, file = _ref.file;
            formData = new FormData();
            _cookie$get2 = js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get(), logintoken = _cookie$get2.logintoken;
            formData.append('__csrf_token', {
              csrf: csrf
            });
            formData.append('filename', {
              file: file
            });
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
              method: 'PUT',
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
  _SendForm = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref2) {
    var csrf, formData, url, form, _cookie$get3, logintoken, apiUrl, response, data, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            csrf = _ref2.csrf, formData = _ref2.formData, url = _ref2.url;
            form = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(formData);
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

var SignupSchema = yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
  firstName: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().email('Invalid email').required('Required')
});
var StyledForm = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(formik__WEBPACK_IMPORTED_MODULE_5__["Form"])(_templateObject());
var AbstractForm = function AbstractForm() {
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
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
      lineNumber: 134
    },
    __self: this
  }, function (_ref3) {
    var errors = _ref3.errors,
        touched = _ref3.touched,
        isSubmitting = _ref3.isSubmitting;
    return __jsx(StyledForm, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      name: "firstName",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
      name: "firstName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      name: "lastName",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
      name: "lastName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      name: "email",
      type: "email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
      name: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }), __jsx("button", {
      type: "submit",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, "Submit"));
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

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js ***!
  \*****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _internal_SwitchBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/SwitchBase */ "./node_modules/@material-ui/core/esm/internal/SwitchBase.js");
/* harmony import */ var _internal_svg_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/svg-icons/CheckBoxOutlineBlank */ "./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBoxOutlineBlank.js");
/* harmony import */ var _internal_svg_icons_CheckBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/svg-icons/CheckBox */ "./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBox.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _internal_svg_icons_IndeterminateCheckBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/svg-icons/IndeterminateCheckBox */ "./node_modules/@material-ui/core/esm/internal/svg-icons/IndeterminateCheckBox.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");













var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary
    },

    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `indeterminate={true}`. */
    indeterminate: {},

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }
  };
};
var defaultCheckedIcon = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internal_svg_icons_CheckBox__WEBPACK_IMPORTED_MODULE_8__["default"], null);
var defaultIcon = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internal_svg_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_7__["default"], null);
var defaultIndeterminateIcon = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internal_svg_icons_IndeterminateCheckBox__WEBPACK_IMPORTED_MODULE_10__["default"], null);
var Checkbox = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Checkbox(props, ref) {
  var _props$checkedIcon = props.checkedIcon,
      checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
      classes = props.classes,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? defaultIcon : _props$icon,
      _props$indeterminate = props.indeterminate,
      indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
      _props$indeterminateI = props.indeterminateIcon,
      indeterminateIcon = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI,
      inputProps = props.inputProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["checkedIcon", "classes", "color", "disabled", "icon", "indeterminate", "indeterminateIcon", "inputProps"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internal_SwitchBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "checkbox",
    checkedIcon: indeterminate ? indeterminateIcon : checkedIcon,
    classes: {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__["default"])(color))], indeterminate && classes.indeterminate),
      checked: classes.checked,
      disabled: classes.disabled
    },
    color: color,
    inputProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      'data-indeterminate': indeterminate
    }, inputProps),
    icon: indeterminate ? indeterminateIcon : icon,
    ref: ref,
    disabled: disabled
  }, other));
});
 true ? Checkbox.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'default']),

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the input.
   */
  indeterminate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The input component prop `type`.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__["default"])(styles, {
  name: 'MuiCheckbox'
})(Checkbox));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Checkbox/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Checkbox/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js ***!
  \*********************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");










var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // For correct alignment with the text.
      verticalAlign: 'middle',
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      marginLeft: -11,
      marginRight: 16,
      // used for row presentation of radio/checkbox
      '&$disabled': {
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `labelPlacement="start"`. */
    labelPlacementStart: {
      flexDirection: 'row-reverse',
      marginLeft: 16,
      // used for row presentation of radio/checkbox
      marginRight: -11
    },

    /* Styles applied to the root element if `labelPlacement="top"`. */
    labelPlacementTop: {
      flexDirection: 'column-reverse',
      marginLeft: 16
    },

    /* Styles applied to the root element if `labelPlacement="bottom"`. */
    labelPlacementBottom: {
      flexDirection: 'column',
      marginLeft: 16
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the label's Typography component. */
    label: {
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    }
  };
};
/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */

var FormControlLabel = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function FormControlLabel(props, ref) {
  var checked = props.checked,
      classes = props.classes,
      className = props.className,
      control = props.control,
      disabledProp = props.disabled,
      inputRef = props.inputRef,
      label = props.label,
      _props$labelPlacement = props.labelPlacement,
      labelPlacement = _props$labelPlacement === void 0 ? 'end' : _props$labelPlacement,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);

  var muiFormControl = Object(_FormControl__WEBPACK_IMPORTED_MODULE_6__["useFormControl"])();
  var disabled = disabledProp;

  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }

  if (typeof disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  }

  var controlProps = {
    disabled: disabled
  };
  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(function (key) {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, labelPlacement !== 'end' && classes["labelPlacement".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__["default"])(labelPlacement))], disabled && classes.disabled),
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(control, controlProps), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "span",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.label, disabled && classes.disabled)
  }, label));
});
 true ? FormControlLabel.propTypes = {
  /**
   * If `true`, the component appears selected.
   */
  checked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * If `true`, the control will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * The text to be used in an enclosing label element.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The position of the label.
   */
  labelPlacement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['end', 'start', 'top', 'bottom']),

  /*
   * @ignore
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The value of the component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiFormControlLabel'
})(FormControlLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControlLabel/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormControlLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormControlLabel__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormGroup/FormGroup.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormGroup/FormGroup.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },

  /* Styles applied to the root element if `row={true}`. */
  row: {
    flexDirection: 'row'
  }
};
/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */

var FormGroup = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function FormGroup(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$row = props.row,
      row = _props$row === void 0 ? false : _props$row,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "row"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, row && classes.row),
    ref: ref
  }, other));
});
 true ? FormGroup.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Display group of elements in a compact row.
   */
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiFormGroup'
})(FormGroup));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormGroup/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormGroup/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/FormGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _RadioGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RadioGroupContext */ "./node_modules/@material-ui/core/esm/RadioGroup/RadioGroupContext.js");







var RadioGroup = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function RadioGroup(props, ref) {
  var actions = props.actions,
      children = props.children,
      name = props.name,
      valueProp = props.value,
      onChange = props.onChange,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["actions", "children", "name", "value", "onChange"]);

  var rootRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(valueProp != null),
      isControlled = _React$useRef.current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(props.defaultValue),
      valueState = _React$useState[0],
      setValue = _React$useState[1];

  var value = isControlled ? valueProp : valueState;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
      if (isControlled !== (valueProp != null)) {
        console.error(["Material-UI: A component is changing ".concat(isControlled ? 'a ' : 'an un', "controlled RadioGroup to be ").concat(isControlled ? 'un' : '', "controlled."), 'Elements should not switch from uncontrolled to controlled (or vice versa).', 'Decide between using a controlled or uncontrolled RadioGroup ' + 'element for the lifetime of the component.', 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [valueProp, isControlled]);
  }

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useImperativeHandle(actions, function () {
    return {
      focus: function focus() {
        var input = rootRef.current.querySelector('input:not(:disabled):checked');

        if (!input) {
          input = rootRef.current.querySelector('input:not(:disabled)');
        }

        if (input) {
          input.focus();
        }
      }
    };
  }, []);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__["default"])(ref, rootRef);

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      setValue(event.target.value);
    }

    if (onChange) {
      onChange(event, event.target.value);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_RadioGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: {
      name: name,
      onChange: handleChange,
      value: value
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_FormGroup__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "radiogroup",
    ref: handleRef
  }, other), children));
});
 true ? RadioGroup.propTypes = {
  /**
   * @ignore
   */
  actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
  }),

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The name used to reference the value of the control.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when a radio button is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/RadioGroup/RadioGroupContext.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/RadioGroup/RadioGroupContext.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var RadioGroupContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (RadioGroupContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/RadioGroup/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/RadioGroup/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _RadioGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Switch/Switch.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Switch/Switch.js ***!
  \*************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _internal_SwitchBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/SwitchBase */ "./node_modules/@material-ui/core/esm/internal/SwitchBase.js");


// @inheritedComponent IconButton








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      width: 34 + 12 * 2,
      height: 14 + 12 * 2,
      overflow: 'hidden',
      padding: 12,
      boxSizing: 'border-box',
      position: 'relative',
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      verticalAlign: 'middle' // For correct alignment with the text.

    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -8
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -8
    },

    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      // Render above the focus ripple.
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create(['left', 'transform'], {
        duration: theme.transitions.duration.shortest
      }),
      '&$checked': {
        transform: 'translateX(50%)'
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        opacity: 0.5
      },
      '&$disabled + $track': {
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.primary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.secondary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      width: 40,
      height: 24,
      padding: 7,
      '& $thumb': {
        width: 16,
        height: 16
      },
      '& $switchBase': {
        padding: 4
      }
    },

    /* Pseudo-class applied to the internal `SwitchBase` component's `checked` class. */
    checked: {},

    /* Pseudo-class applied to the internal SwitchBase component's disabled class. */
    disabled: {},

    /* Styles applied to the internal SwitchBase component's input element. */
    input: {
      left: '-100%',
      width: '300%'
    },

    /* Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
    thumb: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },

    /* Styles applied to the track element. */
    track: {
      height: '100%',
      width: '100%',
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    }
  };
};
var Switch = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Switch(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "disabled", "edge", "size"]);

  var icon = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.thumb
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, {
      start: classes.edgeStart,
      end: classes.edgeEnd
    }[edge], {
      small: classes["size".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(size))]
    }[size])
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internal_SwitchBase__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "checkbox",
    icon: icon,
    checkedIcon: icon,
    classes: {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.switchBase, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(color))]),
      input: classes.input,
      checked: classes.checked,
      disabled: classes.disabled
    },
    ref: ref,
    disabled: disabled
  }, other)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.track
  }));
});
 true ? Switch.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'default']),

  /**
   * @ignore
   */
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   */
  edge: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['start', 'end', false]),

  /**
   * The icon to display when the component is unchecked.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The size of the switch.
   * `small` is equivalent to the dense switch styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['small', 'medium']),

  /**
   * The input component prop `type`.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiSwitch'
})(Switch));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Switch/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Switch/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch */ "./node_modules/@material-ui/core/esm/Switch/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Switch__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/SwitchBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/SwitchBase.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");









var styles = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  }
};
/**
 * @ignore - internal component.
 */

var SwitchBase = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function SwitchBase(props, ref) {
  var autoFocus = props.autoFocus,
      checkedProp = props.checked,
      checkedIcon = props.checkedIcon,
      classes = props.classes,
      className = props.className,
      defaultChecked = props.defaultChecked,
      disabledProp = props.disabled,
      icon = props.icon,
      id = props.id,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      readOnly = props.readOnly,
      required = props.required,
      tabIndex = props.tabIndex,
      type = props.type,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(checkedProp != null),
      isControlled = _React$useRef.current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(Boolean(defaultChecked)),
      checkedState = _React$useState[0],
      setCheckedState = _React$useState[1];

  var checked = isControlled ? checkedProp : checkedState;
  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__["default"])();

  var handleFocus = function handleFocus(event) {
    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };

  var handleInputChange = function handleInputChange(event) {
    var newChecked = event.target.checked;

    if (!isControlled) {
      setCheckedState(newChecked);
    }

    if (onChange) {
      onChange(event, newChecked);
    }
  };

  var disabled = disabledProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  var hasLabelFor = type === 'checkbox' || type === 'radio';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "span",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, checked && classes.checked, disabled && classes.disabled),
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    autoFocus: autoFocus,
    checked: checkedProp,
    defaultChecked: defaultChecked,
    className: classes.input,
    disabled: disabled,
    id: hasLabelFor && id,
    name: name,
    onChange: handleInputChange,
    readOnly: readOnly,
    ref: inputRef,
    required: required,
    tabIndex: tabIndex,
    type: type,
    value: value
  }, inputProps)), checked ? checkedIcon : icon);
}); // NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.

 true ? SwitchBase.propTypes = {
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component is checked.
   */
  checked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /*
   * @ignore
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * The input component prop `type`.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,

  /**
   * The value of the component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'PrivateSwitchBase'
})(SwitchBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBox.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBox.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSvgIcon */ "./node_modules/@material-ui/core/esm/internal/svg-icons/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBoxOutlineBlank.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBoxOutlineBlank.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSvgIcon */ "./node_modules/@material-ui/core/esm/internal/svg-icons/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/IndeterminateCheckBox.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/IndeterminateCheckBox.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSvgIcon */ "./node_modules/@material-ui/core/esm/internal/svg-icons/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox'));

/***/ }),

/***/ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js":
/*!************************************************************************!*\
  !*** ./node_modules/formik-material-ui/dist/formik-material-ui.es6.js ***!
  \************************************************************************/
/*! exports provided: fieldToTextField, TextField, fieldToSwitch, Switch, fieldToCheckbox, Checkbox, CheckboxWithLabel, fieldToSelect, Select, SimpleFileUpload, fieldToRadioGroup, RadioGroup, fieldToInputBase, InputBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldToTextField", function() { return fieldToTextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldToSwitch", function() { return fieldToSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldToCheckbox", function() { return fieldToCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWithLabel", function() { return CheckboxWithLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldToSelect", function() { return fieldToSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFileUpload", function() { return SimpleFileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldToRadioGroup", function() { return fieldToRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldToInputBase", function() { return fieldToInputBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBase", function() { return InputBase; });
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");














/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var fieldToTextField = function (_a) {
    var field = _a.field, form = _a.form, disabled = _a.disabled, props = __rest(_a, ["field", "form", "disabled"]);
    var name = field.name;
    var touched = form.touched, errors = form.errors, isSubmitting = form.isSubmitting;
    var fieldError = Object(formik__WEBPACK_IMPORTED_MODULE_5__["getIn"])(errors, name);
    var showError = Object(formik__WEBPACK_IMPORTED_MODULE_5__["getIn"])(touched, name) && !!fieldError;
    return __assign({}, props, field, { error: showError, helperText: showError ? fieldError : props.helperText, disabled: disabled != undefined ? disabled : isSubmitting });
};
var TextField = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_0__["default"], __assign({}, fieldToTextField(props)), children));
};
TextField.displayName = 'FormikMaterialUITextField';

var fieldToSwitch = function (_a) {
    var field = _a.field, isSubmitting = _a.form.isSubmitting, disabled = _a.disabled, props = __rest(_a, ["field", "form", "disabled"]);
    return __assign({ disabled: disabled != undefined ? disabled : isSubmitting }, props, field, { value: field.name, checked: field.value });
};
var Switch = function (props) { return Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({}, fieldToSwitch(props))); };
Switch.displayName = 'FormikMaterialUISwitch';

var fieldToCheckbox = function (_a) {
    var field = _a.field, isSubmitting = _a.form.isSubmitting, disabled = _a.disabled, props = __rest(_a, ["field", "form", "disabled"]);
    return __assign({ disabled: disabled != undefined ? disabled : isSubmitting }, props, field, { checked: field.value, value: field.value ? 'checked' : '' });
};
var Checkbox = function (props) { return Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({}, fieldToCheckbox(props))); };
Checkbox.displayName = 'FormikMaterialUICheckbox';

var CheckboxWithLabel = function (_a) {
    var Label = _a.Label, props = __rest(_a, ["Label"]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ control: Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({}, fieldToCheckbox(props))) }, Label)));
};
CheckboxWithLabel.displayName = 'FormikMaterialUICheckboxWithLabel';

var fieldToSelect = function (_a) {
    var field = _a.field, _b = _a.form, isSubmitting = _b.isSubmitting, setFieldValue = _b.setFieldValue, disabled = _a.disabled, props = __rest(_a, ["field", "form", "disabled"]);
    var onChange = Object(react__WEBPACK_IMPORTED_MODULE_11__["useCallback"])(function (event) {
        if (props.multiple && props.native) {
            var options = event.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i += 1) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
            setFieldValue(field.name, value);
        }
        else {
            field.onChange(event);
        }
    }, [field.name, props.multiple, props.native]);
    return __assign({ disabled: disabled != undefined ? disabled : isSubmitting }, props, field, { onChange: onChange });
};
var Select = function (props) { return Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({}, fieldToSelect(props))); };
Select.displayName = 'FormikMaterialUISelect';

var SimpleFileUpload = function (_a) {
    var label = _a.label, field = _a.field, _b = _a.form, touched = _b.touched, errors = _b.errors, isSubmitting = _b.isSubmitting, setFieldValue = _b.setFieldValue, _c = _a.disabled, disabled = _c === void 0 ? false : _c, inputProps = _a.InputProps, inputLabelProps = _a.InputLabelProps;
    var error = Object(formik__WEBPACK_IMPORTED_MODULE_5__["getIn"])(touched, field.name) && Object(formik__WEBPACK_IMPORTED_MODULE_5__["getIn"])(errors, field.name);
    return (Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])("div", null,
        Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], null,
            label && (Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({ shrink: true, error: !!error }, inputLabelProps), label)),
            Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({ error: !!error, inputProps: {
                    type: 'file',
                    disabled: disabled || isSubmitting,
                    name: field.name,
                    onChange: function (event) {
                        var file = event.currentTarget.files[0];
                        setFieldValue(field.name, file);
                    },
                } }, inputProps)),
            error && Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__["default"], { error: true }, error))));
};

var fieldToRadioGroup = function (_a) {
    var field = _a.field, form = _a.form, props = __rest(_a, ["field", "form"]);
    return (__assign({}, props, field));
};
var RadioGroup = function (props) {
    return Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_10__["default"], __assign({}, fieldToRadioGroup(props)));
};
RadioGroup.displayName = 'FormikMaterialUIRadioGroup';

var fieldToInputBase = function (_a) {
    var field = _a.field, isSubmitting = _a.form.isSubmitting, disabled = _a.disabled, props = __rest(_a, ["field", "form", "disabled"]);
    return __assign({ disabled: disabled != undefined ? disabled : isSubmitting }, props, field);
};
var InputBase = function (props) { return Object(react__WEBPACK_IMPORTED_MODULE_11__["createElement"])(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12__["default"], __assign({}, fieldToInputBase(props))); };
InputBase.displayName = 'FormikMaterialUIInputBase';


//# sourceMappingURL=formik-material-ui.es6.js.map


/***/ })

})
//# sourceMappingURL=authorsArea.js.c03f81a16b97eaa599cd.hot-update.js.map