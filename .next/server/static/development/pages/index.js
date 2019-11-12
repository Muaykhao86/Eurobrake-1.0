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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AboutSection.js":
/*!************************************!*\
  !*** ./components/AboutSection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HomeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/HomeStyles */ "./components/styles/HomeStyles.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/AboutSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function AboutSection() {
  return __jsx(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_1__["StyledSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Europe's braking technology conference and exhibition"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Welcome to EuroBrake, a major international forum for brake experts working in the fields of passenger cars, commercial vehicles, rail, aerospace, industry and academia. "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, " We invite you to join us at EuroBrake 2020, which will take place in Barcelona, Spain, one of the world\u2019s leading connected, cultural and historical destinations."), __jsx("div", {
    className: "innerContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "mediaBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: "/images/pic1.png",
    alt: "EuroBrake Greating",
    style: {
      width: '100%',
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Early bird tickets are on sale now"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    br: "500rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Book Now"))));
}

/***/ }),

/***/ "./components/AttendeesSection.js":
/*!****************************************!*\
  !*** ./components/AttendeesSection.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttendeesSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HomeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/HomeStyles */ "./components/styles/HomeStyles.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/AttendeesSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function AttendeesSection() {
  return __jsx(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_1__["StyledSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Attendees"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Featuring more than 120 technical presentations and 100+ international exhibitors, EuroBrake attracts a global audience of engineers, scientists, academics and executives from the industries of passenger car, commercial vehicle, rail, aerospace and the wider industrial sectors."), __jsx("div", {
    className: "innerContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "mediaBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: "/images/pic1.png",
    alt: "EuroBrake Greating",
    style: {
      width: '100%',
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Who attends Eurobrake"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    br: "500rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Attendees"))));
}

/***/ }),

/***/ "./components/AuthorSection.js":
/*!*************************************!*\
  !*** ./components/AuthorSection.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthorSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HomeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/HomeStyles */ "./components/styles/HomeStyles.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/AuthorSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function AuthorSection() {
  return __jsx(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_1__["StyledSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Authors Area"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Presenting a paper at EuroBrake gives you the opportunity to share your latest technical ideas and achievements with influential specialists from around the world and to discuss your work with colleagues throughout the industrial and academic communities."), __jsx("div", {
    className: "innerContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "mediaBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: "/images/pic1.png",
    alt: "EuroBrake Greating",
    style: {
      width: '100%',
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Access the Authors Area"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    br: "500rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Authors Area"))));
}

/***/ }),

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1t6v16c-0"
})(["&,&:link,&:visited{text-align:center;text-transform:uppercase;text-decoration:none;font-size:2.1rem;color:", ";background:", ";border:1px solid ", ";border-radius:", ";font-family:", ";letter-spacing:0;padding:", ";transition:all .2s;cursor:pointer;}&:hover{box-shadow:0 2.5rem 4rem rgba(0,0,0,0.5);color:#FFF;background-color:#12377D;transform:translateY(-.3rem);}&::after{transform:scalex(1.4) scaleY(1.6);opacity:0;}&:focus{outline:none;}&:active{outline:none;transform:translateY(-.1rem);box-shadow:0 2rem 2rem rgba(0,0,0,0.5);}"], props => props.color || props.theme.white, props => props.background || 'transparent', props => props.color || props.theme.white, props => props.br || '0', props => props.theme.MPBold, props => props.padding || '1.5rem 4rem');

/***/ }),

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Card",
  componentId: "sc-1fywwyw-0"
})(["position:absolute;bottom:-12rem;left:", ";right:", ";max-width:33rem;min-height:33rem;background-color:", ";padding:4rem;padding-bottom:3.5rem;align-self:", ";display:flex;flex-flow:column;justify-content:space-between;h1{font-size:4rem;color:", ";align-self:flex-start;max-width:90%;}"], props => props.right && 'null' || props.left && '-5rem' || props.center && 'null', props => props.right && '-5rem' || props.left && 'null' || props.center && 'null', props => props.theme.primary, props => props.right && 'flex-end' || props.left && 'flex-start' || props.center && 'center', props => props.theme.white);

