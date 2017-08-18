webpackJsonp([28],{

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(909)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(847),
  /* template */
  __webpack_require__(947),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5331f617",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = addJiFen;
/* harmony export (immutable) */ __webpack_exports__["e"] = getJiFen;
/* harmony export (immutable) */ __webpack_exports__["d"] = delJiFenById;
/* harmony export (immutable) */ __webpack_exports__["a"] = getJiFenById;
/* harmony export (immutable) */ __webpack_exports__["b"] = editJiFen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);




function addJiFen(credit_item_name, item_credit, credit_per_day, restrict_max_num) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api1.0/credititems/', {
        credit_item_name: credit_item_name,
        credit_per_day: credit_per_day,
        item_credit: item_credit,
        restrict_max_num: restrict_max_num
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function getJiFen() {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/credititems/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function delJiFenById(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('/api1.0/credititems/' + id + '/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}
function getJiFenById(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/credititems/' + id + '/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function editJiFen(id, credit_item_name, item_credit, credit_per_day, restrict_max_num) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/api1.0/credititems/' + id + '/', {
        credit_item_name: credit_item_name,
        credit_per_day: credit_per_day,
        item_credit: item_credit,
        restrict_max_num: restrict_max_num
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_jifen__ = __webpack_require__(541);




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            dialogVisible: false,
            id: -111,
            newsData: []

        };
    },
    mounted: function mounted() {
        this.getCate();
    },

    methods: {
        editById: function editById(id) {
            this.$router.push({ name: '编辑积分', params: {
                    jId: id
                }, replace: true });
        },
        delReal: function delReal() {
            var _this2 = this;

            this.dialogVisible = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_jifen__["d" /* delJiFenById */])(this.id).then(function (res) {
                _this2.showMsg("删除成功!", true);
                var _this = _this2;
                setTimeout(function () {
                    _this.$router.go(0);
                }, 500);
            }, function (err) {
                _this2.showMsg("删除失败!", false);
            });
        },
        delById: function delById(id) {
            this.dialogVisible = true;
            this.id = id;
        },
        getCate: function getCate() {
            var _this3 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_jifen__["e" /* getJiFen */])().then(function (res) {
                if (res.status === 200) {
                    _this3.newsData = res.data.data.detail;
                }
            }, function (err) {});
        },
        showMsg: function showMsg(str, flag) {
            this.$message({
                message: str,
                type: flag ? "success" : "warning"
            });
        }
    }
});

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(337)(true);
// imports


// module
exports.push([module.i, ".filter-container[data-v-5331f617]{width:100%;margin:20px}.block[data-v-5331f617]{width:100%;margin:20px auto}", "", {"version":3,"sources":["D:/Products/vueAdmin-template-master/src/views/jifen/index.vue"],"names":[],"mappings":"AACA,mCACI,WAAY,AACZ,WAAa,CAChB,AACD,wBACI,WAAY,AACZ,gBAAkB,CACrB","file":"index.vue","sourcesContent":["\n.filter-container[data-v-5331f617]{\n    width: 100%;\n    margin: 20px;\n}\n.block[data-v-5331f617]{\n    width: 100%;\n    margin: 20px auto;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(879);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(338)("5b8bdc86", content, true);

/***/ }),

/***/ 947:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "news"
  }, [_c('div', {
    staticClass: "news-list"
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.newsData,
      "border": "",
      "fit": "",
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "序号",
      "width": "100px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.id))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "200px",
      "align": "center",
      "label": "积分标题"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.credit_item_name))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "150px",
      "label": "积分数",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-tag', [_vm._v(_vm._s(scope.row.item_credit))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "150px",
      "label": "每天限制",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-tag', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (scope.row.credit_per_day === true),
            expression: "scope.row.credit_per_day === true"
          }],
          attrs: {
            "type": "success"
          }
        }, [_vm._v("是")]), _vm._v(" "), _c('el-tag', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (scope.row.credit_per_day === false),
            expression: "scope.row.credit_per_day === false"
          }],
          attrs: {
            "type": "primary"
          }
        }, [_vm._v("否")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(scope.row.restrict_max_num) + "积分")])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small",
            "type": "success"
          },
          on: {
            "click": function($event) {
              _vm.editById(scope.row.id)
            }
          }
        }, [_vm._v("修改\n                      ")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.delById(scope.row.id)
            }
          }
        }, [_vm._v("删除\n                      ")])]
      }
    }])
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "visible": _vm.dialogVisible,
      "size": "tiny"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogVisible = $event
      }
    }
  }, [_c('span', [_vm._v("确认删除吗？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.delReal()
      }
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=28.bf0b850b9750f8215d19.js.map