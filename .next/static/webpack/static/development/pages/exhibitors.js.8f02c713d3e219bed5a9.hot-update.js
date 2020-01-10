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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_exhibitors_ExhibitorCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/exhibitors/ExhibitorCard */ "./components/exhibitors/ExhibitorCard.js");
/* harmony import */ var _components_exhibitors_testexpo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/exhibitors/testexpo */ "./components/exhibitors/testexpo.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/HeroSection */ "./components/HeroSection.js");
/* harmony import */ var _components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/styles/PageStyles */ "./components/styles/PageStyles.js");







var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/exhibitors.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var StyledExhibitors = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "exhibitors__StyledExhibitors",
  componentId: "sc-1kpvgm5-0"
})(["display:flex;flex-flow:wrap;"]);

var ExhibitorList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ExhibitorList, _Component);

  function ExhibitorList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ExhibitorList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ExhibitorList).call(this, props));
    _this.state = {
      exhibitors: [],
      companies: []
    }; //  ? CHANGE OVER FOR LOCAL HOST
    // this.exhibitors = expo;

    return _this;
  } // ? CHANGE OVER FOR LOCAL HOST


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ExhibitorList, [{
    key: "render",
    // componentDidMount() {
    //     // const exhibitors = this.props.exhibitors.exhibitors;
    //     // const company = exhibitors.map((ex, i) => ex.company);
    //     // this.setState({ companies: company });
    // }
    value: function render() {
      var exhibitors = this.props.exhibitors.exhibitors;
      console.log(this.props);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
        max: "65%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "EuroBrake 2020 Exhibitor Directory"), __jsx(_components_styles_PageStyles__WEBPACK_IMPORTED_MODULE_13__["StyledPage"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("h1", {
        style: {
          marginBottom: '5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Get to know the exhibitors"), __jsx(StyledExhibitors, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, exhibitors.map(function (company, i) {
        return __jsx(_components_exhibitors_ExhibitorCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
            lineNumber: 63
          },
          __self: this
        });
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()('https://prelude.eurobrake.net/exhibitors/list');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json()["catch"](function (error) {
                  return console.log(error);
                });

              case 5:
                data = _context.sent;
                return _context.abrupt("return", {
                  exhibitors: data
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ExhibitorList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=exhibitors.js.8f02c713d3e219bed5a9.hot-update.js.map