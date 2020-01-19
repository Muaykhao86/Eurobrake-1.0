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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormSelects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormSelects */ "./components/forms/FormSelects.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormControl */ "./components/forms/FormControl.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");

var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/Esop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var members = [];
var Esop = function Esop() {
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: emptyInitial,
    onSubmit: function onSubmit(values, actions) {
      setTimeout(function () {
        alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    },
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, function (_ref) {
    var values = _ref.values,
        handleChange = _ref.handleChange,
        setFieldValue = _ref.setFieldValue,
        isValidating = _ref.isValidating,
        validateForm = _ref.validateForm,
        handleSubmit = _ref.handleSubmit,
        errors = _ref.errors,
        isSubmitting = _ref.isSubmitting;
    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_9__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "About you"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
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
          lineNumber: 45
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
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
          lineNumber: 198
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
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
          lineNumber: 216
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, "Place of birth"), __jsx("div", {
      className: "form-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      placeholder: "Country",
      className: "form-input",
      onClick: handleChange,
      value: values.student_jobtitle,
      style: {
        color: '#134381',
        width: '100%'
      },
      name: "birth_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "form-title",
      style: {
        marginTop: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, "Your University or HE Institution"), __jsx("div", {
      className: "form-field-radio",
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
    }, "What level of education have you achieved?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-radio",
      value: values.student_level_current,
      style: {
        color: '#134381'
      },
      name: "student_level_current",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
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
        lineNumber: 260
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
      id: "student_level_current_none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
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
        lineNumber: 274
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
      id: "student_level_current_Bachelor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
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
        lineNumber: 288
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
      id: "student_level_current_Master",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
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
        lineNumber: 303
      },
      __self: this
    }, errors.student_level_current)), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, "What degree are you currently studying towards?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-radio",
      value: values.student_level_seeking,
      style: {
        color: '#134381'
      },
      name: "student_level_seeking",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
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
        lineNumber: 318
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
      id: "student_level_seeking_Bachelor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
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
        lineNumber: 332
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
      id: "student_level_seeking_Master",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
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
        lineNumber: 346
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
      id: "student_level_seeking_PhD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
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
        lineNumber: 361
      },
      __self: this
    }, errors.student_level_seeking)), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 474
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489
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
          lineNumber: 498
        },
        __self: this
      }, option.label);
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "form-title",
      style: {
        marginTop: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501
      },
      __self: this
    }, "Your entry"), __jsx("div", {
      className: "form-field_file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "form-label",
      style: {
        minWidth: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504
      },
      __self: this
    }, "Upload a PDF or Microsoft Word document of your CV/resum\xE9 here. Documents must not exceed 2 A4 pages and must be submitted in English."), __jsx("div", {
      className: "form-field_file-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507
      },
      __self: this
    }, "Upload your CV/resum\xE9:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input_file",
      value: values.cv_filename_uploader,
      style: {
        color: '#134381'
      },
      name: "cv_filename_uploader",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["SimpleFileUpload"],
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512
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
        lineNumber: 520
      },
      __self: this
    }, errors.cv_filename_uploader))), __jsx("div", {
      className: "form-notes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524
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
        lineNumber: 529
      },
      __self: this
    })), __jsx("div", {
      className: "form-field_file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542
      },
      __self: this
    }, "Upload a photo, PDF or Microsoft Word document of a letter or ID card indicating your status as student."), __jsx("div", {
      className: "form-field_file-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545
      },
      __self: this
    }, "Upload proof of your status as student:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      value: values.cv_filename_uploader,
      style: {
        color: '#134381'
      },
      name: "student_status_filename_uploader",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["SimpleFileUpload"],
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550
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
        lineNumber: 558
      },
      __self: this
    }, errors.student_status_filename_uploader))), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563
      },
      __self: this
    }, "Question 1: In what range does the brake pressure apply during emergency braking?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input_question",
      onClick: handleChange,
      value: values.question_1_answer,
      style: {
        color: '#134381'
      },
      name: "question_1_answer",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 568
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_7__["Q1"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 581
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582
      },
      __self: this
    }, "Question 2: Sort the frequency of use of different brake systems in modern High Speed Trains"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input_question",
      onClick: handleChange,
      value: values.question_2_answer,
      style: {
        color: '#134381'
      },
      name: "question_2_answer",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_7__["Q2"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 600
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 601
      },
      __self: this
    }, "Question 3: Health relevance of brake wear particles becomes an important issue in brake industry. Find a correct answer:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input_question",
      onClick: handleChange,
      value: values.question_3_answer,
      style: {
        color: '#134381'
      },
      name: "question_3_answer",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_7__["Q3"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618
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
        lineNumber: 619
      },
      __self: this
    }, "Question 4: Can you list three of the Conference Topics at EuroBrake 2020?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
      name: "question_4_answer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626
      },
      __self: this
    }, function (_ref2) {
      var swap = _ref2.swap,
          push = _ref2.push,
          remove = _ref2.remove,
          setSubmitting = _ref2.setSubmitting;
      return _FormSelects__WEBPACK_IMPORTED_MODULE_7__["Q4"].map(function (question) {
        return __jsx("div", {
          key: question.id,
          className: "form-checkboxField",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 631
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
            lineNumber: 634
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
            lineNumber: 642
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
            lineNumber: 655
          },
          __self: this
        }, errors.accept));
      });
    })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660
      },
      __self: this
    }, " Additional Information"), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 661
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "youtube_url",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 662
      },
      __self: this
    }, "If you have a short video outlining your motivation for applying for ESOP or your interest in the braking industry you can include a YouTube link here:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 667
      },
      __self: this
    })), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "roundtable",
      className: "form-label",
      style: {
        marginBottom: '1rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679
      },
      __self: this
    }, "\u2018Round Table\u2019 sessions will take place as part of the ESOP 2020 programme \u2013 providing a unique opportunity for all students to meet with and learn from industry and academia experts."), __jsx("label", {
      htmlFor: "roundtable",
      className: "form-label",
      style: {
        marginBottom: '3rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686
      },
      __self: this
    }, "Please leave details below if there are any topics you would like to see discussed in a Round Table session:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
      name: "roundtable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 693
      },
      __self: this
    }, function (_ref3) {
      var swap = _ref3.swap,
          push = _ref3.push,
          remove = _ref3.remove,
          setSubmitting = _ref3.setSubmitting;
      return _FormSelects__WEBPACK_IMPORTED_MODULE_7__["Sessions"].map(function (session) {
        return __jsx("div", {
          key: session.id,
          className: "form-checkboxField",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 698
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
            lineNumber: 701
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
            lineNumber: 709
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
            lineNumber: 722
          },
          __self: this
        }, errors.roundtable));
      });
    }), values.roundtable && values.roundtable.includes('3CA6AA5A-F3DA-11E8-B5C4-A947D1EF668C') && __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      placeholder: "Please specify",
      className: "form-input",
      onClick: handleChange,
      value: values.roundtable_other,
      style: {
        color: '#134381'
      },
      name: "roundtable_other",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728
      },
      __self: this
    })), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 740
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "marketing",
      className: "form-label",
      style: {
        margin: '4rem 0'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 741
      },
      __self: this
    }, "Where did you hear about the EuroBrake Student Opportunities Programme?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.marketing,
      style: {
        color: '#134381'
      },
      name: "marketing",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 747
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_7__["Marketing"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 756
        },
        __self: this
      }, option.label);
    })), values.marketing === 'E682897E-BACE-11E5-BFDD-7F6E5EAB70CB' && __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      placeholder: "Please specify",
      className: "form-input",
      onClick: handleChange,
      value: values.marketing_other,
      style: {
        color: '#134381',
        margin: '1rem 0'
      },
      name: "marketing_other",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 759
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
        lineNumber: 769
      },
      __self: this
    }, errors.student_level_current)), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 772
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 773
      },
      __self: this
    }, "Have you participated in any other FISITA student initiatives?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-radio",
      value: values.student_level_current,
      style: {
        color: '#134381'
      },
      name: "previous_participant",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 778
      },
      __self: this
    }, __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "previous_participant_opt_yes",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 785
      },
      __self: this
    }, "Yes", __jsx("input", {
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
        lineNumber: 790
      },
      __self: this
    })), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "previous_participant_opt_no",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 799
      },
      __self: this
    }, "No", __jsx("input", {
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
        lineNumber: 804
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
        lineNumber: 815
      },
      __self: this
    }, errors.student_level_current)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817
      },
      __self: this
    }, "Additional Information"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 818
      },
      __self: this
    }, "Please note that by submitting a registration form for ESOP, you indicate your consent to us passing the personal information you have disclosed to us, including your CV, to the ESOP Sponsor Companies, so that they can contact you with details of career and/or work placement opportunities within their organisations, or to arrange a meeting with you at EuroBrake if you are selected to attend."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 819
      },
      __self: this
    }, "Here at FISITA we take your privacy seriously and will only use your personal information to set up and administer your account and/or membership and to provide the products and services you have requested from us."), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 820
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
        lineNumber: 822
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
        lineNumber: 830
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
        lineNumber: 837
      },
      __self: this
    }, errors.consent_sponsors)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 839
      },
      __self: this
    }, "However, from time to time we would like to contact you by email with details of the following:"), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 840
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
        lineNumber: 842
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
        lineNumber: 850
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
        lineNumber: 857
      },
      __self: this
    }, errors.consent_fiec)), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 859
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
        lineNumber: 861
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
        lineNumber: 869
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
        lineNumber: 876
      },
      __self: this
    }, errors.consent_wep)), " ", __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 877
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
        lineNumber: 879
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
        lineNumber: 887
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
        lineNumber: 894
      },
      __self: this
    }, errors.consent_events)), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 896
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
        lineNumber: 898
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
        lineNumber: 905
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
        lineNumber: 912
      },
      __self: this
    }, errors.consent_bursary)), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 914
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
        lineNumber: 916
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
        lineNumber: 924
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
        lineNumber: 931
      },
      __self: this
    }, errors.consent_yfia)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 934
      },
      __self: this
    }, "Please tick the box(es) above for each purpose you consent to us contacting you about."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 935
      },
      __self: this
    }, "For more detailed information, please see our ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/privacyPolicy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 935
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 935
      },
      __self: this
    }, "privacy policy."))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 936
      },
      __self: this
    }, "For further details contact Hayley Millar, Education Manager at ", __jsx("a", {
      href: "mailto:h.millar@fisita.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 936
      },
      __self: this
    }, "h.millar@fisita.com.")), __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      type: "submit",
      bcolor: "#134381",
      background: "#134381",
      br: "100rem",
      style: {
        margin: ".5rem 0",
        color: '#FFF'
      },
      fontSize: "1.7rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 939
      },
      __self: this
    }, "Submit"));
  });
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
  student_membersociety: '',
  university_country: '',
  question_1_answer: '',
  question_2_answer: '',
  question_3_answer: '',
  question_4_answer: [],
  marketing: '',
  roundtable: [],
  previous_participant: '',
  __csrf_token: ''
};

/***/ })

})
//# sourceMappingURL=esop.js.71f00802745b354a758b.hot-update.js.map