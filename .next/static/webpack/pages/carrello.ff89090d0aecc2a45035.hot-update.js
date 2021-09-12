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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CartComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/queries */ \"./graphql/queries.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/components/cart/cart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CartComponent() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      cart = _useState[0],\n      setCart = _useState[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GET_CURRENT_USER_CART, {\n    onCompleted: function onCompleted(d) {\n      return setCart(d.GetCurrentUserCart);\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  console.log(cart);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      className: \"text-center mb-4\",\n      children: \"Il tuo Carrello\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), error ? \"Errore, ricarica la pagina\" : loading ? \"caricamento...\" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n      className: \"mt-5\",\n      children: cart && cart.cartItems.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n          xs: 12,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n              className: \"position-relative\",\n              sm: 3,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: item.product.productImagePath,\n                width: \"200\",\n                height: \"50\" // layout=\"fill\"\n                // objectFit=\"fill\"\n\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 23\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n              sm: 3,\n              children: \"ciao\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n              sm: 3,\n              children: \"ciao\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n              sm: 3,\n              children: \"ciao\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 19\n          }, _this)\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CartComponent, \"ojtLg6ASZDMuDu0lxlgA6g2/0mc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery];\n});\n\n_c = CartComponent;\n\nvar _c;\n\n$RefreshReg$(_c, \"CartComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0L2NhcnQuanM/Mzk3NyJdLCJuYW1lcyI6WyJDYXJ0Q29tcG9uZW50IiwidXNlU3RhdGUiLCJjYXJ0Iiwic2V0Q2FydCIsInVzZVF1ZXJ5IiwiR0VUX0NVUlJFTlRfVVNFUl9DQVJUIiwib25Db21wbGV0ZWQiLCJkIiwiR2V0Q3VycmVudFVzZXJDYXJ0IiwibG9hZGluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNhcnRJdGVtcyIsIm1hcCIsIml0ZW0iLCJwcm9kdWN0IiwicHJvZHVjdEltYWdlUGF0aCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZEMsK0NBQVEsQ0FBQyxJQUFELENBRE07QUFBQSxNQUMvQkMsSUFEK0I7QUFBQSxNQUN6QkMsT0FEeUI7O0FBQUEsa0JBRVhDLHdEQUFRLENBQUNDLG1FQUFELEVBQXdCO0FBQ3pEQyxlQUFXLEVBQUUscUJBQUNDLENBQUQ7QUFBQSxhQUFPSixPQUFPLENBQUNJLENBQUMsQ0FBQ0Msa0JBQUgsQ0FBZDtBQUFBO0FBRDRDLEdBQXhCLENBRkc7QUFBQSxNQUU5QkMsT0FGOEIsYUFFOUJBLE9BRjhCO0FBQUEsTUFFckJDLEtBRnFCLGFBRXJCQSxLQUZxQjs7QUFNdENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixJQUFaO0FBRUEsc0JBQ0UsOERBQUMsc0RBQUQ7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdRLEtBQUssR0FDSiw0QkFESSxHQUVGRCxPQUFPLEdBQ1QsZ0JBRFMsZ0JBR1QsOERBQUMsZ0RBQUQ7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLGdCQUNHUCxJQUFJLElBQ0hBLElBQUksQ0FBQ1csU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQUNDLElBQUQsRUFBVTtBQUMzQiw0QkFDRSw4REFBQyxnREFBRDtBQUFLLFlBQUUsRUFBRSxFQUFUO0FBQUEsaUNBQ0UsOERBQUMsZ0RBQUQ7QUFBQSxvQ0FDRSw4REFBQyxnREFBRDtBQUFLLHVCQUFTLEVBQUMsbUJBQWY7QUFBbUMsZ0JBQUUsRUFBRSxDQUF2QztBQUFBLHFDQUNFLDhEQUFDLG1EQUFEO0FBQ0UsbUJBQUcsRUFBRUEsSUFBSSxDQUFDQyxPQUFMLENBQWFDLGdCQURwQjtBQUVFLHFCQUFLLEVBQUMsS0FGUjtBQUdFLHNCQUFNLEVBQUMsSUFIVCxDQUlFO0FBQ0E7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFVRSw4REFBQyxnREFBRDtBQUFLLGdCQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRixlQVdFLDhEQUFDLGdEQUFEO0FBQUssZ0JBQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGLGVBWUUsOERBQUMsZ0RBQUQ7QUFBSyxnQkFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBa0JGLElBQUksQ0FBQ0csRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWtCRCxPQW5CRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRDs7R0ExQ3VCbEIsYTtVQUVLSSxvRDs7O0tBRkxKLGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcnQvY2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEdFVF9DVVJSRU5UX1VTRVJfQ0FSVCB9IGZyb20gXCIuLi8uLi9ncmFwaHFsL3F1ZXJpZXNcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRDb21wb25lbnQoKSB7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShHRVRfQ1VSUkVOVF9VU0VSX0NBUlQsIHtcbiAgICBvbkNvbXBsZXRlZDogKGQpID0+IHNldENhcnQoZC5HZXRDdXJyZW50VXNlckNhcnQpLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhjYXJ0KTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNFwiPklsIHR1byBDYXJyZWxsbzwvaDI+XG4gICAgICB7ZXJyb3IgPyAoXG4gICAgICAgIFwiRXJyb3JlLCByaWNhcmljYSBsYSBwYWdpbmFcIlxuICAgICAgKSA6IGxvYWRpbmcgPyAoXG4gICAgICAgIFwiY2FyaWNhbWVudG8uLi5cIlxuICAgICAgKSA6IChcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgICAge2NhcnQgJiZcbiAgICAgICAgICAgIGNhcnQuY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiIHNtPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5wcm9kdWN0LnByb2R1Y3RJbWFnZVBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdEZpdD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXszfT5jaWFvPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezN9PmNpYW88L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17M30+Y2lhbzwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICApfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cart/cart.js\n");

/***/ })

});