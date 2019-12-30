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
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var url = 'https://prelude.eurobrake.net/login';
var LoginForm = function LoginForm() {
  return __jsx(Formik, {
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
                return Object(_FormActions__WEBPACK_IMPORTED_MODULE_7__["SendForm"])({
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
    validationSchema: AbstractSchema,
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, function (_ref2) {
    var values = _ref2.values,
        isSubmitting = _ref2.isSubmitting,
        isValidating = _ref2.isValidating,
        handleChange = _ref2.handleChange;
    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_4__["StyledForm"], {
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
    }, "Email:"), __jsx(Field, {
      className: "form-input",
      onClick: handleChange,
      value: values.login_email,
      style: {
        color: '#134381'
      },
      name: "login_email",
      component: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), __jsx("div", {
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
    }, "Password:"), __jsx(Field, {
      className: "form-input",
      onClick: handleChange,
      value: values.login_password,
      style: {
        color: '#134381'
      },
      name: "login_password",
      component: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
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
        lineNumber: 60
      },
      __self: this
    }, "Login"), __jsx("a", {
      className: "login_form-link",
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Forgotten your password?"));
  });
};
var emptyInitial = {
  login_email: '',
  login_password: ''
};

/***/ }),

/***/ "./components/forms/OneForm.js":
/*!*************************************!*\
  !*** ./components/forms/OneForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginForm */ "./components/forms/LoginForm.js");
/* harmony import */ var _Abstract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Abstract */ "./components/forms/Abstract.js");
/* harmony import */ var _Authorprofile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Authorprofile */ "./components/forms/Authorprofile.js");
/* harmony import */ var _Authorprofile__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Authorprofile__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Exhibitorprofile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Exhibitorprofile */ "./components/forms/Exhibitorprofile.js");
/* harmony import */ var _Esop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Esop */ "./components/forms/Esop.js");
/* harmony import */ var _Esop__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Esop__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/OneForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var OneForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OneForm, _Component);

  function OneForm(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OneForm);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OneForm).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OneForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          props = _this$props.props,
          form = _this$props.form;
      console.log('edit props', props);
      {
        switch (form) {
          case 'abstract-edit':
            return __jsx(_Abstract__WEBPACK_IMPORTED_MODULE_7__["AbstractForm"], {
              editPaper: "true",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              },
              __self: this
            });

          case 'abstract':
            return __jsx(_Abstract__WEBPACK_IMPORTED_MODULE_7__["AbstractForm"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            });

          case 'exhibitor-edit':
            return __jsx(_Abstract__WEBPACK_IMPORTED_MODULE_7__["AbstractForm"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            });
          // return <Exhibitorprofile editPaper="true" />;

          case 'exhibitor': // return <Exhibitorprofile />;

          case 'author-edit': // return <Authorprofile editPaper="true" />;

          case 'author': // return <Authorprofile />;

          case 'esop-edit': // return <Esop editPaper="true" />;

          case 'esop': // return <Esop />;

          case 'login':
            return __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["LoginForm"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            });

          default:
            return null;
        }
      }
    }
  }]);

  return OneForm;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]); // export default withAuthSync(Edit)


/* harmony default export */ __webpack_exports__["default"] = (OneForm); // !
// ?
// *
// todo

/***/ })

})
//# sourceMappingURL=authorsArea.js.a65a21a7ac9a860a0c84.hot-update.js.map