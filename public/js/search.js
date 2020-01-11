/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_carousel.js":
/*!**********************!*\
  !*** ./_carousel.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return carousel; });
function carousel(el, {
  start = 0,
  loop = false,
  interactive = true,
  interval = 3000,
  animationDuration = 500,
  autoplay = false
}) {
  if (el instanceof Element) {
    this.target = el;
    this.animationDuration = animationDuration;
    this.interval = interval;
    this.loop = loop;
    this.items = el.querySelectorAll(".carousel-item");
    if (!items) return;
    this.dots = [];

    for (let i = 0; i < items.length; i++) {
      let dot = el.querySelector("carousel-dot-" + i);
      this.dots.push(dot);
      if (dot instanceof Element) dot.setAttribute("carousel-index", i);
    }

    this.currentIndex = start;

    this.next = () => {
      let prevIndex = this.currentIndex;
      this.currentIndex++;

      if (this.currentIndex >= this.items.length) {
        if (this.loop) this.currentIndex = 0;else return;
      }

      let nextIndex = this.currentIndex;
      this.items[prevIndex].classList.add("carousel-exit-left");
      this.items[nextIndex].classList.add("carousel-enter-right");
      this.items[prevIndex].classList.remove("carousel-visible");
      this.items[nextIndex].classList.remove("carousel-hidden");

      if (this.dots[prevIndex] instanceof Element) {
        this.dots[prevIndex].classList.add("inactive");
        this.dots[nextIndex].classList.add("active");
        this.dots[prevIndex].classList.remove("active");
        this.dots[nextIndex].classList.remove("inactive");
      }

      setTimeout(() => {
        this.items[prevIndex].classList.add("carousel-hidden");
        this.items[nextIndex].classList.add("carousel-visible");
        this.items[prevIndex].classList.remove("carousel-exit-left");
        this.items[nextIndex].classList.remove("carousel-enter-right");
      }, this.animationDuration);
    };

    this.prev = () => {
      let prevIndex = this.currentIndex;
      this.currentIndex--;

      if (this.currentIndex <= 0) {
        if (this.loop) this.currentIndex = this.items.length;else return;
      }

      let nextIndex = this.currentIndex;
      this.items[prevIndex].classList.add("carousel-exit-right");
      this.items[nextIndex].classList.add("carousel-enter-left");
      this.items[prevIndex].classList.remove("carousel-visible");
      this.items[nextIndex].classList.remove("carousel-hidden");

      if (this.dots[prevIndex] instanceof Element) {
        this.dots[prevIndex].classList.add("inactive");
        this.dots[nextIndex].classList.add("active");
        this.dots[prevIndex].classList.remove("active");
        this.dots[nextIndex].classList.remove("inactive");
      }

      setTimeout(() => {
        this.items[prevIndex].classList.add("carousel-hidden");
        this.items[nextIndex].classList.add("carousel-visible");
        this.items[prevIndex].classList.remove("carousel-exit-right");
        this.items[nextIndex].classList.remove("carousel-enter-left");
      }, this.animationDuration);
    };

    this.goto = i => {
      if (this.currentIndex == i) return;
      let prevIndex = this.currentIndex;
      this.currentIndex = i;
      let nextIndex = this.currentIndex;
      this.items[prevIndex].classList.add("carousel-exit-left");
      this.items[nextIndex].classList.add("carousel-enter-right");
      this.items[prevIndex].classList.remove("carousel-visible");
      this.items[nextIndex].classList.remove("carousel-hidden");

      if (this.dots[prevIndex] instanceof Element) {
        this.dots[prevIndex].classList.add("inactive");
        this.dots[nextIndex].classList.add("active");
        this.dots[prevIndex].classList.remove("active");
        this.dots[nextIndex].classList.remove("inactive");
      }

      setTimeout(() => {
        this.items[prevIndex].classList.add("carousel-hidden");
        this.items[nextIndex].classList.add("carousel-visible");
        this.items[prevIndex].classList.remove("carousel-exit-left");
        this.items[nextIndex].classList.remove("carousel-enter-right");
      }, this.animationDuration);
    };

    this.startAutoplay = () => {
      if (!this.autoplayer) {
        if (interval < 0) this.autoplayer = setInterval(this.prev, -this.interval);else this.autoplayer = setInterval(this.next, this.interval);
      }
    };

    this.stopAutoplay = () => {
      if (this.autoplayer) {
        clearInterval(this.autoplayer);
        delete this.autoplayer;
      }
    };

    if (interactive) {
      let elem = el.querySelector(".carousel-prev");
      if (elem instanceof Elements) elem.addEventListener("click", this.prev);
      elem = el.querySelector(".carousel-next");
      if (elem instanceof Elements) elem.addEventListener("click", this.next);

      for (let dot in this.dots) {
        if (dot instanceof dots) dot.addEventListener("click", e => {
          this.goto(parseInt(e.target.getAttribute("carousel-index")));
        });
      }
    }

    if (autoplay) this.startAutoplay();
  }
}

/***/ }),

/***/ "./search.js":
/*!*******************!*\
  !*** ./search.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_carousel.js */ "./_carousel.js");


/***/ })

/******/ });
//# sourceMappingURL=search.js.map