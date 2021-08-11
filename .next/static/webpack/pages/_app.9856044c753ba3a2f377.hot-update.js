/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./apollo/client/apollo-client.js":
/*!****************************************!*\
  !*** ./apollo/client/apollo-client.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; },\n/* harmony export */   \"getStandaloneApolloClient\": function() { return /* binding */ getStandaloneApolloClient; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/link/context */ \"./node_modules/@apollo/client/link/context/index.js\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client/link/error */ \"./node_modules/@apollo/client/link/error/index.js\");\n/* harmony import */ var _accessToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessToken */ \"./apollo/client/accessToken.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/apollo/client/apollo-client.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar dynamicUri =  true ? \"http://localhost:3000/api/graphql\" : 0;\nvar authContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nfunction useAuth() {\n  _s();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(authContext);\n}\n\n_s(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nfunction getStandaloneApolloClient() {\n  var errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_4__.onError)(function (_ref) {\n    var graphQLErrors = _ref.graphQLErrors,\n        networkError = _ref.networkError;\n    if (graphQLErrors) graphQLErrors.forEach(function (_ref2) {\n      var message = _ref2.message,\n          locations = _ref2.locations,\n          path = _ref2.path;\n      return console.log(\"[GraphQL error]: Message: \".concat(message, \", Location: \").concat(locations, \", Path: \").concat(path));\n    });\n    if (networkError) console.log(\"[Network error]: \".concat(networkError));\n  });\n  var authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__.setContext)(function (_, _ref3) {\n    var headers = _ref3.headers;\n    // prendo il token\n    var token = (0,_accessToken__WEBPACK_IMPORTED_MODULE_3__.getAccessToken)();\n    console.log(\"token\", token);\n    return {\n      headers: _objectSpread(_objectSpread({}, headers), {}, {\n        authorization: token ? \"Bearer \".concat(token) : \"\" //lo passo negli headers della req\n\n      })\n    };\n  });\n  var httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.HttpLink({\n    uri: dynamicUri,\n    credentials: \"include\",\n    headers: {\n      Accept: \"application/json\"\n    }\n  });\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloClient({\n    link: _apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloLink.from([errorLink, authLink.concat(httpLink)]),\n    // link: ApolloLink.from([errorLink.concat(httpLink)]),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.InMemoryCache(),\n    credentials: \"include\"\n  });\n}\nfunction AuthProvider(_ref4) {\n  var children = _ref4.children;\n  var client = getStandaloneApolloClient();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n    value: client,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {\n      client: client,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, this);\n}\n_c = AuthProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBvbGxvL2NsaWVudC9hcG9sbG8tY2xpZW50LmpzP2Q1Y2IiXSwibmFtZXMiOlsiZHluYW1pY1VyaSIsImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwiZ2V0U3RhbmRhbG9uZUFwb2xsb0NsaWVudCIsImVycm9yTGluayIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJsb2NhdGlvbnMiLCJwYXRoIiwiY29uc29sZSIsImxvZyIsImF1dGhMaW5rIiwic2V0Q29udGV4dCIsIl8iLCJoZWFkZXJzIiwidG9rZW4iLCJnZXRBY2Nlc3NUb2tlbiIsImF1dGhvcml6YXRpb24iLCJodHRwTGluayIsIkh0dHBMaW5rIiwidXJpIiwiY3JlZGVudGlhbHMiLCJBY2NlcHQiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiQXBvbGxvTGluayIsImNvbmNhdCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiY2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFRQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxVQUFVLEdBQ2QsUUFDSSxtQ0FESixHQUVJLENBSE47QUFLQSxJQUFNQyxXQUFXLGdCQUFHQyxvREFBYSxFQUFqQztBQUVPLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFDeEIsU0FBT0MsaURBQVUsQ0FBQ0gsV0FBRCxDQUFqQjtBQUNEOztHQUZlRSxPOztBQUlULFNBQVNFLHlCQUFULEdBQXFDO0FBQzFDLE1BQU1DLFNBQVMsR0FBR0Msa0VBQU8sQ0FBQyxnQkFBcUM7QUFBQSxRQUFsQ0MsYUFBa0MsUUFBbENBLGFBQWtDO0FBQUEsUUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUM3RCxRQUFJRCxhQUFKLEVBQ0VBLGFBQWEsQ0FBQ0UsT0FBZCxDQUFzQjtBQUFBLFVBQUdDLE9BQUgsU0FBR0EsT0FBSDtBQUFBLFVBQVlDLFNBQVosU0FBWUEsU0FBWjtBQUFBLFVBQXVCQyxJQUF2QixTQUF1QkEsSUFBdkI7QUFBQSxhQUNwQkMsT0FBTyxDQUFDQyxHQUFSLHFDQUMrQkosT0FEL0IseUJBQ3FEQyxTQURyRCxxQkFDeUVDLElBRHpFLEVBRG9CO0FBQUEsS0FBdEI7QUFNRixRQUFJSixZQUFKLEVBQWtCSyxPQUFPLENBQUNDLEdBQVIsNEJBQWdDTixZQUFoQztBQUNuQixHQVR3QixDQUF6QjtBQVdBLE1BQU1PLFFBQVEsR0FBR0MsdUVBQVUsQ0FBQyxVQUFDQyxDQUFELFNBQW9CO0FBQUEsUUFBZEMsT0FBYyxTQUFkQSxPQUFjO0FBQzlDO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyw0REFBYyxFQUE1QjtBQUVBUCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCSyxLQUFyQjtBQUVBLFdBQU87QUFDTEQsYUFBTyxrQ0FDRkEsT0FERTtBQUVMRyxxQkFBYSxFQUFFRixLQUFLLG9CQUFhQSxLQUFiLElBQXVCLEVBRnRDLENBRTBDOztBQUYxQztBQURGLEtBQVA7QUFNRCxHQVowQixDQUEzQjtBQWNBLE1BQU1HLFFBQVEsR0FBRyxJQUFJQyxvREFBSixDQUFhO0FBQzVCQyxPQUFHLEVBQUV6QixVQUR1QjtBQUU1QjBCLGVBQVcsRUFBRSxTQUZlO0FBRzVCUCxXQUFPLEVBQUU7QUFDUFEsWUFBTSxFQUFFO0FBREQ7QUFIbUIsR0FBYixDQUFqQjtBQVFBLFNBQU8sSUFBSUMsd0RBQUosQ0FBaUI7QUFDdEJDLFFBQUksRUFBRUMsMkRBQUEsQ0FBZ0IsQ0FBQ3hCLFNBQUQsRUFBWVUsUUFBUSxDQUFDZSxNQUFULENBQWdCUixRQUFoQixDQUFaLENBQWhCLENBRGdCO0FBRXRCO0FBQ0FTLFNBQUssRUFBRSxJQUFJQyx5REFBSixFQUhlO0FBSXRCUCxlQUFXLEVBQUU7QUFKUyxHQUFqQixDQUFQO0FBTUQ7QUFFTSxTQUFTUSxZQUFULFFBQW9DO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZO0FBQ3pDLE1BQU1DLE1BQU0sR0FBRy9CLHlCQUF5QixFQUF4QztBQUNBLHNCQUNFLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRStCLE1BQTdCO0FBQUEsMkJBQ0UsOERBQUMsMERBQUQ7QUFBZ0IsWUFBTSxFQUFFQSxNQUF4QjtBQUFBLGdCQUFpQ0Q7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0tBUGVELFkiLCJmaWxlIjoiLi9hcG9sbG8vY2xpZW50L2Fwb2xsby1jbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIEFwb2xsb0NsaWVudCxcbiAgSW5NZW1vcnlDYWNoZSxcbiAgQXBvbGxvTGluayxcbiAgSHR0cExpbmssXG4gIEFwb2xsb1Byb3ZpZGVyLFxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHRcIjtcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiO1xuXG5pbXBvcnQgeyBnZXRBY2Nlc3NUb2tlbiB9IGZyb20gXCIuL2FjY2Vzc1Rva2VuXCI7XG5cbmNvbnN0IGR5bmFtaWNVcmkgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXG4gICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbFwiXG4gICAgOiBcImh0dHBzOi8vcHJvZHVjdGlvbi11cmwvYXBpL2dyYXBocWxcIjtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFuZGFsb25lQXBvbGxvQ2xpZW50KCkge1xuICBjb25zdCBlcnJvckxpbmsgPSBvbkVycm9yKCh7IGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvciB9KSA9PiB7XG4gICAgaWYgKGdyYXBoUUxFcnJvcnMpXG4gICAgICBncmFwaFFMRXJyb3JzLmZvckVhY2goKHsgbWVzc2FnZSwgbG9jYXRpb25zLCBwYXRoIH0pID0+XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICBpZiAobmV0d29ya0Vycm9yKSBjb25zb2xlLmxvZyhgW05ldHdvcmsgZXJyb3JdOiAke25ldHdvcmtFcnJvcn1gKTtcbiAgfSk7XG5cbiAgY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xuICAgIC8vIHByZW5kbyBpbCB0b2tlblxuICAgIGNvbnN0IHRva2VuID0gZ2V0QWNjZXNzVG9rZW4oKTtcblxuICAgIGNvbnNvbGUubG9nKFwidG9rZW5cIiwgdG9rZW4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLi4uaGVhZGVycyxcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6IFwiXCIsIC8vbG8gcGFzc28gbmVnbGkgaGVhZGVycyBkZWxsYSByZXFcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICAgIHVyaTogZHluYW1pY1VyaSxcbiAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluazogQXBvbGxvTGluay5mcm9tKFtlcnJvckxpbmssIGF1dGhMaW5rLmNvbmNhdChodHRwTGluayldKSxcbiAgICAvLyBsaW5rOiBBcG9sbG9MaW5rLmZyb20oW2Vycm9yTGluay5jb25jYXQoaHR0cExpbmspXSksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgY2xpZW50ID0gZ2V0U3RhbmRhbG9uZUFwb2xsb0NsaWVudCgpO1xuICByZXR1cm4gKFxuICAgIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y2xpZW50fT5cbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+e2NoaWxkcmVufTwvQXBvbGxvUHJvdmlkZXI+XG4gICAgPC9hdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo/client/apollo-client.js\n");

/***/ })

});