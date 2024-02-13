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
exports.id = "pages/auth/register";
exports.ids = ["pages/auth/register"];
exports.modules = {

/***/ "./components/Auth/Register/index.js":
/*!*******************************************!*\
  !*** ./components/Auth/Register/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RegisterForm\": function() { return /* binding */ RegisterForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/Vishal/Documents/ANCKR Codebase/next js/components/Auth/Register/index.js\";\n\n\n\nfunction RegisterForm() {\n  const {\n    0: username,\n    1: setUsername\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    0: email,\n    1: setEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n\n  async function handleSubmit(e) {\n    e.preventDefault();\n\n    try {\n      const data = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.registerUser)({\n        username,\n        password,\n        email\n      });\n\n      if (data.isSuccessful) {\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/auth/login\");\n      }\n    } catch (error) {\n      console.log(error);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    onSubmit: handleSubmit,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n        className: \"h1\",\n        children: \"Register\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"emailInput\",\n          className: \"form-label\",\n          children: \"Email\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"email\",\n          id: \"emailInput\",\n          className: \"form-control\",\n          placeholder: \"Email\",\n          onChange: e => setEmail(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"usernameInput\",\n          className: \"form-label\",\n          children: \"Username\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          id: \"usernameInput\",\n          className: \"form-control\",\n          placeholder: \"Username\",\n          onChange: e => setUsername(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"passwordInput\",\n          className: \"form-label\",\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"password\",\n          id: \"passwordInput\",\n          className: \"form-control\",\n          placeholder: \"Password\",\n          onChange: e => setPassword(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        className: \"btn btn-primary\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmNrci1uZXh0anMvLi9jb21wb25lbnRzL0F1dGgvUmVnaXN0ZXIvaW5kZXguanM/ZWIxYiJdLCJuYW1lcyI6WyJSZWdpc3RlckZvcm0iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZW1haWwiLCJzZXRFbWFpbCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJyZWdpc3RlclVzZXIiLCJpc1N1Y2Nlc3NmdWwiLCJSb3V0ZXIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFlBQVQsR0FBd0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosK0NBQVEsQ0FBQyxFQUFELENBQWxDOztBQUVBLGlCQUFlSyxZQUFmLENBQTRCQyxDQUE1QixFQUErQjtBQUM3QkEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUk7QUFDRixZQUFNQyxJQUFJLEdBQUcsTUFBTUMsdURBQVksQ0FBQztBQUM5QlgsZ0JBRDhCO0FBRTlCRyxnQkFGOEI7QUFHOUJFO0FBSDhCLE9BQUQsQ0FBL0I7O0FBTUEsVUFBSUssSUFBSSxDQUFDRSxZQUFULEVBQXVCO0FBQ3JCQywrREFBQSxDQUFZLGFBQVo7QUFDRDtBQUNGLEtBVkQsQ0FVRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGOztBQUVELHNCQUNFO0FBQU0sWUFBUSxFQUFFUCxZQUFoQjtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBUSxpQkFBUyxFQUFDLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxZQUFmO0FBQTRCLG1CQUFTLEVBQUMsWUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsWUFBRSxFQUFDLFlBRkw7QUFHRSxtQkFBUyxFQUFDLGNBSFo7QUFJRSxxQkFBVyxFQUFDLE9BSmQ7QUFLRSxrQkFBUSxFQUFHQyxDQUFELElBQU9GLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDUyxNQUFGLENBQVNDLEtBQVY7QUFMM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQWNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLGVBQWY7QUFBK0IsbUJBQVMsRUFBQyxZQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxZQUFFLEVBQUMsZUFGTDtBQUdFLG1CQUFTLEVBQUMsY0FIWjtBQUlFLHFCQUFXLEVBQUMsVUFKZDtBQUtFLGtCQUFRLEVBQUdWLENBQUQsSUFBT1AsV0FBVyxDQUFDTyxDQUFDLENBQUNTLE1BQUYsQ0FBU0MsS0FBVjtBQUw5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLGVBMEJFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLGVBQWY7QUFBK0IsbUJBQVMsRUFBQyxZQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxZQUFFLEVBQUMsZUFGTDtBQUdFLG1CQUFTLEVBQUMsY0FIWjtBQUlFLHFCQUFXLEVBQUMsVUFKZDtBQUtFLGtCQUFRLEVBQUdWLENBQUQsSUFBT0osV0FBVyxDQUFDSSxDQUFDLENBQUNTLE1BQUYsQ0FBU0MsS0FBVjtBQUw5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRixlQXNDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUMsaUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXV0aC9SZWdpc3Rlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZWdpc3RlclVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3RlckZvcm0oKSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZWdpc3RlclVzZXIoe1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhLmlzU3VjY2Vzc2Z1bCkge1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9hdXRoL2xvZ2luXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJoMVwiPlJlZ2lzdGVyPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxJbnB1dFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsSW5wdXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVJbnB1dFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgIFVzZXJuYW1lXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWVJbnB1dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZElucHV0XCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Auth/Register/index.js\n");

/***/ }),

/***/ "./pages/auth/register.js":
/*!********************************!*\
  !*** ./pages/auth/register.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Auth_Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Auth/Base */ \"./components/Auth/Base/index.js\");\n/* harmony import */ var _components_Auth_Register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Auth/Register */ \"./components/Auth/Register/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/Vishal/Documents/ANCKR Codebase/next js/pages/auth/register.js\";\n\n\n\nconst styles = {\n  marginTop: 30,\n  textAlign: \"center\"\n};\nfunction Register() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Auth_Base__WEBPACK_IMPORTED_MODULE_1__.BaseAuthLayout, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Auth_Register__WEBPACK_IMPORTED_MODULE_2__.RegisterForm, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: styles,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/auth/login\",\n        children: \"Registered Before? Signin Now!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmNrci1uZXh0anMvLi9wYWdlcy9hdXRoL3JlZ2lzdGVyLmpzP2Y1NDEiXSwibmFtZXMiOlsic3R5bGVzIiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwiUmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxXQUFTLEVBQUUsRUFERTtBQUViQyxXQUFTLEVBQUU7QUFGRSxDQUFmO0FBSWUsU0FBU0MsUUFBVCxHQUFvQjtBQUNqQyxzQkFDRSw4REFBQyxpRUFBRDtBQUFBLDRCQUNFLDhEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFO0FBQUssV0FBSyxFQUFFSCxNQUFaO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC9yZWdpc3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VBdXRoTGF5b3V0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXV0aC9CYXNlXCI7XG5pbXBvcnQgeyBSZWdpc3RlckZvcm0gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BdXRoL1JlZ2lzdGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbWFyZ2luVG9wOiAzMCxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxCYXNlQXV0aExheW91dD5cbiAgICAgIDxSZWdpc3RlckZvcm0gLz5cblxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luXCI+UmVnaXN0ZXJlZCBCZWZvcmU/IFNpZ25pbiBOb3chPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9CYXNlQXV0aExheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/register.js\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Auth_Base_index_js-lib_auth_js"], function() { return __webpack_exec__("./pages/auth/register.js"); });
module.exports = __webpack_exports__;

})();