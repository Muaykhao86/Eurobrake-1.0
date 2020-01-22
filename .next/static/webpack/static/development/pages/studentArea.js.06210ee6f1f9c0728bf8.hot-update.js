webpackHotUpdate("static/development/pages/studentArea.js",{

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
/* harmony import */ var _components_forms_Abstract__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/forms/Abstract */ "./components/forms/Abstract.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/studentArea.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















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
  }, __jsx(_components_forms_TaskType_Paper__WEBPACK_IMPORTED_MODULE_8__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })));
});
{}
/* <Paper/> */
// export default () => {
//   const GetproDef = async () => {
//             const formData = await  GetForm(`https://prelude.eurobrake.net/authors/profile?definition=1`);
//             const res = await formData;
//            return  console.log({res});
//     }
//   const GetpassDef = async () => {
//             const formData = await  GetForm(`https://prelude.eurobrake.net/authors/reset?definition=1`);
//             const res = await formData;
//            return  console.log({res});
//     }
//   const GetresetDef = async () => {
//             const formData = await  GetForm(`https://prelude.eurobrake.net/authors/reset/XC8Z3FWxDuQtk68qVs3uwF?definition=1`);
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
//         <button onClick={() => GetproDef()}>profile</button>
//         <button onClick={() => GetpassDef()}>password</button>
//         <button onClick={() => GetresetDef()}>passreset</button>
//     </StyledPage>
// </>
// )}  

{
  /* presets: {}
  __csrf_token: "a1a18d88b90168cb0c3da91c40c6db779d5750f5,e20751081fe215e40f0ca53fdbd618ec1ea4989a,1578920366"
  status: "success"
  form: Array(5)
  0:
  required: "Please make sure you read the instructions and that your document complies with the Technical Paper Template, then confirm by checking the box below."
  options: Array(1)
  0:
  value: "yes"
  label: "I have read the instructions and my document complies with the Technical Paper Template"
  __proto__: Object
  length: 1
  __proto__: Array(0)
  name: "accept"
  type: "checkbox"
  __proto__: Object
  1:
  required: "Please upload your document in PDF format."
  accept_filetypes: ["pdf"]
  name: "technicalpaper_filename"
  label: "PDF upload:"
  type: "file"
  divider: 1
  allow_preset: 0
  __proto__: Object
  2:
  name: "author_notes"
  label: "Notes for reviewers:"
  type: "textarea"
  divider: 1
  __proto__: Object
  3:
  html: "<p>Please confirm that you agree to assign copyright, by checking the box below. <a href="#">Click here</a> to read the copyright guidelines.</p>"
  wide: 1
  type: "html"
  divider: 1
  __proto__: Object
  4:
  required: "Please confirm your agreement to assign copyright by checking the box below."
  options: [{…}]
  name: "copyright"
  type: "checkbox"
  __proto__: Object
  length: 5
  __proto__: Array(0)
  expects: "formdata"
  logintoken: "NjXwJEQG2nGrgZ894P7oh7" */
}
{
  /*presets: {}
  __csrf_token: "7b93eaa451b408e1cf83dbae998f29f1072de6f7,422d0986d94f6957c0b0ba6cb380ce638dd654aa,1578919293"
  status: "success"
  form: Array(3)
  0:
  required: "Please make sure you read the instructions and that your document complies, then confirm by checking the box below."
  options: Array(1)
  0: {value: "yes", label: "I have read the instructions and followed the guidance"}
  length: 1
  __proto__: Array(0)
  name: "accept"
  type: "checkbox"
  __proto__: Object
  1:
  required: "Please upload your presentation in PowerPoint format."
  accept_filetypes: Array(2)
  0: "ppt"
  1: "pptx"
  length: 2
  __proto__: Array(0)
  name: "ppt_filename"
  label: "PowerPoint upload:"
  type: "file"
  divider: 1
  allow_preset: 0
  __proto__: Object
  2:
  name: "author_notes"
  label: "Notes for reviewers:"
  type: "textarea"
  divider: 1
  __proto__: Object
  length: 3
  __proto__: Array(0)
  expects: "formdata"
  logintoken: "6rL0apksDdqXRS5KzKUHXN" */
}
{
  /* presets: {}
  __csrf_token: "4857efa581698029ebe300bc0db7fadf1830c9e6,9abd2676c8ddcca5e1006b05bc5aac9f0ca72953,1578919565"
  status: "success"
  form: Array(2)
  0:
  html: "<p>We would like to support you to promote your work to EuroBrake attendees by making your poster PDF available on a private area of the conference website via a password protected link sent round after the event.</p>"
  type: "html"
  __proto__: Object
  1:
  required: "Please indicate whether you grant permission to include your presentation in the conference downloads."
  options: Array(2)
  0: {value: "yes", label: "Yes, I grant permission for my presentation to be included"}
  1: {value: "no", label: "No, I do not grant permission"}
  length: 2
  __proto__: Array(0)
  name: "ok_to_publish_ppt"
  label: "Grant permission?"
  type: "radio"
  __proto__: Object
  length: 2
  __proto__: Array(0)
  expects: "json"
  logintoken: "6rL0apksDdqXRS5KzKUHXN"
  __proto__: Object */
}
{
  /* presets: {}
  __csrf_token: "f2857af069ab04253a9ae1f6599314c0d06f6bbc,3133ab2d1025f7de2177ae9a57f037e02b754187,1578920435"
  status: "success"
  form: Array(1)
  0:
  required: "Please indicate whether you accept the invitation to make a poster presentation."
  options: Array(2)
  0: {value: "yes", label: "Yes, I will make a poster presentation"}
  1: {value: "no", label: "No, please withdraw my paper from EuroBrake 2020"}
  length: 2
  __proto__: Array(0)
  name: "accept_poster_invitation"
  label: "Accept invitation?"
  type: "radio"
  __proto__: Object
  length: 1
  __proto__: Array(0)
  expects: "json"
  logintoken: "NjXwJEQG2nGrgZ894P7oh7" */
}
{
  /* <button onClick={() => GetDef('poster','EB2020-MDS-002')}>poster</button> */
}
{
  /* // ? NEED TO TESXT WIOTH A VALID PAPER */
}
{
  /* <button onClick={() => GetDef('pitchvideo','EB2020-MDS-002')}>pitchvideo</button> */
}
{
  /* // ? NEED TO TESXT WIOTH A VALID PAPER  */
}
{
  /* presets: {}
  __csrf_token: "efbea024ec39ce5aa6b54418fdd348d8a129e247,85f49fed2d31dee1a6ac1ecd663c3001f541c5f0,1578920492"
  status: "success"
  form: Array(1)
  0:
  required: "Please enter a short biography of the presenting author."
  notes: "Please enter a short biography of the presenting author (maximum 100 words). This will be used by the chair of your session to introduce you when you present your paper.   See <a href="#">Guidelines for writing your biography</a>."
  name: "biography"
  label: "Biography:"
  type: "textarea"
  __proto__: Object
  length: 1
  __proto__: Array(0)
  expects: "json"
  logintoken: "NjXwJEQG2nGrgZ894P7oh7"
  __proto__: Object */
}
{
  /* <button onClick={() => GetDefAbstract('EB2020-MDS-002')}>abstract</button>
  <button onClick={() => GetDefAuthor()}>author details</button> */
}

/***/ })

})
//# sourceMappingURL=studentArea.js.06210ee6f1f9c0728bf8.hot-update.js.map