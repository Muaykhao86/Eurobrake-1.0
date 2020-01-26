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
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormSelects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormSelects */ "./components/forms/FormSelects.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormControl */ "./components/forms/FormControl.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");



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
    validationSchema: _FormControl__WEBPACK_IMPORTED_MODULE_11__["EsopSchema"],
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
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
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var res, data, dataStatus, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return setLoading(true);

              case 2:
                values.__csrf_token = csrf;
                _context3.next = 5;
                return console.log('submitting');

              case 5:
                _context3.next = 7;
                return Object(_FormActions__WEBPACK_IMPORTED_MODULE_13__["SendFile"])({
                  values: values,
                  url: url,
                  csrf: csrf
                });

              case 7:
                res = _context3.sent;
                _context3.next = 10;
                return res;

              case 10:
                data = _context3.sent;
                _context3.next = 13;
                return data;

              case 13:
                _context3.t0 = _context3.sent;

                if (!_context3.t0) {
                  _context3.next = 16;
                  break;
                }

                _context3.t0 = data.status;

              case 16:
                dataStatus = _context3.t0;
                setStatus(dataStatus);
                console.log({
                  data: data
                });

                result =
                /*#__PURE__*/
                function () {
                  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return setLoading(false);

                          case 2:
                            _context2.next = 4;
                            return setToggle(true);

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function result() {
                    return _ref4.apply(this, arguments);
                  };
                }();

                return _context3.abrupt("return", result());

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function onSubmit() {
        return _ref3.apply(this, arguments);
      };
    }();

    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_12__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "form-title",
      style: {
        marginTop: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "About you"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_10__["titles"].map(function (option, i) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_10__["countries"].map(function (option, i) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_10__["members"].map(function (option, i) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, "Place of birth"), __jsx("div", {
      className: "form-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "form-title",
      style: {
        marginTop: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, "Your University or HE Institution"), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, "What level of education have you achieved?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-radio",
      value: values.student_level_current,
      style: {
        color: '#134381'
      },
      name: "student_level_current",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
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
        lineNumber: 288
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
        lineNumber: 292
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
        lineNumber: 302
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
        lineNumber: 306
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
        lineNumber: 316
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
        lineNumber: 320
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
        lineNumber: 331
      },
      __self: this
    }, errors.student_level_current)), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, "What degree are you currently studying towards?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-radio",
      value: values.student_level_seeking,
      style: {
        color: '#134381'
      },
      name: "student_level_seeking",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
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
        lineNumber: 346
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
        lineNumber: 350
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
        lineNumber: 360
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
        lineNumber: 364
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
        lineNumber: 374
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
        lineNumber: 378
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
        lineNumber: 389
      },
      __self: this
    }, errors.student_level_seeking)), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 481
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 487
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_10__["countries"].map(function (option, i) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, option.label);
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "form-title",
      style: {
        marginTop: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529
      },
      __self: this
    }, "Your entry"), __jsx("div", {
      className: "form-field_file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "form-label",
      style: {
        minWidth: '100%',
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532
      },
      __self: this
    }, "Upload a PDF or Microsoft Word document of your CV/resum\xE9 here. Documents must not exceed 2 A4 pages and must be submitted in English."), __jsx("div", {
      className: "form-field_file-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535
      },
      __self: this
    }, "Upload your CV/resum\xE9:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input_file",
      value: values.cv_filename_uploader,
      style: {
        color: '#134381'
      },
      name: "cv_filename_uploader",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["SimpleFileUpload"],
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540
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
        lineNumber: 548
      },
      __self: this
    }, errors.cv_filename_uploader))), __jsx("div", {
      className: "form-notes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551
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
        lineNumber: 552
      },
      __self: this
    }, "Tell us why you would like a sponsored student place at EuroBrake 2020"), __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559
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
        lineNumber: 565
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
        lineNumber: 573
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
        lineNumber: 574
      },
      __self: this
    }, 'Words' + ' ' + values.personal_statement.match(/[\w\d\’\'-]+/gi).length)), __jsx("div", {
      className: "form-field_file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579
      },
      __self: this
    }, "Upload a photo, PDF or Microsoft Word document of a letter or ID card indicating your status as student."), __jsx("div", {
      className: "form-field_file-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "student_status_filename_uploader",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584
      },
      __self: this
    }, "Upload proof of your status as student:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input_file",
      value: values.student_status_filename_uploader,
      style: {
        color: '#134381'
      },
      name: "student_status_filename_uploader",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["SimpleFileUpload"],
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589
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
        lineNumber: 597
      },
      __self: this
    }, errors.student_status_filename_uploader))), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 601
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_10__["Q1"].map(function (option, i) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616
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
        lineNumber: 618
      },
      __self: this
    }, errors.question_1_answer)), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_10__["Q2"].map(function (option, i) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637
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
        lineNumber: 639
      },
      __self: this
    }, errors.question_2_answer)), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 643
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_10__["Q3"].map(function (option, i) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer',
          maxWidth: '80%'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657
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
        lineNumber: 659
      },
      __self: this
    }, errors.question_3_answer)), __jsx("div", {
      className: "form-field_question-check",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 662
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
        lineNumber: 663
      },
      __self: this
    }, "Question 4: Can you list three of the Conference Topics at EuroBrake 2020?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["FieldArray"], {
      name: "question_4_answer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 670
      },
      __self: this
    }, function (_ref5) {
      var swap = _ref5.swap,
          push = _ref5.push,
          remove = _ref5.remove,
          setSubmitting = _ref5.setSubmitting;
      return _FormSelects__WEBPACK_IMPORTED_MODULE_10__["Q4"].map(function (question) {
        return __jsx("div", {
          key: question.id,
          className: "form-checkboxField",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 675
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
            lineNumber: 678
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
            lineNumber: 686
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
        lineNumber: 701
      },
      __self: this
    }, errors.question_4_answer)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703
      },
      __self: this
    }, " Additional Information"), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 704
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
        lineNumber: 705
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 711
      },
      __self: this
    })), __jsx("div", {
      className: "form-field_question-check",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722
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
        lineNumber: 723
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
        lineNumber: 730
      },
      __self: this
    }, "Please leave details below if there are any topics you would like to see discussed in a Round Table session:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["FieldArray"], {
      name: "roundtable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 737
      },
      __self: this
    }, function (_ref6) {
      var swap = _ref6.swap,
          push = _ref6.push,
          remove = _ref6.remove,
          setSubmitting = _ref6.setSubmitting;
      return _FormSelects__WEBPACK_IMPORTED_MODULE_10__["Sessions"].map(function (session) {
        return __jsx("div", {
          key: session.id,
          className: "form-checkboxField",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 742
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
            lineNumber: 745
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
            lineNumber: 753
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
            lineNumber: 766
          },
          __self: this
        }, errors.roundtable));
      });
    })), __jsx("div", {
      className: "form-field",
      style: {
        justifyContent: 'flex-end'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 771
      },
      __self: this
    }, values.roundtable.includes('3CA6AA5A-F3DA-11E8-B5C4-A947D1EF668C') && __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      placeholder: "Please specify",
      className: "form-input",
      onClick: handleChange,
      value: values.roundtable_other,
      style: {
        color: '#134381',
        margin: '1rem 0'
      },
      name: "roundtable_other",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 773
      },
      __self: this
    })), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 785
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
        lineNumber: 786
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 793
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_10__["Marketing"].map(function (option, i) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 802
        },
        __self: this
      }, option.label);
    })), errors.student_level_current && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 804
      },
      __self: this
    }, errors.student_level_current)), __jsx("div", {
      className: "form-field",
      style: {
        justifyContent: 'flex-end'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 807
      },
      __self: this
    }, values.marketing === 'E682897E-BACE-11E5-BFDD-7F6E5EAB70CB' && __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      placeholder: "Please specify",
      className: "form-input",
      onClick: handleChange,
      value: values.marketing_other,
      style: {
        color: '#134381',
        margin: '1rem 0'
      },
      name: "marketing_other",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 809
      },
      __self: this
    })), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 819
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 820
      },
      __self: this
    }, "Have you participated in any other FISITA student initiatives?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-radio",
      value: values.student_level_current,
      style: {
        color: '#134381'
      },
      name: "previous_participant",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 825
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
        lineNumber: 832
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
        lineNumber: 836
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
        lineNumber: 846
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
        lineNumber: 850
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
        lineNumber: 862
      },
      __self: this
    }, errors.student_level_current)), values.previous_participant === 'yes' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 867
      },
      __self: this
    }, "Which of the following have you participated in?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["FieldArray"], {
      name: "initiatives",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 868
      },
      __self: this
    }, function (_ref7) {
      var swap = _ref7.swap,
          push = _ref7.push,
          remove = _ref7.remove,
          setSubmitting = _ref7.setSubmitting;
      return _FormSelects__WEBPACK_IMPORTED_MODULE_10__["Initiatives"].map(function (init) {
        return __jsx("div", {
          key: init.label,
          className: "form-checkboxField",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 873
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
            lineNumber: 876
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
            lineNumber: 884
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
            lineNumber: 896
          },
          __self: this
        }, errors.initiatives));
      });
    })), __jsx("div", {
      className: "form-field",
      style: {
        justifyContent: 'flex-end'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 901
      },
      __self: this
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_8__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 903
      },
      __self: this
    })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      gutterBottom: true,
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 915
      },
      __self: this
    }, "Additional Information"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 916
      },
      __self: this
    }, "Please note that by submitting a registration form for ESOP, you indicate your consent to us passing the personal information you have disclosed to us, including your CV, to the ESOP Sponsor Companies, so that they can contact you with details of career and/or work placement opportunities within their organisations, or to arrange a meeting with you at EuroBrake if you are selected to attend."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 917
      },
      __self: this
    }, "Here at FISITA we take your privacy seriously and will only use your personal information to set up and administer your account and/or membership and to provide the products and services you have requested from us."), __jsx("div", {
      className: "form-checkboxField",
      style: {
        margin: '4rem 0'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 918
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
        lineNumber: 921
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
        lineNumber: 929
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
        lineNumber: 936
      },
      __self: this
    }, errors.consent_sponsors)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        marginBottom: '3rem',
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 938
      },
      __self: this
    }, "However, from time to time we would like to contact you by email with details of the following:"), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 939
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
        lineNumber: 941
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
        lineNumber: 949
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
        lineNumber: 956
      },
      __self: this
    }, errors.consent_fiec)), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 958
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
        lineNumber: 960
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
        lineNumber: 968
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
        lineNumber: 975
      },
      __self: this
    }, errors.consent_wep)), " ", __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 976
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
        lineNumber: 978
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
        lineNumber: 986
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
        lineNumber: 993
      },
      __self: this
    }, errors.consent_events)), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 995
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
        lineNumber: 997
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
        lineNumber: 1004
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
        lineNumber: 1011
      },
      __self: this
    }, errors.consent_bursary)), __jsx("div", {
      className: "form-checkboxField",
      style: {
        marginBottom: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1013
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
        lineNumber: 1016
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
        lineNumber: 1024
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
        lineNumber: 1031
      },
      __self: this
    }, errors.consent_yfia)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1034
      },
      __self: this
    }, "Please tick the box(es) above for each purpose you consent to us contacting you about."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1037
      },
      __self: this
    }, "For more detailed information, please see our ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/privacyPolicy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1039
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1039
      },
      __self: this
    }, "privacy policy."))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1040
      },
      __self: this
    }, "For further details contact Hayley Millar, Education Manager at ", __jsx("a", {
      href: "mailto:h.millar@fisita.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1042
      },
      __self: this
    }, "h.millar@fisita.com.")), __jsx(_Button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
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
      fontSize: "2rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1045
      },
      __self: this
    }, "Submit"), Toggle && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "form-title",
      style: {
        alignSelf: 'center',
        textTransform: 'uppercase'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1052
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
//# sourceMappingURL=esop.js.049bfd2a889d040ed0a7.hot-update.js.map