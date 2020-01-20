webpackHotUpdate("static/development/pages/tempEsop.js",{

/***/ "./components/InstructionsPopup.js":
false,

/***/ "./components/forms/Esop.js":
/*!**********************************!*\
  !*** ./components/forms/Esop.js ***!
  \**********************************/
/*! exports provided: Esop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Esop", function() { return Esop; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
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
    validationSchema: _FormControl__WEBPACK_IMPORTED_MODULE_8__["EsopSchema"],
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

    var onSubmit = function onSubmit() {
      validateForm();
      values.__csrf_token = csrf;
      console.log('submitting', values);
    };

    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_9__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "form-title",
      style: {
        marginTop: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "About you"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
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
        lineNumber: 38
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
          lineNumber: 47
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
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
        lineNumber: 56
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
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
        lineNumber: 71
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
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
        lineNumber: 86
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
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
        lineNumber: 101
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
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
        lineNumber: 116
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
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
        lineNumber: 131
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
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
        lineNumber: 146
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
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
        lineNumber: 161
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
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
        lineNumber: 176
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
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
        lineNumber: 191
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
          lineNumber: 200
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
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
        lineNumber: 209
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
          lineNumber: 218
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
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
    }, "Place of birth"), __jsx("div", {
      className: "form-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
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
        lineNumber: 228
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
        lineNumber: 237
      },
      __self: this
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "form-title",
      style: {
        marginTop: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, "Your University or HE Institution"), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
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
        lineNumber: 255
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
        lineNumber: 262
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
        lineNumber: 267
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
        lineNumber: 276
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
        lineNumber: 281
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
        lineNumber: 290
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
        lineNumber: 295
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
        lineNumber: 305
      },
      __self: this
    }, errors.student_level_current)), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
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
        lineNumber: 313
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
        lineNumber: 320
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
        lineNumber: 325
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
        lineNumber: 334
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
        lineNumber: 339
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
        lineNumber: 348
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
        lineNumber: 353
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
        lineNumber: 363
      },
      __self: this
    }, errors.student_level_seeking)), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
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
        lineNumber: 371
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
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
        lineNumber: 386
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
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
        lineNumber: 401
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
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
        lineNumber: 416
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426
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
        lineNumber: 431
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441
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
        lineNumber: 446
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
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
        lineNumber: 461
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471
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
        lineNumber: 476
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486
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
        lineNumber: 491
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
          lineNumber: 500
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
        lineNumber: 503
      },
      __self: this
    }, "Your entry"), __jsx("div", {
      className: "form-field_file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "form-label",
      style: {
        minWidth: '100%',
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506
      },
      __self: this
    }, "Upload a PDF or Microsoft Word document of your CV/resum\xE9 here. Documents must not exceed 2 A4 pages and must be submitted in English."), __jsx("div", {
      className: "form-field_file-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509
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
        lineNumber: 514
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
        lineNumber: 522
      },
      __self: this
    }, errors.cv_filename_uploader))), __jsx("div", {
      className: "form-notes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525
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
        lineNumber: 526
      },
      __self: this
    }, "Tell us why you would like a sponsored student place at EuroBrake 2020"), __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533
      },
      __self: this
    }, "Your personal statement (150\u2013250 words):"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
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
        lineNumber: 539
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
        lineNumber: 547
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
        lineNumber: 548
      },
      __self: this
    }, 'Words' + ' ' + values.personal_statement.match(/[\w\d\’\'-]+/gi).length)), __jsx("div", {
      className: "form-field_file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 553
      },
      __self: this
    }, "Upload a photo, PDF or Microsoft Word document of a letter or ID card indicating your status as student."), __jsx("div", {
      className: "form-field_file-box",
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
        lineNumber: 558
      },
      __self: this
    }, "Upload proof of your status as student:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input_file",
      value: values.cv_filename_uploader,
      style: {
        color: '#134381'
      },
      name: "student_status_filename_uploader",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["SimpleFileUpload"],
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563
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
        lineNumber: 571
      },
      __self: this
    }, errors.student_status_filename_uploader))), __jsx("div", {
      className: "form-field_question",
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
        lineNumber: 581
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
          lineNumber: 590
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field_question",
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
        lineNumber: 600
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
          lineNumber: 609
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614
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
        lineNumber: 619
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
          lineNumber: 628
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631
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
        lineNumber: 632
      },
      __self: this
    }, "Question 4: Can you list three of the Conference Topics at EuroBrake 2020?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
      name: "question_4_answer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639
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
            lineNumber: 644
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
            lineNumber: 647
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
            lineNumber: 655
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
        lineNumber: 670
      },
      __self: this
    }, errors.question_4_answer)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672
      },
      __self: this
    }, " Additional Information"), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 673
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "youtube_url",
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674
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
        lineNumber: 680
      },
      __self: this
    })), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 691
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
        lineNumber: 692
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
        lineNumber: 699
      },
      __self: this
    }, "Please leave details below if there are any topics you would like to see discussed in a Round Table session:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
      name: "roundtable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 706
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
            lineNumber: 711
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
            lineNumber: 714
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
            lineNumber: 722
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
            lineNumber: 735
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
        lineNumber: 741
      },
      __self: this
    })), __jsx("div", {
      className: "form-field_question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "marketing",
      className: "form-label",
      style: {
        marginTop: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 754
      },
      __self: this
    }, "Where did you hear about the EuroBrake Student Opportunities Programme?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input_question",
      onClick: handleChange,
      value: values.marketing,
      style: {
        color: '#134381'
      },
      name: "marketing",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 761
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
          lineNumber: 770
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
        lineNumber: 773
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
        lineNumber: 783
      },
      __self: this
    }, errors.student_level_current)), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 786
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 787
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
        lineNumber: 792
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
        lineNumber: 799
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
        lineNumber: 804
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
        lineNumber: 813
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
        lineNumber: 818
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
        lineNumber: 829
      },
      __self: this
    }, errors.student_level_current)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 831
      },
      __self: this
    }, "Additional Information"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 832
      },
      __self: this
    }, "Please note that by submitting a registration form for ESOP, you indicate your consent to us passing the personal information you have disclosed to us, including your CV, to the ESOP Sponsor Companies, so that they can contact you with details of career and/or work placement opportunities within their organisations, or to arrange a meeting with you at EuroBrake if you are selected to attend."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 833
      },
      __self: this
    }, "Here at FISITA we take your privacy seriously and will only use your personal information to set up and administer your account and/or membership and to provide the products and services you have requested from us."), __jsx("div", {
      className: "form-checkboxField",
      style: {
        margin: '4rem 0'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 834
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
        lineNumber: 837
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
        lineNumber: 845
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
        lineNumber: 852
      },
      __self: this
    }, errors.consent_sponsors)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        marginBottom: '3rem',
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854
      },
      __self: this
    }, "However, from time to time we would like to contact you by email with details of the following:"), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 855
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
        lineNumber: 857
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
        lineNumber: 865
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
        lineNumber: 872
      },
      __self: this
    }, errors.consent_fiec)), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 874
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
        lineNumber: 876
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
        lineNumber: 884
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
        lineNumber: 891
      },
      __self: this
    }, errors.consent_wep)), " ", __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 892
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
        lineNumber: 894
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
        lineNumber: 902
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
        lineNumber: 909
      },
      __self: this
    }, errors.consent_events)), __jsx("div", {
      className: "form-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 911
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
        lineNumber: 913
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
        lineNumber: 920
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
        lineNumber: 927
      },
      __self: this
    }, errors.consent_bursary)), __jsx("div", {
      className: "form-checkboxField",
      style: {
        marginBottom: '4rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 929
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
        lineNumber: 932
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
        lineNumber: 940
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
        lineNumber: 947
      },
      __self: this
    }, errors.consent_yfia)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 950
      },
      __self: this
    }, "Please tick the box(es) above for each purpose you consent to us contacting you about."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 953
      },
      __self: this
    }, "For more detailed information, please see our ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/privacyPolicy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 955
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 955
      },
      __self: this
    }, "privacy policy."))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      className: "form-label",
      style: {
        fontSize: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 956
      },
      __self: this
    }, "For further details contact Hayley Millar, Education Manager at ", __jsx("a", {
      href: "mailto:h.millar@fisita.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 958
      },
      __self: this
    }, "h.millar@fisita.com.")), __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: function onClick() {
        return validateForm().then(function (errors) {
          return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(errors).length === 0 && onSubmit();
        });
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
        lineNumber: 961
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
  consent_sponsors: '',
  consent_fiec: '',
  consent_wep: '',
  consent_bursary: '',
  consent_events: '',
  consent_yfia: '',
  __csrf_token: ''
};

/***/ }),

