webpackJsonp([5],{

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(923)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(846),
  /* template */
  __webpack_require__(962),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e34d77f4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


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

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getAllRoles;
/* harmony export (immutable) */ __webpack_exports__["d"] = addAdmin;
/* harmony export (immutable) */ __webpack_exports__["f"] = getAllAdminInfos;
/* harmony export (immutable) */ __webpack_exports__["g"] = delAdminById;
/* harmony export (immutable) */ __webpack_exports__["a"] = getAdminById;
/* harmony export (immutable) */ __webpack_exports__["b"] = modifyAdminById;
/* unused harmony export searchUserInfo */
/* harmony export (immutable) */ __webpack_exports__["e"] = enORdisAble;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);




function getAllRoles() {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/roles/permissions/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function addAdmin(member, mobile, personal_info, roles) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api1.0/users/permissions/', {
        member: member,
        mobile: mobile,
        personal_info: personal_info,
        roles: roles
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function getAllAdminInfos() {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/users/permissions/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function delAdminById(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('/api1.0/admins/' + id + '/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}
function getAdminById(id) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/users/' + id + '/permissions/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function modifyAdminById(id, member, mobile, personal_info, roles) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/api1.0/admins/' + id + '/', {
        member: member,
        mobile: mobile,
        personal_info: personal_info,
        roles: roles
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function searchUserInfo(condition) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api1.0/users/permissions/').then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

function enORdisAble(adminId, flag) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/api1.0/admins/' + adminId + '/states/', {
        is_active: flag
    }).then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }, function (err) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
    });
}

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var logUtil = {
  flag: true,
  printLog: function printLog() {
    if (this.flag) {
      for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      console.log(items);
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (logUtil);

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isWscnEmail */
/* unused harmony export validateURL */
/* unused harmony export validateLowerCase */
/* unused harmony export validateUpperCase */
/* unused harmony export validatAlphabets */
/* harmony export (immutable) */ __webpack_exports__["a"] = validatePhoneNumber;

function isWscnEmail(str) {
  var reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@wallstreetcn\.com$/i;
  return reg.test(str.trim());
}

function validateURL(textval) {
  var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

function validateLowerCase(str) {
  var reg = /^[a-z]+$/;
  return reg.test(str);
}

function validateUpperCase(str) {
  var reg = /^[A-Z]+$/;
  return reg.test(str);
}

function validatAlphabets(str) {
  var reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

function validatePhoneNumber(str) {
  var reg = /^1[0-9]{10}$/;
  return reg.test(str);
}

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_user__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_validate__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_log__ = __webpack_require__(545);










/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            dialogVisible: false,
            username: '',
            password: null,
            phone: '',
            roles: [],
            checkAll: true,
            checkedRoles: [],
            isIndeterminate: true
        };
    },
    mounted: function mounted() {
        this.getRoles();
        this.getAdminId();
    },

    methods: {
        getAdminId: function getAdminId() {
            var _this2 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_user__["a" /* getAdminById */])(this.$route.params.adminId).then(function (res) {
                if (res.status === 200) {
                    _this2.username = res.data.data.detail.personal_info.name;
                    _this2.phone = res.data.data.detail.mobile;
                    sessionStorage.setItem("phone", res.data.data.detail.mobile);
                }
            }, function (err) {});
        },
        showMsg: function showMsg(str) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_element_ui__["Message"])({
                message: str,
                type: 'error',
                duration: 5 * 1000
            });
        },
        showSuccessMsg: function showSuccessMsg(str) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_element_ui__["Message"])({
                message: str,
                type: 'success',
                duration: 5 * 1000
            });
        },
        handleClose: function handleClose(done) {
            this.$confirm('确认关闭？').then(function (_) {
                done();
            }).catch(function (_) {});
        },
        add: function add() {
            var _this3 = this;

            if (this.username === '') {
                this.showMsg("用户名不能为空");
                return;
            }

            if (this.phone === '') {
                this.showMsg("手机号不能为空");
                return;
            }
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_validate__["a" /* validatePhoneNumber */])(this.phone)) {
                this.showMsg("手机号格式不正确");
                return;
            }
            if (this.checkedRoles.length <= 0) {
                this.showMsg("请赋予管理员权限");
                return;
            }
            var member = {};
            member.password = this.password;
            var tempRoles = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.checkedRoles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    var obj = {};
                    obj.id = item.id;
                    tempRoles.push(obj);
                    if (item.id === 3) {
                        member.is_superuser = true;
                    } else {
                        member.is_superuser = false;
                    }
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

            var phone = sessionStorage.getItem("phone");
            if (this.phone === phone) {
                this.phone = null;
            }
            var personal_info = {};
            personal_info.name = this.username;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_user__["b" /* modifyAdminById */])(this.$route.params.adminId, member, this.phone, personal_info, tempRoles).then(function (res) {
                if (res.data.code === 201) {
                    _this3.showSuccessMsg("修改管理员成功!");
                    var _this = _this3;
                    setTimeout(function () {
                        _this.$router.push({ path: '/inneruser/index', replace: true });
                    }, 500);
                }
                __WEBPACK_IMPORTED_MODULE_4__utils_log__["a" /* default */].printLog("成功:", res);
            }, function (err) {
                _this3.showMsg("修改管理信息失败");
            });
        },
        handleCheckAllChange: function handleCheckAllChange(event) {
            this.checkedRoles = event.target.checked ? this.roles : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange: function handleCheckedCitiesChange(value) {
            var checkedCount = value.length;
            this.checkAll = checkedCount === this.roles.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.roles.length;
        },
        getRoles: function getRoles() {
            var _this4 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_user__["c" /* getAllRoles */])().then(function (res) {
                if (res.data.code === 200) {
                    _this4.roles = res.data.data.detail;
                }
            }, function (err) {
                _this4.showMsg("获取角色信息失败");
            });
        }
    }

});

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(337)(true);
// imports


