/**
 * Created by THINK on 2017/7/3.
 * 日志工具类：开发阶段将flag设置为true(可以看见log),上线后将flag设置为false(看不见log)
 * @author:darkCode
 * @description:it is a logcat tool,you can use it see all logs you want to see conveniently when developing,and you can hide all logs by set the value of flag is false in this instance when producting
 */
let logUtil = {
  flag:true,
  printLog(...items){
    if(this.flag){
      console.log(items);
    }
  }
}
export default logUtil
