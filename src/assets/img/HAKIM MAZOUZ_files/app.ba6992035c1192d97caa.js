(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style/style.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style/style.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./../assets/img/me.jpg */ "./src/assets/img/me.jpg"));

// Module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  padding: 0;\n  margin: 0; }\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0; }\n\nbody {\n  background-color: #FFF8F5;\n  font-family: \"Roboto Mono\", monospace;\n  overflow: hidden; }\n  body canvas {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 20; }\n  body.rulers:before, body.rulers:after {\n    content: '';\n    opacity: 0.25;\n    position: absolute;\n    background-color: #45538B; }\n  body.rulers:before {\n    left: 0%;\n    top: calc(50% - 20px);\n    height: 1px;\n    width: 100%; }\n  body.rulers:after {\n    left: calc(50% - 20px);\n    top: 0%;\n    width: 1px;\n    height: 100%; }\n\n.wrapper {\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px; }\n\n.box {\n  border: 2px solid #091E6A;\n  background-color: white; }\n\n.main-box {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 800px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: 8; }\n  .main-box .hidden {\n    transform: translateY(40px);\n    opacity: 0; }\n  .main-box .content {\n    position: absolute;\n    display: none;\n    padding: 60px;\n    text-align: center; }\n  .main-box__message h1 {\n    text-transform: uppercase;\n    text-align: center;\n    color: #45538B; }\n    .main-box__message h1 span {\n      display: inline-block;\n      transform: rotate(90deg);\n      letter-spacing: -7px; }\n  .main-box__intro h2 {\n    text-transform: uppercase;\n    color: #45538B; }\n  .main-box__intro p {\n    line-height: 1.5;\n    margin-top: 20px;\n    min-width: 600px;\n    color: #091E6A; }\n  .main-box__agenda {\n    padding: 0 !important; }\n    .main-box__agenda header {\n      border-bottom: 2px solid #091E6A;\n      height: 30px; }\n    .main-box__agenda ul {\n      margin: 0;\n      padding-right: 60px;\n      margin-bottom: 100px;\n      text-align: left;\n      margin-top: 10px; }\n      .main-box__agenda ul li {\n        list-style: none;\n        text-transform: uppercase;\n        font-size: 20px;\n        color: rgba(69, 83, 139, 0.5);\n        padding: 10px 20px;\n        position: relative; }\n        .main-box__agenda ul li:after {\n          content: '';\n          position: absolute;\n          left: 0;\n          top: 0;\n          height: 100%;\n          width: 0px;\n          background-color: #091E6A;\n          transition: width .25s ease-out;\n          z-index: -1; }\n        .main-box__agenda ul li.active {\n          transition: color .25s ease-out;\n          color: black; }\n    .main-box__agenda .progress {\n      padding: 20px;\n      text-align: left;\n      width: calc(100% - 2px); }\n      .main-box__agenda .progress h4 {\n        font-size: 14px;\n        line-height: 1.3;\n        font-weight: 400;\n        color: #45538B;\n        margin-bottom: 5px; }\n      .main-box__agenda .progress__bar {\n        position: relative;\n        height: 2px;\n        background-color: rgba(69, 83, 139, 0.5); }\n        .main-box__agenda .progress__bar .inner {\n          height: 2px;\n          background-color: #091E6A;\n          width: 33%; }\n\n.loader {\n  height: 4px;\n  width: 0;\n  background-color: #45538B;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.slides-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: calc(100% - 300px);\n  height: 100%; }\n\n.introduction-section {\n  position: relative;\n  height: 100%;\n  padding: 5vw;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  align-content: flex-end;\n  justify-content: flex-start; }\n  .introduction-section .avatar {\n    height: 50%;\n    top: 0;\n    left: 25%;\n    width: 100%;\n    background: cover center no-repeat url(" + ___CSS_LOADER_URL___0___ + ");\n    position: absolute; }\n    .introduction-section .avatar__cover {\n      width: 100%;\n      height: 100%;\n      background-color: black; }\n  .introduction-section .info {\n    flex-basis: 100%;\n    transform: translateY(-80px); }\n    .introduction-section .info h1,\n    .introduction-section .info h2 {\n      color: #091E6A;\n      display: inline-block;\n      text-transform: uppercase; }\n    .introduction-section .info h1 {\n      font-size: 60px; }\n    .introduction-section .info h2 {\n      font-size: 30px; }\n  .introduction-section .facts {\n    flex-basis: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start; }\n    .introduction-section .facts .fact-box:first-child {\n      margin-right: 60px; }\n    .introduction-section .facts .fact-box h3 {\n      font-size: 20px;\n      text-transform: uppercase; }\n    .introduction-section .facts .fact-box ul {\n      margin: 0; }\n      .introduction-section .facts .fact-box ul li {\n        margin: 20px 0;\n        font-size: 16px;\n        list-style: none; }\n\n.experience-section {\n  position: relative;\n  height: 100%;\n  padding: 5vw;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  align-content: flex-end;\n  justify-content: flex-start; }\n", ""]);



/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/assets/img/me.jpg":
/*!*******************************!*\
  !*** ./src/assets/img/me.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0eb6e10e5f836e48c995055e535ef588.jpg";

/***/ }),

/***/ "./src/js/EventEmitter.js":
/*!********************************!*\
  !*** ./src/js/EventEmitter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-emitter */ "./node_modules/tiny-emitter/index.js");
/* harmony import */ var tiny_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tiny_emitter__WEBPACK_IMPORTED_MODULE_0__);

window.$events = window.$events || new tiny_emitter__WEBPACK_IMPORTED_MODULE_0__["TinyEmitter"]();
/* harmony default export */ __webpack_exports__["default"] = (window.$events);

/***/ }),

/***/ "./src/js/ExperienceSection.js":
/*!*************************************!*\
  !*** ./src/js/ExperienceSection.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExperienceSection; });
/* harmony import */ var _templates_experience_section_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../templates/experience-section.hbs */ "./src/templates/experience-section.hbs");
/* harmony import */ var _templates_experience_section_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_experience_section_hbs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helpers */ "./src/js/Helpers.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ExperienceSection =
/*#__PURE__*/
function () {
  function ExperienceSection(domEl) {
    _classCallCheck(this, ExperienceSection);

    domEl.innerHTML = _templates_experience_section_hbs__WEBPACK_IMPORTED_MODULE_0___default()();
    this.$ = {
      el: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.experience-section'),
      sections: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.experience-section .sections')
    };
    this.state = {
      animating: false,
      ended: false
    };
    this.animateIn();
  }

  _createClass(ExperienceSection, [{
    key: "animateIn",
    value: function animateIn() {
      var sections = this.$.sections;
      var timeline = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({
        paused: true
      });
      timeline.play();
    }
  }, {
    key: "go",
    value: function go() {
      this.animateOut();
    }
  }, {
    key: "animateOut",
    value: function animateOut() {
      var _this$$ = this.$,
          avatar = _this$$.avatar,
          title = _this$$.title,
          subtitle = _this$$.subtitle,
          factBoxes = _this$$.factBoxes;
      var timeline = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({
        paused: true
      });
      timeline.to(avatar, 1, {
        y: "-=" + window.innerHeight * 0.25,
        autoAlpha: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeIn
      }, 0).to([title, subtitle], 1, {
        y: "-=" + window.innerHeight * 0.75,
        autoAlpha: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeIn
      }, 0).to(factBoxes, 1, {
        y: "-=" + window.innerHeight,
        autoAlpha: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeIn
      }, 0).add(function () {
        return $events.emit('introduction-finished');
      }).play();
    }
  }]);

  return ExperienceSection;
}();



/***/ }),

/***/ "./src/js/Helpers.js":
/*!***************************!*\
  !*** ./src/js/Helpers.js ***!
  \***************************/
/*! exports provided: $get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$get", function() { return $get; });
function $get(query) {
  var result = document.querySelectorAll(query);

  if (!result) {
    console.error('No element found for query ', query);
    return null;
  }

  return result.length > 1 ? result : result[0];
}

/***/ }),

/***/ "./src/js/IntroTimeline.js":
/*!*********************************!*\
  !*** ./src/js/IntroTimeline.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helpers */ "./src/js/Helpers.js");



