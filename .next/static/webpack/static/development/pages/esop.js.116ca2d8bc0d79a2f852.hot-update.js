webpackHotUpdate("static/development/pages/esop.js",{

/***/ "./components/forms/Esop.js":
/*!**********************************!*\
  !*** ./components/forms/Esop.js ***!
  \**********************************/
/*! exports provided: Esop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Esop", function() { return Esop; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormSelects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormSelects */ "./components/forms/FormSelects.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormControl */ "./components/forms/FormControl.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/Esop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










var Esop = function Esop(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      Toggle = _useState[0],
      setToggle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      Status = _useState2[0],
      setStatus = _useState2[1];

  var presets = props.presets,
      csrf = props.csrf,
      apiUrl = props.apiUrl;
  var url = "https://prelude.eurobrake.net/esop";
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: emptyInitial || presets,
    validationSchema: _FormControl__WEBPACK_IMPORTED_MODULE_10__["EsopSchema"],
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, function (_ref) {
    var values = _ref.values,
        handleChange = _ref.handleChange,
        setFieldTouched = _ref.setFieldTouched,
        isValidating = _ref.isValidating,
        validateForm = _ref.validateForm,
        handleSubmit = _ref.handleSubmit,
        errors = _ref.errors,
        isSubmitting = _ref.isSubmitting;

    var allTouched =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(values).forEach(function (key) {
                  setFieldTouched(key, true);
                });

              case 2:
                _context.next = 4;
                return validateForm().then(function (errors) {
                  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(errors).length === 0 && onSubmit();
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function allTouched() {
        return _ref2.apply(this, arguments);
      };
    }();

    var onSubmit =
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                values.__csrf_token = csrf;
                console.log('submitting', values);
                _context2.next = 4;
                return Object(_FormActions__WEBPACK_IMPORTED_MODULE_12__["SendFile"])({
                  values: values,
                  csrf: csrf,
                  url: url
                });

              case 4:
                res = _context2.sent;
                _context2.next = 7;
                return res;

              case 7:
                _context2.t0 = _context2.sent;

                if (!_context2.t0) {
                  _context2.next = 10;
                  break;
                }

                _context2.t0 = res.status;

              case 10:
                data = _context2.t0;
                console.log({
                  status: status
                });
                data && setStatus(data) && setToggle(function (Toggle) {
                  return !Toggle;
                });
                return _context2.abrupt("return");

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function onSubmit() {
        return _ref3.apply(this, arguments);
      };
    }();

    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_11__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "form-title",
      style: {
        marginTop: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "About you"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Title"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_title,
      style: {
        color: '#134381'
      },
      name: "student_title",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_9__["titles"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "First Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_firstname,
      style: {
        color: '#134381'
      },
      name: "student_firstname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Last Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_lastname,
      style: {
        color: '#134381'
      },
      name: "student_lastname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_email,
      style: {
        color: '#134381'
      },
      name: "student_email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Address:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_address1,
      style: {
        color: '#134381'
      },
      name: "student_address1",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_address2,
      style: {
        color: '#134381'
      },
      name: "student_address2",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_address3,
      style: {
        color: '#134381'
      },
      name: "student_address3",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "City:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_city,
      style: {
        color: '#134381'
      },
      name: "student_city",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "State/ County/ Province:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_scp,
      style: {
        color: '#134381'
      },
      name: "student_scp",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, "Postal/ Zip code:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_postal,
      style: {
        color: '#134381'
      },
      name: "student_postal",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, "Country"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_country,
      style: {
        color: '#134381'
      },
      name: "student_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_9__["countries"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, "Your FISITA member society"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_country,
      style: {
        color: '#134381'
      },
      name: "student_membersociety",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_9__["members"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, "Place of birth"), __jsx("div", {
      className: "form-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      placeholder: "City",
      className: "form-input",
      onClick: handleChange,
      value: values.student_jobtitle,
      style: {
        color: '#134381',
        marginBottom: '2rem',
        width: '100%'
      },
      name: "birth_city",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      placeholder: "Country",
      className: "form-input",
      onClick: handleChange,
      value: values.student_jobtitle,
      style: {
        color: '#134381',
        width: '100%'
      },
      name: "birth_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "form-title",
      style: {
        marginTop: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, "Your University or HE Institution"), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, "What level of education have you achieved?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-radio",
      value: values.student_level_current,
      style: {
        color: '#134381'
      },
      name: "student_level_current",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, __jsx("input", {
      onChange: handleChange,
      style: {
        margin: '1rem'
      },
      type: "radio",
      name: "student_level_current",
      value: "none",
      id: "student_level_current_none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }), "None"), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, __jsx("input", {
      style: {
        margin: '1rem'
      },
      onChange: handleChange,
      type: "radio",
      name: "student_level_current",
      value: "Bachelor",
      id: "student_level_current_Bachelor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      },
      __self: this
    }), "Bachelor or equivalent"), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, __jsx("input", {
      style: {
        margin: '1rem'
      },
      onChange: handleChange,
      type: "radio",
      name: "student_level_current",
      value: "Master",
      id: "student_level_current_Master",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }), "Master or equivalent")), errors.student_level_current && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, errors.student_level_current)), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    }, "What degree are you currently studying towards?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-radio",
      value: values.student_level_seeking,
      style: {
        color: '#134381'
      },
      name: "student_level_seeking",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }, __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, __jsx("input", {
      style: {
        margin: '1rem'
      },
      onChange: handleChange,
      type: "radio",
      name: "student_level_seeking",
      value: "Bachelor",
      id: "student_level_seeking_Bachelor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }), "Bachelor or equivalent"), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    }, __jsx("input", {
      style: {
        margin: '1rem'
      },
      onChange: handleChange,
      type: "radio",
      name: "student_level_seeking",
      value: "Master",
      id: "student_level_seeking_Master",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355
      },
      __self: this
    }), "Master or equivalent"), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, __jsx("input", {
      onChange: handleChange,
      style: {
        margin: '1rem'
      },
      type: "radio",
      name: "student_level_seeking",
      value: "PhD",
      id: "student_level_seeking_PhD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }), "PhD. or equivalent")), errors.student_level_seeking && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }, errors.student_level_seeking)), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }, "Course being studied:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_course,
      style: {
        color: '#134381'
      },
      name: "university_course",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: this
    }, "University / Institution"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_name,
      style: {
        color: '#134381'
      },
      name: "university_name",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      },
      __self: this
    }, "Address:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_address1,
      style: {
        color: '#134381'
      },
      name: "university_address1",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_address2,
      style: {
        color: '#134381'
      },
      name: "university_address2",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_address3,
      style: {
        color: '#134381'
      },
      name: "university_address3",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458
      },
      __self: this
    }, "City:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_city,
      style: {
        color: '#134381'
      },
      name: "university_city",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473
      },
      __self: this
    }, "State/ County/ Province:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_scp,
      style: {
        color: '#134381'
      },
      name: "university_scp",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 487
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488
      },
      __self: this
    }, "Postal/ Zip code:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_postal,
      style: {
        color: '#134381'
      },
      name: "university_postal",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503
      },
      __self: this
    }, "Country"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_country,
      style: {
        color: '#134381'
      },
      name: "university_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_9__["countries"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }, option.label);
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "form-title",
      style: {
        marginTop: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520
      },
      __self: this
    }, "Your entry"), __jsx("div", {
      className: "form-field_file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "form-label",
      style: {
        minWidth: '100%',
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523
      },
      __self: this
    }, "Upload a PDF or Microsoft Word document of your CV/resum\xE9 here. Documents must not exceed 2 A4 pages and must be submitted in English."), __jsx("div", {
      className: "form-field_file-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526
      },
      __self: this
    }, "Upload your CV/resum\xE9:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input_file",
      value: values.cv_filename_uploader,
      style: {
        color: '#134381'
      },
      name: "cv_filename_uploader",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["SimpleFileUpload"],
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531
      },
      __self: this
    }), errors.cv_filename_uploader && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-2rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539
      },
      __self: this
    }, errors.cv_filename_uploader))), __jsx("div", {
      className: "form-notes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      style: {
        fontSize: '2rem',
        marginBottom: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543
      },
      __self: this
    }, "Tell us why you would like a sponsored student place at EuroBrake 2020"), __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550
      },
      __self: this
    }, "Your personal statement (150\u2013250 words):"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-notes-input",
      onClick: handleChange,
      value: values.personal_statement,
      style: {
        color: '#134381'
      },
      name: "personal_statement",
      component: "textarea",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556
      },
      __self: this
    }), errors.personal_statement && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '2rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564
      },
      __self: this
    }, errors.personal_statement), errors.personal_statement && values.personal_statement && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '0',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565
      },
      __self: this
    }, 'Words' + ' ' + values.personal_statement.match(/[\w\d\’\'-]+/gi).length)), __jsx("div", {
      className: "form-field_file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 568
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 570
      },
      __self: this
    }, "Upload a photo, PDF or Microsoft Word document of a letter or ID card indicating your status as student."), __jsx("div", {
      className: "form-field_file-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575
      },
      __self: this
    }, "Upload proof of your status as student:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input_file",
      value: values.cv_filename_uploader,
      style: {
        color: '#134381'
      },
      name: "student_status_filename_uploader",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["SimpleFileUpload"],
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580
      },
      __self: this
    }), errors.student_status_filename_uploader && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-2rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588
      },
      __self: this
    }, errors.student_status_filename_uploader))), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 593
      },
      __self: this
    }, "Question 1: In what range does the brake pressure apply during emergency braking?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input_question",
      onClick: handleChange,
      value: values.question_1_answer,
      style: {
        color: '#134381'
      },
      name: "question_1_answer",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 598
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_9__["Q1"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        },
        __self: this
      }, option.label);
    })), errors.question_1_answer && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609
      },
      __self: this
    }, errors.question_1_answer)), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614
      },
      __self: this
    }, "Question 2: Sort the frequency of use of different brake systems in modern High Speed Trains"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input_question",
      onClick: handleChange,
      value: values.question_2_answer,
      style: {
        color: '#134381'
      },
      name: "question_2_answer",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_9__["Q2"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628
        },
        __self: this
      }, option.label);
    })), errors.question_2_answer && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630
      },
      __self: this
    }, errors.question_2_answer)), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634
      },
      __self: this
    }, "Question 3: Health relevance of brake wear particles becomes an important issue in brake industry. Find a correct answer:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input_question",
      onClick: handleChange,
      value: values.question_3_answer,
      style: {
        color: '#134381'
      },
      name: "question_3_answer",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_9__["Q3"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648
        },
        __self: this
      }, option.label);
    })), errors.question_3_answer && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 650
      },
      __self: this
    }, errors.question_3_answer)), __jsx("div", {
      className: "form-field_question-check",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "question_4_answer",
      className: "form-label",
      style: {
        marginBottom: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654
      },
      __self: this
    }, "Question 4: Can you list three of the Conference Topics at EuroBrake 2020?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["FieldArray"], {
      name: "question_4_answer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 661
      },
      __self: this
    }, function (_ref4) {
      var swap = _ref4.swap,
          push = _ref4.push,
          remove = _ref4.remove,
          setSubmitting = _ref4.setSubmitting;
      return _FormSelects__WEBPACK_IMPORTED_MODULE_9__["Q4"].map(function (question) {
        return __jsx("div", {
          key: question.id,
          className: "form-checkboxField",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 666
          },
          __self: this
        }, __jsx("label", {
          htmlFor: question.name,
          className: "form-checkboxField-label",
          style: {
            color: '#134381',
            width: '80%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 669
          },
          __self: this
        }, question.id), __jsx("input", {
          checked: values.question_4_answer && values.question_4_answer.includes(question.value),
          onChange: function onChange(e) {
            e.target.checked ? push(question.value) : values.question_4_answer && remove(values.question_4_answer.value);
          },
          className: "form-checkboxField-box",
          style: {
            color: '#134381'
          },
          value: question.value,
          name: question.name,
          type: "checkbox",
          id: question.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 677
          },
          __self: this
        }));
      });
    }), errors.question_4_answer && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '0',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 692
      },
      __self: this
    }, errors.question_4_answer)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694
      },
      __self: this
    }, " Additional Information"), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "youtube_url",
      className: "form-label_question",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 696
      },
      __self: this
    }, "If you have a short video outlining your motivation for applying for ESOP or your interest in the braking industry you can include a YouTube link here:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      placeholder: "This is optional and won\u2019t affect the judging process.",
      className: "form-input",
      onClick: handleChange,
      value: values.university_address3,
      style: {
        color: '#134381',
        margin: '4rem 0',
        Width: '66.6%'
      },
      name: "youtube_url",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 702
      },
      __self: this
    })), __jsx("div", {
      className: "form-field_question-check",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "roundtable",
      className: "form-label",
      style: {
        marginBottom: '1rem',
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714
      },
      __self: this
    }, "\u2018Round Table\u2019 sessions will take place as part of the ESOP 2020 programme \u2013 providing a unique opportunity for all students to meet with and learn from industry and academia experts."), __jsx("label", {
      htmlFor: "roundtable",
      className: "form-label",
      style: {
        marginBottom: '3rem',
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721
      },
      __self: this
    }, "Please leave details below if there are any topics you would like to see discussed in a Round Table session:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["FieldArray"], {
      name: "roundtable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728
      },
      __self: this
    }, function (_ref5) {
      var swap = _ref5.swap,
          push = _ref5.push,
          remove = _ref5.remove,
          setSubmitting = _ref5.setSubmitting;
      return _FormSelects__WEBPACK_IMPORTED_MODULE_9__["Sessions"].map(function (session) {
        return __jsx("div", {
          key: session.id,
          className: "form-checkboxField",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 733
          },
          __self: this
        }, __jsx("label", {
          htmlFor: session.name,
          className: "form-checkboxField-label",
          style: {
            color: '#134381',
            width: '80%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 736
          },
          __self: this
        }, session.id), __jsx("input", {
          checked: values.roundtable && values.roundtable.includes(session.value),
          onChange: function onChange(e) {
            e.target.checked ? push(session.value) : values.roundtable && remove(values.roundtable.value);
          },
          className: "form-checkboxField-box",
          style: {
            color: '#134381'
          },
          value: session.value,
          name: session.name,
          type: "checkbox",
          id: session.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 744
          },
          __self: this
        }), errors.roundtable && __jsx("label", {
          style: {
            position: 'absolute',
            bottom: '-1rem',
            right: '1rem',
            color: '#ff0000',
            fontSize: '1.5rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 757
          },
          __self: this
        }, errors.roundtable));
      });
    }), values.roundtable && values.roundtable.includes('3CA6AA5A-F3DA-11E8-B5C4-A947D1EF668C') && __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      placeholder: "Please specify",
      className: "form-input",
      onClick: handleChange,
      value: values.roundtable_other,
      style: {
        color: '#134381'
      },
      name: "roundtable_other",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 763
      },
      __self: this
    })), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 775
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "marketing",
      className: "form-label_question",
      style: {
        marginTop: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 776
      },
      __self: this
    }, "Where did you hear about the EuroBrake Student Opportunities Programme?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input_question",
      onClick: handleChange,
      value: values.marketing,
      style: {
        color: '#134381'
      },
      name: "marketing",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 783
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_9__["Marketing"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 792
        },
        __self: this
      }, option.label);
    })), values.marketing === 'E682897E-BACE-11E5-BFDD-7F6E5EAB70CB' && __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      placeholder: "Please specify",
      className: "form-input",
      onClick: handleChange,
      value: values.marketing_other,
      style: {
        color: '#134381',
        margin: '1rem 0'
      },
      name: "marketing_other",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 795
      },
      __self: this
    }), errors.student_level_current && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 805
      },
      __self: this
    }, errors.student_level_current)), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 808
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 809
      },
      __self: this
    }, "Have you participated in any other FISITA student initiatives?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-radio",
      value: values.student_level_current,
      style: {
        color: '#134381'
      },
      name: "previous_participant",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 814
      },
      __self: this
    }, __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "previous_participant_opt_yes",
      className: "form-label-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 821
      },
      __self: this
    }, __jsx("input", {
      onChange: handleChange,
      style: {
        margin: '1rem'
      },
      type: "radio",
      name: "previous_participant",
      value: "yes",
      id: "previous_participant_opt_yes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 825
      },
      __self: this
    }), "Yes"), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "previous_participant_opt_no",
      className: "form-label-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 835
      },
      __self: this
    }, __jsx("input", {
      style: {
        margin: '1rem'
      },
      onChange: handleChange,
      type: "radio",
      name: "previous_participant",
      value: "no",
      id: "previous_participant_opt_no",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 839
      },
      __self: this
    }), "No")), errors.student_level_current && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 851
      },
      __self: this
    }, errors.student_level_current)), values.previous_participant === 'yes' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 855
      },
      __self: this
    }, "Which of the following have you participated in?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["FieldArray"], {
      name: "initiatives",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 856
      },
      __self: this
    }, function (_ref6) {
      var swap = _ref6.swap,
          push = _ref6.push,
          remove = _ref6.remove,
          setSubmitting = _ref6.setSubmitting;
      return _FormSelects__WEBPACK_IMPORTED_MODULE_9__["Initiatives"].map(function (init) {
        return __jsx("div", {
          key: init.label,
          className: "form-checkboxField",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 861
          },
          __self: this
        }, __jsx("label", {
          htmlFor: init.label,
          className: "form-checkboxField-label",
          style: {
            color: '#134381',
            width: '80%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 864
          },
          __self: this
        }, init.label), __jsx("input", {
          checked: values.initiatives && values.initiatives.includes(init.value),
          onChange: function onChange(e) {
            e.target.checked ? push(init.value) : values.init && remove(values.init.value);
          },
          className: "form-checkboxField-box",
          style: {
            color: '#134381'
          },
          value: init.value,
          name: init.label,
          type: "checkbox",
          id: init.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 872
          },
          __self: this
        }), errors.initiatives && __jsx("label", {
          style: {
            position: 'absolute',
            bottom: '-1rem',
            right: '1rem',
            color: '#ff0000',
            fontSize: '1.5rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 885
          },
          __self: this
        }, errors.initiatives));
      });
    }, values.initiatives.includes('9EC8166C-E24B-11E6-A67E-861D5EAB70CB') && __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      placeholder: "Please specify",
      className: "form-input",
      onClick: handleChange,
      value: values.initiatives_other,
      style: {
        color: '#134381',
        margin: '1rem 0'
      },
      name: "initiatives_other",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 889
      },
      __self: this
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      gutterBottom: true,
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 900
      },
      __self: this
    }, "Additional Information"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 901
      },
      __self: this
    }, "Please note that by submitting a registration form for ESOP, you indicate your consent to us passing the personal information you have disclosed to us, including your CV, to the ESOP Sponsor Companies, so that they can contact you with details of career and/or work placement opportunities within their organisations, or to arrange a meeting with you at EuroBrake if you are selected to attend."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 902
      },
      __self: this
    }, "Here at FISITA we take your privacy seriously and will only use your personal information to set up and administer your account and/or membership and to provide the products and services you have requested from us."), __jsx("div", {
      className: "form-checkboxField",
      style: {
        margin: '4rem 0'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 903
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "consent_sponsors",
      className: "form-checkboxField-label",
      style: {
        color: '#134381',
        width: '80%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 906
      },
      __self: this
    }, "If you do not consent to us passing on your details, please tick here"), __jsx("input", {
      className: "form-checkboxField-box",
      style: {
        color: '#134381'
      },
      value: values.consent_sponsors,
      name: "consent_sponsors",
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 914
      },
      __self: this
    }), errors.consent_sponsors && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 921
      },
      __self: this
    }, errors.consent_sponsors)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        marginBottom: '3rem',
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 923
      },
      __self: this
    }, "However, from time to time we would like to contact you by email with details of the following:"), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 924
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "consent_fiec",
      className: "form-checkboxField-label",
      style: {
        color: '#134381',
        width: '80%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 926
      },
      __self: this
    }, "Membership of FISITA International Engineering Community (FIEC)"), __jsx("input", {
      className: "form-checkboxField-box",
      style: {
        color: '#134381'
      },
      value: values.consent_fiec,
      name: "consent_fiec",
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 934
      },
      __self: this
    }), errors.consent_fiec && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 941
      },
      __self: this
    }, errors.consent_fiec)), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 943
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "consent_wep",
      className: "task-checkboxField-label",
      style: {
        color: '#134381',
        width: '80%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 945
      },
      __self: this
    }, "Career & work placement opportunities via FISITA Work Experience Programme"), __jsx("input", {
      className: "form-checkboxField-box",
      style: {
        color: '#134381'
      },
      value: values.consent_wep,
      name: "consent_wep",
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 953
      },
      __self: this
    }), errors.consent_wep && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 960
      },
      __self: this
    }, errors.consent_wep)), " ", __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 961
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "consent_events",
      className: "form-checkboxField-label",
      style: {
        color: '#134381',
        width: '80%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 963
      },
      __self: this
    }, "Opportunities for students at upcoming FISITA events"), __jsx("input", {
      className: "form-checkboxField-box",
      style: {
        color: '#134381'
      },
      value: values.consent_events,
      name: "consent_events",
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 971
      },
      __self: this
    }), errors.consent_events && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 978
      },
      __self: this
    }, errors.consent_events)), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 980
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "consent_bursary",
      className: "form-checkboxField-label",
      style: {
        color: '#134381',
        width: '80%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 982
      },
      __self: this
    }, "Opportunities for funding via FISITA Travel Bursary Scheme"), __jsx("input", {
      className: "form-checkboxField-box",
      style: {
        color: '#134381'
      },
      value: values.consent_bursary,
      name: "consent_bursary",
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 989
      },
      __self: this
    }), errors.consent_bursary && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 996
      },
      __self: this
    }, errors.consent_bursary)), __jsx("div", {
      className: "form-checkboxField",
      style: {
        marginBottom: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 998
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "consent_yfia",
      className: "form-checkboxField-label",
      style: {
        color: '#134381',
        width: '80%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1001
      },
      __self: this
    }, "Subscription to \u201CYour Future in Automotive\u201D newsletter"), __jsx("input", {
      className: "form-checkboxField-box",
      style: {
        color: '#134381'
      },
      value: values.consent_yfia,
      name: "consent_yfia",
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1009
      },
      __self: this
    }), errors.consent_yfia && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1016
      },
      __self: this
    }, errors.consent_yfia)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1019
      },
      __self: this
    }, "Please tick the box(es) above for each purpose you consent to us contacting you about."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1022
      },
      __self: this
    }, "For more detailed information, please see our ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/privacyPolicy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1024
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1024
      },
      __self: this
    }, "privacy policy."))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1025
      },
      __self: this
    }, "For further details contact Hayley Millar, Education Manager at ", __jsx("a", {
      href: "mailto:h.millar@fisita.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1027
      },
      __self: this
    }, "h.millar@fisita.com.")), __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      onClick: function onClick() {
        return allTouched();
      },
      bcolor: "#134381",
      background: "#134381",
      br: "100rem",
      style: {
        margin: "4rem 0",
        color: '#FFF'
      },
      fontSize: "1.7rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1030
      },
      __self: this
    }, "Submit"), Toggle && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      gutterBottom: true,
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1037
      },
      __self: this
    }, Status));
  });
};
var emptyInitial = {
  student_title: '',
  student_firstname: '',
  student_lastname: '',
  student_email: '',
  student_company: '',
  student_address1: '',
  student_address2: '',
  student_address3: '',
  student_city: '',
  student_scp: '',
  student_postal: '',
  student_country: '',
  student_membersociety: '',
  birth_city: '',
  birth_country: '',
  student_level_current: '',
  student_level_seeking: '',
  university_course: '',
  university_name: '',
  university_address1: '',
  university_address2: '',
  university_address3: '',
  university_city: '',
  university_scp: '',
  university_postal: '',
  university_country: '',
  cv_filename_uploader: '',
  personal_statement: '',
  student_status_filename_uploader: '',
  question_1_answer: '',
  question_2_answer: '',
  question_3_answer: '',
  question_4_answer: [],
  youtube_url: '',
  roundtable: [],
  roundtable_other: '',
  marketing: '',
  marketing_other: '',
  previous_participant: '',
  initiatives: [],
  initiatives_other: '',
  consent_sponsors: '',
  consent_fiec: '',
  consent_wep: '',
  consent_bursary: '',
  consent_events: '',
  consent_yfia: '',
  __csrf_token: ''
};

/***/ })

})
//# sourceMappingURL=esop.js.116ca2d8bc0d79a2f852.hot-update.js.map