/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./components/register-login/form.js":
/*!*******************************************!*\
  !*** ./components/register-login/form.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterLoginForm; }\n/* harmony export */ });\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/components/register-login/form.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  mutation register($registerInput: RegisterInput!) {\\n    Register(registerInput: $registerInput)\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  mutation login($userEmail: String!, $userPassword: String!) {\\n    Login(userEmail: $userEmail, userPassword: $userPassword)\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n // import { setAccessToken } from \"../../src/client/accessToken\";\n\n\n\nfunction RegisterLoginForm(_ref) {\n  _s();\n\n  var isLoggedIn = _ref.isLoggedIn;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      showForm = _useState[0],\n      setShowForm = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),\n      errors = _useState2[0],\n      setErrors = _useState2[1]; // login input\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      userEmail = _useState3[0],\n      setUserEmail = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      userPassword = _useState4[0],\n      setUserPassword = _useState4[1]; // register input\n\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    firstName: \"\",\n    lastName: \"\",\n    cellNumber: \"\",\n    email: \"\",\n    password: \"\",\n    confirmPassword: \"\"\n  }),\n      registerInput = _useState5[0],\n      setRegisterInput = _useState5[1];\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(LOGIN_MUTATION, {\n    variables: {\n      userEmail: userEmail,\n      userPassword: userPassword\n    },\n    onCompleted: function onCompleted(data) {\n      // setto token ritornato dalla login mutation\n      setAccessToken(data.Login);\n      router.push(\"/\");\n    },\n    onError: function onError(err) {\n      if (err) {\n        var _err$graphQLErrors$;\n\n        // custom errors defined in validaotrs.js, returned from server\n        setErrors((_err$graphQLErrors$ = err.graphQLErrors[0]) === null || _err$graphQLErrors$ === void 0 ? void 0 : _err$graphQLErrors$.extensions.exception.errors);\n      }\n    }\n  }),\n      _useMutation2 = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation, 1),\n      login = _useMutation2[0];\n\n  var _useMutation3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(REGISTER_MUTATION, {\n    variables: {\n      registerInput: registerInput\n    },\n    onCompleted: function onCompleted(data) {\n      return console.log(data.Register);\n    },\n    onError: function onError(err) {\n      var _err$graphQLErrors$2;\n\n      setErrors((_err$graphQLErrors$2 = err.graphQLErrors[0]) === null || _err$graphQLErrors$2 === void 0 ? void 0 : _err$graphQLErrors$2.extensions.exception.errors);\n    }\n  }),\n      _useMutation4 = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation3, 1),\n      register = _useMutation4[0];\n\n  function handleSubmitLogin(e) {\n    e.preventDefault();\n    login();\n  }\n\n  function handleSubmitRegister(e) {\n    e.preventDefault();\n    register();\n  }\n\n  var handleShowForm = function handleShowForm() {\n    setShowForm(!showForm);\n    setErrors({});\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n    children: \"ciao\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 10\n  }, this);\n}\n\n_s(RegisterLoginForm, \"kAcDzrSsmnvU9fMZlMBooiA99wo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation];\n});\n\n_c = RegisterLoginForm;\nvar LOGIN_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject());\nvar REGISTER_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject2());\n\nvar _c;\n\n$RefreshReg$(_c, \"RegisterLoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3Rlci1sb2dpbi9mb3JtLmpzP2Y3NTYiXSwibmFtZXMiOlsiUmVnaXN0ZXJMb2dpbkZvcm0iLCJpc0xvZ2dlZEluIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidXNlckVtYWlsIiwic2V0VXNlckVtYWlsIiwidXNlclBhc3N3b3JkIiwic2V0VXNlclBhc3N3b3JkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjZWxsTnVtYmVyIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsInJlZ2lzdGVySW5wdXQiLCJzZXRSZWdpc3RlcklucHV0IiwidXNlTXV0YXRpb24iLCJMT0dJTl9NVVRBVElPTiIsInZhcmlhYmxlcyIsIm9uQ29tcGxldGVkIiwiZGF0YSIsInNldEFjY2Vzc1Rva2VuIiwiTG9naW4iLCJwdXNoIiwib25FcnJvciIsImVyciIsImdyYXBoUUxFcnJvcnMiLCJleHRlbnNpb25zIiwiZXhjZXB0aW9uIiwibG9naW4iLCJSRUdJU1RFUl9NVVRBVElPTiIsImNvbnNvbGUiLCJsb2ciLCJSZWdpc3RlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0TG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTdWJtaXRSZWdpc3RlciIsImhhbmRsZVNob3dGb3JtIiwiZ3FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFFQTtBQUVlLFNBQVNBLGlCQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQ3hELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRHdELGtCQUd4QkMsK0NBQVEsQ0FBQyxLQUFELENBSGdCO0FBQUEsTUFHakRDLFFBSGlEO0FB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bnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuLy8gaW1wb3J0IHsgc2V0QWNjZXNzVG9rZW4gfSBmcm9tIFwiLi4vLi4vc3JjL2NsaWVudC9hY2Nlc3NUb2tlblwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXJMb2dpbkZvcm0oeyBpc0xvZ2dlZEluIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW3Nob3dGb3JtLCBzZXRTaG93Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcblxuICAvLyBsb2dpbiBpbnB1dFxuICBjb25zdCBbdXNlckVtYWlsLCBzZXRVc2VyRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2VyUGFzc3dvcmQsIHNldFVzZXJQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyByZWdpc3RlciBpbnB1dFxuICBjb25zdCBbcmVnaXN0ZXJJbnB1dCwgc2V0UmVnaXN0ZXJJbnB1dF0gPSB1c2VTdGF0ZSh7XG4gICAgZmlyc3ROYW1lOiBcIlwiLFxuICAgIGxhc3ROYW1lOiBcIlwiLFxuICAgIGNlbGxOdW1iZXI6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBbbG9naW5dID0gdXNlTXV0YXRpb24oTE9HSU5fTVVUQVRJT04sIHtcbiAgICB2YXJpYWJsZXM6IHsgdXNlckVtYWlsLCB1c2VyUGFzc3dvcmQgfSxcbiAgICBvbkNvbXBsZXRlZDogKGRhdGEpID0+IHtcbiAgICAgIC8vIHNldHRvIHRva2VuIHJpdG9ybmF0byBkYWxsYSBsb2dpbiBtdXRhdGlvblxuICAgICAgc2V0QWNjZXNzVG9rZW4oZGF0YS5Mb2dpbik7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfSxcbiAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vIGN1c3RvbSBlcnJvcnMgZGVmaW5lZCBpbiB2YWxpZGFvdHJzLmpzLCByZXR1cm5lZCBmcm9tIHNlcnZlclxuICAgICAgICBzZXRFcnJvcnMoZXJyLmdyYXBoUUxFcnJvcnNbMF0/LmV4dGVuc2lvbnMuZXhjZXB0aW9uLmVycm9ycyk7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgW3JlZ2lzdGVyXSA9IHVzZU11dGF0aW9uKFJFR0lTVEVSX01VVEFUSU9OLCB7XG4gICAgdmFyaWFibGVzOiB7IHJlZ2lzdGVySW5wdXQgfSxcbiAgICBvbkNvbXBsZXRlZDogKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEuUmVnaXN0ZXIpLFxuICAgIG9uRXJyb3I6IChlcnIpID0+IHtcbiAgICAgIHNldEVycm9ycyhlcnIuZ3JhcGhRTEVycm9yc1swXT8uZXh0ZW5zaW9ucy5leGNlcHRpb24uZXJyb3JzKTtcbiAgICB9LFxuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXRMb2dpbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxvZ2luKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXRSZWdpc3RlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlZ2lzdGVyKCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTaG93Rm9ybSA9ICgpID0+IHtcbiAgICBzZXRTaG93Rm9ybSghc2hvd0Zvcm0pO1xuICAgIHNldEVycm9ycyh7fSk7XG4gIH07XG5cbiAgcmV0dXJuIDxoMT5jaWFvPC9oMT47XG59XG5cbmNvbnN0IExPR0lOX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBsb2dpbigkdXNlckVtYWlsOiBTdHJpbmchLCAkdXNlclBhc3N3b3JkOiBTdHJpbmchKSB7XG4gICAgTG9naW4odXNlckVtYWlsOiAkdXNlckVtYWlsLCB1c2VyUGFzc3dvcmQ6ICR1c2VyUGFzc3dvcmQpXG4gIH1cbmA7XG5cbmNvbnN0IFJFR0lTVEVSX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiByZWdpc3RlcigkcmVnaXN0ZXJJbnB1dDogUmVnaXN0ZXJJbnB1dCEpIHtcbiAgICBSZWdpc3RlcihyZWdpc3RlcklucHV0OiAkcmVnaXN0ZXJJbnB1dClcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/register-login/form.js\n");

/***/ })

});