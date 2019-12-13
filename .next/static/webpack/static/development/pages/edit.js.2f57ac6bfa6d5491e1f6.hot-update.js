webpackHotUpdate("static/development/pages/edit.js",{

/***/ "./pages/edit.js":
/*!***********************!*\
  !*** ./pages/edit.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ExpandMoreOutlined */ "./node_modules/@material-ui/icons/ExpandMoreOutlined.js");
/* harmony import */ var _material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Forms */ "./components/Forms.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/HeroSection */ "./components/HeroSection.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/styles/PageStyles */ "./components/styles/PageStyles.js");
/* harmony import */ var _components_testAuthors__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/testAuthors */ "./components/testAuthors.js");
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Popup */ "./components/Popup.js");







var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/edit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

















var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "edit__StyledPage",
  componentId: "sc-1a15lzv-0"
})(["display:flex;flex-direction:column;align-self:center;width:", ";background-color:", ";margin-top:7rem;.authors{color:", ";font-family:", ";font-size:2rem;&-title{color:", ";font-family:", ";font-size:4.4rem;}&_sub-title{color:", ";font-size:3.5rem;font-family:", ";padding-bottom:.5rem;}&-bold{color:", ";font-family:", ";}&-it{font-family:", ";}&_action-box{display:flex;justify-content:space-between;margin-bottom:3rem;}}"], function (props) {
  return props.theme.minWidth;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPSemibold;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.MPBold;
}, function (props) {
  return props.theme.MPLightIt;
});
var StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "edit__StyledBox",
  componentId: "sc-1a15lzv-1"
})(["display:flex;justify-content:space-between;min-height:15rem;background-color:#D4DDE8;padding:1rem;margin-bottom:2rem;"]);
var StyledActionArea = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "edit__StyledActionArea",
  componentId: "sc-1a15lzv-2"
})(["flex:1 1 33.33%;display:flex;flex-flow:column;justify-content:space-between;align-items:flex-start;.action-paper{color:", ";font-family:", ";font-size:2rem;}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.MPBold;
});
var StyledInfoArea = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "edit__StyledInfoArea",
  componentId: "sc-1a15lzv-3"
})(["flex:1 1 66.66%;display:flex;flex-flow:column;justify-content:space-between;align-items:flex-start;.paper-title{font-size:2rem;color:", ";}.paper-type{font-size:2rem;color:", ";font-family:", ";}.paper_task{color:", ";font-size:1.5rem;&-box{display:flex;align-items:flex-start;}}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.black;
});

var FilledBanner = function FilledBanner() {
  return __jsx(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_20__["StyledBanner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_20__["StyledContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "banner-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Edit Your Abstract Here"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "banner-sub",
    sfs: "3rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Submit your review ready papers by 26 January 2020"), __jsx("div", {
    className: "banner_bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_15___default.a, {
    className: "banner_bottom-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    varient: "h3",
    className: "banner_bottom-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Submit your review ready papers by 26 January 2020"))));
};

var Edit =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Edit, _Component);

  function Edit() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Edit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      var userLoggedIn = _this.state.userLoggedIn;

      var _cookie$get = js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get(),
          logintoken = _cookie$get.logintoken;

      console.log('cdm', logintoken);
      logintoken && !userLoggedIn ? _this.setState(function (prev) {
        return {
          userLoggedIn: !prev
        };
      }) : null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleInputChange", function (event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Edit, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_18__["default"], {
        banner: FilledBanner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Edit Your Abstract"), __jsx(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("div", {
        className: "authors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "authors-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Hi ", '*USERNAME*'), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        className: "authors_sub-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Edit Your Abstract"))));
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); // Edit.getInitialProps = async ctx => {
//     // We use `nextCookie` to get the cookie and pass the token to the frontend in the `props`.
//     const { logintoken } = cookies(ctx);
//     const apiUrl = 'https://prelude.eurobrake.net/dashboard ';
//     const redirectOnError = () =>
//         process.browser
//             ? Router.push('/authorsArea')
//             : ctx.res.writeHead(301, { Location: '/authorsArea' })
//     if (logintoken) {
//         try {
//             const response = await fetch(apiUrl, {
//                 credentials: 'include',
//                 cache: 'no-cache',
//                 headers: {
//                     Authorization: 'Bearer ' + logintoken,
//                 }
//             })
//             const data = await response.json()
//             // console.log('Authors response Data =>', data.status, data);
//             if (data.status === 'success') {
//                 console.log('res.ok', data)
//                 return { authorData: data }
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
//             return redirectOnError()
//         }
//     }
// }
// export default withAuthSync(Edit)


/* harmony default export */ __webpack_exports__["default"] = (Edit); // !
// ?
// *
// todo

/***/ })

})
//# sourceMappingURL=edit.js.2f57ac6bfa6d5491e1f6.hot-update.js.map