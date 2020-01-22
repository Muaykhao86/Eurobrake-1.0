webpackHotUpdate("static/development/pages/f/[id]/[formType].js",{

/***/ "./components/forms/Authorprofile.js":
/*!*******************************************!*\
  !*** ./components/forms/Authorprofile.js ***!
  \*******************************************/
/*! exports provided: Authorprofile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authorprofile", function() { return Authorprofile; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormSelects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormSelects */ "./components/forms/FormSelects.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormControl */ "./components/forms/FormControl.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/Authorprofile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var Authorprofile = function Authorprofile(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      Toggle = _useState[0],
      setToggle = _useState[1];

  var presets = props.presets,
      csrf = props.csrf,
      apiUrl = props.apiUrl,
      paperId = props.paperId;
  console.log({
    presets: presets,
    apiUrl: apiUrl
  });
  var url = apiUrl;
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: presets || emptyInitial,
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, function (_ref) {
    var values = _ref.values,
        handleChange = _ref.handleChange,
        errors = _ref.errors,
        validateForm = _ref.validateForm,
        handleSubmit = _ref.handleSubmit;

    var onSubmit =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var res, status;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                values.__csrf_token = csrf;
                console.log('submitting');
                _context.next = 4;
                return Object(_FormActions__WEBPACK_IMPORTED_MODULE_10__["SendForm"])({
                  values: values,
                  url: url,
                  csrf: csrf
                });

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.status;

              case 7:
                status = _context.sent;
                console.log({
                  status: status
                });
                data.status == 'success' && setToggle(function (Toggle) {
                  return !Toggle;
                });
                return _context.abrupt("return", status);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function onSubmit() {
        return _ref2.apply(this, arguments);
      };
    }();

    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, Toggle && __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "It onllllllllllllly works ", status), __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_9__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Title"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.title,
      style: {
        color: '#134381'
      },
      name: "title",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_7__["titles"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "First Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.firstname,
      style: {
        color: '#134381'
      },
      name: "firstname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Last Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.lastname,
      style: {
        color: '#134381'
      },
      name: "lastname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.email,
      style: {
        color: '#134381'
      },
      name: "email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Job Title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.jobtitle,
      style: {
        color: '#134381'
      },
      name: "jobtitle",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "Company:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.company,
      style: {
        color: '#134381'
      },
      name: "company",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "Address:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.address1,
      style: {
        color: '#134381'
      },
      name: "address1",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.address2,
      style: {
        color: '#134381'
      },
      name: "address2",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.address3,
      style: {
        color: '#134381'
      },
      name: "address3",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "City:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.city,
      style: {
        color: '#134381'
      },
      name: "city",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "State/ County/ Province:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.scp,
      style: {
        color: '#134381'
      },
      name: "scp",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, "Postal/ Zip code:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.postal,
      style: {
        color: '#134381'
      },
      name: "postal",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, "Country"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.country,
      style: {
        color: '#134381'
      },
      name: "country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_7__["countries"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, "Phone:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.phone,
      style: {
        color: '#134381'
      },
      name: "phone",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, "Fax:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.fax,
      style: {
        color: '#134381'
      },
      name: "fax",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, "Choose a Password:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.password,
      style: {
        color: '#134381'
      },
      name: "password",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, "Confirm password:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.password,
      style: {
        color: '#134381'
      },
      name: "confirm_password",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: function onClick() {
        return handleSubmit().then(function (errors) {
          return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(errors).length === 0 && onSubmit();
        });
      },
      bcolor: "#134381",
      background: "#134381",
      br: "100rem",
      padding: ".5rem 4rem",
      style: {
        margin: "3rem"
      },
      fontSize: "1.7rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, "Submit")));
  });
};
var emptyInitial = {
  title: '',
  firstname: '',
  lastname: '',
  email: '',
  jobtitle: '',
  company: '',
  address1: '',
  address2: '',
  address3: '',
  city: '',
  scp: '',
  postal: '',
  country: '',
  phone: '',
  fax: '',
  password: '',
  confirmed_password: '',
  __csrf_token: ''
};

/***/ })

})
//# sourceMappingURL=[formType].js.6804002331052d5edb27.hot-update.js.map