var introContent = __webpack_require__(/*! ./../templates/hello-box.hbs */ "./src/templates/hello-box.hbs")();

Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.main-box').innerHTML = introContent;
var THEME = {
  SHADOW: 'rgba(244, 234, 230, 1)'
};
var $ = {
  loader: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.loader'),
  mainBox: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.main-box'),
  mainBoxMessage: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.main-box__message'),
  introContent: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.main-box__intro'),
  agendaBox: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.main-box__agenda'),
  agendaItems: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.main-box__agenda ul li')
};
var tl = new gsap__WEBPACK_IMPORTED_MODULE_0__["TimelineMax"]({
  paused: true
});
var introDone = false;
$events.on('key-right-arrow', function () {
  return !introDone ? tl.play() : null;
});
$events.on('key-left-arrow', function () {
  return !introDone ? tl.reverse() : null;
});
tl.to($.loader, 0.25, {
  width: $.mainBox.offsetWidth
}).to($.mainBox, 0.25, {
  autoAlpha: 1,
  onComplete: function onComplete() {
    $.loader.style.visibility = 'hidden';
  }
}).set($.mainBoxMessage, {
  display: 'inline-block'
}).to($.mainBox, .5, {
  height: function height() {
    return $.mainBoxMessage.offsetHeight + 4;
  },
  width: function width() {
    return $.mainBoxMessage.offsetWidth + 4;
  },
  easing: Power4.easeIn
}).to($.mainBox, 0.25, {
  y: "-=20",
  x: "-=20",
  boxShadow: "20px 20px 0px 0px " + THEME.SHADOW
}).to($.mainBoxMessage, 0.25, {
  y: 0,
  autoAlpha: 1
}).addPause();
tl.to($.mainBoxMessage, 0.25, {
  y: 40,
  autoAlpha: 0
}).set($.mainBoxMessage, {
  display: 'none'
}).set($.introContent, {
  display: 'inline-block'
}).to($.mainBox, 0.5, {
  x: function x() {
    var difference = Math.abs($.introContent.offsetWidth - $.mainBox.offsetWidth);
    return "-=" + Math.floor(difference / 2);
  },
  y: function y() {
    var difference = Math.abs($.introContent.offsetHeight - $.mainBox.offsetHeight);
    return "-=" + Math.floor(difference / 2);
  },
  height: function height() {
    return $.introContent.offsetHeight;
  },
  width: function width() {
    return $.introContent.offsetWidth;
  },
  ease: gsap__WEBPACK_IMPORTED_MODULE_0__["Power3"].easeInOut
}).to($.introContent, 0.25, {
  y: 0,
  autoAlpha: 1
}).staggerFrom($.introContent.childNodes, 0.25, {
  y: 20,
  autoAlpha: 0
}, 0.05).addPause();
tl.to($.introContent, 0.25, {
  y: 40,
  autoAlpha: 0
}).set($.introContent, {
  display: 'none'
}).set($.agendaBox, {
  display: 'inline-block'
}).to($.mainBox, 0.5, {
  x: 40,
  y: 40,
  left: 0,
  top: 0,
  height: function height() {
    return $.agendaBox.offsetHeight;
  },
  width: function width() {
    return $.agendaBox.offsetWidth;
  },
  ease: gsap__WEBPACK_IMPORTED_MODULE_0__["Power3"].easeInOut
}).to($.agendaBox, 0.25, {
  y: 0,
  autoAlpha: 1
}).staggerFrom($.agendaItems, 0.25, {
  y: 40,
  autoAlpha: 0,
  clearProps: 'all'
}, 0.15).add(function () {
  introDone = true;
  console.log(introDone);
  $.agendaItems[0].classList.add('active');
});
/* harmony default export */ __webpack_exports__["default"] = (tl);

/***/ }),

/***/ "./src/js/IntroductionSection.js":
/*!***************************************!*\
  !*** ./src/js/IntroductionSection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntroductionSection; });
/* harmony import */ var _templates_introduction_slide_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../templates/introduction-slide.hbs */ "./src/templates/introduction-slide.hbs");
/* harmony import */ var _templates_introduction_slide_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_introduction_slide_hbs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helpers */ "./src/js/Helpers.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var IntroductionSection =
/*#__PURE__*/
function () {
  function IntroductionSection(domEl) {
    _classCallCheck(this, IntroductionSection);

    domEl.innerHTML = _templates_introduction_slide_hbs__WEBPACK_IMPORTED_MODULE_0___default()();
    this.$ = {
      el: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.introduction-section'),
      avatar: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.introduction-section .avatar'),
      avatarCover: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.introduction-section .avatar__cover'),
      info: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.introduction-section .info'),
      title: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.introduction-section .info h1'),
      subtitle: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.introduction-section .info h2'),
      factBoxes: Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["$get"])('.introduction-section .fact-box')
    };
    this.state = {
      animating: false,
      ended: false
    };
    this.animateIn();
  }

  _createClass(IntroductionSection, [{
    key: "animateIn",
    value: function animateIn() {
      var _this = this;

      var _this$$ = this.$,
          el = _this$$.el,
          avatar = _this$$.avatar,
          avatarCover = _this$$.avatarCover,
          info = _this$$.info,
          title = _this$$.title,
          subtitle = _this$$.subtitle,
          factBoxes = _this$$.factBoxes;
      var timeline = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({
        paused: true
      });
      timeline.to(avatar, 0.5, {
        scale: 0.5,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power1"].easeOut,
        autoAlpha: 1
      }).from(avatar, 1, {
        width: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
      }, 0).to(avatar, 1, {
        scale: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power3"].easeInOut
      }, 1).to(avatarCover, 1, {
        scaleX: 0,
        transformOrigin: 'right center',
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeOut
      }, 1.25).staggerFrom([title, subtitle], 0.75, {
        x: -100,
        autoAlpha: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power3"].easeOut
      }, .1, 1.5).staggerFromTo(factBoxes, 0.25, {
        autoAlpha: 0,
        x: 40,
        y: 40
      }, {
        autoAlpha: 1,
        y: 0,
        x: 0,
        // boxShadow: "20px 20px 0px 0px rgba(244, 234, 230, 1)",
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeOut
      }, 0.15, 2).add(function () {
        return _this.state.ended = true;
      }).play();
    }
  }, {
    key: "go",
    value: function go() {
      this.animateOut();
    }
  }, {
    key: "animateOut",
    value: function animateOut() {
      var _this$$2 = this.$,
          avatar = _this$$2.avatar,
          title = _this$$2.title,
          subtitle = _this$$2.subtitle,
          factBoxes = _this$$2.factBoxes;
      var timeline = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({
        paused: true
      });
      timeline.to(avatar, 1, {
        y: "-=" + window.innerHeight * 0.25,
        autoAlpha: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeIn
      }, 0).to([title, subtitle], 1, {
        y: "-=" + window.innerHeight * 0.75,
        autoAlpha: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeIn
      }, 0).to(factBoxes, 1, {
        y: "-=" + window.innerHeight,
        autoAlpha: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeIn
      }, 0).add(function () {
        return $events.emit('introduction-finished');
      }).play();
    }
  }]);

  return IntroductionSection;
}();



/***/ }),

/***/ "./src/js/Keyboard.js":
/*!****************************!*\
  !*** ./src/js/Keyboard.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ "./src/js/EventEmitter.js");


function onKeyUp(_ref) {
  var keyCode = _ref.keyCode;
  if (window.location.hostname !== 'localhost') return;
  var keyEvent;

  switch (keyCode) {
    case 32:
      keyEvent = 'key-spacebar';
      break;

    case 37:
      keyEvent = 'key-left-arrow';
      break;

    case 39:
      keyEvent = 'key-right-arrow';
      break;

    default:
      break;
  }

  if (keyEvent) {
    _EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit(keyEvent);
    if (window.socket) socket.emit('key command', keyEvent);
  }
}

window.addEventListener('keyup', onKeyUp);

/***/ }),

/***/ "./src/js/Scrollspy.js":
/*!*****************************!*\
  !*** ./src/js/Scrollspy.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function onWindowWheel(_ref) {
  var deltaY = _ref.deltaY;

  if (deltaY > 0) {
    $events.emit('scroll-down');
  }

  if (deltaY < 0) {
    $events.emit('scroll-up');
  }
}

window.addEventListener('wheel', Object(lodash__WEBPACK_IMPORTED_MODULE_0__["debounce"])(onWindowWheel, 50, {
  trailing: false,
  leading: true
}));

/***/ }),

/***/ "./src/js/SectionController.js":
/*!*************************************!*\
  !*** ./src/js/SectionController.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionController; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helpers */ "./src/js/Helpers.js");
