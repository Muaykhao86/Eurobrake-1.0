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





var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/TaskType/AcceptPoster.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







 // async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

var AcceptPoster =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AcceptPoster, _Component);

  function AcceptPoster(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AcceptPoster);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AcceptPoster).call(this, props));
    _this.state = {
      taskType: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AcceptPoster, [{
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
      return (// ! NEED PRESETS FOR TASKS
        __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
          initialValues: emptyInitial,
          enableReinitialize: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, function (_ref) {
          var values = _ref.values,
              handleChange = _ref.handleChange;
          console.log(values, 'Tasks');
          return __jsx(_TaskStyles__WEBPACK_IMPORTED_MODULE_12__["StyledTask"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, paperId), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, "Accept invitation to present a poster submission"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            gutterBottom: true,
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, "Your abstract has been accepted as a poster presentation at EuroBrake 2020."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            gutterBottom: true,
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, "Posters will form a key part of EuroBrake 2020 with the poster session taking place in the main exhibition hall."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            gutterBottom: true,
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, "Please use the options below to accept or decline this poster presentation offer."), __jsx("div", {
            className: "task-field-radio",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "label",
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, "Accept invitation?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
            className: "task-radio",
            value: values.accept_poster_invitation,
            style: {
              color: '#134381'
            },
            name: "ok_to_publish_pitchvideo",
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_9__["RadioGroup"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
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
              lineNumber: 63
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
              lineNumber: 68
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
              lineNumber: 77
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
              lineNumber: 82
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
              lineNumber: 94
            },
            __self: this
          }, "Send"));
        })
      );
    }
  }]);

  return AcceptPoster;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./components/forms/TaskType/Bio.js":
/*!******************************************!*\
  !*** ./components/forms/TaskType/Bio.js ***!
  \******************************************/
/*! exports provided: Bio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bio", function() { return Bio; });
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





var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/TaskType/Bio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







 // async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

var Bio =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Bio, _Component);

  function Bio(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Bio);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Bio).call(this, props));
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Bio, [{
    key: "render",
    value: function render() {
      var emptyInitial = {
        biography: ''
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
          return __jsx(_TaskStyles__WEBPACK_IMPORTED_MODULE_12__["StyledTask"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, paperId), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, "Biographical information"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            gutterBottom: true,
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, "Please provide biographical details for ", __jsx("span", {
            className: "task_bold",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, " the author who will be presenting your paper "), " at EuroBrake. The session chair will use the biography to introduce the presenter. Please ensure the biography is no more than 100 words. Guidelines and an example biography are provided for reference."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "task-title",
            style: {
              textDecoration: 'underline'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, __jsx("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "Guidelines for writing your biography")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, "Presenting Author"), __jsx("div", {
            className: "task-notes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "label",
            className: "task-notes-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }, "Biography"), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
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
              lineNumber: 66
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
              lineNumber: 77
            },
            __self: this
          }, "Send"));
        })
      );
    }
  }]);

  return Bio;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

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
/* harmony import */ var _TaskStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../TaskStyles */ "./components/forms/TaskStyles.js");





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
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Poster, [{
    key: "render",
    value: function render() {
      var emptyInitial = {
        accept: '',
        poster_filename: '',
        author_notes: '',
        ok_to_publish_poster: ''
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
            lineNumber: 40
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
          }, "Upload your Poster PDF"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            gutterBottom: true,
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, "Please upload your poster PDF using the form below."), __jsx("div", {
            className: "task-checkboxField",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
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
              lineNumber: 53
            },
            __self: this
          }, "I have read the ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/authorsAreaInstructions",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, __jsx("a", {
            className: "task-link_bold",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
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
              lineNumber: 61
            },
            __self: this
          })), __jsx("div", {
            className: "task-field",
            style: {
              marginBottom: '2rem'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "label",
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, "Pitch video slide upload"), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
            className: "task-input",
            value: values.poster_filename,
            style: {
              color: '#134381'
            },
            name: "poster_filename",
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_9__["SimpleFileUpload"],
            fullWidth: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          })), __jsx("div", {
            className: "task-notes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "label",
            className: "task-notes-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
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
              lineNumber: 93
            },
            __self: this
          })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            gutterBottom: true,
            className: "task-label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }, "We would like to support you to promote your work to EuroBrake attendees by making your pitch video slide available on a private area of the conference website via a password protected link sent round after the event."), __jsx("div", {
            className: "task-field-radio",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "label",
            className: "task-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }, "Grant permission?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
            className: "task-radio",
            value: values.ok_to_publish_poster,
            style: {
              color: '#134381'
            },
            name: "ok_to_publish_poster",
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_9__["RadioGroup"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
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
              lineNumber: 119
            },
            __self: this
          }, "Yes, I grant permission for my presentation to be included", __jsx("input", {
            onChange: handleChange,
            style: {
              margin: '1rem'
            },
            type: "radio",
            name: "ok_to_publish_poster",
            value: "yes",
            id: "yes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
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
              lineNumber: 133
            },
            __self: this
          }, "No, I do not grant permission", __jsx("input", {
            style: {
              margin: '1rem'
            },
            onChange: handleChange,
            type: "radio",
            name: "ok_to_publish_poster",
            value: "no",
            id: "no",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
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
              lineNumber: 150
            },
            __self: this
          }, "Send"));
        })
      );
    }
  }]);

  return Poster;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./pages/studentArea.js":
