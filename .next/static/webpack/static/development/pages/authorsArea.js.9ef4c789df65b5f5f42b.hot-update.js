webpackHotUpdate("static/development/pages/authorsArea.js",{

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
            return __jsx(_Exhibitorprofile__WEBPACK_IMPORTED_MODULE_9__["Exhibitorprofile"], {
              editPaper: "true",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            });

          case 'exhibitor':
            return __jsx(_Exhibitorprofile__WEBPACK_IMPORTED_MODULE_9__["Exhibitorprofile"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            });

          case 'author-edit':
            return __jsx(_Authorprofile__WEBPACK_IMPORTED_MODULE_8__["Authorprofile"], {
              editPaper: "true",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            });

          case 'author':
            return __jsx(_Authorprofile__WEBPACK_IMPORTED_MODULE_8__["Authorprofile"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            });

          case 'esop-edit': // return <Esop editPaper="true" />;

          case 'esop': // return <Esop />;

          case 'login':
            return __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["LoginForm"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
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
//# sourceMappingURL=authorsArea.js.9ef4c789df65b5f5f42b.hot-update.js.map