/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/prodotti/[categoryName]";
exports.ids = ["pages/prodotti/[categoryName]"];
exports.modules = {

/***/ "./apollo/server/db/context.js":
/*!*************************************!*\
  !*** ./apollo/server/db/context.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPrismaClient\": function() { return /* binding */ createPrismaClient; },\n/* harmony export */   \"createContext\": function() { return /* binding */ createContext; }\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction createPrismaClient() {\n  let prisma;\n\n  if (false) {} else {\n    if (!global.prisma) {\n      global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n\n    prisma = global.prisma;\n    return prisma;\n  }\n}\nfunction createContext(res, req) {\n  var _verified;\n\n  const prisma = createPrismaClient();\n  var verified;\n\n  if (req.headers && req.headers.authorization) {\n    // in req.headers c'è il token passato in apollo-client\n    var token = req.headers.authorization.split(\" \")[1];\n\n    try {\n      verified = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, process.env.TOKEN_SECRET_KEY);\n    } catch (err) {\n      console.log(\"Token non valido: \", err);\n    }\n  }\n\n  console.log(\"sono in createContext: Not auth header\");\n  return {\n    res,\n    req,\n    prisma,\n    userId: (_verified = verified) === null || _verified === void 0 ? void 0 : _verified.profileId\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xsaW5nX2FwcC8uL2Fwb2xsby9zZXJ2ZXIvZGIvY29udGV4dC5qcz85YTg5Il0sIm5hbWVzIjpbImNyZWF0ZVByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsIlByaXNtYUNsaWVudCIsImNyZWF0ZUNvbnRleHQiLCJyZXMiLCJyZXEiLCJ2ZXJpZmllZCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidG9rZW4iLCJzcGxpdCIsImp3dCIsInByb2Nlc3MiLCJlbnYiLCJUT0tFTl9TRUNSRVRfS0VZIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVzZXJJZCIsInByb2ZpbGVJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVPLFNBQVNBLGtCQUFULEdBQThCO0FBQ25DLE1BQUlDLE1BQUo7O0FBQ0EsYUFBMkMsRUFBM0MsTUFHTztBQUNMLFFBQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxZQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUUsd0RBQUosRUFBaEI7QUFDRDs7QUFDREYsVUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0EsV0FBT0EsTUFBUDtBQUNEO0FBQ0Y7QUFFTSxTQUFTRyxhQUFULENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFBQTs7QUFDdEMsUUFBTUwsTUFBTSxHQUFHRCxrQkFBa0IsRUFBakM7QUFDQSxNQUFJTyxRQUFKOztBQUNBLE1BQUlELEdBQUcsQ0FBQ0UsT0FBSixJQUFlRixHQUFHLENBQUNFLE9BQUosQ0FBWUMsYUFBL0IsRUFBOEM7QUFDNUM7QUFDQSxRQUFJQyxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0UsT0FBSixDQUFZQyxhQUFaLENBQTBCRSxLQUExQixDQUFnQyxHQUFoQyxFQUFxQyxDQUFyQyxDQUFaOztBQUNBLFFBQUk7QUFDRkosY0FBUSxHQUFHSywwREFBQSxDQUFXRixLQUFYLEVBQWtCRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQTlCLENBQVg7QUFDRCxLQUZELENBRUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDRixHQUFsQztBQUNEO0FBQ0Y7O0FBRURDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHdDQUFaO0FBRUEsU0FBTztBQUFFYixPQUFGO0FBQU9DLE9BQVA7QUFBWUwsVUFBWjtBQUFvQmtCLFVBQU0sZUFBRVosUUFBRiw4Q0FBRSxVQUFVYTtBQUF0QyxHQUFQO0FBQ0QiLCJmaWxlIjoiLi9hcG9sbG8vc2VydmVyL2RiL2NvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcmlzbWFDbGllbnQoKSB7XG4gIGxldCBwcmlzbWE7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgcmV0dXJuIHByaXNtYTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgfVxuICAgIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XG4gICAgcmV0dXJuIHByaXNtYTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChyZXMsIHJlcSkge1xuICBjb25zdCBwcmlzbWEgPSBjcmVhdGVQcmlzbWFDbGllbnQoKTtcbiAgdmFyIHZlcmlmaWVkO1xuICBpZiAocmVxLmhlYWRlcnMgJiYgcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbikge1xuICAgIC8vIGluIHJlcS5oZWFkZXJzIGMnw6ggaWwgdG9rZW4gcGFzc2F0byBpbiBhcG9sbG8tY2xpZW50XG4gICAgdmFyIHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdChcIiBcIilbMV07XG4gICAgdHJ5IHtcbiAgICAgIHZlcmlmaWVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuVE9LRU5fU0VDUkVUX0tFWSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlRva2VuIG5vbiB2YWxpZG86IFwiLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwic29ubyBpbiBjcmVhdGVDb250ZXh0OiBOb3QgYXV0aCBoZWFkZXJcIik7XG5cbiAgcmV0dXJuIHsgcmVzLCByZXEsIHByaXNtYSwgdXNlcklkOiB2ZXJpZmllZD8ucHJvZmlsZUlkIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo/server/db/context.js\n");

