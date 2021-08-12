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
exports.id = "pages/profilo";
exports.ids = ["pages/profilo"];
exports.modules = {

/***/ "./apollo/client/accessToken.js":
/*!**************************************!*\
  !*** ./apollo/client/accessToken.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setAccessToken\": function() { return /* binding */ setAccessToken; },\n/* harmony export */   \"getAccessToken\": function() { return /* binding */ getAccessToken; }\n/* harmony export */ });\nlet accessToken = \"\";\nfunction setAccessToken(token) {\n  accessToken = token;\n}\nfunction getAccessToken() {\n  return accessToken;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xsaW5nX2FwcC8uL2Fwb2xsby9jbGllbnQvYWNjZXNzVG9rZW4uanM/OGY0OCJdLCJuYW1lcyI6WyJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwidG9rZW4iLCJnZXRBY2Nlc3NUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUcsRUFBbEI7QUFFTyxTQUFTQyxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUNwQ0YsYUFBVyxHQUFHRSxLQUFkO0FBQ0Q7QUFFTSxTQUFTQyxjQUFULEdBQTBCO0FBQy9CLFNBQU9ILFdBQVA7QUFDRCIsImZpbGUiOiIuL2Fwb2xsby9jbGllbnQvYWNjZXNzVG9rZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYWNjZXNzVG9rZW4gPSBcIlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QWNjZXNzVG9rZW4odG9rZW4pIHtcbiAgYWNjZXNzVG9rZW4gPSB0b2tlbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjY2Vzc1Rva2VuKCkge1xuICByZXR1cm4gYWNjZXNzVG9rZW47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo/client/accessToken.js\n");

/***/ }),