/* harmony import */ var _IntroductionSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IntroductionSection */ "./src/js/IntroductionSection.js");
/* harmony import */ var _ExperienceSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExperienceSection */ "./src/js/ExperienceSection.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var SectionController =
/*#__PURE__*/
function () {
  function SectionController() {
    _classCallCheck(this, SectionController);

    $events.on('key-right-arrow', this.forward.bind(this));
    $events.on('scroll-down', this.forward.bind(this));
    $events.on('key-left-arrow', this.back.bind(this));
    $events.on('scroll-up', this.back.bind(this));
    this.currentSection = new _IntroductionSection__WEBPACK_IMPORTED_MODULE_1__["default"](Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["$get"])('.slides-container'));
    this.$ = {
      slidesContainer: Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["$get"])('.slides-container'),
      indicator: Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["$get"])('.main-box__agenda .indicator'),
      progress: Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["$get"])('.main-box__agenda .progress'),
      progressNumber: Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["$get"])('.main-box__agenda .progress h4'),
      progressBar: Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["$get"])('.main-box__agenda .progress'),
      progressBarInner: Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["$get"])('.main-box__agenda .progress__bar .inner'),
      agendaItems: Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["$get"])('.main-box__agenda ul li')
    };
    $events.on('introduction-finished', this.endIntroduction.bind(this));
    $events.on('experience-finished', this.endExperience);
    $events.on('projects-finished', this.endProjects);
    $events.on('progress-changed', this.onProgressChange.bind(this));
  }

  _createClass(SectionController, [{
    key: "forward",
    value: function forward() {
      console.log('FORWARD', this.currentSection, this.currentSection.state);
      if (this.currentSection.state.ended) this.currentSection.animateOut();
    }
  }, {
    key: "back",
    value: function back() {}
  }, {
    key: "onProgressChange",
    value: function onProgressChange(_ref) {
      var _this = this;

      var current = _ref.current,
          max = _ref.max;
      var currentFormatted = current < 10 ? "0".concat(current) : current;
      var maxFormatted = max < 10 ? "0".concat(max) : max;
      console.log(this.$);
      TweenMax.to(this.$.progressNumber, 0.15, {
        x: 20,
        opacity: 0,
        onComplete: function onComplete() {
          _this.$.progressNumber.innerText = current === max ? 'next' : "".concat(currentFormatted, "/").concat(maxFormatted);
          TweenMax.to(_this.$.progressBarInner, 0.25, {
            width: current / max * 100 + '%'
          });
          TweenMax.fromTo(_this.$.progressNumber, 0.15, {
            x: -20,
            opacity: 0
          }, {
            x: 0,
            opacity: 1
          });
        }
      });
    }
  }, {
    key: "endIntroduction",
    value: function endIntroduction() {
      console.log('we ending intro');
      this.$.agendaItems[0].classList.remove('active');
      this.$.agendaItems[1].classList.add('active');
      $events.emit('progress-changed', {
        current: 8,
        max: 10
      });
      this.currentSection = new _ExperienceSection__WEBPACK_IMPORTED_MODULE_2__["default"](this.$.slidesContainer);
    }
  }]);

  return SectionController;
}();



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_EventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/EventEmitter */ "./src/js/EventEmitter.js");
/* harmony import */ var _js_Keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Keyboard */ "./src/js/Keyboard.js");
/* harmony import */ var _js_Scrollspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/Scrollspy */ "./src/js/Scrollspy.js");
/* harmony import */ var _js_IntroTimeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/IntroTimeline */ "./src/js/IntroTimeline.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_SectionController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/SectionController */ "./src/js/SectionController.js");






 // import './js/Sketch'

window.onload = function () {
  _js_IntroTimeline__WEBPACK_IMPORTED_MODULE_4__["default"].play();
  _js_IntroTimeline__WEBPACK_IMPORTED_MODULE_4__["default"].eventCallback('onComplete', function () {
    window.SectionController = new _js_SectionController__WEBPACK_IMPORTED_MODULE_6__["default"]();
  });
}; // window.socket = io('http://49eee30b.ngrok.io');
// window.onbeforeunload = () => {
// 	socket.emit('reload')
// }
// socket.on('command', function (event) {
// 	console.log(event);
// 	$events.emit(event.key)
// })
// socket.on('reload', function (event) {
// 	window.location.reload()
// })

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/templates/experience-section.hbs":
/*!**********************************************!*\
  !*** ./src/templates/experience-section.hbs ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"experience-section\">\n	<div class=\"section\">\n		<h1>Plant</h1>\n		<h3>Junior front-end develpper</h3>\n	</div>\n	<div class=\"section\">\n		<h1>Dwarf</h1>\n		<h3>Front-end develpper</h3>\n	</div>\n	<div class=\"section\">\n		<h1>Nomadic</h1>\n		<h3>Creative technologist</h3>\n	</div>\n</div>";
},"useData":true});

/***/ }),

/***/ "./src/templates/hello-box.hbs":
/*!*************************************!*\
  !*** ./src/templates/hello-box.hbs ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"main-box__message hidden content\">\n	<h1>Hi Jonas<br><span>:)</span></h1>\n</div>\n\n<div class=\"main-box__intro hidden content\">\n	<h2>Nice to meet you</h2>\n	<p>Thanks for spending this time with me to help me figure out what the next step is for me. I greatly appreciate\n		this favour from you and hope to reciprocate it in the near future.</p>\n	<p>I will try and keep it short. Now, for the agenda</p>\n</div>\n\n<div class=\"main-box__agenda hidden content\">\n	<header></header>\n	<ul>\n		<li>Introduction</li>\n		<li>Experience</li>\n		<li>Projects</li>\n		<li>Questions</li>\n	</ul>\n	<div class=\"progress\">\n		<h4>00/00</h4>\n		<div class=\"progress__bar\">\n			<div class=\"inner\"></div>\n		</div>\n	</div>\n</div>";
},"useData":true});

/***/ }),

