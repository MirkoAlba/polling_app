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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! easy-peasy */ \"./node_modules/easy-peasy/dist/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/components/layout/header.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Header(_ref) {\n  _s();\n\n  var userId = _ref.userId;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      mounted = _useState[0],\n      setMounted = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  var handleOpen = function handleOpen() {\n    return setOpen(!open);\n  };\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      scrollPosition = _useState3[0],\n      setScrollPosition = _useState3[1];\n\n  var handleScroll = function handleScroll() {\n    var position = window.pageYOffset;\n    setScrollPosition(position);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setMounted(true);\n    window.addEventListener(\"scroll\", handleScroll, {\n      passive: true\n    });\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  var itemsInCart = 0;\n  var cart = (0,easy_peasy__WEBPACK_IMPORTED_MODULE_3__.useStoreState)(function (state) {\n    return state.cart;\n  });\n\n  if (mounted) {\n    cart.cartItems.map(function (item) {\n      itemsInCart += item.quantity;\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"\".concat(scrollPosition > 200 ? \"bg-transition\" : \"\", \" fixed-top wrapper-custom-navbar\"),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n      className: \"sticky-top\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {\n        className: \"custom-navbar position-relative\",\n        expand: \"md\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              className: \"nav-link p-0\",\n              children: \"Logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"wrapper-icons\",\n          children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/carrello\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              className: \"position-relative\",\n              href: \"#\",\n              children: scrollPosition > 200 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                  className: \"cartIcon\",\n                  height: \"40\",\n                  width: \"40\",\n                  src: \"/icons/pizza.svg\",\n                  alt: \"Carrello\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: \"cartIcon__number\",\n                  children: itemsInCart\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 21\n              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                  className: \"cartIcon\",\n                  height: \"40\",\n                  width: \"40\",\n                  src: \"/icons/pizza-red.svg\",\n                  alt: \"Carrello\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: \"cartIcon__number\",\n                  children: itemsInCart\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Toggle, {\n            className: \"p-0\",\n            onClick: handleOpen,\n            \"aria-controls\": \"basic-navbar-nav\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n              className: \"ham ham6 \".concat(open ? \"active\" : \"\"),\n              viewBox: \"0 0 100 100\",\n              width: \"80\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                className: \"line top\",\n                d: \"m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                className: \"line middle\",\n                d: \"m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                className: \"line bottom\",\n                d: \"m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Collapse, {\n          className: open ? \"open\" : \"closed\",\n          children: [!userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/register\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              onClick: handleOpen,\n              className: \"nav-link\",\n              children: \"Accedi/Registrati\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 15\n          }, this), userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/profilo\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              onClick: handleOpen,\n              className: \"nav-link\",\n              children: scrollPosition > 200 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                height: \"40\",\n                width: \"40\",\n                src: \"/icons/user.svg\",\n                alt: \"Profilo\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 119,\n                columnNumber: 21\n              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                height: \"40\",\n                width: \"40\",\n                src: \"/icons/user-red.svg\",\n                alt: \"Profilo\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 126,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"KuDA1mnhn6i/qJId4bZXwC8Oyh8=\", false, function () {\n  return [easy_peasy__WEBPACK_IMPORTED_MODULE_3__.useStoreState];\n});\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLmpzPzUwM2QiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlcklkIiwidXNlU3RhdGUiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT3BlbiIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVTY3JvbGwiLCJwb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXRlbXNJbkNhcnQiLCJjYXJ0IiwidXNlU3RvcmVTdGF0ZSIsInN0YXRlIiwiY2FydEl0ZW1zIiwibWFwIiwiaXRlbSIsInF1YW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLE1BQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQUEsa0JBQ1hDLCtDQUFRLENBQUMsS0FBRCxDQURHO0FBQUEsTUFDbENDLE9BRGtDO0FBQUEsTUFDekJDLFVBRHlCOztBQUFBLG1CQUdqQkYsK0NBQVEsQ0FBQyxLQUFELENBSFM7QUFBQSxNQUdsQ0csSUFIa0M7QUFBQSxNQUc1QkMsT0FINEI7O0FBSXpDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FBTUQsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBYjtBQUFBLEdBQW5COztBQUp5QyxtQkFNR0gsK0NBQVEsQ0FBQyxDQUFELENBTlg7QUFBQSxNQU1sQ00sY0FOa0M7QUFBQSxNQU1sQkMsaUJBTmtCOztBQU96QyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQU1DLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxXQUF4QjtBQUNBSixxQkFBaUIsQ0FBQ0UsUUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBHRDs7R0F0SXVCUixNO1VBcUJUb0IscUQ7OztLQXJCU3BCLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2YmFyLCBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IHVzZVN0b3JlU3RhdGUgfSBmcm9tIFwiZWFzeS1wZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyB1c2VySWQgfSkge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4gc2V0T3Blbighb3Blbik7XG5cbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHZhciBpdGVtc0luQ2FydCA9IDA7XG4gIGNvbnN0IGNhcnQgPSB1c2VTdG9yZVN0YXRlKChzdGF0ZSkgPT4gc3RhdGUuY2FydCk7XG4gIGlmIChtb3VudGVkKSB7XG4gICAgY2FydC5jYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICBpdGVtc0luQ2FydCArPSBpdGVtLnF1YW50aXR5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICBzY3JvbGxQb3NpdGlvbiA+IDIwMCA/IFwiYmctdHJhbnNpdGlvblwiIDogXCJcIlxuICAgICAgfSBmaXhlZC10b3Agd3JhcHBlci1jdXN0b20tbmF2YmFyYH1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInN0aWNreS10b3BcIj5cbiAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9XCJjdXN0b20tbmF2YmFyIHBvc2l0aW9uLXJlbGF0aXZlXCIgZXhwYW5kPVwibWRcIj5cbiAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgcC0wXCI+TG9nbzwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L05hdmJhci5CcmFuZD5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1pY29uc1wiPlxuICAgICAgICAgICAge3VzZXJJZCAmJiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FycmVsbG9cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICB7c2Nyb2xsUG9zaXRpb24gPiAyMDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJ0SWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pY29ucy9waXp6YS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2FycmVsbG9cIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgY2FydEljb25fX251bWJlcmB9PntpdGVtc0luQ2FydH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FydEljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaWNvbnMvcGl6emEtcmVkLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDYXJyZWxsb1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BjYXJ0SWNvbl9fbnVtYmVyYH0+e2l0ZW1zSW5DYXJ0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVufVxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoYW0gaGFtNiAke29wZW4gPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI4MFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZSB0b3BcIlxuICAgICAgICAgICAgICAgICAgZD1cIm0gMzAsMzMgaCA0MCBjIDEzLjEwMDQxNSwwIDE0LjM4MDIwNCwzMS44MDI1OCA2Ljg5OTY0NiwzMy40MjE3NzcgLTI0LjYxMjAzOSw1LjMyNzM3MyA5LjAxNjE1NCwtNTIuMzM3NTc3IC0xMi43NTc1MSwtMzAuNTYzOTEzIGwgLTI4LjI4NDI3MiwyOC4yODQyNzJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmUgbWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJtIDcwLDUwIGMgMCwwIC0zMi4yMTM0MzYsMCAtNDAsMCAtNy43ODY1NjQsMCAtNi40Mjg1NzEsLTQuNjQwMjQ0IC02LjQyODU3MSwtOC41NzE0MjkgMCwtNS44OTU0NzEgNi4wNzM3NDMsLTExLjc4MzM5OSAxMi4yODY0MzUsLTUuNTcwNzA3IDYuMjEyNjkyLDYuMjEyNjkyIDI4LjI4NDI3MiwyOC4yODQyNzIgMjguMjg0MjcyLDI4LjI4NDI3MlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZSBib3R0b21cIlxuICAgICAgICAgICAgICAgICAgZD1cIm0gNjkuNTc1NDA1LDY3LjA3MzgyNiBoIC00MCBjIC0xMy4xMDA0MTUsMCAtMTQuMzgwMjA0LC0zMS44MDI1OCAtNi44OTk2NDYsLTMzLjQyMTc3NyAyNC42MTIwMzksLTUuMzI3MzczIC05LjAxNjE1NCw1Mi4zMzc1NzcgMTIuNzU3NTEsMzAuNTYzOTEzIGwgMjguMjg0MjcyLC0yOC4yODQyNzJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9OYXZiYXIuVG9nZ2xlPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBjbGFzc05hbWU9e29wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9PlxuICAgICAgICAgICAgeyF1c2VySWQgJiYgKFxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlT3Blbn0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgIEFjY2VkaS9SZWdpc3RyYXRpXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7dXNlcklkICYmIChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxvXCI+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlT3Blbn0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgIHtzY3JvbGxQb3NpdGlvbiA+IDIwMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaWNvbnMvdXNlci5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2ZpbG9cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaWNvbnMvdXNlci1yZWQuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICA8L05hdmJhcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/header.js\n");

/***/ })

});