webpackJsonp([15],{

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(917)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(857),
  /* template */
  __webpack_require__(955),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2bee3ba2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTags;
/* harmony export (immutable) */ __webpack_exports__["b"] = sendNewsInfo;
/* harmony export (immutable) */ __webpack_exports__["l"] = getNews;
/* harmony export (immutable) */ __webpack_exports__["g"] = getNTieZi;
/* harmony export (immutable) */ __webpack_exports__["f"] = getSearchNews;
/* unused harmony export getSearchNewsByCategory */
/* harmony export (immutable) */ __webpack_exports__["e"] = delNewsById;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNewsDetail;
/* harmony export (immutable) */ __webpack_exports__["i"] = edtiNewsById;
/* harmony export (immutable) */ __webpack_exports__["h"] = getCategory;
/* harmony export (immutable) */ __webpack_exports__["d"] = edtiTieZiById;
/* harmony export (immutable) */ __webpack_exports__["k"] = shenHeNewsById;
/* harmony export (immutable) */ __webpack_exports__["j"] = getBaoJia;
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

function getSearchNewsByCategory(url, page, pageSize) {
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

function shenHeNewsById(id, flag) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/api1.0/articles/' + id + '/status/', {
        status: flag
    });
}

function getBaoJia(quote_date) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/magnet/materialquotes/', {
        params: {
            quote_date: quote_date
        }
    });
}

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(434), __esModule: true };

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(154);
__webpack_require__(153);
module.exports = __webpack_require__(435);

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18)
  , get      = __webpack_require__(152);
