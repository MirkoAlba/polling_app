/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _taggedTemplateLiteral; }\n/* harmony export */ });\nfunction _taggedTemplateLiteral(strings, raw) {\n  if (!raw) {\n    raw = strings.slice(0);\n  }\n\n  return Object.freeze(Object.defineProperties(strings, {\n    raw: {\n      value: Object.freeze(raw)\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcz84Nzg1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90YWdnZWRUZW1wbGF0ZUxpdGVyYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpXG4gICAgfVxuICB9KSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/index.scss */ \"./sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cookie */ \"./node_modules/cookie/index.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _apollo_client_apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../apollo/client/apollo-client */ \"./apollo/client/apollo-client.js\");\n/* harmony import */ var _apollo_client_accessToken__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../apollo/client/accessToken */ \"./apollo/client/accessToken.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n      query {\\n        Me\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n //scss style\n\n\n\n\n\n\n\n\nfunction getCurrUser() {\n  return _getCurrUser.apply(this, arguments);\n}\n\nfunction _getCurrUser() {\n  _getCurrUser = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {\n    var client, _yield$client$query, data;\n\n    return _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return getStandaloneApolloClient();\n\n          case 2:\n            client = _context3.sent;\n            _context3.next = 5;\n            return client.query({\n              query: gql(_templateObject()) // fetchPolicy: \"cache-first\",\n\n            });\n\n          case 5:\n            _yield$client$query = _context3.sent;\n            data = _yield$client$query.data;\n            return _context3.abrupt(\"return\", data === null || data === void 0 ? void 0 : data.Me);\n\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _getCurrUser.apply(this, arguments);\n}\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps,\n      token = _ref.token;\n  (0,_apollo_client_accessToken__WEBPACK_IMPORTED_MODULE_11__.setAccessToken)(token);\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)( /*#__PURE__*/(0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {\n    var user;\n    return _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return getCurrUser();\n\n          case 2:\n            user = _context.sent;\n            setIsLoggedIn(user);\n            console.log(\"_app: ue avvenuto\");\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }))); //eseguo ogni volta che _app re-rendera\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_apollo_client_apollo_client__WEBPACK_IMPORTED_MODULE_10__.AuthProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_6__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MyApp, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = MyApp;\n\nMyApp.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(appContext) {\n    var _appContext$ctx$req, _tokenInCookie;\n\n    var appProps, tokenInCookie, _appContext$ctx$req2;\n\n    return _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return next_app__WEBPACK_IMPORTED_MODULE_9___default().getInitialProps(appContext);\n\n          case 2:\n            appProps = _context2.sent;\n\n            if ((_appContext$ctx$req = appContext.ctx.req) !== null && _appContext$ctx$req !== void 0 && _appContext$ctx$req.headers.cookie) {\n              tokenInCookie = cookie__WEBPACK_IMPORTED_MODULE_8__.parse((_appContext$ctx$req2 = appContext.ctx.req) === null || _appContext$ctx$req2 === void 0 ? void 0 : _appContext$ctx$req2.headers.cookie);\n            } // se non è presente il cookie vuol dire che non è stata fatta la login\n            // ritorno il token nelle props\n\n\n            return _context2.abrupt(\"return\", _objectSpread(_objectSpread({}, appProps), {}, {\n              token: (_tokenInCookie = tokenInCookie) === null || _tokenInCookie === void 0 ? void 0 : _tokenInCookie.jid\n            }));\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbImdldEN1cnJVc2VyIiwiZ2V0U3RhbmRhbG9uZUFwb2xsb0NsaWVudCIsImNsaWVudCIsInF1ZXJ5IiwiZ3FsIiwiZGF0YSIsIk1lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0b2tlbiIsInNldEFjY2Vzc1Rva2VuIiwidXNlRWZmZWN0IiwidXNlciIsInNldElzTG9nZ2VkSW4iLCJjb25zb2xlIiwibG9nIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsIkFwcCIsImFwcFByb3BzIiwiY3R4IiwicmVxIiwiaGVhZGVycyIsImNvb2tpZSIsInRva2VuSW5Db29raWUiLCJqaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUE2Qjs7QUFDN0I7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztTQUVlQSxXOzs7OzsyVUFBZjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDdUJDLHlCQUF5QixFQURoRDs7QUFBQTtBQUNRQyxrQkFEUjtBQUFBO0FBQUEsbUJBR3lCQSxNQUFNLENBQUNDLEtBQVAsQ0FBYTtBQUNsQ0EsbUJBQUssRUFBRUMsR0FBRixtQkFENkIsQ0FNbEM7O0FBTmtDLGFBQWIsQ0FIekI7O0FBQUE7QUFBQTtBQUdVQyxnQkFIVix1QkFHVUEsSUFIVjtBQUFBLDhDQVlTQSxJQVpULGFBWVNBLElBWlQsdUJBWVNBLElBQUksQ0FBRUMsRUFaZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBZUEsU0FBU0MsS0FBVCxPQUFnRDtBQUFBOztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFwQkMsU0FBb0IsUUFBcEJBLFNBQW9CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzlDQyw2RUFBYyxDQUFDRCxLQUFELENBQWQ7QUFFQUUsa0RBQVMseVVBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHV1osV0FBVyxFQUh0Qjs7QUFBQTtBQUdGYSxnQkFIRTtBQUlSQyx5QkFBYSxDQUFDRCxJQUFELENBQWI7QUFDQUUsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaOztBQUxRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsR0FBVCxDQUg4QyxDQVMxQzs7QUFFSixzQkFDRSw4REFBQyx1RUFBRDtBQUFBLDJCQUNFLDhEQUFDLDhEQUFEO0FBQUEsNkJBQ0UsOERBQUMsU0FBRCxvQkFBZVAsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztHQWxCUUYsSzs7S0FBQUEsSzs7QUFvQlRBLEtBQUssQ0FBQ1UsZUFBTjtBQUFBLHdVQUF3QixrQkFBT0MsVUFBUDtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDQ0MsK0RBQUEsQ0FBb0JELFVBQXBCLENBREQ7O0FBQUE7QUFDaEJFLG9CQURnQjs7QUFNdEIsdUNBQUlGLFVBQVUsQ0FBQ0csR0FBWCxDQUFlQyxHQUFuQixnREFBSSxvQkFBb0JDLE9BQXBCLENBQTRCQyxNQUFoQyxFQUF3QztBQUN0Q0MsMkJBQWEsR0FBR0QseUNBQUEseUJBQWFOLFVBQVUsQ0FBQ0csR0FBWCxDQUFlQyxHQUE1Qix5REFBYSxxQkFBb0JDLE9BQXBCLENBQTRCQyxNQUF6QyxDQUFoQjtBQUNELGFBUnFCLENBVXRCO0FBRUE7OztBQVpzQiw4RUFhVkosUUFiVTtBQWFBVixtQkFBSyxvQkFBRWUsYUFBRixtREFBRSxlQUFlQztBQWJ0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQkEsK0RBQWVuQixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3Nhc3MvaW5kZXguc2Nzc1wiOyAvL3Njc3Mgc3R5bGVcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4uL2Fwb2xsby9jbGllbnQvYXBvbGxvLWNsaWVudFwiO1xuaW1wb3J0IHsgc2V0QWNjZXNzVG9rZW4gfSBmcm9tIFwiLi4vYXBvbGxvL2NsaWVudC9hY2Nlc3NUb2tlblwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyVXNlcigpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgZ2V0U3RhbmRhbG9uZUFwb2xsb0NsaWVudCgpO1xuICAvLyBsYSBxdWVyeSByaXRvcmEgdHJ1ZSBvIGZhbHNlXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkge1xuICAgICAgICBNZVxuICAgICAgfVxuICAgIGAsXG4gICAgLy8gZmV0Y2hQb2xpY3k6IFwiY2FjaGUtZmlyc3RcIixcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE/Lk1lO1xufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCB0b2tlbiB9KSB7XG4gIHNldEFjY2Vzc1Rva2VuKHRva2VuKTtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIC8vIGZhY2NpbyBNZSBxdWVyeSBvZ25pIHZvbHRhIGNoZSByaS1yZW5kZXJhIHBlciB2ZXJpZmljYXJlIHVzZXIgbG9nZ2F0b1xuICAgIC8vIGluIHF1ZXN0byBtb2RvIHNvbm8gc2ljdXJvIGNoZSBqd3Qgw6ggc3RhdG8gdmVyaWZpY2F0byBzZXJ2ZXItc2lkZVxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRDdXJyVXNlcigpO1xuICAgIHNldElzTG9nZ2VkSW4odXNlcik7XG4gICAgY29uc29sZS5sb2coXCJfYXBwOiB1ZSBhdnZlbnV0b1wiKTtcbiAgfSk7IC8vZXNlZ3VvIG9nbmkgdm9sdGEgY2hlIF9hcHAgcmUtcmVuZGVyYVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XG5cbiAgLy8gcHJpbWEgY2hlIGxhIG1pYSBhcHAgdmVuZ2EgcmVuZGVyaXp6YXRhIGNvbnRyb2xsbyBjaGUgaWwgdG9rZW5cbiAgLy8gc2lhIHByZXNlbnRlIGluIHR1dHRlIGxlIHJlcSBxdWluZGkgbG8gcHJlbmRvIGUgbG8gcGFyc29cbiAgdmFyIHRva2VuSW5Db29raWU7XG4gIGlmIChhcHBDb250ZXh0LmN0eC5yZXE/LmhlYWRlcnMuY29va2llKSB7XG4gICAgdG9rZW5JbkNvb2tpZSA9IGNvb2tpZS5wYXJzZShhcHBDb250ZXh0LmN0eC5yZXE/LmhlYWRlcnMuY29va2llKTtcbiAgfVxuXG4gIC8vIHNlIG5vbiDDqCBwcmVzZW50ZSBpbCBjb29raWUgdnVvbCBkaXJlIGNoZSBub24gw6ggc3RhdGEgZmF0dGEgbGEgbG9naW5cblxuICAvLyByaXRvcm5vIGlsIHRva2VuIG5lbGxlIHByb3BzXG4gIHJldHVybiB7IC4uLmFwcFByb3BzLCB0b2tlbjogdG9rZW5JbkNvb2tpZT8uamlkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});