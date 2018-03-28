/**
 * Created by THINK on 2017/8/30.
 * 抓取文章的网络操作
 */
import axios from 'axios';
/**
 * 获取爬虫爬下来的文章信息
 * @param url
 * @param page
 * @param pageSize
 * @returns {*}
 */
export function getFilterArticleData(url,content,page) {
    return axios.get(url,{
        params:{
            keyword:content,
            page:page,
        }
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
export function getFilterArticleUrlData(url,content) {
    return axios.post(url,{
       url:content
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
/**
 * 将数据保存到数据库
 * @param url
 * @param id
 * @returns {*}
 */
export function saveArticle(mRequestUrl,abstract,category,title,url,imgs) {
    return axios.post(mRequestUrl,{
        abstract:abstract,
        gzh_name:category,
        title:title,
        url:url,
        imgs:imgs,
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

