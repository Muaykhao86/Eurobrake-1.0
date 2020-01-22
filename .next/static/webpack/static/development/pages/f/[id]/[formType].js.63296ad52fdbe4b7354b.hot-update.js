webpackHotUpdate("static/development/pages/f/[id]/[formType].js",{

/***/ "./components/forms/ResetForm.js":
/*!***************************************!*\
  !*** ./components/forms/ResetForm.js ***!
  \***************************************/
/*! exports provided: ResetForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetForm", function() { return ResetForm; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormControl */ "./components/forms/FormControl.js");



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/ResetForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







 // async (values, actions) => {
//                 await SendForm({ values, url })
//             }

var ResetForm = function ResetForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      Toggle = _useState[0],
      setToggle = _useState[1];

  var url = "https://prelude.eurobrake.net/authors/reset/".concat(props.paperId);
  console.log({
    url: url
  });
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: emptyInitial,
    validationSchema: _FormControl__WEBPACK_IMPORTED_MODULE_10__["ResetSchema"],
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
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
                _context.next = 2;
                return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(values).forEach(function (key) {
                  setFieldTouched(key, true);
                });

              case 2:
                _context.next = 4;
                return validateForm().then(function (errors) {
                  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(errors).length === 0 && onSubmit();
                });

              case 4:
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
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var FT, res, status;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('click');
                FT = 'reset';
                _context2.next = 4;
                return Object(_FormActions__WEBPACK_IMPORTED_MODULE_8__["SendForm"])({
                  values: values,
                  url: url,
                  FT: FT
                });

              case 4:
                res = _context2.sent;
                _context2.next = 7;
                return res;

              case 7:
                _context2.t0 = _context2.sent;

                if (!_context2.t0) {
                  _context2.next = 10;
                  break;
                }

                _context2.t0 = res.status;

              case 10:
                status = _context2.t0;
                console.log({
                  status: status
                });
                status && status == 'success' && setToggle(function (Toggle) {
                  return !Toggle;
                });
                return _context2.abrupt("return", status);

              case 14:
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

    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_6__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, Toggle && __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "It onllllllllllllly works ", status), console.log({
      errors: errors
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Please provide your new password"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Password:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "password",
      className: "form-input",
      onClick: handleChange,
      value: values.new_password,
      style: {
        color: '#134381'
      },
      name: "new_password",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "confirm_password",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Confirm Password:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "password",
      className: "form-input",
      onClick: handleChange,
      value: values.confirm_password,
      style: {
        color: '#134381'
      },
      name: "confirm_password",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      onClick: function onClick() {
        return allTouched();
      },
      bcolor: "#134381",
      background: "#134381",
      br: "100rem",
      style: {
        margin: "3rem"
      },
      padding: ".5rem 4rem",
      fontSize: "1.7rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Reset"));
  });
};
var emptyInitial = {
  new_password: '',
  confirm_password: ''
};

/***/ })

})
//# sourceMappingURL=[formType].js.63296ad52fdbe4b7354b.hot-update.js.map