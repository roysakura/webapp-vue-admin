/*
import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store';
import { getToken } from '@/utils/auth';
// 创建axios实例
axios.defaults.baseURL = process.env.BASE_API;
//设置请求的类型
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// request拦截器
axios.interceptors.request.use(config => {
  if (store.getters.token) {
      config.headers.Authorization = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
axios.interceptors.response.use(
  response => {
  /!**
  * code为非20000是抛错 可结合自己业务进行修改
  *!/
    const res = response.data;
    if (res.code !== 20000) {
      Message({
        message: "执行到这里了？",
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject(error);
    } else {
      return response.data;
    }
  },
  error => {
    console.log('err' + error);// for debug
    Message({
      message: "执行到这里了？",
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);
//导出axios
export default axios;
*/
