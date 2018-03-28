/**
 * Created by THINK on 2017/8/1.
 */
import axios from 'axios';
export function upload(name,tags,credit,uploader,file,abstract) {
    return axios.post('api1.0/files/',{
        file_name:name,
        tags:tags,
        credit:credit,
        uploader:uploader,
        files:file,
        abstract:abstract,
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
export function editDatum(name,tags,credit,uploader,file,abstract) {
    return axios.put('api1.0/files/',{
        file_name:name,
        tags:tags,
        credit:credit,
        uploader:uploader,
        files:file,
        abstract:abstract,
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
/**
 * 获取资料库列表
 * @returns {*}
 */
export function getDatum(page,pageSize) {
    return axios.get('api1.0/files/',{
        params:{
            page:page,
            page_size:pageSize
        }
    }).then((res)=>{
       return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    });
}
/**
 * 搜索资料库
 * @param url
 * @param page
 * @param pageSize
 * @returns {*}
 */
export function searchDatumInfo(url,page,pageSize) {
    return axios.get(url,{
        params:{
            page:page,
            page_size:pageSize,
        }
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
/**
 * 删除资料库
 * @param id
 * @returns {*}
 */
export function delDatumById(id) {
    return axios.delete(`/api1.0/files/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    });
}

export function getDatumById(id) {
    return axios.get(`/api1.0/files/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    });
}