/***/ }),

/***/ "./components/prodotti/grid.js":
/*!*************************************!*\
  !*** ./components/prodotti/grid.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Grid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../graphql/queries */ \"./graphql/queries.js\");\n/* harmony import */ var _helpers_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/general */ \"./helpers/general.js\");\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/components/prodotti/grid.js\";\n\n\n\n\n\nfunction Grid({\n  categoryName\n}) {\n  const {\n    0: products,\n    1: setProducts\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  const {\n    loading,\n    _data,\n    error\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.GET_PRODUCTS_BY_CATEGORY, {\n    onCompleted: d => {\n      setProducts(d.GetProductsByCategory);\n    },\n    variables: {\n      categoryName\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-center mb-4 mb-md-5\",\n        children: (0,_helpers_general__WEBPACK_IMPORTED_MODULE_5__.capitalize)(categoryName)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {\n      children: error ? \"Errore ricarica la pagina\" : loading ? \"caricamento...\" : products.map(p => {\n        console.log(p.productImagePath);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {\n          xs: {\n            span: 10,\n            offset: 1\n          },\n          md: {\n            span: 6,\n            offset: 0\n          },\n          lg: 4,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"product-card\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n              className: \"text-center my-4\",\n              children: p.productName\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 21\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 19\n          }, this)\n        }, p.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xsaW5nX2FwcC8uL2NvbXBvbmVudHMvcHJvZG90dGkvZ3JpZC5qcz83OGI5Il0sIm5hbWVzIjpbIkdyaWQiLCJjYXRlZ29yeU5hbWUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwiX2RhdGEiLCJlcnJvciIsInVzZVF1ZXJ5IiwiR0VUX1BST0RVQ1RTX0JZX0NBVEVHT1JZIiwib25Db21wbGV0ZWQiLCJkIiwiR2V0UHJvZHVjdHNCeUNhdGVnb3J5IiwidmFyaWFibGVzIiwiY2FwaXRhbGl6ZSIsIm1hcCIsInAiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdEltYWdlUGF0aCIsInNwYW4iLCJvZmZzZXQiLCJwcm9kdWN0TmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBZ0M7QUFDN0MsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFFQSxRQUFNO0FBQUVDLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkM7QUFBbEIsTUFBNEJDLHdEQUFRLENBQUNDLHNFQUFELEVBQTJCO0FBQ25FQyxlQUFXLEVBQUdDLENBQUQsSUFBTztBQUNsQlIsaUJBQVcsQ0FBQ1EsQ0FBQyxDQUFDQyxxQkFBSCxDQUFYO0FBQ0QsS0FIa0U7QUFJbkVDLGFBQVMsRUFBRTtBQUFFWjtBQUFGO0FBSndELEdBQTNCLENBQTFDO0FBT0Esc0JBQ0UsOERBQUMsc0RBQUQ7QUFBQSw0QkFDRSw4REFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQywwQkFBZDtBQUFBLGtCQUEwQ2EsNERBQVUsQ0FBQ2IsWUFBRDtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UsOERBQUMsZ0RBQUQ7QUFBQSxnQkFDR00sS0FBSyxHQUNGLDJCQURFLEdBRUZGLE9BQU8sR0FDUCxnQkFETyxHQUVQSCxRQUFRLENBQUNhLEdBQVQsQ0FBY0MsQ0FBRCxJQUFPO0FBQ2xCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBQyxDQUFDRyxnQkFBZDtBQUNBLDRCQUNFLDhEQUFDLGdEQUFEO0FBRUUsWUFBRSxFQUFFO0FBQUVDLGdCQUFJLEVBQUUsRUFBUjtBQUFZQyxrQkFBTSxFQUFFO0FBQXBCLFdBRk47QUFHRSxZQUFFLEVBQUU7QUFBRUQsZ0JBQUksRUFBRSxDQUFSO0FBQVdDLGtCQUFNLEVBQUU7QUFBbkIsV0FITjtBQUlFLFlBQUUsRUFBRSxDQUpOO0FBQUEsaUNBTUU7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxtQ0FTRTtBQUFJLHVCQUFTLEVBQUMsa0JBQWQ7QUFBQSx3QkFBa0NMLENBQUMsQ0FBQ007QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORixXQUNPTixDQUFDLENBQUNPLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQW9CRCxPQXRCRDtBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZG90dGkvZ3JpZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgR0VUX1BST0RVQ1RTX0JZX0NBVEVHT1JZIH0gZnJvbSBcIi4uLy4uL2dyYXBocWwvcXVlcmllc1wiO1xuXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ2VuZXJhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkKHsgY2F0ZWdvcnlOYW1lIH0pIHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBfZGF0YSwgZXJyb3IgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUU19CWV9DQVRFR09SWSwge1xuICAgIG9uQ29tcGxldGVkOiAoZCkgPT4ge1xuICAgICAgc2V0UHJvZHVjdHMoZC5HZXRQcm9kdWN0c0J5Q2F0ZWdvcnkpO1xuICAgIH0sXG4gICAgdmFyaWFibGVzOiB7IGNhdGVnb3J5TmFtZSB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Um93PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNCBtYi1tZC01XCI+e2NhcGl0YWxpemUoY2F0ZWdvcnlOYW1lKX08L2gxPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIDxSb3c+XG4gICAgICAgIHtlcnJvclxuICAgICAgICAgID8gXCJFcnJvcmUgcmljYXJpY2EgbGEgcGFnaW5hXCJcbiAgICAgICAgICA6IGxvYWRpbmdcbiAgICAgICAgICA/IFwiY2FyaWNhbWVudG8uLi5cIlxuICAgICAgICAgIDogcHJvZHVjdHMubWFwKChwKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHAucHJvZHVjdEltYWdlUGF0aCk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAga2V5PXtwLmlkfVxuICAgICAgICAgICAgICAgICAgeHM9e3sgc3BhbjogMTAsIG9mZnNldDogMSB9fVxuICAgICAgICAgICAgICAgICAgbWQ9e3sgc3BhbjogNiwgb2Zmc2V0OiAwIH19XG4gICAgICAgICAgICAgICAgICBsZz17NH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCcke3AucHJvZHVjdEltYWdlUGF0aH0nKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkX19pbWFnZSBteC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTRcIj57cC5wcm9kdWN0TmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/prodotti/grid.js\n");

