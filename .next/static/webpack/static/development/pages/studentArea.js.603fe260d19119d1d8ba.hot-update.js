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
  accept: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  // yup.boolean().oneOf([true], 'Required').required('Required'),
  technicalpaper_filename: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_notes: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(1, 'too few!').max(3, 'too many words').required('Required'),
  copyright: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"]().oneOf([true], 'Field must be checked')
});

/***/ })

})
//# sourceMappingURL=studentArea.js.603fe260d19119d1d8ba.hot-update.js.map