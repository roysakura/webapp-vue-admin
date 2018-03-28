/**
 * Created by THINK on 2017/8/4.
 */
import axios from 'axios';

export function addJiFen(credit_item_name,item_credit,credit_per_day,restrict_max_num) {
    return axios.post('/api1.0/credititems/',{
        credit_item_name:credit_item_name,
        credit_per_day:credit_per_day,
        item_credit:item_credit,
        restrict_max_num:restrict_max_num
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
/**
 * 获取积分列表信息
 * @returns {*}
 */
export function getJiFen() {
    return axios.get('/api1.0/credititems/').then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function delJiFenById(id) {
    return axios.delete(`/api1.0/credititems/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
export function getJiFenById(id) {
    return axios.get(`/api1.0/credititems/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function editJiFen(id,credit_item_name,item_credit,credit_per_day,restrict_max_num) {
    return axios.put(`/api1.0/credititems/${id}/`,{
        credit_item_name:credit_item_name,
        credit_per_day:credit_per_day,
        item_credit:item_credit,
        restrict_max_num:restrict_max_num
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}