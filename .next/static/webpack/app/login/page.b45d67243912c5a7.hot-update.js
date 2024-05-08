"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/login/page.tsx":
/*!****************************!*\
  !*** ./app/login/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_pocketbase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/pocketbase */ \"(app-pages-browser)/./services/pocketbase.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Login() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        if (name === \"email\") setEmail(value);\n        if (name === \"password\") setPassword(value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const authData = await _services_pocketbase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].collection(\"users\").authWithPassword(email, password);\n            router.push(\"/dashboard/profile\");\n        } catch (error) {\n            console.error(\"Login failed:\", error);\n            setError(\"Login failed. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100 flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center text-xl mb-4 font-bold\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/login/page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                name: \"email\",\n                                value: email,\n                                onChange: handleInputChange,\n                                required: true,\n                                className: \"border-2 border-gray-400 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent\",\n                                placeholder: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/login/page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/login/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                name: \"password\",\n                                value: password,\n                                onChange: handleInputChange,\n                                required: true,\n                                className: \"border-2 border-gray-400 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent\",\n                                placeholder: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/login/page.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/login/page.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-blue-500 text-white rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/login/page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/login/page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/login/page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    href: \"/register\",\n                    children: \"Sign Up!\"\n                }, void 0, false, {\n                    fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/login/page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-red-500 text-xs mt-2\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/login/page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 19\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/login/page.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/login/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"Np8Rp3SaAiTWofEiX8buWU8LAKU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDWjtBQUNLO0FBQ2Y7QUFFZCxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQWdCO0lBQ2xELE1BQU1XLFNBQVNULDBEQUFTQTtJQUV4QixNQUFNVSxvQkFBb0IsQ0FBQ0M7UUFDekIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDLElBQUlGLFNBQVMsU0FBU1IsU0FBU1M7UUFDL0IsSUFBSUQsU0FBUyxZQUFZTixZQUFZTztJQUN2QztJQUVBLE1BQU1FLGVBQWUsT0FBT0o7UUFDMUJBLEVBQUVLLGNBQWM7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTWxCLDREQUFFQSxDQUN0Qm1CLFVBQVUsQ0FBQyxTQUNYQyxnQkFBZ0IsQ0FBQ2hCLE9BQU9FO1lBQzNCSSxPQUFPVyxJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9iLE9BQU87WUFDZGMsUUFBUWQsS0FBSyxDQUFDLGlCQUFpQkE7WUFDL0JDLFNBQVM7UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUNjO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBcUM7Ozs7Ozs4QkFDbkQsOERBQUNFO29CQUFLQyxVQUFVWDs7c0NBQ2QsOERBQUNPOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDSTtnQ0FDQ0MsTUFBSztnQ0FDTGhCLE1BQUs7Z0NBQ0xDLE9BQU9WO2dDQUNQMEIsVUFBVW5CO2dDQUNWb0IsUUFBUTtnQ0FDUlAsV0FBVTtnQ0FDVlEsYUFBWTs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDVDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0k7Z0NBQ0NDLE1BQUs7Z0NBQ0xoQixNQUFLO2dDQUNMQyxPQUFPUjtnQ0FDUHdCLFVBQVVuQjtnQ0FDVm9CLFFBQVE7Z0NBQ1JQLFdBQVU7Z0NBQ1ZRLGFBQVk7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ0M7NEJBQ0NKLE1BQUs7NEJBQ0xMLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs4QkFJSCw4REFBQ1U7Ozs7OzhCQUNELDhEQUFDaEMsaURBQUlBO29CQUFDaUMsTUFBSzs4QkFBWTs7Ozs7O2dCQUN0QjNCLHVCQUFTLDhEQUFDZTtvQkFBSUMsV0FBVTs4QkFBNkJoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUQ7R0FqRXdCTDs7UUFJUEYsc0RBQVNBOzs7S0FKRkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xvZ2luL3BhZ2UudHN4PzQ5MGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIEZvcm1FdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHBiIGZyb20gXCJAL3NlcnZpY2VzL3BvY2tldGJhc2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgaWYgKG5hbWUgPT09IFwiZW1haWxcIikgc2V0RW1haWwodmFsdWUpO1xuICAgIGlmIChuYW1lID09PSBcInBhc3N3b3JkXCIpIHNldFBhc3N3b3JkKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGF1dGhEYXRhID0gYXdhaXQgcGJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxuICAgICAgICAuYXV0aFdpdGhQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkL3Byb2ZpbGVcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dpbiBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAgIHNldEVycm9yKFwiTG9naW4gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCBweC04IHB0LTYgcGItOCBtYi00XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhsIG1iLTQgZm9udC1ib2xkXCI+TG9naW48L2gyPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgcC0xIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS00MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1tZCBwLTEgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTQwMCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcC0xIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS00MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2dpblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+U2lnbiBVcCE8L0xpbms+XG4gICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXhzIG10LTJcIj57ZXJyb3J9PC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInBiIiwidXNlUm91dGVyIiwiTGluayIsIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhdXRoRGF0YSIsImNvbGxlY3Rpb24iLCJhdXRoV2l0aFBhc3N3b3JkIiwicHVzaCIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImJyIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.tsx\n"));

/***/ })

});