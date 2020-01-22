webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/LoginForm.js":
/*!***************************************!*\
  !*** ./components/forms/LoginForm.js ***!
  \***************************************/
/*! exports provided: LoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








 // async (values, actions) => {
//                 await SendForm({ values, url })
//             }

var LoginForm = function LoginForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      Toggle = _useState[0],
      setToggle = _useState[1];

  var url = Toggle ? 'https://prelude.eurobrake.net/authors/reset' : 'https://prelude.eurobrake.net/authors/login';
  console.log({
    url: url
  });
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: emptyInitial,
    validationSchema: _FormControl__WEBPACK_IMPORTED_MODULE_10__["LoginSchema"],
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, function (_ref) {
    var values = _ref.values,
        handleChange = _ref.handleChange,
        validateForm = _ref.validateForm;

    var onSubmit =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_FormActions__WEBPACK_IMPORTED_MODULE_8__["SendForm"])({
                  url: url,
                  values: values
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function onSubmit() {
        return _ref2.apply(this, arguments);
      };
    }();

    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_6__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, Toggle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Please enter your email to reset your password"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "email",
      className: "form-input",
      onClick: handleChange,
      value: values.username,
      style: {
        color: '#134381'
      },
      name: "username",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), !Toggle && __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Password:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "password",
      className: "form-input",
      onClick: handleChange,
      value: values.password,
      style: {
        color: '#134381'
      },
      name: "password",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      onClick: function onClick() {
        return validateForm().then(function (errors) {
          return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(errors).length === 0 && onSubmit();
        });
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
        lineNumber: 70
      },
      __self: this
    }, Toggle ? 'Reset' : 'Login'), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      href: "/f/[id]/[formType]",
      as: "/f/XC8Z3FWxDuQtk68qVs3uwF/reset",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("a", {
      onClick: function onClick() {
        return setToggle(function (Toggle) {
          return !Toggle;
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
      className: "form-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, " Forgotten your password?"))));
  });
}; // ? For now im by passin the email link just to check what i have with a reset token

var emptyInitial = {
  username: '',
  password: ''
};

/***/ })

})
//# sourceMappingURL=studentArea.js.4dc7bf1eb29109024a75.hot-update.js.map