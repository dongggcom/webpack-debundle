/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App-ts.tsx":
/*!************************!*\
  !*** ./src/App-ts.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {



    Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      
      exports["default"] = function () {
        return null;
      };
      
      /***/ }),
      
      /***/ "./index.js":
      /*!******************!*\
        !*** ./index.js ***!
        \******************/
      /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
      /* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/App */ "./src/App.jsx");
      /*
       * @Author: donggg
       * @LastEditors: donggg
       * @Date: 2021-05-06 22:39:22
       * @LastEditTime: 2021-05-06 23:26:55
       */
      
      
      
      react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));
      
      /***/ }),
      
      /***/ "./src/AlertMenuPlugin.js":
      /*!********************************!*\
        !*** ./src/AlertMenuPlugin.js ***!
        \********************************/
      /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "default": () => (/* binding */ AlertMenu)
      /* harmony export */ });
      /* harmony import */ var wangeditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wangeditor */ "./node_modules/wangeditor/dist/wangEditor.js");
      /* harmony import */ var wangeditor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wangeditor__WEBPACK_IMPORTED_MODULE_0__);
      function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
      
      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
      
      function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
      
      function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
      
      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
      
      function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
      
      function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
      
      function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
      
      function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
      
      function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
      
      function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
      
      /*
       * @Author: donggg
       * @LastEditors: donggg
       * @Date: 2021-06-04 22:51:20
       * @LastEditTime: 2021-06-04 22:51:20
       */
      // 引入 wangEditor
       // npm 安装
      // 获取必要的变量，这些在下文中都会用到
      
      var $ = (wangeditor__WEBPACK_IMPORTED_MODULE_0___default().$),
          BtnMenu = (wangeditor__WEBPACK_IMPORTED_MODULE_0___default().BtnMenu),
          DropListMenu = (wangeditor__WEBPACK_IMPORTED_MODULE_0___default().DropListMenu),
          PanelMenu = (wangeditor__WEBPACK_IMPORTED_MODULE_0___default().PanelMenu),
          DropList = (wangeditor__WEBPACK_IMPORTED_MODULE_0___default().DropList),
          Panel = (wangeditor__WEBPACK_IMPORTED_MODULE_0___default().Panel),
          Tooltip = (wangeditor__WEBPACK_IMPORTED_MODULE_0___default().Tooltip);
      
      var AlertMenu = /*#__PURE__*/function (_BtnMenu) {
        _inherits(AlertMenu, _BtnMenu);
      
        var _super = _createSuper(AlertMenu);
      
        function AlertMenu(editor) {
          _classCallCheck(this, AlertMenu);
      
          // data-title属性表示当鼠标悬停在该按钮上时提示该按钮的功能简述
          var $elem = wangeditor__WEBPACK_IMPORTED_MODULE_0___default().$("<div class=\"w-e-menu\" data-title=\"Alert\">\n              <button>alert</button>\n          </div>");
          return _super.call(this, $elem, editor);
        } // 菜单点击事件
      
      
        _createClass(AlertMenu, [{
          key: "clickHandler",
          value: function clickHandler() {
            // 做任何你想做的事情
            // 可参考【常用 API】文档，来操作编辑器
            alert('hello world');
          } // 菜单是否被激活（如果不需要，这个函数可以空着）
          // 1. 激活是什么？光标放在一段加粗、下划线的文本时，菜单栏里的 B 和 U 被激活，如下图
          // 2. 什么时候执行这个函数？每次编辑器区域的选区变化（如鼠标操作、键盘操作等），都会触发各个菜单的 tryChangeActive 函数，重新计算菜单的激活状态
      
        }, {
          key: "tryChangeActive",
          value: function tryChangeActive() {
            // 激活菜单
            // 1. 菜单 DOM 节点会增加一个 .w-e-active 的 css class
            // 2. this.this.isActive === true
            this.active(); // // 取消激活菜单
            // // 1. 菜单 DOM 节点会删掉 .w-e-active
            // // 2. this.this.isActive === false
            // this.unActive()
          }
        }]);
      
        return AlertMenu;
      }(BtnMenu);
      
      
      
      /***/ }),
      
      /***/ "./src/App.jsx":
      /*!*********************!*\
        !*** ./src/App.jsx ***!
        \*********************/
      /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
      /* harmony export */ });
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
      /* harmony import */ var wangeditor_for_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wangeditor-for-react */ "./node_modules/wangeditor-for-react/lib/index.js");
      /* harmony import */ var wangeditor_for_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wangeditor_for_react__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ var _App_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App-ts */ "./src/App-ts.tsx");
      /* harmony import */ var _AutoFocusDemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AutoFocusDemo */ "./src/AutoFocusDemo.jsx");
      /* harmony import */ var _SetLangDemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SetLangDemo */ "./src/SetLangDemo.jsx");
      /* harmony import */ var _HookDemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HookDemo */ "./src/HookDemo.jsx");
      function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
      
      function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
      
      function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
      
      function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
      
      function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
      
      function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
      
      
      
      
      
      
       // import KityMinderEditor from './KityMinderDemo';
      
      function App() {
        var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
            _useState2 = _slicedToArray(_useState, 2),
            value = _useState2[0],
            setValue = _useState2[1];
      
        var editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "\u81EA\u52A8\u5B9A\u4F4D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "\u57FA\u7840\u6D4B\u8BD5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((wangeditor_for_react__WEBPACK_IMPORTED_MODULE_1___default()), {
          ref: editorRef,
          style: {
            padding: 20
          },
          defaultValue: "defalut",
          value: value,
          linkImgCallback: function linkImgCallback(src, alt, href) {
            console.log('图片 src ', src);
            console.log('图片文字说明', alt);
            console.log('跳转链接', href);
          },
          onlineVideoCallback: function onlineVideoCallback(video) {
            console.log('插入视频内容', video);
          },
          onChange: function onChange(html) {
            console.log('onChange html:', html); // setValue(html)
          } //   onBlur={(html) => {
          //     console.log('onBlur html:', html)
          //     console.log(editorRef.current)
          //     if (editorRef.current) {
          //       console.log('ref', editorRef.current.editor.txt.text())
          //       console.log('ref', editorRef.current.editor.txt.getJSON())
          //       console.log('ref', editorRef.current.editor.txt.append('追加内容'))
          //     }
          //   }}
          //   onFocus={(html) => {
          //     console.log('onFocus html:', html)
          //   }}
      
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          onChange: function onChange(v) {
            return setValue(v);
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
          href: "#",
          onClick: function onClick() {
            return editorRef.current.destroy();
          }
        }, "\u5220\u9664"));
      }
      
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
      
      /***/ }),
      
      /***/ "./src/AutoFocusDemo.jsx":
      /*!*******************************!*\
        !*** ./src/AutoFocusDemo.jsx ***!
        \*******************************/
      /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
      /* harmony export */ });
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
      /* harmony import */ var wangeditor_for_react_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wangeditor-for-react/lib */ "./node_modules/wangeditor-for-react/lib/index.js");
      /* harmony import */ var wangeditor_for_react_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wangeditor_for_react_lib__WEBPACK_IMPORTED_MODULE_1__);
      function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
      
      function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
      
      function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
      
      function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
      
      function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
      
      function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
      
      
      
      
      function debounce(fn, delay) {
        var timer = null;
        return function () {
          var _arguments = arguments;
      
          if (timer) {
            clearTimeout(timer);
          }
      
          timer = setTimeout(function () {
            fn.apply(fn, _arguments);
          }, delay);
        };
      }
      
      function App() {
        var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
      
        var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
            _useState2 = _slicedToArray(_useState, 2),
            value = _useState2[0],
            setValue = _useState2[1];
      
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
          if (inputRef) {
            inputRef.focus();
          }
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((wangeditor_for_react_lib__WEBPACK_IMPORTED_MODULE_1___default()), {
          value: value,
          config: {
            focus: false
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          ref: function ref(r) {
            return inputRef = r;
          },
          onChange: debounce(function (e) {
            console.log('onChange html:', e.target.value);
            setValue(e.target.value);
          }, 300)
        }));
      }
      
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
      
      /***/ }),
      
      /***/ "./src/HookDemo.jsx":
      /*!**************************!*\
        !*** ./src/HookDemo.jsx ***!
        \**************************/
      /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
      /* harmony export */ });
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
      /* harmony import */ var wangeditor_for_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wangeditor-for-react */ "./node_modules/wangeditor-for-react/lib/index.js");
      /* harmony import */ var wangeditor_for_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wangeditor_for_react__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ var _AlertMenuPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlertMenuPlugin */ "./src/AlertMenuPlugin.js");
      
      
      
      
      function GlobalHook() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((wangeditor_for_react__WEBPACK_IMPORTED_MODULE_1___default()), {
          globalHook: {
            registerMenu: ['alertMenuKey', _AlertMenuPlugin__WEBPACK_IMPORTED_MODULE_2__["default"]]
          }
        });
      }
      
      function InstanceHook() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((wangeditor_for_react__WEBPACK_IMPORTED_MODULE_1___default()), {
          instanceHook: {
            'menus.extend': ['alertMenuKey', _AlertMenuPlugin__WEBPACK_IMPORTED_MODULE_2__["default"]],
            'config.menus': function configMenus(editor, config, menus) {
              config.menus = menus.concat("alertMenuKey");
            }
          }
        });
      }
      
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GlobalHook, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InstanceHook, null));
      });
      
      /***/ }),
      
      /***/ "./src/SetLangDemo.jsx":
      /*!*****************************!*\
        !*** ./src/SetLangDemo.jsx ***!
        \*****************************/
      /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
      /* harmony export */ });
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
      /* harmony import */ var wangeditor_for_react_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wangeditor-for-react/lib */ "./node_modules/wangeditor-for-react/lib/index.js");
      /* harmony import */ var wangeditor_for_react_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wangeditor_for_react_lib__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
      
      
      
      var ReactWEditorOfLang = (0,wangeditor_for_react_lib__WEBPACK_IMPORTED_MODULE_1__.extend)({
        i18next: i18next__WEBPACK_IMPORTED_MODULE_2__["default"]
      });
      
      function App() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactWEditorOfLang, {
          config: {
            lang: 'japan'
          },
          languages: {
            japan: {
              wangEditor: {
                请输入正文: '本文を入力してください'
              }
            }
          }
        });
      }
      
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
      
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
      /******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
      /******/ 		try {
      /******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
      /******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
      /******/ 			module = execOptions.module;
      /******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
      /******/ 		} catch(e) {
      /******/ 			module.error = e;
      /******/ 			throw e;
      /******/ 		}
      /******/ 	
      /******/ 		// Return the exports of the module
      /******/ 		return module.exports;
      /******/ 	}
      /******/ 	
      /******/ 	// expose the modules object (__webpack_modules__)
      /******/ 	__webpack_require__.m = __webpack_modules__;
      /******/ 	
      /******/ 	// expose the module cache
      /******/ 	__webpack_require__.c = __webpack_module_cache__;
      /******/ 	
      /******/ 	// expose the module execution interceptor
      /******/ 	__webpack_require__.i = [];
      /******/ 	
      /************************************************************************/
      /******/ 	/* webpack/runtime/chunk loaded */
      /******/ 	(() => {
      /******/ 		var deferred = [];
      /******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
      /******/ 			if(chunkIds) {
      /******/ 				priority = priority || 0;
      /******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
      /******/ 				deferred[i] = [chunkIds, fn, priority];
      /******/ 				return;
      /******/ 			}
      /******/ 			var notFulfilled = Infinity;
      /******/ 			for (var i = 0; i < deferred.length; i++) {
      /******/ 				var [chunkIds, fn, priority] = deferred[i];
      /******/ 				var fulfilled = true;
      /******/ 				for (var j = 0; j < chunkIds.length; j++) {
      /******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
      /******/ 						chunkIds.splice(j--, 1);
      /******/ 					} else {
      /******/ 						fulfilled = false;
      /******/ 						if(priority < notFulfilled) notFulfilled = priority;
      /******/ 					}
      /******/ 				}
      /******/ 				if(fulfilled) {
      /******/ 					deferred.splice(i--, 1)
      /******/ 					var r = fn();
      /******/ 					if (r !== undefined) result = r;
      /******/ 				}
      /******/ 			}
      /******/ 			return result;
      /******/ 		};
      /******/ 	})();
      /******/ 	
      /******/ 	/* webpack/runtime/compat get default export */
      /******/ 	(() => {
      /******/ 		// getDefaultExport function for compatibility with non-harmony modules
      /******/ 		__webpack_require__.n = (module) => {
      /******/ 			var getter = module && module.__esModule ?
      /******/ 				() => (module['default']) :
      /******/ 				() => (module);
      /******/ 			__webpack_require__.d(getter, { a: getter });
      /******/ 			return getter;
      /******/ 		};
      /******/ 	})();
      /******/ 	
      /******/ 	/* webpack/runtime/define property getters */
      /******/ 	(() => {
      /******/ 		// define getter functions for harmony exports
      /******/ 		__webpack_require__.d = (exports, definition) => {
      /******/ 			for(var key in definition) {
      /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
      /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      /******/ 				}
      /******/ 			}
      /******/ 		};
      /******/ 	})();
      /******/ 	
      /******/ 	/* webpack/runtime/get javascript update chunk filename */
      /******/ 	(() => {
      /******/ 		// This function allow to reference all chunks
      /******/ 		__webpack_require__.hu = (chunkId) => {
      /******/ 			// return url for filenames based on template
      /******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
      /******/ 		};
      /******/ 	})();
      /******/ 	
      /******/ 	/* webpack/runtime/get update manifest filename */
      /******/ 	(() => {
      /******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
      /******/ 	})();
      /******/ 	
      /******/ 	/* webpack/runtime/getFullHash */
      /******/ 	(() => {
      /******/ 		__webpack_require__.h = () => ("37c70f43bae6dd4a8597")
      /******/ 	})();
      /******/ 	
      /******/ 	/* webpack/runtime/global */
      /******/ 	(() => {
      /******/ 		__webpack_require__.g = (function() {
      /******/ 			if (typeof globalThis === 'object') return globalThis;
      /******/ 			try {
      /******/ 				return this || new Function('return this')();
      /******/ 			} catch (e) {
      /******/ 				if (typeof window === 'object') return window;
      /******/ 			}
      /******/ 		})();
      /******/ 	})();
      /******/ 	
      /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
      /******/ 	(() => {
      /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
      /******/ 	})();
      /******/ 	
      /******/ 	/* webpack/runtime/load script */
      /******/ 	(() => {
      /******/ 		var inProgress = {};
      /******/ 		var dataWebpackPrefix = "wangeditor-for-react-demo:";
      /******/ 		// loadScript function to load a script via script tag
      /******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
      /******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
      /******/ 			var script, needAttach;
      /******/ 			if(key !== undefined) {
      /******/ 				var scripts = document.getElementsByTagName("script");
      /******/ 				for(var i = 0; i < scripts.length; i++) {
      /******/ 					var s = scripts[i];
      /******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
      /******/ 				}
      /******/ 			}
      /******/ 			if(!script) {
      /******/ 				needAttach = true;
      /******/ 				script = document.createElement('script');
      /******/ 		
      /******/ 				script.charset = 'utf-8';
      /******/ 				script.timeout = 120;
      /******/ 				if (__webpack_require__.nc) {
      /******/ 					script.setAttribute("nonce", __webpack_require__.nc);
      /******/ 				}
      /******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
      /******/ 				script.src = url;
      /******/ 			}
      /******/ 			inProgress[url] = [done];
      /******/ 			var onScriptComplete = (prev, event) => {
      /******/ 				// avoid mem leaks in IE.
      /******/ 				script.onerror = script.onload = null;
      /******/ 				clearTimeout(timeout);
      /******/ 				var doneFns = inProgress[url];
      /******/ 				delete inProgress[url];
      /******/ 				script.parentNode && script.parentNode.removeChild(script);
      /******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
      /******/ 				if(prev) return prev(event);
      /******/ 			}
      /******/ 			;
      /******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
      /******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
      /******/ 			script.onload = onScriptComplete.bind(null, script.onload);
      /******/ 			needAttach && document.head.appendChild(script);
      /******/ 		};
      /******/ 	})();
      /******/ 	
      /******/ 	/* webpack/runtime/make namespace object */
      /******/ 	(() => {
      /******/ 		// define __esModule on exports
      /******/ 		__webpack_require__.r = (exports) => {
      /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/ 			}
      /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/ 		};
      /******/ 	})();
      /******/ 	
      /******/ 	/* webpack/runtime/hot module replacement */
      /******/ 	(() => {
      /******/ 		var currentModuleData = {};
      /******/ 		var installedModules = __webpack_require__.c;
      /******/ 		
      /******/ 		// module and require creation
      /******/ 		var currentChildModule;
      /******/ 		var currentParents = [];
      /******/ 		
      /******/ 		// status
      /******/ 		var registeredStatusHandlers = [];
      /******/ 		var currentStatus = "idle";
      /******/ 		
      /******/ 		// while downloading
      /******/ 		var blockingPromises;
      /******/ 		
      /******/ 		// The update info
      /******/ 		var currentUpdateApplyHandlers;
      /******/ 		var queuedInvalidatedModules;
      /******/ 		
      /******/ 		// eslint-disable-next-line no-unused-vars
      /******/ 		__webpack_require__.hmrD = currentModuleData;
      /******/ 		
      /******/ 		__webpack_require__.i.push(function (options) {
      /******/ 			var module = options.module;
      /******/ 			var require = createRequire(options.require, options.id);
      /******/ 			module.hot = createModuleHotObject(options.id, module);
      /******/ 			module.parents = currentParents;
      /******/ 			module.children = [];
      /******/ 			currentParents = [];
      /******/ 			options.require = require;
      /******/ 		});
      /******/ 		
      /******/ 		__webpack_require__.hmrC = {};
      /******/ 		__webpack_require__.hmrI = {};
      /******/ 		
      /******/ 		function createRequire(require, moduleId) {
      /******/ 			var me = installedModules[moduleId];
      /******/ 			if (!me) return require;
      /******/ 			var fn = function (request) {
      /******/ 				if (me.hot.active) {
      /******/ 					if (installedModules[request]) {
      /******/ 						var parents = installedModules[request].parents;
      /******/ 						if (parents.indexOf(moduleId) === -1) {
      /******/ 							parents.push(moduleId);
      /******/ 						}
      /******/ 					} else {
      /******/ 						currentParents = [moduleId];
      /******/ 						currentChildModule = request;
      /******/ 					}
      /******/ 					if (me.children.indexOf(request) === -1) {
      /******/ 						me.children.push(request);
      /******/ 					}
      /******/ 				} else {
      /******/ 					console.warn(
      /******/ 						"[HMR] unexpected require(" +
      /******/ 							request +
      /******/ 							") from disposed module " +
      /******/ 							moduleId
      /******/ 					);
      /******/ 					currentParents = [];
      /******/ 				}
      /******/ 				return require(request);
      /******/ 			};
      /******/ 			var createPropertyDescriptor = function (name) {
      /******/ 				return {
      /******/ 					configurable: true,
      /******/ 					enumerable: true,
      /******/ 					get: function () {
      /******/ 						return require[name];
      /******/ 					},
      /******/ 					set: function (value) {
      /******/ 						require[name] = value;
      /******/ 					}
      /******/ 				};
      /******/ 			};
      /******/ 			for (var name in require) {
      /******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
      /******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
      /******/ 				}
      /******/ 			}
      /******/ 			fn.e = function (chunkId) {
      /******/ 				return trackBlockingPromise(require.e(chunkId));
      /******/ 			};
      /******/ 			return fn;
      /******/ 		}
      /******/ 		
      /******/ 		function createModuleHotObject(moduleId, me) {
      /******/ 			var _main = currentChildModule !== moduleId;
      /******/ 			var hot = {
      /******/ 				// private stuff
      /******/ 				_acceptedDependencies: {},
      /******/ 				_acceptedErrorHandlers: {},
      /******/ 				_declinedDependencies: {},
      /******/ 				_selfAccepted: false,
      /******/ 				_selfDeclined: false,
      /******/ 				_selfInvalidated: false,
      /******/ 				_disposeHandlers: [],
      /******/ 				_main: _main,
      /******/ 				_requireSelf: function () {
      /******/ 					currentParents = me.parents.slice();
      /******/ 					currentChildModule = _main ? undefined : moduleId;
      /******/ 					__webpack_require__(moduleId);
      /******/ 				},
      /******/ 		
      /******/ 				// Module API
      /******/ 				active: true,
      /******/ 				accept: function (dep, callback, errorHandler) {
      /******/ 					if (dep === undefined) hot._selfAccepted = true;
      /******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
      /******/ 					else if (typeof dep === "object" && dep !== null) {
      /******/ 						for (var i = 0; i < dep.length; i++) {
      /******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
      /******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
      /******/ 						}
      /******/ 					} else {
      /******/ 						hot._acceptedDependencies[dep] = callback || function () {};
      /******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
      /******/ 					}
      /******/ 				},
      /******/ 				decline: function (dep) {
      /******/ 					if (dep === undefined) hot._selfDeclined = true;
      /******/ 					else if (typeof dep === "object" && dep !== null)
      /******/ 						for (var i = 0; i < dep.length; i++)
      /******/ 							hot._declinedDependencies[dep[i]] = true;
      /******/ 					else hot._declinedDependencies[dep] = true;
      /******/ 				},
      /******/ 				dispose: function (callback) {
      /******/ 					hot._disposeHandlers.push(callback);
      /******/ 				},
      /******/ 				addDisposeHandler: function (callback) {
      /******/ 					hot._disposeHandlers.push(callback);
      /******/ 				},
      /******/ 				removeDisposeHandler: function (callback) {
      /******/ 					var idx = hot._disposeHandlers.indexOf(callback);
      /******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
      /******/ 				},
      /******/ 				invalidate: function () {
      /******/ 					this._selfInvalidated = true;
      /******/ 					switch (currentStatus) {
      /******/ 						case "idle":
      /******/ 							currentUpdateApplyHandlers = [];
      /******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
      /******/ 								__webpack_require__.hmrI[key](
      /******/ 									moduleId,
      /******/ 									currentUpdateApplyHandlers
      /******/ 								);
      /******/ 							});
      /******/ 							setStatus("ready");
      /******/ 							break;
      /******/ 						case "ready":
      /******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
      /******/ 								__webpack_require__.hmrI[key](
      /******/ 									moduleId,
      /******/ 									currentUpdateApplyHandlers
      /******/ 								);
      /******/ 							});
      /******/ 							break;
      /******/ 						case "prepare":
      /******/ 						case "check":
      /******/ 						case "dispose":
      /******/ 						case "apply":
      /******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
      /******/ 								moduleId
      /******/ 							);
      /******/ 							break;
      /******/ 						default:
      /******/ 							// ignore requests in error states
      /******/ 							break;
      /******/ 					}
      /******/ 				},
      /******/ 		
      /******/ 				// Management API
      /******/ 				check: hotCheck,
      /******/ 				apply: hotApply,
      /******/ 				status: function (l) {
      /******/ 					if (!l) return currentStatus;
      /******/ 					registeredStatusHandlers.push(l);
      /******/ 				},
      /******/ 				addStatusHandler: function (l) {
      /******/ 					registeredStatusHandlers.push(l);
      /******/ 				},
      /******/ 				removeStatusHandler: function (l) {
      /******/ 					var idx = registeredStatusHandlers.indexOf(l);
      /******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
      /******/ 				},
      /******/ 		
      /******/ 				//inherit from previous dispose call
      /******/ 				data: currentModuleData[moduleId]
      /******/ 			};
      /******/ 			currentChildModule = undefined;
      /******/ 			return hot;
      /******/ 		}
      /******/ 		
      /******/ 		function setStatus(newStatus) {
      /******/ 			currentStatus = newStatus;
      /******/ 			var results = [];
      /******/ 		
      /******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
      /******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
      /******/ 		
      /******/ 			return Promise.all(results);
      /******/ 		}
      /******/ 		
      /******/ 		function trackBlockingPromise(promise) {
      /******/ 			switch (currentStatus) {
      /******/ 				case "ready":
      /******/ 					setStatus("prepare");
      /******/ 					blockingPromises.push(promise);
      /******/ 					waitForBlockingPromises(function () {
      /******/ 						return setStatus("ready");
      /******/ 					});
      /******/ 					return promise;
      /******/ 				case "prepare":
      /******/ 					blockingPromises.push(promise);
      /******/ 					return promise;
      /******/ 				default:
      /******/ 					return promise;
      /******/ 			}
      /******/ 		}
      /******/ 		
      /******/ 		function waitForBlockingPromises(fn) {
      /******/ 			if (blockingPromises.length === 0) return fn();
      /******/ 			var blocker = blockingPromises;
      /******/ 			blockingPromises = [];
      /******/ 			return Promise.all(blocker).then(function () {
      /******/ 				return waitForBlockingPromises(fn);
      /******/ 			});
      /******/ 		}
      /******/ 		
      /******/ 		function hotCheck(applyOnUpdate) {
      /******/ 			if (currentStatus !== "idle") {
      /******/ 				throw new Error("check() is only allowed in idle status");
      /******/ 			}
      /******/ 			return setStatus("check")
      /******/ 				.then(__webpack_require__.hmrM)
      /******/ 				.then(function (update) {
      /******/ 					if (!update) {
      /******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
      /******/ 							function () {
      /******/ 								return null;
      /******/ 							}
      /******/ 						);
      /******/ 					}
      /******/ 		
      /******/ 					return setStatus("prepare").then(function () {
      /******/ 						var updatedModules = [];
      /******/ 						blockingPromises = [];
      /******/ 						currentUpdateApplyHandlers = [];
      /******/ 		
      /******/ 						return Promise.all(
      /******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
      /******/ 								promises,
      /******/ 								key
      /******/ 							) {
      /******/ 								__webpack_require__.hmrC[key](
      /******/ 									update.c,
      /******/ 									update.r,
      /******/ 									update.m,
      /******/ 									promises,
      /******/ 									currentUpdateApplyHandlers,
      /******/ 									updatedModules
      /******/ 								);
      /******/ 								return promises;
      /******/ 							},
      /******/ 							[])
      /******/ 						).then(function () {
      /******/ 							return waitForBlockingPromises(function () {
      /******/ 								if (applyOnUpdate) {
      /******/ 									return internalApply(applyOnUpdate);
      /******/ 								} else {
      /******/ 									return setStatus("ready").then(function () {
      /******/ 										return updatedModules;
      /******/ 									});
      /******/ 								}
      /******/ 							});
      /******/ 						});
      /******/ 					});
      /******/ 				});
      /******/ 		}
      /******/ 		
      /******/ 		function hotApply(options) {
      /******/ 			if (currentStatus !== "ready") {
      /******/ 				return Promise.resolve().then(function () {
      /******/ 					throw new Error("apply() is only allowed in ready status");
      /******/ 				});
      /******/ 			}
      /******/ 			return internalApply(options);
      /******/ 		}
      /******/ 		
      /******/ 		function internalApply(options) {
      /******/ 			options = options || {};
      /******/ 		
      /******/ 			applyInvalidatedModules();
      /******/ 		
      /******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
      /******/ 				return handler(options);
      /******/ 			});
      /******/ 			currentUpdateApplyHandlers = undefined;
      /******/ 		
      /******/ 			var errors = results
      /******/ 				.map(function (r) {
      /******/ 					return r.error;
      /******/ 				})
      /******/ 				.filter(Boolean);
      /******/ 		
      /******/ 			if (errors.length > 0) {
      /******/ 				return setStatus("abort").then(function () {
      /******/ 					throw errors[0];
      /******/ 				});
      /******/ 			}
      /******/ 		
      /******/ 			// Now in "dispose" phase
      /******/ 			var disposePromise = setStatus("dispose");
      /******/ 		
      /******/ 			results.forEach(function (result) {
      /******/ 				if (result.dispose) result.dispose();
      /******/ 			});
      /******/ 		
      /******/ 			// Now in "apply" phase
      /******/ 			var applyPromise = setStatus("apply");
      /******/ 		
      /******/ 			var error;
      /******/ 			var reportError = function (err) {
      /******/ 				if (!error) error = err;
      /******/ 			};
      /******/ 		
      /******/ 			var outdatedModules = [];
      /******/ 			results.forEach(function (result) {
      /******/ 				if (result.apply) {
      /******/ 					var modules = result.apply(reportError);
      /******/ 					if (modules) {
      /******/ 						for (var i = 0; i < modules.length; i++) {
      /******/ 							outdatedModules.push(modules[i]);
      /******/ 						}
      /******/ 					}
      /******/ 				}
      /******/ 			});
      /******/ 		
      /******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
      /******/ 				// handle errors in accept handlers and self accepted module load
      /******/ 				if (error) {
      /******/ 					return setStatus("fail").then(function () {
      /******/ 						throw error;
      /******/ 					});
      /******/ 				}
      /******/ 		
      /******/ 				if (queuedInvalidatedModules) {
      /******/ 					return internalApply(options).then(function (list) {
      /******/ 						outdatedModules.forEach(function (moduleId) {
      /******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
      /******/ 						});
      /******/ 						return list;
      /******/ 					});
      /******/ 				}
      /******/ 		
      /******/ 				return setStatus("idle").then(function () {
      /******/ 					return outdatedModules;
      /******/ 				});
      /******/ 			});
      /******/ 		}
      /******/ 		
      /******/ 		function applyInvalidatedModules() {
      /******/ 			if (queuedInvalidatedModules) {
      /******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
      /******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
      /******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
      /******/ 						__webpack_require__.hmrI[key](
      /******/ 							moduleId,
      /******/ 							currentUpdateApplyHandlers
      /******/ 						);
      /******/ 					});
      /******/ 				});
      /******/ 				queuedInvalidatedModules = undefined;
      /******/ 				return true;
      /******/ 			}
      /******/ 		}
      /******/ 	})();
      /******/ 	
      /******/ 	/* webpack/runtime/publicPath */
      /******/ 	(() => {
      /******/ 		var scriptUrl;
      /******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
      /******/ 		var document = __webpack_require__.g.document;
      /******/ 		if (!scriptUrl && document) {
      /******/ 			if (document.currentScript)
      /******/ 				scriptUrl = document.currentScript.src
      /******/ 			if (!scriptUrl) {
      /******/ 				var scripts = document.getElementsByTagName("script");
      /******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
      /******/ 			}
      /******/ 		}
      /******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
      /******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
      /******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
      /******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
      /******/ 		__webpack_require__.p = scriptUrl;
      /******/ 	})();
      /******/ 	
      /******/ 	/* webpack/runtime/jsonp chunk loading */
      /******/ 	(() => {
      /******/ 		// no baseURI
      /******/ 		
      /******/ 		// object to store loaded and loading chunks
      /******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
      /******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      /******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
      /******/ 			"main": 0
      /******/ 		};
      /******/ 		
      /******/ 		// no chunk on demand loading
      /******/ 		
      /******/ 		// no prefetching
      /******/ 		
      /******/ 		// no preloaded
      /******/ 		
      /******/ 		var currentUpdatedModulesList;
      /******/ 		var waitingUpdateResolves = {};
      /******/ 		function loadUpdateChunk(chunkId) {
      /******/ 			return new Promise((resolve, reject) => {
      /******/ 				waitingUpdateResolves[chunkId] = resolve;
      /******/ 				// start update chunk loading
      /******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
      /******/ 				// create error before stack unwound to get useful stacktrace later
      /******/ 				var error = new Error();
      /******/ 				var loadingEnded = (event) => {
      /******/ 					if(waitingUpdateResolves[chunkId]) {
      /******/ 						waitingUpdateResolves[chunkId] = undefined
      /******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
      /******/ 						var realSrc = event && event.target && event.target.src;
      /******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
      /******/ 						error.name = 'ChunkLoadError';
      /******/ 						error.type = errorType;
      /******/ 						error.request = realSrc;
      /******/ 						reject(error);
      /******/ 					}
      /******/ 				};
      /******/ 				__webpack_require__.l(url, loadingEnded);
      /******/ 			});
      /******/ 		}
      /******/ 		
      /******/ 		self["webpackHotUpdatewangeditor_for_react_demo"] = (chunkId, moreModules, runtime) => {
      /******/ 			for(var moduleId in moreModules) {
      /******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
      /******/ 					currentUpdate[moduleId] = moreModules[moduleId];
      /******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
      /******/ 				}
      /******/ 			}
      /******/ 			if(runtime) currentUpdateRuntime.push(runtime);
      /******/ 			if(waitingUpdateResolves[chunkId]) {
      /******/ 				waitingUpdateResolves[chunkId]();
      /******/ 				waitingUpdateResolves[chunkId] = undefined;
      /******/ 			}
      /******/ 		};
      /******/ 		
      /******/ 		var currentUpdateChunks;
      /******/ 		var currentUpdate;
      /******/ 		var currentUpdateRemovedChunks;
      /******/ 		var currentUpdateRuntime;
      /******/ 		function applyHandler(options) {
      /******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
      /******/ 			currentUpdateChunks = undefined;
      /******/ 			function getAffectedModuleEffects(updateModuleId) {
      /******/ 				var outdatedModules = [updateModuleId];
      /******/ 				var outdatedDependencies = {};
      /******/ 		
      /******/ 				var queue = outdatedModules.map(function (id) {
      /******/ 					return {
      /******/ 						chain: [id],
      /******/ 						id: id
      /******/ 					};
      /******/ 				});
      /******/ 				while (queue.length > 0) {
      /******/ 					var queueItem = queue.pop();
      /******/ 					var moduleId = queueItem.id;
      /******/ 					var chain = queueItem.chain;
      /******/ 					var module = __webpack_require__.c[moduleId];
      /******/ 					if (
      /******/ 						!module ||
      /******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
      /******/ 					)
      /******/ 						continue;
      /******/ 					if (module.hot._selfDeclined) {
      /******/ 						return {
      /******/ 							type: "self-declined",
      /******/ 							chain: chain,
      /******/ 							moduleId: moduleId
      /******/ 						};
      /******/ 					}
      /******/ 					if (module.hot._main) {
      /******/ 						return {
      /******/ 							type: "unaccepted",
      /******/ 							chain: chain,
      /******/ 							moduleId: moduleId
      /******/ 						};
      /******/ 					}
      /******/ 					for (var i = 0; i < module.parents.length; i++) {
      /******/ 						var parentId = module.parents[i];
      /******/ 						var parent = __webpack_require__.c[parentId];
      /******/ 						if (!parent) continue;
      /******/ 						if (parent.hot._declinedDependencies[moduleId]) {
      /******/ 							return {
      /******/ 								type: "declined",
      /******/ 								chain: chain.concat([parentId]),
      /******/ 								moduleId: moduleId,
      /******/ 								parentId: parentId
      /******/ 							};
      /******/ 						}
      /******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
      /******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
      /******/ 							if (!outdatedDependencies[parentId])
      /******/ 								outdatedDependencies[parentId] = [];
      /******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
      /******/ 							continue;
      /******/ 						}
      /******/ 						delete outdatedDependencies[parentId];
      /******/ 						outdatedModules.push(parentId);
      /******/ 						queue.push({
      /******/ 							chain: chain.concat([parentId]),
      /******/ 							id: parentId
      /******/ 						});
      /******/ 					}
      /******/ 				}
      /******/ 		
      /******/ 				return {
      /******/ 					type: "accepted",
      /******/ 					moduleId: updateModuleId,
      /******/ 					outdatedModules: outdatedModules,
      /******/ 					outdatedDependencies: outdatedDependencies
      /******/ 				};
      /******/ 			}
      /******/ 		
      /******/ 			function addAllToSet(a, b) {
      /******/ 				for (var i = 0; i < b.length; i++) {
      /******/ 					var item = b[i];
      /******/ 					if (a.indexOf(item) === -1) a.push(item);
      /******/ 				}
      /******/ 			}
      /******/ 		
      /******/ 			// at begin all updates modules are outdated
      /******/ 			// the "outdated" status can propagate to parents if they don't accept the children
      /******/ 			var outdatedDependencies = {};
      /******/ 			var outdatedModules = [];
      /******/ 			var appliedUpdate = {};
      /******/ 		
      /******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
      /******/ 				console.warn(
      /******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
      /******/ 				);
      /******/ 			};
      /******/ 		
      /******/ 			for (var moduleId in currentUpdate) {
      /******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
      /******/ 					var newModuleFactory = currentUpdate[moduleId];
      /******/ 					/** @type {TODO} */
      /******/ 					var result;
      /******/ 					if (newModuleFactory) {
      /******/ 						result = getAffectedModuleEffects(moduleId);
      /******/ 					} else {
      /******/ 						result = {
      /******/ 							type: "disposed",
      /******/ 							moduleId: moduleId
      /******/ 						};
      /******/ 					}
      /******/ 					/** @type {Error|false} */
      /******/ 					var abortError = false;
      /******/ 					var doApply = false;
      /******/ 					var doDispose = false;
      /******/ 					var chainInfo = "";
      /******/ 					if (result.chain) {
      /******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
      /******/ 					}
      /******/ 					switch (result.type) {
      /******/ 						case "self-declined":
      /******/ 							if (options.onDeclined) options.onDeclined(result);
      /******/ 							if (!options.ignoreDeclined)
      /******/ 								abortError = new Error(
      /******/ 									"Aborted because of self decline: " +
      /******/ 										result.moduleId +
      /******/ 										chainInfo
      /******/ 								);
      /******/ 							break;
      /******/ 						case "declined":
      /******/ 							if (options.onDeclined) options.onDeclined(result);
      /******/ 							if (!options.ignoreDeclined)
      /******/ 								abortError = new Error(
      /******/ 									"Aborted because of declined dependency: " +
      /******/ 										result.moduleId +
      /******/ 										" in " +
      /******/ 										result.parentId +
      /******/ 										chainInfo
      /******/ 								);
      /******/ 							break;
      /******/ 						case "unaccepted":
      /******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
      /******/ 							if (!options.ignoreUnaccepted)
      /******/ 								abortError = new Error(
      /******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
      /******/ 								);
      /******/ 							break;
      /******/ 						case "accepted":
      /******/ 							if (options.onAccepted) options.onAccepted(result);
      /******/ 							doApply = true;
      /******/ 							break;
      /******/ 						case "disposed":
      /******/ 							if (options.onDisposed) options.onDisposed(result);
      /******/ 							doDispose = true;
      /******/ 							break;
      /******/ 						default:
      /******/ 							throw new Error("Unexception type " + result.type);
      /******/ 					}
      /******/ 					if (abortError) {
      /******/ 						return {
      /******/ 							error: abortError
      /******/ 						};
      /******/ 					}
      /******/ 					if (doApply) {
      /******/ 						appliedUpdate[moduleId] = newModuleFactory;
      /******/ 						addAllToSet(outdatedModules, result.outdatedModules);
      /******/ 						for (moduleId in result.outdatedDependencies) {
      /******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
      /******/ 								if (!outdatedDependencies[moduleId])
      /******/ 									outdatedDependencies[moduleId] = [];
      /******/ 								addAllToSet(
      /******/ 									outdatedDependencies[moduleId],
      /******/ 									result.outdatedDependencies[moduleId]
      /******/ 								);
      /******/ 							}
      /******/ 						}
      /******/ 					}
      /******/ 					if (doDispose) {
      /******/ 						addAllToSet(outdatedModules, [result.moduleId]);
      /******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
      /******/ 					}
      /******/ 				}
      /******/ 			}
      /******/ 			currentUpdate = undefined;
      /******/ 		
      /******/ 			// Store self accepted outdated modules to require them later by the module system
      /******/ 			var outdatedSelfAcceptedModules = [];
      /******/ 			for (var j = 0; j < outdatedModules.length; j++) {
      /******/ 				var outdatedModuleId = outdatedModules[j];
      /******/ 				var module = __webpack_require__.c[outdatedModuleId];
      /******/ 				if (
      /******/ 					module &&
      /******/ 					(module.hot._selfAccepted || module.hot._main) &&
      /******/ 					// removed self-accepted modules should not be required
      /******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
      /******/ 					// when called invalidate self-accepting is not possible
      /******/ 					!module.hot._selfInvalidated
      /******/ 				) {
      /******/ 					outdatedSelfAcceptedModules.push({
      /******/ 						module: outdatedModuleId,
      /******/ 						require: module.hot._requireSelf,
      /******/ 						errorHandler: module.hot._selfAccepted
      /******/ 					});
      /******/ 				}
      /******/ 			}
      /******/ 		
      /******/ 			var moduleOutdatedDependencies;
      /******/ 		
      /******/ 			return {
      /******/ 				dispose: function () {
      /******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
      /******/ 						delete installedChunks[chunkId];
      /******/ 					});
      /******/ 					currentUpdateRemovedChunks = undefined;
      /******/ 		
      /******/ 					var idx;
      /******/ 					var queue = outdatedModules.slice();
      /******/ 					while (queue.length > 0) {
      /******/ 						var moduleId = queue.pop();
      /******/ 						var module = __webpack_require__.c[moduleId];
      /******/ 						if (!module) continue;
      /******/ 		
      /******/ 						var data = {};
      /******/ 		
      /******/ 						// Call dispose handlers
      /******/ 						var disposeHandlers = module.hot._disposeHandlers;
      /******/ 						for (j = 0; j < disposeHandlers.length; j++) {
      /******/ 							disposeHandlers[j].call(null, data);
      /******/ 						}
      /******/ 						__webpack_require__.hmrD[moduleId] = data;
      /******/ 		
      /******/ 						// disable module (this disables requires from this module)
      /******/ 						module.hot.active = false;
      /******/ 		
      /******/ 						// remove module from cache
      /******/ 						delete __webpack_require__.c[moduleId];
      /******/ 		
      /******/ 						// when disposing there is no need to call dispose handler
      /******/ 						delete outdatedDependencies[moduleId];
      /******/ 		
      /******/ 						// remove "parents" references from all children
      /******/ 						for (j = 0; j < module.children.length; j++) {
      /******/ 							var child = __webpack_require__.c[module.children[j]];
      /******/ 							if (!child) continue;
      /******/ 							idx = child.parents.indexOf(moduleId);
      /******/ 							if (idx >= 0) {
      /******/ 								child.parents.splice(idx, 1);
      /******/ 							}
      /******/ 						}
      /******/ 					}
      /******/ 		
      /******/ 					// remove outdated dependency from module children
      /******/ 					var dependency;
      /******/ 					for (var outdatedModuleId in outdatedDependencies) {
      /******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
      /******/ 							module = __webpack_require__.c[outdatedModuleId];
      /******/ 							if (module) {
      /******/ 								moduleOutdatedDependencies =
      /******/ 									outdatedDependencies[outdatedModuleId];
      /******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
      /******/ 									dependency = moduleOutdatedDependencies[j];
      /******/ 									idx = module.children.indexOf(dependency);
      /******/ 									if (idx >= 0) module.children.splice(idx, 1);
      /******/ 								}
      /******/ 							}
      /******/ 						}
      /******/ 					}
      /******/ 				},
      /******/ 				apply: function (reportError) {
      /******/ 					// insert new code
      /******/ 					for (var updateModuleId in appliedUpdate) {
      /******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
      /******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
      /******/ 						}
      /******/ 					}
      /******/ 		
      /******/ 					// run new runtime modules
      /******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
      /******/ 						currentUpdateRuntime[i](__webpack_require__);
      /******/ 					}
      /******/ 		
      /******/ 					// call accept handlers
      /******/ 					for (var outdatedModuleId in outdatedDependencies) {
      /******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
      /******/ 							var module = __webpack_require__.c[outdatedModuleId];
      /******/ 							if (module) {
      /******/ 								moduleOutdatedDependencies =
      /******/ 									outdatedDependencies[outdatedModuleId];
      /******/ 								var callbacks = [];
      /******/ 								var errorHandlers = [];
      /******/ 								var dependenciesForCallbacks = [];
      /******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
      /******/ 									var dependency = moduleOutdatedDependencies[j];
      /******/ 									var acceptCallback =
      /******/ 										module.hot._acceptedDependencies[dependency];
      /******/ 									var errorHandler =
      /******/ 										module.hot._acceptedErrorHandlers[dependency];
      /******/ 									if (acceptCallback) {
      /******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
      /******/ 										callbacks.push(acceptCallback);
      /******/ 										errorHandlers.push(errorHandler);
      /******/ 										dependenciesForCallbacks.push(dependency);
      /******/ 									}
      /******/ 								}
      /******/ 								for (var k = 0; k < callbacks.length; k++) {
      /******/ 									try {
      /******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
      /******/ 									} catch (err) {
      /******/ 										if (typeof errorHandlers[k] === "function") {
      /******/ 											try {
      /******/ 												errorHandlers[k](err, {
      /******/ 													moduleId: outdatedModuleId,
      /******/ 													dependencyId: dependenciesForCallbacks[k]
      /******/ 												});
      /******/ 											} catch (err2) {
      /******/ 												if (options.onErrored) {
      /******/ 													options.onErrored({
      /******/ 														type: "accept-error-handler-errored",
      /******/ 														moduleId: outdatedModuleId,
      /******/ 														dependencyId: dependenciesForCallbacks[k],
      /******/ 														error: err2,
      /******/ 														originalError: err
      /******/ 													});
      /******/ 												}
      /******/ 												if (!options.ignoreErrored) {
      /******/ 													reportError(err2);
      /******/ 													reportError(err);
      /******/ 												}
      /******/ 											}
      /******/ 										} else {
      /******/ 											if (options.onErrored) {
      /******/ 												options.onErrored({
      /******/ 													type: "accept-errored",
      /******/ 													moduleId: outdatedModuleId,
      /******/ 													dependencyId: dependenciesForCallbacks[k],
      /******/ 													error: err
      /******/ 												});
      /******/ 											}
      /******/ 											if (!options.ignoreErrored) {
      /******/ 												reportError(err);
      /******/ 											}
      /******/ 										}
      /******/ 									}
      /******/ 								}
      /******/ 							}
      /******/ 						}
      /******/ 					}
      /******/ 		
      /******/ 					// Load self accepted modules
      /******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
      /******/ 						var item = outdatedSelfAcceptedModules[o];
      /******/ 						var moduleId = item.module;
      /******/ 						try {
      /******/ 							item.require(moduleId);
      /******/ 						} catch (err) {
      /******/ 							if (typeof item.errorHandler === "function") {
      /******/ 								try {
      /******/ 									item.errorHandler(err, {
      /******/ 										moduleId: moduleId,
      /******/ 										module: __webpack_require__.c[moduleId]
      /******/ 									});
      /******/ 								} catch (err2) {
      /******/ 									if (options.onErrored) {
      /******/ 										options.onErrored({
      /******/ 											type: "self-accept-error-handler-errored",
      /******/ 											moduleId: moduleId,
      /******/ 											error: err2,
      /******/ 											originalError: err
      /******/ 										});
      /******/ 									}
      /******/ 									if (!options.ignoreErrored) {
      /******/ 										reportError(err2);
      /******/ 										reportError(err);
      /******/ 									}
      /******/ 								}
      /******/ 							} else {
      /******/ 								if (options.onErrored) {
      /******/ 									options.onErrored({
      /******/ 										type: "self-accept-errored",
      /******/ 										moduleId: moduleId,
      /******/ 										error: err
      /******/ 									});
      /******/ 								}
      /******/ 								if (!options.ignoreErrored) {
      /******/ 									reportError(err);
      /******/ 								}
      /******/ 							}
      /******/ 						}
      /******/ 					}
      /******/ 		
      /******/ 					return outdatedModules;
      /******/ 				}
      /******/ 			};
      /******/ 		}
      /******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
      /******/ 			if (!currentUpdate) {
      /******/ 				currentUpdate = {};
      /******/ 				currentUpdateRuntime = [];
      /******/ 				currentUpdateRemovedChunks = [];
      /******/ 				applyHandlers.push(applyHandler);
      /******/ 			}
      /******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
      /******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
      /******/ 			}
      /******/ 		};
      /******/ 		__webpack_require__.hmrC.jsonp = function (
      /******/ 			chunkIds,
      /******/ 			removedChunks,
      /******/ 			removedModules,
      /******/ 			promises,
      /******/ 			applyHandlers,
      /******/ 			updatedModulesList
      /******/ 		) {
      /******/ 			applyHandlers.push(applyHandler);
      /******/ 			currentUpdateChunks = {};
      /******/ 			currentUpdateRemovedChunks = removedChunks;
      /******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
      /******/ 				obj[key] = false;
      /******/ 				return obj;
      /******/ 			}, {});
      /******/ 			currentUpdateRuntime = [];
      /******/ 			chunkIds.forEach(function (chunkId) {
      /******/ 				if (
      /******/ 					__webpack_require__.o(installedChunks, chunkId) &&
      /******/ 					installedChunks[chunkId] !== undefined
      /******/ 				) {
      /******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
      /******/ 					currentUpdateChunks[chunkId] = true;
      /******/ 				}
      /******/ 			});
      /******/ 			if (__webpack_require__.f) {
      /******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
      /******/ 					if (
      /******/ 						currentUpdateChunks &&
      /******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
      /******/ 						__webpack_require__.o(installedChunks, chunkId) &&
      /******/ 						installedChunks[chunkId] !== undefined
      /******/ 					) {
      /******/ 						promises.push(loadUpdateChunk(chunkId));
      /******/ 						currentUpdateChunks[chunkId] = true;
      /******/ 					}
      /******/ 				};
      /******/ 			}
      /******/ 		};
      /******/ 		
      /******/ 		__webpack_require__.hmrM = () => {
      /******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
      /******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
      /******/ 				if(response.status === 404) return; // no update available
      /******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
      /******/ 				return response.json();
      /******/ 			});
      /******/ 		};
      /******/ 		
      /******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
      /******/ 		
      /******/ 		// install a JSONP callback for chunk loading
      /******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      /******/ 			var [chunkIds, moreModules, runtime] = data;
      /******/ 			// add "moreModules" to the modules object,
      /******/ 			// then flag all "chunkIds" as loaded and fire callback
      /******/ 			var moduleId, chunkId, i = 0;
      /******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
      /******/ 				for(moduleId in moreModules) {
      /******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
      /******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
      /******/ 					}
      /******/ 				}
      /******/ 				if(runtime) var result = runtime(__webpack_require__);
      /******/ 			}
      /******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/ 			for(;i < chunkIds.length; i++) {
      /******/ 				chunkId = chunkIds[i];
      /******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
      /******/ 					installedChunks[chunkId][0]();
      /******/ 				}
      /******/ 				installedChunks[chunkIds[i]] = 0;
      /******/ 			}
      /******/ 			return __webpack_require__.O(result);
      /******/ 		}
      /******/ 		
      /******/ 		var chunkLoadingGlobal = self["webpackChunkwangeditor_for_react_demo"] = self["webpackChunkwangeditor_for_react_demo"] || [];
      /******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
      /******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
      /******/ 	})();
      /******/ 	
      /************************************************************************/
      /******/ 	
      /******/ 	// module cache are used so entry inlining is disabled
      /******/ 	// startup
      /******/ 	// Load entry module and return exports
      /******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_i18next_dist_esm_i18next_js-node_modules_react-dom_index_js-node_modules-d0955f"], () => (__webpack_require__("./index.js")))
      /******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
      /******/ 	
      /******/ })()
      ;
      //# sourceMappingURL=main.bundle.js.map