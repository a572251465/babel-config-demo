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

/***/ "./presets/src/index.js":
/*!******************************!*\
  !*** ./presets/src/index.js ***!
  \******************************/
/***/ (() => {

eval("let fun = function () {\n  return console.log('hello babel.js');\n};\n\nclass Person {\n  constructor(name) {\n    this.name = name;\n  }\n\n  say() {\n    console.log(`my name is：${this.name}`);\n  }\n\n}\n\nconst tom = new Person('tom');\ntom.say();\n\n//# sourceURL=webpack://babel-config-demo/./presets/src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./presets/src/index.js"]();
/******/ 	
/******/ })()
;