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
    }, __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
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
        lineNumber: 32
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
          lineNumber: 41
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
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
        lineNumber: 50
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
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
        lineNumber: 65
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
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
        lineNumber: 80
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
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
        lineNumber: 95
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
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
        lineNumber: 110
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
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
        lineNumber: 125
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
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
        lineNumber: 140
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
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
        lineNumber: 155
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
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
        lineNumber: 170
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
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
        lineNumber: 185
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
          lineNumber: 194
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
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
        lineNumber: 203
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
          lineNumber: 212
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
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
        lineNumber: 221
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      placeholder: "City",
      className: "form-input",
      onClick: handleChange,
      value: values.student_jobtitle,
      style: {
        color: '#134381'
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
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, "Job Title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_jobtitle,
      style: {
        color: '#134381'
      },
      name: "student_jobtitle",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, "Company:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_company,
      style: {
        color: '#134381'
      },
      name: "student_company",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
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
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, "State/county/province:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_scp,
      style: {
        color: '#134381'
      },
      name: "student_scp",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, "Postal/Zip code:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_postal,
      style: {
        color: '#134381'
      },
      name: "student_postal",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    })), __jsx("div", {
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
    }, "Country"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_country,
      style: {
        color: '#134381'
      },
      name: "student_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
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
          lineNumber: 378
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }, "Phone:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_phone,
      style: {
        color: '#134381'
      },
      name: "student_phone",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    }, "Fax:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_fax,
      style: {
        color: '#134381'
      },
      name: "student_fax",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }, "Choose a Password:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_phone,
      style: {
        color: '#134381'
      },
      name: "student_password",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427
      },
      __self: this
    }, "Confirm password:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.student_phone,
      style: {
        color: '#134381'
      },
      name: "student_password_confirm",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432
      },
      __self: this
    })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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
        lineNumber: 443
      },
      __self: this
    }, "Submit"), console.log('main', values.is_presenting_student, 'second', values.secondary_students));
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
//# sourceMappingURL=esop.js.d1a6b8f49132775743b4.hot-update.js.map