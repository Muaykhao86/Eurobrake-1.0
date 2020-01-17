webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/TaskControl.js":
/*!*****************************************!*\
  !*** ./components/forms/TaskControl.js ***!
  \*****************************************/
/*! exports provided: PaperSchema, PPTSchema, PermissionSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperSchema", function() { return PaperSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PPTSchema", function() { return PPTSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionSchema", function() { return PermissionSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

var PaperSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  accept: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('accept', 'Field must be checked', function (value) {
    return value === true;
  }).required(),
  technicalpaper_filename: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().required('Required').test("fileFormat", "Unsupported Format", function (value) {
    return value && PDF_SUPPORTED_FORMATS.includes(value.type);
  }),
  author_notes: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  copyright: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('copyright', 'Field must be checked', function (value) {
    return value === true;
  }).required()
});
var PDF_SUPPORTED_FORMATS = ['application/pdf'];
var PPTSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  accept: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('accept', 'Field must be checked', function (value) {
    return value === true;
  }).required(),
  ppt_filename: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().required('Required').test("fileFormat", "Unsupported Format", function (value) {
    return value && PPT_SUPPORTED_FORMATS.includes(value.type);
  }),
  author_notes: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
});
var PPT_SUPPORTED_FORMATS = ['	application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];
var PermissionSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  accept: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required()
});

/***/ })

})
//# sourceMappingURL=studentArea.js.9d46b41be4756b4b3468.hot-update.js.map