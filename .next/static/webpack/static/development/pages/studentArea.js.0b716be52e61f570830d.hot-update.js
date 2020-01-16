webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/TaskType/Paper.js":
/*!********************************************!*\
  !*** ./components/forms/TaskType/Paper.js ***!
  \********************************************/
/*! exports provided: Paper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return Paper; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormActions */ "./components/forms/FormActions.js");
/* harmony import */ var _TaskStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TaskStyles */ "./components/forms/TaskStyles.js");
/* harmony import */ var _InstructionsPopup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../InstructionsPopup */ "./components/InstructionsPopup.js");
/* harmony import */ var _TaskControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../TaskControl */ "./components/forms/TaskControl.js");


var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/TaskType/Paper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var Paper = function Paper(props) {
  var emptyInitial = {
    accept: '',
    ppt_filename: '',
    author_notes: ''
  };
  var presets = props.presets,
      csrf = props.csrf,
      apiUrl = props.apiUrl,
      paperId = props.paperId,
      type = props.type;
  var url = "https://prelude.eurobrake.net/authors/tasks/paper/".concat(paperId);
  console.log('tasks', presets, csrf, apiUrl, paperId, type, url);
  return (// ! NEED PRESETS FOR TASKS
    __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
      initialValues: emptyInitial,
      validationSchema: _TaskControl__WEBPACK_IMPORTED_MODULE_11__["PaperSchema"],
      enableReinitialize: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, function (_ref) {
      var values = _ref.values,
          handleChange = _ref.handleChange,
          setFieldValue = _ref.setFieldValue,
          isValidating = _ref.isValidating,
          validateForm = _ref.validateForm,
          handleSubmit = _ref.handleSubmit,
          errors = _ref.errors;
      console.log(values, isValidating, errors, 'Tasks');

      var handleCheckBox =
      /*#__PURE__*/
      function () {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var accept, copyright;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  accept = values.accept;
                  copyright = values.copyright;
                  accept === true && setFieldValue('accept', 'yes');
                  accept === false && setFieldValue('accept', '');
                  copyright === true && setFieldValue('copyright', 'yes');
                  copyright === false && setFieldValue('copyright', '');
                  return _context.abrupt("return");

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function handleCheckBox() {
          return _ref2.apply(this, arguments);
        };
      }();

      var onSubmit =
      /*#__PURE__*/
      function () {
        var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  values.__csrf_token = csrf;
                  _context2.next = 3;
                  return validateForm();

                case 3:
                  _context2.next = 5;
                  return console.log('sending', values, url);

                case 5:
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

      {
        /* await SendForm({values, csrf, url}) */
      }
      return __jsx(_TaskStyles__WEBPACK_IMPORTED_MODULE_9__["StyledTask"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "task-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, paperId), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "task-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Please upload your paper PDF using the form below."), __jsx("div", {
        className: "task-checkboxField",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "label",
        className: "task-checkboxField-label",
        style: {
          color: '#134381'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "I have used the templates available in the ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/authorsAreaInstructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("a", {
        className: "task-link_bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Instructions and Templates")), " section of the Author\u2019s Area and I have also followed the guidance notes available there."), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
        as: "checkbox",
        className: "task-checkboxField-box",
        style: {
          color: '#134381'
        },
        value: values.accept,
        name: "accept",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), __jsx("div", {
        className: "task-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "label",
        className: "task-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "PDF upload"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
        className: "task-input",
        value: values.technicalpaper_filename,
        style: {
          color: '#134381'
        },
        name: "technicalpaper_filename",
        component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["SimpleFileUpload"],
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })), __jsx("div", {
        className: "task-notes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "label",
        className: "task-notes-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Notes for reviewers:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
        className: "task-notes-input",
        onClick: handleChange,
        value: values.author_notes,
        style: {
          color: '#134381'
        },
        name: "author_notes",
        component: "textarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), __jsx("div", {
        className: "task-field-copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gutterBottom: true,
        className: "task-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Please confirm that you agree to assign copyright, by checking the box below."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gutterBottom: true,
        className: "task-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx(_InstructionsPopup__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, " Click here "), "to read the copyright guidelines.")), __jsx("div", {
        className: "task-checkboxField",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "label",
        className: "task-checkboxField-label",
        style: {
          color: '#134381'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "I agree to assign copyright in this paper to FISITA (UK) Ltd."), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
        className: "task-checkboxField-box",
        value: values.copyright,
        style: {
          color: '#134381'
        },
        name: "copyright",
        component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["Checkbox"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: handleSubmit,
        bcolor: "#134381",
        background: "#134381",
        br: "100rem",
        style: {
          margin: "3rem",
          color: '#FFF'
        },
        padding: ".5rem 4rem",
        fontSize: "1.7rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Send"));
    })
  );
};

/***/ })

})
//# sourceMappingURL=studentArea.js.0b716be52e61f570830d.hot-update.js.map