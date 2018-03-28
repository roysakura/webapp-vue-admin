// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import { Message } from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'normalize.css/normalize.css'
import '@/assets/iconfont/iconfont'
import IconSvg from '@/components/Icon-svg/index.vue'
import { getToken } from '@/utils/auth'
import axios from 'axios';
// import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Font from 'font-awesome-webpack';
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.component('icon-svg', IconSvg)
//登录需要的
const whiteList = ['/login'];
// http request 拦截器
axios.interceptors.request.use(
    config => {
        //配置token
        if (getToken()) {
            config.headers.Authorization = ` JWT ${getToken()}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    });

axios.defaults.baseURL = 'http://www.ecmagnet.com';
// axios.defaults.baseURL = 'http://dev.ectrend.com';
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {
    NProgress.start();
    if (getToken()) { //说明已经登录了
        if (to.path === '/login') {
            next({ path: '/' }); //跳转到首页
        } else {
            //判断当前用户是否已经拉取完user_info信息
            //说明还没有权限
            if (store.getters.roles.length === 0) {
                //获取用户信息(包括用户权限)
                store.dispatch('GetInfo').then(res => {
                    let roles = [];
                    if(res.data.code === 200){
                        roles = res.data.data.detail.roles;
                    }
                    const len = roles.length;
                    // console.log("roles:",res);
                    if(len===0){
                        Message({
                            message: "您当前无权限登录该系统",
                            type: 'error',
                            duration: 5 * 1000
                        });
                        return;
                    }
                    let rolesStr = '';
                    for(let i = 0;i<len;i++){
                        rolesStr+=roles[i].name+',';
                    }
                    const ros = rolesStr.split(',');
                    store.dispatch('GenerateRoutes', { ros }).then(() => {
                        //动态添加路由
                        router.addRoutes(store.getters.addRouters);
                        next({ ...to });
                    })
                })
            } else {
                next();
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login');
            NProgress.done();
        }
    }
});
//将axios对象挂载到Vue原型上去
/*Vue.prototype.$http = axios;
const _this = new Vue();*/
router.afterEach(() => {
    NProgress.done();
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
