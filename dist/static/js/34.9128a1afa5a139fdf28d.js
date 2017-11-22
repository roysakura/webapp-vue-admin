webpackJsonp([34],{

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(769),
  /* template */
  __webpack_require__(888),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getReportInfo;
/* harmony export (immutable) */ __webpack_exports__["b"] = submitCheckReport;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);




function getReportInfo(page, pageSize) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get("/quote/procurement/report/results/", {
        params: {
            page: page,
            page_size: pageSize
        }
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function submitCheckReport(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put("/quote/procurement/report/" + id + "/results/", {
        dealed: true
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_report__ = __webpack_require__(743);




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            reports: [],
            currentPage: 1,
            totalCount: 0,
            pageSize: 10
        };
    },
    mounted: function mounted() {
        this.fetchData(1, 10);
    },

    methods: {
        fetchData: function fetchData(page, pageSize) {
            var _this = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_report__["a" /* getReportInfo */])(page, pageSize).then(function (res) {
                console.log("数据是:", res);
                _this.reports = res.data.data.detail;
                _this.totalCount = res.data.data.total_count;
            }, function (err) {});
        },
        handleCurrentChange: function handleCurrentChange(currentPage) {
            this.fetchData(currentPage, 10);
        },
        checkUReport: function checkUReport(reportInfo) {
            var _this2 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_report__["b" /* submitCheckReport */])(reportInfo.id).then(function (res) {
                reportInfo.dealed = true;
                _this2.$message({
                    message: '已成功处理!',
                    type: 'success'
                });
            }, function (err) {
                _this2.showMsg("处理失败,请重试!", false);
            });
        }
    }
});

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "report-container"
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.reports,
      "border": "",
      "fit": "",
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "举报时间",
      "width": "180",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.created_at))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "举报人",
      "width": "180",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.username))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "举报(询价)单号",
      "width": "180",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.ref))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "举报内容",
      "align": "center",
      "width": "180"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticClass: "u-icon",
          attrs: {
            "src": scope.row.content,
            "alt": ""
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (!scope.row.dealed),
            expression: "!scope.row.dealed"
          }],
          attrs: {
            "size": "small",
            "type": "warning"
          },
          on: {
            "click": function($event) {
              _vm.checkUReport(scope.row)
            }
          }
        }, [_vm._v("未处理\n                ")]), _vm._v(" "), _c('el-button', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (scope.row.dealed),
            expression: "scope.row.dealed"
          }],
          attrs: {
            "size": "small",
            "type": "primary"
          }
        }, [_vm._v("已处理\n                ")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-size": _vm.pageSize,
      "layout": "total, prev, pager, next, jumper",
      "total": _vm.totalCount
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=34.9128a1afa5a139fdf28d.js.map