webpackJsonp([16],{

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(906)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(858),
  /* template */
  __webpack_require__(942),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2e140b7e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTags;
/* harmony export (immutable) */ __webpack_exports__["b"] = sendNewsInfo;
/* harmony export (immutable) */ __webpack_exports__["k"] = getNews;
/* harmony export (immutable) */ __webpack_exports__["g"] = getNTieZi;
/* harmony export (immutable) */ __webpack_exports__["f"] = getSearchNews;
/* harmony export (immutable) */ __webpack_exports__["e"] = delNewsById;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNewsDetail;
/* harmony export (immutable) */ __webpack_exports__["i"] = edtiNewsById;
/* harmony export (immutable) */ __webpack_exports__["h"] = getCategory;
/* harmony export (immutable) */ __webpack_exports__["d"] = edtiTieZiById;
/* harmony export (immutable) */ __webpack_exports__["j"] = shenHeNewsById;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);




function getTags() {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/tags/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function sendNewsInfo(title, content, tags, article_type, image, category, come, abstract) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post("/api1.0/articles/", {
        title: title,
        body: content,
        tags: tags,
        article_type: article_type,
        image: image,
        category: category,
        source: come,
        abstract: abstract
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function getNews(page, pageSize) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get("/api1.0/articles/", {
        params: {
            type: 0,
            page: page,
            page_size: pageSize
        }
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function getNTieZi(page, pageSize) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get("/api1.0/articles/", {
        params: {
            type: 1,
            page: page,
            page_size: pageSize
        }
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function getSearchNews(url, page, pageSize) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url, {
        params: {
            type: 0,
            page: page,
            page_size: pageSize
        }
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}
function delNewsById(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('/api1.0/articles/' + id + '/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function getNewsDetail(newsId) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get("/api1.0/articles/" + (newsId + '/')).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function edtiNewsById(id, title, content, tags, article_type, image, caregory) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/api1.0/articles/' + id + '/', {
        title: title,
        body: content,
        tags: tags,
        article_type: article_type,
        image: image,
        category: caregory
    });
}
function getCategory() {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/categorys/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function edtiTieZiById(id, title, content, tags, article_type, image) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/api1.0/articles/' + id + '/', {
        title: title,
        body: content,
        tags: tags,
        article_type: article_type,
        image: image
    });
}

function shenHeNewsById(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/api1.0/articles/' + id + '/status/', {
        status: 1
    });
}

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = addTag;
/* harmony export (immutable) */ __webpack_exports__["g"] = addCategory;
/* harmony export (immutable) */ __webpack_exports__["h"] = delTagById;
/* harmony export (immutable) */ __webpack_exports__["a"] = getTagById;
/* harmony export (immutable) */ __webpack_exports__["b"] = editTag;
/* harmony export (immutable) */ __webpack_exports__["c"] = getCateById;
/* harmony export (immutable) */ __webpack_exports__["e"] = delCategory;
/* harmony export (immutable) */ __webpack_exports__["d"] = editCategory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);




function addTag(name) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api1.0/tags/', {
        name: name
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function addCategory(name) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api1.0/categorys/', {
        name: name
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function delTagById(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('/api1.0/tags/' + id + '/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function getTagById(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/tags/' + id + '/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function editTag(id, name) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/api1.0/tags/' + id + '/', {
        name: name
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function getCateById(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/categorys/' + id + '/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function delCategory(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('/api1.0/categorys/' + id + '/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function editCategory(id, name) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/api1.0/categorys/' + id + '/', {
        name: name
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_news__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_tag__ = __webpack_require__(435);




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            dialogVisible: false,
            id: -111,
            newsData: []
        };
    },
    mounted: function mounted() {
        this.getTagsInfo();
    },

    methods: {
        showMsg: function showMsg(str, flag) {
            this.$message({
                message: str,
                type: flag ? "success" : "warning"
            });
        },
        editById: function editById(id) {
            this.$router.push({ name: '编辑标签', params: {
                    tagId: id
                }, replace: true });
        },
        delReal: function delReal() {
            var _this2 = this;

            this.dialogVisible = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_tag__["h" /* delTagById */])(this.id).then(function (res) {
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
        getTagsInfo: function getTagsInfo() {
            var _this3 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_news__["a" /* getTags */])().then(function (res) {
                if (res.status === 200) {
                    _this3.newsData = res.data.data.detail;
                }
            }, function (err) {});
        }
    }
});

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(337)(true);
// imports


// module
exports.push([module.i, ".filter-container[data-v-2e140b7e]{width:100%;margin:20px}.block[data-v-2e140b7e]{width:100%;margin:20px auto}", "", {"version":3,"sources":["D:/Products/vueAdmin-template-master/src/views/tag/index.vue"],"names":[],"mappings":"AACA,mCACI,WAAY,AACZ,WAAa,CAChB,AACD,wBACI,WAAY,AACZ,gBAAkB,CACrB","file":"index.vue","sourcesContent":["\n.filter-container[data-v-2e140b7e]{\n    width: 100%;\n    margin: 20px;\n}\n.block[data-v-2e140b7e]{\n    width: 100%;\n    margin: 20px auto;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(875);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(338)("49bc07be", content, true);

/***/ }),

/***/ 942:
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
      "min-width": "150px",
      "label": "标签名",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-tag', [_vm._v(_vm._s(scope.row.name))])]
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
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=16.0b608096ba5e485cca7b.js.map