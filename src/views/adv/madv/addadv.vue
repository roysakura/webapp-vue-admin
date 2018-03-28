<template>
    <div class="adv-add-layout">
        <div class="add-adv-info">添加广告</div>
        <div class="adv-add-content">
            <el-input v-model="adName" placeholder="请输入公司名称" class="adv-input"></el-input>
            <el-input v-model="adAdvName" placeholder="请输入广告名称" class="adv-input"></el-input>
            <el-input v-model="adDay" placeholder="请输入广告有效期多少天" class="adv-input"></el-input>
            <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入描述内容"
                    v-model="adContent" class="adv-input">
            </el-input>
            <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入广告所在位置：如behind、top、middle"
                    v-model="adAddress" class="adv-input">
            </el-input>
            <el-input v-model="adLink" placeholder="请输入广告连接" class="adv-input"></el-input>
            <dropzone ref="file" :language="langObj" id="myVueDropzone" v-on:vdropzone-sending="dropzoneSending" :url="url">
            </dropzone>

        </div>
        <el-button type="primary" class="btn-add-adv" @click="add()">添加</el-button>
    </div>
</template>
<script>
    import Dropzone from 'vue2-dropzone'
    import {addAdv} from '../../../api/adv'
    export default{
        data(){
            return{
                langObj: {dictDefaultMessage: '选择或拖拽要上传的图片'},
                adContent:"",
                adName:"",
                adTitle:"",
                adPicAddress:"",
                adDay:"",
                adLink:"",
                adAdvName:"",
                url:"http://192.168.0.200:8080",
                file:null,
                adAddress:""
            }
        },
        components: {
            Dropzone
        },
        methods: {
            'dropzoneSending': function (files,xhr,formData) {
                $(".adv-add-content .dropzone .dz-preview .dz-error-mark").hide();
                $(".adv-add-content .dropzone .dz-preview .dz-error-message").hide();
                const _this = this;
                this.$refs.file.setOption('url', this.url);
                this.name = files.name;
                const size = files.size;
                var reader = new FileReader();
                reader.readAsDataURL(files);
                reader.onload = function (e) {
                    _this.file = e.target.result;
                }
            },
            add(){
                if(this.adContent === ""){
                    this.showMsg("广告内容不能为空!",false);
                    return;
                }
                if(this.adName === ""){
                    this.showMsg("广告公司名称不能为空!",false);
                    return;
                }

                if(this.adLink === ""){
                    this.showMsg("广告连接不能为空!",false);
                    return;
                }
                if(this.adDay === ""){
                    this.showMsg("广告有效期不能为空!",false);
                    return;
                }
                if(this.adAdvName === ""){
                    this.showMsg("广告名称不能为空!",false);
                    return;
                }
                if(this.file === "" || this.file === null){
                    this.showMsg("广告图片不能为空!",false);
                    return;
                }
                if(this.adAddress === "" || this.adAddress === null){
                    this.showMsg("广告位置不能为空!",false);
                    return;
                }
                const r = /^[0-9]*[1-9][0-9]*$/
                if (!r.test(parseInt(this.adDay)))
                {
                    this.showMsg("输入的不是数字!",false);
                    return;
                }
                let isnext = false;
                const filetypes =[".jpg",".png",".jpeg",".jpe",".gif"];
                let fileend = this.name.substring(this.name.lastIndexOf("."));
                if(filetypes && filetypes.length>0){
                    for(let i =0; i<filetypes.length;i++){
                        if(filetypes[i]===fileend){
                            isnext = true;
                            break;
                        }
                    }
                }
                if(!isnext){
                    this.showMsg("只支持图片格式!",false);
                    return;
                }
                const _this = this;
                addAdv(this.adAdvName,this.adContent,true,this.adName,this.adLink,this.file,this.adDay,this.adAddress).then((res)=>{
                    this.showMsg("添加成功!",true);
                    setTimeout(function () {
                        _this.$router.go(0);
                    },500)
                },(err)=>{
                    this.showMsg("添加失败!",false);
                });
            },
            showMsg(str,flag){
                this.$message({
                    type:flag ? "success":"warning",
                    message:str
                })
            },
        }
    }
</script>
<style scoped>
    .adv-add-layout{
        padding: 20px;
    }
    .adv-add-layout>.add-adv-info{
        font-size: 20px;
        box-shadow: 2px 2px 6px #ccc;
        padding-left: 10px;
    }
    .adv-add-layout> .adv-add-content{
        margin-top: 20px;
        padding: 4px;
        border: 1px dashed #ccc;
    }
    .adv-add-content >.adv-input{
        margin-top: 10px;
    }
    #myVueDropzone{
        margin-top: 10px;
    }
    .btn-add-adv{
        width: 300px;
        margin: 20px auto;
        display: block;
    }
</style>