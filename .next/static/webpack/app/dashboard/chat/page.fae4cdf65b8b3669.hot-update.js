/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/chat/page",{

/***/ "(app-pages-browser)/./components/loading-dots/loading-dots.module.css":
/*!*********************************************************!*\
  !*** ./components/loading-dots/loading-dots.module.css ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// extracted by mini-css-extract-plugin\nmodule.exports = {\"root\":\"loading-dots_root__EDBb5\",\"blink\":\"loading-dots_blink__bb2SC\"};\n    if(true) {\n      // 1715165163072\n      var cssReload = __webpack_require__(/*! ./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js */ \"(app-pages-browser)/./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js\")(module.id, {\"publicPath\":\"/_next/\",\"esModule\":false,\"locals\":true});\n      module.hot.dispose(cssReload);\n      \n    }\n  \nmodule.exports.__checksum = \"75ac4e1e2d40\"\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbG9hZGluZy1kb3RzL2xvYWRpbmctZG90cy5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdNQUF1SyxjQUFjLHNEQUFzRDtBQUN6USxNQUFNLFVBQVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbG9hZGluZy1kb3RzL2xvYWRpbmctZG90cy5tb2R1bGUuY3NzP2ZjYzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInJvb3RcIjpcImxvYWRpbmctZG90c19yb290X19FREJiNVwiLFwiYmxpbmtcIjpcImxvYWRpbmctZG90c19ibGlua19fYmIyU0NcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTcxNTE2NTE2MzA3MlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9tb3JpemsvQ09ERS9DSU1EQVRBL1RZUEVTQ1JJUFQvcHJvamVrdC9uZXh0anMxMy1yZWFsdGltZS1jaGF0LXdpdGgtc29ja2V0aW8vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIvX25leHQvXCIsXCJlc01vZHVsZVwiOmZhbHNlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gIFxubW9kdWxlLmV4cG9ydHMuX19jaGVja3N1bSA9IFwiNzVhYzRlMWUyZDQwXCJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/loading-dots/loading-dots.module.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/dashboard/chat/page.tsx":
