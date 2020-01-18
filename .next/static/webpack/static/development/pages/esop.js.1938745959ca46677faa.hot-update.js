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
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormSelects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormSelects */ "./components/forms/FormSelects.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormControl */ "./components/forms/FormControl.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");

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
      lineNumber: 13
    },
    __self: this
  }, function (_ref) {
    var values = _ref.values,
        handleChange = _ref.handleChange;
    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_7__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(Typography, {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "About you"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_5__["titles"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Address:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_address1,
      style: {
        color: '#134381'
      },
      name: "student_address1",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_address2,
      style: {
        color: '#134381'
      },
      name: "student_address2",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_address3,
      style: {
        color: '#134381'
      },
      name: "student_address3",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "City:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_city,
      style: {
        color: '#134381'
      },
      name: "student_city",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "State/ County/ Province:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_scp,
      style: {
        color: '#134381'
      },
      name: "student_scp",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Postal/ Zip code:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_postal,
      style: {
        color: '#134381'
      },
      name: "student_postal",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "Country"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_country,
      style: {
        color: '#134381'
      },
      name: "student_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_5__["countries"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, "Your FISITA member society"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_country,
      style: {
        color: '#134381'
      },
      name: "student_membersociety",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
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
          lineNumber: 213
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
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
        lineNumber: 222
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }))), __jsx(Typography, {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, "Your University or HE Institution"), __jsx("div", {
      className: "task-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "task-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, "What level of education have you achieved?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "task-radio",
      value: values.student_level_current,
      style: {
        color: '#134381'
      },
      name: "student_level_current",
      component: RadioGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
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
        lineNumber: 262
      },
      __self: this
    })), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
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
        lineNumber: 276
      },
      __self: this
    })), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
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
        lineNumber: 290
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
        lineNumber: 300
      },
      __self: this
    }, errors.student_level_current)), __jsx("div", {
      className: "task-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "task-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, "What degree are you currently studying towards?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "task-radio",
      value: values.student_level_seeking,
      style: {
        color: '#134381'
      },
      name: "student_level_seeking",
      component: RadioGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    }, __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: this
    }, "None", __jsx("input", {
      onChange: handleChange,
      style: {
        margin: '1rem'
      },
      type: "radio",
      name: "student_level_seeking",
      value: "none",
      id: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    })), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
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
        lineNumber: 334
      },
      __self: this
    })), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
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
        lineNumber: 348
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
        lineNumber: 358
      },
      __self: this
    }, errors.student_level_current)), __jsx(_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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
        lineNumber: 362
      },
      __self: this
    }, "Submit"));
  });
};
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
//# sourceMappingURL=esop.js.1938745959ca46677faa.hot-update.js.map