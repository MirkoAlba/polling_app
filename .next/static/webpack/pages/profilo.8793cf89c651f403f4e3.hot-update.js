/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profilo",{

/***/ "./components/profile/profile.js":
/*!***************************************!*\
  !*** ./components/profile/profile.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/queries */ \"./graphql/queries.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/components/profile/profile.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Profile(_ref) {\n  _s();\n\n  var userId = _ref.userId;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.ME, {\n    onCompleted: function onCompleted(d) {\n      return setUser(d.Me);\n    },\n    variables: {\n      id: userId\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n        xs: 12,\n        children: error ? \"Errore ricarica la pagina.\" : loading ? \"Caricamento...\" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n          children: user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: user.id\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 24\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Profile, \"qto6flCP2VB841e7faeRT1kCOqk=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery];\n});\n\n_c = Profile;\n\nvar _c;\n\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuanM/Zjk4YiJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlcklkIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInVzZVF1ZXJ5IiwiTUUiLCJvbkNvbXBsZXRlZCIsImQiLCJNZSIsInZhcmlhYmxlcyIsImlkIiwibG9hZGluZyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQSxrQkFDbEJDLCtDQUFRLEVBRFU7QUFBQSxNQUNuQ0MsSUFEbUM7QUFBQSxNQUM3QkMsT0FENkI7O0FBQUEsa0JBR2ZDLHdEQUFRLENBQUNDLGdEQUFELEVBQUs7QUFDdENDLGVBQVcsRUFBRSxxQkFBQ0MsQ0FBRDtBQUFBLGFBQU9KLE9BQU8sQ0FBQ0ksQ0FBQyxDQUFDQyxFQUFILENBQWQ7QUFBQSxLQUR5QjtBQUV0Q0MsYUFBUyxFQUFFO0FBQUVDLFFBQUUsRUFBRVY7QUFBTjtBQUYyQixHQUFMLENBSE87QUFBQSxNQUdsQ1csT0FIa0MsYUFHbENBLE9BSGtDO0FBQUEsTUFHekJDLEtBSHlCLGFBR3pCQSxLQUh5Qjs7QUFRMUMsc0JBQ0UsOERBQUMsc0RBQUQ7QUFBQSwyQkFDRSw4REFBQyxnREFBRDtBQUFBLDZCQUNFLDhEQUFDLGdEQUFEO0FBQUssVUFBRSxFQUFFLEVBQVQ7QUFBQSxrQkFDR0EsS0FBSyxHQUNKLDRCQURJLEdBRUZELE9BQU8sR0FDVCxnQkFEUyxnQkFHVCw4REFBQywyQ0FBRDtBQUFBLG9CQUtHVCxJQUFJLGlCQUFJO0FBQUEsc0JBQUlBLElBQUksQ0FBQ1E7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQTdCdUJYLE87VUFHS0ssb0Q7OztLQUhMTCxPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IE1FIH0gZnJvbSBcIi4uLy4uL2dyYXBocWwvcXVlcmllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKHsgdXNlcklkIH0pIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShNRSwge1xuICAgIG9uQ29tcGxldGVkOiAoZCkgPT4gc2V0VXNlcihkLk1lKSxcbiAgICB2YXJpYWJsZXM6IHsgaWQ6IHVzZXJJZCB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHhzPXsxMn0+XG4gICAgICAgICAge2Vycm9yID8gKFxuICAgICAgICAgICAgXCJFcnJvcmUgcmljYXJpY2EgbGEgcGFnaW5hLlwiXG4gICAgICAgICAgKSA6IGxvYWRpbmcgPyAoXG4gICAgICAgICAgICBcIkNhcmljYW1lbnRvLi4uXCJcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICB7LyogPHA+e3VzZXIuaWR9PC9wPlxuICAgICAgICAgICAgICA8cD57dXNlci5maXJzdE5hbWV9PC9wPlxuICAgICAgICAgICAgICA8cD57dXNlci5sYXN0TmFtZX08L3A+XG4gICAgICAgICAgICAgIDxwPnt1c2VyLmNlbGxOdW1iZXJ9PC9wPiAqL31cbiAgICAgICAgICAgICAge3VzZXIgJiYgPHA+e3VzZXIuaWR9PC9wPn1cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/profile/profile.js\n");

/***/ })

});