/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profilo",{

/***/ "./pages/profilo.js":
/*!**************************!*\
  !*** ./pages/profilo.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profilo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_query_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/query-client */ \"./helpers/query-client.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/pages/profilo.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Profilo(_ref) {\n  _s();\n\n  var isLoggedIn = _ref.isLoggedIn;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  if (!isLoggedIn) {\n    router.push(\"/register\");\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"profilo\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 10\n  }, this);\n} // export async function getServerSideProps({ req, res }) {\n//   var token = req.cookies.jid;\n//   var data;\n//   if (token) {\n//     data = await queryClient({\n//       query: gql`\n//         query VerifyToken($token: String!) {\n//           VerifyToken(token: $token) {\n//             message\n//             verified\n//           }\n//         }\n//       `,\n//       variables: { token },\n//     });\n//   }\n//   var verificato = data?.data?.VerifyToken.verified;\n//   if (!verificato) {\n//     return {\n//       redirect: {\n//         permanent: false,\n//         destination: \"/register\",\n//       },\n//     };\n//   }\n//   return {\n//     props: {\n//       data: data ? data.data : false,\n//     },\n//   };\n// }\n\n_s(Profilo, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Profilo;\n\nvar _c;\n\n$RefreshReg$(_c, \"Profilo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsby5qcz8wZTc4Il0sIm5hbWVzIjpbIlByb2ZpbG8iLCJpc0xvZ2dlZEluIiwicm91dGVyIiwidXNlUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsT0FBVCxPQUFpQztBQUFBOztBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUM5QyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUNBLE1BQUksQ0FBQ0YsVUFBTCxFQUFpQjtBQUNmQyxVQUFNLENBQUNFLElBQVAsQ0FBWSxXQUFaO0FBQ0Q7O0FBRUQsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNELEMsQ0FFRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0EzQ3dCSixPO1VBQ1BHLGtEOzs7S0FET0gsTyIsImZpbGUiOiIuL3BhZ2VzL3Byb2ZpbG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeUNsaWVudCB9IGZyb20gXCIuLi9oZWxwZXJzL3F1ZXJ5LWNsaWVudFwiO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxvKHsgaXNMb2dnZWRJbiB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBpZiAoIWlzTG9nZ2VkSW4pIHtcbiAgICByb3V0ZXIucHVzaChcIi9yZWdpc3RlclwiKTtcbiAgfVxuXG4gIHJldHVybiA8ZGl2PnByb2ZpbG88L2Rpdj47XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XG4vLyAgIHZhciB0b2tlbiA9IHJlcS5jb29raWVzLmppZDtcblxuLy8gICB2YXIgZGF0YTtcbi8vICAgaWYgKHRva2VuKSB7XG4vLyAgICAgZGF0YSA9IGF3YWl0IHF1ZXJ5Q2xpZW50KHtcbi8vICAgICAgIHF1ZXJ5OiBncWxgXG4vLyAgICAgICAgIHF1ZXJ5IFZlcmlmeVRva2VuKCR0b2tlbjogU3RyaW5nISkge1xuLy8gICAgICAgICAgIFZlcmlmeVRva2VuKHRva2VuOiAkdG9rZW4pIHtcbi8vICAgICAgICAgICAgIG1lc3NhZ2Vcbi8vICAgICAgICAgICAgIHZlcmlmaWVkXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICBgLFxuLy8gICAgICAgdmFyaWFibGVzOiB7IHRva2VuIH0sXG4vLyAgICAgfSk7XG4vLyAgIH1cblxuLy8gICB2YXIgdmVyaWZpY2F0byA9IGRhdGE/LmRhdGE/LlZlcmlmeVRva2VuLnZlcmlmaWVkO1xuXG4vLyAgIGlmICghdmVyaWZpY2F0bykge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICByZWRpcmVjdDoge1xuLy8gICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuLy8gICAgICAgICBkZXN0aW5hdGlvbjogXCIvcmVnaXN0ZXJcIixcbi8vICAgICAgIH0sXG4vLyAgICAgfTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIGRhdGE6IGRhdGEgPyBkYXRhLmRhdGEgOiBmYWxzZSxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profilo.js\n");

/***/ })

});