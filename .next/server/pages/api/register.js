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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/users */ \"./lib/users.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  if (req.method !== \"POST\") {\n    res.status(405).json({\n      error: \"METHOD_NOT_ALLOWED\",\n      message: `${req.method} is not allowed, please use the POST http method.`\n    });\n    return;\n  }\n\n  const payload = JSON.parse(req.body);\n  res.status(200).json((0,_lib_users__WEBPACK_IMPORTED_MODULE_0__.register)(payload));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmNrci1uZXh0anMvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanM/MTU5YiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLCtEQUFlLENBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzNCLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCRCxPQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkMsV0FBSyxFQUFFLG9CQURZO0FBRW5CQyxhQUFPLEVBQUcsR0FBRU4sR0FBRyxDQUFDRSxNQUFPO0FBRkosS0FBckI7QUFJQTtBQUNEOztBQUVELFFBQU1LLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdULEdBQUcsQ0FBQ1UsSUFBZixDQUFoQjtBQUVBVCxLQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQk8sb0RBQVEsQ0FBQ0osT0FBRCxDQUE3QjtBQUNELENBWkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2dpbiwgcmVnaXN0ZXIgfSBmcm9tIFwiLi4vLi4vbGliL3VzZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7XG4gICAgICBlcnJvcjogXCJNRVRIT0RfTk9UX0FMTE9XRURcIixcbiAgICAgIG1lc3NhZ2U6IGAke3JlcS5tZXRob2R9IGlzIG5vdCBhbGxvd2VkLCBwbGVhc2UgdXNlIHRoZSBQT1NUIGh0dHAgbWV0aG9kLmAsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlZ2lzdGVyKHBheWxvYWQpKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/register.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["lib_users_js"], function() { return __webpack_exec__("./pages/api/register.js"); });
module.exports = __webpack_exports__;

})();