/***/ }),

/***/ "./graphql/queries.js":
/*!****************************!*\
  !*** ./graphql/queries.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_PRODUCTS_BY_CATEGORY\": function() { return /* binding */ GET_PRODUCTS_BY_CATEGORY; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_PRODUCTS_BY_CATEGORY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query GetProductsByCategory($categoryName: String!) {\n    GetProductsByCategory(categoryName: $categoryName) {\n      id\n      productName\n      productCost\n      productDescription\n      productImagePath\n\n      category {\n        categoryName\n      }\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xsaW5nX2FwcC8uL2dyYXBocWwvcXVlcmllcy5qcz8xMzUxIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9DQVRFR09SWSIsImdxbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSx3QkFBd0IsR0FBR0MsK0NBQUk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRPIiwiZmlsZSI6Ii4vZ3JhcGhxbC9xdWVyaWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFNfQllfQ0FURUdPUlkgPSBncWxgXG4gIHF1ZXJ5IEdldFByb2R1Y3RzQnlDYXRlZ29yeSgkY2F0ZWdvcnlOYW1lOiBTdHJpbmchKSB7XG4gICAgR2V0UHJvZHVjdHNCeUNhdGVnb3J5KGNhdGVnb3J5TmFtZTogJGNhdGVnb3J5TmFtZSkge1xuICAgICAgaWRcbiAgICAgIHByb2R1Y3ROYW1lXG4gICAgICBwcm9kdWN0Q29zdFxuICAgICAgcHJvZHVjdERlc2NyaXB0aW9uXG4gICAgICBwcm9kdWN0SW1hZ2VQYXRoXG5cbiAgICAgIGNhdGVnb3J5IHtcbiAgICAgICAgY2F0ZWdvcnlOYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/queries.js\n");

/***/ }),

