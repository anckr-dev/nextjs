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
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var _lib_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/token */ \"./lib/token.js\");\n\n\nvar _jsxFileName = \"/Users/Vishal/Documents/ANCKR Codebase/next js/pages/dashboard.js\";\n\n\n\n\nfunction Dashboard() {\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {\n    const token = window.localStorage.getItem(\"anckr_token\") || window.sessionStorage.getItem(\"anckr_token\");\n\n    if (!token) {\n      redirectToLogin();\n    } else {\n      (async () => {\n        try {\n          const data = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.whoAmI)();\n\n          if (data.error === \"Unauthorized\") {\n            redirectToLogin();\n          } else {\n            setUser(data.payload);\n          }\n        } catch (error) {\n          redirectToLogin();\n        }\n      })();\n    }\n  }, []);\n\n  function redirectToLogin() {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n  }\n\n  function handleLogout(e) {\n    e.preventDefault();\n    (0,_lib_token__WEBPACK_IMPORTED_MODULE_4__.removeToken)();\n    redirectToLogin();\n  }\n\n  if (user.hasOwnProperty(\"username\")) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-light\",\n        style: {\n          backgroundColor: \"#e3f2fd\"\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"container-fluid\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"navbar-brand\",\n            href: \"#\",\n            children: [\"Welcome \", user.username, \"!\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"btn btn-info\",\n            type: \"button\",\n            style: {\n              color: \"white\",\n              backgroundColor: \"#0d6efd\"\n            },\n            onClick: handleLogout,\n            children: \"Logout\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: [user.username, \"'s Profile\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"Welcme to ANCKR Next JS codebase\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmNrci1uZXh0anMvLi9wYWdlcy9kYXNoYm9hcmQuanM/YmJkOCJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiUmVhY3QiLCJ0b2tlbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uU3RvcmFnZSIsInJlZGlyZWN0VG9Mb2dpbiIsImRhdGEiLCJ3aG9BbUkiLCJlcnJvciIsInBheWxvYWQiLCJSb3V0ZXIiLCJoYW5kbGVMb2dvdXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVUb2tlbiIsImhhc093blByb3BlcnR5IiwiYmFja2dyb3VuZENvbG9yIiwidXNlcm5hbWUiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxTQUFULEdBQXFCO0FBQ2xDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0FDLHdEQUFBLENBQWdCLE1BQU07QUFDcEIsVUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLGFBQTVCLEtBQThDRixNQUFNLENBQUNHLGNBQVAsQ0FBc0JELE9BQXRCLENBQThCLGFBQTlCLENBQTVEOztBQUNBLFFBQUksQ0FBQ0gsS0FBTCxFQUFZO0FBQ1ZLLHFCQUFlO0FBQ2hCLEtBRkQsTUFFTztBQUNMLE9BQUMsWUFBWTtBQUNYLFlBQUk7QUFDRixnQkFBTUMsSUFBSSxHQUFHLE1BQU1DLGlEQUFNLEVBQXpCOztBQUNBLGNBQUlELElBQUksQ0FBQ0UsS0FBTCxLQUFlLGNBQW5CLEVBQW1DO0FBQ2pDSCwyQkFBZTtBQUNoQixXQUZELE1BRU87QUFDTFIsbUJBQU8sQ0FBQ1MsSUFBSSxDQUFDRyxPQUFOLENBQVA7QUFDRDtBQUNGLFNBUEQsQ0FPRSxPQUFPRCxLQUFQLEVBQWM7QUFDZEgseUJBQWU7QUFDaEI7QUFDRixPQVhEO0FBWUQ7QUFDRixHQWxCRCxFQWtCRyxFQWxCSDs7QUFvQkEsV0FBU0EsZUFBVCxHQUEyQjtBQUN6QkssMkRBQUEsQ0FBWSxhQUFaO0FBQ0Q7O0FBRUQsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBQywyREFBVztBQUNYVCxtQkFBZTtBQUNoQjs7QUFFRCxNQUFJVCxJQUFJLENBQUNtQixjQUFMLENBQW9CLFVBQXBCLENBQUosRUFBcUM7QUFDbkMsd0JBQ0U7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBcUMsYUFBSyxFQUFFO0FBQUVDLHlCQUFlLEVBQUU7QUFBbkIsU0FBNUM7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUMsY0FBYjtBQUE0QixnQkFBSSxFQUFDLEdBQWpDO0FBQUEsbUNBQ1dwQixJQUFJLENBQUNxQixRQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUNFLHFCQUFTLEVBQUMsY0FEWjtBQUVFLGdCQUFJLEVBQUMsUUFGUDtBQUdFLGlCQUFLLEVBQUU7QUFBRUMsbUJBQUssRUFBRSxPQUFUO0FBQWtCRiw2QkFBZSxFQUFFO0FBQW5DLGFBSFQ7QUFJRSxtQkFBTyxFQUFFTCxZQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWdCRTtBQUFBLG1CQUFLZixJQUFJLENBQUNxQixRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRjtBQUFBLG9CQURGO0FBb0JEOztBQUNELHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL2Rhc2hib2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHdob0FtSSB9IGZyb20gXCIuLi9saWIvYXV0aFwiO1xuaW1wb3J0IHsgcmVtb3ZlVG9rZW4gfSBmcm9tIFwiLi4vbGliL3Rva2VuXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFuY2tyX3Rva2VuXCIpIHx8IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYW5ja3JfdG9rZW5cIik7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmVkaXJlY3RUb0xvZ2luKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHdob0FtSSgpO1xuICAgICAgICAgIGlmIChkYXRhLmVycm9yID09PSBcIlVuYXV0aG9yaXplZFwiKSB7XG4gICAgICAgICAgICByZWRpcmVjdFRvTG9naW4oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VXNlcihkYXRhLnBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZWRpcmVjdFRvTG9naW4oKTtcbiAgICAgICAgfVxuICAgICAgfSkoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiByZWRpcmVjdFRvTG9naW4oKSB7XG4gICAgUm91dGVyLnB1c2goXCIvYXV0aC9sb2dpblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxvZ291dChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmVtb3ZlVG9rZW4oKTtcbiAgICByZWRpcmVjdFRvTG9naW4oKTtcbiAgfVxuXG4gIGlmICh1c2VyLmhhc093blByb3BlcnR5KFwidXNlcm5hbWVcIikpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNlM2YyZmRcIiB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgV2VsY29tZSB7dXNlci51c2VybmFtZX0hXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiIzBkNmVmZFwiIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxoMz57dXNlci51c2VybmFtZX0ncyBQcm9maWxlPC9oMz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDxkaXY+V2VsY21lIHRvIEFOQ0tSIE5leHQgSlMgY29kZWJhc2U8L2Rpdj47XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["lib_auth_js"], function() { return __webpack_exec__("./pages/dashboard.js"); });
module.exports = __webpack_exports__;

})();