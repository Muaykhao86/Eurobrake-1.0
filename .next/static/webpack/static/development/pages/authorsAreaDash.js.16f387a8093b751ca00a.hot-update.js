webpackHotUpdate("static/development/pages/authorsAreaDash.js",{

/***/ "./pages/authorsAreaDash.js":
/*!**********************************!*\
  !*** ./pages/authorsAreaDash.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/ExpandMoreOutlined */ "./node_modules/@material-ui/icons/ExpandMoreOutlined.js");
/* harmony import */ var _material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Create */ "./node_modules/@material-ui/icons/Create.js");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Assignment */ "./node_modules/@material-ui/icons/Assignment.js");
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/HeroSection */ "./components/HeroSection.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/styles/PageStyles */ "./components/styles/PageStyles.js");
/* harmony import */ var _components_testAuthors__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/testAuthors */ "./components/testAuthors.js");









var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/authorsAreaDash.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



















var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "authorsAreaDash__StyledPage",
  componentId: "sc-1jtqy5t-0"
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
var StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "authorsAreaDash__StyledBox",
  componentId: "sc-1jtqy5t-1"
})(["display:flex;justify-content:space-between;min-height:15rem;background-color:#D4DDE8;padding:1rem;"]);
var StyledActionArea = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "authorsAreaDash__StyledActionArea",
  componentId: "sc-1jtqy5t-2"
})(["flex:1 1 33.33%;display:flex;flex-flow:column;justify-content:space-between;align-items:flex-start;.action-paper{color:", ";font-family:", ";font-size:2rem;}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.MPBold;
});
var StyledInfoArea = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "authorsAreaDash__StyledInfoArea",
  componentId: "sc-1jtqy5t-3"
})(["flex:1 1 66.66%;display:flex;flex-flow:column;justify-content:space-between;align-items:flex-start;.paper-title{font-size:2rem;color:", ";}.paper-type{font-size:2rem;color:", ";font-family:", ";}.paper_task{color:", ";&-box{display:flex;}}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.MPLightIt;
}, function (props) {
  return props.theme.black;
});

var FilledBanner = function FilledBanner() {
  return __jsx(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_26__["StyledBanner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_26__["StyledContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: "banner-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Welcome to the Author's Area"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: "banner-sub",
    sfs: "3rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Submit your review ready papers by 26 January 2020"), __jsx("div", {
    className: "banner_bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_material_ui_icons_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_17___default.a, {
    className: "banner_bottom-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    varient: "h3",
    className: "banner_bottom-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Submit your review ready papers by 26 January 2020"))));
};

var Abstract = function Abstract() {
  return __jsx(StyledBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(StyledActionArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    gutterBottom: true,
    className: "action-paper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, _components_testAuthors__WEBPACK_IMPORTED_MODULE_27__["Abstracts"][0].papercode), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_25__["Button"], {
    bcolor: "#134381",
    background: "#134381",
    br: "100rem",
    padding: "0.5rem 2rem",
    style: {
      margin: ".5rem 0"
    },
    fontSize: "1.7rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_18___default.a, {
    style: {
      fontSize: '3rem',
      marginRight: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), "EDIT PAPER"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_25__["Button"], {
    bcolor: "#134381",
    background: "#134381",
    br: "100rem",
    padding: "0.5rem 2rem",
    style: {
      margin: ".5rem 0"
    },
    fontSize: "1.7rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22___default.a, {
    style: {
      fontSize: '3rem',
      marginRight: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), "WITHDRAW")), __jsx(StyledInfoArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: "paper-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, _components_testAuthors__WEBPACK_IMPORTED_MODULE_27__["Abstracts"][2].title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    gutterBottom: true,
    className: "paper-type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, _components_testAuthors__WEBPACK_IMPORTED_MODULE_27__["Abstracts"][2].paper_type.toUpperCase()), _components_testAuthors__WEBPACK_IMPORTED_MODULE_27__["Abstracts"][2].tasks && _components_testAuthors__WEBPACK_IMPORTED_MODULE_27__["Abstracts"][2].tasks.map(function (task) {
    return __jsx("div", {
      className: "paper_task-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, task.done === null ? __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_21___default.a, {
      style: {
        color: 'green',
        marginRight: '1rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }) : __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22___default.a, {
      style: {
        color: 'red',
        marginRight: '1rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
      gutterBottom: true,
      className: "paper_task",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, task.task));
  })));
};

