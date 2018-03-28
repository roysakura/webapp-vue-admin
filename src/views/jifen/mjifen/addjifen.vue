<template>
    <div class="add-tag-layout">
        <el-input v-model="input" placeholder="请输入积分规则名称" class="tag-input"></el-input>
        <el-input v-model="jifenNum" placeholder="请输入积分数" class="tag-input"></el-input>
        <div class="tag-input">
            <span>是否每天限制</span>
            <el-checkbox v-model="checked" @change="change">是</el-checkbox>
        </div>
        <el-input v-model="limitNum" placeholder="请输入限制数" class="tag-input" v-show="checked"></el-input>
        <el-button type="primary" class="btn-add-tag" @click="addTag()">添加</el-button>
    </div>
</template>
<script>
    import { Message } from 'element-ui';
    import {addJiFen} from '../../../api/jifen'
    export default {
        data() {
            return {
                input: '',
                jifenNum:"",
                checked:true,
                limitNum:"",
            }
        },
        methods:{
            addTag(){
                if(this.input === ""){
                    this.showMsg("请输入积分规则名",false);
                    return;
                }
                if(this.jifenNum === ""){
                    this.showMsg("请输入积分数",false);
                    return;
                }
                addJiFen(this.input,this.jifenNum,this.checked,this.limitNum).then((res)=>{
                    this.showMsg("添加成功",true);
                    const _this = this;
                    setTimeout(function () {
                        _this.$router.go(0);
                    },500)
                },(err)=>{
                    this.showMsg("添加失败",false);
                });
            },
            change(){
             if(!this.checked){
                 this.limitNum = 0;
             }
            },
            showMsg(str,flag){
                Message({
                    message: str,
                    type: flag ? 'success':"warning",
                    duration: 5 * 1000
                });
            }
        }
    }
</script>
<style scoped>
    .add-tag-layout{
        width: 330px;
        border: 1px dashed #ccc;
        margin: 0 auto;
    }
    .tag-input,.btn-add-tag{
        width: 300px;
        display: block;
        margin: 20px auto;
    }
</style>