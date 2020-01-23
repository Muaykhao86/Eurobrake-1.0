webpackHotUpdate("static/development/pages/f/[id]/[formType].js",{

/***/ "./components/forms/Contact.js":
/*!*************************************!*\
  !*** ./components/forms/Contact.js ***!
  \*************************************/
/*! exports provided: ContactForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return ContactForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormControl */ "./components/forms/FormControl.js");




var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







 // async (values, actions) => {
//                 await SendForm({ values, url })
//             }

var ContactForm = function ContactForm(props) {
  var presets = props.presets,
      csrf = props.csrf,
      apiUrl = props.apiUrl,
      paperId = props.paperId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      Loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      Toggle = _useState2[0],
      setToggle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      Status = _useState3[0],
      setStatus = _useState3[1];

  var FT = 'contact';
  var url = 'https://prelude.eurobrake.net/contact';
  console.log({
    url: url
  });
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: emptyInitial,
    validationSchema: _FormControl__WEBPACK_IMPORTED_MODULE_11__["ContactSchema"],
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, function (_ref) {
    var _jsx;

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
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('touched!');
                console.log({
                  errors: errors
                });
                _context.next = 4;
                return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(values).forEach(function (key) {
                  setFieldTouched(key, true);
                });

              case 4:
                _context.next = 6;
                return validateForm().then(function (errors) {
                  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(errors).length === 0 && onSubmit();
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
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setLoading(true);
                values.__csrf_token = csrf;
                console.log('submitting');
                _context2.next = 5;
                return Object(_FormActions__WEBPACK_IMPORTED_MODULE_10__["SendForm"])({
                  values: values,
                  url: url,
                  csrf: csrf,
                  FT: FT
                });

              case 5:
                res = _context2.sent;
                _context2.next = 8;
                return res;

              case 8:
                _context2.t0 = _context2.sent;

                if (!_context2.t0) {
                  _context2.next = 11;
                  break;
                }

                _context2.t0 = res.status;

              case 11:
                data = _context2.t0;
                console.log({
                  status: status
                });
                data && setStatus(data) && setToggle(true) && setLoading(false);
                return _context2.abrupt("return");

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function onSubmit() {
        return _ref3.apply(this, arguments);
      };
    }();

    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_8__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "name",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      type: "text",
      className: "form-input",
      onClick: handleChange,
      value: values.name,
      style: {},
      name: "name",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "firstname",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "First name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      type: "text",
      className: "form-input",
      onClick: handleChange,
      value: values.fisrstname,
      style: {},
      name: "firstname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "lastname",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Last name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      type: "text",
      className: "form-input",
      onClick: handleChange,
      value: values.lastname,
      style: {},
      name: "lastname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "jobtitle",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "Job title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      type: "text",
      className: "form-input",
      onClick: handleChange,
      value: values.jobtitle,
      style: {},
      name: "jobtitle",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
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
      htmlFor: "company",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "Company:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      type: "text",
      className: "form-input",
      onClick: handleChange,
      value: values.company,
      style: {},
      name: "company",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    })), __jsx("div", {
      className: "form-notes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "address",
      className: "form-notes-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Address:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      type: "text",
      className: "form-notes-input",
      onClick: handleChange,
      value: values.address,
      style: {},
      name: "address",
      component: "textarea",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }), errors.address && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, errors.address)), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "email",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      type: "email",
      className: "form-input",
      onClick: handleChange,
      value: values.name,
      style: {},
      name: "email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    })), __jsx("div", {
      className: "form-notes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "enquiry",
      className: "form-notes-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "Your message:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      type: "text",
      className: "form-notes-input",
      onClick: handleChange,
      value: values.enquiry,
      style: {},
      name: "enquiry",
      component: "textarea",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
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
        lineNumber: 184
      },
      __self: this
    }, errors.enquiry)), Loading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
      size: 24,
      className: "loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }) : __jsx(_Button__WEBPACK_IMPORTED_MODULE_9__["Button"], (_jsx = {
      bcolor: "#134381",
      background: "#134381",
      br: "100rem",
      style: {
        margin: ".5rem 0"
      },
      fontSize: "2rem",
      onClick: allTouched
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "style", {
      fontSize: "1rem",
      height: '2rem',
      alignSelf: 'center'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 187
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), Status ? Status : 'submit'));
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

/***/ })

})
//# sourceMappingURL=[formType].js.e696c406e9008681704b.hot-update.js.map