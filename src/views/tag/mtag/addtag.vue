<template>
    <div class="add-tag-layout">
        <el-input v-model="input" placeholder="请输入标签名" class="tag-input"></el-input>
        <el-button type="primary" class="btn-add-tag" @click="addTag()">添加</el-button>
    </div>
</template>
<script>
    import {addTag} from '../../../api/tag'
    import { Message } from 'element-ui';
    export default {
        data() {
            return {
                input: ''
            }
        },
        methods:{
            addTag(){
                addTag(this.input).then((res)=>{
                    if(res.status === 200){
                        this.showMsg("添加成功");
                        this.input='';
                    }
                },(err)=>{
                    this.showMsg("添加失败");
                });
            },
            showMsg(str){
                Message({
                    message: str,
                    type: 'success',
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