/***/ "./apollo/client/apollo-client.js":
/*!****************************************!*\
  !*** ./apollo/client/apollo-client.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; },\n/* harmony export */   \"getStandaloneApolloClient\": function() { return /* binding */ getStandaloneApolloClient; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/context */ \"@apollo/client/link/context\");\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client/link/error */ \"@apollo/client/link/error\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _accessToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessToken */ \"./apollo/client/accessToken.js\");\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/apollo/client/apollo-client.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst dynamicUri =  true ? \"http://localhost:3000/api/graphql\" : 0;\nconst authContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useAuth() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);\n}\nfunction getStandaloneApolloClient() {\n  const errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_4__.onError)(({\n    graphQLErrors,\n    networkError\n  }) => {\n    if (graphQLErrors) graphQLErrors.forEach(({\n      message,\n      locations,\n      path\n    }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));\n    if (networkError) console.log(`[Network error]: ${networkError}`);\n  });\n  const authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__.setContext)((_, {\n    headers\n  }) => {\n    // prendo il token\n    const token = (0,_accessToken__WEBPACK_IMPORTED_MODULE_5__.getAccessToken)(); // console.log(\"client:\", token);\n\n    return {\n      headers: _objectSpread(_objectSpread({}, headers), {}, {\n        authorization: token ? `Bearer ${token}` : \"\" //lo passo negli headers della req\n\n      })\n    };\n  });\n  const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.HttpLink({\n    uri: dynamicUri,\n    credentials: \"include\",\n    headers: {\n      Accept: \"application/json\"\n    }\n  });\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n    link: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloLink.from([errorLink, authLink.concat(httpLink)]),\n    // link: ApolloLink.from([errorLink.concat(httpLink)]),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache(),\n    credentials: \"include\"\n  });\n}\nfunction AuthProvider({\n  children\n}) {\n  const client = getStandaloneApolloClient();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n    value: client,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n      client: client,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xsaW5nX2FwcC8uL2Fwb2xsby9jbGllbnQvYXBvbGxvLWNsaWVudC5qcz9kNWNiIl0sIm5hbWVzIjpbImR5bmFtaWNVcmkiLCJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsImdldFN0YW5kYWxvbmVBcG9sbG9DbGllbnQiLCJlcnJvckxpbmsiLCJvbkVycm9yIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsImZvckVhY2giLCJtZXNzYWdlIiwibG9jYXRpb25zIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJhdXRoTGluayIsInNldENvbnRleHQiLCJfIiwiaGVhZGVycyIsInRva2VuIiwiZ2V0QWNjZXNzVG9rZW4iLCJhdXRob3JpemF0aW9uIiwiaHR0cExpbmsiLCJIdHRwTGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwiQWNjZXB0IiwiQXBvbGxvQ2xpZW50IiwibGluayIsIkFwb2xsb0xpbmsiLCJjb25jYXQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBUUE7QUFDQTtBQUVBO0FBRUEsTUFBTUEsVUFBVSxHQUNkLFFBQ0ksbUNBREosR0FFSSxDQUhOO0FBS0EsTUFBTUMsV0FBVyxnQkFBR0Msb0RBQWEsRUFBakM7QUFFTyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hCLFNBQU9DLGlEQUFVLENBQUNILFdBQUQsQ0FBakI7QUFDRDtBQUVNLFNBQVNJLHlCQUFULEdBQXFDO0FBQzFDLFFBQU1DLFNBQVMsR0FBR0Msa0VBQU8sQ0FBQyxDQUFDO0FBQUVDLGlCQUFGO0FBQWlCQztBQUFqQixHQUFELEtBQXFDO0FBQzdELFFBQUlELGFBQUosRUFDRUEsYUFBYSxDQUFDRSxPQUFkLENBQXNCLENBQUM7QUFBRUMsYUFBRjtBQUFXQyxlQUFYO0FBQXNCQztBQUF0QixLQUFELEtBQ3BCQyxPQUFPLENBQUNDLEdBQVIsQ0FDRyw2QkFBNEJKLE9BQVEsZUFBY0MsU0FBVSxXQUFVQyxJQUFLLEVBRDlFLENBREY7QUFNRixRQUFJSixZQUFKLEVBQWtCSyxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJOLFlBQWEsRUFBN0M7QUFDbkIsR0FUd0IsQ0FBekI7QUFXQSxRQUFNTyxRQUFRLEdBQUdDLHVFQUFVLENBQUMsQ0FBQ0MsQ0FBRCxFQUFJO0FBQUVDO0FBQUYsR0FBSixLQUFvQjtBQUM5QztBQUNBLFVBQU1DLEtBQUssR0FBR0MsNERBQWMsRUFBNUIsQ0FGOEMsQ0FJOUM7O0FBRUEsV0FBTztBQUNMRixhQUFPLGtDQUNGQSxPQURFO0FBRUxHLHFCQUFhLEVBQUVGLEtBQUssR0FBSSxVQUFTQSxLQUFNLEVBQW5CLEdBQXVCLEVBRnRDLENBRTBDOztBQUYxQztBQURGLEtBQVA7QUFNRCxHQVowQixDQUEzQjtBQWNBLFFBQU1HLFFBQVEsR0FBRyxJQUFJQyxvREFBSixDQUFhO0FBQzVCQyxPQUFHLEVBQUV6QixVQUR1QjtBQUU1QjBCLGVBQVcsRUFBRSxTQUZlO0FBRzVCUCxXQUFPLEVBQUU7QUFDUFEsWUFBTSxFQUFFO0FBREQ7QUFIbUIsR0FBYixDQUFqQjtBQVFBLFNBQU8sSUFBSUMsd0RBQUosQ0FBaUI7QUFDdEJDLFFBQUksRUFBRUMsMkRBQUEsQ0FBZ0IsQ0FBQ3hCLFNBQUQsRUFBWVUsUUFBUSxDQUFDZSxNQUFULENBQWdCUixRQUFoQixDQUFaLENBQWhCLENBRGdCO0FBRXRCO0FBQ0FTLFNBQUssRUFBRSxJQUFJQyx5REFBSixFQUhlO0FBSXRCUCxlQUFXLEVBQUU7QUFKUyxHQUFqQixDQUFQO0FBTUQ7QUFFTSxTQUFTUSxZQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBb0M7QUFDekMsUUFBTUMsTUFBTSxHQUFHL0IseUJBQXlCLEVBQXhDO0FBQ0Esc0JBQ0UsOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFK0IsTUFBN0I7QUFBQSwyQkFDRSw4REFBQywwREFBRDtBQUFnQixZQUFNLEVBQUVBLE1BQXhCO0FBQUEsZ0JBQWlDRDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJmaWxlIjoiLi9hcG9sbG8vY2xpZW50L2Fwb2xsby1jbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIEFwb2xsb0NsaWVudCxcbiAgSW5NZW1vcnlDYWNoZSxcbiAgQXBvbGxvTGluayxcbiAgSHR0cExpbmssXG4gIEFwb2xsb1Byb3ZpZGVyLFxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHRcIjtcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiO1xuXG5pbXBvcnQgeyBnZXRBY2Nlc3NUb2tlbiB9IGZyb20gXCIuL2FjY2Vzc1Rva2VuXCI7XG5cbmNvbnN0IGR5bmFtaWNVcmkgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXG4gICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbFwiXG4gICAgOiBcImh0dHBzOi8vcHJvZHVjdGlvbi11cmwvYXBpL2dyYXBocWxcIjtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFuZGFsb25lQXBvbGxvQ2xpZW50KCkge1xuICBjb25zdCBlcnJvckxpbmsgPSBvbkVycm9yKCh7IGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvciB9KSA9PiB7XG4gICAgaWYgKGdyYXBoUUxFcnJvcnMpXG4gICAgICBncmFwaFFMRXJyb3JzLmZvckVhY2goKHsgbWVzc2FnZSwgbG9jYXRpb25zLCBwYXRoIH0pID0+XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICBpZiAobmV0d29ya0Vycm9yKSBjb25zb2xlLmxvZyhgW05ldHdvcmsgZXJyb3JdOiAke25ldHdvcmtFcnJvcn1gKTtcbiAgfSk7XG5cbiAgY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xuICAgIC8vIHByZW5kbyBpbCB0b2tlblxuICAgIGNvbnN0IHRva2VuID0gZ2V0QWNjZXNzVG9rZW4oKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2xpZW50OlwiLCB0b2tlbik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogXCJcIiwgLy9sbyBwYXNzbyBuZWdsaSBoZWFkZXJzIGRlbGxhIHJlcVxuICAgICAgfSxcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XG4gICAgdXJpOiBkeW5hbWljVXJpLFxuICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBsaW5rOiBBcG9sbG9MaW5rLmZyb20oW2Vycm9yTGluaywgYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKV0pLFxuICAgIC8vIGxpbms6IEFwb2xsb0xpbmsuZnJvbShbZXJyb3JMaW5rLmNvbmNhdChodHRwTGluayldKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBjbGllbnQgPSBnZXRTdGFuZGFsb25lQXBvbGxvQ2xpZW50KCk7XG4gIHJldHVybiAoXG4gICAgPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjbGllbnR9PlxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT57Y2hpbGRyZW59PC9BcG9sbG9Qcm92aWRlcj5cbiAgICA8L2F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./apollo/client/apollo-client.js\n");