/*!******************************!*\
  !*** ./pages/studentArea.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeroSection */ "./components/HeroSection.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandMoreOutlined */ "./node_modules/@material-ui/icons/ExpandMoreOutlined.js");
/* harmony import */ var _material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles/PageStyles */ "./components/styles/PageStyles.js");
/* harmony import */ var _components_Dates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Dates */ "./components/Dates.js");
/* harmony import */ var _components_forms_FormActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/forms/FormActions */ "./components/forms/FormActions.js");
/* harmony import */ var _components_forms_TaskType_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/forms/TaskType/Paper */ "./components/forms/TaskType/Paper.js");
/* harmony import */ var _components_forms_TaskType_Poster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/forms/TaskType/Poster */ "./components/forms/TaskType/Poster.js");
/* harmony import */ var _components_forms_TaskType_AcceptPoster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/forms/TaskType/AcceptPoster */ "./components/forms/TaskType/AcceptPoster.js");
/* harmony import */ var _components_forms_TaskType_Bio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/forms/TaskType/Bio */ "./components/forms/TaskType/Bio.js");
/* harmony import */ var _components_forms_TaskType_PitchVideo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/forms/TaskType/PitchVideo */ "./components/forms/TaskType/PitchVideo.js");
/* harmony import */ var _components_forms_TaskType_PPT__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/forms/TaskType/PPT */ "./components/forms/TaskType/PPT.js");
/* harmony import */ var _components_forms_TaskType_Permissions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/forms/TaskType/Permissions */ "./components/forms/TaskType/Permissions.js");
/* harmony import */ var _components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/forms/LoginForm */ "./components/forms/LoginForm.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/studentArea.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















 // * NEED TO SORT OUT A PAGE TO TEST FORMSA AND LINKS FORM ONE PAGE WOITH PIUT BEIN ONLINE AL THE TIME

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Complete your task"), __jsx(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_5__["StyledPage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
});
{}
/* <Paper/> */
// export default () => {
//   const GetDef = async (type, paper) => {
//       console.log({type, paper})
//             const formData = await  GetForm(`https://prelude.eurobrake.net/authors/tasks/${type}/${paper}?definition=1`);
//             const res = await formData;
//            return  console.log({res});
//     }
//   const GetDefAbstract = async (paper) => {
//       console.log({paper})
//             const formData = await  GetForm(`https://prelude.eurobrake.net/authors/edit/${paper}?definition=1`);
//             const res = await formData;
//            return  console.log({res});
//     }
//   const GetDefAuthor = async () => {
//             const formData = await  GetForm(`https://prelude.eurobrake.net/authors/author?definition=1`);
//             const res = await formData;
//            return  console.log({res});
//     }
// return (
// <>
//     <HeroSection max="60%"  >
//     Testing of the forms     
//     </HeroSection>
//     <StyledPage >
// //         <Typography>Get some definitions</Typography>
// <Paper/>
//         <button onClick={() => GetDef('paper','EB2020-MDS-001')}>Tech paper</button>
// //        {/* presets: {}
// // __csrf_token: "a1a18d88b90168cb0c3da91c40c6db779d5750f5,e20751081fe215e40f0ca53fdbd618ec1ea4989a,1578920366"
// // status: "success"
// // form: Array(5)
// // 0:
// // required: "Please make sure you read the instructions and that your document complies with the Technical Paper Template, then confirm by checking the box below."
// // options: Array(1)
// // 0:
// // value: "yes"
// // label: "I have read the instructions and my document complies with the Technical Paper Template"
// // __proto__: Object
// // length: 1
// // __proto__: Array(0)
// // name: "accept"
// // type: "checkbox"
// // __proto__: Object
// // 1:
// // required: "Please upload your document in PDF format."
// // accept_filetypes: ["pdf"]
// // name: "technicalpaper_filename"
// // label: "PDF upload:"
// // type: "file"
// // divider: 1
// // allow_preset: 0
// // __proto__: Object
// // 2:
// // name: "author_notes"
// // label: "Notes for reviewers:"
// // type: "textarea"
// // divider: 1
// // __proto__: Object
// // 3:
// // html: "<p>Please confirm that you agree to assign copyright, by checking the box below. <a href="#">Click here</a> to read the copyright guidelines.</p>"
// // wide: 1
// // type: "html"
// // divider: 1
// // __proto__: Object
// // 4:
// // required: "Please confirm your agreement to assign copyright by checking the box below."
// // options: [{…}]
// // name: "copyright"
// // type: "checkbox"
// // __proto__: Object
// // length: 5
// // __proto__: Array(0)
// // expects: "formdata"
// // logintoken: "NjXwJEQG2nGrgZ894P7oh7" */}
//         <button onClick={() => GetDef('ppt','EB2020-MDS-002')}>PPT</button>
// //         {/*presets: {}
// // __csrf_token: "7b93eaa451b408e1cf83dbae998f29f1072de6f7,422d0986d94f6957c0b0ba6cb380ce638dd654aa,1578919293"
// // status: "success"
// // form: Array(3)
// // 0:
// // required: "Please make sure you read the instructions and that your document complies, then confirm by checking the box below."
// // options: Array(1)
// // 0: {value: "yes", label: "I have read the instructions and followed the guidance"}
// // length: 1
// // __proto__: Array(0)
// // name: "accept"
// // type: "checkbox"
// // __proto__: Object
// // 1:
// // required: "Please upload your presentation in PowerPoint format."
// // accept_filetypes: Array(2)
// // 0: "ppt"
// // 1: "pptx"
// // length: 2
// // __proto__: Array(0)
// // name: "ppt_filename"
// // label: "PowerPoint upload:"
// // type: "file"
// // divider: 1
// // allow_preset: 0
// // __proto__: Object
// // 2:
// // name: "author_notes"
// // label: "Notes for reviewers:"
// // type: "textarea"
// // divider: 1
// // __proto__: Object
// // length: 3
// // __proto__: Array(0)
// // expects: "formdata"
// // logintoken: "6rL0apksDdqXRS5KzKUHXN" */}
//         <button onClick={() => GetDef('permissions','EB2020-MDS-002')}>permissions</button>
// // {/* presets: {}
// // __csrf_token: "4857efa581698029ebe300bc0db7fadf1830c9e6,9abd2676c8ddcca5e1006b05bc5aac9f0ca72953,1578919565"
// // status: "success"
// // form: Array(2)
// // 0:
// // html: "<p>We would like to support you to promote your work to EuroBrake attendees by making your poster PDF available on a private area of the conference website via a password protected link sent round after the event.</p>"
// // type: "html"
// // __proto__: Object
// // 1:
// // required: "Please indicate whether you grant permission to include your presentation in the conference downloads."
// // options: Array(2)
// // 0: {value: "yes", label: "Yes, I grant permission for my presentation to be included"}
// // 1: {value: "no", label: "No, I do not grant permission"}
// // length: 2
// // __proto__: Array(0)
// // name: "ok_to_publish_ppt"
// // label: "Grant permission?"
// // type: "radio"
// // __proto__: Object
// // length: 2
// // __proto__: Array(0)
// // expects: "json"
// // logintoken: "6rL0apksDdqXRS5KzKUHXN"
// // __proto__: Object */}
//         <button onClick={() => GetDef('poster-accept','EB2020-MDS-003')}>poster-accept</button>
// // {/* presets: {}
// // __csrf_token: "f2857af069ab04253a9ae1f6599314c0d06f6bbc,3133ab2d1025f7de2177ae9a57f037e02b754187,1578920435"
// // status: "success"
// // form: Array(1)
// // 0:
// // required: "Please indicate whether you accept the invitation to make a poster presentation."
// // options: Array(2)
// // 0: {value: "yes", label: "Yes, I will make a poster presentation"}
// // 1: {value: "no", label: "No, please withdraw my paper from EuroBrake 2020"}
// // length: 2
// // __proto__: Array(0)
// // name: "accept_poster_invitation"
// // label: "Accept invitation?"
// // type: "radio"
// // __proto__: Object
// // length: 1
// // __proto__: Array(0)
// // expects: "json"
// // logintoken: "NjXwJEQG2nGrgZ894P7oh7" */}
//         <button onClick={() => GetDef('poster','EB2020-MDS-002')}>poster</button>
// // {/* // ? NEED TO TESXT WIOTH A VALID PAPER */}
// //         <button onClick={() => GetDef('pitchvideo','EB2020-MDS-002')}>pitchvideo</button>
// // {/* // ? NEED TO TESXT WIOTH A VALID PAPER  */}
//         <button onClick={() => GetDef('bio','EB2020-MDS-002')}>bio</button>
// // {/* presets: {}
// // __csrf_token: "efbea024ec39ce5aa6b54418fdd348d8a129e247,85f49fed2d31dee1a6ac1ecd663c3001f541c5f0,1578920492"
// // status: "success"
// // form: Array(1)
// // 0:
// // required: "Please enter a short biography of the presenting author."
// // notes: "Please enter a short biography of the presenting author (maximum 100 words). This will be used by the chair of your session to introduce you when you present your paper.   See <a href="#">Guidelines for writing your biography</a>."
// // name: "biography"
// // label: "Biography:"
// // type: "textarea"
// // __proto__: Object
// // length: 1
// // __proto__: Array(0)
// // expects: "json"
// // logintoken: "NjXwJEQG2nGrgZ894P7oh7"
// // __proto__: Object */}
//         <button onClick={() => GetDefAbstract('EB2020-MDS-002')}>abstract</button>
//         <button onClick={() => GetDefAuthor()}>author details</button>
//     </StyledPage>
// </>
// )}

/***/ })

})
//# sourceMappingURL=studentArea.js.aa9a71a71c1dff28bbc2.hot-update.js.map