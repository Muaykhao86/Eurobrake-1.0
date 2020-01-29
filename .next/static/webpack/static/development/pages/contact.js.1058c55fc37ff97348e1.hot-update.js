webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/forms/Contact.js":
/*!*************************************!*\
  !*** ./components/forms/Contact.js ***!
  \*************************************/
/*! exports provided: ContactForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return ContactForm; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormControl */ "./components/forms/FormControl.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var ContactForm = function ContactForm(props) {
  var presets = props.presets,
      csrf = props.csrf,
      apiUrl = props.apiUrl,
      paperId = props.paperId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      Loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      Toggle = _useState2[0],
      setToggle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      Status = _useState3[0],
      setStatus = _useState3[1];

  var FT = 'contact';
  var url = 'https://prelude.eurobrake.net/contact';
  console.log({
    url: url
  });
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: emptyInitial,
    validationSchema: _FormControl__WEBPACK_IMPORTED_MODULE_10__["ContactSchema"],
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, function (_ref) {
    var values = _ref.values,
        handleChange = _ref.handleChange,
        validateForm = _ref.validateForm,
        errors = _ref.errors,
        setFieldTouched = _ref.setFieldTouched,
        handleSubmit = _ref.handleSubmit,
        submitForm = _ref.submitForm;

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
                console.log('touched!');
                console.log({
                  errors: errors
                });
                _context.next = 4;
                return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(values).forEach(function (key) {
                  setFieldTouched(key, true);
                });

              case 4:
                _context.next = 6;
                return validateForm().then(function (errors) {
                  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(errors).length === 0 && onSubmit();
                });

              case 6:
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
        var FT, res, data, dataStatus, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return setLoading(true);

              case 2:
                _context3.next = 4;
                return console.log('submitting');

              case 4:
                FT = 'contact';
                _context3.next = 7;
                return Object(_FormActions__WEBPACK_IMPORTED_MODULE_9__["SendForm"])({
                  values: values,
                  url: url,
                  FT: FT
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

    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_7__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
      gutterBottom: true,
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Contact us"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "name",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "text",
      className: "form-input",
      onClick: handleChange,
      value: values.name,
      style: {},
      name: "name",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
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
      htmlFor: "firstname",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "First name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "text",
      className: "form-input",
      onClick: handleChange,
      value: values.fisrstname,
      style: {},
      name: "firstname",
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
        lineNumber: 94
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "lastname",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Last name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "text",
      className: "form-input",
      onClick: handleChange,
      value: values.lastname,
      style: {},
      name: "lastname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
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
      htmlFor: "jobtitle",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "Job title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "text",
      className: "form-input",
      onClick: handleChange,
      value: values.jobtitle,
      style: {},
      name: "jobtitle",
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
        lineNumber: 126
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "company",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "Company:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "text",
      className: "form-input",
      onClick: handleChange,
      value: values.company,
      style: {},
      name: "company",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    })), __jsx("div", {
      className: "form-notes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "address",
      className: "form-notes-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "Address:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "text",
      className: "form-notes-input",
      onClick: handleChange,
      value: values.address,
      style: {},
      name: "address",
      component: "textarea",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "email",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "email",
      className: "form-input",
      onClick: handleChange,
      value: values.name,
      style: {},
      name: "email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    })), __jsx("div", {
      className: "form-notes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "enquiry",
      className: "form-notes-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, "Your message:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "text",
      className: "form-notes-input",
      onClick: handleChange,
      value: values.enquiry,
      style: {},
      name: "enquiry",
      component: "textarea",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), errors.enquiry && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, errors.enquiry)), Loading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: 24,
      className: "loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }) : __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      bcolor: "#134381",
      background: "#134381",
      br: "100rem",
      fontSize: "2rem",
      onClick: allTouched,
      style: {
        alignSelf: 'center',
        color: '#FFF'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "submit"), Toggle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
      className: "form-title",
      style: {
        alignSelf: 'center',
        textTransform: 'uppercase'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, Status));
  });
}; // ? For now im by passin the email link just to check what i have with a reset token

var emptyInitial = {
  name: '',
  firstneme: '',
  lastname: '',
  jobtitle: '',
  company: '',
  address: '',
  email: '',
  enquiry: ''
};

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_forms_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/forms/Contact */ "./components/forms/Contact.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HeroSection */ "./components/HeroSection.js");
/* harmony import */ var _components_forms_Esop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/forms/Esop */ "./components/forms/Esop.js");
/* harmony import */ var _components_Dates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Dates */ "./components/Dates.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "contact__StyledPage",
  componentId: "jt1p0l-0"
})(["display:flex;flex-direction:column;align-self:center;width:", ";@media only screen  and (max-device-width:768px)  and (-webkit-min-device-pixel-ratio:2){width:", ";}background-color:", ";margin-top:3rem;a{color:", ";font-family:", ";font-size:2rem;}"], function (props) {
  return props.theme.minWidth;
}, function (props) {
  return props.theme.mobileWidth;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBold;
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    t: "35rem",
    max: "55%",
    tt: "35%",
    sfs: "8rem",
    tsfs: "5rem",
    tst: "60%",
    mst: "65%",
    secondary: "Get in touch to find out more or ask a question",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Contact Us"), __jsx(StyledPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_components_Dates__WEBPACK_IMPORTED_MODULE_6__["FixedDates"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_components_Dates__WEBPACK_IMPORTED_MODULE_6__["FixedBox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(_components_forms_Contact__WEBPACK_IMPORTED_MODULE_3__["ContactForm"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=contact.js.1058c55fc37ff97348e1.hot-update.js.map