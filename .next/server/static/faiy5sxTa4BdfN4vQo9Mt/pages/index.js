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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/aIJ":
/***/ (function(module, exports) {



/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "AzSJ":
/***/ (function(module, exports) {

module.exports = require("video.js");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: external "video.js"
var external_video_js_ = __webpack_require__("AzSJ");
var external_video_js_default = /*#__PURE__*/__webpack_require__.n(external_video_js_);

// CONCATENATED MODULE: ./components/Player.js
var __jsx = external_react_default.a.createElement;



class Player_Player extends external_react_["Component"] {
  componentDidMount() {
    // instantiate Video.js
    this.player = external_video_js_default()(this.videoNode, this.props, function onPlayerReady() {
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
    return __jsx("div", null, __jsx("div", {
      "data-vjs-player": true
    }, __jsx("video", {
      ref: node => this.videoNode = node,
      className: "video-js"
    })));
  }

}

/* harmony default export */ var components_Player = (Player_Player);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/video.js/dist/video-js.css
var video_js = __webpack_require__("/aIJ");

// CONCATENATED MODULE: ./components/VideoPlayer.js
var VideoPlayer_jsx = external_react_default.a.createElement;





const VideoContainer = external_styled_components_default.a.div.withConfig({
  displayName: "VideoPlayer__VideoContainer",
  componentId: "sc-7m7rkg-0"
})(["padding:0;position:relative;top:0;left:0;min-width:100%;"]);
const Poster = external_styled_components_default.a.img.attrs(props => ({
  src: '/images/video-poster.jpg'
})).withConfig({
  displayName: "VideoPlayer__Poster",
  componentId: "sc-7m7rkg-1"
})(["min-width:100%;min-height:100%;"]);
class VideoPlayer_VideoPlayer extends external_react_default.a.Component {
  render() {
    const videoJsOptions = {
      loop: true,
      autoplay: 'any',
      fluid: true,
      controls: false,
      poster: {
        Poster
      },
      sources: [{
        src: '/videos/temp2.mp4',
        type: 'video/mp4'
      }]
    };
    return VideoPlayer_jsx(VideoContainer, null, VideoPlayer_jsx(components_Player, videoJsOptions));
  }

}
// CONCATENATED MODULE: ./components/Button.js

const Button = external_styled_components_default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1t6v16c-0"
})(["&,&:link,&:visited{text-align:center;text-transform:uppercase;text-decoration:none;font-size:2.1rem;color:", ";background:", ";border:1px solid ", ";border-radius:", ";font-family:", ";letter-spacing:0;padding:", ";transition:all .2s;cursor:pointer;}&:hover{box-shadow:0 2.5rem 4rem rgba(0,0,0,0.5);color:#FFF;background-color:#12377D;transform:translateY(-.3rem);}&::after{transform:scalex(1.4) scaleY(1.6);opacity:0;}&:focus{outline:none;}&:active{outline:none;transform:translateY(-.1rem);box-shadow:0 2rem 2rem rgba(0,0,0,0.5);}"], props => props.color || props.theme.white, props => props.background || 'transparent', props => props.color || props.theme.white, props => props.br || '0', props => props.theme.MPBold, props => props.padding || '1.5rem 4rem');
// CONCATENATED MODULE: ./components/CountDownBanner.js
var CountDownBanner_jsx = external_react_default.a.createElement;



const CDBanner = external_styled_components_default.a.div.withConfig({
  displayName: "CountDownBanner__CDBanner",
  componentId: "y7fpkn-0"
})(["background-color:#134381;margin-top:0;min-width:100%;height:10rem;display:flex;justify-content:center;align-items:center;color:white;"]);
const CDContainer = external_styled_components_default.a.div.withConfig({
  displayName: "CountDownBanner__CDContainer",
  componentId: "y7fpkn-1"
})(["display:flex;max-width:50%;margin-right:2rem;"]);
const CDItem = external_styled_components_default.a.div.withConfig({
  displayName: "CountDownBanner__CDItem",
  componentId: "y7fpkn-2"
})(["font-size:3rem;font-family:", ";margin:1rem;span{margin-left:.5rem;}"], props => props.theme.MPBold);

class CountDownBanner_CountDownBanner extends external_react_["Component"] {
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
    return CountDownBanner_jsx(CDBanner, null, CountDownBanner_jsx(CDContainer, null, CountDownBanner_jsx(CDItem, null, days, CountDownBanner_jsx("span", null, "days")), CountDownBanner_jsx(CDItem, {
      className: "countdown-item"
    }, hours, CountDownBanner_jsx("span", null, "hours")), CountDownBanner_jsx(CDItem, {
      className: "countdown-item"
    }, minutes, CountDownBanner_jsx("span", null, "minutes")), CountDownBanner_jsx(CDItem, {
      className: "countdown-item"
    }, seconds, CountDownBanner_jsx("span", null, "seconds"))), CountDownBanner_jsx(Button, null, "Book Now"));
  }

}

;
/* harmony default export */ var components_CountDownBanner = (CountDownBanner_CountDownBanner);
// CONCATENATED MODULE: ./components/styles/HomeStyles.js

const StyledContainer = external_styled_components_default.a.div.withConfig({
  displayName: "HomeStyles__StyledContainer",
  componentId: "sc-1nylq97-0"
})(["display:flex;flex-flow:column;align-items:center;"]);
const StyledSection = external_styled_components_default.a.div.withConfig({
  displayName: "HomeStyles__StyledSection",
  componentId: "sc-1nylq97-1"
})(["max-width:55%;display:flex;flex-flow:column;justify-content:flex-start;margin:0 10rem;margin-top:5rem;margin-bottom:15rem;h1{font-family:", ";font-size:4.4rem;color:", ";line-height:1.1;margin-bottom:3rem;}p{font-family:", ";font-size:2rem;color:", ";margin-bottom:1rem;}.innerContainer{position:relative;display:flex;flex-flow:column;margin-top:2rem;}.mediaBox{min-width:66.4rem;max-height:33rem;overflow:hidden;display:flex;justify-content:center;align-items:center;}"], props => props.theme.MPSemibold, props => props.theme.primary, props => props.theme.MPLight, props => props.theme.primary);
// CONCATENATED MODULE: ./components/Card.js

const Card = external_styled_components_default.a.div.withConfig({
  displayName: "Card",
  componentId: "sc-1fywwyw-0"
})(["position:absolute;bottom:-12rem;left:", ";right:", ";max-width:33rem;min-height:33rem;background-color:", ";padding:4rem;padding-bottom:3.5rem;align-self:", ";display:flex;flex-flow:column;justify-content:space-between;h1{font-size:4rem;color:", ";align-self:flex-start;max-width:90%;}"], props => props.right && 'null' || props.left && '-5rem' || props.center && 'null', props => props.right && '-5rem' || props.left && 'null' || props.center && 'null', props => props.theme.primary, props => props.right && 'flex-end' || props.left && 'flex-start' || props.center && 'center', props => props.theme.white);
// CONCATENATED MODULE: ./components/AboutSection.js
var AboutSection_jsx = external_react_default.a.createElement;




function AboutSection() {
  return AboutSection_jsx(StyledSection, null, AboutSection_jsx("h1", null, "Europe's braking technology conference and exhibition"), AboutSection_jsx("p", null, "Welcome to EuroBrake, a major international forum for brake experts working in the fields of passenger cars, commercial vehicles, rail, aerospace, industry and academia. "), AboutSection_jsx("p", null, " We invite you to join us at EuroBrake 2020, which will take place in Barcelona, Spain, one of the world\u2019s leading connected, cultural and historical destinations."), AboutSection_jsx("div", {
    className: "innerContainer"
  }, AboutSection_jsx("div", {
    className: "mediaBox"
  }, AboutSection_jsx("img", {
    src: "/images/pic1.png",
    alt: "EuroBrake Greating",
    style: {
      width: '100%',
      height: '100%'
    }
  })), AboutSection_jsx(Card, {
    right: true
  }, AboutSection_jsx("h1", null, "Early bird tickets are on sale now"), AboutSection_jsx(Button, {
    br: "500rem"
  }, "Book Now"))));
}
// CONCATENATED MODULE: ./components/LocationSection.js
var LocationSection_jsx = external_react_default.a.createElement;




function LocationSection() {
  return LocationSection_jsx(StyledSection, null, LocationSection_jsx("h1", null, "Discover Barcelona"), LocationSection_jsx("p", null, "Offering an enviable climate and world-leading hub for business, Barcelona has direct links with many of the world\u2019s Capital cities, via air, road, rail and sea, making EuroBrake 2020 extremely accessible."), LocationSection_jsx("div", {
    className: "innerContainer"
  }, LocationSection_jsx("div", {
    className: "mediaBox"
  }, LocationSection_jsx("img", {
    src: "/images/pic2.png",
    alt: "Barcelona",
    style: {
      width: '100%',
      height: '100%'
    }
  })), LocationSection_jsx(Card, {
    left: true
  }, LocationSection_jsx("h1", null, "Find out more about Barcelona"), LocationSection_jsx(Button, {
    br: "500rem"
  }, "Discover"))));
}
// CONCATENATED MODULE: ./components/AttendeesSection.js
var AttendeesSection_jsx = external_react_default.a.createElement;




function AttendeesSection() {
  return AttendeesSection_jsx(StyledSection, null, AttendeesSection_jsx("h1", null, "Attendees"), AttendeesSection_jsx("p", null, "Featuring more than 120 technical presentations and 100+ international exhibitors, EuroBrake attracts a global audience of engineers, scientists, academics and executives from the industries of passenger car, commercial vehicle, rail, aerospace and the wider industrial sectors."), AttendeesSection_jsx("div", {
    className: "innerContainer"
  }, AttendeesSection_jsx("div", {
    className: "mediaBox"
  }, AttendeesSection_jsx("img", {
    src: "/images/pic1.png",
    alt: "EuroBrake Greating",
    style: {
      width: '100%',
      height: '100%'
    }
  })), AttendeesSection_jsx(Card, {
    right: true
  }, AttendeesSection_jsx("h1", null, "Who attends Eurobrake"), AttendeesSection_jsx(Button, {
    br: "500rem"
  }, "Attendees"))));
}
// CONCATENATED MODULE: ./components/ExhibitionSection.js
var ExhibitionSection_jsx = external_react_default.a.createElement;




function ExhibitionSection() {
  return ExhibitionSection_jsx(StyledSection, null, ExhibitionSection_jsx("h1", null, "Exhibition and Sponsorship"), ExhibitionSection_jsx("p", null, "EuroBrake\u2019s accompanying technical exhibition offers an ideal opportunity to present your company\u2019s products, services and technical capabilities to key decision-makers, from industry players to new entrants in specialist engineering."), ExhibitionSection_jsx("div", {
    className: "innerContainer"
  }, ExhibitionSection_jsx("div", {
    className: "mediaBox"
  }, ExhibitionSection_jsx("img", {
    src: "/images/pic2.png",
    alt: "EuroBrake Greating",
    style: {
      width: '100%',
      height: '100%'
    }
  })), ExhibitionSection_jsx(Card, {
    right: true
  }, ExhibitionSection_jsx("h1", null, "Partner your brand with EuroBrake"), ExhibitionSection_jsx(Button, {
    br: "500rem"
  }, "EXHIBIT/SPONSOR"))));
}
// CONCATENATED MODULE: ./components/StudentSection.js
var StudentSection_jsx = external_react_default.a.createElement;




function StudentSection() {
  return StudentSection_jsx(StyledSection, null, StudentSection_jsx("h1", null, "Student Opportunities Programme"), StudentSection_jsx("p", null, "The EuroBrake Student Opportunities Programme (ESOP) offers 50 students from around the world the chance to attend EuroBrake 2020."), StudentSection_jsx("p", null, "Selected students will be offered the opportunity to attend EuroBrake via a sponsorship package which offers a strong networking opportunities, a CV check/one to one career advice with HR representatives from the sponsor companies, access to the designated Student Lounge and much more."), StudentSection_jsx("div", {
    className: "innerContainer"
  }, StudentSection_jsx("div", {
    className: "mediaBox"
  }, StudentSection_jsx("img", {
    src: "/images/pic2.png",
    alt: "EuroBrake Greating",
    style: {
      width: '100%',
      height: '100%'
    }
  })), StudentSection_jsx(Card, {
    left: true
  }, StudentSection_jsx("h1", null, "Learn more about ESOP"), StudentSection_jsx(Button, {
    br: "500rem"
  }, "ESOP"))));
}
// CONCATENATED MODULE: ./components/AuthorSection.js
var AuthorSection_jsx = external_react_default.a.createElement;




function AuthorSection() {
  return AuthorSection_jsx(StyledSection, null, AuthorSection_jsx("h1", null, "Authors Area"), AuthorSection_jsx("p", null, "Presenting a paper at EuroBrake gives you the opportunity to share your latest technical ideas and achievements with influential specialists from around the world and to discuss your work with colleagues throughout the industrial and academic communities."), AuthorSection_jsx("div", {
    className: "innerContainer"
  }, AuthorSection_jsx("div", {
    className: "mediaBox"
  }, AuthorSection_jsx("img", {
    src: "/images/pic1.png",
    alt: "EuroBrake Greating",
    style: {
      width: '100%',
      height: '100%'
    }
  })), AuthorSection_jsx(Card, {
    right: true
  }, AuthorSection_jsx("h1", null, "Access the Authors Area"), AuthorSection_jsx(Button, {
    br: "500rem"
  }, "Authors Area"))));
}
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;










/* harmony default export */ var pages = __webpack_exports__["default"] = (() => pages_jsx("div", {
  className: "FullPage"
}, pages_jsx("div", {
  className: "Hero"
}, pages_jsx(VideoPlayer_VideoPlayer, null), pages_jsx(components_CountDownBanner, null)), pages_jsx(StyledContainer, null, pages_jsx(AboutSection, null), pages_jsx(LocationSection, null), pages_jsx(AttendeesSection, null), pages_jsx(ExhibitionSection, null), pages_jsx(StudentSection, null), pages_jsx(AuthorSection, null))));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });