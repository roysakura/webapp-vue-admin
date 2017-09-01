webpackJsonp([30],{

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(898)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(837),
  /* template */
  __webpack_require__(934),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-05b7e81a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = addAdv;
/* harmony export (immutable) */ __webpack_exports__["e"] = getAdvs;
/* harmony export (immutable) */ __webpack_exports__["f"] = delAdvById;
/* harmony export (immutable) */ __webpack_exports__["a"] = getAdvById;
/* harmony export (immutable) */ __webpack_exports__["b"] = editAdv;
/* harmony export (immutable) */ __webpack_exports__["d"] = searchAdv;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);




function addAdv(ad_name, content, enable, company, ad_link, image, days) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api1.0/ads/', {
        ad_name: ad_name,
        content: content,
        enable: enable,
        company: company,
        ad_link: ad_link,
        image: image,
        days: days
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function getAdvs(page, pageSize) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/ads/', {
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

function delAdvById(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('/api1.0/ads/' + id + '/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function getAdvById(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/ads/' + id + '/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function editAdv(id, ad_name, content, enable, company, ad_link, image, days) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/api1.0/ads/' + id + '/', {
        ad_name: ad_name,
        content: content,
        enable: enable,
        company: company,
        ad_link: ad_link,
        image: image,
        days: days
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function searchAdv(title, company, start_date, end_date, page, pageSize) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/ads/search/', {
        params: {
            title: title,
            company: company,
            start_date: start_date,
            end_date: end_date,
            page: page,
            page_size: pageSize
        }
    });
}

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_adv__ = __webpack_require__(475);





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            id: -111,
            dialogVisible: false,
            advTi: "",
            cName: "",
            currentPage: 1,
            pageSize: 8,
            totalCount: 0,
            advDatas: [],
            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value4: ''
        };
    },
    mounted: function mounted() {
        this.$nextTick(function () {
            this.getAdvDatas(1, this.pageSize);
            this.initSearch();
        });
    },

    methods: {
        initSearch: function initSearch() {
            var _this = this;
            $('#sT').bind('input propertychange', function () {
                _this.goSearch(1);
            });
            $('#cName').bind('input propertychange', function () {
                _this.goSearch(2);
            });
        },
        goSearch: function goSearch(flag) {
            var _this2 = this;

            var start_date = null;
            var end_date = null;
            if (flag === 1) {
                this.cName = null;
            }
            if (flag === 2) {
                this.advTi = null;
            }
            if (flag === 3) {
                this.advTi = null;
                this.cName = null;
                start_date = this.value4[0];
                end_date = this.value4[1];
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_adv__["d" /* searchAdv */])(this.advTi, this.cName, start_date, end_date, 0, this.pageSize).then(function (res) {
                _this2.advDatas = [];
                var tempArr = [];
                if (res.status === 200) {
                    tempArr = res.data.data.detail.hits.hits;
                    _this2.totalCount = res.data.data.detail.hits.total;
                }
                var len = tempArr.length;
                if (len <= 0) {
                    _this2.getAdvDatas(1, _this2.pageSize);
                } else {
                    for (var i = 0; i < len; i++) {
                        tempArr[i]._source.id = tempArr[i]._id;
                        tempArr[i]._source.ad_name = tempArr[i]._source.title;
                        _this2.advDatas.push(tempArr[i]._source);
                    }
                }
            }, function (err) {});
        },
        showMsg: function showMsg(str, flag) {
            this.$message({
                message: str,
                type: flag ? "success" : "warning"
            });
        },
        getAdvDatas: function getAdvDatas(page, pageSize) {
            var _this3 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_adv__["e" /* getAdvs */])(page, pageSize).then(function (res) {
                if (res.status === 200) {
                    _this3.totalCount = res.data.data.total_count;
                    _this3.advDatas = res.data.data.detail;
                }
            }, function (err) {});
        },
        handleCurrentChange: function handleCurrentChange(val) {
            this.getAdvDatas(val, this.pageSize);
        },
        handleCreate: function handleCreate() {
            this.$router.push({ path: '/adv/addadv', replace: true });
        },
        delReal: function delReal() {
            var _this4 = this;

            this.dialogVisible = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_adv__["f" /* delAdvById */])(this.id).then(function (res) {
                var _this = _this4;
                _this.showMsg("删除成功!", true);
                setTimeout(function () {
                    _this.$router.go(0);
                }, 500);
            }, function (err) {
                _this4.showMsg("删除失败", false);
            });
        },
        delById: function delById(id) {
            this.dialogVisible = true;
            this.id = id;
        },
        goEditPage: function goEditPage(id) {
            this.$router.push({ name: '编辑广告', params: {
                    advId: id
                }, replace: true });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(30)))

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(337)(true);
// imports


// module
exports.push([module.i, ".filter-container[data-v-05b7e81a]{width:100%;margin:20px}.block[data-v-05b7e81a]{width:100%;margin:20px auto}", "", {"version":3,"sources":["D:/Products/vueAdmin-template-master/src/views/adv/index.vue"],"names":[],"mappings":"AACA,mCACI,WAAY,AACZ,WAAa,CAChB,AACD,wBACI,WAAY,AACZ,gBAAkB,CACrB","file":"index.vue","sourcesContent":["\n.filter-container[data-v-05b7e81a]{\n    width: 100%;\n    margin: 20px;\n}\n.block[data-v-05b7e81a]{\n    width: 100%;\n    margin: 20px auto;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(867);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(338)("5d5568a8", content, true);

/***/ }),

/***/ 934:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "news"
  }, [_c('div', {
    staticClass: "filter-container"
  }, [_c('el-input', {
    staticClass: "filter-item",
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "标题",
      "id": "sT"
    },
    model: {
      value: (_vm.advTi),
      callback: function($$v) {
        _vm.advTi = $$v
      },
      expression: "advTi"
    }
  }), _vm._v(" "), _c('el-input', {
    staticClass: "filter-item",
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "公司名",
      "id": "cName"
    },
    model: {
      value: (_vm.cName),
      callback: function($$v) {
        _vm.cName = $$v
      },
      expression: "cName"
    }
  }), _vm._v(" "), _c('el-date-picker', {
    attrs: {
      "type": "datetimerange",
      "picker-options": _vm.pickerOptions2,
      "placeholder": "选择有效期范围",
      "align": "right"
    },
    model: {
      value: (_vm.value4),
      callback: function($$v) {
        _vm.value4 = $$v
      },
      expression: "value4"
    }
  }), _vm._v(" "), _c('el-button', {
    staticClass: "filter-item",
    attrs: {
      "type": "primary",
      "icon": "search"
    },
    on: {
      "click": function($event) {
        _vm.goSearch(3)
      }
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    staticClass: "filter-item",
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "type": "primary",
      "icon": "edit"
    },
    on: {
      "click": _vm.handleCreate
    }
  }, [_vm._v("添加")])], 1), _vm._v(" "), _c('div', {
    staticClass: "news-list"
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.advDatas,
      "border": "",
      "fit": "",
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "序号",
      "width": "65"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.id))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "110px",
      "align": "center",
      "label": "公司名"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', {
          staticStyle: {
            "color": "red"
          }
        }, [_vm._v(_vm._s(scope.row.company))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "110px",
      "label": "标题"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', {
          staticClass: "link-type"
        }, [_vm._v(_vm._s(scope.row.ad_name))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "300px",
      "align": "center",
      "label": "连接"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('a', {
          attrs: {
            "href": scope.row.ad_link
          }
        }, [_vm._v(_vm._s(scope.row.ad_link))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "110px",
      "align": "center",
      "label": "点击率"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.click_count))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "class-name": "status-col",
      "label": "有效期"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-tag', [_vm._v(_vm._s(scope.row.start_date))]), _vm._v("至\n                      "), _c('el-tag', [_vm._v(_vm._s(scope.row.end_date))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "操作",
      "width": "150"
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
              _vm.goEditPage(scope.row.id)
            }
          }
        }, [_vm._v("编辑\n                      ")]), _vm._v(" "), _c('el-button', {
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
  })], 1)], 1), _vm._v(" "), _c('div', {
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
  })], 1), _vm._v(" "), _c('el-dialog', {
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
//# sourceMappingURL=30.dca7dd42002244153164.js.map