/***/ "./helpers/general.js":
/*!****************************!*\
  !*** ./helpers/general.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalize\": function() { return /* binding */ capitalize; }\n/* harmony export */ });\nconst capitalize = ([firstLetter, ...restOfWord]) => firstLetter.toUpperCase() + restOfWord.join(\"\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xsaW5nX2FwcC8uL2hlbHBlcnMvZ2VuZXJhbC5qcz9mODg1Il0sIm5hbWVzIjpbImNhcGl0YWxpemUiLCJmaXJzdExldHRlciIsInJlc3RPZldvcmQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxVQUFVLEdBQUcsQ0FBQyxDQUFDQyxXQUFELEVBQWMsR0FBR0MsVUFBakIsQ0FBRCxLQUN4QkQsV0FBVyxDQUFDRSxXQUFaLEtBQTRCRCxVQUFVLENBQUNFLElBQVgsQ0FBZ0IsRUFBaEIsQ0FEdkIiLCJmaWxlIjoiLi9oZWxwZXJzL2dlbmVyYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2FwaXRhbGl6ZSA9IChbZmlyc3RMZXR0ZXIsIC4uLnJlc3RPZldvcmRdKSA9PlxuICBmaXJzdExldHRlci50b1VwcGVyQ2FzZSgpICsgcmVzdE9mV29yZC5qb2luKFwiXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/general.js\n");

/***/ }),