/***/ "./components/forms/FormActions.js":
false,

/***/ "./components/forms/FormSelects.js":
/*!*****************************************!*\
  !*** ./components/forms/FormSelects.js ***!
  \*****************************************/
/*! exports provided: Q1, Q2, Q3, Q4, Sessions, Marketing, titles, countries, themes, subThemes, subTheme1, subTheme2, subTheme3, subTheme4, subTheme5, subTheme6, submissionType, ifFull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q1", function() { return Q1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q2", function() { return Q2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q3", function() { return Q3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q4", function() { return Q4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sessions", function() { return Sessions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marketing", function() { return Marketing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titles", function() { return titles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subThemes", function() { return subThemes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subTheme1", function() { return subTheme1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subTheme2", function() { return subTheme2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subTheme3", function() { return subTheme3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subTheme4", function() { return subTheme4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subTheme5", function() { return subTheme5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subTheme6", function() { return subTheme6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionType", function() { return submissionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifFull", function() { return ifFull; });
var Q1 = [{
  value: "",
  label: "—"
}, {
  value: "A165CDBC-20D0-11EA-826D-F61235FD9979",
  label: "1 bar"
}, {
  value: "A16AAD6E-20D0-11EA-A384-B33F5C328649",
  label: "10 bar"
}, {
  value: "A16F63D6-20D0-11EA-8562-FD37E816F125",
  label: "100 bar"
}, {
  value: "A172A816-20D0-11EA-80FE-D8458B75FA68",
  label: "1000 bar"
}];
var Q2 = [{
  value: "",
  label: "—"
}, {
  value: "A176A588-20D0-11EA-B1C4-8343322A4354",
  label: "1 Friction Brake → 2 Generator Brake → 3 Eddy Current Brake"
}, {
  value: "A17B2ACC-20D0-11EA-A903-CE3765AA6FE0",
  label: "1 Generator Brake → 2 Friction Brake → 3 Eddy Current Brake"
}, {
  value: "A180ECE6-20D0-11EA-BA13-97766A999418",
  label: "1 Generator Brake → 2 Eddy Current Brake → 3 Friction Brake"
}, {
  value: "A1860366-20D0-11EA-BE22-EA8B4F279291",
  label: "1 Eddy Current Brake → 2 Generator Brake → 3 Friction Brake"
}];
var Q3 = [{
  value: "",
  label: "—"
}, {
  value: "A18AAF42-20D0-11EA-AA93-E948962C4B22",
  label: "due to presence of binders in the friction material, brake wear particles can not be smaller than 0.1mm"
}, {
  value: "A190544C-20D0-11EA-ADCD-A3842C77181C",
  label: "most of recent studies have shown that brake wear particles can not be inhaled"
}, {
  value: "A1939814-20D0-11EA-A356-B5B2593A37F3",
  label: "a great ratio of brake wear particles are of size smaller than 10µm and can be airborne"
}, {
  value: "A198076E-20D0-11EA-838B-F8CC47638AE5",
  label: "a great ratio of brake wear particles are of size smaller than 10µm and can be airborne"
}];
var Q4 = [{
  id: "Intelligent Braking and Braking Control",
  name: "question_4_answer",
  value: "A19B58F6-20D0-11EA-9309-935393B87AAD"
}, {
  id: "Environmentally-friendly Braking Systems",
  name: "question_4_answer",
  value: "A19E91B0-20D0-11EA-AB5D-AB5B61C559F4"
}, {
  id: "Fundamentals of Brakes",
  name: "question_4_answer",
  value: "A1A24D32-20D0-11EA-B1F0-A6A4B80BF983"
}, {
  id: "Manufacturing and Markets",
  name: "question_4_answer",
  value: "A1A7FEA8-20D0-11EA-AA7C-B2647AB84FAD"
}, {
  id: "Materials and Design",
  name: "question_4_answer",
  value: "C05F2F38-20D0-11EA-804F-FDD4E3525F0E"
}, {
  id: "Simulation, Testing, Innovative Development Processes",
  name: "question_4_answer",
  value: "C06226AC-20D0-11EA-B13B-CBC741D97AFF"
}];
var Sessions = [{
  id: "Entering the industry: demands, skills, requirements",
  name: "roundtable",
  value: "F7059506-F3D9-11E8-A30E-9AD9C8D4F5B4"
}, {
  id: "Industry vs. Academia: perspectives and opportunities",
  name: "roundtable",
  value: "159C9B5E-F3DA-11E8-AE3E-B6BAC8C8E3D3"
}, {
  id: "“What do you think/want in terms of transportation of the future?”",
  name: "roundtable",
  value: "1F8B71DA-F3DA-11E8-B265-F39A91630592"
}, {
  id: "Rail Brake Industry: challenges and approaches",
  name: "roundtable",
  value: "2AF19DBA-F3DA-11E8-B364-F69E03A1B279"
}, {
  id: "Other (please specify)",
  name: "roundtable",
  value: "3CA6AA5A-F3DA-11E8-B5C4-A947D1EF668C"
}];
var Marketing = [{
  value: "",
  label: "—"
}, {
  value: "E65CB08C-BACE-11E5-A83B-776E5EAB70CB",
  label: "Student/friend"
}, {
  value: "E6580A28-BACE-11E5-9185-766E5EAB70CB",
  label: "Your Future In Automotive newsletter"
}, {
  value: "E660DAA4-BACE-11E5-87E7-786E5EAB70CB",
  label: "Professor/lecturer at university"
}, {
  value: "E6658DCE-BACE-11E5-B56F-796E5EAB70CB",
  label: "The Engineer"
}, {
  value: "E66A6D26-BACE-11E5-BF16-7A6E5EAB70CB",
  label: "National engineering society (e.g. SAE, VDI, IMechE)"
}, {
  value: "E6744A44-BACE-11E5-BF92-7C6E5EAB70CB",
  label: "FISITA website"
}, {
  value: "E678E1E4-BACE-11E5-BD4E-7D6E5EAB70CB",
  label: "Facebook"
}, {
  value: "E67D8618-BACE-11E5-8005-7E6E5EAB70CB",
  label: "Twitter"
}, {
  value: "FCD1C142-F620-11E7-A0BD-F5BDAD3900A6",
  label: "LinkedIn"
}, {
  value: "E682897E-BACE-11E5-BFDD-7F6E5EAB70CB",
  label: "Other (please specify)"
}];
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

/***/ }),

