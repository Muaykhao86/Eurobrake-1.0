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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/LoginForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var LoginForm = function LoginForm() {
  var url = 'https://prelude.eurobrake.net/login';
  return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_1__["StyledForm"], {
    className: "login_form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "login_form-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "label",
    className: "login_form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Email:"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      color: '#134381'
    },
    label: "Required",
    className: "login_form-input",
    type: "text",
    name: "username",
    onChange: _this.saveToState,
    value: _this.state.username,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("div", {
    className: "login_form-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("label", {
    className: "login_form-label",
    htmlFor: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Password:"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Required",
    className: "login_form-input",
    type: "password",
    name: "password",
    onChange: _this.saveToState,
    value: _this.state.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: function onClick() {
      return Object(_FormActions__WEBPACK_IMPORTED_MODULE_6__["SendForm"])({
        url: url
      });
    },
    value: "Submit",
    bcolor: "#134381",
    background: "#134381",
    br: "100rem",
    style: {
      margin: "3rem 0"
    },
    fs: "1.8rem",
    padding: ".5rem 6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Login"), __jsx("a", {
    className: "login_form-link",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Forgotten your password?"));
};

/***/ })

})
//# sourceMappingURL=authorsArea.js.b58c89aa6e78ea9ca8bc.hot-update.js.map