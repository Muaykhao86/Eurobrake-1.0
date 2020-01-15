webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/Tasks.js":
/*!***********************************!*\
  !*** ./components/forms/Tasks.js ***!
  \***********************************/
/*! exports provided: Tasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tasks", function() { return Tasks; });
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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");
/* harmony import */ var _Taskstyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Taskstyles */ "./components/forms/Taskstyles.js");
/* harmony import */ var _InstructionsPopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../InstructionsPopup */ "./components/InstructionsPopup.js");





var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/Tasks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








 // async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

var Tasks =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Tasks, _Component);

  function Tasks(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tasks);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Tasks).call(this, props));
    _this.state = {
      taskType: ''
    }; // todo => depending on the task name I will render the task dynamicly 
    // * will have 
    //   paper
    //   ppt
    //   permissions
    //   poster-accept
    //   poster
    //   bio
    //   pitchvideo
    // * EACH WILL BE A COMPONENT

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tasks, [{
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
          enableReinitialize: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, function (_ref) {
          var values = _ref.values,
              handleChange = _ref.handleChange;
          console.log(values, 'Tasks');
          return __jsx(_Taskstyles__WEBPACK_IMPORTED_MODULE_12__["StyledTask"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, paperId), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, "Please upload your paper PDF using the form below."), __jsx("div", {
            className: "task-checkboxField",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
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
              lineNumber: 61
            },
            __self: this
          }, "I have used the templates available in the ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/authorsAreaInstructions",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }, __jsx("a", {
            className: "task-link_bold",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }, "Instructions and Templates")), " section of the Author\u2019s Area and I have also followed the guidance notes available there."), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
            className: "task-checkboxField-box",
            value: values.accept,
            style: {
              color: '#134381'
            },
            name: "accept",
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_9__["CheckboxWithLabel"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          })), __jsx("div", {
            className: "task-field",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "label",
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, "PDF upload"), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
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
              lineNumber: 85
            },
            __self: this
          })), __jsx("div", {
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
              lineNumber: 100
            },
            __self: this
          })), __jsx("div", {
            className: "task-field",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            gutterBottom: true,
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          }, "Please confirm that you agree to assign copyright, by checking the box below."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            gutterBottom: true,
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }, __jsx(_InstructionsPopup__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }, " Click here"), "to read the copyright guidelines.")), __jsx("div", {
            className: "task-checkboxField",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
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
              lineNumber: 116
            },
            __self: this
          }, "I agree to assign copyright in this paper to FISITA (UK) Ltd."), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
            className: "task-checkboxField-box",
            value: values.accept,
            style: {
              color: '#134381'
            },
            name: "accept",
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_9__["CheckboxWithLabel"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
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
              margin: "3rem"
            },
            padding: ".5rem 4rem",
            fontSize: "1.7rem",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, "Send"));
        })
      );
    }
  }]);

  return Tasks;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ })

})
//# sourceMappingURL=studentArea.js.3a922a97e463b207350e.hot-update.js.map