"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction index() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"Loading\");\n    const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        fetch(\"http://localhost:8080/api/home\").then((response)=>response.json()).then((data)=>{\n            setMessage(data.message);\n            setPeople(data.people);\n        });\n    }, []);\n    return;\n}\n_s(index, \"gSZ18psCTzqWWw+/0vH9zvusUts=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFnRDtBQUVoRCxTQUFTRzs7SUFFUCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1JPLE1BQU0sa0NBQWtDQyxJQUFJLENBQzFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQ3pCRixJQUFJLENBQUMsQ0FBQ0c7WUFDTlAsV0FBV08sS0FBS1IsT0FBTztZQUN2QkcsVUFBVUssS0FBS04sTUFBTTtRQUN2QjtJQUNGLEdBQUcsRUFBRTtJQUVMO0FBRUY7R0FoQlNIO0FBa0JULCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcblxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnTG9hZGluZycpXG4gIGNvbnN0IFtwZW9wbGUsIHNldFBlb3BsZV0gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ob21lXCIpLnRoZW4oXG4gICAgICByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKClcbiAgICApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlKVxuICAgICAgc2V0UGVvcGxlKGRhdGEucGVvcGxlKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVyblxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5kZXgiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInBlb3BsZSIsInNldFBlb3BsZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});