/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! easy-peasy */ \"./node_modules/easy-peasy/dist/index.js\");\n/* harmony import */ var _helpers_query_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/query-client */ \"./helpers/query-client.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar store = (0,easy_peasy__WEBPACK_IMPORTED_MODULE_2__.createStore)((0,easy_peasy__WEBPACK_IMPORTED_MODULE_2__.persist)({\n  cart: {\n    userId: \"\",\n    cartItems: [],\n    //add 1 product payload = product object\n    addProductToCart: (0,easy_peasy__WEBPACK_IMPORTED_MODULE_2__.action)(function (state, payload) {\n      state.cartItems.push({\n        quantity: 1,\n        productCost: payload.productCost,\n        productId: payload.id\n      });\n    }),\n    //remove 1 product payload = id\n    removeProduct: (0,easy_peasy__WEBPACK_IMPORTED_MODULE_2__.action)(function (state, payload) {\n      state.cartItems = state.cartItems.filter(function (cartItem) {\n        return cartItem.productId !== payload;\n      });\n    }),\n    //add quantity payload = id\n    addQuantity: (0,easy_peasy__WEBPACK_IMPORTED_MODULE_2__.action)(function (state, payload) {\n      console.log(\"add: \", payload);\n      state.cartItems = state.cartItems.map(function (item) {\n        if (item.productId === payload) item.quantity += 1;\n      });\n    }),\n    //remove quantity payload = id\n    removeQuantity: (0,easy_peasy__WEBPACK_IMPORTED_MODULE_2__.action)(function (state, payload) {\n      console.log(\"remove: \", payload);\n      state.cartItems.forEach(function (item) {\n        if (item.productId === payload) {\n          item.quantity === 0 ? item.quantity = 0 : item.quantity -= 1;\n        }\n      });\n    })\n  },\n  // thunks\n  fetchCartItems: (0,easy_peasy__WEBPACK_IMPORTED_MODULE_2__.thunk)( /*#__PURE__*/function () {\n    var _ref = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(actions) {\n      var _data$GetCurrentUserC;\n\n      var _yield$queryClient, data, a;\n\n      return _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_helpers_query_client__WEBPACK_IMPORTED_MODULE_3__.queryClient)({\n                query: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__.GET_CURRENT_USER_CART\n              });\n\n            case 2:\n              _yield$queryClient = _context.sent;\n              data = _yield$queryClient.data;\n              a = data === null || data === void 0 ? void 0 : (_data$GetCurrentUserC = data.GetCurrentUserCart) === null || _data$GetCurrentUserC === void 0 ? void 0 : _data$GetCurrentUserC.cartItems.map(function (item) {\n                return {\n                  quantity: item.quantity,\n                  productCost: item.productCost,\n                  productId: item.product.id\n                };\n              });\n              actions.setCartItems(a);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }()),\n  setUserId: (0,easy_peasy__WEBPACK_IMPORTED_MODULE_2__.action)(function (state, payload) {\n    state.cart.userId = payload;\n  }),\n  setCartItems: (0,easy_peasy__WEBPACK_IMPORTED_MODULE_2__.action)(function (state, payload) {\n    state.cart.cartItems = payload ? payload : [];\n  })\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlLmpzP2MwZDYiXSwibmFtZXMiOlsic3RvcmUiLCJjcmVhdGVTdG9yZSIsInBlcnNpc3QiLCJjYXJ0IiwidXNlcklkIiwiY2FydEl0ZW1zIiwiYWRkUHJvZHVjdFRvQ2FydCIsImFjdGlvbiIsInN0YXRlIiwicGF5bG9hZCIsInB1c2giLCJxdWFudGl0eSIsInByb2R1Y3RDb3N0IiwicHJvZHVjdElkIiwiaWQiLCJyZW1vdmVQcm9kdWN0IiwiZmlsdGVyIiwiY2FydEl0ZW0iLCJhZGRRdWFudGl0eSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIiwicmVtb3ZlUXVhbnRpdHkiLCJmb3JFYWNoIiwiZmV0Y2hDYXJ0SXRlbXMiLCJ0aHVuayIsImFjdGlvbnMiLCJxdWVyeUNsaWVudCIsInF1ZXJ5IiwiR0VUX0NVUlJFTlRfVVNFUl9DQVJUIiwiZGF0YSIsImEiLCJHZXRDdXJyZW50VXNlckNhcnQiLCJwcm9kdWN0Iiwic2V0Q2FydEl0ZW1zIiwic2V0VXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRU8sSUFBTUEsS0FBSyxHQUFHQyx1REFBVyxDQUM5QkMsbURBQU8sQ0FBQztBQUNOQyxNQUFJLEVBQUU7QUFDSkMsVUFBTSxFQUFFLEVBREo7QUFFSkMsYUFBUyxFQUFFLEVBRlA7QUFJSjtBQUNBQyxvQkFBZ0IsRUFBRUMsa0RBQU0sQ0FBQyxVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDM0NELFdBQUssQ0FBQ0gsU0FBTixDQUFnQkssSUFBaEIsQ0FBcUI7QUFDbkJDLGdCQUFRLEVBQUUsQ0FEUztBQUVuQkMsbUJBQVcsRUFBRUgsT0FBTyxDQUFDRyxXQUZGO0FBR25CQyxpQkFBUyxFQUFFSixPQUFPLENBQUNLO0FBSEEsT0FBckI7QUFLRCxLQU51QixDQUxwQjtBQVlKO0FBQ0FDLGlCQUFhLEVBQUVSLGtEQUFNLENBQUMsVUFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ3hDRCxXQUFLLENBQUNILFNBQU4sR0FBa0JHLEtBQUssQ0FBQ0gsU0FBTixDQUFnQlcsTUFBaEIsQ0FBdUIsVUFBQ0MsUUFBRCxFQUFjO0FBQ3JELGVBQU9BLFFBQVEsQ0FBQ0osU0FBVCxLQUF1QkosT0FBOUI7QUFDRCxPQUZpQixDQUFsQjtBQUdELEtBSm9CLENBYmpCO0FBbUJKO0FBQ0FTLGVBQVcsRUFBRVgsa0RBQU0sQ0FBQyxVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDdENVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJYLE9BQXJCO0FBQ0FELFdBQUssQ0FBQ0gsU0FBTixHQUFrQkcsS0FBSyxDQUFDSCxTQUFOLENBQWdCZ0IsR0FBaEIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlDLFlBQUlBLElBQUksQ0FBQ1QsU0FBTCxLQUFtQkosT0FBdkIsRUFBZ0NhLElBQUksQ0FBQ1gsUUFBTCxJQUFpQixDQUFqQjtBQUNqQyxPQUZpQixDQUFsQjtBQUdELEtBTGtCLENBcEJmO0FBMEJKO0FBQ0FZLGtCQUFjLEVBQUVoQixrREFBTSxDQUFDLFVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUN6Q1UsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlgsT0FBeEI7QUFDQUQsV0FBSyxDQUFDSCxTQUFOLENBQWdCbUIsT0FBaEIsQ0FBd0IsVUFBQ0YsSUFBRCxFQUFVO0FBQ2hDLFlBQUlBLElBQUksQ0FBQ1QsU0FBTCxLQUFtQkosT0FBdkIsRUFBZ0M7QUFDOUJhLGNBQUksQ0FBQ1gsUUFBTCxLQUFrQixDQUFsQixHQUF1QlcsSUFBSSxDQUFDWCxRQUFMLEdBQWdCLENBQXZDLEdBQTZDVyxJQUFJLENBQUNYLFFBQUwsSUFBaUIsQ0FBOUQ7QUFDRDtBQUNGLE9BSkQ7QUFLRCxLQVBxQjtBQTNCbEIsR0FEQTtBQXNDTjtBQUNBYyxnQkFBYyxFQUFFQyxpREFBSztBQUFBLHlVQUFDLGlCQUFPQyxPQUFQO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNHQyxrRUFBVyxDQUFDO0FBQUVDLHFCQUFLLEVBQUVDLG1FQUFxQkE7QUFBOUIsZUFBRCxDQURkOztBQUFBO0FBQUE7QUFDWkMsa0JBRFksc0JBQ1pBLElBRFk7QUFFZEMsZUFGYyxHQUVWRCxJQUZVLGFBRVZBLElBRlUsZ0RBRVZBLElBQUksQ0FBRUUsa0JBRkksMERBRVYsc0JBQTBCNUIsU0FBMUIsQ0FBb0NnQixHQUFwQyxDQUF3QyxVQUFDQyxJQUFELEVBQVU7QUFDMUQsdUJBQU87QUFDTFgsMEJBQVEsRUFBRVcsSUFBSSxDQUFDWCxRQURWO0FBRUxDLDZCQUFXLEVBQUVVLElBQUksQ0FBQ1YsV0FGYjtBQUdMQywyQkFBUyxFQUFFUyxJQUFJLENBQUNZLE9BQUwsQ0FBYXBCO0FBSG5CLGlCQUFQO0FBS0QsZUFOUyxDQUZVO0FBU3BCYSxxQkFBTyxDQUFDUSxZQUFSLENBQXFCSCxDQUFyQjs7QUFUb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXZDZjtBQW1ETkksV0FBUyxFQUFFN0Isa0RBQU0sQ0FBQyxVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDcENELFNBQUssQ0FBQ0wsSUFBTixDQUFXQyxNQUFYLEdBQW9CSyxPQUFwQjtBQUNELEdBRmdCLENBbkRYO0FBdUROMEIsY0FBWSxFQUFFNUIsa0RBQU0sQ0FBQyxVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDdkNELFNBQUssQ0FBQ0wsSUFBTixDQUFXRSxTQUFYLEdBQXVCSSxPQUFPLEdBQUdBLE9BQUgsR0FBYSxFQUEzQztBQUNELEdBRm1CO0FBdkRkLENBQUQsQ0FEdUIsQ0FBekIiLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgcGVyc2lzdCwgYWN0aW9uLCB0aHVuayB9IGZyb20gXCJlYXN5LXBlYXN5XCI7XG5cbmltcG9ydCB7IHF1ZXJ5Q2xpZW50IH0gZnJvbSBcIi4uL2hlbHBlcnMvcXVlcnktY2xpZW50XCI7XG5pbXBvcnQgeyBHRVRfQ1VSUkVOVF9VU0VSX0NBUlQgfSBmcm9tIFwiLi4vZ3JhcGhxbC9xdWVyaWVzXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICBwZXJzaXN0KHtcbiAgICBjYXJ0OiB7XG4gICAgICB1c2VySWQ6IFwiXCIsXG4gICAgICBjYXJ0SXRlbXM6IFtdLFxuXG4gICAgICAvL2FkZCAxIHByb2R1Y3QgcGF5bG9hZCA9IHByb2R1Y3Qgb2JqZWN0XG4gICAgICBhZGRQcm9kdWN0VG9DYXJ0OiBhY3Rpb24oKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgICAgIHN0YXRlLmNhcnRJdGVtcy5wdXNoKHtcbiAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICBwcm9kdWN0Q29zdDogcGF5bG9hZC5wcm9kdWN0Q29zdCxcbiAgICAgICAgICBwcm9kdWN0SWQ6IHBheWxvYWQuaWQsXG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICAvL3JlbW92ZSAxIHByb2R1Y3QgcGF5bG9hZCA9IGlkXG4gICAgICByZW1vdmVQcm9kdWN0OiBhY3Rpb24oKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgICAgIHN0YXRlLmNhcnRJdGVtcyA9IHN0YXRlLmNhcnRJdGVtcy5maWx0ZXIoKGNhcnRJdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhcnRJdGVtLnByb2R1Y3RJZCAhPT0gcGF5bG9hZDtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcblxuICAgICAgLy9hZGQgcXVhbnRpdHkgcGF5bG9hZCA9IGlkXG4gICAgICBhZGRRdWFudGl0eTogYWN0aW9uKChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFkZDogXCIsIHBheWxvYWQpO1xuICAgICAgICBzdGF0ZS5jYXJ0SXRlbXMgPSBzdGF0ZS5jYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ucHJvZHVjdElkID09PSBwYXlsb2FkKSBpdGVtLnF1YW50aXR5ICs9IDE7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICAvL3JlbW92ZSBxdWFudGl0eSBwYXlsb2FkID0gaWRcbiAgICAgIHJlbW92ZVF1YW50aXR5OiBhY3Rpb24oKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlOiBcIiwgcGF5bG9hZCk7XG4gICAgICAgIHN0YXRlLmNhcnRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ucHJvZHVjdElkID09PSBwYXlsb2FkKSB7XG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5ID09PSAwID8gKGl0ZW0ucXVhbnRpdHkgPSAwKSA6IChpdGVtLnF1YW50aXR5IC09IDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICB9LFxuXG4gICAgLy8gdGh1bmtzXG4gICAgZmV0Y2hDYXJ0SXRlbXM6IHRodW5rKGFzeW5jIChhY3Rpb25zKSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHF1ZXJ5Q2xpZW50KHsgcXVlcnk6IEdFVF9DVVJSRU5UX1VTRVJfQ0FSVCB9KTtcbiAgICAgIGNvbnN0IGEgPSBkYXRhPy5HZXRDdXJyZW50VXNlckNhcnQ/LmNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICAgICAgICBwcm9kdWN0Q29zdDogaXRlbS5wcm9kdWN0Q29zdCxcbiAgICAgICAgICBwcm9kdWN0SWQ6IGl0ZW0ucHJvZHVjdC5pZCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgYWN0aW9ucy5zZXRDYXJ0SXRlbXMoYSk7XG4gICAgfSksXG5cbiAgICBzZXRVc2VySWQ6IGFjdGlvbigoc3RhdGUsIHBheWxvYWQpID0+IHtcbiAgICAgIHN0YXRlLmNhcnQudXNlcklkID0gcGF5bG9hZDtcbiAgICB9KSxcblxuICAgIHNldENhcnRJdGVtczogYWN0aW9uKChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICAgICAgc3RhdGUuY2FydC5jYXJ0SXRlbXMgPSBwYXlsb2FkID8gcGF5bG9hZCA6IFtdO1xuICAgIH0pLFxuICB9KVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ })

});