/*!*************************************!*\
  !*** ./app/dashboard/chat/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatRoom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_loading_dots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/loading-dots */ \"(app-pages-browser)/./components/loading-dots/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _services_pocketbase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/pocketbase */ \"(app-pages-browser)/./services/pocketbase.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ChatRoom() {\n    var _pb_authStore_model;\n    _s();\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    // connected flag\n    const [connected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // init chat and message\n    const [chatMessages, setChatMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [messageInput, setMessageInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const userName = (_pb_authStore_model = _services_pocketbase__WEBPACK_IMPORTED_MODULE_4__[\"default\"].authStore.model) === null || _pb_authStore_model === void 0 ? void 0 : _pb_authStore_model.username;\n    // dispatch message to other users\n    const sendApiSocketChat = async (chatMessage)=>{\n        return await fetch(\"/api/socket/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(chatMessage)\n        });\n    };\n    const sendMessage = async ()=>{\n        if (messageInput) {\n            const chatMessage = {\n                userName,\n                message: messageInput\n            };\n            const resp = await sendApiSocketChat(chatMessage);\n            if (resp.ok) setMessageInput(\"\");\n        }\n        inputRef.current.focus();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const sendEnterRoomMessage = async ()=>{\n            const chatMessage = {\n                message: \"\".concat(userName, \" entered this chatroom\")\n            };\n            const resp = await sendApiSocketChat(chatMessage);\n            if (!resp.ok) {\n                setTimeout(()=>{\n                    sendEnterRoomMessage();\n                }, 500);\n            }\n        };\n        if (userName) {\n            sendEnterRoomMessage();\n        }\n    }, [\n        userName\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"http://localhost:3000\", {\n            path: \"/api/socket/io\",\n            addTrailingSlash: false\n        });\n        socket.on(\"connect\", ()=>{\n            console.log(\"SOCKET CONNECTED!\", socket.id);\n            setConnected(true);\n        });\n        socket.on(\"message\", (message)=>{\n            setChatMessages((prev)=>[\n                    ...prev,\n                    message\n                ]);\n        });\n        if (socket) return ()=>socket.disconnect();\n    }, []);\n    if (!connected) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center p-4 mx-auto min-h-screen justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gap-4 flex flex-col items-center justify-center w-full h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading_dots__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4 text-black dark:text-white  bg-slate-300 dark:bg-slate-950 sticky top-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-2xl font-semibold\"\n                    }, void 0, false, {\n                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-2 text-center\",\n                        children: \"Room 1\"\n                    }, void 0, false, {\n                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col flex-1 bg-slate-100 dark:bg-slate-900\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 p-4 font-mono\",\n                        children: chatMessages.length ? chatMessages.map((chatMessage, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-1 text-black dark:text-white\",\n                                children: [\n                                    chatMessage.userName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: chatMessage.userName === userName ? \"text-red-500\" : \"text-slate-800 dark:text-slate-200\",\n                                        children: chatMessage.userName === userName ? \"[Me]\" : \"[\".concat(chatMessage.userName, \"]\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 19\n                                    }, this),\n                                    chatMessage.userName && \": \",\n                                    chatMessage.message\n                                ]\n                            }, \"msg_\" + i, true, {\n                                fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 15\n                            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm text-center text-gray-600 dark:text-gray-400 py-6\",\n                            children: \"No chat messages\"\n                        }, void 0, false, {\n                            fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-slate-300 dark:bg-slate-950 p-4 h-20 sticky bottom-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row flex-1 h-full divide-gray-200 dark:divide-gray-800 divide-x\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pr-2 flex-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ref: inputRef,\n                                        type: \"text\",\n                                        value: messageInput,\n                                        placeholder: connected ? \"Type a message...\" : \"Connecting...\",\n                                        className: \"w-full h-full rounded shadow border px-2 border-gray-600 dark:border-gray-400 text-black dark:text-white\",\n                                        disabled: !connected,\n                                        onChange: (e)=>{\n                                            setMessageInput(e.target.value);\n                                        },\n                                        onKeyUp: (e)=>{\n                                            if (e.key === \"Enter\") {\n                                                sendMessage();\n                                            }\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-center items-stretch pl-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-slate-50 dark:bg-slate-950 rounded shadow text-sm text-black dark:text-white h-full px-2\",\n                                        onClick: ()=>{\n                                            sendMessage();\n                                        },\n                                        disabled: !connected,\n                                        children: \"SEND\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                                        lineNumber: 152,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatRoom, \"jmlTyfT/zLyj8ArjsOty1aEun+g=\");\n_c = ChatRoom;\nvar _c;\n$RefreshReg$(_c, \"ChatRoom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvY2hhdC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFb0Q7QUFDTztBQUN6QjtBQUNLO0FBT3hCLFNBQVNPO1FBU0xEOztJQVJqQixNQUFNRSxXQUFXSiw2Q0FBTUEsQ0FBbUI7SUFFMUMsaUJBQWlCO0lBQ2pCLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBVTtJQUVwRCx3QkFBd0I7SUFDeEIsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQWlCLEVBQUU7SUFDbkUsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQVM7SUFDekQsTUFBTWEsWUFBV1Qsc0JBQUFBLDREQUFFQSxDQUFDVSxTQUFTLENBQUNDLEtBQUssY0FBbEJYLDBDQUFBQSxvQkFBb0JZLFFBQVE7SUFFN0Msa0NBQWtDO0lBQ2xDLE1BQU1DLG9CQUFvQixPQUN4QkM7UUFFQSxPQUFPLE1BQU1DLE1BQU0sb0JBQW9CO1lBQ3JDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047UUFDdkI7SUFDRjtJQUVBLE1BQU1PLGNBQWM7UUFDbEIsSUFBSWQsY0FBYztZQUNoQixNQUFNTyxjQUE0QjtnQkFDaENMO2dCQUNBYSxTQUFTZjtZQUNYO1lBRUEsTUFBTWdCLE9BQU8sTUFBTVYsa0JBQWtCQztZQUVyQyxJQUFJUyxLQUFLQyxFQUFFLEVBQUVoQixnQkFBZ0I7UUFDL0I7UUFFQU4sU0FBU3VCLE9BQU8sQ0FBRUMsS0FBSztJQUN6QjtJQUVBN0IsZ0RBQVNBLENBQUM7UUFDUixNQUFNOEIsdUJBQXVCO1lBQzNCLE1BQU1iLGNBQTRCO2dCQUNoQ1EsU0FBUyxHQUFZLE9BQVRiLFVBQVM7WUFDdkI7WUFFQSxNQUFNYyxPQUFPLE1BQU1WLGtCQUFrQkM7WUFDckMsSUFBSSxDQUFDUyxLQUFLQyxFQUFFLEVBQUU7Z0JBQ1pJLFdBQVc7b0JBQ1REO2dCQUNGLEdBQUc7WUFDTDtRQUNGO1FBQ0EsSUFBSWxCLFVBQVU7WUFDWmtCO1FBQ0Y7SUFDRixHQUFHO1FBQUNsQjtLQUFTO0lBRWJaLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWdDLFNBQVM5Qiw0REFBRUEsQ0FBQytCLHVCQUFnQyxFQUFHO1lBQ25ERyxNQUFNO1lBQ05DLGtCQUFrQjtRQUNwQjtRQUNBTCxPQUFPTSxFQUFFLENBQUMsV0FBVztZQUNuQkMsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQlIsT0FBT1MsRUFBRTtZQUMxQ2xDLGFBQWE7UUFDZjtRQUVBeUIsT0FBT00sRUFBRSxDQUFDLFdBQVcsQ0FBQ2I7WUFDcEJoQixnQkFBZ0IsQ0FBQ2lDLE9BQVM7dUJBQUlBO29CQUFNakI7aUJBQVE7UUFDOUM7UUFFQSxJQUFJTyxRQUFRLE9BQU8sSUFBTUEsT0FBT1csVUFBVTtJQUM1QyxHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNyQyxXQUFXO1FBQ2QscUJBQ0UsOERBQUNzQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2hELGdFQUFXQTs7Ozs7Ozs7Ozs7Ozs7O0lBSXBCO0lBRUEscUJBQ0UsOERBQUMrQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTs7Ozs7O2tDQUNkLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBbUI7Ozs7Ozs7Ozs7OzswQkFFbkMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1pyQyxhQUFhd0MsTUFBTSxHQUNsQnhDLGFBQWF5QyxHQUFHLENBQUMsQ0FBQ2hDLGFBQWFpQyxrQkFDN0IsOERBQUNOO2dDQUFxQkMsV0FBVTs7b0NBQzdCNUIsWUFBWUwsUUFBUSxrQkFDbkIsOERBQUN1Qzt3Q0FDQ04sV0FDRTVCLFlBQVlMLFFBQVEsS0FBS0EsV0FDckIsaUJBQ0E7a0RBR0xLLFlBQVlMLFFBQVEsS0FBS0EsV0FDdEIsU0FDQSxJQUF5QixPQUFyQkssWUFBWUwsUUFBUSxFQUFDOzs7Ozs7b0NBR2hDSyxZQUFZTCxRQUFRLElBQUk7b0NBQ3hCSyxZQUFZUSxPQUFPOzsrQkFmWixTQUFTeUI7Ozs7c0RBbUJyQiw4REFBQ047NEJBQUlDLFdBQVU7c0NBQTREOzs7Ozs7Ozs7OztrQ0FLL0UsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDTzt3Q0FDQ0MsS0FBS2hEO3dDQUNMaUQsTUFBSzt3Q0FDTEMsT0FBTzdDO3dDQUNQOEMsYUFBYWxELFlBQVksc0JBQXNCO3dDQUMvQ3VDLFdBQVU7d0NBQ1ZZLFVBQVUsQ0FBQ25EO3dDQUNYb0QsVUFBVSxDQUFDQzs0Q0FDVGhELGdCQUFnQmdELEVBQUVDLE1BQU0sQ0FBQ0wsS0FBSzt3Q0FDaEM7d0NBQ0FNLFNBQVMsQ0FBQ0Y7NENBQ1IsSUFBSUEsRUFBRUcsR0FBRyxLQUFLLFNBQVM7Z0RBQ3JCdEM7NENBQ0Y7d0NBQ0Y7Ozs7Ozs7Ozs7OzhDQUdKLDhEQUFDb0I7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNrQjt3Q0FDQ2xCLFdBQVU7d0NBQ1ZtQixTQUFTOzRDQUNQeEM7d0NBQ0Y7d0NBQ0FpQyxVQUFVLENBQUNuRDtrREFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBMUp3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9jaGF0L3BhZ2UudHN4P2MyZDAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBMb2FkaW5nRG90cyBmcm9tIFwiQC9jb21wb25lbnRzL2xvYWRpbmctZG90c1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgcGIgZnJvbSBcIkAvc2VydmljZXMvcG9ja2V0YmFzZVwiO1xuXG50eXBlIElDaGF0TWVzc2FnZSA9IHtcbiAgdXNlck5hbWU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRSb29tKCkge1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICAvLyBjb25uZWN0ZWQgZmxhZ1xuICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8vIGluaXQgY2hhdCBhbmQgbWVzc2FnZVxuICBjb25zdCBbY2hhdE1lc3NhZ2VzLCBzZXRDaGF0TWVzc2FnZXNdID0gdXNlU3RhdGU8SUNoYXRNZXNzYWdlW10+KFtdKTtcbiAgY29uc3QgW21lc3NhZ2VJbnB1dCwgc2V0TWVzc2FnZUlucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IHVzZXJOYW1lID0gcGIuYXV0aFN0b3JlLm1vZGVsPy51c2VybmFtZTtcblxuICAvLyBkaXNwYXRjaCBtZXNzYWdlIHRvIG90aGVyIHVzZXJzXG4gIGNvbnN0IHNlbmRBcGlTb2NrZXRDaGF0ID0gYXN5bmMgKFxuICAgIGNoYXRNZXNzYWdlOiBJQ2hhdE1lc3NhZ2UsXG4gICk6IFByb21pc2U8UmVzcG9uc2U+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goXCIvYXBpL3NvY2tldC9jaGF0XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNoYXRNZXNzYWdlKSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAobWVzc2FnZUlucHV0KSB7XG4gICAgICBjb25zdCBjaGF0TWVzc2FnZTogSUNoYXRNZXNzYWdlID0ge1xuICAgICAgICB1c2VyTmFtZSxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZUlucHV0LFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHNlbmRBcGlTb2NrZXRDaGF0KGNoYXRNZXNzYWdlKTtcblxuICAgICAgaWYgKHJlc3Aub2spIHNldE1lc3NhZ2VJbnB1dChcIlwiKTtcbiAgICB9XG5cbiAgICBpbnB1dFJlZi5jdXJyZW50IS5mb2N1cygpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2VuZEVudGVyUm9vbU1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjaGF0TWVzc2FnZTogSUNoYXRNZXNzYWdlID0ge1xuICAgICAgICBtZXNzYWdlOiBgJHt1c2VyTmFtZX0gZW50ZXJlZCB0aGlzIGNoYXRyb29tYCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBzZW5kQXBpU29ja2V0Q2hhdChjaGF0TWVzc2FnZSk7XG4gICAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2VuZEVudGVyUm9vbU1lc3NhZ2UoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICh1c2VyTmFtZSkge1xuICAgICAgc2VuZEVudGVyUm9vbU1lc3NhZ2UoKTtcbiAgICB9XG4gIH0sIFt1c2VyTmFtZV0pO1xuXG4gIHVzZUVmZmVjdCgoKTogYW55ID0+IHtcbiAgICBjb25zdCBzb2NrZXQgPSBpbyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX1VSTCEsIHtcbiAgICAgIHBhdGg6IFwiL2FwaS9zb2NrZXQvaW9cIixcbiAgICAgIGFkZFRyYWlsaW5nU2xhc2g6IGZhbHNlLFxuICAgIH0pO1xuICAgIHNvY2tldC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJTT0NLRVQgQ09OTkVDVEVEIVwiLCBzb2NrZXQuaWQpO1xuICAgICAgc2V0Q29ubmVjdGVkKHRydWUpO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwibWVzc2FnZVwiLCAobWVzc2FnZTogSUNoYXRNZXNzYWdlKSA9PiB7XG4gICAgICBzZXRDaGF0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCBtZXNzYWdlXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoc29ja2V0KSByZXR1cm4gKCkgPT4gc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgfSwgW10pO1xuXG4gIGlmICghY29ubmVjdGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC00IG14LWF1dG8gbWluLWgtc2NyZWVuIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLTQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgICAgIDxMb2FkaW5nRG90cyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSAgYmctc2xhdGUtMzAwIGRhcms6Ymctc2xhdGUtOTUwIHN0aWNreSB0b3AtMFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPjwvaDE+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0yIHRleHQtY2VudGVyXCI+Um9vbSAxPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtMSBiZy1zbGF0ZS0xMDAgZGFyazpiZy1zbGF0ZS05MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcC00IGZvbnQtbW9ub1wiPlxuICAgICAgICAgIHtjaGF0TWVzc2FnZXMubGVuZ3RoID8gKFxuICAgICAgICAgICAgY2hhdE1lc3NhZ2VzLm1hcCgoY2hhdE1lc3NhZ2UsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e1wibXNnX1wiICsgaX0gY2xhc3NOYW1lPVwibXQtMSB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHtjaGF0TWVzc2FnZS51c2VyTmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgIGNoYXRNZXNzYWdlLnVzZXJOYW1lID09PSB1c2VyTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtcmVkLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1zbGF0ZS04MDAgZGFyazp0ZXh0LXNsYXRlLTIwMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NoYXRNZXNzYWdlLnVzZXJOYW1lID09PSB1c2VyTmFtZVxuICAgICAgICAgICAgICAgICAgICAgID8gXCJbTWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IGBbJHtjaGF0TWVzc2FnZS51c2VyTmFtZX1dYH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtjaGF0TWVzc2FnZS51c2VyTmFtZSAmJiBcIjogXCJ9XG4gICAgICAgICAgICAgICAge2NoYXRNZXNzYWdlLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktNDAwIHB5LTZcIj5cbiAgICAgICAgICAgICAgTm8gY2hhdCBtZXNzYWdlc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtMzAwIGRhcms6Ymctc2xhdGUtOTUwIHAtNCBoLTIwIHN0aWNreSBib3R0b20tMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LTEgaC1mdWxsIGRpdmlkZS1ncmF5LTIwMCBkYXJrOmRpdmlkZS1ncmF5LTgwMCBkaXZpZGUteFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci0yIGZsZXgtMVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZUlucHV0fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb25uZWN0ZWQgPyBcIlR5cGUgYSBtZXNzYWdlLi4uXCIgOiBcIkNvbm5lY3RpbmcuLi5cIn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJvdW5kZWQgc2hhZG93IGJvcmRlciBweC0yIGJvcmRlci1ncmF5LTYwMCBkYXJrOmJvcmRlci1ncmF5LTQwMCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjb25uZWN0ZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0cmV0Y2ggcGwtMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtNTAgZGFyazpiZy1zbGF0ZS05NTAgcm91bmRlZCBzaGFkb3cgdGV4dC1zbSB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBoLWZ1bGwgcHgtMlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY29ubmVjdGVkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU0VORFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxvYWRpbmdEb3RzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImlvIiwicGIiLCJDaGF0Um9vbSIsImlucHV0UmVmIiwiY29ubmVjdGVkIiwic2V0Q29ubmVjdGVkIiwiY2hhdE1lc3NhZ2VzIiwic2V0Q2hhdE1lc3NhZ2VzIiwibWVzc2FnZUlucHV0Iiwic2V0TWVzc2FnZUlucHV0IiwidXNlck5hbWUiLCJhdXRoU3RvcmUiLCJtb2RlbCIsInVzZXJuYW1lIiwic2VuZEFwaVNvY2tldENoYXQiLCJjaGF0TWVzc2FnZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwicmVzcCIsIm9rIiwiY3VycmVudCIsImZvY3VzIiwic2VuZEVudGVyUm9vbU1lc3NhZ2UiLCJzZXRUaW1lb3V0Iiwic29ja2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NJVEVfVVJMIiwicGF0aCIsImFkZFRyYWlsaW5nU2xhc2giLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInByZXYiLCJkaXNjb25uZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsImxlbmd0aCIsIm1hcCIsImkiLCJzcGFuIiwiaW5wdXQiLCJyZWYiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlVcCIsImtleSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/chat/page.tsx\n"));

/***/ })

});