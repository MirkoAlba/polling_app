/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./helpers/query-client.js":
/*!*********************************!*\
  !*** ./helpers/query-client.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"queryClient\": function() { return /* binding */ queryClient; },\n/* harmony export */   \"verifyToken\": function() { return /* binding */ verifyToken; }\n/* harmony export */ });\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _apollo_client_apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apollo/client/apollo-client */ \"./apollo/client/apollo-client.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _templateObject() {\n  var data = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n        query VerifyToken($token: String!) {\\n          VerifyToken(token: $token) {\\n            message\\n            verified\\n          }\\n        }\\n      \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nfunction queryClient(_x) {\n  return _queryClient.apply(this, arguments);\n}\n\nfunction _queryClient() {\n  _queryClient = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(queryObject) {\n    var client, response;\n    return _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0,_apollo_client_apollo_client__WEBPACK_IMPORTED_MODULE_3__.getStandaloneApolloClient)();\n\n          case 2:\n            client = _context.sent;\n            _context.next = 5;\n            return client.query(queryObject);\n\n          case 5:\n            response = _context.sent;\n            return _context.abrupt(\"return\", response);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _queryClient.apply(this, arguments);\n}\n\nfunction verifyToken(_x2) {\n  return _verifyToken.apply(this, arguments);\n}\n\nfunction _verifyToken() {\n  _verifyToken = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(token) {\n    var _data, _data$data;\n\n    var data, response;\n    return _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            if (!token) {\n              _context2.next = 4;\n              break;\n            }\n\n            _context2.next = 3;\n            return queryClient({\n              query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject()),\n              variables: {\n                token: token\n              }\n            });\n\n          case 3:\n            data = _context2.sent;\n\n          case 4:\n            response = (_data = data) === null || _data === void 0 ? void 0 : (_data$data = _data.data) === null || _data$data === void 0 ? void 0 : _data$data.VerifyToken;\n            console.log(response);\n            return _context2.abrupt(\"return\", response);\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _verifyToken.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9xdWVyeS1jbGllbnQuanM/N2UwMiJdLCJuYW1lcyI6WyJxdWVyeUNsaWVudCIsInF1ZXJ5T2JqZWN0IiwiZ2V0U3RhbmRhbG9uZUFwb2xsb0NsaWVudCIsImNsaWVudCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJ2ZXJpZnlUb2tlbiIsInRva2VuIiwiZ3FsIiwidmFyaWFibGVzIiwiZGF0YSIsIlZlcmlmeVRva2VuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sU0FBZUEsV0FBdEI7QUFBQTtBQUFBOzs7MlVBQU8saUJBQTJCQyxXQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNnQkMsdUZBQXlCLEVBRHpDOztBQUFBO0FBQ0NDLGtCQUREO0FBQUE7QUFBQSxtQkFFa0JBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhSCxXQUFiLENBRmxCOztBQUFBO0FBRUNJLG9CQUZEO0FBQUEsNkNBR0VBLFFBSEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQU1BLFNBQWVDLFdBQXRCO0FBQUE7QUFBQTs7OzJVQUFPLGtCQUEyQkMsS0FBM0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBR0RBLEtBSEM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJVVAsV0FBVyxDQUFDO0FBQ3ZCSSxtQkFBSyxFQUFFSSxtREFBRixtQkFEa0I7QUFTdkJDLHVCQUFTLEVBQUU7QUFBRUYscUJBQUssRUFBTEE7QUFBRjtBQVRZLGFBQUQsQ0FKckI7O0FBQUE7QUFJSEcsZ0JBSkc7O0FBQUE7QUFpQkNMLG9CQWpCRCxZQWlCWUssSUFqQlosd0RBaUJZLE1BQU1BLElBakJsQiwrQ0FpQlksV0FBWUMsV0FqQnhCO0FBbUJMQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVo7QUFuQkssOENBcUJFQSxRQXJCRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Ii4vaGVscGVycy9xdWVyeS1jbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdGFuZGFsb25lQXBvbGxvQ2xpZW50IH0gZnJvbSBcIi4uL2Fwb2xsby9jbGllbnQvYXBvbGxvLWNsaWVudFwiO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVyeUNsaWVudChxdWVyeU9iamVjdCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBnZXRTdGFuZGFsb25lQXBvbGxvQ2xpZW50KCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHF1ZXJ5T2JqZWN0KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5VG9rZW4odG9rZW4pIHtcbiAgdmFyIGRhdGE7XG4gIC8vdmVyaWZpY28gdG9rZW4gZmFjZW5kbyBxdWVyeSBhbGwgQVBJXG4gIGlmICh0b2tlbikge1xuICAgIGRhdGEgPSBhd2FpdCBxdWVyeUNsaWVudCh7XG4gICAgICBxdWVyeTogZ3FsYFxuICAgICAgICBxdWVyeSBWZXJpZnlUb2tlbigkdG9rZW46IFN0cmluZyEpIHtcbiAgICAgICAgICBWZXJpZnlUb2tlbih0b2tlbjogJHRva2VuKSB7XG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICB2ZXJpZmllZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIHZhcmlhYmxlczogeyB0b2tlbiB9LFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBkYXRhPy5kYXRhPy5WZXJpZnlUb2tlbjtcblxuICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/query-client.js\n");

/***/ })

});