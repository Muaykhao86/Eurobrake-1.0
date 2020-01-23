webpackHotUpdate("static/development/pages/f/[id]/[formType].js",{

/***/ "./components/forms/FormControl.js":
/*!*****************************************!*\
  !*** ./components/forms/FormControl.js ***!
  \*****************************************/
/*! exports provided: ContactSchema, AuthorSchema, ResetSchema, LoginSchema, AbstractSchema, EsopSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSchema", function() { return ContactSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorSchema", function() { return AuthorSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetSchema", function() { return ResetSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSchema", function() { return LoginSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSchema", function() { return AbstractSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsopSchema", function() { return EsopSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

var ContactSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  firstname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  lastname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  jobtitle: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  company: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  address: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required').email(),
  enquiry: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')
});
var AuthorSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  firstname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  lastname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required').email(),
  jobtitle: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  company: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  address1: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  address2: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  address3: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  scp: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  postal: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  fax: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  confirmed_password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable()
});
var ResetSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  new_password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required').min(8, 'Password must be a least 8 characters long'),
  confirm_password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required').min(8, 'Password must be a least 8 characters long').oneOf([yup__WEBPACK_IMPORTED_MODULE_0__["ref"]('new_password'), null], 'Passwords must match')
});
var LoginSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  username: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required').email('Please enter a valid email'),
  password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')
});
var AbstractSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  author_title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  author_firstname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_lastname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email().required('Required'),
  author_jobtitle: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_company: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_address1: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_address2: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  author_address3: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  author_city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_scp: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_postal: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  author_phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  is_presenting_author: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  // submission_type: yup.string()
  //     .required('Required'),
  // presentationtype_full: yup.string(),
  papertitle: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  // theme: yup.string()
  //     .required('Required'),
  // subtheme: yup.array().max(3, 'Please select max of three subthemes!')
  //     .required('Required'),
  "abstract": yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required').max(750, 'Too Long!'),
  // keywords: yup.string()
  //     .required('Required'),
  // previouspapers: yup.string()
  //     .required('Required'),
  // consider_for_journal: yup.string()
  //     .required('Required'),
  secondary_authors: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
    firstname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    lastname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email().required('Required'),
    company: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    is_presenting_author: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')
  }))
});
var CV_SUPPORTED_FORMATS = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
var PROOF_SUPPORTED_FORMATS = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
var EsopSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  student_title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  student_firstname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  student_lastname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  student_email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  student_address1: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  student_address2: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  student_address3: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  student_city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  student_scp: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  student_postal: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  student_country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  student_membersociety: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  birth_city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  birth_country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  student_level_current: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  student_level_seeking: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  university_course: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  university_name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  university_address1: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  university_address2: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  university_address3: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  university_city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  university_scp: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  university_postal: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  university_country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  cv_filename_uploader: yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().required('Required').test("fileFormat", "Unsupported Format", function (value) {
    return value && CV_SUPPORTED_FORMATS.includes(value.type);
  }),
  personal_statement: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required').test('wordCount', 'Max 250 words', function (value) {
    return value && value.match(/[\w\d\’\'-]+/gi).length <= 250;
  } // split(' ').length <= 100 
  ).test('wordCount', 'Min 150 words', function (value) {
    return value && value.match(/[\w\d\’\'-]+/gi).length >= 150;
  } // split(' ').length <= 100 
  ),
  student_status_filename_uploader: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required').test("fileFormat", "Unsupported Format", function (value) {
    return value && PROOF_SUPPORTED_FORMATS.includes(value.type);
  }).test("fileSize", "File too large", function (value) {
    return value && value.size <= FILE_SIZE;
  }),
  question_1_answer: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  question_2_answer: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  question_3_answer: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  question_4_answer: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().required('Required').max(3, 'Please select only three').min(3, 'Please select three'),
  youtube_url: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  roundtable: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().nullable(),
  roundtable_other: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  marketing: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  marketing_other: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  previous_participant: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  initiatives: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().nullable(),
  initiatives_other: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  consent_sponsors: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  consent_fiec: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  consent_wep: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  consent_bursary: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  consent_events: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  consent_yfia: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().nullable(),
  __csrf_token: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
});

/***/ })

})
//# sourceMappingURL=[formType].js.02e7e3e424b6c499883a.hot-update.js.map