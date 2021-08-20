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
exports.id = "pages/prodotti/[categoryName]/[productName]";
exports.ids = ["pages/prodotti/[categoryName]/[productName]"];
exports.modules = {

/***/ "./apollo/server/db/context.js":
/*!*************************************!*\
  !*** ./apollo/server/db/context.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPrismaClient\": function() { return /* binding */ createPrismaClient; },\n/* harmony export */   \"createContext\": function() { return /* binding */ createContext; }\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction createPrismaClient() {\n  let prisma;\n\n  if (false) {} else {\n    if (!global.prisma) {\n      global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n\n    prisma = global.prisma;\n    return prisma;\n  }\n}\nfunction createContext(res, req) {\n  var _verified;\n\n  const prisma = createPrismaClient();\n  var verified;\n\n  if (req.headers && req.headers.authorization) {\n    // in req.headers c'è il token passato in apollo-client\n    var token = req.headers.authorization.split(\" \")[1];\n\n    try {\n      verified = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, process.env.TOKEN_SECRET_KEY);\n    } catch (err) {\n      console.log(\"Token non valido: \", err);\n    }\n  }\n\n  console.log(\"sono in createContext: Not auth header\");\n  return {\n    res,\n    req,\n    prisma,\n    userId: (_verified = verified) === null || _verified === void 0 ? void 0 : _verified.profileId\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xsaW5nX2FwcC8uL2Fwb2xsby9zZXJ2ZXIvZGIvY29udGV4dC5qcz85YTg5Il0sIm5hbWVzIjpbImNyZWF0ZVByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsIlByaXNtYUNsaWVudCIsImNyZWF0ZUNvbnRleHQiLCJyZXMiLCJyZXEiLCJ2ZXJpZmllZCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidG9rZW4iLCJzcGxpdCIsImp3dCIsInByb2Nlc3MiLCJlbnYiLCJUT0tFTl9TRUNSRVRfS0VZIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVzZXJJZCIsInByb2ZpbGVJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVPLFNBQVNBLGtCQUFULEdBQThCO0FBQ25DLE1BQUlDLE1BQUo7O0FBQ0EsYUFBMkMsRUFBM0MsTUFHTztBQUNMLFFBQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxZQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUUsd0RBQUosRUFBaEI7QUFDRDs7QUFDREYsVUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0EsV0FBT0EsTUFBUDtBQUNEO0FBQ0Y7QUFFTSxTQUFTRyxhQUFULENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFBQTs7QUFDdEMsUUFBTUwsTUFBTSxHQUFHRCxrQkFBa0IsRUFBakM7QUFDQSxNQUFJTyxRQUFKOztBQUNBLE1BQUlELEdBQUcsQ0FBQ0UsT0FBSixJQUFlRixHQUFHLENBQUNFLE9BQUosQ0FBWUMsYUFBL0IsRUFBOEM7QUFDNUM7QUFDQSxRQUFJQyxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0UsT0FBSixDQUFZQyxhQUFaLENBQTBCRSxLQUExQixDQUFnQyxHQUFoQyxFQUFxQyxDQUFyQyxDQUFaOztBQUNBLFFBQUk7QUFDRkosY0FBUSxHQUFHSywwREFBQSxDQUFXRixLQUFYLEVBQWtCRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQTlCLENBQVg7QUFDRCxLQUZELENBRUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDRixHQUFsQztBQUNEO0FBQ0Y7O0FBRURDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHdDQUFaO0FBRUEsU0FBTztBQUFFYixPQUFGO0FBQU9DLE9BQVA7QUFBWUwsVUFBWjtBQUFvQmtCLFVBQU0sZUFBRVosUUFBRiw4Q0FBRSxVQUFVYTtBQUF0QyxHQUFQO0FBQ0QiLCJmaWxlIjoiLi9hcG9sbG8vc2VydmVyL2RiL2NvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcmlzbWFDbGllbnQoKSB7XG4gIGxldCBwcmlzbWE7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgcmV0dXJuIHByaXNtYTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgfVxuICAgIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XG4gICAgcmV0dXJuIHByaXNtYTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChyZXMsIHJlcSkge1xuICBjb25zdCBwcmlzbWEgPSBjcmVhdGVQcmlzbWFDbGllbnQoKTtcbiAgdmFyIHZlcmlmaWVkO1xuICBpZiAocmVxLmhlYWRlcnMgJiYgcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbikge1xuICAgIC8vIGluIHJlcS5oZWFkZXJzIGMnw6ggaWwgdG9rZW4gcGFzc2F0byBpbiBhcG9sbG8tY2xpZW50XG4gICAgdmFyIHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdChcIiBcIilbMV07XG4gICAgdHJ5IHtcbiAgICAgIHZlcmlmaWVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuVE9LRU5fU0VDUkVUX0tFWSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlRva2VuIG5vbiB2YWxpZG86IFwiLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwic29ubyBpbiBjcmVhdGVDb250ZXh0OiBOb3QgYXV0aCBoZWFkZXJcIik7XG5cbiAgcmV0dXJuIHsgcmVzLCByZXEsIHByaXNtYSwgdXNlcklkOiB2ZXJpZmllZD8ucHJvZmlsZUlkIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo/server/db/context.js\n");

