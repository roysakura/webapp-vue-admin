webpackJsonp([13],{

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(912)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(862),
  /* template */
  __webpack_require__(950),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


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

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getFilterArticleData;
/* harmony export (immutable) */ __webpack_exports__["b"] = getFilterArticleUrlData;
/* harmony export (immutable) */ __webpack_exports__["a"] = saveArticle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);




function getFilterArticleData(url, content, page) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url, {
        params: {
            keyword: content,
            page: page
        }
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}
function getFilterArticleUrlData(url, content) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(url, {
        url: content
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function saveArticle(mRequestUrl, abstract, category, title, url, imgs) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(mRequestUrl, {
        abstract: abstract,
        gzh_name: category,
        title: title,
        url: url,
        imgs: imgs
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_filterlist__ = __webpack_require__(829);






/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            searchKey: "",
            filterData: [],
            page: 1,
            isShowButton: false,
            isShowCommon: true,
            isShowUrl: true
        };
    },
    created: function created() {},

    methods: {
        getFilterArticle: function getFilterArticle() {
            this.fetchData(1);
        },
        getBack: function getBack() {
            if (this.page !== 0) {
                this.page--;
            }
            if (this.page === 0) {
                this.showMsg("已经是第一页了", false);
                this.page = 1;
                return;
            }
            this.fetchData(this.page);
        },
        getNext: function getNext() {
            this.page++;
            this.fetchData(this.page);
        },
        saveInDataBase: function saveInDataBase(articleInfos) {
            var _this = this;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_filterlist__["a" /* saveArticle */])("api1.0/spiderinfos/", articleInfos.abstract, articleInfos.gzh_name, articleInfos.title, articleInfos.url, articleInfos.imgs[0]).then(function (res) {
                articleInfos.isSave = true;
                _this.showMsg("保存成功", true);
            }, function (err) {
                _this.showMsg("保存失败，请重试!");
            });
        },
        goEditPage: function goEditPage() {},
        handleCurrentChange: function handleCurrentChange(val) {
            this.fetchData(val);
        },
        fetchData: function fetchData(page) {
            var _this2 = this;

            var _this = this;

            if (this.searchKey === "") {
                this.showMsg("搜索内容不能为空！");
                return;
            }
            if (this.searchKey.indexOf("http") !== -1 || this.searchKey.indexOf("https") !== -1) {
                this.isShowCommon = false;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_filterlist__["b" /* getFilterArticleUrlData */])("api1.0/urlinfos/", this.searchKey).then(function (res) {
                    _this.showMsg("成功保存到数据库", true);
                }, function (err) {
                    _this.showMsg("保存失败，请重试!");
                });
            } else {
                this.isShowCommon = true;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_filterlist__["c" /* getFilterArticleData */])("api1.0/spiders/", this.searchKey, page).then(function (res) {
                    var tempArr = [];
                    _this2.filterData = [];
                    if (res.data !== null) {
                        tempArr = res.data.data.detail;
                        if (tempArr.length > 0) {
                            _this2.isShowButton = true;
                        } else {
                            _this2.isShowButton = false;
                        }
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(tempArr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var item = _step.value;


                                var obj = {};
                                obj.title = item.article.title;
                                obj.gzh_name = item.article.gzh_name;
                                obj.url = item.article.url;
                                obj.abstract = item.article.abstract;
                                obj.imgs = item.article.imgs;
                                obj.isSave = false;

                                _this2.filterData.push(obj);
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
                }, function (err) {
                    _this.showMsg("搜索出错，请重试!");
                });
            }
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

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(337)(true);
// imports


// module
exports.push([module.i, ".el-select .el-input{width:110px}.pa-content{margin-top:20px}.block,.button-box{width:100%;margin:20px auto}.button-box{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around}.next-button{width:200px;display:inline-block}", "", {"version":3,"sources":["D:/Products/vueAdmin-template-master/src/views/table/index.vue"],"names":[],"mappings":"AACA,qBACE,WAAa,CACd,AACD,YACE,eAAiB,CAClB,AAKD,mBAHE,WAAY,AACZ,gBAAkB,CAcnB,AAZD,YAGE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AAC/B,6BAA8B,AAC1B,uBAAwB,AACpB,mBAAoB,AAC5B,yBAA0B,AACtB,4BAA8B,CACnC,AACD,aACE,YAAa,AACb,oBAAsB,CACvB","file":"index.vue","sourcesContent":["\n.el-select .el-input {\n  width: 110px;\n}\n.pa-content{\n  margin-top: 20px;\n}\n.block{\n  width: 100%;\n  margin: 20px auto;\n}\n.button-box{\n  width: 100%;\n  margin: 20px auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.next-button{\n  width: 200px;\n  display: inline-block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(878);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(338)("589331d0", content, true);

/***/ }),

/***/ 950:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-container"
  }, [_c('div', [_c('el-input', {
    attrs: {
      "placeholder": "请输入爬取内容或文章链接"
    },
    model: {
      value: (_vm.searchKey),
      callback: function($$v) {
        _vm.searchKey = $$v
      },
      expression: "searchKey"
    }
  }, [_c('el-button', {
    attrs: {
      "icon": "search"
    },
    on: {
      "click": function($event) {
        _vm.getFilterArticle()
      }
    },
    slot: "append"
  })], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowCommon),
      expression: "isShowCommon"
    }],
    staticClass: "pa-content"
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.filterData
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "爬取连接"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('a', {
          staticStyle: {
            "color": "red"
          },
          attrs: {
            "href": scope.row.url,
            "target": "_blank"
          }
        }, [_vm._v(_vm._s(scope.row.url))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "爬取标题"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.title))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "爬取摘要"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.abstract))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (!_vm.isSave),
            expression: "!isSave"
          }],
          attrs: {
            "size": "small",
            "type": "success"
          },
          on: {
            "click": function($event) {
              _vm.saveInDataBase(scope.row)
            }
          }
        }, [_vm._v("保存数据库")]), _vm._v(" "), _c('el-button', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (_vm.isSave),
            expression: "isSave"
          }],
          attrs: {
            "size": "small",
            "type": "success"
          }
        }, [_vm._v("已保存数据库")])]
      }
    }])
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "button-box"
  }, [_c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowButton),
      expression: "isShowButton"
    }],
    staticClass: "next-button",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.getBack()
      }
    }
  }, [_vm._v("上一页")]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowButton),
      expression: "isShowButton"
    }],
    staticClass: "next-button",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.getNext()
      }
    }
  }, [_vm._v("下一页")])], 1)])
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=13.b1219a8a3012ecc38be5.js.map