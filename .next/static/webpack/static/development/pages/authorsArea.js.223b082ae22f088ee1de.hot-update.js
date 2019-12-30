webpackHotUpdate("static/development/pages/authorsArea.js",{

/***/ "./components/forms/Authorprofile.js":
/*!*******************************************!*\
  !*** ./components/forms/Authorprofile.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React, { Component, useState, useEffect } from 'react'
// import { Formik, Form, Field } from 'formik';
// import { TextField, Select} from 'formik-material-ui';
// import { Button } from '../Button';
// import { Typography } from '@material-ui/core';
// import {titles, countries} from './FormSelects';
// import {AbstractSchema} from './FormControl';
// import {StyledForm} from './Formstyles';
// export const Authorprofile = ({editPaper = false}) => {
//     const [presenter, setPresenter] = useState('');
//     // if edit = true send back a preset form if not send a blank
//     console.log({editPaper})
//     // ! NEED TO SORTR AND SAVE PRESETS
//     useEffect(() => {
//         console.log('presenter is changing')
//     }, [presenter])
//     return (
//         <Formik
//             initialValues={editPaper ? presets : emptyInitial }
//             onSubmit={(values, actions) => {
//                 setTimeout(() => {
//                     alert(JSON.stringify(values, null, 2));
//                     actions.setSubmitting(false);
//                 }, 1000)
//             }}
//             enableReinitialize
//         >
//             {({ values, handleChange, }) => {
//                 return (
//                     <StyledForm>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Title
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_title}
//                                 style={{ color: '#134381' }}
//                                 name="author_title"
//                                 component={Select}
//                             >
//                                 {titles.map((option, i) =>
//                                     <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
//                             </Field>
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 First Name:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_firstname}
//                                 style={{ color: '#134381' }}
//                                 name="author_firstname"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Last Name:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_lastname}
//                                 style={{ color: '#134381' }}
//                                 name="author_lastname"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Email:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_email}
//                                 style={{ color: '#134381' }}
//                                 name="author_email"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Job Title:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_jobtitle}
//                                 style={{ color: '#134381' }}
//                                 name="author_jobtitle"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Company:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_company}
//                                 style={{ color: '#134381' }}
//                                 name="author_company"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Address:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_address1}
//                                 style={{ color: '#134381' }}
//                                 name="author_address1"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                             </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_address2}
//                                 style={{ color: '#134381' }}
//                                 name="author_address2"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                             </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_address3}
//                                 style={{ color: '#134381' }}
//                                 name="author_address3"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 City:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_city}
//                                 style={{ color: '#134381' }}
//                                 name="author_city"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 State/county/province:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_scp}
//                                 style={{ color: '#134381' }}
//                                 name="author_scp"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Postal/Zip code:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_postal}
//                                 style={{ color: '#134381' }}
//                                 name="author_postal"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Country
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_country}
//                                 style={{ color: '#134381' }}
//                                 name="author_country"
//                                 component={Select}
//                             >
//                                 {countries.map((option, i) =>
//                                     <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
//                             </Field>
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Phone:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_phone}
//                                 style={{ color: '#134381' }}
//                                 name="author_phone"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Fax:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_fax}
//                                 style={{ color: '#134381' }}
//                                 name="author_fax"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Choose a Password:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_phone}
//                                 style={{ color: '#134381' }}
//                                 name="author_password"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Confirm password:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.author_phone}
//                                 style={{ color: '#134381' }}
//                                 name="author_password_confirm"
//                                 component={TextField}
//                             />
//                         </div>
//                         <Button type="submit" 
//                          bcolor="#134381"
//                                 padding="0.5rem 2rem"
//                                 background="#134381"
//                                 br="100rem"
//                                 style={{ margin: ".5rem 0" }}
//                                 fontSize="1.7rem">Submit</Button>
//                         {console.log('main', values.is_presenting_author, 'second', values.secondary_authors)}
//                     </StyledForm>
//                 )
//             }}
//         </Formik>
//     )
// };
// const presets = {
//     author_title: "Mr.",
//     author_firstname: "Andrew",
//     author_lastname: "Green",
//     author_email: "andrew@article7.co.uk",
//     author_jobtitle: "Director",
//     author_company: "Article Seven Limited",
//     author_address1: "10 Hamilton Road",
//     author_address2: null,
//     author_address3: null,
//     author_city: "Sidcup",
//     author_scp: "Kent",
//     author_country: "GB",
//     author_postal: "DA15 7HB",
//     author_phone: "+44 20 8305 1224",
//     author_fax: '',
//     author_password: '',
//     author_password_confirmed: '',
//     __csrf_token: "5d159fb224ed613dce89a64553f36f5eda1fa97c,2caaa318bb55c8c19d660a1e420d1c602dfc59f9,1576603105"
// }
// const emptyInitial = {
//     author_title: '',
//     author_firstname: '',
//     author_lastname: '',
//     author_email: '',
//     author_jobtitle: '',
//     author_company: '',
//     author_address1: '',
//     author_address2: '',
//     author_address3: '',
//     author_city: '',
//     author_scp: '',
//     author_postal: '',
//     author_country: '',
//     author_phone: '',
//     author_fax: '',
//     author_password: '',
//     author_password_confirmed: '',
//     __csrf_token: ''
// }

/***/ }),