module.exports = __webpack_require__(17).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_news__ = __webpack_require__(405);










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
            selectTag: [],
            category: [],
            selectCategory: "",
            showSearch: false,
            mSearchUrl: "",
            mUrl: "http://m.ciyigou.com/mobile/index#/newsdetail/354"
        };
    },
    mounted: function mounted() {
        this.$nextTick(function () {
            this.getNewsData(1, this.pageSize);
            this.searchNews();
            this.getTags();
            this.getCateInfos();
        });
    },

    methods: {
        lookNewsURL: function lookNewsURL(newItem) {},
        choiceCategory2Search: function choiceCategory2Search() {
            if (this.selectCategory === "") {
                this.showMsg("所选择的新闻类别不能为空");
                return;
            }
            var searchUrl = 'api1.0/articles/categorys/search/?category_name=' + this.selectCategory;
            this.mSearchUrl = searchUrl;
            this.getSearchNewsData(searchUrl, 1, this.pageSize);
        },
        getCateInfos: function getCateInfos() {
            var _this2 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_news__["h" /* getCategory */])().then(function (res) {
                if (res.status === 200) {
                    var temTags = [];
                    temTags = res.data.data.detail;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(temTags), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var tag = _step.value;

                            var obj = {};
                            obj.value = tag.name;
                            obj.label = tag.name;
                            _this2.category.push(obj);
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
        showMsg: function showMsg(str, flag) {
            this.$message({
                message: str,
                type: flag ? "success" : "warning"
            });
        },
        shenHeNews: function shenHeNews(newsInfo, flag) {
            var _this3 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_news__["k" /* shenHeNewsById */])(newsInfo.id, flag).then(function (res) {
                _this3.showMsg("审核成功", true);
                newsInfo.status = flag;
            }, function (err) {
                _this3.showMsg("审核失败,请重试!", false);
            });
        },
        shenHeNewsNo: function shenHeNewsNo(newsInfo, flag) {
            var _this4 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_news__["k" /* shenHeNewsById */])(newsInfo.id, flag).then(function (res) {
                _this4.showMsg("已初始化为未审核状态", true);
                newsInfo.status = flag;
            }, function (err) {
                _this4.showMsg("审核失败,请重试!", false);
            });
        },
        editNews: function editNews(newsInfo) {
            this.$router.push({ name: '编辑新闻', params: {
                    newsId: newsInfo.id
                }, replace: true });
        },
        delReal: function delReal() {
            var _this5 = this;

            this.dialogVisible = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_news__["e" /* delNewsById */])(this.id).then(function (res) {
                _this5.showMsg("删除成功", true);
                var _this = _this5;
                setTimeout(function () {
                    _this.$router.go(0);
                }, 500);
            }, function (err) {
                _this5.showMsg("删除失败", false);
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
            this.mSearchUrl = searchUrl;
            this.getSearchNewsData(searchUrl, 1, this.pageSize);
        },
        getTags: function getTags() {
            var _this6 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_news__["a" /* getTags */])().then(function (res) {
                var temTags = [];
                if (res.status === 200) {
                    temTags = res.data.data.detail;
                    var len = temTags.length;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(temTags), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var tag = _step2.value;

                            var obj = {};
                            obj.value = tag.name;
                            obj.label = tag.name;
                            _this6.tags.push(obj);
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
            this.mSearchUrl = searchUrl;
            this.getSearchNewsData(searchUrl, 1, this.pageSize);
        },
        getSearchNewsData: function getSearchNewsData(searchUrl) {
            var _this7 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_news__["f" /* getSearchNews */])(searchUrl, 1, this.pageSize).then(function (res) {
                _this7.newsDatas = [];
                var tempArr = [];
                if (res.status === 200) {
                    tempArr = res.data.data.detail.hits.hits;
                    _this7.totalCount = res.data.data.detail.hits.total;
                }
                var len = tempArr.length;
                if (len <= 0) {
                    _this7.getNewsData(1, _this7.pageSize);
                } else {
                    _this7.getSearchNews(tempArr, len);
                }
            }, function (err) {});
        },
        getSearchNews: function getSearchNews(tempArr, len) {
            console.log("getSearchNews:", tempArr);
            this.showSearch = true;
            for (var i = 0; i < len; i++) {
                var obj = {
                    id: tempArr[i]._source.id,
                    newsLink: 'http://m.ciyigou.com/mobile/index#/newsdetail/' + tempArr[i]._source.id,
                    abstract: tempArr[i]._source.abstract,
                    title: tempArr[i]._source.title,
                    status: tempArr[i]._source.status,
                    author: tempArr[i]._source.author,
                    category_name: tempArr[i]._source.category_name,
                    source: tempArr[i]._source.source,
                    created_at: tempArr[i]._source.created_at,
                    article_views_count: tempArr[i]._source.article_views_count,
                    tags: tempArr[i]._source.tags
                };
                var tempT = [];
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(obj.tags), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var t = _step3.value;

                        var _obj = {};
                        _obj.name = t;
                        tempT.push(_obj);
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                obj.tags = tempT;
                this.newsDatas.push(obj);
            }
        },
        getNewsData: function getNewsData(page, pageSize) {
            var _this8 = this;

            this.showSearch = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_news__["l" /* getNews */])(page, pageSize).then(function (res) {
                var tempArr = [];
                if (res.status === 200) {
                    tempArr = res.data.data.detail;
                    var len = tempArr.length;
                    for (var i = 0; i < len; i++) {
                        var obj = {
                            id: tempArr[i].id,
                            newsLink: 'http://m.ciyigou.com/mobile/index#/newsdetail/' + tempArr[i].id,
                            abstract: tempArr[i].abstract,
                            title: tempArr[i].title,
                            status: tempArr[i].status,
                            author: tempArr[i].author,
                            category_name: tempArr[i].category_name,
                            source: tempArr[i].source,
                            created_at: tempArr[i].created_at,
                            article_views_count: tempArr[i].article_views_count,
                            tags: tempArr[i].tags
                        };

                        _this8.newsDatas.push(obj);
                    }

                    _this8.totalCount = res.data.data.total_count;
                }
            }, function (err) {});
        },
        handleCurrentChange: function handleCurrentChange(val) {
            if (this.showSearch) {
                this.getSearchNewsData(this.mSearchUrl);
            } else {
                this.getNewsData(val, this.pageSize);
            }
        },
        addNews: function addNews() {
            this.$router.push({ path: '/news/SendNews', replace: true });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(30)))

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(337)(true);
// imports


// module
exports.push([module.i, ".filter-container[data-v-2bee3ba2]{width:100%;margin:20px}.block[data-v-2bee3ba2]{width:100%;margin:20px auto}", "", {"version":3,"sources":["D:/Products/vueAdmin-template-master/src/views/news/index.vue"],"names":[],"mappings":"AACA,mCACI,WAAY,AACZ,WAAa,CAChB,AACD,wBACI,WAAY,AACZ,gBAAkB,CACrB","file":"index.vue","sourcesContent":["\n.filter-container[data-v-2bee3ba2]{\n    width: 100%;\n    margin: 20px;\n}\n.block[data-v-2bee3ba2]{\n    width: 100%;\n    margin: 20px auto;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(883);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(338)("7bf7b1db", content, true);

/***/ }),

/***/ 955:
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
  })), _vm._v(" "), _c('el-select', {
    staticClass: "filter-item",
    staticStyle: {
      "width": "250px"
    },
    attrs: {
      "clearable": "",
      "placeholder": "所在版块",
      "allow-create": ""
    },
    on: {
      "change": function($event) {
        _vm.choiceCategory2Search()
      }
    },
    model: {
      value: (_vm.selectCategory),
      callback: function($$v) {
        _vm.selectCategory = $$v
      },
      expression: "selectCategory"
    }
  }, _vm._l((_vm.category), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  })), _vm._v(" "), _c('el-button', {
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
      "width": "110px",
      "align": "center",
      "label": "版块"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.category_name))])]
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
      "width": "300"
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
        }, [_vm._v("编辑\n                      ")]), _vm._v(" "), _c('el-tooltip', {
          staticClass: "item",
          attrs: {
            "effect": "dark",
            "content": scope.row.newsLink,
            "placement": "top"
          }
        }, [_c('el-button', {
          attrs: {
            "size": "small",
            "type": "primary"
          }
        }, [_vm._v("查看Url")])], 1), _vm._v(" "), _c('el-button', {
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
        }, [_vm._v("未审核\n                      ")]), _vm._v(" "), _c('el-button', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (scope.row.status !== 0),
            expression: "scope.row.status !==0"
          }],
          attrs: {
            "size": "small",
            "type": "warning"
          },
          on: {
            "click": function($event) {
              _vm.shenHeNewsNo(scope.row, 0)
            }
          }
        }, [_vm._v("已审核\n                      ")]), _vm._v(" "), _c('el-button', {
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
//# sourceMappingURL=15.d1b4328f53eb0ccc2d4f.js.map