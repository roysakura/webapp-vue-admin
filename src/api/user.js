/**
 * Created by THINK on 2017/7/28.
 */
import axios from 'axios';
/*
    获取所有角色的信息
 */
export function getAllRoles() {
    return axios.get('/api1.0/roles/permissions/').then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
/**
 * 添加管理员
 * @param userInfo
 * @returns {*}
 */
export function addAdmin(member,mobile,personal_info,roles) {
    return axios.post('/api1.0/users/permissions/',{
        member:member,
        mobile:mobile,
        personal_info:personal_info,
        roles:roles,
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
/**
 * 获取所有管理员的信息
 * @returns {*}
 */
export function getAllAdminInfos() {
    return axios.get('/api1.0/users/permissions/').then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function delAdminById(id) {
    return axios.delete(`/api1.0/admins/${id}/`).then((res)=>{
       return Promise.resolve(res);
    },(err)=>{
       return Promise.reject(err);
    });
}
export function getAdminById(id) {
    return axios.get(`/api1.0/users/${id}/permissions/`).then((res)=>{
       return Promise.resolve(res);
    },(err)=>{
       return Promise.reject(err);
    });
}
/**
 * 通过管理id编辑管理信息
 * @param id
 * @param member
 * @param mobile
 * @param personal_info
 * @param roles
 * @returns {*}
 */
export function modifyAdminById(id,member,mobile,personal_info,roles) {
    return axios.put(`/api1.0/admins/${id}/`,{
        member:member,
        mobile:mobile,
        personal_info:personal_info,
        roles:roles,
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    });
}
/**
 * 查询满足条件的用户的信息
 * @param condition
 * @returns {*}
 */
export function searchUserInfo(condition) {
    return axios.get('/api1.0/users/permissions/').then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

/**
 * 禁用或者启用某个管理员
 * @param adminId
 * @param flag:禁用(false)或启用(true)的标志
 * @returns {*}
 */
export function enORdisAble(adminId,flag) {
    return axios.put(`/api1.0/admins/${adminId}/states/`,{
        is_active:flag
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}