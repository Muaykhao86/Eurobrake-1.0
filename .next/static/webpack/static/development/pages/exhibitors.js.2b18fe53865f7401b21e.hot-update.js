webpackHotUpdate("static/development/pages/exhibitors.js",{

/***/ "./pages/exhibitors.js":
/*!*****************************!*\
  !*** ./pages/exhibitors.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExhibitorList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_exhibitors_ExhibitorCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/exhibitors/ExhibitorCard */ "./components/exhibitors/ExhibitorCard.js");
/* harmony import */ var _components_exhibitors_testexpo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/exhibitors/testexpo */ "./components/exhibitors/testexpo.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/HeroSection */ "./components/HeroSection.js");
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/styles/PageStyles */ "./components/styles/PageStyles.js");





var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/exhibitors.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var StyledExhibitors = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "exhibitors__StyledExhibitors",
  componentId: "sc-1kpvgm5-0"
})(["display:flex;flex-flow:wrap;"]);

var ExhibitorList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ExhibitorList, _Component);

  function ExhibitorList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExhibitorList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ExhibitorList).call(this, props));
    _this.state = {
      exhibitors: [],
      companies: []
    };
    _this.exhibitors = _components_exhibitors_testexpo__WEBPACK_IMPORTED_MODULE_9__["expo"];
    return _this;
  } // static async getInitialProps() {
  //     const res = await fetch('https://prelude.eurobrake.net/exhibitors');
  //     const data = await res.json().catch(error => console.log(error));
  //     return {
  //         exhibitors: data
  //     };
  // };


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ExhibitorList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // const exhibitors = this.props.exhibitors.exhibitors;
      var company = this.exhibitors.map(function (ex, i) {
        return ex.company;
      });
      this.setState({
        companies: company
      });
    }
  }, {
    key: "render",
    value: function render() {
      // const exhibitors = this.props.exhibitors.exhibitors;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        max: "65%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "EuroBrake 2020 Exhibitor Directory"), __jsx(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_11__["StyledPage"], {
        mt: "10rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Get to know the exhibitors"), __jsx(StyledExhibitors, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, this.exhibitors.map(function (company, i) {
        return __jsx(_components_exhibitors_ExhibitorCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: i,
          name: company.company,
          image: company.logo,
          booth: company.booth,
          country: company.country,
          height: 100,
          summary: company.description,
          website: company.website,
          phone: company.phone,
          email: company.email,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        });
      }))));
    }
  }]);

  return ExhibitorList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]); // ON THIS PAGE!!!
// HAVE A BIG CARD LIST OF ALL EXHIBITORS
// DISPLAY LOGO NAME AND BOOTH
// THEN ON CLICK SHOW POPUP PORTAL WITH THE REST OPF THEIR DETAILS




/***/ })

})
//# sourceMappingURL=exhibitors.js.2b18fe53865f7401b21e.hot-update.js.map