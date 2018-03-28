/**
 * Created by THINK on 2017/7/28.
 */
import axios from 'axios'
/**
 * 获取所有权限
 * @returns {*}
 */
export function getPermissionList() {
    return axios.get('/api1.0/permissions/').then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
/**
 * 根据id删除权限
 * @param id
 * @returns {*}
 */
export function deletePerById(id) {
    return axios.delete(`/api1.0/permissions/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    });
}
