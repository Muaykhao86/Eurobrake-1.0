webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/TaskControl.js":
/*!*****************************************!*\
  !*** ./components/forms/TaskControl.js ***!
  \*****************************************/
/*! exports provided: PaperSchema, PPTSchema, PermissionSchema, PitchVideoSchema, AcceptPosterSchema, PosterSchema, countWords, BioSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperSchema", function() { return PaperSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PPTSchema", function() { return PPTSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionSchema", function() { return PermissionSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitchVideoSchema", function() { return PitchVideoSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptPosterSchema", function() { return AcceptPosterSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterSchema", function() { return PosterSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countWords", function() { return countWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioSchema", function() { return BioSchema; });
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
var countWords = function countWords() {
  var matches = value.match(/[\w\d\’\'-]+/gi);
  return matches ? matches.length : 0;
};
var BioSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  biography: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required').test('wordCount', 'Max 100 words', function (value) {
    return value && value.value.match(/[\w\d\’\'-]+/gi).length <= 100;
  } // split(' ').length <= 100 
  )
});

/***/ })

})
//# sourceMappingURL=studentArea.js.ebb33de46522537c8e69.hot-update.js.map