/***/ }),

/***/ "./helpers/query-client.js":
/*!*********************************!*\
  !*** ./helpers/query-client.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"queryClient\": function() { return /* binding */ queryClient; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client_apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apollo/client/apollo-client */ \"./apollo/client/apollo-client.js\");\n\nasync function queryClient(queryObject) {\n  const client = await (0,_apollo_client_apollo_client__WEBPACK_IMPORTED_MODULE_0__.getStandaloneApolloClient)();\n  const response = await client.query(queryObject);\n  return response;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xsaW5nX2FwcC8uL2hlbHBlcnMvcXVlcnktY2xpZW50LmpzPzdlMDIiXSwibmFtZXMiOlsicXVlcnlDbGllbnQiLCJxdWVyeU9iamVjdCIsImNsaWVudCIsImdldFN0YW5kYWxvbmVBcG9sbG9DbGllbnQiLCJyZXNwb25zZSIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRU8sZUFBZUEsV0FBZixDQUEyQkMsV0FBM0IsRUFBd0M7QUFDN0MsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLHVGQUF5QixFQUE5QztBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNRixNQUFNLENBQUNHLEtBQVAsQ0FBYUosV0FBYixDQUF2QjtBQUNBLFNBQU9HLFFBQVA7QUFDRCIsImZpbGUiOiIuL2hlbHBlcnMvcXVlcnktY2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U3RhbmRhbG9uZUFwb2xsb0NsaWVudCB9IGZyb20gXCIuLi9hcG9sbG8vY2xpZW50L2Fwb2xsby1jbGllbnRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Q2xpZW50KHF1ZXJ5T2JqZWN0KSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGdldFN0YW5kYWxvbmVBcG9sbG9DbGllbnQoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQucXVlcnkocXVlcnlPYmplY3QpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/query-client.js\n");

