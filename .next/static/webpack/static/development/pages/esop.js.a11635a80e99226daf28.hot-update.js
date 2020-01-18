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
      lineNumber: 15
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
        lineNumber: 27
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "About you"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
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
        lineNumber: 35
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
          lineNumber: 44
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
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
        lineNumber: 53
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
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
        lineNumber: 68
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
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
        lineNumber: 83
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
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
        lineNumber: 98
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
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
        lineNumber: 113
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
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
        lineNumber: 128
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
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
        lineNumber: 143
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
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
        lineNumber: 158
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
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
        lineNumber: 173
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
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
        lineNumber: 188
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
          lineNumber: 197
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
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
        lineNumber: 206
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
          lineNumber: 215
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
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
        lineNumber: 224
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
        lineNumber: 225
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
        lineNumber: 234
      },
      __self: this
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, "Your University or HE Institution"), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
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
        lineNumber: 252
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
        lineNumber: 259
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
        lineNumber: 264
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
        lineNumber: 273
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
        lineNumber: 278
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
        lineNumber: 287
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
        lineNumber: 292
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
        lineNumber: 302
      },
      __self: this
    }, errors.student_level_current)), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
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
        lineNumber: 310
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
        lineNumber: 317
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
        lineNumber: 322
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
        lineNumber: 331
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
        lineNumber: 336
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
        lineNumber: 345
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
        lineNumber: 350
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
        lineNumber: 360
      },
      __self: this
    }, errors.student_level_seeking)), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
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
        lineNumber: 368
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
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
        lineNumber: 383
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
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
        lineNumber: 398
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
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
        lineNumber: 413
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423
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
        lineNumber: 428
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
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
        lineNumber: 443
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453
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
        lineNumber: 458
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468
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
        lineNumber: 473
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483
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
        lineNumber: 488
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
          lineNumber: 497
        },
        __self: this
      }, option.label);
    }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500
      },
      __self: this
    }, "Your entry"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503
      },
      __self: this
    }, "Upload a PDF or Microsoft Word document of your CV/resum\xE9 here. Documents must not exceed 2 A4 pages and must be submitted in English."), __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505
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
        lineNumber: 510
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
        lineNumber: 518
      },
      __self: this
    }, errors.cv_filename_uploader)), __jsx("div", {
      className: "form-notes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-notes-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521
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
        lineNumber: 526
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539
      },
      __self: this
    }, "Upload a photo, PDF or Microsoft Word document of a letter or ID card indicating your status as student."), __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 541
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
        lineNumber: 546
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
        lineNumber: 554
      },
      __self: this
    }, errors.student_status_filename_uploader)), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557
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
        lineNumber: 563
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
          lineNumber: 572
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577
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
        lineNumber: 582
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
          lineNumber: 591
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 595
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596
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
        lineNumber: 601
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
          lineNumber: 610
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "question_4_answer",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614
      },
      __self: this
    }, "Question 4: Can you list three of the Conference Topics at EuroBrake 2020?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
      name: "question_4_answer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620
      },
      __self: this
    }, function (_ref2) {
      var swap = _ref2.swap,
          push = _ref2.push,
          remove = _ref2.remove,
          setSubmitting = _ref2.setSubmitting;
      return Q4.map(function (question) {
        return __jsx("div", {
          key: question.id,
          className: "task-checkboxField",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 625
          },
          __self: this
        }, __jsx("label", {
          htmlFor: question.name,
          className: "task-checkboxField-label",
          style: {
            color: '#134381',
            width: '80%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 628
          },
          __self: this
        }, question.id), __jsx("input", {
          checked: values.question_4_answer && values.question_4_answer.includes(question.value),
          onChange: function onChange(e) {
            e.target.checked ? push(question.value) : values.question_4_answer && remove(values.question_4_answer.value);
          },
          className: "task-checkboxField-box",
          style: {
            color: '#134381'
          },
          value: question.value,
          name: question.name,
          type: "checkbox",
          id: question.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 636
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
            lineNumber: 649
          },
          __self: this
        }, errors.accept));
      });
    })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654
      },
      __self: this
    }, " Additional Information"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 655
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "youtube_url",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 656
      },
      __self: this
    }, "If you have a short video outlining your motivation for applying for ESOP or your interest in the braking industry you can include a YouTube link here:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.university_address3,
      style: {
        color: '#134381'
      },
      name: "youtube_url",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 661
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "youtube_url",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 669
      },
      __self: this
    }, "This is optional and won\u2019t affect the judging process.")), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 676
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "roundtable",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 677
      },
      __self: this
    }, "\u2018Round Table\u2019 sessions will take place as part of the ESOP 2020 programme \u2013 providing a unique opportunity for all students to meet with and learn from industry and academia experts. Please leave details below if there are any topics you would like to see discussed in a Round Table session:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
      name: "roundtable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 682
      },
      __self: this
    }, function (_ref3) {
      var swap = _ref3.swap,
          push = _ref3.push,
          remove = _ref3.remove,
          setSubmitting = _ref3.setSubmitting;
      return sessions.map(function (session) {
        return __jsx("div", {
          key: session.id,
          className: "task-checkboxField",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 687
          },
          __self: this
        }, __jsx("label", {
          htmlFor: session.name,
          className: "task-checkboxField-label",
          style: {
            color: '#134381',
            width: '80%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 690
          },
          __self: this
        }, session.id), console.log(values), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
          checked: values.roundtable && values.roundtable.includes(session.value),
          onChange: function onChange(e) {
            e.target.checked ? push(session.value) : values.roundtable && remove(values.roundtable.value);
          },
          className: "task-checkboxField-box",
          style: {
            color: '#134381'
          },
          value: session.value,
          name: session.name,
          as: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Checkbox"],
          id: session.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 699
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
            lineNumber: 712
          },
          __self: this
        }, errors.roundtable));
      });
    }), values.roundtable && values.roundtable.includes('3CA6AA5A-F3DA-11E8-B5C4-A947D1EF668C') && __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.roundtable_other,
      style: {
        color: '#134381'
      },
      name: "roundtable_other",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 718
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 729
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "marketing",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 730
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735
      },
      __self: this
    }, Marketing.map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 744
        },
        __self: this
      }, option.label);
    })), values.marketing === 'E682897E-BACE-11E5-BFDD-7F6E5EAB70CB' && __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.marketing_other,
      style: {
        color: '#134381'
      },
      name: "marketing_other",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 747
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
        lineNumber: 756
      },
      __self: this
    }, errors.student_level_current)), __jsx("div", {
      className: "form-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 759
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 760
      },
      __self: this
    }, "Have you participated in any other FISITA student initiatives?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-radio",
      value: values.student_level_current,
      style: {
        color: '#134381'
      },
      name: "previous_participant",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 765
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
        lineNumber: 772
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
        lineNumber: 777
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
        lineNumber: 786
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
        lineNumber: 791
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
        lineNumber: 802
      },
      __self: this
    }, errors.student_level_current)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      gutterBottom: true,
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 804
      },
      __self: this
    }, "Additional Information"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      gutterBottom: true,
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 805
      },
      __self: this
    }, "Please note that by submitting a registration form for ESOP, you indicate your consent to us passing the personal information you have disclosed to us, including your CV, to the ESOP Sponsor Companies, so that they can contact you with details of career and/or work placement opportunities within their organisations, or to arrange a meeting with you at EuroBrake if you are selected to attend."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      gutterBottom: true,
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 806
      },
      __self: this
    }, "Here at FISITA we take your privacy seriously and will only use your personal information to set up and administer your account and/or membership and to provide the products and services you have requested from us."), __jsx("div", {
      className: "task-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 807
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "consent_sponsors",
      className: "task-checkboxField-label",
      style: {
        color: '#134381',
        width: '80%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 809
      },
      __self: this
    }, "If you do not consent to us passing on your details, please tick here"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "task-checkboxField-box",
      style: {
        color: '#134381'
      },
      value: values.consent_sponsors,
      name: "consent_sponsors",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Checkbox"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817
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
        lineNumber: 825
      },
      __self: this
    }, errors.consent_sponsors)), __jsx(_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
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
        lineNumber: 830
      },
      __self: this
    }, "Submit"));
  });
};
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
var sessions = [{
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
//# sourceMappingURL=esop.js.a11635a80e99226daf28.hot-update.js.map