/***/ "./components/forms/TaskControl.js":
false,

/***/ "./components/forms/TaskStyles.js":
false,

/***/ "./components/forms/TaskType/Permissions.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/date/now.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.date.now.js":
false,

/***/ "./node_modules/@material-ui/icons/AddCircleOutline.js":
false,

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
false,

/***/ "./node_modules/cookie/index.js":
false,

/***/ "./node_modules/isomorphic-unfetch/browser.js":
false,

/***/ "./node_modules/js-cookie/src/js.cookie.js":
false,

/***/ "./node_modules/next-cookies/index.js":
false,

/***/ "./node_modules/unfetch/dist/unfetch.mjs":
false,

/***/ "./node_modules/universal-cookie/es6/Cookies.js":
false,

/***/ "./node_modules/universal-cookie/es6/index.js":
false,

/***/ "./node_modules/universal-cookie/es6/utils.js":
false,

/***/ "./pages/tempEsop.js":
/*!***************************!*\
  !*** ./pages/tempEsop.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeroSection */ "./components/HeroSection.js");
/* harmony import */ var _components_forms_Esop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/forms/Esop */ "./components/forms/Esop.js");
/* harmony import */ var _components_Dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Dates */ "./components/Dates.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/tempEsop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "tempEsop__StyledPage",
  componentId: "c3q15l-0"
})(["display:flex;flex-direction:column;align-self:center;width:", ";background-color:", ";margin-top:3rem;a{color:", ";font-family:", ";font-size:2rem;}.Esop{color:", ";font-family:", ";font-size:2rem;&_top-box{display:flex;justify-content:space-between;}&-title{color:", ";font-family:", ";font-size:4.4rem;margin-top:3rem;margin-bottom:3rem;}&_sub-title{color:", ";font-size:3.5rem;font-family:", ";padding-bottom:.5rem;margin-top:3rem;margin-bottom:3rem;}&-bold{font-family:", ";}&-it{font-family:", ";}}"], function (props) {
  return props.theme.minWidth;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBold;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPSemibold;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.MPBold;
}, function (props) {
  return props.theme.MPLightIt;
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    max: "55%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Esop application"), __jsx(StyledPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "Esop-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Apply for EuroBrake Student Opportunities Programme"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    className: "Esop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "The EuroBrake Student Opportunities Programme 2020 is now open for applications."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    className: "Esop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "To apply for a sponsored student pass for this year's event submit your details via the form below."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    className: "Esop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Applications will be put before a panel of international industry and academic experts to be judged and a group of students will be selected to attend EuroBrake 2020 for free as part of the EuroBrake Student Opportunities Programme."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "Esop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "The deadline for applications is", __jsx("span", {
    className: "Esop-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, " Monday 3rd February.")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "Esop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "If you have any questions please contact ", __jsx("span", {
    className: "Esop-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:h.millar@fisita.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Hayley Millar")), ", Education Manager at FISITA."), __jsx(_components_Dates__WEBPACK_IMPORTED_MODULE_5__["FixedDates"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_components_forms_Esop__WEBPACK_IMPORTED_MODULE_4__["Esop"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })));
});

/***/ }),

/***/ "./utils/auth.js":
false

})
//# sourceMappingURL=tempEsop.js.d0a1bf91971f1919bd4e.hot-update.js.map