webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/TaskControl.js":
/*!*****************************************!*\
  !*** ./components/forms/TaskControl.js ***!
  \*****************************************/
/*! exports provided: PaperSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperSchema", function() { return PaperSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

var PaperSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  accept: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('accept', 'Field must be checked', function (value) {
    return value === true;
  }).required(),
  technicalpaper_filename: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().test("fileFormat", "Unsupported Format", function (value) {
    return value && SUPPORTED_FORMATS.includes(value.type);
  }).required('Required'),
  author_notes: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  copyright: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().test('copyright', 'Field must be checked', function (value) {
    return value === true;
  }).required()
});
var SUPPORTED_FORMATS = ['application/pdf'];

/***/ })

})
//# sourceMappingURL=studentArea.js.85b63fc45244e3791ba9.hot-update.js.map