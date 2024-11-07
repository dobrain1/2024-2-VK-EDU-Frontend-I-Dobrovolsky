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

/***/ "./chat.css":
/*!******************!*\
  !*** ./chat.css ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat.css?");

/***/ }),

/***/ "./chat.js":
/*!*****************!*\
  !*** ./chat.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ChatHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ChatHeader */ \"./components/ChatHeader.js\");\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.css */ \"./chat.css\");\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chat_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Messages */ \"./components/Messages.js\");\n/* harmony import */ var _components_MessageForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MessageForm */ \"./components/MessageForm.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var urlParams = new URLSearchParams(window.location.search);\n  var chatNameInfo = urlParams.get('chat');\n  var messageForm = document.getElementById(\"message-form\");\n  messageForm.innerHTML = Object(_components_MessageForm__WEBPACK_IMPORTED_MODULE_3__[\"MessageForm\"])();\n  var messageInput = document.getElementById(\"message-input\");\n  var imageInput = document.getElementById(\"image-input\");\n  var header = document.getElementById(\"chat-header\");\n  header.innerHTML = Object(_components_ChatHeader__WEBPACK_IMPORTED_MODULE_0__[\"ChatHeader\"])();\n  var loadMessages = function loadMessages() {\n    var messages = JSON.parse(localStorage.getItem(\"messages\")) || [];\n    messages.forEach(function (message) {\n      if (message.chat === chatNameInfo) {\n        Object(_components_Messages__WEBPACK_IMPORTED_MODULE_2__[\"displayMessage\"])(message);\n      }\n    });\n  };\n  var saveMessage = function saveMessage(message) {\n    var messages = JSON.parse(localStorage.getItem(\"messages\")) || [];\n    messages.push(message);\n    localStorage.setItem(\"messages\", JSON.stringify(messages));\n  };\n  var initializeDefaultMessages = function initializeDefaultMessages() {\n    var defaultMessages = [{\n      sender: \"Собеседник\",\n      chat: 'User1',\n      text: \"Lorem ipsum dolor sit amet consectetur adipisicing elit.\",\n      time: new Date().toISOString()\n    }, {\n      sender: \"Собеседник\",\n      chat: 'User2',\n      text: \"Lorem ipsum dolor sit amet consectetur adipisicing elit.\",\n      time: new Date().toISOString()\n    }, {\n      sender: \"Собеседник\",\n      chat: 'User3',\n      text: \"Lorem ipsum dolor sit amet consectetur adipisicing elit.\",\n      time: new Date().toISOString()\n    }];\n    if (localStorage.length === 0) {\n      defaultMessages.forEach(function (message) {\n        return saveMessage(message);\n      });\n    }\n  };\n  initializeDefaultMessages();\n  loadMessages();\n  var sendMessage = function sendMessage() {\n    var text = messageInput.value.trim();\n    var message = {\n      sender: \"Ваше имя\",\n      chat: chatNameInfo,\n      text: text,\n      time: new Date().toISOString()\n    };\n    if (text) {\n      Object(_components_Messages__WEBPACK_IMPORTED_MODULE_2__[\"displayMessage\"])(message);\n      saveMessage(message);\n      messageInput.value = \"\";\n    }\n  };\n  messageForm.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    sendMessage();\n  });\n  messageInput.addEventListener(\"keydown\", function (e) {\n    if (e.key === \"Enter\" && !e.shiftKey) {\n      e.preventDefault();\n      sendMessage();\n    }\n  });\n  document.getElementById(\"image-button\").addEventListener(\"click\", function () {\n    imageInput.click();\n  });\n  imageInput.addEventListener(\"change\", function () {\n    var file = imageInput.files[0];\n    if (file) {\n      var reader = new FileReader();\n      reader.onload = function () {\n        var message = {\n          sender: \"Ваше имя\",\n          image: reader.result,\n          chat: chatNameInfo,\n          time: new Date().toISOString()\n        };\n        Object(_components_Messages__WEBPACK_IMPORTED_MODULE_2__[\"displayMessage\"])(message);\n        saveMessage(message);\n      };\n      reader.readAsDataURL(file);\n    }\n  });\n  var chatNameContainer = document.getElementById(\"chat-name\");\n  var chatName = chatNameContainer.childNodes[0].textContent;\n  if (chatName.length > 15) {\n    chatNameContainer.childNodes[0].textContent = chatName.slice(0, 13) + \"...\";\n  } else {\n    chatNameContainer.childNodes[0].textContent = chatName;\n  }\n  document.getElementById('delete-button').addEventListener('click', function () {\n    localStorage.clear();\n    location.reload();\n  });\n});\n\n//# sourceURL=webpack:///./chat.js?");