/***/ }),

/***/ "./components/CountDownBanner.js":
/*!***************************************!*\
  !*** ./components/CountDownBanner.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/CountDownBanner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CDBanner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CountDownBanner__CDBanner",
  componentId: "y7fpkn-0"
})(["background-color:#134381;margin-top:0;min-width:100%;height:10rem;display:flex;justify-content:center;align-items:center;color:white;"]);
const CDContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CountDownBanner__CDContainer",
  componentId: "y7fpkn-1"
})(["display:flex;max-width:50%;margin-right:2rem;"]);
const CDItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CountDownBanner__CDItem",
  componentId: "y7fpkn-2"
})(["font-size:3rem;font-family:", ";margin:1rem;span{margin-left:.5rem;}"], props => props.theme.MPBold);

class CountDownBanner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const countDownDate = new Date("Jun 2, 2020 08:00:00").getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance / (1000 * 60 * 60) % 24);
      const minutes = Math.floor(distance / (1000 * 60) % 60);
      const seconds = Math.floor(distance / 1000 % 60);
      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      days,
      hours,
      minutes,
      seconds
    } = this.state;
    return __jsx(CDBanner, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx(CDContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(CDItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, days, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "days")), __jsx(CDItem, {
      className: "countdown-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, hours, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "hours")), __jsx(CDItem, {
      className: "countdown-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, minutes, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "minutes")), __jsx(CDItem, {
      className: "countdown-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, seconds, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "seconds"))), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Book Now"));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (CountDownBanner);

/***/ }),

/***/ "./components/ExhibitionSection.js":
/*!*****************************************!*\
  !*** ./components/ExhibitionSection.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExhibitionSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HomeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/HomeStyles */ "./components/styles/HomeStyles.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/ExhibitionSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ExhibitionSection() {
  return __jsx(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_1__["StyledSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Exhibition and Sponsorship"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "EuroBrake\u2019s accompanying technical exhibition offers an ideal opportunity to present your company\u2019s products, services and technical capabilities to key decision-makers, from industry players to new entrants in specialist engineering."), __jsx("div", {
    className: "innerContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "mediaBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: "/images/pic2.png",
    alt: "EuroBrake Greating",
    style: {
      width: '100%',
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Partner your brand with EuroBrake"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    br: "500rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "EXHIBIT/SPONSOR"))));
}

/***/ }),

/***/ "./components/LocationSection.js":
/*!***************************************!*\
  !*** ./components/LocationSection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocationSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HomeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/HomeStyles */ "./components/styles/HomeStyles.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/LocationSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function LocationSection() {
  return __jsx(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_1__["StyledSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Discover Barcelona"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Offering an enviable climate and world-leading hub for business, Barcelona has direct links with many of the world\u2019s Capital cities, via air, road, rail and sea, making EuroBrake 2020 extremely accessible."), __jsx("div", {
    className: "innerContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "mediaBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: "/images/pic2.png",
    alt: "Barcelona",
    style: {
      width: '100%',
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Find out more about Barcelona"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    br: "500rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Discover"))));
}

/***/ }),

/***/ "./components/Player.js":
/*!******************************!*\
  !*** ./components/Player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/Player.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Player extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    // instantiate Video.js
    this.player = video_js__WEBPACK_IMPORTED_MODULE_1___default()(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  } // destroy player on unmount


  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  } // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856


  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      "data-vjs-player": true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("video", {
      ref: node => this.videoNode = node,
      className: "video-js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./components/StudentSection.js":
/*!**************************************!*\
  !*** ./components/StudentSection.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StudentSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HomeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/HomeStyles */ "./components/styles/HomeStyles.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/StudentSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function StudentSection() {
  return __jsx(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_1__["StyledSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Student Opportunities Programme"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "The EuroBrake Student Opportunities Programme (ESOP) offers 50 students from around the world the chance to attend EuroBrake 2020."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Selected students will be offered the opportunity to attend EuroBrake via a sponsorship package which offers a strong networking opportunities, a CV check/one to one career advice with HR representatives from the sponsor companies, access to the designated Student Lounge and much more."), __jsx("div", {
    className: "innerContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "mediaBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    src: "/images/pic2.png",
    alt: "EuroBrake Greating",
    style: {
      width: '100%',
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Learn more about ESOP"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    br: "500rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "ESOP"))));
}

