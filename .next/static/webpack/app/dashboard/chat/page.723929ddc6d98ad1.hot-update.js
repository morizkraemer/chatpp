"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/chat/page",{

/***/ "(app-pages-browser)/./app/dashboard/chat/page.tsx":
/*!*************************************!*\
  !*** ./app/dashboard/chat/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatRoom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_loading_dots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/loading-dots */ \"(app-pages-browser)/./components/loading-dots/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _services_pocketbase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/pocketbase */ \"(app-pages-browser)/./services/pocketbase.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ChatRoom() {\n    var _pb_authStore_model;\n    _s();\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    // connected flag\n    const [connected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // init chat and message\n    const [chatMessages, setChatMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [messageInput, setMessageInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const userName = (_pb_authStore_model = _services_pocketbase__WEBPACK_IMPORTED_MODULE_4__[\"default\"].authStore.model) === null || _pb_authStore_model === void 0 ? void 0 : _pb_authStore_model.username;\n    // dispatch message to other users\n    const sendApiSocketChat = async (chatMessage)=>{\n        return await fetch(\"/api/socket/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(chatMessage)\n        });\n    };\n    async function sendMessage() {\n        if (messageInput) {\n            const chatMessage = {\n                userName,\n                message: messageInput\n            };\n            const resp = await sendApiSocketChat(chatMessage);\n            if (resp.ok) setMessageInput(\"\");\n        }\n        inputRef.current.focus();\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const sendEnterRoomMessage = async ()=>{\n            const chatMessage = {\n                message: \"\".concat(userName, \" entered this chatroom\")\n            };\n            const resp = await sendApiSocketChat(chatMessage);\n            if (!resp.ok) {\n                setTimeout(()=>{\n                    sendEnterRoomMessage();\n                }, 500);\n            }\n        };\n        if (userName) {\n            sendEnterRoomMessage();\n        }\n    }, [\n        userName\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"http://localhost:3000\", {\n            path: \"/api/socket/io\",\n            addTrailingSlash: false\n        });\n        socket.on(\"connect\", ()=>{\n            console.log(\"Connected. Socket ID:\", socket.id);\n            setConnected(true);\n        });\n        socket.on(\"message\", (message)=>{\n            setChatMessages((prevMessages)=>[\n                    ...prevMessages,\n                    message\n                ]);\n        });\n        return ()=>{\n            socket.off(\"connect\");\n            socket.off(\"message\");\n            socket.disconnect();\n        };\n    }, []);\n    if (!connected) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center p-4 mx-auto min-h-screen justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gap-4 flex flex-col items-center justify-center w-full h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading_dots__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4 text-black dark:text-white  bg-slate-300 dark:bg-slate-950 sticky top-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-2xl font-semibold\"\n                    }, void 0, false, {\n                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-2 text-center\",\n                        children: \"Room 1\"\n                    }, void 0, false, {\n                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col flex-1 bg-slate-100 dark:bg-slate-900\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 p-4 font-mono\",\n                        children: chatMessages.length ? chatMessages.map((chatMessage, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-1 text-black dark:text-white\",\n                                children: [\n                                    chatMessage.userName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: chatMessage.userName === userName ? \"text-red-500\" : \"text-slate-800 dark:text-slate-200\",\n                                        children: chatMessage.userName === userName ? \"[Me]\" : \"[\".concat(chatMessage.userName, \"]\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 19\n                                    }, this),\n                                    chatMessage.userName && \": \",\n                                    chatMessage.message\n                                ]\n                            }, \"msg_\" + i, true, {\n                                fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm text-center text-gray-600 dark:text-gray-400 py-6\",\n                            children: \"No chat messages\"\n                        }, void 0, false, {\n                            fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-slate-300 dark:bg-slate-950 p-4 h-20 sticky bottom-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row flex-1 h-full divide-gray-200 dark:divide-gray-800 divide-x\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pr-2 flex-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ref: inputRef,\n                                        type: \"text\",\n                                        value: messageInput,\n                                        placeholder: connected ? \"Type a message...\" : \"Connecting...\",\n                                        className: \"w-full h-full rounded shadow border px-2 border-gray-600 dark:border-gray-400 text-black dark:text-white\",\n                                        disabled: !connected,\n                                        onChange: (e)=>{\n                                            setMessageInput(e.target.value);\n                                        },\n                                        onKeyUp: (e)=>{\n                                            if (e.key === \"Enter\") {\n                                                sendMessage();\n                                            }\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                                        lineNumber: 139,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-center items-stretch pl-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-slate-50 dark:bg-slate-950 rounded shadow text-sm text-black dark:text-white h-full px-2\",\n                                        onClick: ()=>{\n                                            sendMessage();\n                                        },\n                                        disabled: !connected,\n                                        children: \"SEND\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                                        lineNumber: 157,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                                    lineNumber: 156,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/morizk/CODE/CIMDATA/TYPESCRIPT/projekt/nextjs13-realtime-chat-with-socketio/app/dashboard/chat/page.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatRoom, \"jmlTyfT/zLyj8ArjsOty1aEun+g=\");\n_c = ChatRoom;\nvar _c;\n$RefreshReg$(_c, \"ChatRoom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvY2hhdC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFb0Q7QUFDTztBQUN6QjtBQUNLO0FBT3hCLFNBQVNPO1FBU0xEOztJQVJqQixNQUFNRSxXQUFXSiw2Q0FBTUEsQ0FBbUI7SUFFMUMsaUJBQWlCO0lBQ2pCLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBVTtJQUVwRCx3QkFBd0I7SUFDeEIsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQWlCLEVBQUU7SUFDbkUsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQVM7SUFDekQsTUFBTWEsWUFBV1Qsc0JBQUFBLDREQUFFQSxDQUFDVSxTQUFTLENBQUNDLEtBQUssY0FBbEJYLDBDQUFBQSxvQkFBb0JZLFFBQVE7SUFFN0Msa0NBQWtDO0lBQ2xDLE1BQU1DLG9CQUFvQixPQUN4QkM7UUFFQSxPQUFPLE1BQU1DLE1BQU0sb0JBQW9CO1lBQ3JDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047UUFDdkI7SUFDRjtJQUVBLGVBQWVPO1FBQ2IsSUFBSWQsY0FBYztZQUNoQixNQUFNTyxjQUE0QjtnQkFDaENMO2dCQUNBYSxTQUFTZjtZQUNYO1lBRUEsTUFBTWdCLE9BQU8sTUFBTVYsa0JBQWtCQztZQUVyQyxJQUFJUyxLQUFLQyxFQUFFLEVBQUVoQixnQkFBZ0I7UUFDL0I7UUFFQU4sU0FBU3VCLE9BQU8sQ0FBRUMsS0FBSztJQUN6QjtJQUVBN0IsZ0RBQVNBLENBQUM7UUFDUixNQUFNOEIsdUJBQXVCO1lBQzNCLE1BQU1iLGNBQTRCO2dCQUNoQ1EsU0FBUyxHQUFZLE9BQVRiLFVBQVM7WUFDdkI7WUFFQSxNQUFNYyxPQUFPLE1BQU1WLGtCQUFrQkM7WUFDckMsSUFBSSxDQUFDUyxLQUFLQyxFQUFFLEVBQUU7Z0JBQ1pJLFdBQVc7b0JBQ1REO2dCQUNGLEdBQUc7WUFDTDtRQUNGO1FBQ0EsSUFBSWxCLFVBQVU7WUFDWmtCO1FBQ0Y7SUFDRixHQUFHO1FBQUNsQjtLQUFTO0lBRWJaLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWdDLFNBQVM5Qiw0REFBRUEsQ0FBQytCLHVCQUFnQyxFQUFHO1lBQ25ERyxNQUFNO1lBQ05DLGtCQUFrQjtRQUNwQjtRQUVBTCxPQUFPTSxFQUFFLENBQUMsV0FBVztZQUNuQkMsUUFBUUMsR0FBRyxDQUFDLHlCQUF5QlIsT0FBT1MsRUFBRTtZQUM5Q2xDLGFBQWE7UUFDZjtRQUVBeUIsT0FBT00sRUFBRSxDQUFDLFdBQVcsQ0FBQ2I7WUFDcEJoQixnQkFBZ0IsQ0FBQ2lDLGVBQWlCO3VCQUFJQTtvQkFBY2pCO2lCQUFRO1FBQzlEO1FBRUEsT0FBTztZQUNMTyxPQUFPVyxHQUFHLENBQUM7WUFDWFgsT0FBT1csR0FBRyxDQUFDO1lBQ1hYLE9BQU9ZLFVBQVU7UUFDbkI7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUN0QyxXQUFXO1FBQ2QscUJBQ0UsOERBQUN1QztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2pELGdFQUFXQTs7Ozs7Ozs7Ozs7Ozs7O0lBSXBCO0lBRUEscUJBQ0UsOERBQUNnRDtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTs7Ozs7O2tDQUNkLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBbUI7Ozs7Ozs7Ozs7OzswQkFFbkMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1p0QyxhQUFheUMsTUFBTSxHQUNsQnpDLGFBQWEwQyxHQUFHLENBQUMsQ0FBQ2pDLGFBQWFrQyxrQkFDN0IsOERBQUNOO2dDQUFxQkMsV0FBVTs7b0NBQzdCN0IsWUFBWUwsUUFBUSxrQkFDbkIsOERBQUN3Qzt3Q0FDQ04sV0FDRTdCLFlBQVlMLFFBQVEsS0FBS0EsV0FDckIsaUJBQ0E7a0RBR0xLLFlBQVlMLFFBQVEsS0FBS0EsV0FDdEIsU0FDQSxJQUF5QixPQUFyQkssWUFBWUwsUUFBUSxFQUFDOzs7Ozs7b0NBR2hDSyxZQUFZTCxRQUFRLElBQUk7b0NBQ3hCSyxZQUFZUSxPQUFPOzsrQkFmWixTQUFTMEI7Ozs7c0RBbUJyQiw4REFBQ047NEJBQUlDLFdBQVU7c0NBQTREOzs7Ozs7Ozs7OztrQ0FLL0UsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDTzt3Q0FDQ0MsS0FBS2pEO3dDQUNMa0QsTUFBSzt3Q0FDTEMsT0FBTzlDO3dDQUNQK0MsYUFBYW5ELFlBQVksc0JBQXNCO3dDQUMvQ3dDLFdBQVU7d0NBQ1ZZLFVBQVUsQ0FBQ3BEO3dDQUNYcUQsVUFBVSxDQUFDQzs0Q0FDVGpELGdCQUFnQmlELEVBQUVDLE1BQU0sQ0FBQ0wsS0FBSzt3Q0FDaEM7d0NBQ0FNLFNBQVMsQ0FBQ0Y7NENBQ1IsSUFBSUEsRUFBRUcsR0FBRyxLQUFLLFNBQVM7Z0RBQ3JCdkM7NENBQ0Y7d0NBQ0Y7Ozs7Ozs7Ozs7OzhDQUdKLDhEQUFDcUI7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNrQjt3Q0FDQ2xCLFdBQVU7d0NBQ1ZtQixTQUFTOzRDQUNQekM7d0NBQ0Y7d0NBQ0FrQyxVQUFVLENBQUNwRDtrREFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBL0p3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9jaGF0L3BhZ2UudHN4P2MyZDAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBMb2FkaW5nRG90cyBmcm9tIFwiQC9jb21wb25lbnRzL2xvYWRpbmctZG90c1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgcGIgZnJvbSBcIkAvc2VydmljZXMvcG9ja2V0YmFzZVwiO1xuXG50eXBlIElDaGF0TWVzc2FnZSA9IHtcbiAgdXNlck5hbWU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRSb29tKCkge1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICAvLyBjb25uZWN0ZWQgZmxhZ1xuICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8vIGluaXQgY2hhdCBhbmQgbWVzc2FnZVxuICBjb25zdCBbY2hhdE1lc3NhZ2VzLCBzZXRDaGF0TWVzc2FnZXNdID0gdXNlU3RhdGU8SUNoYXRNZXNzYWdlW10+KFtdKTtcbiAgY29uc3QgW21lc3NhZ2VJbnB1dCwgc2V0TWVzc2FnZUlucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IHVzZXJOYW1lID0gcGIuYXV0aFN0b3JlLm1vZGVsPy51c2VybmFtZTtcblxuICAvLyBkaXNwYXRjaCBtZXNzYWdlIHRvIG90aGVyIHVzZXJzXG4gIGNvbnN0IHNlbmRBcGlTb2NrZXRDaGF0ID0gYXN5bmMgKFxuICAgIGNoYXRNZXNzYWdlOiBJQ2hhdE1lc3NhZ2UsXG4gICk6IFByb21pc2U8UmVzcG9uc2U+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goXCIvYXBpL3NvY2tldC9jaGF0XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNoYXRNZXNzYWdlKSxcbiAgICB9KTtcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZSgpIHtcbiAgICBpZiAobWVzc2FnZUlucHV0KSB7XG4gICAgICBjb25zdCBjaGF0TWVzc2FnZTogSUNoYXRNZXNzYWdlID0ge1xuICAgICAgICB1c2VyTmFtZSxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZUlucHV0LFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHNlbmRBcGlTb2NrZXRDaGF0KGNoYXRNZXNzYWdlKTtcblxuICAgICAgaWYgKHJlc3Aub2spIHNldE1lc3NhZ2VJbnB1dChcIlwiKTtcbiAgICB9XG5cbiAgICBpbnB1dFJlZi5jdXJyZW50IS5mb2N1cygpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZW5kRW50ZXJSb29tTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYXRNZXNzYWdlOiBJQ2hhdE1lc3NhZ2UgPSB7XG4gICAgICAgIG1lc3NhZ2U6IGAke3VzZXJOYW1lfSBlbnRlcmVkIHRoaXMgY2hhdHJvb21gLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHNlbmRBcGlTb2NrZXRDaGF0KGNoYXRNZXNzYWdlKTtcbiAgICAgIGlmICghcmVzcC5vaykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZW5kRW50ZXJSb29tTWVzc2FnZSgpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHVzZXJOYW1lKSB7XG4gICAgICBzZW5kRW50ZXJSb29tTWVzc2FnZSgpO1xuICAgIH1cbiAgfSwgW3VzZXJOYW1lXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzb2NrZXQgPSBpbyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX1VSTCEsIHtcbiAgICAgIHBhdGg6IFwiL2FwaS9zb2NrZXQvaW9cIixcbiAgICAgIGFkZFRyYWlsaW5nU2xhc2g6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZC4gU29ja2V0IElEOlwiLCBzb2NrZXQuaWQpO1xuICAgICAgc2V0Q29ubmVjdGVkKHRydWUpO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwibWVzc2FnZVwiLCAobWVzc2FnZTogSUNoYXRNZXNzYWdlKSA9PiB7XG4gICAgICBzZXRDaGF0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbWVzc2FnZV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNvY2tldC5vZmYoXCJjb25uZWN0XCIpO1xuICAgICAgc29ja2V0Lm9mZihcIm1lc3NhZ2VcIik7XG4gICAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBpZiAoIWNvbm5lY3RlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtNCBteC1hdXRvIG1pbi1oLXNjcmVlbiBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC00IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICA8TG9hZGluZ0RvdHMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgIGJnLXNsYXRlLTMwMCBkYXJrOmJnLXNsYXRlLTk1MCBzdGlja3kgdG9wLTBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj48L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWNlbnRlclwiPlJvb20gMTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LTEgYmctc2xhdGUtMTAwIGRhcms6Ymctc2xhdGUtOTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHAtNCBmb250LW1vbm9cIj5cbiAgICAgICAgICB7Y2hhdE1lc3NhZ2VzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIGNoYXRNZXNzYWdlcy5tYXAoKGNoYXRNZXNzYWdlLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtcIm1zZ19cIiArIGl9IGNsYXNzTmFtZT1cIm10LTEgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICB7Y2hhdE1lc3NhZ2UudXNlck5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICBjaGF0TWVzc2FnZS51c2VyTmFtZSA9PT0gdXNlck5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LXJlZC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtc2xhdGUtODAwIGRhcms6dGV4dC1zbGF0ZS0yMDBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjaGF0TWVzc2FnZS51c2VyTmFtZSA9PT0gdXNlck5hbWVcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiW01lXVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBgWyR7Y2hhdE1lc3NhZ2UudXNlck5hbWV9XWB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7Y2hhdE1lc3NhZ2UudXNlck5hbWUgJiYgXCI6IFwifVxuICAgICAgICAgICAgICAgIHtjaGF0TWVzc2FnZS5tZXNzYWdlfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMCBweS02XCI+XG4gICAgICAgICAgICAgIE5vIGNoYXQgbWVzc2FnZXNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTMwMCBkYXJrOmJnLXNsYXRlLTk1MCBwLTQgaC0yMCBzdGlja3kgYm90dG9tLTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC0xIGgtZnVsbCBkaXZpZGUtZ3JheS0yMDAgZGFyazpkaXZpZGUtZ3JheS04MDAgZGl2aWRlLXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItMiBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2VJbnB1dH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y29ubmVjdGVkID8gXCJUeXBlIGEgbWVzc2FnZS4uLlwiIDogXCJDb25uZWN0aW5nLi4uXCJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3VuZGVkIHNoYWRvdyBib3JkZXIgcHgtMiBib3JkZXItZ3JheS02MDAgZGFyazpib3JkZXItZ3JheS00MDAgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY29ubmVjdGVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdHJldGNoIHBsLTJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXNsYXRlLTUwIGRhcms6Ymctc2xhdGUtOTUwIHJvdW5kZWQgc2hhZG93IHRleHQtc20gdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgaC1mdWxsIHB4LTJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNvbm5lY3RlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNFTkRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMb2FkaW5nRG90cyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJpbyIsInBiIiwiQ2hhdFJvb20iLCJpbnB1dFJlZiIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsImNoYXRNZXNzYWdlcyIsInNldENoYXRNZXNzYWdlcyIsIm1lc3NhZ2VJbnB1dCIsInNldE1lc3NhZ2VJbnB1dCIsInVzZXJOYW1lIiwiYXV0aFN0b3JlIiwibW9kZWwiLCJ1c2VybmFtZSIsInNlbmRBcGlTb2NrZXRDaGF0IiwiY2hhdE1lc3NhZ2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsInJlc3AiLCJvayIsImN1cnJlbnQiLCJmb2N1cyIsInNlbmRFbnRlclJvb21NZXNzYWdlIiwic2V0VGltZW91dCIsInNvY2tldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TSVRFX1VSTCIsInBhdGgiLCJhZGRUcmFpbGluZ1NsYXNoIiwib24iLCJjb25zb2xlIiwibG9nIiwiaWQiLCJwcmV2TWVzc2FnZXMiLCJvZmYiLCJkaXNjb25uZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsImxlbmd0aCIsIm1hcCIsImkiLCJzcGFuIiwiaW5wdXQiLCJyZWYiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlVcCIsImtleSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/chat/page.tsx\n"));

/***/ })

});