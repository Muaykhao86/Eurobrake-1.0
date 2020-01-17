webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/TaskControl.js":
/*!*****************************************!*\
  !*** ./components/forms/TaskControl.js ***!
  \*****************************************/
/*! exports provided: PaperSchema, PPTSchema, PermissionSchema, PitchVideoSchema, AcceptPosterSchema, PosterSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperSchema", function() { return PaperSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PPTSchema", function() { return PPTSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionSchema", function() { return PermissionSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitchVideoSchema", function() { return PitchVideoSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptPosterSchema", function() { return AcceptPosterSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterSchema", function() { return PosterSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

var PaperSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  accept: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('accept', 'Field must be checked', function (value) {
    return value === true;
  }).required('Required'),
  technicalpaper_filename: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().required('Required').test("fileFormat", "Unsupported Format", function (value) {
    return value && PDF_SUPPORTED_FORMATS.includes(value.type);
  }),
  author_notes: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  copyright: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('copyright', 'Field must be checked', function (value) {
    return value === true;
  }).required('Required')
});
var PDF_SUPPORTED_FORMATS = ['application/pdf'];
var PPTSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  accept: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('accept', 'Field must be checked', function (value) {
    return value === true;
  }).required('Required'),
  ppt_filename: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().required('Required').test("fileFormat", "Unsupported Format", function (value) {
    return value && PPT_SUPPORTED_FORMATS.includes(value.type);
  }),
  author_notes: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
});
var PPT_SUPPORTED_FORMATS = ['	application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];
var PermissionSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  ok_to_publish_ppt: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')
});
var PitchVideoSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  pitchvideo_filename: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().required('Required').test("fileFormat", "Unsupported Format", function (value) {
    return value && PPT_SUPPORTED_FORMATS.includes(value.type);
  }),
  ok_to_publish_pitchvideo: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')
});
var AcceptPosterSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  accept_poster_invitation: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')
});
var PosterSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  accept: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('accept', 'Field must be checked', function (value) {
    return value === true;
  }).required('Required'),
  poster_filename: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().required('Required').test("fileFormat", "Unsupported Format", function (value) {
    return value && PPT_SUPPORTED_FORMATS.includes(value.type);
  }),
  author_notes: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  ok_to_publish_poster: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')
});

/***/ }),

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
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    initialValues: emptyInitial,
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
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
    };

    return __jsx(_TaskStyles__WEBPACK_IMPORTED_MODULE_10__["StyledTask"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "task-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, paperId), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "task-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Upload Pitch Video Slide"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      gutterBottom: true,
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Please upload your pitch video as a PowerPoint slide using the form below"), __jsx("div", {
      className: "task-field",
      style: {
        marginBottom: '2rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
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
        lineNumber: 60
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
        lineNumber: 68
      },
      __self: this
    }, errors.pitchvideo_filename)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      gutterBottom: true,
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "We would like to support you to promote your work to EuroBrake attendees by making your pitch video slide available on a private area of the conference website via a password protected link sent round after the event."), __jsx("div", {
      className: "task-field-radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "task-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
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
        lineNumber: 81
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
        lineNumber: 88
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
        lineNumber: 93
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
        lineNumber: 102
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
        lineNumber: 107
      },
      __self: this
    }))), errors.ok_to_publish_pitchvideo && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
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
        lineNumber: 121
      },
      __self: this
    }, "Send"));
  });
};

/***/ })

})
//# sourceMappingURL=studentArea.js.15ae343aa6243bdcc79d.hot-update.js.map