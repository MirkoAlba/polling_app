/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/index.scss */ \"./sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cookie */ \"./node_modules/cookie/index.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _apollo_client_apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../apollo/client/apollo-client */ \"./apollo/client/apollo-client.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _helpers_query_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/query-client */ \"./helpers/query-client.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n        query VerifyToken($token: String!) {\\n          VerifyToken(token: $token) {\\n            message\\n            verified\\n          }\\n        }\\n      \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n //scss style\n\n\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps,\n      verificato = _ref.verificato;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(verificato === null || verificato === void 0 ? void 0 : verificato.verified),\n      isLoggedIn = _useState[0],\n      setIsLoggedIn = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_apollo_client_apollo_client__WEBPACK_IMPORTED_MODULE_10__.AuthProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_6__.default, {\n      isLoggedIn: isLoggedIn,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n        isLoggedIn: isLoggedIn\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MyApp, \"oPl0k2BQ+SBKAuUtkiKlXy0kEqQ=\");\n\n_c = MyApp;\n\nMyApp.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(appContext) {\n    var _appContext$ctx$req, _tokenInCookie, _data, _data$data;\n\n    var appProps, tokenInCookie, _appContext$ctx$req2, token, data, verificato;\n\n    return _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return next_app__WEBPACK_IMPORTED_MODULE_9___default().getInitialProps(appContext);\n\n          case 2:\n            appProps = _context.sent;\n\n            if ((_appContext$ctx$req = appContext.ctx.req) !== null && _appContext$ctx$req !== void 0 && _appContext$ctx$req.headers.cookie) {\n              tokenInCookie = cookie__WEBPACK_IMPORTED_MODULE_8__.parse((_appContext$ctx$req2 = appContext.ctx.req) === null || _appContext$ctx$req2 === void 0 ? void 0 : _appContext$ctx$req2.headers.cookie);\n            }\n\n            token = (_tokenInCookie = tokenInCookie) === null || _tokenInCookie === void 0 ? void 0 : _tokenInCookie.jid; //estraggo token dal cookie\n\n            if (!token) {\n              _context.next = 9;\n              break;\n            }\n\n            _context.next = 8;\n            return (0,_helpers_query_client__WEBPACK_IMPORTED_MODULE_11__.queryClient)({\n              query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.gql)(_templateObject()),\n              variables: {\n                token: token\n              }\n            });\n\n          case 8:\n            data = _context.sent;\n\n          case 9:\n            verificato = (_data = data) === null || _data === void 0 ? void 0 : (_data$data = _data.data) === null || _data$data === void 0 ? void 0 : _data$data.VerifyToken; // ritorno oggetto verificato nelle props\n\n            return _context.abrupt(\"return\", _objectSpread(_objectSpread({}, appProps), {}, {\n              verificato: verificato\n            }));\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidmVyaWZpY2F0byIsInVzZVN0YXRlIiwidmVyaWZpZWQiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJBcHAiLCJhcHBQcm9wcyIsImN0eCIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiLCJ0b2tlbkluQ29va2llIiwidG9rZW4iLCJqaWQiLCJxdWVyeUNsaWVudCIsInF1ZXJ5IiwiZ3FsIiwidmFyaWFibGVzIiwiZGF0YSIsIlZlcmlmeVRva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQTZCOztBQUM3QjtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxLQUFULE9BQXFEO0FBQUE7O0FBQUEsTUFBcENDLFNBQW9DLFFBQXBDQSxTQUFvQztBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7O0FBQUEsa0JBQ2ZDLCtDQUFRLENBQUNELFVBQUQsYUFBQ0EsVUFBRCx1QkFBQ0EsVUFBVSxDQUFFRSxRQUFiLENBRE87QUFBQSxNQUM1Q0MsVUFENEM7QUFBQSxNQUNoQ0MsYUFEZ0M7O0FBR25ELHNCQUNFLDhEQUFDLHVFQUFEO0FBQUEsMkJBQ0UsOERBQUMsOERBQUQ7QUFBUSxnQkFBVSxFQUFFRCxVQUFwQjtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsa0NBQWVKLFNBQWY7QUFBMEIsa0JBQVUsRUFBRUk7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7R0FWUU4sSzs7S0FBQUEsSzs7QUFZVEEsS0FBSyxDQUFDUSxlQUFOO0FBQUEsd1VBQXdCLGlCQUFPQyxVQUFQO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNDQywrREFBQSxDQUFvQkQsVUFBcEIsQ0FERDs7QUFBQTtBQUNoQkUsb0JBRGdCOztBQU10Qix1Q0FBSUYsVUFBVSxDQUFDRyxHQUFYLENBQWVDLEdBQW5CLGdEQUFJLG9CQUFvQkMsT0FBcEIsQ0FBNEJDLE1BQWhDLEVBQXdDO0FBQ3RDQywyQkFBYSxHQUFHRCx5Q0FBQSx5QkFBYU4sVUFBVSxDQUFDRyxHQUFYLENBQWVDLEdBQTVCLHlEQUFhLHFCQUFvQkMsT0FBcEIsQ0FBNEJDLE1BQXpDLENBQWhCO0FBQ0Q7O0FBRUdFLGlCQVZrQixxQkFVVkQsYUFWVSxtREFVVixlQUFlRSxHQVZMLEVBVVU7O0FBVlYsaUJBYWxCRCxLQWJrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQWNQRSxtRUFBVyxDQUFDO0FBQ3ZCQyxtQkFBSyxFQUFFQyxvREFBRixtQkFEa0I7QUFTdkJDLHVCQUFTLEVBQUU7QUFBRUwscUJBQUssRUFBTEE7QUFBRjtBQVRZLGFBQUQsQ0FkSjs7QUFBQTtBQWNwQk0sZ0JBZG9COztBQUFBO0FBMkJoQnBCLHNCQTNCZ0IsWUEyQkhvQixJQTNCRyx3REEyQkgsTUFBTUEsSUEzQkgsK0NBMkJILFdBQVlDLFdBM0JULEVBNkJ0Qjs7QUE3QnNCLDZFQThCVmIsUUE5QlU7QUE4QkFSLHdCQUFVLEVBQVZBO0FBOUJBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlDQSwrREFBZUgsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zYXNzL2luZGV4LnNjc3NcIjsgLy9zY3NzIHN0eWxlXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4uL2Fwb2xsby9jbGllbnQvYXBvbGxvLWNsaWVudFwiO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBxdWVyeUNsaWVudCB9IGZyb20gXCIuLi9oZWxwZXJzL3F1ZXJ5LWNsaWVudFwiO1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgdmVyaWZpY2F0byB9KSB7XG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKHZlcmlmaWNhdG8/LnZlcmlmaWVkKTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8TGF5b3V0IGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xuXG4gIC8vIHByaW1hIGNoZSBsYSBtaWEgYXBwIHZlbmdhIHJlbmRlcml6emF0YSBjb250cm9sbG8gY2hlIGlsIHRva2VuXG4gIC8vIHNpYSBwcmVzZW50ZSBpbiB0dXR0ZSBsZSByZXEgcXVpbmRpIGxvIHByZW5kbyBlIGxvIHBhcnNvXG4gIHZhciB0b2tlbkluQ29va2llO1xuICBpZiAoYXBwQ29udGV4dC5jdHgucmVxPy5oZWFkZXJzLmNvb2tpZSkge1xuICAgIHRva2VuSW5Db29raWUgPSBjb29raWUucGFyc2UoYXBwQ29udGV4dC5jdHgucmVxPy5oZWFkZXJzLmNvb2tpZSk7XG4gIH1cblxuICB2YXIgdG9rZW4gPSB0b2tlbkluQ29va2llPy5qaWQ7IC8vZXN0cmFnZ28gdG9rZW4gZGFsIGNvb2tpZVxuICB2YXIgZGF0YTtcbiAgLy92ZXJpZmljbyB0b2tlbiBmYWNlbmRvIHF1ZXJ5IGFsbCBBUElcbiAgaWYgKHRva2VuKSB7XG4gICAgZGF0YSA9IGF3YWl0IHF1ZXJ5Q2xpZW50KHtcbiAgICAgIHF1ZXJ5OiBncWxgXG4gICAgICAgIHF1ZXJ5IFZlcmlmeVRva2VuKCR0b2tlbjogU3RyaW5nISkge1xuICAgICAgICAgIFZlcmlmeVRva2VuKHRva2VuOiAkdG9rZW4pIHtcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgIHZlcmlmaWVkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgdmFyaWFibGVzOiB7IHRva2VuIH0sXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB2ZXJpZmljYXRvID0gZGF0YT8uZGF0YT8uVmVyaWZ5VG9rZW47XG5cbiAgLy8gcml0b3JubyBvZ2dldHRvIHZlcmlmaWNhdG8gbmVsbGUgcHJvcHNcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHZlcmlmaWNhdG8gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});