/***/ }),

/***/ "./components/VideoPlayer.js":
/*!***********************************!*\
  !*** ./components/VideoPlayer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player */ "./components/Player.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
/* harmony import */ var _node_modules_video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/VideoPlayer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const VideoContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "VideoPlayer__VideoContainer",
  componentId: "sc-7m7rkg-0"
})(["padding:0;position:relative;top:0;left:0;min-width:100%;"]); // const Poster = styled.img.attrs(props => ({
//   src: '/images/video-poster.jpg'
// }))`
//     min-width: 100%;
//     min-height: 100%;
// `;

class VideoPlayer extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    const videoJsOptions = {
      loop: true,
      autoplay: 'any',
      fluid: true,
      controls: false,
      // poster: {Poster},
      sources: [{
        src: '/videos/temp2.mp4',
        type: 'video/mp4'
      }]
    };
    return __jsx(VideoContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(_components_Player__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, videoJsOptions, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./components/styles/HomeStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/HomeStyles.js ***!
  \*****************************************/
/*! exports provided: StyledContainer, StyledSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContainer", function() { return StyledContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSection", function() { return StyledSection; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HomeStyles__StyledContainer",
  componentId: "sc-1nylq97-0"
})(["display:flex;flex-flow:column;align-items:center;"]);
const StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HomeStyles__StyledSection",
  componentId: "sc-1nylq97-1"
})(["max-width:55%;display:flex;flex-flow:column;justify-content:flex-start;margin:0 10rem;margin-top:5rem;margin-bottom:15rem;h1{font-family:", ";font-size:4.4rem;color:", ";line-height:1.1;margin-bottom:3rem;}p{font-family:", ";font-size:2rem;color:", ";margin-bottom:1rem;}.innerContainer{position:relative;display:flex;flex-flow:column;margin-top:2rem;}.mediaBox{min-width:66.4rem;max-height:33rem;overflow:hidden;display:flex;justify-content:center;align-items:center;}"], props => props.theme.MPSemibold, props => props.theme.primary, props => props.theme.MPLight, props => props.theme.primary);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/video.js/dist/video-js.css":
/*!*************************************************!*\
  !*** ./node_modules/video.js/dist/video-js.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_VideoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/VideoPlayer */ "./components/VideoPlayer.js");
/* harmony import */ var _components_CountDownBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CountDownBanner */ "./components/CountDownBanner.js");
/* harmony import */ var _components_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/HomeStyles */ "./components/styles/HomeStyles.js");
/* harmony import */ var _components_AboutSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutSection */ "./components/AboutSection.js");
/* harmony import */ var _components_LocationSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LocationSection */ "./components/LocationSection.js");
/* harmony import */ var _components_AttendeesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AttendeesSection */ "./components/AttendeesSection.js");
/* harmony import */ var _components_ExhibitionSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ExhibitionSection */ "./components/ExhibitionSection.js");
/* harmony import */ var _components_StudentSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/StudentSection */ "./components/StudentSection.js");
/* harmony import */ var _components_AuthorSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AuthorSection */ "./components/AuthorSection.js");
var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "FullPage",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  className: "Hero",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_components_VideoPlayer__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx(_components_CountDownBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})), __jsx(_components_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_3__["StyledContainer"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(_components_AboutSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx(_components_LocationSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx(_components_AttendeesSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx(_components_ExhibitionSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx(_components_StudentSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx(_components_AuthorSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}))));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/D.Hardiman/desktop/eurobrake/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "video.js":
/*!***************************!*\
  !*** external "video.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("video.js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map