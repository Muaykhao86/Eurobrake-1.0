webpackHotUpdate("static/development/pages/exhibitorsRegistration.js",{

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
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");





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
})(["position:relative;display:flex;flex-flow:column;align-content:center;align-items:flex-start;font-size:7rem;font-family:", ";margin:0 1rem;span{position:absolute;top:9rem;font-size:1.7rem;font-family:", ";padding-left:1rem;}span:not(.noPad){padding-left:4rem;}"], function (props) {
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
          lineNumber: 85
        },
        __self: this
      }, __jsx(CDContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx(CDItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, days, __jsx("span", {
        className: "noPad",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Days")), __jsx(CDItem, {
        className: "countdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, ": ", hours > 9 ? hours : "0" + hours, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Hours")), __jsx(CDItem, {
        className: "countdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, ": ", minutes > 9 ? minutes : "0" + minutes, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Minutes")), __jsx(CDItem, {
        className: "countdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, ": ", seconds > 9 ? seconds : "0" + seconds, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Seconds")), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        style: {
          marginLeft: '5rem',
          maxHeight: '7rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
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
//# sourceMappingURL=exhibitorsRegistration.js.8923adbac28774095d84.hot-update.js.map