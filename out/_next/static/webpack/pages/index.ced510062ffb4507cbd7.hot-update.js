webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_matty_Documents_NewNFC_flask_site_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/types */ \"./actions/types.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_matty_Documents_NewNFC_flask_site_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar puckSession = function puckSession() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    connected: false,\n    connecting: false,\n    uploadProgress: 0,\n    uploadTagCount: 0,\n    uploadTagTotal: 0,\n    tagList: [],\n    errorMsg: '',\n    showErrorMsg: false,\n    showUploadDialog: false,\n    showGeneralDialog: false,\n    showRenameDialog: false,\n    tagListLoaded: false\n  };\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"PUCK_CONNECT\"]:\n      return {\n        connected: true,\n        connecting: false\n      };\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"PUCK_CONNECTING\"]:\n      return {\n        connected: false,\n        connecting: true\n      };\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"PUCK_DISCONNECTED\"]:\n      return {\n        connected: false,\n        connecting: false,\n        disconnected: true\n      };\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"PUCK_TAGLIST\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        tagList: action.data,\n        tagListLoaded: true\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"PUCK_BATTERYPERCENTAGE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        batteryPercentage: action.batteryPercentage\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"PUCK_CURRENT_TAG\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        currentTag: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"PUCK_SETTING_TAG\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        settingTag: action.settingState.isSetting,\n        settingTagIndex: action.settingState.settingTagIndex\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"PUCK_UPLOADPROGRESS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        uploadProgress: Number(action.progress)\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"UPLOAD_TAG_COUNT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        uploadTagCount: action.count,\n        uploadTagTotal: action.total\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"SET_ERROR_MSG\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        errorMsg: action.msg,\n        showErrorMsg: action.show\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"SHOW_UPLOAD_DIALOG\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showUploadDialog: action.show\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"SHOW_GENERAL_DIALOG\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showGeneralDialog: action.show\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"SHOW_RENAME_DIALOG\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showRenameDialog: action.show\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"SHOW_LOADING_DIALOG\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showLoadingDialog: action.show\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_2__[\"SEARCH_TAGS\"]:\n      var filteredTags = state.tagList.filter(function (tag) {\n        return tag.includes(action.searchTerm);\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        tagList: filteredTags\n      });\n\n    default:\n      return state;\n  }\n};\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  puckSession: puckSession\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanM/Y2U4ZSJdLCJuYW1lcyI6WyJwdWNrU2Vzc2lvbiIsInN0YXRlIiwiY29ubmVjdGVkIiwiY29ubmVjdGluZyIsInVwbG9hZFByb2dyZXNzIiwidXBsb2FkVGFnQ291bnQiLCJ1cGxvYWRUYWdUb3RhbCIsInRhZ0xpc3QiLCJlcnJvck1zZyIsInNob3dFcnJvck1zZyIsInNob3dVcGxvYWREaWFsb2ciLCJzaG93R2VuZXJhbERpYWxvZyIsInNob3dSZW5hbWVEaWFsb2ciLCJ0YWdMaXN0TG9hZGVkIiwiYWN0aW9uIiwidHlwZSIsInR5cGVzIiwiZGlzY29ubmVjdGVkIiwiZGF0YSIsImJhdHRlcnlQZXJjZW50YWdlIiwiY3VycmVudFRhZyIsInNldHRpbmdUYWciLCJzZXR0aW5nU3RhdGUiLCJpc1NldHRpbmciLCJzZXR0aW5nVGFnSW5kZXgiLCJOdW1iZXIiLCJwcm9ncmVzcyIsImNvdW50IiwidG90YWwiLCJtc2ciLCJzaG93Iiwic2hvd0xvYWRpbmdEaWFsb2ciLCJmaWx0ZXJlZFRhZ3MiLCJmaWx0ZXIiLCJ0YWciLCJpbmNsdWRlcyIsInNlYXJjaFRlcm0iLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FhTjtBQUFBLE1BYk9DLEtBYVAsdUVBYmU7QUFDNUJDLGFBQVMsRUFBRSxLQURpQjtBQUU1QkMsY0FBVSxFQUFFLEtBRmdCO0FBRzVCQyxrQkFBYyxFQUFFLENBSFk7QUFJNUJDLGtCQUFjLEVBQUUsQ0FKWTtBQUs1QkMsa0JBQWMsRUFBRSxDQUxZO0FBTTVCQyxXQUFPLEVBQUUsRUFObUI7QUFPNUJDLFlBQVEsRUFBRSxFQVBrQjtBQVE1QkMsZ0JBQVksRUFBRSxLQVJjO0FBUzVCQyxvQkFBZ0IsRUFBRSxLQVRVO0FBVTVCQyxxQkFBaUIsRUFBRSxLQVZTO0FBVzVCQyxvQkFBZ0IsRUFBRSxLQVhVO0FBWTVCQyxpQkFBYSxFQUFFO0FBWmEsR0FhZjtBQUFBLE1BQVhDLE1BQVc7O0FBQ2IsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0MsU0FBS0MsMkRBQUw7QUFDQyxhQUFPO0FBQ05kLGlCQUFTLEVBQUUsSUFETDtBQUVOQyxrQkFBVSxFQUFFO0FBRk4sT0FBUDs7QUFJRCxTQUFLYSw4REFBTDtBQUNDLGFBQU87QUFDTmQsaUJBQVMsRUFBRSxLQURMO0FBRU5DLGtCQUFVLEVBQUU7QUFGTixPQUFQOztBQUlELFNBQUthLGdFQUFMO0FBQ0MsYUFBTztBQUNOZCxpQkFBUyxFQUFFLEtBREw7QUFFTkMsa0JBQVUsRUFBRSxLQUZOO0FBR05jLG9CQUFZLEVBQUU7QUFIUixPQUFQOztBQUtELFNBQUtELDJEQUFMO0FBQ0MsNkNBQ0lmLEtBREo7QUFFQ00sZUFBTyxFQUFFTyxNQUFNLENBQUNJLElBRmpCO0FBR0NMLHFCQUFhLEVBQUU7QUFIaEI7O0FBS0QsU0FBS0cscUVBQUw7QUFDQyw2Q0FDSWYsS0FESjtBQUVDa0IseUJBQWlCLEVBQUVMLE1BQU0sQ0FBQ0s7QUFGM0I7O0FBSUQsU0FBS0gsK0RBQUw7QUFDQyw2Q0FDSWYsS0FESjtBQUVDbUIsa0JBQVUsRUFBRU4sTUFBTSxDQUFDSTtBQUZwQjs7QUFJRCxTQUFLRiwrREFBTDtBQUNDLDZDQUNJZixLQURKO0FBRUNvQixrQkFBVSxFQUFFUCxNQUFNLENBQUNRLFlBQVAsQ0FBb0JDLFNBRmpDO0FBR0NDLHVCQUFlLEVBQUVWLE1BQU0sQ0FBQ1EsWUFBUCxDQUFvQkU7QUFIdEM7O0FBS0QsU0FBS1Isa0VBQUw7QUFDQyw2Q0FDSWYsS0FESjtBQUVDRyxzQkFBYyxFQUFFcUIsTUFBTSxDQUFDWCxNQUFNLENBQUNZLFFBQVI7QUFGdkI7O0FBSUQsU0FBS1YsK0RBQUw7QUFDQyw2Q0FDSWYsS0FESjtBQUVDSSxzQkFBYyxFQUFFUyxNQUFNLENBQUNhLEtBRnhCO0FBR0NyQixzQkFBYyxFQUFFUSxNQUFNLENBQUNjO0FBSHhCOztBQUtELFNBQUtaLDREQUFMO0FBQ0MsNkNBQ0lmLEtBREo7QUFFQ08sZ0JBQVEsRUFBRU0sTUFBTSxDQUFDZSxHQUZsQjtBQUdDcEIsb0JBQVksRUFBRUssTUFBTSxDQUFDZ0I7QUFIdEI7O0FBS0QsU0FBS2QsaUVBQUw7QUFDQyw2Q0FDSWYsS0FESjtBQUVDUyx3QkFBZ0IsRUFBRUksTUFBTSxDQUFDZ0I7QUFGMUI7O0FBSUQsU0FBS2Qsa0VBQUw7QUFDQyw2Q0FDSWYsS0FESjtBQUVDVSx5QkFBaUIsRUFBRUcsTUFBTSxDQUFDZ0I7QUFGM0I7O0FBSUQsU0FBS2QsaUVBQUw7QUFDQyw2Q0FDSWYsS0FESjtBQUVDVyx3QkFBZ0IsRUFBRUUsTUFBTSxDQUFDZ0I7QUFGMUI7O0FBSUQsU0FBS2Qsa0VBQUw7QUFDQyw2Q0FDSWYsS0FESjtBQUVDOEIseUJBQWlCLEVBQUVqQixNQUFNLENBQUNnQjtBQUYzQjs7QUFJRCxTQUFLZCwwREFBTDtBQUNDLFVBQU1nQixZQUFZLEdBQUcvQixLQUFLLENBQUNNLE9BQU4sQ0FBYzBCLE1BQWQsQ0FBcUIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2xELGVBQU9BLEdBQUcsQ0FBQ0MsUUFBSixDQUFhckIsTUFBTSxDQUFDc0IsVUFBcEIsQ0FBUDtBQUNBLE9BRm9CLENBQXJCO0FBR0EsNkNBQ0luQyxLQURKO0FBRUNNLGVBQU8sRUFBRXlCO0FBRlY7O0FBSUQ7QUFDQyxhQUFPL0IsS0FBUDtBQXJGRjtBQXVGQSxDQXJHRDs7QUF3R0EsSUFBTW9DLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNuQ3RDLGFBQVcsRUFBWEE7QUFEbUMsQ0FBRCxDQUFuQztBQUllcUMsMEVBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgcHVja1Nlc3Npb24gPSAoc3RhdGUgPSB7XG5cdGNvbm5lY3RlZDogZmFsc2UsXG5cdGNvbm5lY3Rpbmc6IGZhbHNlLFxuXHR1cGxvYWRQcm9ncmVzczogMCxcblx0dXBsb2FkVGFnQ291bnQ6IDAsXG5cdHVwbG9hZFRhZ1RvdGFsOiAwLFxuXHR0YWdMaXN0OiBbXSxcblx0ZXJyb3JNc2c6ICcnLFxuXHRzaG93RXJyb3JNc2c6IGZhbHNlLFxuXHRzaG93VXBsb2FkRGlhbG9nOiBmYWxzZSxcblx0c2hvd0dlbmVyYWxEaWFsb2c6IGZhbHNlLFxuXHRzaG93UmVuYW1lRGlhbG9nOiBmYWxzZSxcblx0dGFnTGlzdExvYWRlZDogZmFsc2UsXG59LCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgdHlwZXMuUFVDS19DT05ORUNUOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y29ubmVjdGVkOiB0cnVlLFxuXHRcdFx0XHRjb25uZWN0aW5nOiBmYWxzZVxuXHRcdFx0fTtcblx0XHRjYXNlIHR5cGVzLlBVQ0tfQ09OTkVDVElORzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNvbm5lY3RlZDogZmFsc2UsXG5cdFx0XHRcdGNvbm5lY3Rpbmc6IHRydWVcblx0XHRcdH07XG5cdFx0Y2FzZSB0eXBlcy5QVUNLX0RJU0NPTk5FQ1RFRDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNvbm5lY3RlZDogZmFsc2UsXG5cdFx0XHRcdGNvbm5lY3Rpbmc6IGZhbHNlLFxuXHRcdFx0XHRkaXNjb25uZWN0ZWQ6IHRydWVcblx0XHRcdH07XG5cdFx0Y2FzZSB0eXBlcy5QVUNLX1RBR0xJU1Q6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dGFnTGlzdDogYWN0aW9uLmRhdGEsXG5cdFx0XHRcdHRhZ0xpc3RMb2FkZWQ6IHRydWUsXG5cdFx0XHR9O1xuXHRcdGNhc2UgdHlwZXMuUFVDS19CQVRURVJZUEVSQ0VOVEFHRTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRiYXR0ZXJ5UGVyY2VudGFnZTogYWN0aW9uLmJhdHRlcnlQZXJjZW50YWdlXG5cdFx0XHR9O1xuXHRcdGNhc2UgdHlwZXMuUFVDS19DVVJSRU5UX1RBRzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjdXJyZW50VGFnOiBhY3Rpb24uZGF0YVxuXHRcdFx0fTtcblx0XHRjYXNlIHR5cGVzLlBVQ0tfU0VUVElOR19UQUc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2V0dGluZ1RhZzogYWN0aW9uLnNldHRpbmdTdGF0ZS5pc1NldHRpbmcsXG5cdFx0XHRcdHNldHRpbmdUYWdJbmRleDogYWN0aW9uLnNldHRpbmdTdGF0ZS5zZXR0aW5nVGFnSW5kZXhcblx0XHRcdH07XG5cdFx0Y2FzZSB0eXBlcy5QVUNLX1VQTE9BRFBST0dSRVNTOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVwbG9hZFByb2dyZXNzOiBOdW1iZXIoYWN0aW9uLnByb2dyZXNzKSxcblx0XHRcdH07XG5cdFx0Y2FzZSB0eXBlcy5VUExPQURfVEFHX0NPVU5UOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVwbG9hZFRhZ0NvdW50OiBhY3Rpb24uY291bnQsXG5cdFx0XHRcdHVwbG9hZFRhZ1RvdGFsOiBhY3Rpb24udG90YWwsXG5cdFx0XHR9O1xuXHRcdGNhc2UgdHlwZXMuU0VUX0VSUk9SX01TRzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRlcnJvck1zZzogYWN0aW9uLm1zZyxcblx0XHRcdFx0c2hvd0Vycm9yTXNnOiBhY3Rpb24uc2hvdyxcblx0XHRcdH07XG5cdFx0Y2FzZSB0eXBlcy5TSE9XX1VQTE9BRF9ESUFMT0c6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd1VwbG9hZERpYWxvZzogYWN0aW9uLnNob3csXG5cdFx0XHR9O1xuXHRcdGNhc2UgdHlwZXMuU0hPV19HRU5FUkFMX0RJQUxPRzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzaG93R2VuZXJhbERpYWxvZzogYWN0aW9uLnNob3csXG5cdFx0XHR9O1xuXHRcdGNhc2UgdHlwZXMuU0hPV19SRU5BTUVfRElBTE9HOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNob3dSZW5hbWVEaWFsb2c6IGFjdGlvbi5zaG93LFxuXHRcdFx0fTtcblx0XHRjYXNlIHR5cGVzLlNIT1dfTE9BRElOR19ESUFMT0c6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2hvd0xvYWRpbmdEaWFsb2c6IGFjdGlvbi5zaG93LFxuXHRcdFx0fTtcblx0XHRjYXNlIHR5cGVzLlNFQVJDSF9UQUdTOlxuXHRcdFx0Y29uc3QgZmlsdGVyZWRUYWdzID0gc3RhdGUudGFnTGlzdC5maWx0ZXIoKHRhZykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGFnLmluY2x1ZGVzKGFjdGlvbi5zZWFyY2hUZXJtKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRhZ0xpc3Q6IGZpbHRlcmVkVGFncyxcblx0XHRcdH1cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59O1xuXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcblx0cHVja1Nlc3Npb24sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ })

})