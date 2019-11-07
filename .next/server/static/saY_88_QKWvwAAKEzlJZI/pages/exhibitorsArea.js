module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("g+BK");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "g+BK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./components/FormBuilder.js



const FormBuilder = props => console.log(props); // FormBuilder.getInitialProps = async () => {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman') ;
//     const data = await res.json();
//     console.log({data});
//     return {form: json}
// }


FormBuilder.getInitialProps = async function () {
  const res = await external_isomorphic_unfetch_default()('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    shows: data.map(entry => entry.show)
  };
};

/* harmony default export */ var components_FormBuilder = (FormBuilder);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./pages/exhibitorsArea.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exhibitorsArea_ExhibitorsArea; });

var __jsx = external_react_default.a.createElement;




const DemoDiv = external_styled_components_default.a.form.withConfig({
  displayName: "exhibitorsArea__DemoDiv",
  componentId: "sc-1h2s0md-0"
})(["display:flex;flex-direction:column;align-self:center;margin-top:10rem;max-width:", ";"], props => props.theme.maxWidth);
const Demo = external_styled_components_default.a.h1.withConfig({
  displayName: "exhibitorsArea__Demo",
  componentId: "sc-1h2s0md-1"
})(["padding:10rem;margin:5rem;color:orangered;"]);
class exhibitorsArea_ExhibitorsArea extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "saveToState", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    Object(defineProperty["a" /* default */])(this, "onSubmit", async e => {
      e.preventDefault();
      console.log('click');
      const formData = {
        username: this.state.username,
        password: this.state.password
      }; // let res = await fetch('https://prelude.eurobrake.net/login', {
      //         method: 'POST',
      //         credentials: 'include',
      //         body: JSON.stringify(formData)
      //     });
      // const data = await res.json().catch(error => console.log(error));
      // console.log(data);
      // return {
      //     loggedIn: data 
      //     }
    });

    this.state = {
      username: '',
      password: '',
      loggedIn: false
    };
  }

  render() {
    console.log(this.props);
    const {
      loggedIn
    } = this.state;
    const {
      form
    } = this.props.form;
    return __jsx(DemoDiv, null, loggedIn ? __jsx(DemoDiv, null, __jsx("h1", null, "You are logged in!!!!")) : __jsx(DemoDiv, {
      onSubmit: this.onSubmit
    }, __jsx("div", {
      className: ""
    }, __jsx("label", {
      htmlFor: "label"
    }, form[0].label), __jsx("input", {
      type: "text",
      name: form[0].name,
      onChange: this.saveToState,
      value: this.state.username
    })), __jsx("div", {
      className: ""
    }, __jsx("label", {
      htmlFor: "label"
    }, form[1].label), __jsx("input", {
      type: "password",
      name: form[1].name,
      onChange: this.saveToState,
      value: this.state.password
    })), __jsx("input", {
      type: "submit",
      value: "Submit"
    })));
  }

} // action="//2019.eurobrake.net/exhibition/exhibitors/login" SHOULD BE LOGIN FORM FOR EXHIBITORS

exhibitorsArea_ExhibitorsArea.getInitialProps = async function () {
  let res = await external_isomorphic_unfetch_default()('https://prelude.eurobrake.net/login');
  const data = await res.json().catch(error => console.log(error));
  ;
  return {
    form: data
  };
};

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

/******/ });