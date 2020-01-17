webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/TaskType/Permissions.js":
/*!**************************************************!*\
  !*** ./components/forms/TaskType/Permissions.js ***!
  \**************************************************/
/*! exports provided: Permissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return Permissions; });
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



var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/TaskType/Permissions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









 // async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

var Permissions = function Permissions(props) {
  var emptyInitial = {
    ok_to_publish_ppt: ''
  };
  var presets = props.presets,
      csrf = props.csrf,
      apiUrl = props.apiUrl,
      paperId = props.paperId,
      type = props.type;
  console.log('tasks', presets, csrf, apiUrl, paperId, type);
  return (// ! NEED PRESETS FOR TASKS
    __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
      initialValues: emptyInitial,
      validationSchema: _TaskControl__WEBPACK_IMPORTED_MODULE_12__["PermissionSchema"],
      enableReinitialize: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
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
          lineNumber: 54
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "task-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, paperId), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "task-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Permissions"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        gutterBottom: true,
        className: "task-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "We would like to support you to promote your work to EuroBrake attendees by making your presentation available on a private area of the conference website via a password protected link sent round after the event."), __jsx("div", {
        className: "task-field-radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "label",
        className: "task-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Grant permission?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
        className: "task-radio",
        value: values.ok_to_publish_ppt,
        style: {
          color: '#134381'
        },
        name: "ok_to_publish_ppt",
        component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["RadioGroup"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
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
          lineNumber: 72
        },
        __self: this
      }, "Yes, I grant permission for my presentation to be included", __jsx("input", {
        onChange: handleChange,
        style: {
          margin: '1rem'
        },
        type: "radio",
        name: "ok_to_publish_ppt",
        value: "yes",
        id: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
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
          lineNumber: 86
        },
        __self: this
      }, "No, I do not grant permission", __jsx("input", {
        style: {
          margin: '1rem'
        },
        onChange: handleChange,
        type: "radio",
        name: "ok_to_publish_ppt",
        value: "no",
        id: "no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), errors.ok_to_publish_ppt && __jsx("label", {
        style: {
          position: 'absolute',
          bottom: '-1rem',
          right: '1rem',
          color: '#ff0000',
          fontSize: '1.5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, errors.ok_to_publish_ppt)), console.log(errors)), __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
          lineNumber: 104
        },
        __self: this
      }, "Send"));
    })
  );
};

/***/ })

})
//# sourceMappingURL=studentArea.js.4fcd176788ccaaef32d6.hot-update.js.map