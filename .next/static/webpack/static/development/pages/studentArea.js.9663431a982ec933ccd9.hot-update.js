webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/TaskType/AcceptPoster.js":
/*!***************************************************!*\
  !*** ./components/forms/TaskType/AcceptPoster.js ***!
  \***************************************************/
/*! exports provided: AcceptPoster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptPoster", function() { return AcceptPoster; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Button */ "./components/Button.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../FormActions */ "./components/forms/FormActions.js");
/* harmony import */ var _TaskStyles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../TaskStyles */ "./components/forms/TaskStyles.js");








var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/TaskType/AcceptPoster.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







 // async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

var AcceptPoster =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AcceptPoster, _Component);

  function AcceptPoster(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AcceptPoster);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(AcceptPoster).call(this, props));
    _this.state = {
      taskType: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AcceptPoster, [{
    key: "render",
    value: function render() {
      var emptyInitial = {
        accept_poster_invitation: ''
      };
      var _this$props = this.props,
          presets = _this$props.presets,
          csrf = _this$props.csrf,
          apiUrl = _this$props.apiUrl,
          paperId = _this$props.paperId,
          type = _this$props.type;
      console.log('tasks', presets, csrf, apiUrl, paperId, type);
      return __jsx(formik__WEBPACK_IMPORTED_MODULE_11__["Formik"], {
        initialValues: emptyInitial,
        enableReinitialize: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
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

        return __jsx(_TaskStyles__WEBPACK_IMPORTED_MODULE_15__["StyledTask"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "task-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, paperId), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "task-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "Accept invitation to present a poster submission"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
          gutterBottom: true,
          className: "task-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "Your abstract has been accepted as a poster presentation at EuroBrake 2020."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
          gutterBottom: true,
          className: "task-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "Posters will form a key part of EuroBrake 2020 with the poster session taking place in the main exhibition hall."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
          gutterBottom: true,
          className: "task-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "Please use the options below to accept or decline this poster presentation offer."), __jsx("div", {
          className: "task-field-radio",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "task-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "Accept invitation?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
          className: "task-radio",
          value: values.accept_poster_invitation,
          style: {
            color: '#134381'
          },
          name: "ok_to_publish_pitchvideo",
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_12__["RadioGroup"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
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
            lineNumber: 74
          },
          __self: this
        }, "Yes, I will make a poster presentation", __jsx("input", {
          onChange: handleChange,
          style: {
            margin: '1rem'
          },
          type: "radio",
          name: "accept_poster_invitation",
          value: "yes",
          id: "yes",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
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
            lineNumber: 88
          },
          __self: this
        }, "No, please withdraw my paper from EuroBrake 2020", __jsx("input", {
          style: {
            margin: '1rem'
          },
          onChange: handleChange,
          type: "radio",
          name: "accept_poster_invitation",
          value: "no",
          id: "no",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }))), errors.ok_to_publish_ppt && __jsx("label", {
          style: {
            position: 'absolute',
            bottom: '-1rem',
            right: '1rem',
            color: '#ff0000',
            fontSize: '1.5rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, errors.ok_to_publish_ppt)), __jsx(_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], {
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
            lineNumber: 105
          },
          __self: this
        }, "Send"));
      });
    }
  }]);

  return AcceptPoster;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/***/ })

})
//# sourceMappingURL=studentArea.js.9663431a982ec933ccd9.hot-update.js.map