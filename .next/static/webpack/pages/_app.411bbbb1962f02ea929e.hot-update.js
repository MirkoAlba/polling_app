/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/header.js":
/*!*************************************!*\
  !*** ./components/layout/header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! easy-peasy */ \"./node_modules/easy-peasy/dist/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/components/layout/header.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Header(_ref) {\n  _s();\n\n  var userId = _ref.userId;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      mounted = _useState[0],\n      setMounted = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  var handleOpen = function handleOpen() {\n    return setOpen(!open);\n  };\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      scrollPosition = _useState3[0],\n      setScrollPosition = _useState3[1];\n\n  var handleScroll = function handleScroll() {\n    var position = window.pageYOffset;\n    setScrollPosition(position);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setMounted(true);\n    window.addEventListener(\"scroll\", handleScroll, {\n      passive: true\n    });\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  var itemsInCart = 0;\n  var cart = (0,easy_peasy__WEBPACK_IMPORTED_MODULE_3__.useStoreState)(function (state) {\n    return state.cart;\n  });\n\n  if (mounted) {\n    cart.cartItems.map(function (item) {\n      itemsInCart += item.quantity;\n    });\n  }\n\n  console.log(\"items:\", itemsInCart);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"\".concat(scrollPosition > 200 ? \"bg-transition\" : \"\", \" fixed-top wrapper-custom-navbar\"),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n      className: \"sticky-top\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {\n        className: \"custom-navbar position-relative\",\n        expand: \"md\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              className: \"nav-link p-0\",\n              children: \"Logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"wrapper-icons\",\n          children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/carrello\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              className: \"position-relative\",\n              href: \"#\",\n              children: scrollPosition > 200 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                  className: \"cartIcon\",\n                  height: \"40\",\n                  width: \"40\",\n                  src: \"/icons/pizza.svg\",\n                  alt: \"Carrello\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: \"cartIcon__number\",\n                  children: itemsInCart\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 63,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 21\n              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                  className: \"cartIcon\",\n                  height: \"40\",\n                  width: \"40\",\n                  src: \"/icons/pizza-red.svg\",\n                  alt: \"Carrello\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 67,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: \"cartIcon__number\",\n                  children: itemsInCart\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Toggle, {\n            className: \"p-0\",\n            onClick: handleOpen,\n            \"aria-controls\": \"basic-navbar-nav\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n              className: \"ham ham6 \".concat(open ? \"active\" : \"\"),\n              viewBox: \"0 0 100 100\",\n              width: \"80\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                className: \"line top\",\n                d: \"m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                className: \"line middle\",\n                d: \"m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                className: \"line bottom\",\n                d: \"m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 99,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Collapse, {\n          className: open ? \"open\" : \"closed\",\n          children: [!userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/register\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              onClick: handleOpen,\n              className: \"nav-link\",\n              children: \"Accedi/Registrati\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 15\n          }, this), userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/profilo\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              onClick: handleOpen,\n              className: \"nav-link\",\n              children: scrollPosition > 200 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                height: \"40\",\n                width: \"40\",\n                src: \"/icons/user.svg\",\n                alt: \"Profilo\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 120,\n                columnNumber: 21\n              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                height: \"40\",\n                width: \"40\",\n                src: \"/icons/user-red.svg\",\n                alt: \"Profilo\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 127,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"KuDA1mnhn6i/qJId4bZXwC8Oyh8=\", false, function () {\n  return [easy_peasy__WEBPACK_IMPORTED_MODULE_3__.useStoreState];\n});\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLmpzPzUwM2QiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlcklkIiwidXNlU3RhdGUiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT3BlbiIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVTY3JvbGwiLCJwb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXRlbXNJbkNhcnQiLCJjYXJ0IiwidXNlU3RvcmVTdGF0ZSIsInN0YXRlIiwiY2FydEl0ZW1zIiwibWFwIiwiaXRlbSIsInF1YW50aXR5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxNQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLGtCQUNYQywrQ0FBUSxDQUFDLEtBQUQsQ0FERztBQUFBLE1BQ2xDQyxPQURrQztBQUFBLE1BQ3pCQyxVQUR5Qjs7QUFBQSxtQkFHakJGLCtDQUFRLENBQUMsS0FBRCxDQUhTO0FBQUEsTUFHbENHLElBSGtDO0FBQUEsTUFHNUJDLE9BSDRCOztBQUl6QyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1ELE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7QUFBQSxHQUFuQjs7QUFKeUMsbUJBTUdILCtDQUFRLENBQUMsQ0FBRCxDQU5YO0FBQUEsTUFNbENNLGNBTmtDO0FBQUEsTUFNbEJDLGlCQU5rQjs7QUFPekMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBeEI7QUFDQUos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LEVBQUMscUJBSE47QUFJRSxtQkFBRyxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBHRDs7R0F2SXVCUixNO1VBcUJUb0IscUQ7OztLQXJCU3BCLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2YmFyLCBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IHVzZVN0b3JlU3RhdGUgfSBmcm9tIFwiZWFzeS1wZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyB1c2VySWQgfSkge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4gc2V0T3Blbighb3Blbik7XG5cbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHZhciBpdGVtc0luQ2FydCA9IDA7XG4gIGNvbnN0IGNhcnQgPSB1c2VTdG9yZVN0YXRlKChzdGF0ZSkgPT4gc3RhdGUuY2FydCk7XG4gIGlmIChtb3VudGVkKSB7XG4gICAgY2FydC5jYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICBpdGVtc0luQ2FydCArPSBpdGVtLnF1YW50aXR5O1xuICAgIH0pO1xuICB9XG4gIGNvbnNvbGUubG9nKFwiaXRlbXM6XCIsIGl0ZW1zSW5DYXJ0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgIHNjcm9sbFBvc2l0aW9uID4gMjAwID8gXCJiZy10cmFuc2l0aW9uXCIgOiBcIlwiXG4gICAgICB9IGZpeGVkLXRvcCB3cmFwcGVyLWN1c3RvbS1uYXZiYXJgfVxuICAgID5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwic3RpY2t5LXRvcFwiPlxuICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT1cImN1c3RvbS1uYXZiYXIgcG9zaXRpb24tcmVsYXRpdmVcIiBleHBhbmQ9XCJtZFwiPlxuICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBwLTBcIj5Mb2dvPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWljb25zXCI+XG4gICAgICAgICAgICB7dXNlcklkICYmIChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJyZWxsb1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIHtzY3JvbGxQb3NpdGlvbiA+IDIwMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcnRJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ljb25zL3BpenphLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDYXJyZWxsb1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BjYXJ0SWNvbl9fbnVtYmVyYH0+e2l0ZW1zSW5DYXJ0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJ0SWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pY29ucy9waXp6YS1yZWQuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNhcnJlbGxvXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGNhcnRJY29uX19udW1iZXJgfT57aXRlbXNJbkNhcnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW59XG4gICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhhbSBoYW02ICR7b3BlbiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjgwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lIHRvcFwiXG4gICAgICAgICAgICAgICAgICBkPVwibSAzMCwzMyBoIDQwIGMgMTMuMTAwNDE1LDAgMTQuMzgwMjA0LDMxLjgwMjU4IDYuODk5NjQ2LDMzLjQyMTc3NyAtMjQuNjEyMDM5LDUuMzI3MzczIDkuMDE2MTU0LC01Mi4zMzc1NzcgLTEyLjc1NzUxLC0zMC41NjM5MTMgbCAtMjguMjg0MjcyLDI4LjI4NDI3MlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZSBtaWRkbGVcIlxuICAgICAgICAgICAgICAgICAgZD1cIm0gNzAsNTAgYyAwLDAgLTMyLjIxMzQzNiwwIC00MCwwIC03Ljc4NjU2NCwwIC02LjQyODU3MSwtNC42NDAyNDQgLTYuNDI4NTcxLC04LjU3MTQyOSAwLC01Ljg5NTQ3MSA2LjA3Mzc0MywtMTEuNzgzMzk5IDEyLjI4NjQzNSwtNS41NzA3MDcgNi4yMTI2OTIsNi4yMTI2OTIgMjguMjg0MjcyLDI4LjI4NDI3MiAyOC4yODQyNzIsMjguMjg0MjcyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lIGJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICBkPVwibSA2OS41NzU0MDUsNjcuMDczODI2IGggLTQwIGMgLTEzLjEwMDQxNSwwIC0xNC4zODAyMDQsLTMxLjgwMjU4IC02Ljg5OTY0NiwtMzMuNDIxNzc3IDI0LjYxMjAzOSwtNS4zMjczNzMgLTkuMDE2MTU0LDUyLjMzNzU3NyAxMi43NTc1MSwzMC41NjM5MTMgbCAyOC4yODQyNzIsLTI4LjI4NDI3MlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L05hdmJhci5Ub2dnbGU+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGNsYXNzTmFtZT17b3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn0+XG4gICAgICAgICAgICB7IXVzZXJJZCAmJiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVPcGVufSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgQWNjZWRpL1JlZ2lzdHJhdGlcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHt1c2VySWQgJiYgKFxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbG9cIj5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVPcGVufSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAge3Njcm9sbFBvc2l0aW9uID4gMjAwID8gKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pY29ucy91c2VyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvZmlsb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pY29ucy91c2VyLXJlZC5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2ZpbG9cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/header.js\n");

/***/ })

});