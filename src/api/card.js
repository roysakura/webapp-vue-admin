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
export function getCardInfo(page,pageSize) {
    return axios.get("/member/pc/verify/namecards/",{
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

export function submitCheckSuccess(id) {
    return axios.put(`/member/pc/verify/namecards/`,{
        id:id,
        verified:true
    }).then((res)=>{
        return Promise.resolve(res);
    },(err)=>{
        return Promise.reject(err);
    })
}