/**
 * Created by THINK on 2017/11/16.
 */
import axios from 'axios';
/**
 * 审核名片
 * @param page
 * @param pageSize
 * @returns {*}
 */
export function getReportInfo(page,pageSize) {
    return axios.get("/quote/procurement/report/results/",{
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

export function submitCheckReport(id) {
    return axios.put(`/quote/procurement/report/${id}/results/`,{
        dealed:true
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}