/***/ "./pages/prodotti/[categoryName]/index.js":
/*!************************************************!*\
  !*** ./pages/prodotti/[categoryName]/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoryName; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_server_db_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apollo/server/db/context */ \"./apollo/server/db/context.js\");\n/* harmony import */ var _components_prodotti_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/prodotti/grid */ \"./components/prodotti/grid.js\");\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/pages/prodotti/[categoryName]/index.js\";\n\n // /prodotti/[categoryName]\n// ex: /prodotti/pizze\n\nfunction CategoryName({\n  categoryName\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_prodotti_grid__WEBPACK_IMPORTED_MODULE_2__.default, {\n    categoryName: categoryName\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 10\n  }, this);\n}\nasync function getStaticProps(context) {\n  const {\n    categoryName\n  } = context.params;\n  const prisma = (0,_apollo_server_db_context__WEBPACK_IMPORTED_MODULE_1__.createPrismaClient)();\n  const category = await (prisma === null || prisma === void 0 ? void 0 : prisma.category.findFirst({\n    where: {\n      categoryName\n    }\n  }));\n  return {\n    props: {\n      categoryName: category ? category.categoryName : \"Categoria non esistente\"\n    }\n  };\n}\nasync function getStaticPaths(context) {\n  const prisma = (0,_apollo_server_db_context__WEBPACK_IMPORTED_MODULE_1__.createPrismaClient)();\n  const categories = await (prisma === null || prisma === void 0 ? void 0 : prisma.category.findMany());\n  return {\n    paths: categories.map(d => ({\n      //categoryName è lo slug e deve essere uguale a quello che c'è nel context.params in getStaticProps\n      params: {\n        categoryName: d.categoryName\n      }\n    })),\n    fallback: \"blocking\" //false:\n    // 1. se un paths non esiste (non viene ritornato da getStaticPaths) nextjs renderizza una 404\n    // 2. si usa quando nuove pagine vengono aggiunte raramente e complessivamente sono poche\n    //true:\n    // 1. i paths non generati al build time (non esistenti) nextjs servirà una versione fallback di tale pagina\n    // 2. in background nextjs genererà staticamente html e json del path\n    // 3. quando ha finito switcherà la pagina generata con quella fallback\n    //blocking:\n    // 1. i paths non generati al build time (non esistenti) nextjs renderizzerà la pagina sul server e poi genererà html e json\n    // 2. quando finisce di caricare la pagina sul server il browser la renderizzerà: l'utente visionerà un caricamento per la pagina\n\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xsaW5nX2FwcC8uL3BhZ2VzL3Byb2RvdHRpL1tjYXRlZ29yeU5hbWVdL2luZGV4LmpzPzI3NjUiXSwibmFtZXMiOlsiQ2F0ZWdvcnlOYW1lIiwiY2F0ZWdvcnlOYW1lIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicGFyYW1zIiwicHJpc21hIiwiY3JlYXRlUHJpc21hQ2xpZW50IiwiY2F0ZWdvcnkiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJjYXRlZ29yaWVzIiwiZmluZE1hbnkiLCJwYXRocyIsIm1hcCIsImQiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTtBQUNBOztBQUNlLFNBQVNBLFlBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUF3QztBQUNyRCxzQkFBTyw4REFBQyw4REFBRDtBQUFNLGdCQUFZLEVBQUVBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO0FBRU0sZUFBZUMsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUMsUUFBTTtBQUFFRjtBQUFGLE1BQW1CRSxPQUFPLENBQUNDLE1BQWpDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2RUFBa0IsRUFBakM7QUFDQSxRQUFNQyxRQUFRLEdBQUcsT0FBTUYsTUFBTixhQUFNQSxNQUFOLHVCQUFNQSxNQUFNLENBQUVFLFFBQVIsQ0FBaUJDLFNBQWpCLENBQTJCO0FBQ2hEQyxTQUFLLEVBQUU7QUFDTFI7QUFESztBQUR5QyxHQUEzQixDQUFOLENBQWpCO0FBS0EsU0FBTztBQUNMUyxTQUFLLEVBQUU7QUFDTFQsa0JBQVksRUFBRU0sUUFBUSxHQUNsQkEsUUFBUSxDQUFDTixZQURTLEdBRWxCO0FBSEM7QUFERixHQUFQO0FBT0Q7QUFFTSxlQUFlVSxjQUFmLENBQThCUixPQUE5QixFQUF1QztBQUM1QyxRQUFNRSxNQUFNLEdBQUdDLDZFQUFrQixFQUFqQztBQUNBLFFBQU1NLFVBQVUsR0FBRyxPQUFNUCxNQUFOLGFBQU1BLE1BQU4sdUJBQU1BLE1BQU0sQ0FBRUUsUUFBUixDQUFpQk0sUUFBakIsRUFBTixDQUFuQjtBQUVBLFNBQU87QUFDTEMsU0FBSyxFQUFFRixVQUFVLENBQUNHLEdBQVgsQ0FBZ0JDLENBQUQsS0FBUTtBQUM1QjtBQUNBWixZQUFNLEVBQUU7QUFBRUgsb0JBQVksRUFBRWUsQ0FBQyxDQUFDZjtBQUFsQjtBQUZvQixLQUFSLENBQWYsQ0FERjtBQUtMZ0IsWUFBUSxFQUFFLFVBTEwsQ0FNTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFmSyxHQUFQO0FBaUJEIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZG90dGkvW2NhdGVnb3J5TmFtZV0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQcmlzbWFDbGllbnQgfSBmcm9tIFwiLi4vLi4vLi4vYXBvbGxvL3NlcnZlci9kYi9jb250ZXh0XCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9kb3R0aS9ncmlkXCI7XG5cbi8vIC9wcm9kb3R0aS9bY2F0ZWdvcnlOYW1lXVxuLy8gZXg6IC9wcm9kb3R0aS9waXp6ZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlOYW1lKHsgY2F0ZWdvcnlOYW1lIH0pIHtcbiAgcmV0dXJuIDxHcmlkIGNhdGVnb3J5TmFtZT17Y2F0ZWdvcnlOYW1lfSAvPjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgeyBjYXRlZ29yeU5hbWUgfSA9IGNvbnRleHQucGFyYW1zO1xuICBjb25zdCBwcmlzbWEgPSBjcmVhdGVQcmlzbWFDbGllbnQoKTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBwcmlzbWE/LmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGNhdGVnb3J5TmFtZSxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2F0ZWdvcnlOYW1lOiBjYXRlZ29yeVxuICAgICAgICA/IGNhdGVnb3J5LmNhdGVnb3J5TmFtZVxuICAgICAgICA6IFwiQ2F0ZWdvcmlhIG5vbiBlc2lzdGVudGVcIixcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoY29udGV4dCkge1xuICBjb25zdCBwcmlzbWEgPSBjcmVhdGVQcmlzbWFDbGllbnQoKTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IHByaXNtYT8uY2F0ZWdvcnkuZmluZE1hbnkoKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBjYXRlZ29yaWVzLm1hcCgoZCkgPT4gKHtcbiAgICAgIC8vY2F0ZWdvcnlOYW1lIMOoIGxvIHNsdWcgZSBkZXZlIGVzc2VyZSB1Z3VhbGUgYSBxdWVsbG8gY2hlIGMnw6ggbmVsIGNvbnRleHQucGFyYW1zIGluIGdldFN0YXRpY1Byb3BzXG4gICAgICBwYXJhbXM6IHsgY2F0ZWdvcnlOYW1lOiBkLmNhdGVnb3J5TmFtZSB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogXCJibG9ja2luZ1wiLFxuICAgIC8vZmFsc2U6XG4gICAgLy8gMS4gc2UgdW4gcGF0aHMgbm9uIGVzaXN0ZSAobm9uIHZpZW5lIHJpdG9ybmF0byBkYSBnZXRTdGF0aWNQYXRocykgbmV4dGpzIHJlbmRlcml6emEgdW5hIDQwNFxuICAgIC8vIDIuIHNpIHVzYSBxdWFuZG8gbnVvdmUgcGFnaW5lIHZlbmdvbm8gYWdnaXVudGUgcmFyYW1lbnRlIGUgY29tcGxlc3NpdmFtZW50ZSBzb25vIHBvY2hlXG4gICAgLy90cnVlOlxuICAgIC8vIDEuIGkgcGF0aHMgbm9uIGdlbmVyYXRpIGFsIGJ1aWxkIHRpbWUgKG5vbiBlc2lzdGVudGkpIG5leHRqcyBzZXJ2aXLDoCB1bmEgdmVyc2lvbmUgZmFsbGJhY2sgZGkgdGFsZSBwYWdpbmFcbiAgICAvLyAyLiBpbiBiYWNrZ3JvdW5kIG5leHRqcyBnZW5lcmVyw6Agc3RhdGljYW1lbnRlIGh0bWwgZSBqc29uIGRlbCBwYXRoXG4gICAgLy8gMy4gcXVhbmRvIGhhIGZpbml0byBzd2l0Y2hlcsOgIGxhIHBhZ2luYSBnZW5lcmF0YSBjb24gcXVlbGxhIGZhbGxiYWNrXG4gICAgLy9ibG9ja2luZzpcbiAgICAvLyAxLiBpIHBhdGhzIG5vbiBnZW5lcmF0aSBhbCBidWlsZCB0aW1lIChub24gZXNpc3RlbnRpKSBuZXh0anMgcmVuZGVyaXp6ZXLDoCBsYSBwYWdpbmEgc3VsIHNlcnZlciBlIHBvaSBnZW5lcmVyw6AgaHRtbCBlIGpzb25cbiAgICAvLyAyLiBxdWFuZG8gZmluaXNjZSBkaSBjYXJpY2FyZSBsYSBwYWdpbmEgc3VsIHNlcnZlciBpbCBicm93c2VyIGxhIHJlbmRlcml6emVyw6A6IGwndXRlbnRlIHZpc2lvbmVyw6AgdW4gY2FyaWNhbWVudG8gcGVyIGxhIHBhZ2luYVxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/prodotti/[categoryName]/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/prodotti/[categoryName]/index.js"));
module.exports = __webpack_exports__;

})();