// module
exports.push([module.i, ".inner-user-add-layout[data-v-e34d77f4]{padding:20px}.top-list[data-v-e34d77f4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.inner-user-add-layout .user-input[data-v-e34d77f4]{float:left;display:block}.inner-user-add-layout .user-input[data-v-e34d77f4]:last-of-type{margin-left:10px}.permission-list[data-v-e34d77f4]{margin-top:20px;width:100%;box-shadow:2px 2px 6px #ccc;padding:0 10px 10px;border:1px solid #ccc}.add-ser-btn[data-v-e34d77f4]{width:400px;margin:20px auto;display:block}", "", {"version":3,"sources":["D:/Products/vueAdmin-template-master/src/views/inneruser/muser/edituser.vue"],"names":[],"mappings":"AACA,wCACI,YAAc,CACjB,AACD,2BACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,6BAA+B,CAC1C,AACD,oDACI,WAAY,AACZ,aAAe,CAClB,AACD,iEACI,gBAAkB,CACrB,AACD,kCACI,gBAAiB,AACjB,WAAY,AACZ,4BAA6B,AAC7B,oBAA0B,AAC1B,qBAAuB,CAC1B,AACD,8BACI,YAAa,AACb,iBAAkB,AAClB,aAAe,CAClB","file":"edituser.vue","sourcesContent":["\n.inner-user-add-layout[data-v-e34d77f4]{\n    padding: 20px;\n}\n.top-list[data-v-e34d77f4]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.inner-user-add-layout .user-input[data-v-e34d77f4]{\n    float: left;\n    display: block;\n}\n.inner-user-add-layout .user-input[data-v-e34d77f4]:last-of-type{\n    margin-left: 10px;\n}\n.permission-list[data-v-e34d77f4]{\n    margin-top: 20px;\n    width: 100%;\n    box-shadow: 2px 2px 6px #ccc;\n    padding: 0 10px 10px 10px;\n    border: 1px solid #ccc;\n}\n.add-ser-btn[data-v-e34d77f4]{\n    width: 400px;\n    margin: 20px auto;\n    display: block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(893);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(338)("1a43f982", content, true);

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "inner-user-add-layout"
  }, [_c('div', {
    staticClass: "top-list"
  }, [_c('el-input', {
    staticClass: "user-input",
    attrs: {
      "placeholder": "用户名"
    },
    model: {
      value: (_vm.username),
      callback: function($$v) {
        _vm.username = $$v
      },
      expression: "username"
    }
  }), _vm._v(" "), _c('el-input', {
    staticClass: "user-input",
    attrs: {
      "placeholder": "密码"
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "top-list",
    staticStyle: {
      "margin-top": "12px"
    }
  }, [_c('el-input', {
    staticClass: "user-input",
    attrs: {
      "placeholder": "手机号",
      "type": "tel"
    },
    model: {
      value: (_vm.phone),
      callback: function($$v) {
        _vm.phone = $$v
      },
      expression: "phone"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "permission-list"
  }, [_c('h3', [_vm._v("赋予角色")]), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "indeterminate": _vm.isIndeterminate
    },
    on: {
      "change": _vm.handleCheckAllChange
    },
    model: {
      value: (_vm.checkAll),
      callback: function($$v) {
        _vm.checkAll = $$v
      },
      expression: "checkAll"
    }
  }, [_vm._v("全选")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "15px 0"
    }
  }), _vm._v(" "), _c('el-checkbox-group', {
    on: {
      "change": _vm.handleCheckedCitiesChange
    },
    model: {
      value: (_vm.checkedRoles),
      callback: function($$v) {
        _vm.checkedRoles = $$v
      },
      expression: "checkedRoles"
    }
  }, _vm._l((_vm.roles), function(role) {
    return _c('el-checkbox', {
      key: role,
      attrs: {
        "label": role
      }
    }, [_vm._v(_vm._s(role.name))])
  }))], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "添加管理员",
      "visible": _vm.dialogVisible,
      "size": "tiny",
      "before-close": _vm.handleClose
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogVisible = $event
      }
    }
  }, [_c('span', [_vm._v("是否还继续添加管理员？")]), _vm._v(" "), _c('span', {
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
        _vm.dialogVisible = false
      }
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-button', {
    staticClass: "add-ser-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.add()
      }
    }
  }, [_vm._v("添加")])], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=5.cac2a6266491857dff75.js.map