webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/GoogleMaps.js":
/*!**********************************!*\
  !*** ./components/GoogleMaps.js ***!
  \**********************************/
/*! exports provided: MapContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return MapContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/GoogleMaps.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var mapStyles = {
  width: '100%',
  height: '100%'
}; // Dont know if the above dov will work, will have to test it when i get the api key => tbh dont evenm know if I need to set fixed with

var MapContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MapContainer, _Component);

  function MapContainer(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MapContainer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MapContainer).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MapContainer, [{
    key: "render",
    value: function render() {
      if (!this.props.google) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, "Loading...");
      }

      return __jsx("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_6__["Map"], {
        google: this.props.google,
        zoom: 8,
        style: mapStyles,
        center: {
          lat: 41.409588,
          lng: 2.219364
        } //Center of map is EB
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_6__["Marker"], {
        position: {
          lat: 41.409588,
          lng: 2.219364
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), " "));
    }
  }]);

  return MapContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_6__["GoogleApiWrapper"])({
  apiKey: 'AIzaSyDQGa5zZTL0G45-WQ8pn5tbMssAGJHD2xY'
})(MapContainer)); //Need to get credit card and get API key

/***/ })

})
//# sourceMappingURL=_app.js.2bac954450524ae67bd3.hot-update.js.map