/***/ "./components/forms/OneForm.js":
/*!*************************************!*\
  !*** ./components/forms/OneForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginForm */ "./components/forms/LoginForm.js");
/* harmony import */ var _Abstract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Abstract */ "./components/forms/Abstract.js");
/* harmony import */ var _Authorprofile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Authorprofile */ "./components/forms/Authorprofile.js");
/* harmony import */ var _Authorprofile__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Authorprofile__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Exhibitorprofile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Exhibitorprofile */ "./components/forms/Exhibitorprofile.js");
/* harmony import */ var _Esop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Esop */ "./components/forms/Esop.js");
/* harmony import */ var _Esop__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Esop__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/OneForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var OneForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OneForm, _Component);

  function OneForm(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OneForm);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OneForm).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OneForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          props = _this$props.props,
          form = _this$props.form;
      console.log('edit props', props);
      {
        switch (form) {
          case 'abstract-edit':
            return __jsx(_Abstract__WEBPACK_IMPORTED_MODULE_7__["AbstractForm"], {
              editPaper: "true",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              },
              __self: this
            });

          case 'abstract':
            return __jsx(_Abstract__WEBPACK_IMPORTED_MODULE_7__["AbstractForm"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            });

          case 'exhibitor-edit':
            return __jsx(_Exhibitorprofile__WEBPACK_IMPORTED_MODULE_9__["Exhibitorprofile"], {
              editPaper: "true",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            });

          case 'exhibitor':
            return __jsx(_Exhibitorprofile__WEBPACK_IMPORTED_MODULE_9__["Exhibitorprofile"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            });

          case 'author-edit':
            return __jsx(_Authorprofile__WEBPACK_IMPORTED_MODULE_8__["Authorprofile"], {
              editPaper: "true",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            });

          case 'author':
            return __jsx(_Authorprofile__WEBPACK_IMPORTED_MODULE_8__["Authorprofile"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            });

          case 'esop-edit':
            return __jsx(_Esop__WEBPACK_IMPORTED_MODULE_10__["Esop"], {
              editPaper: "true",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            });

          case 'esop':
            return __jsx(_Esop__WEBPACK_IMPORTED_MODULE_10__["Esop"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            });

          case 'login':
            return __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            });

          default:
            return null;
        }
      }
    }
  }]);

  return OneForm;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]); // export default withAuthSync(Edit)


/* harmony default export */ __webpack_exports__["default"] = (OneForm); // !
// ?
// *
// todo

/***/ })

})
//# sourceMappingURL=authorsArea.js.223b082ae22f088ee1de.hot-update.js.map