webpackJsonp([11],{

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(905)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(852),
  /* template */
  __webpack_require__(941),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2bee3ba2",
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

function edtiNewsById(id, title, content, tags, article_type, image, caregory, abstract, source) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/api1.0/articles/' + id + '/', {
        title: title,
        body: content,
        tags: tags,
        article_type: article_type,
        image: image,
        category: caregory,
        abstract: abstract,
        source: source
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

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(425), __esModule: true };

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(154);
__webpack_require__(153);
module.exports = __webpack_require__(426);

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17)
  , get      = __webpack_require__(152);
module.exports = __webpack_require__(18).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_news__ = __webpack_require__(400);








/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            dialogVisible: false,
            id: -111,
            currentPage: 1,
            pageSize: 10,
            newsDatas: [],
            totalCount: 0,
            searchTitle: "",
            searchAuthor: "",
            tags: [],
            selectTag: []
        };
    },
    mounted: function mounted() {
        this.$nextTick(function () {
            this.getNewsData(1, this.pageSize);
            this.searchNews();
            this.getTags();
        });
    },

    methods: {
        showMsg: function showMsg(str, flag) {
            this.$message({
                message: str,
                type: flag ? "success" : "warning"
            });
        },
        shenHeNews: function shenHeNews(newsInfo, flag) {
            var _this2 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_news__["j" /* shenHeNewsById */])(newsInfo.id).then(function (res) {
                _this2.showMsg("审核成功", true);
                newsInfo.status = flag;
            }, function (err) {
                _this2.showMsg("审核失败,请重试!", false);
            });
        },
        editNews: function editNews(newsInfo) {
            this.$router.push({ name: '编辑新闻', params: {
                    newsId: newsInfo.id
                }, replace: true });
        },
        delReal: function delReal() {
            var _this3 = this;

            this.dialogVisible = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_news__["e" /* delNewsById */])(this.id).then(function (res) {
                _this3.showMsg("删除成功", true);
                var _this = _this3;
                setTimeout(function () {
                    _this.$router.go(0);
                }, 500);
            }, function (err) {
                _this3.showMsg("删除失败", false);
            });
        },
        delNewsById: function delNewsById(id) {
            this.dialogVisible = true;
            this.id = id;
        },
        handleFilter: function handleFilter() {
            if (this.selectTag.length <= 0) {
                this.$message({
                    message: "请选择要搜索的标签",
                    type: 'success'
                });
                return;
            }
            var searchUrl = '/api1.0/search/?tag=' + this.selectTag + '&article_type=0&search_type=1';
            this.getSearchNewsData(searchUrl, 1, this.pageSize);
        },
        getTags: function getTags() {
            var _this4 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_news__["a" /* getTags */])().then(function (res) {
                var temTags = [];
                if (res.status === 200) {
                    temTags = res.data.data.detail;
                    var len = temTags.length;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(temTags), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var tag = _step.value;

                            var obj = {};
                            obj.value = tag.name;
                            obj.label = tag.name;
                            _this4.tags.push(obj);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            }, function (err) {});
        },
        searchNews: function searchNews() {
            var _this = this;
            $('#sT').bind('input propertychange', function () {
                _this.goSearch(_this.searchTitle);
            });
        },
        goSearch: function goSearch(content) {
            var searchUrl = '/api1.0/search/?q=' + content + '&article_type=0&search_type=1';
            this.getSearchNewsData(searchUrl, 1, this.pageSize);
        },
        getSearchNewsData: function getSearchNewsData(searchUrl) {
            var _this5 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_news__["f" /* getSearchNews */])(searchUrl, 1, this.pageSize).then(function (res) {
                _this5.newsDatas = [];
                var tempArr = [];
                if (res.status === 200) {
                    tempArr = res.data.data.detail.hits.hits;
                    _this5.totalCount = res.data.data.detail.hits.total;
                }
                var len = tempArr.length;
                if (len <= 0) {
                    _this5.getNewsData(1, _this5.pageSize);
                } else {
                    for (var i = 0; i < len; i++) {
                        var tempT = [];
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(tempArr[i]._source.tags), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var t = _step2.value;

                                var obj = {};
                                obj.name = t;
                                tempT.push(obj);
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        tempArr[i]._source.tags = tempT;
                        _this5.newsDatas.push(tempArr[i]._source);
                    }
                }
            }, function (err) {});
        },
        getNewsData: function getNewsData(page, pageSize) {
            var _this6 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_news__["k" /* getNews */])(page, pageSize).then(function (res) {
                if (res.status === 200) {
                    _this6.newsDatas = res.data.data.detail;
                    _this6.totalCount = res.data.data.total_count;
                }
            }, function (err) {});
        },
        handleCurrentChange: function handleCurrentChange(val) {
            this.getNewsData(val, this.pageSize);
        },
        addNews: function addNews() {
            this.$router.push({ path: '/news/SendNews', replace: true });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(30)))

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(337)(true);
// imports


