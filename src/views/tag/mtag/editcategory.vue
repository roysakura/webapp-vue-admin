<template>
    <div class="add-tag-layout">
        <el-input v-model="input" placeholder="请输入类别名" class="tag-input"></el-input>
        <el-button type="primary" class="btn-add-tag" @click="addTag()">修改</el-button>
    </div>
</template>
<script>
    import {addCategory} from '../../../api/tag'
    import {getCateById} from '../../../api/tag'
    import {editCategory} from '../../../api/tag'
    import { Message } from 'element-ui';
    export default {
        data() {
            return {
                input: ''
            }
        },
        mounted(){
          this.getTById(this.$route.params.catId);
        },
        methods:{
            getTById(id){
                getCateById(id).then((res)=>{
                    this.input = res.data.data.detail.name;
                },(err)=>{

                });
            },
            addTag(){
                editCategory(this.$route.params.catId,this.input).then((res)=>{
                    if(res.status === 200){
                        this.showMsg("修改成功",true);
                        const _this = this;
                        setTimeout(function () {
//                                _this.$router.push({path: '/tag/mtag/category', replace: true});
                            window.history.go(-1);
                        },500)
                    }
                },(err)=>{
                    this.showMsg("修改失败",false);
                });
            },
            showMsg(str,flag){
                Message({
                    message: str,
                    type: flag ? 'success':'warning',
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