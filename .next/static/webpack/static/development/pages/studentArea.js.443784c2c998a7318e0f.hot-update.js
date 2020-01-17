webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/TaskType/Bio.js":
/*!******************************************!*\
  !*** ./components/forms/TaskType/Bio.js ***!
  \******************************************/
/*! exports provided: Bio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bio", function() { return Bio; });
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



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/TaskType/Bio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







 // async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

var Bio = function Bio() {
  var emptyInitial = {
    biography: ''
  };
  var _props = props,
      presets = _props.presets,
      csrf = _props.csrf,
      apiUrl = _props.apiUrl,
      paperId = _props.paperId,
      type = _props.type;
  console.log('tasks', presets, csrf, apiUrl, paperId, type);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    initialValues: emptyInitial,
    validationSchema: BioSchema,
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
    }, "Biographical information"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      gutterBottom: true,
      className: "task-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Please provide biographical details for ", __jsx("span", {
      className: "task_bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, " the author who will be presenting your paper "), " at EuroBrake. The session chair will use the biography to introduce the presenter. Please ensure the biography is no more than 100 words. Guidelines and an example biography are provided for reference."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "task-title",
      style: {
        textDecoration: 'underline'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Guidelines for writing your biography")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "task-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Presenting Author"), __jsx("div", {
      className: "task-notes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "task-notes-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Biography"), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
      className: "task-notes-input",
      onClick: handleChange,
      value: values.author_notes,
      style: {
        color: '#134381'
      },
      name: "biography",
      component: "textarea",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), errors.biography && __jsx("label", {
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
    }, errors.biography)), __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
        lineNumber: 74
      },
      __self: this
    }, "Send"));
  });
};

/***/ })

})
//# sourceMappingURL=studentArea.js.443784c2c998a7318e0f.hot-update.js.map