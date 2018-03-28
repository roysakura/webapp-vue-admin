/**
 * Created by THINK on 2017/8/3.
 */
import axios from 'axios';
/**
 * 添加广告
 * @param ad_name
 * @param content
 * @param enable
 * @param company
 * @param ad_link
 * @param image
 * @param days
 * @returns {*}
 */
export function addAdv(ad_name,content,enable,company,ad_link,image,days,position) {
    return axios.post('/api1.0/ads/',{
        ad_name:ad_name,
        content:content,
        enable:enable,
        company:company,
        ad_link:ad_link,
        image:image,
        days:days,
        position:position
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
/**
 * 获取广告数据
 * @returns {*}
 */
export function getAdvs(page,pageSize) {
    return axios.get('/api1.0/ads/',{
        params:{
            page:page,
            page_size:pageSize,
        }
    }).then((res)=>{
       return Promise.resolve(res);
    },(err)=>{
       return Promise.reject(err);
    });
}

export function delAdvById(id) {
    return axios.delete(`/api1.0/ads/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    });
}

export function getAdvById(id) {
    return axios.get(`/api1.0/ads/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    });
}

export function editAdv(id,ad_name,content,enable,company,ad_link,image,days,position) {
    return axios.put(`/api1.0/ads/${id}/`,{
        ad_name:ad_name,
        content:content,
        enable:enable,
        company:company,
        ad_link:ad_link,
        image:image,
        days:days,
        position:position
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function searchAdv(title,company,start_date,end_date,page,pageSize) {
    return axios.get('/api1.0/ads/search/',{
        params:{
            title:title,
            company:company,
            start_date:start_date,
            end_date:end_date,
            page:page,
            page_size:pageSize,
        }
    })
}