webpackHotUpdate("static/development/pages/authorsArea.js",{

/***/ "./components/forms/Authorprofile.js":
/*!*******************************************!*\
  !*** ./components/forms/Authorprofile.js ***!
  \*******************************************/
/*! exports provided: Authorprofile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authorprofile", function() { return Authorprofile; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _FormSelects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormSelects */ "./components/forms/FormSelects.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormControl */ "./components/forms/FormControl.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");

var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/Authorprofile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Authorprofile = function Authorprofile(_ref) {
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
      lineNumber: 14
    },
    __self: this
  }, function (_ref2) {
    var values = _ref2.values,
        handleChange = _ref2.handleChange;
    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_8__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("div", {
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
      value: values.author_title,
      style: {
        color: '#134381'
      },
      name: "author_title",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["Select"],
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
      value: values.author_firstname,
      style: {
        color: '#134381'
      },
      name: "author_firstname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
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
      value: values.author_lastname,
      style: {
        color: '#134381'
      },
      name: "author_lastname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
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
      value: values.author_email,
      style: {
        color: '#134381'
      },
      name: "author_email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
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
    }, "Job Title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_jobtitle,
      style: {
        color: '#134381'
      },
      name: "author_jobtitle",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
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
    }, "Company:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_company,
      style: {
        color: '#134381'
      },
      name: "author_company",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
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
    }, "Address:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_address1,
      style: {
        color: '#134381'
      },
      name: "author_address1",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
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
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_address2,
      style: {
        color: '#134381'
      },
      name: "author_address2",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
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
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_address3,
      style: {
        color: '#134381'
      },
      name: "author_address3",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
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
    }, "City:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_city,
      style: {
        color: '#134381'
      },
      name: "author_city",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
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
    }, "State/county/province:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_scp,
      style: {
        color: '#134381'
      },
      name: "author_scp",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
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
    }, "Postal/Zip code:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_postal,
      style: {
        color: '#134381'
      },
      name: "author_postal",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
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
    }, "Country"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_country,
      style: {
        color: '#134381'
      },
      name: "author_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
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
    }, "Phone:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_phone,
      style: {
        color: '#134381'
      },
      name: "author_phone",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, "Fax:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_fax,
      style: {
        color: '#134381'
      },
      name: "author_fax",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, "Choose a Password:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_phone,
      style: {
        color: '#134381'
      },
      name: "author_password",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, "Confirm password:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_phone,
      style: {
        color: '#134381'
      },
      name: "author_password_confirm",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
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
        lineNumber: 291
      },
      __self: this
    }, "Submit"), console.log('main', values.is_presenting_author, 'second', values.secondary_authors));
  });
};
var presets = {
  author_title: "Mr.",
  author_firstname: "Andrew",
  author_lastname: "Green",
  author_email: "andrew@article7.co.uk",
  author_jobtitle: "Director",
  author_company: "Article Seven Limited",
  author_address1: "10 Hamilton Road",
  author_address2: null,
  author_address3: null,
  author_city: "Sidcup",
  author_scp: "Kent",
  author_country: "GB",
  author_postal: "DA15 7HB",
  author_phone: "+44 20 8305 1224",
  author_fax: '',
  author_password: '',
  author_password_confirmed: '',
  __csrf_token: "5d159fb224ed613dce89a64553f36f5eda1fa97c,2caaa318bb55c8c19d660a1e420d1c602dfc59f9,1576603105"
};
var emptyInitial = {
  author_title: '',
  author_firstname: '',
  author_lastname: '',
  author_email: '',
  author_jobtitle: '',
  author_company: '',
  author_address1: '',
  author_address2: '',
  author_address3: '',
  author_city: '',
  author_scp: '',
  author_postal: '',
  author_country: '',
  author_phone: '',
  author_fax: '',
  author_password: '',
  author_password_confirmed: '',
  __csrf_token: ''
};

/***/ })

})
//# sourceMappingURL=authorsArea.js.dea1e1dafa85cc92e2e9.hot-update.js.map