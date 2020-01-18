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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormSelects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormSelects */ "./components/forms/FormSelects.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormControl */ "./components/forms/FormControl.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");

var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/Esop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var members = [];
var Esop = function Esop() {
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: presets || emptyInitial,
    onSubmit: function onSubmit(values, actions) {
      setTimeout(function () {
        alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    },
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, function (_ref) {
    var values = _ref.values,
        handleChange = _ref.handleChange,
        setFieldValue = _ref.setFieldValue,
        isValidating = _ref.isValidating,
        validateForm = _ref.validateForm,
        handleSubmit = _ref.handleSubmit,
        errors = _ref.errors;
    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_8__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "About you"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Title"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_title,
      style: {
        color: '#134381'
      },
      name: "student_title",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_6__["titles"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "First Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_firstname,
      style: {
        color: '#134381'
      },
      name: "student_firstname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Last Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_lastname,
      style: {
        color: '#134381'
      },
      name: "student_lastname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), __jsx("div", {
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
    }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_email,
      style: {
        color: '#134381'
      },
      name: "student_email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }, "Address:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_address1,
      style: {
        color: '#134381'
      },
      name: "student_address1",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_address2,
      style: {
        color: '#134381'
      },
      name: "student_address2",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_address3,
      style: {
        color: '#134381'
      },
      name: "student_address3",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }, "City:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_city,
      style: {
        color: '#134381'
      },
      name: "student_city",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }, "State/ County/ Province:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_scp,
      style: {
        color: '#134381'
      },
      name: "student_scp",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }, "Postal/ Zip code:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_postal,
      style: {
        color: '#134381'
      },
      name: "student_postal",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }, "Country"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_country,
      style: {
        color: '#134381'
      },
      name: "student_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_6__["countries"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, "Your FISITA member society"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_country,
      style: {
        color: '#134381'
      },
      name: "student_membersociety",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, members.map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, "Place of birth"), __jsx("div", {
      className: "form-input",
      style: {
        display: 'flex',
        flexFlow: 'column'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      placeholder: "City",
      className: "form-input",
      onClick: handleChange,
      value: values.student_jobtitle,
      style: {
        color: '#134381',
        marginBottom: '1rem'
      },
      name: "birth_city",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      placeholder: "Country",
      className: "form-input",
      onClick: handleChange,
      value: values.student_jobtitle,
      style: {
        color: '#134381'
      },
      name: "birth_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, "Your University or HE Institution"), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, "What level of education have you achieved?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-radio",
      value: values.student_level_current,
      style: {
        color: '#134381'
      },
      name: "student_level_current",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
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
        lineNumber: 258
      },
      __self: this
    }, "None", __jsx("input", {
      onChange: handleChange,
      style: {
        margin: '1rem'
      },
      type: "radio",
      name: "student_level_current",
      value: "none",
      id: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    })), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, "Bachelor or equivalent", __jsx("input", {
      style: {
        margin: '1rem'
      },
      onChange: handleChange,
      type: "radio",
      name: "student_level_current",
      value: "Bachelor",
      id: "Bachelor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    })), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, "Master or equivalent", __jsx("input", {
      style: {
        margin: '1rem'
      },
      onChange: handleChange,
      type: "radio",
      name: "student_level_current",
      value: "Master",
      id: "Master",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }))), errors.student_level_current && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, errors.student_level_current)), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, "What degree are you currently studying towards?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-radio",
      value: values.student_level_seeking,
      style: {
        color: '#134381'
      },
      name: "student_level_seeking",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
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
        lineNumber: 316
      },
      __self: this
    }, "Bachelor or equivalent", __jsx("input", {
      style: {
        margin: '1rem'
      },
      onChange: handleChange,
      type: "radio",
      name: "student_level_seeking",
      value: "Bachelor",
      id: "Bachelor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    })), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }, "Master or equivalent", __jsx("input", {
      style: {
        margin: '1rem'
      },
      onChange: handleChange,
      type: "radio",
      name: "student_level_seeking",
      value: "Master",
      id: "Master",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    })), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, "PhD. or equivalent", __jsx("input", {
      onChange: handleChange,
      style: {
        margin: '1rem'
      },
      type: "radio",
      name: "student_level_seeking",
      value: "PhD",
      id: "PhD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }))), errors.student_level_seeking && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, errors.student_level_seeking)), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    }, "Course being studied:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_course,
      style: {
        color: '#134381'
      },
      name: "university_course",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }, "University / Institution"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_name,
      style: {
        color: '#134381'
      },
      name: "university_name",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    })), __jsx("div", {
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
    }, "Address:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_address1,
      style: {
        color: '#134381'
      },
      name: "university_address1",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_address2,
      style: {
        color: '#134381'
      },
      name: "university_address2",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_address3,
      style: {
        color: '#134381'
      },
      name: "university_address3",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }, "City:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_city,
      style: {
        color: '#134381'
      },
      name: "university_city",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }, "State/ County/ Province:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_scp,
      style: {
        color: '#134381'
      },
      name: "university_scp",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }, "Postal/ Zip code:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_postal,
      style: {
        color: '#134381'
      },
      name: "university_postal",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
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
    }, "Country"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_country,
      style: {
        color: '#134381'
      },
      name: "university_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 487
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_6__["countries"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        },
        __self: this
      }, option.label);
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499
      },
      __self: this
    }, "Your entry"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502
      },
      __self: this
    }, "Upload a PDF or Microsoft Word document of your CV/resum\xE9 here. Documents must not exceed 2 A4 pages and must be submitted in English."), __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504
      },
      __self: this
    }, "Upload your CV/resum\xE9:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      value: values.cv_filename_uploader,
      style: {
        color: '#134381'
      },
      name: "cv_filename_uploader",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["SimpleFileUpload"],
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509
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
        lineNumber: 517
      },
      __self: this
    }, errors.cv_filename_uploader)), __jsx("div", {
      className: "form-notes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-notes-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520
      },
      __self: this
    }, "Your personal statement \u2013 Tell us why you would like a sponsored student place at EuroBrake 2020 (150\u2013250 words):"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
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
        lineNumber: 525
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538
      },
      __self: this
    }, "Upload a photo, PDF or Microsoft Word document of a letter or ID card indicating your status as student."), __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540
      },
      __self: this
    }, "Upload proof of your status as student:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      value: values.cv_filename_uploader,
      style: {
        color: '#134381'
      },
      name: "student_status_filename_uploader",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["SimpleFileUpload"],
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545
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
        lineNumber: 553
      },
      __self: this
    }, errors.student_status_filename_uploader)), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557
      },
      __self: this
    }, "Question 1: In what range does the brake pressure apply during emergency braking?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.question_1_answer,
      style: {
        color: '#134381'
      },
      name: "question_1_answer",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_6__["Q1"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576
      },
      __self: this
    }, "Question 2: Sort the frequency of use of different brake systems in modern High Speed Trains"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.question_2_answer,
      style: {
        color: '#134381'
      },
      name: "question_2_answer",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 581
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_6__["Q2"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 594
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 595
      },
      __self: this
    }, "Question 3: Health relevance of brake wear particles becomes an important issue in brake industry. Find a correct answer:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.question_3_answer,
      style: {
        color: '#134381'
      },
      name: "question_3_answer",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 600
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_6__["Q3"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        },
        __self: this
      }, option.label);
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612
      },
      __self: this
    }, "Upload a photo, PDF or Microsoft Word document of a letter or ID card indicating your status as student."), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
      name: "question_4_answer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614
      },
      __self: this
    }, function (_ref2) {
      var swap = _ref2.swap,
          push = _ref2.push,
          remove = _ref2.remove,
          setSubmitting = _ref2.setSubmitting;
      return q4.map(function (author, index) {
        return __jsx("div", {
          className: "task-checkboxField",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 623
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "task-checkboxField-label",
          style: {
            color: '#134381',
            width: '80%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 625
          },
          __self: this
        }, "Intelligent Braking and Braking Control"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
          className: "task-checkboxField-box",
          style: {
            color: '#134381'
          },
          value: values.accept,
          name: "accept",
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Checkbox"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 633
          },
          __self: this
        }), errors.accept && __jsx("label", {
          style: {
            position: 'absolute',
            bottom: '-1rem',
            right: '1rem',
            color: '#ff0000',
            fontSize: '1.5rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 641
          },
          __self: this
        }, errors.accept));
      });
    }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "submit",
      bcolor: "#134381",
      background: "#134381",
      br: "100rem",
      style: {
        margin: ".5rem 0"
      },
      fontSize: "1.7rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648
      },
      __self: this
    }, "Submit"));
  });
};
var Q4 = [{
  id: "movies",
  name: "Movies"
}, {
  id: "music",
  name: "Music"
}, {
  id: "videoGames",
  name: "Video Games"
}];
var presets = {
  student_title: "Mr.",
  student_firstname: "Andrew",
  student_lastname: "Green",
  student_email: "andrew@article7.co.uk",
  student_jobtitle: "Director",
  student_company: "Article Seven Limited",
  student_address1: "10 Hamilton Road",
  student_address2: null,
  student_address3: null,
  student_city: "Sidcup",
  student_scp: "Kent",
  student_country: "GB",
  student_postal: "DA15 7HB",
  student_phone: "+44 20 8305 1224",
  student_fax: '',
  student_password: '',
  student_password_confirmed: '',
  __csrf_token: "5d159fb224ed613dce89a64553f36f5eda1fa97c,2caaa318bb55c8c19d660a1e420d1c602dfc59f9,1576603105"
};
var emptyInitial = {
  student_title: '',
  student_firstname: '',
  student_lastname: '',
  student_email: '',
  student_jobtitle: '',
  student_company: '',
  student_address1: '',
  student_address2: '',
  student_address3: '',
  student_city: '',
  student_scp: '',
  student_postal: '',
  student_country: '',
  student_phone: '',
  student_fax: '',
  student_password: '',
  student_password_confirmed: '',
  __csrf_token: ''
};

/***/ })

})
//# sourceMappingURL=esop.js.e7e446009286378fe150.hot-update.js.map