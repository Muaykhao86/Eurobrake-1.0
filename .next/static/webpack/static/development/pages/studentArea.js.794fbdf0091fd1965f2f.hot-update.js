webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/TaskType/PPT.js":
/*!******************************************!*\
  !*** ./components/forms/TaskType/PPT.js ***!
  \******************************************/
/*! exports provided: PPT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PPT", function() { return PPT; });
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
/* harmony import */ var _TaskControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../TaskControl */ "./components/forms/TaskControl.js");


var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/TaskType/PPT.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








 // async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

var PPT = function PPT(props) {
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
  console.log('tasks', presets, csrf, apiUrl, paperId, type);
  var url = "https://prelude.eurobrake.net/authors/tasks/paper/".concat(paperId);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: emptyInitial,
    validationSchema: _TaskControl__WEBPACK_IMPORTED_MODULE_10__["PPTSchema"],
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
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

    var onSubmit = function onSubmit() {
      values.__csrf_token = csrf;
      console.log('submitting', values);
    };

    console.log(errors);
    return __jsx(_TaskStyles__WEBPACK_IMPORTED_MODULE_9__["StyledTask"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "task-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, paperId), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "task-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Please upload your PowerPoint persentation using the form below"), __jsx("div", {
      className: "task-checkboxField",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
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
        lineNumber: 60
      },
      __self: this
    }, "I have read the ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/authorsAreaInstructions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("a", {
      className: "task-link_bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Instructions for Preparing your Powerpoint Presentation")), " and have followed the guidance notes available there."), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      className: "task-checkboxField-box",
      value: values.accept,
      style: {
        color: '#134381'
      },
      name: "accept",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["CheckboxWithLabel"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), errors.accept && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, errors.accept)), __jsx("div", {
      className: "task-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "File upload"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      className: "task-input",
      value: values.ppt_filename,
      style: {
        color: '#134381'
      },
      name: "ppt_filename",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["SimpleFileUpload"],
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), errors.ppt_filename && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-2rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, errors.ppt_filename)), __jsx("div", {
      className: "task-notes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "task-notes-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
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
        lineNumber: 100
      },
      __self: this
    })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      onClick: function onClick() {
        return console.log(values);
      },
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
        lineNumber: 110
      },
      __self: this
    }, "Send"));
  });
}; // onClick={() => validateForm().then(errors => Object.keys(errors).length === 0 && onSubmit())}

/***/ })

})
//# sourceMappingURL=studentArea.js.794fbdf0091fd1965f2f.hot-update.js.map