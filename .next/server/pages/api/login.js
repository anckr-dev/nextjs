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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/users */ \"./lib/users.js\");\n// api folder ---> Welcome to the server-side world\n // Request Handler Function\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  if (req.method !== \"POST\") {\n    res.status(405).json({\n      error: \"METHOD_NOT_ALLOWED\",\n      message: `${req.method} is not allowed, please use the POST http method.`\n    });\n    return;\n  }\n\n  const {\n    username,\n    password\n  } = JSON.parse(req.body);\n  res.status(200).json((0,_lib_users__WEBPACK_IMPORTED_MODULE_0__.login)(username, password));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmNrci1uZXh0anMvLi9wYWdlcy9hcGkvbG9naW4uanM/MDM4NCJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtDQUVBOztBQUNBLCtEQUFlLENBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBRTNCLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCRCxPQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkMsV0FBSyxFQUFFLG9CQURZO0FBRW5CQyxhQUFPLEVBQUcsR0FBRU4sR0FBRyxDQUFDRSxNQUFPO0FBRkosS0FBckI7QUFJQTtBQUNEOztBQUNELFFBQU07QUFBRUssWUFBRjtBQUFZQztBQUFaLE1BQXlCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1YsR0FBRyxDQUFDVyxJQUFmLENBQS9CO0FBRUFWLEtBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCUSxpREFBSyxDQUFDTCxRQUFELEVBQVdDLFFBQVgsQ0FBMUI7QUFDRCxDQVpEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpIGZvbGRlciAtLS0+IFdlbGNvbWUgdG8gdGhlIHNlcnZlci1zaWRlIHdvcmxkXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gXCIuLi8uLi9saWIvdXNlcnNcIjtcbi8vIFJlcXVlc3QgSGFuZGxlciBGdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG5cbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oe1xuICAgICAgZXJyb3I6IFwiTUVUSE9EX05PVF9BTExPV0VEXCIsXG4gICAgICBtZXNzYWdlOiBgJHtyZXEubWV0aG9kfSBpcyBub3QgYWxsb3dlZCwgcGxlYXNlIHVzZSB0aGUgUE9TVCBodHRwIG1ldGhvZC5gLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24obG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("bcrypt");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["lib_users_js"], function() { return __webpack_exec__("./pages/api/login.js"); });
module.exports = __webpack_exports__;

})();