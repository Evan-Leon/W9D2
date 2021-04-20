/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nconst COLOR = \"turquoise\";\nconst RADIUS = 10;\n\nfunction Asteroid(options){\n    options = options || {}\n    options.color = COLOR;\n    options.radius = RADIUS;\n    options.vel = Util.randomVec(10); \n    options.pos = options.pos || Util.randomVec(250);\n    MovingObject.call(this, options); \n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst DIM_X = 500;\nconst DIM_Y = 500;\nconst NUM_ASTEROIDS= 20;\n\nfunction Game(){\n    this.asteroids = [];\n    this.addAsteroids();\n\n}\n\nGame.prototype.randomPosition = function(){\n    let arr = []\n    arr.push(Math.random() * (DIM_X - 0) + 0);\n    arr.push(Math.random() * (DIM_Y - 0) + 0);\n    return arr;\n}\n\nGame.prototype.addAsteroids = function (){\n    for (let i = 1; i < NUM_ASTEROIDS; i++){\n        this.asteroids.push(new Asteroid(this.randomPosition()));\n    }\n}\n\nGame.prototype.moveObjects = function (){\n    this.asteroids.forEach(function (asteroid){\n        asteroid.move();\n    });\n}\n\nGame.prototype.draw = function(ctx){\n    debugger\n    ctx.clearRect(0, 0, 500, 500);\n    this.asteroids.forEach(function (asteroid){\n        asteroid.draw(ctx);\n    });\n}\n\nGame.prototype.wrap = function(pos){\n    \n}\n\nmodule.exports = Game;\n\n\n// Game.prototype.step = function(){\n\n// }\n\n// Game.prototype.move = function(){\n\n// }\n\n// Game.prototype.checkCollisions = function(){\n\n// }\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(context) {\n    this.game = new Game();\n    // debugger\n    this.context = context;\n}\n\nGameView.prototype.start = function(){\n    // debugger\n    const that = this;\n    setInterval(function(){\n        // debugger\n        that.game.moveObjects();\n        debugger\n        that.game.draw(that.context);\n    }, 20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\n\nmodule.exports = {\n  canvas: document.addEventListener(\"DOMContentLoaded\", () => { \n      const canvasEle = document.getElementById(\"game-canvas\");\n      canvasEle.width = 500;\n      canvasEle.height = 500; \n\n      const ctx = canvasEle.getContext(\"2d\");\n      const game = new GameView(ctx);\n      game.start();\n\n      // ctx.fillStyle = \"green\";\n      // ctx.fillRect(0, 0, 500, 500);\n  })\n\n}\n\n// window.MovingObject = MovingObject;\n// window.Asteroid = Asteroid;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nfunction MovingObject(options){\n   \n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.move = function(){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    \n}\n\nMovingObject.prototype.draw = function(ctx){\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n  ctx.strokeStyle = this.color;\n  ctx.fillStyle = this.color;\n  ctx.fill();\n  ctx.stroke();\n}\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject) = function(){\n  \n// }\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n\n    inherits: function(childClass, parentClass) {\n      function Surrogate(){};\n      Surrogate.prototype = parentClass.prototype;\n      childClass.prototype = new Surrogate();\n      childClass.prototype.constructor = childClass;\n    },\n\n    randomVec: function (length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale: function (vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n \n  \nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;