/***/ }),

/***/ "./pages/profilo.js":
/*!**************************!*\
  !*** ./pages/profilo.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profilo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_query_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/query-client */ \"./helpers/query-client.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/pages/profilo.js\";\n\n\n\nfunction Profilo({\n  isLoggedIn\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"profilo\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 10\n  }, this);\n} // export async function getServerSideProps({ req, res }) {\n//   var token = req.cookies.jid;\n//   var data;\n//   if (token) {\n//     data = await queryClient({\n//       query: gql`\n//         query VerifyToken($token: String!) {\n//           VerifyToken(token: $token) {\n//             message\n//             verified\n//           }\n//         }\n//       `,\n//       variables: { token },\n//     });\n//   }\n//   var verificato = data?.data?.VerifyToken.verified;\n//   if (!verificato) {\n//     return {\n//       redirect: {\n//         permanent: false,\n//         destination: \"/register\",\n//       },\n//     };\n//   }\n//   return {\n//     props: {\n//       data: data ? data.data : false,\n//     },\n//   };\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xsaW5nX2FwcC8uL3BhZ2VzL3Byb2ZpbG8uanM/MGU3OCJdLCJuYW1lcyI6WyJQcm9maWxvIiwiaXNMb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUI7QUFBRUM7QUFBRixDQUFqQixFQUFpQztBQUM5QyxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQyxDQUVEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZmlsby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5Q2xpZW50IH0gZnJvbSBcIi4uL2hlbHBlcnMvcXVlcnktY2xpZW50XCI7XG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsbyh7IGlzTG9nZ2VkSW4gfSkge1xuICByZXR1cm4gPGRpdj5wcm9maWxvPC9kaXY+O1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xuLy8gICB2YXIgdG9rZW4gPSByZXEuY29va2llcy5qaWQ7XG5cbi8vICAgdmFyIGRhdGE7XG4vLyAgIGlmICh0b2tlbikge1xuLy8gICAgIGRhdGEgPSBhd2FpdCBxdWVyeUNsaWVudCh7XG4vLyAgICAgICBxdWVyeTogZ3FsYFxuLy8gICAgICAgICBxdWVyeSBWZXJpZnlUb2tlbigkdG9rZW46IFN0cmluZyEpIHtcbi8vICAgICAgICAgICBWZXJpZnlUb2tlbih0b2tlbjogJHRva2VuKSB7XG4vLyAgICAgICAgICAgICBtZXNzYWdlXG4vLyAgICAgICAgICAgICB2ZXJpZmllZFxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgYCxcbi8vICAgICAgIHZhcmlhYmxlczogeyB0b2tlbiB9LFxuLy8gICAgIH0pO1xuLy8gICB9XG5cbi8vICAgdmFyIHZlcmlmaWNhdG8gPSBkYXRhPy5kYXRhPy5WZXJpZnlUb2tlbi52ZXJpZmllZDtcblxuLy8gICBpZiAoIXZlcmlmaWNhdG8pIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcmVkaXJlY3Q6IHtcbi8vICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbi8vICAgICAgICAgZGVzdGluYXRpb246IFwiL3JlZ2lzdGVyXCIsXG4vLyAgICAgICB9LFxuLy8gICAgIH07XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBkYXRhOiBkYXRhID8gZGF0YS5kYXRhIDogZmFsc2UsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profilo.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/link/context":
/*!**********************************************!*\
  !*** external "@apollo/client/link/context" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/link/context");;

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/link/error");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/profilo.js"));
module.exports = __webpack_exports__;

})();