/***/ }),

/***/ "./components/ChatHeader.js":
/*!**********************************!*\
  !*** ./components/ChatHeader.js ***!
  \**********************************/
/*! exports provided: ChatHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatHeader\", function() { return ChatHeader; });\nfunction ChatHeader() {\n  return \"\\n        <a href=\\\"index.html\\\"><span class=\\\"back-button material-icons\\\">arrow_back</span></a>\\n        <div class=\\\"user-container\\\">\\n            <span class=\\\"avatar material-icons\\\">account_circle</span> \\n            <div class=\\\"user-info\\\">\\n                <h2 id=\\\"chat-name\\\" class=\\\"chat-name\\\">\\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440 \\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440 \\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440 \\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440</h2>\\n                <span class=\\\"last-seen\\\">\\u0411\\u044B\\u043B(\\u0430) \\u0432 \\u0441\\u0435\\u0442\\u0438 5 \\u043C\\u0438\\u043D\\u0443\\u0442 \\u043D\\u0430\\u0437\\u0430\\u0434</span>\\n            </div>\\n        </div>\\n        <div class=\\\"functional-icons\\\">\\n            <span class=\\\"search-button material-icons\\\">search</span>\\n            <span class=\\\"more-button material-icons\\\">more_vert</span>\\n        </div>\\n        \";\n}\n\n//# sourceURL=webpack:///./components/ChatHeader.js?");

/***/ }),

/***/ "./components/ChatList.js":
/*!********************************!*\
  !*** ./components/ChatList.js ***!
  \********************************/
/*! exports provided: ChaList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChaList\", function() { return ChaList; });\nfunction ChaList() {\n  return \"              \\n            <a class=\\\"chat-link\\\" href=\\\"chat.html?chat=User1\\\">\\n                <div id=\\\"chat1\\\" class=\\\"chat-item-container\\\">\\n                    <div class=\\\"left-container\\\">\\n                        <span class=\\\"chat-avatar material-icons\\\">account_circle</span>\\n                        <div class=\\\"chat-info\\\">\\n                            <div id=\\\"chat1Name\\\" class=\\\"chat-name\\\">\\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440 \\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440</div>\\n                            <div id=\\\"chat1-last-message\\\" class=\\\"chat-last-message\\\">last message</div>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"chat-status\\\">\\n                        <span id=\\\"user1-message-count\\\" class=\\\"message-count\\\"></span>\\n                        <div class=\\\"status-time\\\">\\n                            <span class=\\\"message-status material-icons\\\">done</span>\\n                            <span class=\\\"message-time\\\">08:08</span>\\n                        </div>\\n                    </div>\\n                </div>\\n            </a>\\n            <a class=\\\"chat-link\\\" href=\\\"chat.html?chat=User2\\\">\\n                <div id=\\\"chat2\\\" class=\\\"chat-item-container\\\">\\n                    <div class=\\\"left-container\\\">\\n                        <span class=\\\"chat-avatar material-icons\\\">account_circle</span>\\n                        <div class=\\\"chat-info\\\">\\n                            <div id=\\\"chat2Name\\\" class=\\\"chat-name\\\">\\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440 \\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440</div>\\n                            <div id=\\\"chat2-last-message\\\" class=\\\"chat-last-message\\\">\\u041F\\u0440\\u0438\\u0432\\u0435\\u0442</div>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"chat-status\\\">\\n                        <span id=\\\"user2-message-count\\\" class=\\\"message-count\\\"></span>\\n                        <div class=\\\"status-time\\\">\\n                            <span class=\\\"message-status material-icons\\\">done</span>\\n                            <span class=\\\"message-time\\\">09:09</span>\\n                        </div>\\n                    </div>\\n                </div>\\n            </a>\\n            <a class=\\\"chat-link\\\" href=\\\"chat.html?chat=User3\\\">\\n                <div id=\\\"chat3\\\" class=\\\"chat-item-container\\\">\\n                    <div class=\\\"left-container\\\">\\n                        <span class=\\\"chat-avatar material-icons\\\">account_circle</span>\\n                        <div class=\\\"chat-info\\\">\\n                            <div id=\\\"chat3Name\\\" class=\\\"chat-name\\\">\\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440 \\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440</div>\\n                            <div id=\\\"chat3-last-message\\\" class=\\\"chat-last-message\\\">\\u041F\\u0440\\u0438\\u0432\\u0435\\u0442</div>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"chat-status\\\">\\n                        <span id=\\\"user3-message-count\\\" class=\\\"message-count\\\"></span>\\n                        <div class=\\\"status-time\\\">\\n                            <span class=\\\"message-status material-icons\\\">done</span>\\n                            <span class=\\\"message-time\\\">18:08</span>\\n                        </div>\\n                    </div>\\n                </div>\\n            </a>\\n        \";\n}\n\n//# sourceURL=webpack:///./components/ChatList.js?");

/***/ }),

