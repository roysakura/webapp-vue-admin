webpackJsonp([30],{

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(915)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(857),
  /* template */
  __webpack_require__(952),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-17113085",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 821:
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

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_jifen__ = __webpack_require__(821);





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            input: '',
            jifenNum: "",
            checked: true,
            limitNum: ""
        };
    },
    mounted: function mounted() {
        this.getJid();
    },

    methods: {
        getJid: function getJid() {
            this.getJData(this.$route.params.jId);
        },
        getJData: function getJData(id) {
            var _this2 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_jifen__["a" /* getJiFenById */])(id).then(function (res) {
                _this2.input = res.data.data.detail.credit_item_name;
                _this2.jifenNum = res.data.data.detail.item_credit;
                _this2.limitNum = res.data.data.detail.restrict_max_num;
                _this2.checked = res.data.data.detail.credit_per_day;
            }, function (err) {});
        },
        addTag: function addTag() {
            var _this3 = this;

            if (this.input === "") {
                this.showMsg("请输入积分规则名", false);
                return;
            }
            if (this.jifenNum === "") {
                this.showMsg("请输入积分数", false);
                return;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_jifen__["b" /* editJiFen */])(this.$route.params.jId, this.input, this.jifenNum, this.checked, this.limitNum).then(function (res) {
                _this3.showMsg("修改成功", true);
                var _this = _this3;
                setTimeout(function () {
                    _this.$router.push({ path: '/jifen/index', replace: true });
                }, 500);
            }, function (err) {
                _this3.showMsg("修改失败", false);
            });
        },
        change: function change() {
            if (!this.checked) {
                this.limitNum = 0;
            }
        },
        showMsg: function showMsg(str, flag) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_element_ui__["Message"])({
                message: str,
                type: flag ? 'success' : "warning",
                duration: 5 * 1000
            });
        }
    }
});

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(337)(true);
// imports


// module
exports.push([module.i, ".add-tag-layout[data-v-17113085]{width:330px;border:1px dashed #ccc;margin:0 auto}.btn-add-tag[data-v-17113085],.tag-input[data-v-17113085]{width:300px;display:block;margin:20px auto}", "", {"version":3,"sources":["D:/Products/vueAdmin-template-master/src/views/jifen/mjifen/editjifen.vue"],"names":[],"mappings":"AACA,iCACI,YAAa,AACb,uBAAwB,AACxB,aAAe,CAClB,AACD,0DACI,YAAa,AACb,cAAe,AACf,gBAAkB,CACrB","file":"editjifen.vue","sourcesContent":["\n.add-tag-layout[data-v-17113085]{\n    width: 330px;\n    border: 1px dashed #ccc;\n    margin: 0 auto;\n}\n.tag-input[data-v-17113085],.btn-add-tag[data-v-17113085]{\n    width: 300px;\n    display: block;\n    margin: 20px auto;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(881);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(338)("21e7b1a6", content, true);

/***/ }),

/***/ 952:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "add-tag-layout"
  }, [_c('el-input', {
    staticClass: "tag-input",
    attrs: {
      "placeholder": "请输入积分规则名称"
    },
    model: {
      value: (_vm.input),
      callback: function($$v) {
        _vm.input = $$v
      },
      expression: "input"
    }
  }), _vm._v(" "), _c('el-input', {
    staticClass: "tag-input",
    attrs: {
      "placeholder": "请输入积分数"
    },
    model: {
      value: (_vm.jifenNum),
      callback: function($$v) {
        _vm.jifenNum = $$v
      },
      expression: "jifenNum"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tag-input"
  }, [_c('span', [_vm._v("是否每天限制")]), _vm._v(" "), _c('el-checkbox', {
    on: {
      "change": _vm.change
    },
    model: {
      value: (_vm.checked),
      callback: function($$v) {
        _vm.checked = $$v
      },
      expression: "checked"
    }
  }, [_vm._v("是")])], 1), _vm._v(" "), _c('el-input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.checked),
      expression: "checked"
    }],
    staticClass: "tag-input",
    attrs: {
      "placeholder": "请输入限制数"
    },
    model: {
      value: (_vm.limitNum),
      callback: function($$v) {
        _vm.limitNum = $$v
      },
      expression: "limitNum"
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
//# sourceMappingURL=30.4ac931bcffccd3e98fb2.js.map