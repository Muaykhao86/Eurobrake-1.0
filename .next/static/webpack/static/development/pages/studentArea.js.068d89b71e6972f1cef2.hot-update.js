webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/TaskType/Poster.js":
/*!*********************************************!*\
  !*** ./components/forms/TaskType/Poster.js ***!
  \*********************************************/
/*! exports provided: Poster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poster", function() { return Poster; });
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
/* harmony import */ var _Taskstyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Taskstyles */ "./components/forms/Taskstyles.js");





var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/TaskType/Poster.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







 // async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

var Poster =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Poster, _Component);

  function Poster(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Poster);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Poster).call(this, props));
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Poster, [{
    key: "render",
    value: function render() {
      var emptyInitial = {
        accept: ''
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
            lineNumber: 47
          },
          __self: this
        }, function (_ref) {
          var values = _ref.values,
              handleChange = _ref.handleChange;
          console.log(values, 'Tasks');
          return __jsx(_Taskstyles__WEBPACK_IMPORTED_MODULE_12__["StyledTask"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, paperId), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, "Upload your Poster PDF"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            gutterBottom: true,
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "Please upload your poster PDF using the form below."), __jsx("div", {
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
          }, "I have read the ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
              lineNumber: 68
            },
            __self: this
          })), __jsx("div", {
            className: "task-field",
            style: {
              marginBottom: '2rem'
            },
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
          }, "Pitch video slide upload"), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
            className: "task-input",
            value: values.poster_filename,
            style: {
              color: '#134381'
            },
            name: "pitchvideo_filename",
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_9__["SimpleFileUpload"],
            fullWidth: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
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
          })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            gutterBottom: true,
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          }, "We would like to support you to promote your work to EuroBrake attendees by making your pitch video slide available on a private area of the conference website via a password protected link sent round after the event."), __jsx("div", {
            className: "task-field-radio",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "label",
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, "Grant permission?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
            className: "task-radio",
            value: values.ok_to_publish_pitchvideo,
            style: {
              color: '#134381'
            },
            name: "ok_to_publish_pitchvideo",
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_9__["RadioGroup"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          }, __jsx("label", {
            style: {
              margin: '1rem'
            },
            htmlFor: "label",
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, "Yes, I grant permission for my presentation to be included", __jsx("input", {
            onChange: handleChange,
            style: {
              margin: '1rem'
            },
            type: "radio",
            name: "ok_to_publish_pitchvideo",
            value: "yes",
            id: "yes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          })), __jsx("label", {
            style: {
              margin: '1rem'
            },
            htmlFor: "label",
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            },
            __self: this
          }, "No, I do not grant permission", __jsx("input", {
            style: {
              margin: '1rem'
            },
            onChange: handleChange,
            type: "radio",
            name: "ok_to_publish_pitchvideo",
            value: "no",
            id: "no",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          })))), __jsx(_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
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
              lineNumber: 157
            },
            __self: this
          }, "Send"));
        })
      );
    }
  }]);

  return Poster;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ })

})
//# sourceMappingURL=studentArea.js.068d89b71e6972f1cef2.hot-update.js.map