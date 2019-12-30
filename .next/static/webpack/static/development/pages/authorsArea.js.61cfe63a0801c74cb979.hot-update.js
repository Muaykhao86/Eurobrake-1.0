webpackHotUpdate("static/development/pages/authorsArea.js",{

/***/ "./components/forms/LoginForm.js":
/*!***************************************!*\
  !*** ./components/forms/LoginForm.js ***!
  \***************************************/
/*! exports provided: LoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var url = 'https://prelude.eurobrake.net/login';
var LoginForm = function LoginForm() {
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: emptyInitial,
    onSubmit:
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, actions) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_FormActions__WEBPACK_IMPORTED_MODULE_8__["SendForm"])({
                  values: values,
                  url: url
                });

              case 2:
                setTimeout(function () {
                  alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(),
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, function (_ref2) {
    var values = _ref2.values,
        handleChange = _ref2.handleChange;
    console.log(values);
    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_6__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
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
    }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.login_email,
      style: {
        color: '#134381'
      },
      name: "login_email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })), __jsx("div", {
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
    }, "Password:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.login_password,
      style: {
        color: '#134381'
      },
      name: "login_password",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
        lineNumber: 61
      },
      __self: this
    }, "Login"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
      className: "login_form-link",
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Forgotten your password?"));
  });
};
var emptyInitial = {
  login_email: '',
  login_password: ''
};

/***/ })

})
//# sourceMappingURL=authorsArea.js.61cfe63a0801c74cb979.hot-update.js.map