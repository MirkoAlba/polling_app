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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mirkoalbanese/mirkoalbanese/Projects/Bar/polling_app/components/layout/header.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Header(_ref) {\n  _s();\n\n  var isLoggedIn = _ref.isLoggedIn;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var handleOpen = function handleOpen() {\n    return setOpen(!open);\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      scrollPosition = _useState2[0],\n      setScrollPosition = _useState2[1];\n\n  var handleScroll = function handleScroll() {\n    var position = window.pageYOffset;\n    setScrollPosition(position);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    window.addEventListener(\"scroll\", handleScroll, {\n      passive: true\n    });\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"\".concat(scrollPosition > 200 ? \"bg-transition\" : \"\", \" fixed-top wrapper-custom-navbar\"),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n      className: \"sticky-top\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n        className: \"custom-navbar position-relative\",\n        expand: \"md\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Brand, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              onClick: handleOpen,\n              className: \"nav-link p-0\",\n              children: \"Logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"wrapper-icons\",\n          children: [isLoggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/carrello\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              href: \"#\",\n              children: scrollPosition > 200 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                height: \"40\",\n                width: \"40\",\n                src: \"/pizza.svg\",\n                alt: \"Carrello\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 21\n              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                height: \"40\",\n                width: \"40\",\n                src: \"/pizza-red.svg\",\n                alt: \"Carrello\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n            className: \"p-0\",\n            onClick: handleOpen,\n            \"aria-controls\": \"basic-navbar-nav\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n              className: \"ham ham6 \".concat(open ? \"active\" : \"\"),\n              viewBox: \"0 0 100 100\",\n              width: \"80\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                className: \"line top\",\n                d: \"m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                className: \"line middle\",\n                d: \"m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                className: \"line bottom\",\n                d: \"m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n          className: open ? \"open\" : \"closed\",\n          children: [!isLoggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/register\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              onClick: handleOpen,\n              className: \"nav-link\",\n              children: \"Accedi/Registrati\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 15\n          }, this), isLoggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/profilo\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              className: \"nav-link\",\n              children: scrollPosition > 200 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                height: \"40\",\n                width: \"40\",\n                src: \"/user.svg\",\n                alt: \"Profilo\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 21\n              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                height: \"40\",\n                width: \"40\",\n                src: \"/user-red.svg\",\n                alt: \"Profilo\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"9+Ht3S4hImBUTBdIoy9A07IUmsw=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLmpzPzUwM2QiXSwibmFtZXMiOlsiSGVhZGVyIiwiaXNMb2dnZWRJbiIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwic2Nyb2xsUG9zaXRpb24iLCJzZXRTY3JvbGxQb3NpdGlvbiIsImhhbmRsZVNjcm9sbCIsInBvc2l0aW9uIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUFnQztBQUFBOztBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYzs7QUFBQSxrQkFDckJDLCtDQUFRLENBQUMsS0FBRCxDQURhO0FBQUEsTUFDdENDLElBRHNDO0FBQUEsTUFDaENDLE9BRGdDOztBQUU3QyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1ELE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7QUFBQSxHQUFuQjs7QUFGNkMsbUJBSURELCtDQUFRLENBQUMsQ0FBRCxDQUpQO0FBQUEsTUFJdENJLGNBSnNDO0FBQUEsTUFJdEJDLGlCQUpzQjs7QUFLN0MsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBeEI7QUFDQUoscUJBQWlCLENBQUNFLFFBQUQsQ0FBakI7QUFDRCxHQUhEOztBQUtBRyxrREFBUyxDQUFDLFlBQU07QUFDZEYsVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0wsWUFBbEMsRUFBZ0Q7QUFBRU0sYUFBTyxFQUFFO0FBQVgsS0FBaEQ7QUFDQSxXQUFPLFlBQU07QUFDWEosWUFBTSxDQUFDSyxtQkFBUCxDQUEyQixRQUEzQixFQUFx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aEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxnQkFHQztBQUNFLHNCQUFNLEVBQUMsSUFEVDtBQUVFLHFCQUFLLEVBQUMsSUFGUjtBQUdFLG1CQUFHLEVBQUMsZUFITjtBQUlFLG1CQUFHLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0ZEOztHQWhIdUJOLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZiYXIsIENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgaXNMb2dnZWRJbiB9KSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHNldE9wZW4oIW9wZW4pO1xuXG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICBzY3JvbGxQb3NpdGlvbiA+IDIwMCA/IFwiYmctdHJhbnNpdGlvblwiIDogXCJcIlxuICAgICAgfSBmaXhlZC10b3Agd3JhcHBlci1jdXN0b20tbmF2YmFyYH1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInN0aWNreS10b3BcIj5cbiAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9XCJjdXN0b20tbmF2YmFyIHBvc2l0aW9uLXJlbGF0aXZlXCIgZXhwYW5kPVwibWRcIj5cbiAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlT3Blbn0gY2xhc3NOYW1lPVwibmF2LWxpbmsgcC0wXCI+XG4gICAgICAgICAgICAgICAgTG9nb1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItaWNvbnNcIj5cbiAgICAgICAgICAgIHtpc0xvZ2dlZEluICYmIChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJyZWxsb1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICB7c2Nyb2xsUG9zaXRpb24gPiAyMDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3BpenphLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2FycmVsbG9cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvcGl6emEtcmVkLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2FycmVsbG9cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW59XG4gICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhhbSBoYW02ICR7b3BlbiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjgwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lIHRvcFwiXG4gICAgICAgICAgICAgICAgICBkPVwibSAzMCwzMyBoIDQwIGMgMTMuMTAwNDE1LDAgMTQuMzgwMjA0LDMxLjgwMjU4IDYuODk5NjQ2LDMzLjQyMTc3NyAtMjQuNjEyMDM5LDUuMzI3MzczIDkuMDE2MTU0LC01Mi4zMzc1NzcgLTEyLjc1NzUxLC0zMC41NjM5MTMgbCAtMjguMjg0MjcyLDI4LjI4NDI3MlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZSBtaWRkbGVcIlxuICAgICAgICAgICAgICAgICAgZD1cIm0gNzAsNTAgYyAwLDAgLTMyLjIxMzQzNiwwIC00MCwwIC03Ljc4NjU2NCwwIC02LjQyODU3MSwtNC42NDAyNDQgLTYuNDI4NTcxLC04LjU3MTQyOSAwLC01Ljg5NTQ3MSA2LjA3Mzc0MywtMTEuNzgzMzk5IDEyLjI4NjQzNSwtNS41NzA3MDcgNi4yMTI2OTIsNi4yMTI2OTIgMjguMjg0MjcyLDI4LjI4NDI3MiAyOC4yODQyNzIsMjguMjg0MjcyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lIGJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICBkPVwibSA2OS41NzU0MDUsNjcuMDczODI2IGggLTQwIGMgLTEzLjEwMDQxNSwwIC0xNC4zODAyMDQsLTMxLjgwMjU4IC02Ljg5OTY0NiwtMzMuNDIxNzc3IDI0LjYxMjAzOSwtNS4zMjczNzMgLTkuMDE2MTU0LDUyLjMzNzU3NyAxMi43NTc1MSwzMC41NjM5MTMgbCAyOC4yODQyNzIsLTI4LjI4NDI3MlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L05hdmJhci5Ub2dnbGU+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGNsYXNzTmFtZT17b3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn0+XG4gICAgICAgICAgICB7IWlzTG9nZ2VkSW4gJiYgKFxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlT3Blbn0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgIEFjY2VkaS9SZWdpc3RyYXRpXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7aXNMb2dnZWRJbiAmJiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsb1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICB7c2Nyb2xsUG9zaXRpb24gPiAyMDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiNDBcIiB3aWR0aD1cIjQwXCIgc3JjPVwiL3VzZXIuc3ZnXCIgYWx0PVwiUHJvZmlsb1wiIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi91c2VyLXJlZC5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2ZpbG9cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/header.js\n");

/***/ })

});