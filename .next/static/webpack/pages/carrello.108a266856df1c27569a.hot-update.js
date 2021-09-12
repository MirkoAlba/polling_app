/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/carrello",{

/***/ "./components/cart/cart.js":
/*!*********************************!*\
  !*** ./components/cart/cart.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CartComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/queries */ \"./graphql/queries.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/components/cart/cart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction CartComponent() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      cart = _useState[0],\n      setCart = _useState[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GET_CURRENT_USER_CART, {\n    onCompleted: function onCompleted(d) {\n      return setCart(d.GetCurrentUserCart);\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  console.log(cart);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      className: \"text-center mb-4\",\n      children: \"Il tuo Carrello\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), error ? \"Errore, ricarica la pagina\" : loading ? \"caricamento...\" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n      children: cart.cartItems.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n          children: item.id\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 20\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CartComponent, \"ojtLg6ASZDMuDu0lxlgA6g2/0mc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery];\n});\n\n_c = CartComponent;\n\nvar _c;\n\n$RefreshReg$(_c, \"CartComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0L2NhcnQuanM/Mzk3NyJdLCJuYW1lcyI6WyJDYXJ0Q29tcG9uZW50IiwidXNlU3RhdGUiLCJjYXJ0Iiwic2V0Q2FydCIsInVzZVF1ZXJ5IiwiR0VUX0NVUlJFTlRfVVNFUl9DQVJUIiwib25Db21wbGV0ZWQiLCJkIiwiR2V0Q3VycmVudFVzZXJDYXJ0IiwibG9hZGluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNhcnRJdGVtcyIsIm1hcCIsIml0ZW0iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZEMsK0NBQVEsQ0FBQyxJQUFELENBRE07QUFBQSxNQUMvQkMsSUFEK0I7QUFBQSxNQUN6QkMsT0FEeUI7O0FBQUEsa0JBRVhDLHdEQUFRLENBQUNDLG1FQUFELEVBQXdCO0FBQ3pEQyxlQUFXLEVBQUUscUJBQUNDLENBQUQ7QUFBQSxhQUFPSixPQUFPLENBQUNJLENBQUMsQ0FBQ0Msa0JBQUgsQ0FBZDtBQUFBO0FBRDRDLEdBQXhCLENBRkc7QUFBQSxNQUU5QkMsT0FGOEIsYUFFOUJBLE9BRjhCO0FBQUEsTUFFckJDLEtBRnFCLGFBRXJCQSxLQUZxQjs7QUFNdENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixJQUFaO0FBRUEsc0JBQ0UsOERBQUMsc0RBQUQ7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdRLEtBQUssR0FDSiw0QkFESSxHQUVGRCxPQUFPLEdBQ1QsZ0JBRFMsZ0JBR1QsOERBQUMsZ0RBQUQ7QUFBQSxnQkFDR1AsSUFBSSxDQUFDVyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzVCLDRCQUFPLDhEQUFDLGdEQUFEO0FBQUEsb0JBQW9CQSxJQUFJLENBQUNDO0FBQXpCLFdBQVVELElBQUksQ0FBQ0MsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0QsT0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7R0F4QnVCaEIsYTtVQUVLSSxvRDs7O0tBRkxKLGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcnQvY2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEdFVF9DVVJSRU5UX1VTRVJfQ0FSVCB9IGZyb20gXCIuLi8uLi9ncmFwaHFsL3F1ZXJpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydENvbXBvbmVudCgpIHtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEdFVF9DVVJSRU5UX1VTRVJfQ0FSVCwge1xuICAgIG9uQ29tcGxldGVkOiAoZCkgPT4gc2V0Q2FydChkLkdldEN1cnJlbnRVc2VyQ2FydCksXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKGNhcnQpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi00XCI+SWwgdHVvIENhcnJlbGxvPC9oMj5cbiAgICAgIHtlcnJvciA/IChcbiAgICAgICAgXCJFcnJvcmUsIHJpY2FyaWNhIGxhIHBhZ2luYVwiXG4gICAgICApIDogbG9hZGluZyA/IChcbiAgICAgICAgXCJjYXJpY2FtZW50by4uLlwiXG4gICAgICApIDogKFxuICAgICAgICA8Um93PlxuICAgICAgICAgIHtjYXJ0LmNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8Q29sIGtleT17aXRlbS5pZH0+e2l0ZW0uaWR9PC9Db2w+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1Jvdz5cbiAgICAgICl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cart/cart.js\n");

/***/ })

});