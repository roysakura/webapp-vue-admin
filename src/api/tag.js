/**
 * Created by THINK on 2017/7/31.
 */
import axios from 'axios';

export function addTag(name) {
    return axios.post('/api1.0/tags/',{
        name:name,
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
/**
 * 添加类别名
 * @param name
 * @returns {*}
 */
export function addCategory(name) {
    return axios.post('/api1.0/categorys/',{
        name:name,
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
/**
 * 删除tag
 * @param id
 * @returns {*}
 */
export function delTagById(id) {
    return axios.delete(`/api1.0/tags/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function getTagById(id) {
    return axios.get(`/api1.0/tags/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function editTag(id,name) {
    return axios.put(`/api1.0/tags/${id}/`,{
        name:name,
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function getCateById(id) {
    return axios.get(`/api1.0/categorys/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function delCategory(id) {
    return axios.delete(`/api1.0/categorys/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function editCategory(id,name) {
    return axios.put(`/api1.0/categorys/${id}/`,{
        name:name,
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}