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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterLoginForm; }\n/* harmony export */ });\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/components/register-login/form.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  mutation login($userEmail: String!, $userPassword: String!) {\\n    Login(userEmail: $userEmail, userPassword: $userPassword)\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  mutation register($registerInput: RegisterInput!) {\\n    Register(registerInput: $registerInput)\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n // import { setAccessToken } from \"../../src/client/accessToken\";\n\n\n\nfunction RegisterLoginForm(_ref) {\n  _s();\n\n  var isLoggedIn = _ref.isLoggedIn;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      showForm = _useState[0],\n      setShowForm = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),\n      errors = _useState2[0],\n      setErrors = _useState2[1]; // register input\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    firstName: \"\",\n    lastName: \"\",\n    cellNumber: \"\",\n    email: \"\",\n    password: \"\",\n    confirmPassword: \"\"\n  }),\n      registerInput = _useState3[0],\n      setRegisterInput = _useState3[1];\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(REGISTER_MUTATION, {\n    variables: {\n      registerInput: registerInput\n    },\n    onCompleted: function onCompleted(data) {\n      return console.log(data.Register);\n    },\n    onError: function onError(err) {\n      var _err$graphQLErrors$;\n\n      setErrors((_err$graphQLErrors$ = err.graphQLErrors[0]) === null || _err$graphQLErrors$ === void 0 ? void 0 : _err$graphQLErrors$.extensions.exception.errors);\n    }\n  }),\n      _useMutation2 = (0,_Users_mirkoalbanese_mirkoalbanese_Projects_Bar_polling_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation, 1),\n      register = _useMutation2[0];\n\n  function handleSubmitRegister(e) {\n    e.preventDefault();\n    register();\n  }\n\n  var handleShowForm = function handleShowForm() {\n    setShowForm(!showForm);\n    setErrors({});\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n    className: \"h-100\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n      xs: 12,\n      lg: 6,\n      children: \"ciao\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n      xs: 12,\n      lg: 6,\n      children: \"ciao\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n\n_s(RegisterLoginForm, \"1jX3xbn/6GNrQzECeG2VlTmA5WY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation];\n});\n\n_c = RegisterLoginForm;\nvar REGISTER_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject());\nvar LOGIN_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject2());\n\nvar _c;\n\n$RefreshReg$(_c, \"RegisterLoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3Rlci1sb2dpbi9mb3JtLmpzP2Y3NTYiXSwibmFtZXMiOlsiUmVnaXN0ZXJMb2dpbkZvcm0iLCJpc0xvZ2dlZEluIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjZWxsTnVtYmVyIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsInJlZ2lzdGVySW5wdXQiLCJzZXRSZWdpc3RlcklucHV0IiwidXNlTXV0YXRpb24iLCJSRUdJU1RFUl9NVVRBVElPTiIsInZhcmlhYmxlcyIsIm9uQ29tcGxldGVkIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJSZWdpc3RlciIsIm9uRXJyb3IiLCJlcnIiLCJncmFwaFFMRXJyb3JzIiwiZXh0ZW5zaW9ucyIsImV4Y2VwdGlvbiIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0UmVnaXN0ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTaG93Rm9ybSIsImdxbCIsIkxPR0lOX01VVEFUSU9OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBRUE7QUFFZSxTQUFTQSxpQkFBVCxPQUEyQztBQUFBOztBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUN4RCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUR3RCxrQkFHeEJDLCtDQUFRLENBQUMsS0FBRCxDQUhnQjtBQUFBLE1BR2pEQyxRQUhpRDtBQUFBLE1BR3ZDQyxXQUh1Qzs7QUFBQSxtQkFLNUJGLCtDQUFRLENBQUMsRUFBRCxDQUxvQjtBQUFBLE1BS2pERyxNQUxpRDtBQUFBLE1BS3pDQyxTQUx5QyxrQkFPeEQ7OztBQVB3RCxtQkFRZEosK0NBQVEsQ0FBQztBQUNqREssYUFBUyxFQUFFLEVBRHNDO0FBRWpEQyxZQUFRLEVBQUUsRUFGdUM7QUFHakRDLGNBQVUsRUFBRSxFQUhxQztBQUlqREMsU0FBSyxFQUFFLEVBSjBDO0FBS2pEQyxZQUFRLEVBQUUsRUFMdUM7QUFNakRDLG1CQUFlLEVBQUU7QUFOZ0MsR0FBRCxDQVJNO0FBQUEsTUFRakRDLGFBUmlEO0FBQUEsTUFRbENDLGdCQVJrQzs7QUFBQSxxQkFpQnJDQywyREFBVyxDQUFDQyxpQkFBRCxFQUFvQjtBQUNoREMsYUFBUyxFQUFFO0FBQUVKLG1CQUFhLEVBQWJBO0FBQUYsS0FEcUM7QUFFaERLLGVBQVcsRUFBRSxxQkFBQ0MsSUFBRDtBQUFBLGFBQVVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLFFBQWpCLENBQVY7QUFBQSxLQUZtQztBQUdoREMsV0FBTyxFQUFFLGlCQUFDQyxHQUFELEVBQVM7QUFBQTs7QUFDaEJsQixlQUFTLHdCQUFDa0IsR0FBRyxDQUFDQyxhQUFKLENBQWtCLENBQWxCLENBQUQsd0RBQUMsb0JBQXNCQyxVQUF0QixDQUFpQ0MsU0FBakMsQ0FBMkN0QixNQUE1QyxDQUFUO0FBQ0Q7QUFMK0MsR0FBcEIsQ0FqQjBCO0FBQUE7QUFBQSxNQWlCakR1QixRQWpCaUQ7O0FBeUJ4RCxXQUFTQyxvQkFBVCxDQUE4QkMsQ0FBOUIsRUFBaUM7QUFDL0JBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBSCxZQUFRO0FBQ1Q7O0FBRUQsTUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCNUIsZUFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNBRyxhQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSw4REFBQyxnREFBRDtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUEsNEJBQ0UsOERBQUMsZ0RBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFhLFFBQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUsOERBQUMsZ0RBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFhLFFBQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBN0N1QlIsaUI7VUFDUEcsa0QsRUFnQkljLHVEOzs7S0FqQkdqQixpQjtBQStDeEIsSUFBTWtCLGlCQUFpQixHQUFHaUIsbURBQUgsbUJBQXZCO0FBTUEsSUFBTUMsY0FBYyxHQUFHRCxtREFBSCxvQkFBcEIiLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZ2lzdGVyLWxvZ2luL2Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG4vLyBpbXBvcnQgeyBzZXRBY2Nlc3NUb2tlbiB9IGZyb20gXCIuLi8uLi9zcmMvY2xpZW50L2FjY2Vzc1Rva2VuXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyTG9naW5Gb3JtKHsgaXNMb2dnZWRJbiB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtzaG93Rm9ybSwgc2V0U2hvd0Zvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgLy8gcmVnaXN0ZXIgaW5wdXRcbiAgY29uc3QgW3JlZ2lzdGVySW5wdXQsIHNldFJlZ2lzdGVySW5wdXRdID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0TmFtZTogXCJcIixcbiAgICBsYXN0TmFtZTogXCJcIixcbiAgICBjZWxsTnVtYmVyOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgW3JlZ2lzdGVyXSA9IHVzZU11dGF0aW9uKFJFR0lTVEVSX01VVEFUSU9OLCB7XG4gICAgdmFyaWFibGVzOiB7IHJlZ2lzdGVySW5wdXQgfSxcbiAgICBvbkNvbXBsZXRlZDogKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEuUmVnaXN0ZXIpLFxuICAgIG9uRXJyb3I6IChlcnIpID0+IHtcbiAgICAgIHNldEVycm9ycyhlcnIuZ3JhcGhRTEVycm9yc1swXT8uZXh0ZW5zaW9ucy5leGNlcHRpb24uZXJyb3JzKTtcbiAgICB9LFxuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXRSZWdpc3RlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlZ2lzdGVyKCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTaG93Rm9ybSA9ICgpID0+IHtcbiAgICBzZXRTaG93Rm9ybSghc2hvd0Zvcm0pO1xuICAgIHNldEVycm9ycyh7fSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Um93IGNsYXNzTmFtZT1cImgtMTAwXCI+XG4gICAgICA8Q29sIHhzPXsxMn0gbGc9ezZ9PlxuICAgICAgICBjaWFvXG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgeHM9ezEyfSBsZz17Nn0+XG4gICAgICAgIGNpYW9cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xufVxuXG5jb25zdCBSRUdJU1RFUl9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gcmVnaXN0ZXIoJHJlZ2lzdGVySW5wdXQ6IFJlZ2lzdGVySW5wdXQhKSB7XG4gICAgUmVnaXN0ZXIocmVnaXN0ZXJJbnB1dDogJHJlZ2lzdGVySW5wdXQpXG4gIH1cbmA7XG5cbmNvbnN0IExPR0lOX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBsb2dpbigkdXNlckVtYWlsOiBTdHJpbmchLCAkdXNlclBhc3N3b3JkOiBTdHJpbmchKSB7XG4gICAgTG9naW4odXNlckVtYWlsOiAkdXNlckVtYWlsLCB1c2VyUGFzc3dvcmQ6ICR1c2VyUGFzc3dvcmQpXG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/register-login/form.js\n");

/***/ })

});