/***/ "./components/ChatListHeader.js":
/*!**************************************!*\
  !*** ./components/ChatListHeader.js ***!
  \**************************************/
/*! exports provided: ChatListHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatListHeader\", function() { return ChatListHeader; });\nfunction ChatListHeader() {\n  return \" \\n        <div class=\\\"burger-button material-icons\\\">\\n            menu\\n        </div>               \\n        <div class=\\\"user-container\\\">\\n            <h2>Messanger app</h2>\\n        </div>\\n        <div class=\\\"functional-icons\\\">\\n            <span class=\\\"search-button material-icons\\\">search</span>\\n        </div>\\n        \";\n}\n\n//# sourceURL=webpack:///./components/ChatListHeader.js?");

/***/ }),

/***/ "./components/MessageForm.js":
/*!***********************************!*\
  !*** ./components/MessageForm.js ***!
  \***********************************/
/*! exports provided: MessageForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageForm\", function() { return MessageForm; });\nfunction MessageForm() {\n  return \"                \\n            <textarea id=\\\"message-input\\\" class=\\\"message-input\\\" placeholder=\\\"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435\\\" rows=\\\"1\\\"></textarea>\\n            <input type=\\\"file\\\" id=\\\"image-input\\\" class=\\\"image-input\\\" accept=\\\"image/*\\\"\\\">\\n            <button type=\\\"button\\\" id=\\\"image-button\\\" class=\\\"image-button material-icons\\\">image</button>\\n            <button type=\\\"submit\\\" class=\\\"send-button material-icons\\\">send</button>\\n        \";\n}\n\n//# sourceURL=webpack:///./components/MessageForm.js?");

/***/ }),

/***/ "./components/Messages.js":
/*!********************************!*\
  !*** ./components/Messages.js ***!
  \********************************/
/*! exports provided: displayMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayMessage\", function() { return displayMessage; });\nvar messagesContainer = document.getElementById(\"messages-container\");\nvar chatContainer = document.getElementById(\"chat-container\");\nfunction displayMessage(message) {\n  var messageElement = document.createElement(\"div\");\n  messageElement.classList.add(\"message\");\n  if (message.sender === \"Ваше имя\") {\n    messageElement.classList.add(\"sender\");\n  } else {\n    messageElement.classList.add(\"receiver\");\n  }\n  var time = new Date(message.time).toLocaleTimeString();\n  messageElement.innerHTML = \"\\n        <div class=\\\"message-content\\\">\\n        \".concat(message.text ? \"<p>\".concat(message.text, \"</p>\") : \"<img src=\\\"\".concat(message.image, \"\\\" alt=\\\"Image\\\">\"), \"\\n            <div class=\\\"message-info\\\">\\n                <span class=\\\"message-time\\\">\").concat(time, \"</span>\\n                \").concat(message.sender === \"Ваше имя\" ? '<span class=\"message-check material-icons\">done</span>' : '', \"\\n            </div>\\n        </div>\\n    \");\n  messageElement.classList.add(\"show\");\n  messageElement.classList.add(\"animate\");\n  messagesContainer.appendChild(messageElement);\n  chatContainer.scrollTop = chatContainer.scrollHeight;\n}\n;\n\n//# sourceURL=webpack:///./components/Messages.js?");

/***/ }),

/***/ "./components/newChatButton.js":
/*!*************************************!*\
  !*** ./components/newChatButton.js ***!
  \*************************************/
