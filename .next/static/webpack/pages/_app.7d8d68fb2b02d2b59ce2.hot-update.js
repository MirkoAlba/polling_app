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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/index.scss */ \"./sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cookie */ \"./node_modules/cookie/index.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _apollo_client_apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../apollo/client/apollo-client */ \"./apollo/client/apollo-client.js\");\n/* harmony import */ var _apollo_client_accessToken__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../apollo/client/accessToken */ \"./apollo/client/accessToken.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _helpers_query_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/query-client */ \"./helpers/query-client.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n      query {\\n        Me\\n      }\\n    \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n        query VerifyToken($token: String!) {\\n          VerifyToken(token: $token) {\\n            message\\n            verified\\n          }\\n        }\\n      \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n //scss style\n\n\n\n\n\n\n\n\n\n\n\nfunction getCurrUser() {\n  return _getCurrUser.apply(this, arguments);\n}\n\nfunction _getCurrUser() {\n  _getCurrUser = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {\n    var client, _yield$client$query, data;\n\n    return _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return (0,_apollo_client_apollo_client__WEBPACK_IMPORTED_MODULE_10__.getStandaloneApolloClient)();\n\n          case 2:\n            client = _context3.sent;\n            _context3.next = 5;\n            return client.query({\n              query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.gql)(_templateObject2()) // fetchPolicy: \"cache-first\",\n\n            });\n\n          case 5:\n            _yield$client$query = _context3.sent;\n            data = _yield$client$query.data;\n            return _context3.abrupt(\"return\", data === null || data === void 0 ? void 0 : data.Me);\n\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _getCurrUser.apply(this, arguments);\n}\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps,\n      token = _ref.token;\n  (0,_apollo_client_accessToken__WEBPACK_IMPORTED_MODULE_11__.setAccessToken)(token);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(),\n      isLoggedIn = _useState[0],\n      setIsLoggedIn = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)( /*#__PURE__*/(0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {\n    var user;\n    return _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return getCurrUser();\n\n          case 2:\n            user = _context.sent;\n            setIsLoggedIn(user);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }))); //eseguo ogni volta che _app re-rendera\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_apollo_client_apollo_client__WEBPACK_IMPORTED_MODULE_10__.AuthProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_6__.default, {\n      isLoggedIn: isLoggedIn,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n        isLoggedIn: isLoggedIn\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MyApp, \"JRSM+9OFWB1aJamEROx6VmH0gso=\");\n\n_c = MyApp;\n\nMyApp.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(appContext) {\n    var _appContext$ctx$req, _tokenInCookie;\n\n    var appProps, tokenInCookie, _appContext$ctx$req2, token, data;\n\n    return _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return next_app__WEBPACK_IMPORTED_MODULE_9___default().getInitialProps(appContext);\n\n          case 2:\n            appProps = _context2.sent;\n\n            if ((_appContext$ctx$req = appContext.ctx.req) !== null && _appContext$ctx$req !== void 0 && _appContext$ctx$req.headers.cookie) {\n              tokenInCookie = cookie__WEBPACK_IMPORTED_MODULE_8__.parse((_appContext$ctx$req2 = appContext.ctx.req) === null || _appContext$ctx$req2 === void 0 ? void 0 : _appContext$ctx$req2.headers.cookie);\n            }\n\n            token = tokenInCookie.jid;\n\n            if (!token) {\n              _context2.next = 9;\n              break;\n            }\n\n            _context2.next = 8;\n            return (0,_helpers_query_client__WEBPACK_IMPORTED_MODULE_12__.queryClient)({\n              query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.gql)(_templateObject()),\n              variables: {\n                token: token\n              }\n            });\n\n          case 8:\n            data = _context2.sent;\n\n          case 9:\n            console.log(\"_app:\", data); // se non è presente il cookie vuol dire che non è stata fatta la login\n            // ritorno il token nelle props\n\n            return _context2.abrupt(\"return\", _objectSpread(_objectSpread({}, appProps), {}, {\n              token: (_tokenInCookie = tokenInCookie) === null || _tokenInCookie === void 0 ? void 0 : _tokenInCookie.jid\n            }));\n\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbImdldEN1cnJVc2VyIiwiZ2V0U3RhbmRhbG9uZUFwb2xsb0NsaWVudCIsImNsaWVudCIsInF1ZXJ5IiwiZ3FsIiwiZGF0YSIsIk1lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0b2tlbiIsInNldEFjY2Vzc1Rva2VuIiwidXNlU3RhdGUiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInVzZUVmZmVjdCIsInVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiQXBwIiwiYXBwUHJvcHMiLCJjdHgiLCJyZXEiLCJoZWFkZXJzIiwiY29va2llIiwidG9rZW5JbkNvb2tpZSIsImppZCIsInF1ZXJ5Q2xpZW50IiwidmFyaWFibGVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQTZCOztBQUM3QjtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1NBRWVBLFc7Ozs7OzJVQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN1QkMsd0ZBQXlCLEVBRGhEOztBQUFBO0FBQ1FDLGtCQURSO0FBQUE7QUFBQSxtQkFHeUJBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhO0FBQ2xDQSxtQkFBSyxFQUFFQyxvREFBRixvQkFENkIsQ0FNbEM7O0FBTmtDLGFBQWIsQ0FIekI7O0FBQUE7QUFBQTtBQUdVQyxnQkFIVix1QkFHVUEsSUFIVjtBQUFBLDhDQVlTQSxJQVpULGFBWVNBLElBWlQsdUJBWVNBLElBQUksQ0FBRUMsRUFaZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBZUEsU0FBU0MsS0FBVCxPQUFnRDtBQUFBOztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFwQkMsU0FBb0IsUUFBcEJBLFNBQW9CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzlDQyw2RUFBYyxDQUFDRCxLQUFELENBQWQ7O0FBRDhDLGtCQUdWRSwrQ0FBUSxFQUhFO0FBQUEsTUFHdkNDLFVBSHVDO0FBQUEsTUFHM0JDLGFBSDJCOztBQUs5Q0Msa0RBQVMseVVBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHV2YsV0FBVyxFQUh0Qjs7QUFBQTtBQUdGZ0IsZ0JBSEU7QUFJUkYseUJBQWEsQ0FBQ0UsSUFBRCxDQUFiOztBQUpRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsR0FBVCxDQUw4QyxDQVUxQzs7QUFFSixzQkFDRSw4REFBQyx1RUFBRDtBQUFBLDJCQUNFLDhEQUFDLDhEQUFEO0FBQVEsZ0JBQVUsRUFBRUgsVUFBcEI7QUFBQSw2QkFDRSw4REFBQyxTQUFELGtDQUFlSixTQUFmO0FBQTBCLGtCQUFVLEVBQUVJO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0dBbkJRTixLOztLQUFBQSxLOztBQXFCVEEsS0FBSyxDQUFDVSxlQUFOO0FBQUEsd1VBQXdCLGtCQUFPQyxVQUFQO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNDQywrREFBQSxDQUFvQkQsVUFBcEIsQ0FERDs7QUFBQTtBQUNoQkUsb0JBRGdCOztBQU10Qix1Q0FBSUYsVUFBVSxDQUFDRyxHQUFYLENBQWVDLEdBQW5CLGdEQUFJLG9CQUFvQkMsT0FBcEIsQ0FBNEJDLE1BQWhDLEVBQXdDO0FBQ3RDQywyQkFBYSxHQUFHRCx5Q0FBQSx5QkFBYU4sVUFBVSxDQUFDRyxHQUFYLENBQWVDLEdBQTVCLHlEQUFhLHFCQUFvQkMsT0FBcEIsQ0FBNEJDLE1BQXpDLENBQWhCO0FBQ0Q7O0FBRUdkLGlCQVZrQixHQVVWZSxhQUFhLENBQUNDLEdBVko7O0FBQUEsaUJBWWxCaEIsS0Faa0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFhUGlCLG1FQUFXLENBQUM7QUFDdkJ4QixtQkFBSyxFQUFFQyxvREFBRixtQkFEa0I7QUFTdkJ3Qix1QkFBUyxFQUFFO0FBQUVsQixxQkFBSyxFQUFMQTtBQUFGO0FBVFksYUFBRCxDQWJKOztBQUFBO0FBYXBCTCxnQkFib0I7O0FBQUE7QUEwQnRCd0IsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJ6QixJQUFyQixFQTFCc0IsQ0E0QnRCO0FBRUE7O0FBOUJzQiw4RUErQlZlLFFBL0JVO0FBK0JBVixtQkFBSyxvQkFBRWUsYUFBRixtREFBRSxlQUFlQztBQS9CdEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0NBLCtEQUFlbkIsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zYXNzL2luZGV4LnNjc3NcIjsgLy9zY3NzIHN0eWxlXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgY29va2llIGZyb20gXCJjb29raWVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vYXBvbGxvL2NsaWVudC9hcG9sbG8tY2xpZW50XCI7XG5pbXBvcnQgeyBzZXRBY2Nlc3NUb2tlbiB9IGZyb20gXCIuLi9hcG9sbG8vY2xpZW50L2FjY2Vzc1Rva2VuXCI7XG5pbXBvcnQgeyBnZXRTdGFuZGFsb25lQXBvbGxvQ2xpZW50IH0gZnJvbSBcIi4uL2Fwb2xsby9jbGllbnQvYXBvbGxvLWNsaWVudFwiO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBxdWVyeUNsaWVudCB9IGZyb20gXCIuLi9oZWxwZXJzL3F1ZXJ5LWNsaWVudFwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyVXNlcigpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgZ2V0U3RhbmRhbG9uZUFwb2xsb0NsaWVudCgpO1xuICAvLyBsYSBxdWVyeSByaXRvcmEgdHJ1ZSBvIGZhbHNlXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkge1xuICAgICAgICBNZVxuICAgICAgfVxuICAgIGAsXG4gICAgLy8gZmV0Y2hQb2xpY3k6IFwiY2FjaGUtZmlyc3RcIixcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE/Lk1lO1xufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCB0b2tlbiB9KSB7XG4gIHNldEFjY2Vzc1Rva2VuKHRva2VuKTtcblxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgLy8gZmFjY2lvIE1lIHF1ZXJ5IG9nbmkgdm9sdGEgY2hlIHJpLXJlbmRlcmEgcGVyIHZlcmlmaWNhcmUgdXNlciBsb2dnYXRvXG4gICAgLy8gaW4gcXVlc3RvIG1vZG8gc29ubyBzaWN1cm8gY2hlIGp3dCDDqCBzdGF0byB2ZXJpZmljYXRvIHNlcnZlci1zaWRlXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGdldEN1cnJVc2VyKCk7XG4gICAgc2V0SXNMb2dnZWRJbih1c2VyKTtcbiAgfSk7IC8vZXNlZ3VvIG9nbmkgdm9sdGEgY2hlIF9hcHAgcmUtcmVuZGVyYVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxMYXlvdXQgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XG5cbiAgLy8gcHJpbWEgY2hlIGxhIG1pYSBhcHAgdmVuZ2EgcmVuZGVyaXp6YXRhIGNvbnRyb2xsbyBjaGUgaWwgdG9rZW5cbiAgLy8gc2lhIHByZXNlbnRlIGluIHR1dHRlIGxlIHJlcSBxdWluZGkgbG8gcHJlbmRvIGUgbG8gcGFyc29cbiAgdmFyIHRva2VuSW5Db29raWU7XG4gIGlmIChhcHBDb250ZXh0LmN0eC5yZXE/LmhlYWRlcnMuY29va2llKSB7XG4gICAgdG9rZW5JbkNvb2tpZSA9IGNvb2tpZS5wYXJzZShhcHBDb250ZXh0LmN0eC5yZXE/LmhlYWRlcnMuY29va2llKTtcbiAgfVxuXG4gIHZhciB0b2tlbiA9IHRva2VuSW5Db29raWUuamlkO1xuICB2YXIgZGF0YTtcbiAgaWYgKHRva2VuKSB7XG4gICAgZGF0YSA9IGF3YWl0IHF1ZXJ5Q2xpZW50KHtcbiAgICAgIHF1ZXJ5OiBncWxgXG4gICAgICAgIHF1ZXJ5IFZlcmlmeVRva2VuKCR0b2tlbjogU3RyaW5nISkge1xuICAgICAgICAgIFZlcmlmeVRva2VuKHRva2VuOiAkdG9rZW4pIHtcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgIHZlcmlmaWVkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgdmFyaWFibGVzOiB7IHRva2VuIH0sXG4gICAgfSk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhcIl9hcHA6XCIsIGRhdGEpO1xuXG4gIC8vIHNlIG5vbiDDqCBwcmVzZW50ZSBpbCBjb29raWUgdnVvbCBkaXJlIGNoZSBub24gw6ggc3RhdGEgZmF0dGEgbGEgbG9naW5cblxuICAvLyByaXRvcm5vIGlsIHRva2VuIG5lbGxlIHByb3BzXG4gIHJldHVybiB7IC4uLmFwcFByb3BzLCB0b2tlbjogdG9rZW5JbkNvb2tpZT8uamlkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});