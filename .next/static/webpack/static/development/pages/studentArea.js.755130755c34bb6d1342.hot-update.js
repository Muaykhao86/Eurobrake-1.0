webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/TaskType/PitchVideo.js":
/*!*************************************************!*\
  !*** ./components/forms/TaskType/PitchVideo.js ***!
  \*************************************************/
/*! exports provided: PitchVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitchVideo", function() { return PitchVideo; });
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



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/TaskType/PitchVideo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







 // async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

var PitchVideo = function PitchVideo(props) {
  var emptyInitial = {
    pitchvideo_filename: '',
    ok_to_publish_pitchvideo: ''
  };
  var presets = props.presets,
      csrf = props.csrf,
      apiUrl = props.apiUrl,
      paperId = props.paperId,
      type = props.type;
  console.log('tasks', presets, csrf, apiUrl, paperId, type);
  var url = "https://prelude.eurobrake.net/authors/tasks/pitchvideo/".concat(paperId);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    initialValues: emptyInitial,
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
    console.log(values, 'Tasks');

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
      console.log('submitting', values);
      Object(_FormActions__WEBPACK_IMPORTED_MODULE_9__["SendFile"])({
        values: values,
        url: url,
        csrf: csrf
      });
    };

    return __jsx(_TaskStyles__WEBPACK_IMPORTED_MODULE_10__["StyledTask"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "task-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, paperId), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "task-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Upload Pitch Video Slide"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      gutterBottom: true,
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Please upload your pitch video as a PowerPoint slide using the form below"), __jsx("div", {
      className: "task-field",
      style: {
        marginBottom: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Pitch video slide upload"), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
      className: "task-input",
      value: values.pitchvideo_filename,
      style: {
        color: '#134381'
      },
      name: "pitchvideo_filename",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["SimpleFileUpload"],
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), errors.pitchvideo_filename && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, errors.pitchvideo_filename)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      gutterBottom: true,
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "We would like to support you to promote your work to EuroBrake attendees by making your pitch video slide available on a private area of the conference website via a password protected link sent round after the event."), __jsx("div", {
      className: "task-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "task-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Grant permission?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
      className: "task-radio",
      value: values.ok_to_publish_pitchvideo,
      style: {
        color: '#134381'
      },
      name: "ok_to_publish_pitchvideo",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "task-label-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("input", {
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
        lineNumber: 94
      },
      __self: this
    }), "Yes, I grant permission for my presentation to be included"), __jsx("label", {
      style: {
        margin: '1rem'
      },
      htmlFor: "label",
      className: "task-label-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("input", {
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
        lineNumber: 108
      },
      __self: this
    }), "No, I do not grant permission")), errors.ok_to_publish_pitchvideo && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, errors.ok_to_publish_pitchvideo)), __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
        lineNumber: 123
      },
      __self: this
    }, "Send"));
  });
};

/***/ })

})
//# sourceMappingURL=studentArea.js.755130755c34bb6d1342.hot-update.js.map