/*! exports provided: NewChatButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewChatButton\", function() { return NewChatButton; });\nfunction NewChatButton() {\n  return \"                \\n            <button class=\\\"new-chat-button\\\">\\n                <span class=\\\"new-chat-icon material-icons\\\">edit</span>\\n            </button>\\n        \";\n}\n\n//# sourceURL=webpack:///./components/newChatButton.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ChatList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ChatList */ \"./components/ChatList.js\");\n/* harmony import */ var _components_ChatListHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ChatListHeader */ \"./components/ChatListHeader.js\");\n/* harmony import */ var _components_newChatButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/newChatButton */ \"./components/newChatButton.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var listHeader = document.getElementById(\"chat-list-header\");\n  listHeader.innerHTML = Object(_components_ChatListHeader__WEBPACK_IMPORTED_MODULE_1__[\"ChatListHeader\"])();\n  var newChatButtonContainer = document.getElementById(\"new-chat-button-container\");\n  newChatButtonContainer.innerHTML = Object(_components_newChatButton__WEBPACK_IMPORTED_MODULE_2__[\"NewChatButton\"])();\n  var chatList = document.getElementById(\"chat-list-container\");\n  chatList.innerHTML = Object(_components_ChatList__WEBPACK_IMPORTED_MODULE_0__[\"ChaList\"])();\n  var messages = JSON.parse(localStorage.getItem(\"messages\"));\n  function userMessages(User) {\n    return messages.filter(function (message) {\n      return message.chat === User;\n    });\n  }\n  var User1Messages = userMessages('User1');\n  var User2Messages = userMessages('User2');\n  var User3Messages = userMessages('User3');\n  var User1MessagesCount = User1Messages.length;\n  var User2MessagesCount = User2Messages.length;\n  var User3MessagesCount = User3Messages.length;\n  var user1MessageCount = document.getElementById(\"user1-message-count\");\n  var user2MessageCount = document.getElementById(\"user2-message-count\");\n  var user3MessageCount = document.getElementById(\"user3-message-count\");\n  user1MessageCount.innerText = User1MessagesCount;\n  user2MessageCount.innerText = User2MessagesCount;\n  user3MessageCount.innerText = User3MessagesCount;\n  var User1LastMessageContainer = document.getElementById(\"chat1-last-message\");\n  var User2LastMessageContainer = document.getElementById(\"chat2-last-message\");\n  var User3LastMessageContainer = document.getElementById(\"chat3-last-message\");\n  var User1LastMessage = User1Messages[User1Messages.length - 1].text ? User1Messages[User1Messages.length - 1].text : \"картинка\";\n  var User2LastMessage = User2Messages[User2Messages.length - 1].text ? User2Messages[User2Messages.length - 1].text : \"картинка\";\n  var User3LastMessage = User3Messages[User3Messages.length - 1].text ? User3Messages[User3Messages.length - 1].text : \"картинка\";\n  User1LastMessageContainer.innerText = User1LastMessage;\n  User2LastMessageContainer.innerText = User2LastMessage;\n  User3LastMessageContainer.innerText = User3LastMessage;\n  var shortName = function shortName(Message, MessageContainer) {\n    if (Message.length > 8) {\n      MessageContainer.innerText = Message.replace(/\\n/g, ' ').slice(0, 8) + \"...\";\n    } else if (!Message) {\n      MessageContainer.innerText = \"картинка\";\n    } else {\n      MessageContainer.innerText = Message;\n    }\n  };\n  shortName(User1LastMessage, User1LastMessageContainer);\n  shortName(User2LastMessage, User2LastMessageContainer);\n  shortName(User3LastMessage, User3LastMessageContainer);\n  var chat1Name = document.getElementById(\"chat1Name\");\n  var chat2Name = document.getElementById(\"chat2Name\");\n  var chat3Name = document.getElementById(\"chat3Name\");\n  console.log(chat1Name.innerText);\n  var shortChatName = function shortChatName(chatContainer) {\n    if (chatContainer.innerText.length > 12) {\n      chatContainer.innerText = chatContainer.innerText.slice(0, 12) + \"...\";\n    }\n  };\n  shortChatName(chat1Name);\n  shortChatName(chat2Name);\n  shortChatName(chat3Name);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./chat.js ./index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./chat.js */\"./chat.js\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./chat.js_./index.js?");

/***/ })

/******/ });