// module
exports.push([module.i, ".filter-container[data-v-2bee3ba2]{width:100%;margin:20px}.block[data-v-2bee3ba2]{width:100%;margin:20px auto}", "", {"version":3,"sources":["D:/Products/vueAdmin-template-master/src/views/news/index.vue"],"names":[],"mappings":"AACA,mCACI,WAAY,AACZ,WAAa,CAChB,AACD,wBACI,WAAY,AACZ,gBAAkB,CACrB","file":"index.vue","sourcesContent":["\n.filter-container[data-v-2bee3ba2]{\n    width: 100%;\n    margin: 20px;\n}\n.block[data-v-2bee3ba2]{\n    width: 100%;\n    margin: 20px auto;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(874);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(338)("7bf7b1db", content, true);

/***/ }),

/***/ 941:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "news"
  }, [_c('div', {
    staticClass: "filter-container"
  }, [_c('el-input', {
    staticClass: "filter-item",
    staticStyle: {
      "width": "250px"
    },
    attrs: {
      "placeholder": "标题",
      "id": "sT"
    },
    model: {
      value: (_vm.searchTitle),
      callback: function($$v) {
        _vm.searchTitle = $$v
      },
      expression: "searchTitle"
    }
  }), _vm._v(" "), _c('el-select', {
    staticClass: "filter-item",
    staticStyle: {
      "width": "250px"
    },
    attrs: {
      "clearable": "",
      "placeholder": "标签",
      "multiple": "",
      "allow-create": ""
    },
    model: {
      value: (_vm.selectTag),
      callback: function($$v) {
        _vm.selectTag = $$v
      },
      expression: "selectTag"
    }
  }, _vm._l((_vm.tags), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  })), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "waves",
      rawName: "v-waves"
    }],
    staticClass: "filter-item",
    attrs: {
      "type": "primary",
      "icon": "search"
    },
    on: {
      "click": _vm.handleFilter
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
      "click": function($event) {
        _vm.addNews()
      }
    }
  }, [_vm._v("添加")])], 1), _vm._v(" "), _c('div', {
    staticClass: "news-list"
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.newsDatas,
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
      "width": "180px",
      "align": "center",
      "label": "发布时间"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.created_at))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "300px",
      "label": "标题"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', {
          staticClass: "link-type"
        }, [_vm._v(_vm._s(scope.row.title))]), _vm._v(" "), _vm._l((scope.row.tags), function(tag) {
          return _c('el-tag', {
            key: tag.id,
            staticStyle: {
              "margin-left": "2px"
            }
          }, [_vm._v(_vm._s(tag.name))])
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "110px",
      "align": "center",
      "label": "作者"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.author))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "110px",
      "align": "center",
      "label": "来源"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.source))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "阅读数",
      "width": "95"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', {
          staticClass: "link-type"
        }, [_vm._v(_vm._s(scope.row.article_views_count))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "状态",
      "width": "95"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-tag', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (scope.row.status === 0),
            expression: "scope.row.status ===0"
          }],
          staticClass: "link-type"
        }, [_vm._v("未审核")]), _vm._v(" "), _c('el-tag', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (scope.row.status === 1),
            expression: "scope.row.status ===1"
          }],
          staticClass: "link-type"
        }, [_vm._v("已审核")])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "操作",
      "width": "200"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small",
            "type": "primary"
          },
          on: {
            "click": function($event) {
              _vm.editNews(scope.row)
            }
          }
        }, [_vm._v("编辑\n                      ")]), _vm._v(" "), _c('el-button', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (scope.row.status === 0),
            expression: "scope.row.status ===0"
          }],
          attrs: {
            "size": "small",
            "type": "warning"
          },
          on: {
            "click": function($event) {
              _vm.shenHeNews(scope.row, 1)
            }
          }
        }, [_vm._v("审核\n                      ")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.delNewsById(scope.row.id)
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
//# sourceMappingURL=11.c5892d2fb16d392450d7.js.map