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
exports.id = "pages/api/profile";
exports.ids = ["pages/api/profile"];
exports.modules = {

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isTypeEqual\": function() { return /* binding */ isTypeEqual; },\n/* harmony export */   \"trueTypeOf\": function() { return /* binding */ trueTypeOf; }\n/* harmony export */ });\nfunction isTypeEqual(leftInp, rightInpt) {\n  return trueTypeOf(leftInp) === trueTypeOf(rightInpt);\n}\nfunction trueTypeOf(inp) {\n  return Object.prototype.toString.call(inp).slice(8, -1).toLowerCase();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmNrci1uZXh0anMvLi9oZWxwZXJzL2luZGV4LmpzP2E1MTQiXSwibmFtZXMiOlsiaXNUeXBlRXF1YWwiLCJsZWZ0SW5wIiwicmlnaHRJbnB0IiwidHJ1ZVR5cGVPZiIsImlucCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sU0FBU0EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEJDLFNBQTlCLEVBQXlDO0FBQzlDLFNBQU9DLFVBQVUsQ0FBQ0YsT0FBRCxDQUFWLEtBQXdCRSxVQUFVLENBQUNELFNBQUQsQ0FBekM7QUFDRDtBQUVNLFNBQVNDLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQzlCLFNBQU9DLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCSixHQUEvQixFQUFvQ0ssS0FBcEMsQ0FBMEMsQ0FBMUMsRUFBNkMsQ0FBQyxDQUE5QyxFQUFpREMsV0FBakQsRUFBUDtBQUNEIiwiZmlsZSI6Ii4vaGVscGVycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc1R5cGVFcXVhbChsZWZ0SW5wLCByaWdodElucHQpIHtcbiAgcmV0dXJuIHRydWVUeXBlT2YobGVmdElucCkgPT09IHRydWVUeXBlT2YocmlnaHRJbnB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRydWVUeXBlT2YoaW5wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wKS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/index.js\n");

/***/ }),

