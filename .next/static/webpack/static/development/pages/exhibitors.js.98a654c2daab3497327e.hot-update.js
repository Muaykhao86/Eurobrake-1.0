webpackHotUpdate("static/development/pages/exhibitors.js",{

/***/ "./components/exhibitors/ExhibitorCard.js":
/*!************************************************!*\
  !*** ./components/exhibitors/ExhibitorCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExhibitorCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ExhibitorsPop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ExhibitorsPop */ "./components/exhibitors/ExhibitorsPop.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");







var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/exhibitors/ExhibitorCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;










var StyledCard = Object(styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "ExhibitorCard__StyledCard",
  componentId: "sc-1wh6n84-0"
})(["display:flex;flex-flow:column;justify-content:space-between;margin:1rem;width:27rem;min-height:37rem;padding:0 1rem;"]);
var StyledContent = Object(styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__["default"]).withConfig({
  displayName: "ExhibitorCard__StyledContent",
  componentId: "sc-1wh6n84-1"
})(["align-self:center;flex-basis:60%;flex:1;display:flex;flex-flow:column;justify-content:space-between;padding:0;"]);
var Company = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].h2.withConfig({
  displayName: "ExhibitorCard__Company",
  componentId: "sc-1wh6n84-2"
})(["font-family:", ";color:", ";font-size:1.8rem;text-align:center;"], function (props) {
  return props.theme.MPSemibold;
}, function (props) {
  return props.theme.primary;
});
var Booth = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].h1.withConfig({
  displayName: "ExhibitorCard__Booth",
  componentId: "sc-1wh6n84-3"
})(["font-family:", ";color:", ";font-size:4.2rem;align-self:center;"], function (props) {
  return props.theme.MPBlack;
}, function (props) {
  return props.theme.primary;
});
var Country = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].p.withConfig({
  displayName: "ExhibitorCard__Country",
  componentId: "sc-1wh6n84-4"
})(["font-family:", ";color:", ";font-size:1.4rem;text-align:end;align-self:flex-end;"], function (props) {
  return props.theme.MPLight;
}, function (props) {
  return props.theme.primary;
});
var StyledMedia = Object(styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12__["default"]).withConfig({
  displayName: "ExhibitorCard__StyledMedia",
  componentId: "sc-1wh6n84-5"
})(["   &&{width:50%;}"]);
var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "ExhibitorCard__StyledContainer",
  componentId: "sc-1wh6n84-6"
})(["display:flex;justify-content:center;align-items:center;flex-basis:40%;"]);
var StyledBottom = Object(styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__["default"]).withConfig({
  displayName: "ExhibitorCard__StyledBottom",
  componentId: "sc-1wh6n84-7"
})(["display:flex;justify-content:space-between;width:100%;.MuiCardActions-root{padding:.8rem 0;}"]);

var ExhibitorCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ExhibitorCard, _React$Component);

  function ExhibitorCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExhibitorCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ExhibitorCard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addDefaultSrc", function (e) {
      e.target.src = "/images/logo.png";
      e.target.onerror = null;
      return;
    });

    return _this;
  } //Image handler Component


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ExhibitorCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          image = _this$props.image,
          height = _this$props.height,
          booth = _this$props.booth,
          country = _this$props.country,
          summary = _this$props.summary,
          website = _this$props.website,
          phone = _this$props.phone,
          email = _this$props.email;
      return __jsx(StyledCard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx(StyledContainer, {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, image ? __jsx(StyledMedia, {
        component: "img",
        alt: name,
        src: image,
        onError: this.addDefaultSrc,
        title: name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }) : __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })), __jsx(StyledContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx(Company, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, name), __jsx(Booth, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "#", booth)), __jsx(StyledBottom, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx(_ExhibitorsPop__WEBPACK_IMPORTED_MODULE_15__["default"], {
        name: name,
        img: image,
        booth: booth,
        country: country,
        height: height,
        summary: summary,
        website: website,
        phone: phone,
        email: email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), __jsx(Country, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Based in ", country === 'United States' ? 'US' : country === 'United Kingdom' ? 'UK' : country)));
    }
  }]);

  return ExhibitorCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);


{
  /* <CardActionArea> */
}
{
  /* </CardActionArea>  */
}

/***/ })

})
//# sourceMappingURL=exhibitors.js.98a654c2daab3497327e.hot-update.js.map