/***/ }),

/***/ "./helpers/general.js":
/*!****************************!*\
  !*** ./helpers/general.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalize\": function() { return /* binding */ capitalize; },\n/* harmony export */   \"capitalizeEveryWord\": function() { return /* binding */ capitalizeEveryWord; }\n/* harmony export */ });\nconst capitalize = ([firstLetter, ...restOfWord]) => firstLetter.toUpperCase() + restOfWord.join(\"\");\nconst capitalizeEveryWord = text => text.toLowerCase().split(\" \").map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(\" \");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xsaW5nX2FwcC8uL2hlbHBlcnMvZ2VuZXJhbC5qcz9mODg1Il0sIm5hbWVzIjpbImNhcGl0YWxpemUiLCJmaXJzdExldHRlciIsInJlc3RPZldvcmQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJjYXBpdGFsaXplRXZlcnlXb3JkIiwidGV4dCIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJtYXAiLCJzIiwiY2hhckF0Iiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLFVBQVUsR0FBRyxDQUFDLENBQUNDLFdBQUQsRUFBYyxHQUFHQyxVQUFqQixDQUFELEtBQ3hCRCxXQUFXLENBQUNFLFdBQVosS0FBNEJELFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixFQUFoQixDQUR2QjtBQUdBLE1BQU1DLG1CQUFtQixHQUFJQyxJQUFELElBQ2pDQSxJQUFJLENBQ0RDLFdBREgsR0FFR0MsS0FGSCxDQUVTLEdBRlQsRUFHR0MsR0FISCxDQUdRQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsTUFBRixDQUFTLENBQVQsRUFBWVIsV0FBWixLQUE0Qk8sQ0FBQyxDQUFDRSxTQUFGLENBQVksQ0FBWixDQUgxQyxFQUlHUixJQUpILENBSVEsR0FKUixDQURLIiwiZmlsZSI6Ii4vaGVscGVycy9nZW5lcmFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSAoW2ZpcnN0TGV0dGVyLCAuLi5yZXN0T2ZXb3JkXSkgPT5cbiAgZmlyc3RMZXR0ZXIudG9VcHBlckNhc2UoKSArIHJlc3RPZldvcmQuam9pbihcIlwiKTtcblxuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemVFdmVyeVdvcmQgPSAodGV4dCkgPT5cbiAgdGV4dFxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnNwbGl0KFwiIFwiKVxuICAgIC5tYXAoKHMpID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKSlcbiAgICAuam9pbihcIiBcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/general.js\n");

/***/ }),

