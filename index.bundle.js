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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chat-list.css":
/*!***********************!*\
  !*** ./chat-list.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat-list.css?");

/***/ }),

/***/ "./chat-list.js":
/*!**********************!*\
  !*** ./chat-list.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ChatListHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ChatListHeader */ \"./components/ChatListHeader.js\");\n/* harmony import */ var _chat_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-list.css */ \"./chat-list.css\");\n/* harmony import */ var _chat_list_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chat_list_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var listHeader = document.getElementById(\"chat-list-header\");\n  listHeader.innerHTML = Object(_components_ChatListHeader__WEBPACK_IMPORTED_MODULE_0__[\"ChatListHeader\"])();\n});\n\n//# sourceURL=webpack:///./chat-list.js?");

/***/ }),

/***/ "./components/ChatHeader.js":
/*!**********************************!*\
  !*** ./components/ChatHeader.js ***!
  \**********************************/
/*! exports provided: ChatHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatHeader\", function() { return ChatHeader; });\nfunction ChatHeader() {\n  return \"                \\n        <a href=\\\"chat-list.html\\\"><span class=\\\"back-button material-icons\\\">arrow_back</span></a>\\n        <div class=\\\"user-container\\\">\\n            <span class=\\\"avatar material-icons\\\">account_circle</span> \\n            <div class=\\\"user-info\\\">\\n                <h2 id=\\\"chat-name\\\" class=\\\"chat-name\\\">\\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440 \\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440 \\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440 \\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440</h2>\\n                <span class=\\\"last-seen\\\">\\u0411\\u044B\\u043B(\\u0430) \\u0432 \\u0441\\u0435\\u0442\\u0438 5 \\u043C\\u0438\\u043D\\u0443\\u0442 \\u043D\\u0430\\u0437\\u0430\\u0434</span>\\n            </div>\\n        </div>\\n        <div class=\\\"functional-icons\\\">\\n            <span class=\\\"search-button material-icons\\\">search</span>\\n            <span class=\\\"more-button material-icons\\\">more_vert</span>\\n        </div>\\n        \";\n}\n\n//# sourceURL=webpack:///./components/ChatHeader.js?");

/***/ }),

/***/ "./components/ChatListHeader.js":
/*!**************************************!*\
  !*** ./components/ChatListHeader.js ***!
  \**************************************/
/*! exports provided: ChatListHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatListHeader\", function() { return ChatListHeader; });\nfunction ChatListHeader() {\n  return \"                \\n        <span class=\\\"burger-button material-icons\\\">menu</span>\\n        <div class=\\\"user-container\\\">\\n            <h2>Messanger app</h2>\\n        </div>\\n        <div class=\\\"functional-icons\\\">\\n            <span class=\\\"search-button material-icons\\\">search</span>\\n        </div>\\n        \";\n}\n\n//# sourceURL=webpack:///./components/ChatListHeader.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ChatHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ChatHeader */ \"./components/ChatHeader.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var messageForm = document.getElementById(\"message-form\");\n  var messageInput = document.getElementById(\"message-input\");\n  var imageInput = document.getElementById(\"image-input\");\n  var messagesContainer = document.getElementById(\"messages-container\");\n  var header = document.getElementById(\"chat-header\");\n  var chatContainer = document.getElementById(\"chat-container\");\n  header.innerHTML = Object(_components_ChatHeader__WEBPACK_IMPORTED_MODULE_0__[\"ChatHeader\"])();\n  var displayMessage = function displayMessage(message) {\n    var messageElement = document.createElement(\"div\");\n    messageElement.classList.add(\"message\");\n    if (message.sender === \"Ваше имя\") {\n      messageElement.classList.add(\"sender\");\n    } else {\n      messageElement.classList.add(\"receiver\");\n    }\n    var time = new Date(message.time).toLocaleTimeString();\n    messageElement.innerHTML = \"\\n            <div class=\\\"message-content\\\">\\n            \".concat(message.text ? \"<p>\".concat(message.text, \"</p>\") : \"<img src=\\\"\".concat(message.image, \"\\\" alt=\\\"Image\\\">\"), \"\\n                <div class=\\\"message-info\\\">\\n                    <span class=\\\"message-time\\\">\").concat(time, \"</span>\\n                    \").concat(message.sender === \"Ваше имя\" ? '<span class=\"message-check material-icons\">done</span>' : '', \"\\n                </div>\\n            </div>\\n        \");\n    messagesContainer.appendChild(messageElement);\n    chatContainer.scrollTop = chatContainer.scrollHeight;\n  };\n  var loadMessages = function loadMessages() {\n    var messages = JSON.parse(localStorage.getItem(\"messages\")) || [];\n    messages.forEach(displayMessage);\n  };\n  var saveMessage = function saveMessage(message) {\n    var messages = JSON.parse(localStorage.getItem(\"messages\")) || [];\n    messages.push(message);\n    localStorage.setItem(\"messages\", JSON.stringify(messages));\n  };\n  var initializeDefaultMessages = function initializeDefaultMessages() {\n    if (!localStorage.getItem(\"messages\")) {\n      var defaultMessages = [{\n        sender: \"Собеседник\",\n        text: \"Lorem ipsum dolor sit amet consectetur adipisicing elit.\",\n        time: new Date().toISOString()\n      }];\n      defaultMessages.forEach(function (message) {\n        return saveMessage(message);\n      });\n    }\n  };\n  initializeDefaultMessages();\n  loadMessages();\n  var sendMessage = function sendMessage() {\n    var text = messageInput.value.trim();\n    var message = {\n      sender: \"Ваше имя\",\n      text: text,\n      time: new Date().toISOString()\n    };\n    if (text) {\n      displayMessage(message);\n      saveMessage(message);\n      messageInput.value = \"\";\n    }\n  };\n  messageForm.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    sendMessage();\n  });\n  messageInput.addEventListener(\"keydown\", function (e) {\n    if (e.key === \"Enter\" && !e.shiftKey) {\n      e.preventDefault();\n      sendMessage();\n    }\n  });\n  document.getElementById(\"image-button\").addEventListener(\"click\", function () {\n    imageInput.click();\n  });\n  imageInput.addEventListener(\"change\", function () {\n    var file = imageInput.files[0];\n    if (file) {\n      var reader = new FileReader();\n      reader.onload = function () {\n        var message = {\n          sender: \"Ваше имя\",\n          image: reader.result,\n          time: new Date().toISOString()\n        };\n        displayMessage(message);\n        saveMessage(message);\n      };\n      reader.readAsDataURL(file);\n    }\n  });\n  var chatNameContainer = document.getElementById(\"chat-name\");\n  var chatName = chatNameContainer.childNodes[0].textContent;\n  if (chatName.length > 15) {\n    chatNameContainer.childNodes[0].textContent = chatName.slice(0, 13) + \"...\";\n  } else {\n    chatNameContainer.childNodes[0].textContent = chatName;\n  }\n  document.getElementById('delete-button').addEventListener('click', function () {\n    localStorage.clear();\n    location.reload();\n  });\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./chat-list.js ./index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./chat-list.js */\"./chat-list.js\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./chat-list.js_./index.js?");

/***/ })

/******/ });