webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/TaskControl.js":
/*!*****************************************!*\
  !*** ./components/forms/TaskControl.js ***!
  \*****************************************/
/*! exports provided: PaperSchema, PPTSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperSchema", function() { return PaperSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PPTSchema", function() { return PPTSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

var PaperSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  accept: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('accept', 'Field must be checked', function (value) {
    return value === true;
  }).required(),
  technicalpaper_filename: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().required('Required').test("fileFormat", "Unsupported Format", function (value) {
    return value && PDF_SUPPORTED_FORMATS.includes(value.type);
  }),
  author_notes: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  copyright: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('copyright', 'Field must be checked', function (value) {
    return value === true;
  }).required()
});
var PDF_SUPPORTED_FORMATS = ['application/pdf'];
var PPTSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  accept: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('accept', 'Field must be checked', function (value) {
    return value === true;
  }).required(),
  technicalpaper_filename: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().required('Required').test("fileFormat", "Unsupported Format", function (value) {
    return value && PPT_SUPPORTED_FORMATS.includes(value.type);
  }),
  author_notes: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  copyright: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('copyright', 'Field must be checked', function (value) {
    return value === true;
  }).required()
});
var PPT_SUPPORTED_FORMATS = ['ppt', 'pptx'];

/***/ }),

/***/ "./components/forms/TaskType/PPT.js":
/*!******************************************!*\
  !*** ./components/forms/TaskType/PPT.js ***!
  \******************************************/
/*! exports provided: PPT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PPT", function() { return PPT; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FormActions */ "./components/forms/FormActions.js");
/* harmony import */ var _TaskStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../TaskStyles */ "./components/forms/TaskStyles.js");
/* harmony import */ var _TaskControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../TaskControl */ "./components/forms/TaskControl.js");





var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/TaskType/PPT.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








 // async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

var PPT =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PPT, _Component);

  function PPT(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PPT);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PPT).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PPT, [{
    key: "render",
    value: function render() {
      var emptyInitial = {
        accept: '',
        ppt_filename: '',
        author_notes: ''
      };
      var _this$props = this.props,
          presets = _this$props.presets,
          csrf = _this$props.csrf,
          apiUrl = _this$props.apiUrl,
          paperId = _this$props.paperId,
          type = _this$props.type;
      console.log('tasks', presets, csrf, apiUrl, paperId, type);
      return (// ! NEED PRESETS FOR TASKS
        __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
          initialValues: emptyInitial,
          validationSchema: _TaskControl__WEBPACK_IMPORTED_MODULE_13__["PPTSchema"],
          enableReinitialize: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, function (_ref) {
          var values = _ref.values,
              handleChange = _ref.handleChange;
          console.log(values, 'Tasks');
          return __jsx(_TaskStyles__WEBPACK_IMPORTED_MODULE_12__["StyledTask"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, paperId), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, "Please upload your PowerPoint persentation using the form below"), __jsx("div", {
            className: "task-checkboxField",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
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
              lineNumber: 51
            },
            __self: this
          }, "I have read the ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/authorsAreaInstructions",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, __jsx("a", {
            className: "task-link_bold",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "Instructions for Preparing your Powerpoint Presentation")), " and have followed the guidance notes available there."), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
            className: "task-checkboxField-box",
            value: values.accept,
            style: {
              color: '#134381'
            },
            name: "accept",
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_9__["CheckboxWithLabel"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          })), __jsx("div", {
            className: "task-field",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "label",
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, "File upload"), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
            className: "task-input",
            value: values.ppt_filename,
            style: {
              color: '#134381'
            },
            name: "ppt_filename",
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_9__["SimpleFileUpload"],
            fullWidth: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          })), __jsx("div", {
            className: "task-notes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "label",
            className: "task-notes-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          }, "Notes for reviewers:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
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
              lineNumber: 90
            },
            __self: this
          })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
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
              lineNumber: 100
            },
            __self: this
          }, "Send"));
        })
      );
    }
  }]);

  return PPT;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./components/forms/TaskType/Paper.js":
/*!********************************************!*\
  !*** ./components/forms/TaskType/Paper.js ***!
  \********************************************/
/*! exports provided: Paper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return Paper; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FormActions */ "./components/forms/FormActions.js");
/* harmony import */ var _TaskStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../TaskStyles */ "./components/forms/TaskStyles.js");
/* harmony import */ var _InstructionsPopup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../InstructionsPopup */ "./components/InstructionsPopup.js");
/* harmony import */ var _TaskControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../TaskControl */ "./components/forms/TaskControl.js");



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/TaskType/Paper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










var Paper = function Paper(props) {
  var emptyInitial = {
    accept: '',
    technicalpaper_filename: '',
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
    __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
      initialValues: emptyInitial,
      validationSchema: _TaskControl__WEBPACK_IMPORTED_MODULE_12__["PaperSchema"],
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

      var handleCheckBox =
      /*#__PURE__*/
      function () {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
          var accept, copyright;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
        console.log('submitting');
      };

      return __jsx(_TaskStyles__WEBPACK_IMPORTED_MODULE_10__["StyledTask"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "task-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, paperId), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "task-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Please upload your paper PDF using the form below."), __jsx("div", {
        className: "task-checkboxField",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "label",
        className: "task-checkboxField-label",
        style: {
          color: '#134381',
          width: '80%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "I have used the templates available in the ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/authorsAreaInstructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("a", {
        className: "task-link_bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Instructions and Templates")), " section of the Author\u2019s Area and I have also followed the guidance notes available there."), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
        className: "task-checkboxField-box",
        style: {
          color: '#134381'
        },
        value: values.accept,
        name: "accept",
        component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["Checkbox"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
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
          lineNumber: 73
        },
        __self: this
      }, errors.accept)), __jsx("div", {
        className: "task-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "label",
        className: "task-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "PDF upload"), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
        className: "task-input",
        value: values.technicalpaper_filename,
        style: {
          color: '#134381'
        },
        name: "technicalpaper_filename",
        component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["SimpleFileUpload"],
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), errors.technicalpaper_filename && __jsx("label", {
        style: {
          position: 'absolute',
          bottom: '-1rem',
          right: '1rem',
          color: '#ff0000',
          fontSize: '1.5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, errors.technicalpaper_filename)), __jsx("div", {
        className: "task-notes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "label",
        className: "task-notes-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Notes for reviewers:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
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
          lineNumber: 98
        },
        __self: this
      })), __jsx("div", {
        className: "task-field-copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        gutterBottom: true,
        className: "task-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Please confirm that you agree to assign copyright, by checking the box below."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        gutterBottom: true,
        className: "task-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx(_InstructionsPopup__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, " Click here "), "to read the copyright guidelines.")), __jsx("div", {
        className: "task-checkboxField",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
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
          lineNumber: 115
        },
        __self: this
      }, "I agree to assign copyright in this paper to FISITA (UK) Ltd."), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
        className: "task-checkboxField-box",
        value: values.copyright,
        style: {
          color: '#134381'
        },
        name: "copyright",
        component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["Checkbox"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), errors.copyright && __jsx("label", {
        style: {
          position: 'absolute',
          bottom: '-1rem',
          right: '1rem',
          color: '#ff0000',
          fontSize: '1.5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, errors.copyright)), __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: function onClick() {
          return validateForm().then(function (errors) {
            return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(errors).length === 0 && onSubmit();
          });
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
          lineNumber: 134
        },
        __self: this
      }, "Send"));
    })
  );
};

/***/ })

})
//# sourceMappingURL=studentArea.js.4ebd18d68a65d14602c9.hot-update.js.map