/***/ "./pages/prodotti/[categoryName]/[productName]/index.js":
/*!**************************************************************!*\
  !*** ./pages/prodotti/[categoryName]/[productName]/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductName; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/general */ \"./helpers/general.js\");\n/* harmony import */ var _apollo_server_db_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../apollo/server/db/context */ \"./apollo/server/db/context.js\");\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/pages/prodotti/[categoryName]/[productName]/index.js\";\n\n\n\nfunction ProductName({\n  isLoggedIn,\n  product\n}) {\n  console.log(product);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {\n        xs: 12,\n        md: 6,\n        children: \"ciao\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {\n        xs: 12,\n        md: 6,\n        children: \"ciao\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\nasync function getStaticProps(context) {\n  const prisma = (0,_apollo_server_db_context__WEBPACK_IMPORTED_MODULE_3__.createPrismaClient)();\n  var {\n    productName\n  } = context.params;\n  const product = await prisma.product.findFirst({\n    where: {\n      productName: (0,_helpers_general__WEBPACK_IMPORTED_MODULE_2__.capitalizeEveryWord)(productName.replace(/-/g, \" \"))\n    }\n  });\n  return {\n    props: {\n      product\n    }\n  };\n}\nasync function getStaticPaths() {\n  const prisma = (0,_apollo_server_db_context__WEBPACK_IMPORTED_MODULE_3__.createPrismaClient)();\n  const products = await prisma.product.findMany();\n  const categories = await prisma.category.findMany();\n  var mergedArray = []; // unisco i due array in uno che avrà i campi di category dentro i prodotti\n\n  products.forEach(function (p) {\n    categories.forEach(function (c) {\n      if (p.categoryId === c.id) mergedArray.push(Object.assign({}, p, c));\n    });\n  });\n  return {\n    // ritorno tutti i possibili path da pre-renderizzare\n    paths: mergedArray.map(product => {\n      return {\n        // per nested dynamic routes devo specificare tutto lo slug\n        params: {\n          categoryName: product.categoryName.toLowerCase(),\n          productName: product.productName.replace(/\\s/g, \"-\").toLowerCase()\n        }\n      };\n    }),\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xsaW5nX2FwcC8uL3BhZ2VzL3Byb2RvdHRpL1tjYXRlZ29yeU5hbWVdL1twcm9kdWN0TmFtZV0vaW5kZXguanM/NzA1NSJdLCJuYW1lcyI6WyJQcm9kdWN0TmFtZSIsImlzTG9nZ2VkSW4iLCJwcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByaXNtYSIsImNyZWF0ZVByaXNtYUNsaWVudCIsInByb2R1Y3ROYW1lIiwicGFyYW1zIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJjYXBpdGFsaXplRXZlcnlXb3JkIiwicmVwbGFjZSIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJwcm9kdWN0cyIsImZpbmRNYW55IiwiY2F0ZWdvcmllcyIsImNhdGVnb3J5IiwibWVyZ2VkQXJyYXkiLCJmb3JFYWNoIiwicCIsImMiLCJjYXRlZ29yeUlkIiwiaWQiLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwicGF0aHMiLCJtYXAiLCJjYXRlZ29yeU5hbWUiLCJ0b0xvd2VyQ2FzZSIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUI7QUFBRUMsWUFBRjtBQUFjQztBQUFkLENBQXJCLEVBQThDO0FBQzNEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLHNCQUNFLDhEQUFDLHNEQUFEO0FBQUEsMkJBQ0UsOERBQUMsZ0RBQUQ7QUFBQSw4QkFDRSw4REFBQyxnREFBRDtBQUFLLFVBQUUsRUFBRSxFQUFUO0FBQWEsVUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRSw4REFBQyxnREFBRDtBQUFLLFVBQUUsRUFBRSxFQUFUO0FBQWEsVUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7QUFFTSxlQUFlRyxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QyxRQUFNQyxNQUFNLEdBQUdDLDZFQUFrQixFQUFqQztBQUNBLE1BQUk7QUFBRUM7QUFBRixNQUFrQkgsT0FBTyxDQUFDSSxNQUE5QjtBQUVBLFFBQU1SLE9BQU8sR0FBRyxNQUFNSyxNQUFNLENBQUNMLE9BQVAsQ0FBZVMsU0FBZixDQUF5QjtBQUM3Q0MsU0FBSyxFQUFFO0FBQ0xILGlCQUFXLEVBQUVJLHFFQUFtQixDQUFDSixXQUFXLENBQUNLLE9BQVosQ0FBb0IsSUFBcEIsRUFBMEIsR0FBMUIsQ0FBRDtBQUQzQjtBQURzQyxHQUF6QixDQUF0QjtBQU1BLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xiO0FBREs7QUFERixHQUFQO0FBS0Q7QUFFTSxlQUFlYyxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1ULE1BQU0sR0FBR0MsNkVBQWtCLEVBQWpDO0FBQ0EsUUFBTVMsUUFBUSxHQUFHLE1BQU1WLE1BQU0sQ0FBQ0wsT0FBUCxDQUFlZ0IsUUFBZixFQUF2QjtBQUNBLFFBQU1DLFVBQVUsR0FBRyxNQUFNWixNQUFNLENBQUNhLFFBQVAsQ0FBZ0JGLFFBQWhCLEVBQXpCO0FBRUEsTUFBSUcsV0FBVyxHQUFHLEVBQWxCLENBTHFDLENBT3JDOztBQUNBSixVQUFRLENBQUNLLE9BQVQsQ0FBaUIsVUFBVUMsQ0FBVixFQUFhO0FBQzVCSixjQUFVLENBQUNHLE9BQVgsQ0FBbUIsVUFBVUUsQ0FBVixFQUFhO0FBQzlCLFVBQUlELENBQUMsQ0FBQ0UsVUFBRixLQUFpQkQsQ0FBQyxDQUFDRSxFQUF2QixFQUEyQkwsV0FBVyxDQUFDTSxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTixDQUFsQixFQUFxQkMsQ0FBckIsQ0FBakI7QUFDNUIsS0FGRDtBQUdELEdBSkQ7QUFNQSxTQUFPO0FBQ0w7QUFDQU0sU0FBSyxFQUFFVCxXQUFXLENBQUNVLEdBQVosQ0FBaUI3QixPQUFELElBQWE7QUFDbEMsYUFBTztBQUNMO0FBQ0FRLGNBQU0sRUFBRTtBQUNOc0Isc0JBQVksRUFBRTlCLE9BQU8sQ0FBQzhCLFlBQVIsQ0FBcUJDLFdBQXJCLEVBRFI7QUFFTnhCLHFCQUFXLEVBQUVQLE9BQU8sQ0FBQ08sV0FBUixDQUFvQkssT0FBcEIsQ0FBNEIsS0FBNUIsRUFBbUMsR0FBbkMsRUFBd0NtQixXQUF4QztBQUZQO0FBRkgsT0FBUDtBQU9ELEtBUk0sQ0FGRjtBQVdMQyxZQUFRLEVBQUU7QUFYTCxHQUFQO0FBYUQiLCJmaWxlIjoiLi9wYWdlcy9wcm9kb3R0aS9bY2F0ZWdvcnlOYW1lXS9bcHJvZHVjdE5hbWVdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuaW1wb3J0IHsgY2FwaXRhbGl6ZUV2ZXJ5V29yZCB9IGZyb20gXCIuLi8uLi8uLi8uLi9oZWxwZXJzL2dlbmVyYWxcIjtcbmltcG9ydCB7IGNyZWF0ZVByaXNtYUNsaWVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9hcG9sbG8vc2VydmVyL2RiL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdE5hbWUoeyBpc0xvZ2dlZEluLCBwcm9kdWN0IH0pIHtcbiAgY29uc29sZS5sb2cocHJvZHVjdCk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgeHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgY2lhb1xuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgIGNpYW9cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcHJpc21hID0gY3JlYXRlUHJpc21hQ2xpZW50KCk7XG4gIHZhciB7IHByb2R1Y3ROYW1lIH0gPSBjb250ZXh0LnBhcmFtcztcblxuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgcHJpc21hLnByb2R1Y3QuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgcHJvZHVjdE5hbWU6IGNhcGl0YWxpemVFdmVyeVdvcmQocHJvZHVjdE5hbWUucmVwbGFjZSgvLS9nLCBcIiBcIikpLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwcmlzbWEgPSBjcmVhdGVQcmlzbWFDbGllbnQoKTtcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBwcmlzbWEucHJvZHVjdC5maW5kTWFueSgpO1xuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hLmNhdGVnb3J5LmZpbmRNYW55KCk7XG5cbiAgdmFyIG1lcmdlZEFycmF5ID0gW107XG5cbiAgLy8gdW5pc2NvIGkgZHVlIGFycmF5IGluIHVubyBjaGUgYXZyw6AgaSBjYW1waSBkaSBjYXRlZ29yeSBkZW50cm8gaSBwcm9kb3R0aVxuICBwcm9kdWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICBpZiAocC5jYXRlZ29yeUlkID09PSBjLmlkKSBtZXJnZWRBcnJheS5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHAsIGMpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICAvLyByaXRvcm5vIHR1dHRpIGkgcG9zc2liaWxpIHBhdGggZGEgcHJlLXJlbmRlcml6emFyZVxuICAgIHBhdGhzOiBtZXJnZWRBcnJheS5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIHBlciBuZXN0ZWQgZHluYW1pYyByb3V0ZXMgZGV2byBzcGVjaWZpY2FyZSB0dXR0byBsbyBzbHVnXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGNhdGVnb3J5TmFtZTogcHJvZHVjdC5jYXRlZ29yeU5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICBwcm9kdWN0TmFtZTogcHJvZHVjdC5wcm9kdWN0TmFtZS5yZXBsYWNlKC9cXHMvZywgXCItXCIpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/prodotti/[categoryName]/[productName]/index.js\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/prodotti/[categoryName]/[productName]/index.js"));
module.exports = __webpack_exports__;

})();