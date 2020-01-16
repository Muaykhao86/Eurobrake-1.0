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
  accept: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().oneOf([true], 'Required').required('Required'),
  technicalpaper_filename: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_notes: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().max(1, 'too many words').required('Required'),
  copyright: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().oneOf([true], 'Field must be checked')
});

/***/ })

})
//# sourceMappingURL=studentArea.js.99fd7648d72b537d6889.hot-update.js.map