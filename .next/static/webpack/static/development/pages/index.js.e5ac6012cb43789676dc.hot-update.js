webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/forms/Newsletter.js":
/*!****************************************!*\
  !*** ./components/forms/Newsletter.js ***!
  \****************************************/
/*! exports provided: Newsletter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Newsletter", function() { return Newsletter; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormControl */ "./components/forms/FormControl.js");


var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/Newsletter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Newsletter = function Newsletter() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      Loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      Toggle = _useState2[0],
      setToggle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      Status = _useState3[0],
      setStatus = _useState3[1];

  var FT = "newsletter";
  var url = 'https://prelude.eurobrake.net/signup';
  console.log({
    url: url
  });
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: emptyInitial,
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
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);
                console.log('submitting');
                _context.next = 4;
                return Object(_FormActions__WEBPACK_IMPORTED_MODULE_8__["SendForm"])({
                  values: values,
                  url: url,
                  csrf: csrf,
                  FT: FT
                });

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res;

              case 7:
                _context.t0 = _context.sent;

                if (!_context.t0) {
                  _context.next = 10;
                  break;
                }

                _context.t0 = res.status;

              case 10:
                data = _context.t0;
                console.log({
                  status: status
                });
                data && setStatus(data) && setToggle(true) && setLoading(false);
                return _context.abrupt("return");

              case 14:
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
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "name",
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      type: "text",
      className: "form-input",
      onClick: handleChange,
      value: values.name,
      style: {},
      name: "name",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "email",
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      type: "email",
      className: "form-input",
      onClick: handleChange,
      value: values.name,
      style: {},
      name: "email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), Loading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: 24,
      className: "loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }) : __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      onClick: onSubmit,
      padding: ".5rem ",
      style: {
        fontSize: "1rem",
        height: '2rem',
        alignSelf: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, Status ? Status : 'submit')));
  });
}; // ? For now im by passin the email link just to check what i have with a reset token

var emptyInitial = {
  name: '',
  email: ''
};

/***/ })

})
//# sourceMappingURL=index.js.e5ac6012cb43789676dc.hot-update.js.map