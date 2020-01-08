webpackHotUpdate("static/development/pages/authorsArea.js",{

/***/ "./components/forms/FormControl.js":
/*!*****************************************!*\
  !*** ./components/forms/FormControl.js ***!
  \*****************************************/
/*! exports provided: AbstractSchema, EsopSchema, ProfileSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSchema", function() { return AbstractSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsopSchema", function() { return EsopSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSchema", function() { return ProfileSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

var AbstractSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  author_firstname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  author_lastname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  author_email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email().required('Required'),
  author_jobtitle: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_company: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_address1: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_address2: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  author_address3: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  author_city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_scp: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_postal: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  is_presenting_author: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  submission_type: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  presentationtype_full: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  papertitle: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  theme: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  subtheme: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().max(3, 'Please select max of three subthemes!').required('Required'),
  "abstract": yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  keywords: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  previouspapers: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  consider_for_journal: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  secondary_authors: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable().required('Required'),
    firstname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    lastname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email().required('Required'),
    company: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    is_presenting_author: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')
  }))
});
var EsopSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  author_firstname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  author_lastname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  author_email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email().required('Required'),
  author_jobtitle: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_company: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_address1: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_address2: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  author_address3: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  author_city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_scp: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_postal: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  is_presenting_author: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  submission_type: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  presentationtype_full: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  papertitle: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  theme: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  subtheme: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().max(3, 'Please select max of three subthemes!').required('Required'),
  "abstract": yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  keywords: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  previouspapers: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  consider_for_journal: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  secondary_authors: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable().required('Required'),
    firstname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    lastname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email().required('Required'),
    company: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    is_presenting_author: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')
  }))
});
var ProfileSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  author_firstname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  author_lastname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  author_email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email().required('Required'),
  author_jobtitle: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_company: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_address1: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_address2: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  author_address3: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  author_city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_scp: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_postal: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  is_presenting_author: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  submission_type: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  presentationtype_full: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  papertitle: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  theme: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  subtheme: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().max(3, 'Please select max of three subthemes!').required('Required'),
  "abstract": yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  keywords: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  previouspapers: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  consider_for_journal: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  secondary_authors: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable().required('Required'),
    firstname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    lastname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email().required('Required'),
    company: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    is_presenting_author: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')
  }))
});

/***/ })

})
//# sourceMappingURL=authorsArea.js.a34aca840f4b3df3a9b9.hot-update.js.map