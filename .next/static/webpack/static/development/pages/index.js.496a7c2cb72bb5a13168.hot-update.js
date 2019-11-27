webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CountDownBanner.js":
/*!***************************************!*\
  !*** ./components/CountDownBanner.js ***!
  \***************************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");





var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/CountDownBanner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var CDBanner = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "CountDownBanner__CDBanner",
  componentId: "y7fpkn-0"
})(["background-color:#134381;margin-top:0;min-width:100%;height:19.5rem;display:flex;justify-content:center;align-items:center;color:white;"]);
var CDContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "CountDownBanner__CDContainer",
  componentId: "y7fpkn-1"
})(["display:flex;max-width:", ";align-items:center;margin-right:2rem;"], function (props) {
  return props.theme.maxWidth;
});
var CDItem = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "CountDownBanner__CDItem",
  componentId: "y7fpkn-2"
})(["position:relative;top:-2.5rem;display:flex;flex-flow:column;align-content:flex-start;align-items:flex-start;.timer{font-size:7rem;font-family:", ";margin:0 1rem;}span{position:absolute;top:9rem;font-size:1.7rem;font-family:", ";padding-left:2rem;}span:not(.noPad){padding-left:5rem;}"], function (props) {
  return props.theme.MPBlack;
}, function (props) {
  return props.theme.MPLight;
});

var CountDownBanner =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CountDownBanner, _Component);

  function CountDownBanner(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CountDownBanner);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CountDownBanner).call(this, props));
    _this.state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CountDownBanner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        var countDownDate = new Date("Jun 2, 2020 08:00:00").getTime();
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance / (1000 * 60 * 60) % 24);
        var minutes = Math.floor(distance / (1000 * 60) % 60);
        var seconds = Math.floor(distance / 1000 % 60);

        _this2.setState({
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        });
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          days = _this$state.days,
          hours = _this$state.hours,
          minutes = _this$state.minutes,
          seconds = _this$state.seconds;
      return __jsx(CDBanner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx(CDContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(CDItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, days), __jsx("span", {
        className: "noPad",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Days")), __jsx(CDItem, {
        className: "countdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, hours > 9 ? ': ' + hours : ": 0" + hours), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Hours")), __jsx(CDItem, {
        className: "countdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, minutes > 9 ? ': ' + minutes : ": 0" + minutes), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Minutes")), __jsx(CDItem, {
        className: "countdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, seconds > 9 ? ': ' + seconds : ": 0" + seconds), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Seconds")), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        style: {
          marginLeft: '5rem',
          minHeight: '8rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Book Now")));
    }
  }]);

  return CountDownBanner;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (CountDownBanner); // TODO LINE UP DAYS PROPERLY AND CHANGE DAYS TO 3 DIDGIT AND 00 FOR REPLACING 0

/***/ })

})
//# sourceMappingURL=index.js.496a7c2cb72bb5a13168.hot-update.js.map