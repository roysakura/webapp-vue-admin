/**
 * Created by THINK on 2017/8/8.
 */
import axios from 'axios'
/**
 * 获取评论的数据
 * @param page
 * @param pageSize
 * @returns {*}
 */
export function getCommentsInfo(page,pageSize) {
    return axios.get('/api1.0/comments/',{
        params:{
            page:page,
            page_size:pageSize
        }
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
/**
 * 删除评论
 * @param id
 * @returns {*}
 */
export function delComment(id) {
    return axios.delete(`/api1.0/comments/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function getSearchComments(url,page,pageSize) {
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