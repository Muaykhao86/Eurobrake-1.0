webpackHotUpdate("static/development/pages/authorsArea.js",{

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







var Esop = function Esop(_ref) {
  var _ref$editPaper = _ref.editPaper,
      editPaper = _ref$editPaper === void 0 ? false : _ref$editPaper;
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: editPaper ? presets : emptyInitial,
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
  }, function (_ref2) {
    var values = _ref2.values,
        handleChange = _ref2.handleChange;
    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_7__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
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
      value: values.esop_title,
      style: {
        color: '#134381'
      },
      name: "esop_title",
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
      value: values.esop_firstname,
      style: {
        color: '#134381'
      },
      name: "esop_firstname",
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
      value: values.esop_lastname,
      style: {
        color: '#134381'
      },
      name: "esop_lastname",
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
      value: values.esop_email,
      style: {
        color: '#134381'
      },
      name: "esop_email",
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
    }, "Job Title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_jobtitle,
      style: {
        color: '#134381'
      },
      name: "esop_jobtitle",
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
    }, "Company:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_company,
      style: {
        color: '#134381'
      },
      name: "esop_company",
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
    }, "Address:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_address1,
      style: {
        color: '#134381'
      },
      name: "esop_address1",
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
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_address2,
      style: {
        color: '#134381'
      },
      name: "esop_address2",
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
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_address3,
      style: {
        color: '#134381'
      },
      name: "esop_address3",
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
    }, "City:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_city,
      style: {
        color: '#134381'
      },
      name: "esop_city",
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
    }, "State/county/province:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_scp,
      style: {
        color: '#134381'
      },
      name: "esop_scp",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, "Postal/Zip code:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_postal,
      style: {
        color: '#134381'
      },
      name: "esop_postal",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, "Country"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_country,
      style: {
        color: '#134381'
      },
      name: "esop_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
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
          lineNumber: 225
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, "Phone:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_phone,
      style: {
        color: '#134381'
      },
      name: "esop_phone",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    })), __jsx("div", {
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
    }, "Fax:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_fax,
      style: {
        color: '#134381'
      },
      name: "esop_fax",
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
    }, "Choose a Password:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_phone,
      style: {
        color: '#134381'
      },
      name: "esop_password",
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
    }, "Confirm password:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.esop_phone,
      style: {
        color: '#134381'
      },
      name: "esop_password_confirm",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: "submit",
      bcolor: "#134381",
      padding: "0.5rem 2rem",
      background: "#134381",
      br: "100rem",
      style: {
        margin: ".5rem 0"
      },
      fontSize: "1.7rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, "Submit"), console.log('main', values.is_presenting_esop, 'second', values.secondary_esops));
  });
};
var presets = {
  esop_title: "Mr.",
  esop_firstname: "Andrew",
  esop_lastname: "Green",
  esop_email: "andrew@article7.co.uk",
  esop_jobtitle: "Director",
  esop_company: "Article Seven Limited",
  esop_address1: "10 Hamilton Road",
  esop_address2: null,
  esop_address3: null,
  esop_city: "Sidcup",
  esop_scp: "Kent",
  esop_country: "GB",
  esop_postal: "DA15 7HB",
  esop_phone: "+44 20 8305 1224",
  esop_fax: '',
  esop_password: '',
  esop_password_confirmed: '',
  __csrf_token: "5d159fb224ed613dce89a64553f36f5eda1fa97c,2caaa318bb55c8c19d660a1e420d1c602dfc59f9,1576603105"
};
var emptyInitial = {
  esop_title: '',
  esop_firstname: '',
  esop_lastname: '',
  esop_email: '',
  esop_jobtitle: '',
  esop_company: '',
  esop_address1: '',
  esop_address2: '',
  esop_address3: '',
  esop_city: '',
  esop_scp: '',
  esop_postal: '',
  esop_country: '',
  esop_phone: '',
  esop_fax: '',
  esop_password: '',
  esop_password_confirmed: '',
  __csrf_token: ''
};

/***/ })

})
//# sourceMappingURL=authorsArea.js.3cc327ca7666fd498028.hot-update.js.map