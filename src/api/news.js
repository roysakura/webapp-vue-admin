/**
 * Created by THINK on 2017/7/31.
 */
import axios from 'axios';
/**
 * 获取标签的信息
 * @returns {*}
 */
export function getTags() {
    return axios.get('/api1.0/tags/').then((res)=>{
       return Promise.resolve(res);
    },(err)=>{
       return Promise.reject(err);
    });
}
/**
 * 发表新闻
 * @param title:新闻标题
 * @param content:新闻内容
 * @param tags:新闻标签
 * @param article_type:文章类型
 * @param image:新闻首图
 * @param category:新闻类别
 * @returns {*}
 */
export function sendNewsInfo(title,content,tags,article_type,image,category,come,abstract) {
    return axios.post("/api1.0/articles/",{
        title:title,
        body:content,
        tags:tags,
        article_type:article_type,//0表示新闻
        image:image,
        category:category,
        source:come,
        abstract:abstract
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    });
}
/**
 * 获取新闻数据
 * @param page:请求的页数
 * @param newsId:新闻的id
 * @param pageSize:每页请求多少条记录
 * @returns {*}
 */
export function getNews(page,pageSize) {
    return axios.get("/api1.0/articles/",{
        params:{
            type:0,
            page:page,
            page_size:pageSize,
            fields:"id,title,article_views_count,article_comments_count,created_at,image,tags,status,author,source,category_name"
        }
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function getNTieZi(page,pageSize) {
    return axios.get("/api1.0/articles/",{
        params:{
            type:1,
            page:page,
            page_size:pageSize,
        }
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function getSearchNews(url,page,pageSize) {
    return axios.get(url,{
        params:{
            type:0,
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
 * 通过类别去搜索新闻
 * @param url
 * @param page
 * @param pageSize
 * @returns {*}
 */
export function getSearchNewsByCategory(url,page,pageSize) {
    return axios.get(url,{
        params:{
            type:0,
            page:page,
            page_size:pageSize,
        }
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}
export function delNewsById(id) {
    return axios.delete(`/api1.0/articles/${id}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    });
}
/**
 * 获取新闻详情
 * @param newsId
 * @returns {*}
 */
export function getNewsDetail(newsId) {
    return axios.get("/api1.0/articles/"+`${newsId}/`).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
       return Promise.reject(err);
    });
}
/**
 * 编辑谋篇文章
 * @param id
 * @param title
 * @param content
 * @param tags
 * @param article_type
 * @param image
 * @returns {AxiosPromise}
 */
export function edtiNewsById(id,title,content,tags,article_type,image,caregory,abstract,source) {
    return axios.put(`/api1.0/articles/${id}/`,{
        title:title,
        body:content,
        tags:tags,
        article_type:article_type,//0表示新闻
        image:image,
        category:caregory,
        abstract:abstract,
        source:source
    })
}
export function getCategory() {
    // mWebView.loadUrl("javascript:showInfoFromApp('" + mCode +","+ termCode +","+ level  + "'+)");
    return axios.get('/api1.0/categorys/').then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}

export function edtiTieZiById(id,title,content,tags,article_type,image) {
    return axios.put(`/api1.0/articles/${id}/`,{
        title:title,
        body:content,
        tags:tags,
        article_type:article_type,//0表示新闻
        image:image
    })
}

export function shenHeNewsById(id,flag) {
    return axios.put(`/api1.0/articles/${id}/status/`,{
        status:flag
    });
}

// http://192.168.0.200:82/magnet/materialquotes/?quote_date=2016-10-21
export function getBaoJia(quote_date) {
    return axios.get(`/magnet/materialquotes/`,{
        params:{
            quote_date:quote_date
        }
    });
}