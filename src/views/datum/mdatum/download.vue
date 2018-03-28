<template>
    <div class="datum-upload-layout">
        <h2 class="upload-title">编辑资料</h2>
        <el-input v-model="abstract" placeholder="请输入资料描述" style="margin-bottom: 12px" type="textarea"  :autosize="{ minRows: 2, maxRows: 4}"></el-input>
        <el-input v-model="jifenNum" placeholder="该文件积分数" style="margin-bottom: 12px;margin-top: 12px" ></el-input>
        <div class="news-title-layout news-tags">
            <span class="tag-text">选择标签:</span>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedRoles" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="role in tags" :label="role" :key="role">{{role}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="tip-info-conatiner">
            <span class="tip-info-text" style="color: red">
                注：如果不需要重新选择文件，则不用选择文件进行上传
            </span>
        </div>
        <dropzone ref="file" :language="langObj" id="myVueDropzone" v-on:vdropzone-sending="dropzoneSending" :url="url" :maxFileSizeInMB="1024">
            <!-- Optional parameters if any! -->
            <!--<input type="hidden" name="token" value="xxx">-->
        </dropzone>
        <el-button type="success" v-on:click="add" class="pub-btn"
                   :element-loading-text="uploadText" v-loading.fullscreen.lock="loading">上传</el-button>
    </div>
</template>
<script>
    import Dropzone from 'vue2-dropzone'
    import Base64 from 'js-base64'
    import {getTags} from '../../../api/news'
    import {editDatum} from '../../../api/datum'
    import {getDatumById} from '../../../api/datum'
    export default{
        data(){
            return{
                langObj: {dictDefaultMessage: '选择或拖拽要上传的文件'},
                tags:[],
                checkedRoles:[],
                isIndeterminate:false,
                checkAll:true,
                //下载的连接地址:url
                url:"http://192.168.0.200:8080/api1.0/uploaders/",
                name:"",
                file:null,
                abstract:"",
                uploadText:"上传中...",
                loading:false,
                jifenNum:0,
            }
        },
        components: {
            Dropzone
        },
        mounted(){
            this.$nextTick(function () {
//                this.getTagInfos();
                this.getTagInfos();
                this.fetchData(this.$route.params.datumId);
            })
        },
        watch:{
            $route(to){
                //对传递的id进行验证(防止篡改)
                let reg=/download\/\d+/;
                if(reg.test(to.path)){
                    let datumId=this.$route.params.datumId || 0;
                    this.getTagInfos();
                    this.fetchData(datumId);
                }
            }
        },
        methods: {
            /**
             * 获取标签的信息
             * */
            getTagInfos(){
                getTags().then((res)=>{
                    let temTags = [];
                    if(res.status === 200){
                        temTags = res.data.data.detail;
                        this.allTags =  res.data.data.detail;
                        for(let tag of temTags){
                            this.tags.push(tag.name);
                        }
                    }
                },(err)=>{

                });
            },
            fetchData(datumId){
                const _this = this;

                getDatumById(datumId).then((res)=>{
                    let tempTags = [];
                    _this.abstract = res.data.data.detail.abstract;
                    _this.jifenNum = res.data.data.detail.credit;
                    tempTags = res.data.data.detail.tags;
                    _this.name = res.data.data.detail.file_name;
                    _this.checkedCategory = res.data.data.detail.category;
                    for(let tag of tempTags){
                        _this.checkedRoles.push(tag.name);
                    }
                    console.log("获取到某篇的资料库信息是:",res.data.data.detail);
                },(err)=>{
                    console.log("获取到对应资料库信息失败:",err);
                });
            },
            handleCheckAllChange(event) {
                this.checkedRoles = event.target.checked ? this.tags : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.tags.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.tags.length;
            },
            getTagInfos(){
                getTags().then((res)=>{
                    let temTags = [];
                    if(res.status === 200){
                        temTags = res.data.data.detail;
                        this.allTags =  res.data.data.detail;
                        for(let tag of temTags){
                            this.tags.push(tag.name);
                        }
                    }
                },(err)=>{

                });
            },
            'dropzoneSending': function (files,xhr,formData) {
//                var Base64 = require('js-base64').Base64;
                $(".datum-upload-layout .dropzone .dz-preview .dz-error-mark").hide();
                $(".datum-upload-layout .dropzone .dz-preview .dz-error-message").hide();
                const _this = this;
                this.$refs.file.setOption('url', this.url);
                const size = files.size;
                this.name = files.name;
                var reader = new FileReader();
                reader.readAsDataURL(files);
                reader.onload = function(e) {
                    _this.file = e.target.result;
                }

            },
            showMsg(str,flag){
                this.$message({
                    type:flag ? "success":"warning",
                    message:str
                })
            },
            add(){
                if(this.abstract === ''){
                    this.showMsg("请输入文件摘要内容...",false);
                    return;
                }
                if(this.checkedRoles.length<=0){
                    this.showMsg("请选择文件关联的标签名...",false);
                    return;
                }
               /* if(this.file===null){
                    this.showMsg("请选择要上传的文件",false);
                    return;
                }*/
               /* let isnext = false;
                //定义可以上传的文件的类型
                const filetypes =[".doc",".ppt",".xls",".pdf",".docx",".xlsx"];
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
                    this.showMsg("该类型文件暂不支持上传!",false);
                    return;
                }*/
                let tTgas = [];
                for(let i = 0;i<this.allTags.length;i++){
                    for(let j = 0;j<this.checkedRoles.length;j++){
                        if(this.allTags[i].name === this.checkedRoles[j]){
                            tTgas.push(this.allTags[i]);
                        }
                    }
                }
                console.log("this.name,this.checkedRoles,this.jifenNum:",tTgas,this.checkedRoles,this.jifenNum);
                this.loading = true;
                editDatum(this.name,tTgas,this.jifenNum,localStorage.getItem("uId"),this.file,this.abstract).then((res)=>{
                    this.uploadText = "上传成功...";
                    this.loading = false;
                    const _this =this;
                    setTimeout(function () {
                        _this.this.showMsg("文件上传成功!",true);
                    },1000);
                    setTimeout(()=>{
                        _this.$router.push({path: '/datum/index', replace: true});
                    },1500)
                },(err)=>{
                    if(err.error_code ===1006){
                        this.uploadText = "该文件已存在...";
                        this.showMsg("该文件已存在!",false);
                    }else{
                        this.uploadText = "上传失败...";
                    }
                    this.loading = false;
                });

            }
        }
    }
</script>
<style scoped>
    .datum-upload-layout{
        padding: 20px;
    }
    .upload-title{
        text-align: center;
        color: #20A0FF;
    }

    .news-title-layout{
        margin-bottom: 20px;
    }
    .news-tags{
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 2px 2px 2px #cccccc;
        padding: 0 20px 20px 20px;

    }
    .news-tags .tag-text{
        display: block;
        line-height: 20px;
        margin-bottom: 10px;
        margin-top: 10px;
        font-weight: 500;
    }
    .pub-btn{
        width: 200px;
        margin: 20px auto;
        display: block;
    }
</style>