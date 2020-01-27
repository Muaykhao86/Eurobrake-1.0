webpackHotUpdate("static/development/pages/f/[id]/[formType].js",{

/***/ "./pages/f/[id]/[formType].js":
/*!************************************!*\
  !*** ./pages/f/[id]/[formType].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_forms_OneForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/forms/OneForm */ "./components/forms/OneForm.js");
/* harmony import */ var _components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/forms/LoginForm */ "./components/forms/LoginForm.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Button */ "./components/Button.js");
/* harmony import */ var _components_forms_Abstract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/forms/Abstract */ "./components/forms/Abstract.js");
/* harmony import */ var _components_forms_Authorprofile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/forms/Authorprofile */ "./components/forms/Authorprofile.js");
/* harmony import */ var _components_forms_Exhibitorprofile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/forms/Exhibitorprofile */ "./components/forms/Exhibitorprofile.js");
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/styles/PageStyles */ "./components/styles/PageStyles.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/HeroSection */ "./components/HeroSection.js");
/* harmony import */ var _components_Dates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Dates */ "./components/Dates.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/f/[id]/[formType].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













 // import { Esop } from './Esop';
// import { GetFormSSR } from '../../components/forms/FormActions';

var Form = function Form(props) {
  var _ref = props.data || {},
      presets = _ref.presets,
      __csrf_token = _ref.__csrf_token;

  var apiUrl = props.apiUrl,
      id = props.id,
      formType = props.formType,
      taskType = props.taskType; // ? GETTIN FROM GET INITIAL PROPS

  var FT = formType || '';
  var TT = taskType || '';
  console.log('uniform', {
    apiUrl: apiUrl,
    id: id,
    FT: FT,
    TT: TT,
    __csrf_token: __csrf_token,
    presets: presets
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Eurobrake 2020"), __jsx(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_11__["StyledPage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_Dates__WEBPACK_IMPORTED_MODULE_13__["FixedDates"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_components_Dates__WEBPACK_IMPORTED_MODULE_13__["FixedBox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), formType != 'contact' && formType != 'esop' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/authorsAreaDash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    background: "#134381",
    br: "100rem",
    bcolor: "#134381",
    style: {
      marginLeft: 'auto',
      color: "#FFF"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Back to Dashboard")), __jsx(_components_forms_OneForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    form: FT,
    type: TT,
    presets: presets,
    csrf: __csrf_token,
    apiUrl: apiUrl,
    paperId: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Form); // Form.getInitialProps = async context => {
//     const { id, taskUrl, formType, taskType } = context.query ;
//     const { logintoken } = cookies(context) || {};
//     let apiUrl = '';
//    if(formType == 'contact') apiUrl = `https://prelude.eurobrake.net/contact` 
//    if(formType == 'author') apiUrl = `https://prelude.eurobrake.net/authors/profile` 
//    if(formType == 'reset') apiUrl = `https://prelude.eurobrake.net/authors/profile` 
//    if(formType != 'reset' && formType != 'author' && formType != 'contact') apiUrl = `https://prelude.eurobrake.net/authors/edit/${id}`
//     console.log('1st GIP', { id, logintoken, apiUrl, taskUrl, formType, taskType })
//     console.log('props', { id, logintoken, apiUrl, taskUrl, formType, taskType })
//     const redirectOnError = () =>
//         process.browser
//             ? Router.push('/authorsArea')
//             : context.res.writeHead(301, { Location: '/authorsArea' })
//     if(formType === 'reset') return { apiUrl, id, formType, taskType}// todo sort out real call
//     if(formType === 'contact') {
//         try {
//             const response = await fetch(apiUrl, {
//                 credentials: 'include',
//                 cache: 'no-cache',
//             })
//             const data = await response.json()
//             if (data.status === 'success') {
//                 console.log('res.ok uniform GIP', data)
//                 return { data, apiUrl, id, formType, taskType }
//             }
//             else {
//                 console.log('not reading success')
//                 console.log('stringyfied', JSON.stringify(data))
//                 // https://github.com/developit/unfetch#caveats
//                 return redirectOnError()
//             }
//         } catch (error) {
//             // Implementation or Network error
//             console.log(error)
//             return await redirectOnError()
//         }
//     }
//    else if (logintoken) {
//         try {
//             const response = await fetch(apiUrl, {
//                 credentials: 'include',
//                 cache: 'no-cache',
//                 headers: {
//                     Authorization: 'Bearer ' + logintoken,
//                 }
//             })
//             const data = await response.json()
//             if (data.status === 'success') {
//                 console.log('res.ok 2nd GIP', data)
//                 return { data, apiUrl, id, formType, taskType }
//             }
//             else {
//                 console.log('not reading success')
//                 console.log('stringyfied', JSON.stringify(data))
//                 // https://github.com/developit/unfetch#caveats
//                 return redirectOnError()
//             }
//         } catch (error) {
//             // Implementation or Network error
//             console.log(error)
//             return await redirectOnError()
//         }
//     }     
// }

/***/ })

})
//# sourceMappingURL=[formType].js.2069c785a947bf8a43cd.hot-update.js.map