/***/ "./pages/api/profile.js":
/*!******************************!*\
  !*** ./pages/api/profile.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ \"./helpers/index.js\");\n/* harmony import */ var _lib_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/users */ \"./lib/users.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  if (req.method !== \"GET\") {\n    res.status(403).json({\n      error: \"METHOD_NOT_ALLOWED\",\n      message: `${req.method} is not allowed, please use the GET http method.`\n    });\n    return;\n  }\n\n  const authorizationToken = req.headers.authorization;\n\n  if (authorizationToken) {\n    try {\n      const verifiedUser = (0,_lib_users__WEBPACK_IMPORTED_MODULE_1__.verifyToken)(authorizationToken);\n\n      if (verifiedUser) {\n        const user = (0,_lib_users__WEBPACK_IMPORTED_MODULE_1__.findUser)(verifiedUser.username);\n        res.status(200).json({\n          payload: {\n            username: user.username,\n            email: user.email,\n            id: user.id\n          }\n        });\n        return;\n      }\n    } catch (error) {\n      console.log(\"error\", error); // Token has been expired or we detected a fruad attack\n\n      res.status(401).json({\n        error: \"Unauthorized\",\n        message: \"Not allowed.\"\n      });\n      return;\n    }\n  } // Token has been expired or we detected a fruad attack\n\n\n  res.status(401).json({\n    error: \"Unauthorized\",\n    message: \"Not allowed.\"\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmNrci1uZXh0anMvLi9wYWdlcy9hcGkvcHJvZmlsZS5qcz9kZDQ0Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJhdXRob3JpemF0aW9uVG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInZlcmlmaWVkVXNlciIsInZlcmlmeVRva2VuIiwidXNlciIsImZpbmRVc2VyIiwidXNlcm5hbWUiLCJwYXlsb2FkIiwiZW1haWwiLCJpZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQSwrREFBZSxDQUFDQSxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUMzQixNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFuQixFQUEwQjtBQUN4QkQsT0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJDLFdBQUssRUFBRSxvQkFEWTtBQUVuQkMsYUFBTyxFQUFHLEdBQUVOLEdBQUcsQ0FBQ0UsTUFBTztBQUZKLEtBQXJCO0FBSUE7QUFDRDs7QUFDRCxRQUFNSyxrQkFBa0IsR0FBR1AsR0FBRyxDQUFDUSxPQUFKLENBQVlDLGFBQXZDOztBQUNBLE1BQUlGLGtCQUFKLEVBQXdCO0FBQ3RCLFFBQUk7QUFDRixZQUFNRyxZQUFZLEdBQUdDLHVEQUFXLENBQUNKLGtCQUFELENBQWhDOztBQUVBLFVBQUlHLFlBQUosRUFBa0I7QUFDaEIsY0FBTUUsSUFBSSxHQUFHQyxvREFBUSxDQUFDSCxZQUFZLENBQUNJLFFBQWQsQ0FBckI7QUFDQWIsV0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJXLGlCQUFPLEVBQUU7QUFDUEQsb0JBQVEsRUFBRUYsSUFBSSxDQUFDRSxRQURSO0FBRVBFLGlCQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FGTDtBQUdQQyxjQUFFLEVBQUVMLElBQUksQ0FBQ0s7QUFIRjtBQURVLFNBQXJCO0FBT0E7QUFDRDtBQUNGLEtBZEQsQ0FjRSxPQUFPWixLQUFQLEVBQWM7QUFDZGEsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQmQsS0FBckIsRUFEYyxDQUVkOztBQUNBSixTQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkMsYUFBSyxFQUFFLGNBRFk7QUFFbkJDLGVBQU8sRUFBRTtBQUZVLE9BQXJCO0FBSUE7QUFDRDtBQUNGLEdBakMwQixDQW1DM0I7OztBQUNBTCxLQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkMsU0FBSyxFQUFFLGNBRFk7QUFFbkJDLFdBQU8sRUFBRTtBQUZVLEdBQXJCO0FBSUQsQ0F4Q0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRydWVUeXBlT2YgfSBmcm9tIFwiLi4vLi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgZmluZFVzZXIsIGxvZ2luLCByZWdpc3RlciwgdmVyaWZ5VG9rZW4gfSBmcm9tIFwiLi4vLi4vbGliL3VzZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJHRVRcIikge1xuICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtcbiAgICAgIGVycm9yOiBcIk1FVEhPRF9OT1RfQUxMT1dFRFwiLFxuICAgICAgbWVzc2FnZTogYCR7cmVxLm1ldGhvZH0gaXMgbm90IGFsbG93ZWQsIHBsZWFzZSB1c2UgdGhlIEdFVCBodHRwIG1ldGhvZC5gLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBhdXRob3JpemF0aW9uVG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICBpZiAoYXV0aG9yaXphdGlvblRva2VuKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkVXNlciA9IHZlcmlmeVRva2VuKGF1dGhvcml6YXRpb25Ub2tlbik7XG5cbiAgICAgIGlmICh2ZXJpZmllZFVzZXIpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IGZpbmRVc2VyKHZlcmlmaWVkVXNlci51c2VybmFtZSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICAvLyBUb2tlbiBoYXMgYmVlbiBleHBpcmVkIG9yIHdlIGRldGVjdGVkIGEgZnJ1YWQgYXR0YWNrXG4gICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7XG4gICAgICAgIGVycm9yOiBcIlVuYXV0aG9yaXplZFwiLFxuICAgICAgICBtZXNzYWdlOiBcIk5vdCBhbGxvd2VkLlwiLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLy8gVG9rZW4gaGFzIGJlZW4gZXhwaXJlZCBvciB3ZSBkZXRlY3RlZCBhIGZydWFkIGF0dGFja1xuICByZXMuc3RhdHVzKDQwMSkuanNvbih7XG4gICAgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgYWxsb3dlZC5cIixcbiAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/profile.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["lib_users_js"], function() { return __webpack_exec__("./pages/api/profile.js"); });
module.exports = __webpack_exports__;

})();