var AuthorsAreaDash =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AuthorsAreaDash, _Component);

  function AuthorsAreaDash(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AuthorsAreaDash);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AuthorsAreaDash).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "componentDidMount", function () {
      var userLoggedIn = _this.state.userLoggedIn;

      var _cookie$get = js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get(),
          logintoken = _cookie$get.logintoken;

      console.log('cdm', logintoken);
      logintoken && !userLoggedIn ? _this.setState(function (prev) {
        return {
          userLoggedIn: !prev
        };
      }) : null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getAbstractForm",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var _cookie$get2, logintoken, apiUrl, response, data, error;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log('click');
                _cookie$get2 = js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get(), logintoken = _cookie$get2.logintoken;
                console.log(logintoken);
                _context.prev = 4;
                apiUrl = 'https://prelude.eurobrake.net/submit';
                _context.next = 8;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default()(apiUrl, {
                  credentials: 'include',
                  headers: {
                    Authorization: "Bearer ".concat(logintoken)
                  }
                });

              case 8:
                response = _context.sent;
                _context.next = 11;
                return response.json();

              case 11:
                data = _context.sent;

                if (!(data.status === 'success')) {
                  _context.next = 17;
                  break;
                }

                _this.setState(function (prev) {
                  return {
                    hasForm: !prev,
                    formData: data.form
                  };
                }); // console.log(data.form);
                // console.log('stringify',JSON.stringify(data.form));


                console.log(data);
                _context.next = 20;
                break;

              case 17:
                error = new Error(data.error);
                error.response = response;
                throw error;

              case 20:
                _context.next = 26;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](4);
                console.error('Failed to get form, please try again', _context.t0);

                _this.setState({
                  error: _context.t0.message
                });

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 22]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleInputChange", function (event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value));
    });

    _this.state = {
      hasForm: false,
      formData: undefined,
      error: '',
      userLoggedIn: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AuthorsAreaDash, [{
    key: "render",
    value: function render() {
      // const {name} = this.props.authorData;
      var _this$state = this.state,
          userLoggedIn = _this$state.userLoggedIn,
          hasForm = _this$state.hasForm;
      console.log({
        userLoggedIn: userLoggedIn,
        hasForm: hasForm
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_24__["default"], {
        banner: FilledBanner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "Author's Area Dashboard"), __jsx(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, __jsx("div", {
        className: "authors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: "authors-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Hi ", '*USERNAME*'), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
        gutterBottom: true,
        className: "authors_sub-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "Welcome to the Author's Area"), __jsx("div", {
        className: "authors_action-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_25__["Button"], {
        bcolor: "#134381",
        background: "#134381",
        br: "100rem",
        padding: "0.5rem 2rem",
        style: {
          margin: ".5rem 0"
        },
        fontSize: "1.7rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, __jsx(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_18___default.a, {
        style: {
          fontSize: '3rem',
          marginRight: '1rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }), "EDIT PROFILE"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        href: "/authorsAreaInstructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_25__["Button"], {
        bcolor: "#134381",
        padding: "0.5rem 2rem",
        background: "#134381",
        br: "100rem",
        style: {
          margin: ".5rem"
        },
        fontSize: "1.7rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, __jsx(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_19___default.a, {
        style: {
          fontSize: '3rem',
          marginRight: '.5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }), "INSTRUCTIONS & TEMPLATES")), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_25__["Button"], {
        bcolor: "#134381",
        padding: "0.5rem 2rem",
        background: "#134381",
        br: "100rem",
        style: {
          margin: ".5rem 0"
        },
        fontSize: "1.7rem",
        onClick: _utils_auth__WEBPACK_IMPORTED_MODULE_23__["logout"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_20___default.a, {
        style: {
          fontSize: '3rem',
          marginRight: '.5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }), "logout")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
        gutterBottom: true,
        className: "authors-title",
        style: {
          fontSize: '3rem',
          borderTop: '2px solid #134381',
          borderBottom: '2px solid #134381'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Your Abstracts"), _components_testAuthors__WEBPACK_IMPORTED_MODULE_27__["Abstracts"] ? __jsx(Abstract, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }) : __jsx(StyledBox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
        gutterBottom: true,
        className: "authors-it",
        style: {
          fontSize: '2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "You haven't submitted any abstracts yet")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
        gutterBottom: true,
        className: "authors",
        style: {
          fontSize: '2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, "For more information, please visit ", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        href: "/authorsAreaInstructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, __jsx("a", {
        className: "authors-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, "Instructions & Templates")), " or email ", __jsx("a", {
        className: "authors-bold",
        href: "mailto:info@fisita.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, "info@eurobrake.net")))));
    }
  }]);

  return AuthorsAreaDash;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]); // AuthorsAreaDash.getInitialProps = async ctx => {
//     // We use `nextCookie` to get the cookie and pass the token to the frontend in the `props`.
//     const { logintoken } = cookies(ctx);
//     const apiUrl = 'https://prelude.eurobrake.net/dashboard ';
//     const redirectOnError = () =>
//         process.browser
//             ? Router.push('/authorsArea')
//             : ctx.res.writeHead(301, { Location: '/authorsArea' })
//     if (logintoken) {
//         try {
//             // console.log({logintoken}, 'getIProps right before fetch call')
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
// export default withAuthSync(AuthorsAreaDash)


/* harmony default export */ __webpack_exports__["default"] = (AuthorsAreaDash); // !
// ?
// *
// todo

/***/ })

})
//# sourceMappingURL=authorsAreaDash.js.16f387a8093b751ca00a.hot-update.js.map