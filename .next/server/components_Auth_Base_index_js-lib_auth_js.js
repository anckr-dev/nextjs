/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_Auth_Base_index_js-lib_auth_js";
exports.ids = ["components_Auth_Base_index_js-lib_auth_js"];
exports.modules = {

/***/ "./components/Auth/Base/index.js":
/*!***************************************!*\
  !*** ./components/Auth/Base/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseAuthLayout\": function() { return /* binding */ BaseAuthLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/Vishal/Documents/ANCKR Codebase/next js/components/Auth/Base/index.js\";\nfunction BaseAuthLayout(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"row justify-content-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-md-6 col-sm-12\",\n        children: props.children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmNrci1uZXh0anMvLi9jb21wb25lbnRzL0F1dGgvQmFzZS9pbmRleC5qcz85YWY1Il0sIm5hbWVzIjpbIkJhc2VBdXRoTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUNwQyxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQSxrQkFBcUNBLEtBQUssQ0FBQ0M7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXV0aC9CYXNlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIEJhc2VBdXRoTGF5b3V0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtc20tMTJcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Auth/Base/index.js\n");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginUser\": function() { return /* binding */ loginUser; },\n/* harmony export */   \"registerUser\": function() { return /* binding */ registerUser; },\n/* harmony export */   \"whoAmI\": function() { return /* binding */ whoAmI; }\n/* harmony export */ });\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token */ \"./lib/token.js\");\n\nconst loginUser = async (username, password) => {\n  const res = await fetch(\"/api/login\", {\n    body: JSON.stringify({\n      username,\n      password\n    }),\n    method: \"POST\"\n  });\n  const data = await res.json();\n  return data;\n}; // ------------------------------------------------------------*\n\nconst registerUser = async payload => {\n  const res = await fetch(\"/api/register\", {\n    body: JSON.stringify(payload),\n    method: \"POST\"\n  });\n  const data = await res.json();\n  return data;\n}; // ------------------------------------------------------------*\n\nconst whoAmI = async () => {\n  const res = await fetch(\"/api/profile\", {\n    headers: {\n      authorization: (0,_token__WEBPACK_IMPORTED_MODULE_0__.getToken)()\n    },\n    method: \"GET\"\n  });\n  const data = await res.json();\n  return data;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmNrci1uZXh0anMvLi9saWIvYXV0aC5qcz8zMjRmIl0sIm5hbWVzIjpbImxvZ2luVXNlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXMiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwiZGF0YSIsImpzb24iLCJyZWdpc3RlclVzZXIiLCJwYXlsb2FkIiwid2hvQW1JIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJnZXRUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsU0FBUyxHQUFHLE9BQU9DLFFBQVAsRUFBaUJDLFFBQWpCLEtBQThCO0FBQ3JELFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsWUFBRCxFQUFlO0FBQ3BDQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVOLGNBQUY7QUFBWUM7QUFBWixLQUFmLENBRDhCO0FBRXBDTSxVQUFNLEVBQUU7QUFGNEIsR0FBZixDQUF2QjtBQUlBLFFBQU1DLElBQUksR0FBRyxNQUFNTixHQUFHLENBQUNPLElBQUosRUFBbkI7QUFDQSxTQUFPRCxJQUFQO0FBQ0QsQ0FQTSxDLENBUVA7O0FBQ08sTUFBTUUsWUFBWSxHQUFHLE1BQU9DLE9BQVAsSUFBbUI7QUFDN0MsUUFBTVQsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxlQUFELEVBQWtCO0FBQ3ZDQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSyxPQUFmLENBRGlDO0FBRXZDSixVQUFNLEVBQUU7QUFGK0IsR0FBbEIsQ0FBdkI7QUFJQSxRQUFNQyxJQUFJLEdBQUcsTUFBTU4sR0FBRyxDQUFDTyxJQUFKLEVBQW5CO0FBQ0EsU0FBT0QsSUFBUDtBQUNELENBUE0sQyxDQVFQOztBQUNPLE1BQU1JLE1BQU0sR0FBRyxZQUFZO0FBQ2hDLFFBQU1WLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsY0FBRCxFQUFpQjtBQUN0Q1UsV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUVDLGdEQUFRO0FBRGhCLEtBRDZCO0FBSXRDUixVQUFNLEVBQUU7QUFKOEIsR0FBakIsQ0FBdkI7QUFNQSxRQUFNQyxJQUFJLEdBQUcsTUFBTU4sR0FBRyxDQUFDTyxJQUFKLEVBQW5CO0FBQ0EsU0FBT0QsSUFBUDtBQUNELENBVE0iLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIi4vdG9rZW5cIjtcblxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2xvZ2luXCIsIHtcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvcmVnaXN0ZXJcIiwge1xuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxuZXhwb3J0IGNvbnN0IHdob0FtSSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Byb2ZpbGVcIiwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIGF1dGhvcml6YXRpb246IGdldFRva2VuKCksXG4gICAgfSxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./lib/token.js":
/*!**********************!*\
  !*** ./lib/token.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeToken\": function() { return /* binding */ removeToken; },\n/* harmony export */   \"getToken\": function() { return /* binding */ getToken; }\n/* harmony export */ });\n/**\n * * Remove stored token\n * It should remove the Token into the SessionStorage or LocalStorage\n *\n * @returns {void}\n */\nfunction removeToken() {\n  window.localStorage.removeItem(\"anckr_token\");\n  window.sessionStorage.removeItem(\"anckr_token\");\n}\n/**\n * * Get the Token if presents.\n *\n * @returns {string | undefined}\n */\n\nfunction getToken() {\n  return window.localStorage.getItem(\"anckr_token\") || window.sessionStorage.getItem(\"anckr_token\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmNrci1uZXh0anMvLi9saWIvdG9rZW4uanM/MWNkOSJdLCJuYW1lcyI6WyJyZW1vdmVUb2tlbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJzZXNzaW9uU3RvcmFnZSIsImdldFRva2VuIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxXQUFULEdBQXVCO0FBQzVCQyxRQUFNLENBQUNDLFlBQVAsQ0FBb0JDLFVBQXBCLENBQStCLGFBQS9CO0FBQ0FGLFFBQU0sQ0FBQ0csY0FBUCxDQUFzQkQsVUFBdEIsQ0FBaUMsYUFBakM7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0UsUUFBVCxHQUFvQjtBQUN6QixTQUFPSixNQUFNLENBQUNDLFlBQVAsQ0FBb0JJLE9BQXBCLENBQTRCLGFBQTVCLEtBQThDTCxNQUFNLENBQUNHLGNBQVAsQ0FBc0JFLE9BQXRCLENBQThCLGFBQTlCLENBQXJEO0FBQ0QiLCJmaWxlIjoiLi9saWIvdG9rZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICogUmVtb3ZlIHN0b3JlZCB0b2tlblxuICogSXQgc2hvdWxkIHJlbW92ZSB0aGUgVG9rZW4gaW50byB0aGUgU2Vzc2lvblN0b3JhZ2Ugb3IgTG9jYWxTdG9yYWdlXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbigpIHtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYW5ja3JfdG9rZW5cIik7XG4gIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYW5ja3JfdG9rZW5cIik7XG59XG5cbi8qKlxuICogKiBHZXQgdGhlIFRva2VuIGlmIHByZXNlbnRzLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFuY2tyX3Rva2VuXCIpIHx8IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYW5ja3JfdG9rZW5cIik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/token.js\n");

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;