/***/ "./src/templates/introduction-slide.hbs":
/*!**********************************************!*\
  !*** ./src/templates/introduction-slide.hbs ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"introduction-section\">\n	<div class=\"avatar\">\n		<div class=\"avatar__cover\"></div>\n	</div>\n	<div class=\"info\">\n		<h1>Hakim Mazouz</h1><br>\n		<h2>Creative Technologist</h2>\n	</div>\n\n	<div class=\"facts\">\n		<div class=\"fact-box\">\n			<h3>Quick facts</h3>\n			<ul>\n				<li>📍 Copenhagen, Denmark</li>\n				<li>✊🏾 Moroccan Berber</li>\n				<li>🎮 Lifelong Gamer</li>\n			</ul>\n		</div>\n		<div class=\"fact-box\">\n			<h3>Skills</h3>\n			<ul>\n				<li>🌍 Love everything WWW</li>\n				<li>🤤 Dopamine is my middle name</li>\n				<li>🃏 Wildcard</li>\n			</ul>\n		</div>\n	</div>\n</div>";
},"useData":true});

/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:8080 ./src/main.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/abdulhakimmazouz/Code/nomadic/berlingo/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8080 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8080");
module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2hvdCBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvbG9nJCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltZy9tZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0V2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvRXhwZXJpZW5jZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0ludHJvVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0ludHJvZHVjdGlvblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TY3JvbGxzcHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlY3Rpb25Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzPzQ0ODkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9leHBlcmllbmNlLXNlY3Rpb24uaGJzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvaGVsbG8tYm94LmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2ludHJvZHVjdGlvbi1zbGlkZS5oYnMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCIkZXZlbnRzIiwiVGlueUVtaXR0ZXIiLCJFeHBlcmllbmNlU2VjdGlvbiIsImRvbUVsIiwiaW5uZXJIVE1MIiwiZXhwZXJpZW5jZVRlbXBsYXRlIiwiJCIsImVsIiwiJGdldCIsInNlY3Rpb25zIiwic3RhdGUiLCJhbmltYXRpbmciLCJlbmRlZCIsImFuaW1hdGVJbiIsInRpbWVsaW5lIiwiVGltZWxpbmVNYXgiLCJwYXVzZWQiLCJwbGF5IiwiYW5pbWF0ZU91dCIsImF2YXRhciIsInRpdGxlIiwic3VidGl0bGUiLCJmYWN0Qm94ZXMiLCJ0byIsInkiLCJpbm5lckhlaWdodCIsImF1dG9BbHBoYSIsImVhc2UiLCJQb3dlcjIiLCJlYXNlSW4iLCJhZGQiLCJlbWl0IiwicXVlcnkiLCJyZXN1bHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwiZXJyb3IiLCJsZW5ndGgiLCJpbnRyb0NvbnRlbnQiLCJyZXF1aXJlIiwiVEhFTUUiLCJTSEFET1ciLCJsb2FkZXIiLCJtYWluQm94IiwibWFpbkJveE1lc3NhZ2UiLCJhZ2VuZGFCb3giLCJhZ2VuZGFJdGVtcyIsInRsIiwiaW50cm9Eb25lIiwib24iLCJyZXZlcnNlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIm9uQ29tcGxldGUiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJzZXQiLCJkaXNwbGF5IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWFzaW5nIiwiUG93ZXI0IiwieCIsImJveFNoYWRvdyIsImFkZFBhdXNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJmbG9vciIsIlBvd2VyMyIsImVhc2VJbk91dCIsInN0YWdnZXJGcm9tIiwiY2hpbGROb2RlcyIsImxlZnQiLCJ0b3AiLCJjbGVhclByb3BzIiwibG9nIiwiY2xhc3NMaXN0IiwiSW50cm9kdWN0aW9uU2VjdGlvbiIsImludHJvZHVjdGlvblRlbXBsYXRlIiwiYXZhdGFyQ292ZXIiLCJpbmZvIiwic2NhbGUiLCJQb3dlcjEiLCJlYXNlT3V0IiwiZnJvbSIsInNjYWxlWCIsInRyYW5zZm9ybU9yaWdpbiIsInN0YWdnZXJGcm9tVG8iLCJvbktleVVwIiwia2V5Q29kZSIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJrZXlFdmVudCIsInNvY2tldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1doZWVsIiwiZGVsdGFZIiwiZGVib3VuY2UiLCJ0cmFpbGluZyIsImxlYWRpbmciLCJTZWN0aW9uQ29udHJvbGxlciIsImZvcndhcmQiLCJiaW5kIiwiYmFjayIsImN1cnJlbnRTZWN0aW9uIiwic2xpZGVzQ29udGFpbmVyIiwiaW5kaWNhdG9yIiwicHJvZ3Jlc3MiLCJwcm9ncmVzc051bWJlciIsInByb2dyZXNzQmFyIiwicHJvZ3Jlc3NCYXJJbm5lciIsImVuZEludHJvZHVjdGlvbiIsImVuZEV4cGVyaWVuY2UiLCJlbmRQcm9qZWN0cyIsIm9uUHJvZ3Jlc3NDaGFuZ2UiLCJjdXJyZW50IiwibWF4IiwiY3VycmVudEZvcm1hdHRlZCIsIm1heEZvcm1hdHRlZCIsIlR3ZWVuTWF4Iiwib3BhY2l0eSIsImlubmVyVGV4dCIsImZyb21UbyIsInJlbW92ZSIsIm9ubG9hZCIsImludHJvVGltZWxpbmUiLCJldmVudENhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxzSEFBMEQ7QUFDbEYseUNBQXlDLG1CQUFPLENBQUMsdURBQXdCOztBQUV6RTtBQUNBLGNBQWMsUUFBUyxNQUFNLDJCQUEyQix3Q0FBd0MsZUFBZSxjQUFjLEVBQUUsaUJBQWlCLGVBQWUsY0FBYyxFQUFFLFVBQVUsOEJBQThCLDRDQUE0QyxxQkFBcUIsRUFBRSxpQkFBaUIsc0JBQXNCLGFBQWEsY0FBYyxrQkFBa0IsRUFBRSwyQ0FBMkMsa0JBQWtCLG9CQUFvQix5QkFBeUIsZ0NBQWdDLEVBQUUsd0JBQXdCLGVBQWUsNEJBQTRCLGtCQUFrQixrQkFBa0IsRUFBRSx1QkFBdUIsNkJBQTZCLGNBQWMsaUJBQWlCLG1CQUFtQixFQUFFLGNBQWMsZ0JBQWdCLG1CQUFtQixrQkFBa0IsRUFBRSxVQUFVLDhCQUE4Qiw0QkFBNEIsRUFBRSxlQUFlLG9CQUFvQixjQUFjLGFBQWEscUNBQXFDLGlCQUFpQixlQUFlLHFCQUFxQixlQUFlLEVBQUUsdUJBQXVCLGtDQUFrQyxpQkFBaUIsRUFBRSx3QkFBd0IseUJBQXlCLG9CQUFv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LHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNuQmYsaUJBQWlCLG1CQUFPLENBQUMsc0ZBQTBDO0FBQ25FLHlCQUF5Qix1REFBdUQ7QUFDaEYsaUVBQWlFO0FBQ2pFO0FBQ0EsQ0FBQyxnQkFBZ0IsRTs7Ozs7Ozs7Ozs7QUNKakIsaUJBQWlCLG1CQUFPLENBQUMsc0ZBQTBDO0FBQ25FLHlCQUF5Qix1REFBdUQ7QUFDaEYsaUVBQWlFO0FBQ2pFO0FBQ0EsQ0FBQyxnQkFBZ0IsRTs7Ozs7Ozs7Ozs7QUNKakIsaUJBQWlCLG1CQUFPLENBQUMsc0ZBQTBDO0FBQ25FLHlCQUF5Qix1REFBdUQ7QUFDaEYsaUVBQWlFO0FBQ2pFO0FBQ0EsQ0FBQyxnQkFBZ0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmpCLGUiLCJmaWxlIjoiYXBwLmJhNjk5MjAzNWMxMTkyZDk3Y2FhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIHVybEVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4vLi4vYXNzZXRzL2ltZy9tZS5qcGdcIikpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDsgfVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOEY1O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gIGJvZHkgY2FudmFzIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDIwOyB9XFxuICBib2R5LnJ1bGVyczpiZWZvcmUsIGJvZHkucnVsZXJzOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NTM4QjsgfVxcbiAgYm9keS5ydWxlcnM6YmVmb3JlIHtcXG4gICAgbGVmdDogMCU7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAyMHB4KTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICBib2R5LnJ1bGVyczphZnRlciB7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XFxuICAgIHRvcDogMCU7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMTAwJTsgfVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuLmJveCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDkxRTZBO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG5cXG4ubWFpbi1ib3gge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogODsgfVxcbiAgLm1haW4tYm94IC5oaWRkZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIC5tYWluLWJveCAuY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogNjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAubWFpbi1ib3hfX21lc3NhZ2UgaDEge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjNDU1MzhCOyB9XFxuICAgIC5tYWluLWJveF9fbWVzc2FnZSBoMSBzcGFuIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtN3B4OyB9XFxuICAubWFpbi1ib3hfX2ludHJvIGgyIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICM0NTUzOEI7IH1cXG4gIC5tYWluLWJveF9faW50cm8gcCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogNjAwcHg7XFxuICAgIGNvbG9yOiAjMDkxRTZBOyB9XFxuICAubWFpbi1ib3hfX2FnZW5kYSB7XFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxcbiAgICAubWFpbi1ib3hfX2FnZW5kYSBoZWFkZXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDkxRTZBO1xcbiAgICAgIGhlaWdodDogMzBweDsgfVxcbiAgICAubWFpbi1ib3hfX2FnZW5kYSB1bCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAgICAgLm1haW4tYm94X19hZ2VuZGEgdWwgbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBjb2xvcjogcmdiYSg2OSwgODMsIDEzOSwgMC41KTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAgICAgLm1haW4tYm94X19hZ2VuZGEgdWwgbGk6YWZ0ZXIge1xcbiAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgd2lkdGg6IDBweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MUU2QTtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjI1cyBlYXNlLW91dDtcXG4gICAgICAgICAgei1pbmRleDogLTE7IH1cXG4gICAgICAgIC5tYWluLWJveF9fYWdlbmRhIHVsIGxpLmFjdGl2ZSB7XFxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4yNXMgZWFzZS1vdXQ7XFxuICAgICAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICAubWFpbi1ib3hfX2FnZW5kYSAucHJvZ3Jlc3Mge1xcbiAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTsgfVxcbiAgICAgIC5tYWluLWJveF9fYWdlbmRhIC5wcm9ncmVzcyBoNCB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGNvbG9yOiAjNDU1MzhCO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XFxuICAgICAgLm1haW4tYm94X19hZ2VuZGEgLnByb2dyZXNzX19iYXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY5LCA4MywgMTM5LCAwLjUpOyB9XFxuICAgICAgICAubWFpbi1ib3hfX2FnZW5kYSAucHJvZ3Jlc3NfX2JhciAuaW5uZXIge1xcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MUU2QTtcXG4gICAgICAgICAgd2lkdGg6IDMzJTsgfVxcblxcbi5sb2FkZXIge1xcbiAgaGVpZ2h0OiA0cHg7XFxuICB3aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTUzOEI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XFxuXFxuLnNsaWRlcy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmludHJvZHVjdGlvbi1zZWN0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDV2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcbiAgLmludHJvZHVjdGlvbi1zZWN0aW9uIC5hdmF0YXIge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAyNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiBjb3ZlciBjZW50ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAgIC5pbnRyb2R1Y3Rpb24tc2VjdGlvbiAuYXZhdGFyX19jb3ZlciB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyB9XFxuICAuaW50cm9kdWN0aW9uLXNlY3Rpb24gLmluZm8ge1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwcHgpOyB9XFxuICAgIC5pbnRyb2R1Y3Rpb24tc2VjdGlvbiAuaW5mbyBoMSxcXG4gICAgLmludHJvZHVjdGlvbi1zZWN0aW9uIC5pbmZvIGgyIHtcXG4gICAgICBjb2xvcjogIzA5MUU2QTtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcbiAgICAuaW50cm9kdWN0aW9uLXNlY3Rpb24gLmluZm8gaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogNjBweDsgfVxcbiAgICAuaW50cm9kdWN0aW9uLXNlY3Rpb24gLmluZm8gaDIge1xcbiAgICAgIGZvbnQtc2l6ZTogMzBweDsgfVxcbiAgLmludHJvZHVjdGlvbi1zZWN0aW9uIC5mYWN0cyB7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG4gICAgLmludHJvZHVjdGlvbi1zZWN0aW9uIC5mYWN0cyAuZmFjdC1ib3g6Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1yaWdodDogNjBweDsgfVxcbiAgICAuaW50cm9kdWN0aW9uLXNlY3Rpb24gLmZhY3RzIC5mYWN0LWJveCBoMyB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG4gICAgLmludHJvZHVjdGlvbi1zZWN0aW9uIC5mYWN0cyAuZmFjdC1ib3ggdWwge1xcbiAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAgIC5pbnRyb2R1Y3Rpb24tc2VjdGlvbiAuZmFjdHMgLmZhY3QtYm94IHVsIGxpIHtcXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbi5leHBlcmllbmNlLXNlY3Rpb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuXCIsIFwiXCJdKTtcblxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdCBzeW5jIF5cXFxcLlxcXFwvbG9nJFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBlYjZlMTBlNWY4MzZlNDhjOTk1MDU1ZTUzNWVmNTg4LmpwZ1wiOyIsImltcG9ydCB7XG5cdFRpbnlFbWl0dGVyXG59IGZyb20gJ3RpbnktZW1pdHRlcic7XG5cbndpbmRvdy4kZXZlbnRzID0gd2luZG93LiRldmVudHMgfHwgbmV3IFRpbnlFbWl0dGVyKClcblxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3cuJGV2ZW50cyIsImltcG9ydCBleHBlcmllbmNlVGVtcGxhdGUgZnJvbSAnLi8uLi90ZW1wbGF0ZXMvZXhwZXJpZW5jZS1zZWN0aW9uLmhicydcbmltcG9ydCB7XG5cdCRnZXRcbn0gZnJvbSAnLi9IZWxwZXJzJztcbmltcG9ydCB7XG5cdFR3ZWVuTWF4LFxuXHRUaW1lbGluZU1heCxcblx0UG93ZXIyLFxuXHRQb3dlcjEsXG5cdFBvd2VyM1xufSBmcm9tICdnc2FwJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVyaWVuY2VTZWN0aW9uIHtcblx0Y29uc3RydWN0b3IoZG9tRWwpIHtcblx0XHRkb21FbC5pbm5lckhUTUwgPSBleHBlcmllbmNlVGVtcGxhdGUoKTtcblx0XHR0aGlzLiQgPSB7XG5cdFx0XHRlbDogJGdldCgnLmV4cGVyaWVuY2Utc2VjdGlvbicpLFxuXHRcdFx0c2VjdGlvbnM6ICRnZXQoJy5leHBlcmllbmNlLXNlY3Rpb24gLnNlY3Rpb25zJyksXG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRhbmltYXRpbmc6IGZhbHNlLFxuXHRcdFx0ZW5kZWQ6IGZhbHNlXG5cdFx0fVxuXG5cdFx0dGhpcy5hbmltYXRlSW4oKTtcblx0fVxuXHRhbmltYXRlSW4oKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0c2VjdGlvbnNcblx0XHR9ID0gdGhpcy4kO1xuXHRcdGNvbnN0IHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lTWF4KHtcblx0XHRcdHBhdXNlZDogdHJ1ZVxuXHRcdH0pO1xuXG5cdFx0dGltZWxpbmUucGxheSgpXG5cdH1cblxuXHRnbygpIHtcblx0XHR0aGlzLmFuaW1hdGVPdXQoKTtcblx0fVxuXG5cdGFuaW1hdGVPdXQoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXZhdGFyLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHRzdWJ0aXRsZSxcblx0XHRcdGZhY3RCb3hlc1xuXHRcdH0gPSB0aGlzLiQ7XG5cdFx0Y29uc3QgdGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoe1xuXHRcdFx0cGF1c2VkOiB0cnVlXG5cdFx0fSk7XG5cblx0XHR0aW1lbGluZS50byhhdmF0YXIsIDEsIHtcblx0XHRcdHk6IFwiLT1cIiArIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMjUsXG5cdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRlYXNlOiBQb3dlcjIuZWFzZUluXG5cdFx0fSwgMCkudG8oW3RpdGxlLCBzdWJ0aXRsZV0sIDEsIHtcblx0XHRcdHk6IFwiLT1cIiArIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNzUsXG5cdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRlYXNlOiBQb3dlcjIuZWFzZUluXG5cdFx0fSwgMCkudG8oZmFjdEJveGVzLCAxLCB7XG5cdFx0XHR5OiBcIi09XCIgKyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRlYXNlOiBQb3dlcjIuZWFzZUluXG5cdFx0fSwgMCkuYWRkKCgpID0+ICRldmVudHMuZW1pdCgnaW50cm9kdWN0aW9uLWZpbmlzaGVkJykpLnBsYXkoKTtcblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiAkZ2V0KHF1ZXJ5KSB7XG5cdGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpO1xuXHRpZiAoIXJlc3VsdCkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ05vIGVsZW1lbnQgZm91bmQgZm9yIHF1ZXJ5ICcsIHF1ZXJ5KTtcblx0XHRyZXR1cm4gbnVsbFxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdC5sZW5ndGggPiAxID8gcmVzdWx0IDogcmVzdWx0WzBdXG59IiwiaW1wb3J0IHtcblx0VGltZWxpbmVNYXgsXG5cdFBvd2VyM1xufSBmcm9tIFwiZ3NhcFwiO1xuXG5pbXBvcnQge1xuXHQkZ2V0XG59IGZyb20gJy4vSGVscGVycydcblxuY29uc3QgaW50cm9Db250ZW50ID0gcmVxdWlyZSgnLi8uLi90ZW1wbGF0ZXMvaGVsbG8tYm94LmhicycpKClcbiRnZXQoJy5tYWluLWJveCcpLmlubmVySFRNTCA9IGludHJvQ29udGVudDtcblxuY29uc3QgVEhFTUUgPSB7XG5cdFNIQURPVzogJ3JnYmEoMjQ0LCAyMzQsIDIzMCwgMSknXG59XG5jb25zdCAkID0ge1xuXHRsb2FkZXI6ICRnZXQoJy5sb2FkZXInKSxcblx0bWFpbkJveDogJGdldCgnLm1haW4tYm94JyksXG5cdG1haW5Cb3hNZXNzYWdlOiAkZ2V0KCcubWFpbi1ib3hfX21lc3NhZ2UnKSxcblx0aW50cm9Db250ZW50OiAkZ2V0KCcubWFpbi1ib3hfX2ludHJvJyksXG5cdGFnZW5kYUJveDogJGdldCgnLm1haW4tYm94X19hZ2VuZGEnKSxcblx0YWdlbmRhSXRlbXM6ICRnZXQoJy5tYWluLWJveF9fYWdlbmRhIHVsIGxpJylcbn1cbmNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHtcblx0cGF1c2VkOiB0cnVlXG59KTtcblxubGV0IGludHJvRG9uZSA9IGZhbHNlO1xuXG4kZXZlbnRzLm9uKCdrZXktcmlnaHQtYXJyb3cnLCAoKSA9PiAhaW50cm9Eb25lID8gdGwucGxheSgpIDogbnVsbClcbiRldmVudHMub24oJ2tleS1sZWZ0LWFycm93JywgKCkgPT4gIWludHJvRG9uZSA/IHRsLnJldmVyc2UoKSA6IG51bGwpXG5cbnRsLnRvKCQubG9hZGVyLCAwLjI1LCB7XG5cdFx0d2lkdGg6ICQubWFpbkJveC5vZmZzZXRXaWR0aFxuXHR9KVxuXHQudG8oJC5tYWluQm94LCAwLjI1LCB7XG5cdFx0YXV0b0FscGhhOiAxLFxuXHRcdG9uQ29tcGxldGU6ICgpID0+IHtcblx0XHRcdCQubG9hZGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuXHRcdH1cblx0fSlcblx0LnNldCgkLm1haW5Cb3hNZXNzYWdlLCB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaydcblx0fSlcblx0LnRvKCQubWFpbkJveCwgLjUsIHtcblx0XHRoZWlnaHQ6ICgpID0+ICQubWFpbkJveE1lc3NhZ2Uub2Zmc2V0SGVpZ2h0ICsgNCxcblx0XHR3aWR0aDogKCkgPT4gJC5tYWluQm94TWVzc2FnZS5vZmZzZXRXaWR0aCArIDQsXG5cdFx0ZWFzaW5nOiBQb3dlcjQuZWFzZUluLFxuXHR9KVxuXHQudG8oJC5tYWluQm94LCAwLjI1LCB7XG5cdFx0eTogXCItPTIwXCIsXG5cdFx0eDogXCItPTIwXCIsXG5cdFx0Ym94U2hhZG93OiBcIjIwcHggMjBweCAwcHggMHB4IFwiICsgVEhFTUUuU0hBRE9XLFxuXHR9KVxuXHQudG8oJC5tYWluQm94TWVzc2FnZSwgMC4yNSwge1xuXHRcdHk6IDAsXG5cdFx0YXV0b0FscGhhOiAxLFxuXHR9KVxuXHQuYWRkUGF1c2UoKVxuXG50bC50bygkLm1haW5Cb3hNZXNzYWdlLCAwLjI1LCB7XG5cdFx0eTogNDAsXG5cdFx0YXV0b0FscGhhOiAwLFxuXHR9KVxuXHQuc2V0KCQubWFpbkJveE1lc3NhZ2UsIHtcblx0XHRkaXNwbGF5OiAnbm9uZSdcblx0fSkuc2V0KCQuaW50cm9Db250ZW50LCB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaydcblx0fSkudG8oJC5tYWluQm94LCAwLjUsIHtcblx0XHR4OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoJC5pbnRyb0NvbnRlbnQub2Zmc2V0V2lkdGggLSAkLm1haW5Cb3gub2Zmc2V0V2lkdGgpXG5cdFx0XHRyZXR1cm4gXCItPVwiICsgTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvIDIpKVxuXHRcdH0sXG5cdFx0eTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKCQuaW50cm9Db250ZW50Lm9mZnNldEhlaWdodCAtICQubWFpbkJveC5vZmZzZXRIZWlnaHQpXG5cdFx0XHRyZXR1cm4gXCItPVwiICsgTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvIDIpKVxuXHRcdH0sXG5cdFx0aGVpZ2h0OiAoKSA9PiAkLmludHJvQ29udGVudC5vZmZzZXRIZWlnaHQsXG5cdFx0d2lkdGg6ICgpID0+ICQuaW50cm9Db250ZW50Lm9mZnNldFdpZHRoLFxuXHRcdGVhc2U6IFBvd2VyMy5lYXNlSW5PdXQsXG5cdH0pLnRvKCQuaW50cm9Db250ZW50LCAwLjI1LCB7XG5cdFx0eTogMCxcblx0XHRhdXRvQWxwaGE6IDFcblx0fSkuc3RhZ2dlckZyb20oJC5pbnRyb0NvbnRlbnQuY2hpbGROb2RlcywgMC4yNSwge1xuXHRcdHk6IDIwLFxuXHRcdGF1dG9BbHBoYTogMFxuXHR9LCAwLjA1KS5hZGRQYXVzZSgpXG5cbnRsLnRvKCQuaW50cm9Db250ZW50LCAwLjI1LCB7XG5cdHk6IDQwLFxuXHRhdXRvQWxwaGE6IDBcbn0pLnNldCgkLmludHJvQ29udGVudCwge1xuXHRkaXNwbGF5OiAnbm9uZSdcbn0pLnNldCgkLmFnZW5kYUJveCwge1xuXHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xufSkudG8oJC5tYWluQm94LCAwLjUsIHtcblx0eDogNDAsXG5cdHk6IDQwLFxuXHRsZWZ0OiAwLFxuXHR0b3A6IDAsXG5cdGhlaWdodDogKCkgPT4gJC5hZ2VuZGFCb3gub2Zmc2V0SGVpZ2h0LFxuXHR3aWR0aDogKCkgPT4gJC5hZ2VuZGFCb3gub2Zmc2V0V2lkdGgsXG5cdGVhc2U6IFBvd2VyMy5lYXNlSW5PdXQsXG59KS50bygkLmFnZW5kYUJveCwgMC4yNSwge1xuXHR5OiAwLFxuXHRhdXRvQWxwaGE6IDFcbn0pLnN0YWdnZXJGcm9tKCQuYWdlbmRhSXRlbXMsIDAuMjUsIHtcblx0eTogNDAsXG5cdGF1dG9BbHBoYTogMCxcblx0Y2xlYXJQcm9wczogJ2FsbCdcbn0sIDAuMTUpLmFkZCgoKSA9PiB7XG5cdGludHJvRG9uZSA9IHRydWU7XG5cdGNvbnNvbGUubG9nKGludHJvRG9uZSlcblx0JC5hZ2VuZGFJdGVtc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgdGwiLCJpbXBvcnQgaW50cm9kdWN0aW9uVGVtcGxhdGUgZnJvbSAnLi8uLi90ZW1wbGF0ZXMvaW50cm9kdWN0aW9uLXNsaWRlLmhicydcbmltcG9ydCB7XG5cdCRnZXRcbn0gZnJvbSAnLi9IZWxwZXJzJztcbmltcG9ydCB7XG5cdFR3ZWVuTWF4LFxuXHRUaW1lbGluZU1heCxcblx0UG93ZXIyLFxuXHRQb3dlcjEsXG5cdFBvd2VyM1xufSBmcm9tICdnc2FwJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludHJvZHVjdGlvblNlY3Rpb24ge1xuXHRjb25zdHJ1Y3Rvcihkb21FbCkge1xuXHRcdGRvbUVsLmlubmVySFRNTCA9IGludHJvZHVjdGlvblRlbXBsYXRlKCk7XG5cdFx0dGhpcy4kID0ge1xuXHRcdFx0ZWw6ICRnZXQoJy5pbnRyb2R1Y3Rpb24tc2VjdGlvbicpLFxuXHRcdFx0YXZhdGFyOiAkZ2V0KCcuaW50cm9kdWN0aW9uLXNlY3Rpb24gLmF2YXRhcicpLFxuXHRcdFx0YXZhdGFyQ292ZXI6ICRnZXQoJy5pbnRyb2R1Y3Rpb24tc2VjdGlvbiAuYXZhdGFyX19jb3ZlcicpLFxuXHRcdFx0aW5mbzogJGdldCgnLmludHJvZHVjdGlvbi1zZWN0aW9uIC5pbmZvJyksXG5cdFx0XHR0aXRsZTogJGdldCgnLmludHJvZHVjdGlvbi1zZWN0aW9uIC5pbmZvIGgxJyksXG5cdFx0XHRzdWJ0aXRsZTogJGdldCgnLmludHJvZHVjdGlvbi1zZWN0aW9uIC5pbmZvIGgyJyksXG5cdFx0XHRmYWN0Qm94ZXM6ICRnZXQoJy5pbnRyb2R1Y3Rpb24tc2VjdGlvbiAuZmFjdC1ib3gnKVxuXHRcdH1cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0YW5pbWF0aW5nOiBmYWxzZSxcblx0XHRcdGVuZGVkOiBmYWxzZVxuXHRcdH1cblxuXHRcdHRoaXMuYW5pbWF0ZUluKCk7XG5cdH1cblx0YW5pbWF0ZUluKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGVsLFxuXHRcdFx0YXZhdGFyLFxuXHRcdFx0YXZhdGFyQ292ZXIsXG5cdFx0XHRpbmZvLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHRzdWJ0aXRsZSxcblx0XHRcdGZhY3RCb3hlc1xuXHRcdH0gPSB0aGlzLiQ7XG5cdFx0Y29uc3QgdGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoe1xuXHRcdFx0cGF1c2VkOiB0cnVlXG5cdFx0fSk7XG5cblx0XHR0aW1lbGluZVxuXHRcdFx0LnRvKGF2YXRhciwgMC41LCB7XG5cdFx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHRcdGVhc2U6IFBvd2VyMS5lYXNlT3V0LFxuXHRcdFx0XHRhdXRvQWxwaGE6IDFcblx0XHRcdH0pXG5cdFx0XHQuZnJvbShhdmF0YXIsIDEsIHtcblx0XHRcdFx0d2lkdGg6IDAsXG5cdFx0XHRcdGVhc2U6IFBvd2VyMi5lYXNlSW5PdXRcblx0XHRcdH0sIDApXG5cdFx0XHQudG8oYXZhdGFyLCAxLCB7XG5cdFx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0XHRlYXNlOiBQb3dlcjMuZWFzZUluT3V0XG5cdFx0XHR9LCAxKVxuXHRcdFx0LnRvKGF2YXRhckNvdmVyLCAxLCB7XG5cdFx0XHRcdHNjYWxlWDogMCxcblx0XHRcdFx0dHJhbnNmb3JtT3JpZ2luOiAncmlnaHQgY2VudGVyJyxcblx0XHRcdFx0ZWFzZTogUG93ZXIyLmVhc2VPdXRcblx0XHRcdH0sIDEuMjUpXG5cdFx0XHQuc3RhZ2dlckZyb20oW3RpdGxlLCBzdWJ0aXRsZV0sIDAuNzUsIHtcblx0XHRcdFx0eDogLTEwMCxcblx0XHRcdFx0YXV0b0FscGhhOiAwLFxuXHRcdFx0XHRlYXNlOiBQb3dlcjMuZWFzZU91dFxuXHRcdFx0fSwgLjEsIDEuNSlcblx0XHRcdC5zdGFnZ2VyRnJvbVRvKGZhY3RCb3hlcywgMC4yNSwge1xuXHRcdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRcdHg6IDQwLFxuXHRcdFx0XHR5OiA0MFxuXHRcdFx0fSwge1xuXHRcdFx0XHRhdXRvQWxwaGE6IDEsXG5cdFx0XHRcdHk6IDAsXG5cdFx0XHRcdHg6IDAsXG5cdFx0XHRcdC8vIGJveFNoYWRvdzogXCIyMHB4IDIwcHggMHB4IDBweCByZ2JhKDI0NCwgMjM0LCAyMzAsIDEpXCIsXG5cdFx0XHRcdGVhc2U6IFBvd2VyMi5lYXNlT3V0XG5cdFx0XHR9LCAwLjE1LCAyKVxuXHRcdFx0LmFkZCgoKSA9PiB0aGlzLnN0YXRlLmVuZGVkID0gdHJ1ZSkucGxheSgpXG5cdH1cblxuXHRnbygpIHtcblx0XHR0aGlzLmFuaW1hdGVPdXQoKTtcblx0fVxuXG5cdGFuaW1hdGVPdXQoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXZhdGFyLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHRzdWJ0aXRsZSxcblx0XHRcdGZhY3RCb3hlc1xuXHRcdH0gPSB0aGlzLiQ7XG5cdFx0Y29uc3QgdGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoe1xuXHRcdFx0cGF1c2VkOiB0cnVlXG5cdFx0fSk7XG5cblx0XHR0aW1lbGluZS50byhhdmF0YXIsIDEsIHtcblx0XHRcdHk6IFwiLT1cIiArIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMjUsXG5cdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRlYXNlOiBQb3dlcjIuZWFzZUluXG5cdFx0fSwgMCkudG8oW3RpdGxlLCBzdWJ0aXRsZV0sIDEsIHtcblx0XHRcdHk6IFwiLT1cIiArIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNzUsXG5cdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRlYXNlOiBQb3dlcjIuZWFzZUluXG5cdFx0fSwgMCkudG8oZmFjdEJveGVzLCAxLCB7XG5cdFx0XHR5OiBcIi09XCIgKyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRlYXNlOiBQb3dlcjIuZWFzZUluXG5cdFx0fSwgMCkuYWRkKCgpID0+ICRldmVudHMuZW1pdCgnaW50cm9kdWN0aW9uLWZpbmlzaGVkJykpLnBsYXkoKTtcblx0fVxufSIsImltcG9ydCAkZXZlbnRzIGZyb20gJy4vRXZlbnRFbWl0dGVyJ1xuXG5mdW5jdGlvbiBvbktleVVwKHtcblx0a2V5Q29kZVxufSkge1xuXHRpZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICE9PSAnbG9jYWxob3N0JykgcmV0dXJuXG5cdGxldCBrZXlFdmVudFxuXHRzd2l0Y2ggKGtleUNvZGUpIHtcblx0XHRjYXNlIDMyOlxuXHRcdFx0a2V5RXZlbnQgPSAna2V5LXNwYWNlYmFyJztcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzc6XG5cdFx0XHRrZXlFdmVudCA9ICdrZXktbGVmdC1hcnJvdydcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzk6XG5cdFx0XHRrZXlFdmVudCA9ICdrZXktcmlnaHQtYXJyb3cnXG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0YnJlYWs7XG5cdH1cblx0aWYgKGtleUV2ZW50KSB7XG5cdFx0JGV2ZW50cy5lbWl0KGtleUV2ZW50KVxuXHRcdGlmICh3aW5kb3cuc29ja2V0KSBzb2NrZXQuZW1pdCgna2V5IGNvbW1hbmQnLCBrZXlFdmVudClcblx0fVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvbktleVVwKTsiLCJpbXBvcnQge1xuXHRkZWJvdW5jZVxufSBmcm9tICdsb2Rhc2gnXG5cbmZ1bmN0aW9uIG9uV2luZG93V2hlZWwoe1xuXHRkZWx0YVlcbn0pIHtcblx0aWYgKGRlbHRhWSA+IDApIHtcblx0XHQkZXZlbnRzLmVtaXQoJ3Njcm9sbC1kb3duJylcblx0fVxuXG5cdGlmIChkZWx0YVkgPCAwKSB7XG5cdFx0JGV2ZW50cy5lbWl0KCdzY3JvbGwtdXAnKVxuXHR9XG5cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZGVib3VuY2Uob25XaW5kb3dXaGVlbCwgNTAsIHtcblx0dHJhaWxpbmc6IGZhbHNlLFxuXHRsZWFkaW5nOiB0cnVlXG59KSk7IiwiaW1wb3J0IHtcblx0JGdldFxufSBmcm9tICcuL0hlbHBlcnMnXG5pbXBvcnQgSW50cm9kdWN0aW9uU2VjdGlvbiBmcm9tICcuL0ludHJvZHVjdGlvblNlY3Rpb24nO1xuaW1wb3J0IEV4cGVyaWVuY2VTZWN0aW9uIGZyb20gJy4vRXhwZXJpZW5jZVNlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uQ29udHJvbGxlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdCRldmVudHMub24oJ2tleS1yaWdodC1hcnJvdycsIHRoaXMuZm9yd2FyZC5iaW5kKHRoaXMpKTtcblx0XHQkZXZlbnRzLm9uKCdzY3JvbGwtZG93bicsIHRoaXMuZm9yd2FyZC5iaW5kKHRoaXMpKTtcblx0XHQkZXZlbnRzLm9uKCdrZXktbGVmdC1hcnJvdycsIHRoaXMuYmFjay5iaW5kKHRoaXMpKTtcblx0XHQkZXZlbnRzLm9uKCdzY3JvbGwtdXAnLCB0aGlzLmJhY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5jdXJyZW50U2VjdGlvbiA9IG5ldyBJbnRyb2R1Y3Rpb25TZWN0aW9uKCRnZXQoJy5zbGlkZXMtY29udGFpbmVyJykpXG5cblx0XHR0aGlzLiQgPSB7XG5cdFx0XHRzbGlkZXNDb250YWluZXI6ICRnZXQoJy5zbGlkZXMtY29udGFpbmVyJyksXG5cdFx0XHRpbmRpY2F0b3I6ICRnZXQoJy5tYWluLWJveF9fYWdlbmRhIC5pbmRpY2F0b3InKSxcblx0XHRcdHByb2dyZXNzOiAkZ2V0KCcubWFpbi1ib3hfX2FnZW5kYSAucHJvZ3Jlc3MnKSxcblx0XHRcdHByb2dyZXNzTnVtYmVyOiAkZ2V0KCcubWFpbi1ib3hfX2FnZW5kYSAucHJvZ3Jlc3MgaDQnKSxcblx0XHRcdHByb2dyZXNzQmFyOiAkZ2V0KCcubWFpbi1ib3hfX2FnZW5kYSAucHJvZ3Jlc3MnKSxcblx0XHRcdHByb2dyZXNzQmFySW5uZXI6ICRnZXQoJy5tYWluLWJveF9fYWdlbmRhIC5wcm9ncmVzc19fYmFyIC5pbm5lcicpLFxuXHRcdFx0YWdlbmRhSXRlbXM6ICRnZXQoJy5tYWluLWJveF9fYWdlbmRhIHVsIGxpJylcblx0XHR9XG5cblx0XHQkZXZlbnRzLm9uKCdpbnRyb2R1Y3Rpb24tZmluaXNoZWQnLCB0aGlzLmVuZEludHJvZHVjdGlvbi5iaW5kKHRoaXMpKTtcblx0XHQkZXZlbnRzLm9uKCdleHBlcmllbmNlLWZpbmlzaGVkJywgdGhpcy5lbmRFeHBlcmllbmNlKTtcblx0XHQkZXZlbnRzLm9uKCdwcm9qZWN0cy1maW5pc2hlZCcsIHRoaXMuZW5kUHJvamVjdHMpO1xuXHRcdCRldmVudHMub24oJ3Byb2dyZXNzLWNoYW5nZWQnLCB0aGlzLm9uUHJvZ3Jlc3NDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRmb3J3YXJkKCkge1xuXHRcdGNvbnNvbGUubG9nKCdGT1JXQVJEJywgdGhpcy5jdXJyZW50U2VjdGlvbiwgdGhpcy5jdXJyZW50U2VjdGlvbi5zdGF0ZSk7XG5cdFx0aWYgKHRoaXMuY3VycmVudFNlY3Rpb24uc3RhdGUuZW5kZWQpIHRoaXMuY3VycmVudFNlY3Rpb24uYW5pbWF0ZU91dCgpO1xuXHR9XG5cblx0YmFjaygpIHtcblxuXHR9XG5cblx0b25Qcm9ncmVzc0NoYW5nZSh7XG5cdFx0Y3VycmVudCxcblx0XHRtYXhcblx0fSkge1xuXHRcdGNvbnN0IGN1cnJlbnRGb3JtYXR0ZWQgPSBjdXJyZW50IDwgMTAgPyBgMCR7Y3VycmVudH1gIDogY3VycmVudDtcblx0XHRjb25zdCBtYXhGb3JtYXR0ZWQgPSBtYXggPCAxMCA/IGAwJHttYXh9YCA6IG1heDtcblx0XHRjb25zb2xlLmxvZyh0aGlzLiQpXG5cblx0XHRUd2Vlbk1heC50byh0aGlzLiQucHJvZ3Jlc3NOdW1iZXIsIDAuMTUsIHtcblx0XHRcdHg6IDIwLFxuXHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdG9uQ29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0dGhpcy4kLnByb2dyZXNzTnVtYmVyLmlubmVyVGV4dCA9IGN1cnJlbnQgPT09IG1heCA/ICduZXh0JyA6IGAke2N1cnJlbnRGb3JtYXR0ZWR9LyR7bWF4Rm9ybWF0dGVkfWBcblx0XHRcdFx0VHdlZW5NYXgudG8odGhpcy4kLnByb2dyZXNzQmFySW5uZXIsIDAuMjUsIHtcblx0XHRcdFx0XHR3aWR0aDogKChjdXJyZW50IC8gbWF4KSAqIDEwMCkgKyAnJScsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdFR3ZWVuTWF4LmZyb21Ubyh0aGlzLiQucHJvZ3Jlc3NOdW1iZXIsIDAuMTUsIHtcblx0XHRcdFx0XHR4OiAtMjAsXG5cdFx0XHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0eDogMCxcblx0XHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdGVuZEludHJvZHVjdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnd2UgZW5kaW5nIGludHJvJylcblx0XHR0aGlzLiQuYWdlbmRhSXRlbXNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0dGhpcy4kLmFnZW5kYUl0ZW1zWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cdFx0JGV2ZW50cy5lbWl0KCdwcm9ncmVzcy1jaGFuZ2VkJywge1xuXHRcdFx0Y3VycmVudDogOCxcblx0XHRcdG1heDogMTBcblx0XHR9KVxuXHRcdHRoaXMuY3VycmVudFNlY3Rpb24gPSBuZXcgRXhwZXJpZW5jZVNlY3Rpb24odGhpcy4kLnNsaWRlc0NvbnRhaW5lcik7XG5cdH1cbn0iLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuc2NzcydcbmltcG9ydCAnLi9qcy9FdmVudEVtaXR0ZXInXG5pbXBvcnQgJy4vanMvS2V5Ym9hcmQnXG5pbXBvcnQgJy4vanMvU2Nyb2xsc3B5J1xuaW1wb3J0IGludHJvVGltZWxpbmUgZnJvbSAnLi9qcy9JbnRyb1RpbWVsaW5lJ1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgU2VjdGlvbkNvbnRyb2xsZXIgZnJvbSAnLi9qcy9TZWN0aW9uQ29udHJvbGxlcic7XG4vLyBpbXBvcnQgJy4vanMvU2tldGNoJ1xud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcblx0aW50cm9UaW1lbGluZS5wbGF5KClcblx0aW50cm9UaW1lbGluZS5ldmVudENhbGxiYWNrKCdvbkNvbXBsZXRlJywgZnVuY3Rpb24gKCkge1xuXHRcdHdpbmRvdy5TZWN0aW9uQ29udHJvbGxlciA9IG5ldyBTZWN0aW9uQ29udHJvbGxlcigpXG5cdH0pXG59XG4vLyB3aW5kb3cuc29ja2V0ID0gaW8oJ2h0dHA6Ly80OWVlZTMwYi5uZ3Jvay5pbycpO1xuLy8gd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4ge1xuLy8gXHRzb2NrZXQuZW1pdCgncmVsb2FkJylcbi8vIH1cblxuLy8gc29ja2V0Lm9uKCdjb21tYW5kJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyBcdGNvbnNvbGUubG9nKGV2ZW50KTtcbi8vIFx0JGV2ZW50cy5lbWl0KGV2ZW50LmtleSlcbi8vIH0pXG5cblxuLy8gc29ja2V0Lm9uKCdyZWxvYWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vIFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4vLyB9KSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImV4cGVyaWVuY2Utc2VjdGlvblxcXCI+XFxuXHQ8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uXFxcIj5cXG5cdFx0PGgxPlBsYW50PC9oMT5cXG5cdFx0PGgzPkp1bmlvciBmcm9udC1lbmQgZGV2ZWxwcGVyPC9oMz5cXG5cdDwvZGl2Plxcblx0PGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxuXHRcdDxoMT5Ed2FyZjwvaDE+XFxuXHRcdDxoMz5Gcm9udC1lbmQgZGV2ZWxwcGVyPC9oMz5cXG5cdDwvZGl2Plxcblx0PGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxuXHRcdDxoMT5Ob21hZGljPC9oMT5cXG5cdFx0PGgzPkNyZWF0aXZlIHRlY2hub2xvZ2lzdDwvaDM+XFxuXHQ8L2Rpdj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIm1haW4tYm94X19tZXNzYWdlIGhpZGRlbiBjb250ZW50XFxcIj5cXG5cdDxoMT5IaSBKb25hczxicj48c3Bhbj46KTwvc3Bhbj48L2gxPlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcIm1haW4tYm94X19pbnRybyBoaWRkZW4gY29udGVudFxcXCI+XFxuXHQ8aDI+TmljZSB0byBtZWV0IHlvdTwvaDI+XFxuXHQ8cD5UaGFua3MgZm9yIHNwZW5kaW5nIHRoaXMgdGltZSB3aXRoIG1lIHRvIGhlbHAgbWUgZmlndXJlIG91dCB3aGF0IHRoZSBuZXh0IHN0ZXAgaXMgZm9yIG1lLiBJIGdyZWF0bHkgYXBwcmVjaWF0ZVxcblx0XHR0aGlzIGZhdm91ciBmcm9tIHlvdSBhbmQgaG9wZSB0byByZWNpcHJvY2F0ZSBpdCBpbiB0aGUgbmVhciBmdXR1cmUuPC9wPlxcblx0PHA+SSB3aWxsIHRyeSBhbmQga2VlcCBpdCBzaG9ydC4gTm93LCBmb3IgdGhlIGFnZW5kYTwvcD5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJtYWluLWJveF9fYWdlbmRhIGhpZGRlbiBjb250ZW50XFxcIj5cXG5cdDxoZWFkZXI+PC9oZWFkZXI+XFxuXHQ8dWw+XFxuXHRcdDxsaT5JbnRyb2R1Y3Rpb248L2xpPlxcblx0XHQ8bGk+RXhwZXJpZW5jZTwvbGk+XFxuXHRcdDxsaT5Qcm9qZWN0czwvbGk+XFxuXHRcdDxsaT5RdWVzdGlvbnM8L2xpPlxcblx0PC91bD5cXG5cdDxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIj5cXG5cdFx0PGg0PjAwLzAwPC9oND5cXG5cdFx0PGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NfX2JhclxcXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cXFwiaW5uZXJcXFwiPjwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cdDwvZGl2PlxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiaW50cm9kdWN0aW9uLXNlY3Rpb25cXFwiPlxcblx0PGRpdiBjbGFzcz1cXFwiYXZhdGFyXFxcIj5cXG5cdFx0PGRpdiBjbGFzcz1cXFwiYXZhdGFyX19jb3ZlclxcXCI+PC9kaXY+XFxuXHQ8L2Rpdj5cXG5cdDxkaXYgY2xhc3M9XFxcImluZm9cXFwiPlxcblx0XHQ8aDE+SGFraW0gTWF6b3V6PC9oMT48YnI+XFxuXHRcdDxoMj5DcmVhdGl2ZSBUZWNobm9sb2dpc3Q8L2gyPlxcblx0PC9kaXY+XFxuXFxuXHQ8ZGl2IGNsYXNzPVxcXCJmYWN0c1xcXCI+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImZhY3QtYm94XFxcIj5cXG5cdFx0XHQ8aDM+UXVpY2sgZmFjdHM8L2gzPlxcblx0XHRcdDx1bD5cXG5cdFx0XHRcdDxsaT7wn5ONIENvcGVuaGFnZW4sIERlbm1hcms8L2xpPlxcblx0XHRcdFx0PGxpPuKcivCfj74gTW9yb2NjYW4gQmVyYmVyPC9saT5cXG5cdFx0XHRcdDxsaT7wn46uIExpZmVsb25nIEdhbWVyPC9saT5cXG5cdFx0XHQ8L3VsPlxcblx0XHQ8L2Rpdj5cXG5cdFx0PGRpdiBjbGFzcz1cXFwiZmFjdC1ib3hcXFwiPlxcblx0XHRcdDxoMz5Ta2lsbHM8L2gzPlxcblx0XHRcdDx1bD5cXG5cdFx0XHRcdDxsaT7wn4yNIExvdmUgZXZlcnl0aGluZyBXV1c8L2xpPlxcblx0XHRcdFx0PGxpPvCfpKQgRG9wYW1pbmUgaXMgbXkgbWlkZGxlIG5hbWU8L2xpPlxcblx0XHRcdFx0PGxpPvCfg48gV2lsZGNhcmQ8L2xpPlxcblx0XHRcdDwvdWw+XFxuXHRcdDwvZGl2Plxcblx0PC9kaXY+XFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9