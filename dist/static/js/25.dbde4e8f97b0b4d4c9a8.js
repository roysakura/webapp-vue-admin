webpackJsonp([25],{

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(943)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(870),
  /* template */
  __webpack_require__(982),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e5acc5a2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 474:
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

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_tag__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            input: ''
        };
    },
    mounted: function mounted() {
        this.getTagById(this.$route.params.tagId);
    },

    methods: {
        getTagById: function getTagById(id) {
            var _this2 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_tag__["a" /* getTagById */])(id).then(function (res) {
                _this2.input = res.data.data.detail.name;
            }, function (err) {});
        },
        addTag: function addTag() {
            var _this3 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_tag__["b" /* editTag */])(this.$route.params.tagId, this.input).then(function (res) {
                if (res.status === 200) {
                    _this3.showMsg("修改成功", true);
                    var _this = _this3;
                    setTimeout(function () {
                        _this.$router.push({ path: '/tag/index', replace: true });
                    }, 500);
                }
            }, function (err) {
                _this3.showMsg("修改失败", false);
            });
        },
        showMsg: function showMsg(str, flag) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Message"])({
                message: str,
                type: flag ? 'success' : 'warning',
                duration: 5 * 1000
            });
        }
    }
});

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(337)(true);
// imports


// module
exports.push([module.i, ".add-tag-layout[data-v-e5acc5a2]{width:330px;border:1px dashed #ccc;margin:0 auto}.btn-add-tag[data-v-e5acc5a2],.tag-input[data-v-e5acc5a2]{width:300px;display:block;margin:20px auto}", "", {"version":3,"sources":["D:/Products/vueAdmin-template-master/src/views/tag/mtag/edittag.vue"],"names":[],"mappings":"AACA,iCACI,YAAa,AACb,uBAAwB,AACxB,aAAe,CAClB,AACD,0DACI,YAAa,AACb,cAAe,AACf,gBAAkB,CACrB","file":"edittag.vue","sourcesContent":["\n.add-tag-layout[data-v-e5acc5a2]{\n    width: 330px;\n    border: 1px dashed #ccc;\n    margin: 0 auto;\n}\n.tag-input[data-v-e5acc5a2],.btn-add-tag[data-v-e5acc5a2]{\n    width: 300px;\n    display: block;\n    margin: 20px auto;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(909);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(338)("e2abc772", content, true);

/***/ }),

/***/ 982:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "add-tag-layout"
  }, [_c('el-input', {
    staticClass: "tag-input",
    attrs: {
      "placeholder": "请输入标签名"
    },
    model: {
      value: (_vm.input),
      callback: function($$v) {
        _vm.input = $$v
      },
      expression: "input"
    }
  }), _vm._v(" "), _c('el-button', {
    staticClass: "btn-add-tag",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.addTag()
      }
    }
  }, [_vm._v("修改")])], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=25.dbde4e8f97b0b4d4c9a8.js.map