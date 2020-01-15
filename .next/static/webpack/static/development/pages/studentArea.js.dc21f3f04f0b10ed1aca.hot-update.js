webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/Formstyles.js":
/*!****************************************!*\
  !*** ./components/forms/Formstyles.js ***!
  \****************************************/
/*! exports provided: StyledForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");


var StyledForm = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"]).withConfig({
  displayName: "Formstyles__StyledForm",
  componentId: "sc-1mvqi50-0"
})(["display:flex;flex-flow:column;justify-content:space-between;align-items:center;min-width:100%;.MuiInput-underline:after{color:", ";}.MuiFormHelperText-root{font-size:1.5rem;}.MuiInputBase-root{font-family:", ";font-size:2rem;color:", ";}.form{&-secondary{display:flex;flex-flow:column;justify-content:space-between;align-items:center;min-width:100%;}&-field{margin:1rem 0;width:100%;display:flex;justify-content:space-between;align-items:flex-end;&_action{align-self:flex-end;display:flex;justify-content:flex-end;align-items:flex-end;}}&-label{min-width:33.3%;font-family:", ";font-size:2.6rem;color:", ";}&-input{min-width:66.6%;font-family:", ";font-size:2rem;color:", ";&&_file{width:100%;font-family:", ";font-size:2rem;color:", ";.MuiInput-underline:before{border-bottom:none;}}}&-link{cursor:pointer;font-family:", ";font-size:1.7rem;color:", ";}&-link_bold{cursor:pointer;font-family:", ";color:", ";}&-radio{text-align:end;}&-title{color:", ";font-family:", ";font-size:3rem;align-self:flex-start;margin:2rem 0;}}"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBoldIt;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBoldIt;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBoldIt;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBoldIt;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBold;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPSemibold;
});

/***/ }),

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
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");





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
            lineNumber: 46
          },
          __self: this
        }, function (_ref) {
          var values = _ref.values,
              handleChange = _ref.handleChange;
          console.log(values, 'Tasks');
          return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_12__["StyledForm"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "form-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, type), __jsx("div", {
            className: "form-field",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "label",
            className: "form-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, "I have read the ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/authorsAreaInstructions",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, __jsx("a", {
            className: "form-link_bold",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, "Instructions for Preparing your Powerpoint Presentation")), " and have followed the guidance notes available there."), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
            className: "form-input",
            value: values.accept,
            style: {
              color: '#134381'
            },
            name: "accept",
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_9__["CheckboxWithLabel"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          })), __jsx("div", {
            className: "form-field",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "label",
            className: "form-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }, "File upload"), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
            className: "form-input_file",
            value: values.ppt_filename,
            style: {
              color: '#134381'
            },
            name: "ppt_filename",
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_9__["SimpleFileUpload"],
            fullWidth: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          })), __jsx("div", {
            className: "form-field",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "label",
            className: "form-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, "Notes for reviewers:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
            className: "form-input",
            onClick: handleChange,
            value: values.author_notes,
            style: {
              color: '#134381'
            },
            name: "author_notes",
            component: "textarea",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
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
              lineNumber: 102
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
//# sourceMappingURL=studentArea.js.dc21f3f04f0b10ed1aca.hot-update.js.map