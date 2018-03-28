<template>
    <div class="send-news-layout">
        <div class="news-title-layout">
            <el-input v-model="title" placeholder="请输入标题"></el-input>
        </div>
        <div class="news-title-layout news-tags">
            <span class="tag-text">选择标签:</span>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedRoles" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="role in tags" :label="role" :key="role">{{role}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <span style="margin-bottom: 0;font-size: 20px">选择文章首图</span>
        <section class="avatar-main">
            <div class="avatar-img">
                <input type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange"  style="display: none;">
                <ul class="list-ul" v-show="!isPhoto" style="list-style: none">
                    <li class="list-li">
                        <img :src="imgUrls" class="avatar-i">
                    </li>
                </ul>
            </div>
            <div class="avatar-choice">
                <button class="choice-xiangce" @click="addPic()">选择选择图片</button>
            </div>
        </section>
        <div id="editorElem" style="text-align:left;margin-top: 12px"></div>
        <el-button type="success" v-on:click="getContent" v-model="editorContent" class="pub-btn">发表</el-button>
    </div>
</template>

<script>
    import E from 'wangeditor'
    import {getTags} from '../../../api/news'
    import {edtiTieZiById} from '../../../api/news'
    import {getNewsDetail} from '../../../api/news'
    import lrz from 'lrz';
//    import scriptFilter from '../../../utils/filterScript'
    export default{
        data(){
            return {
                imgUrls: '',
                urlArr: [],
                isPhoto: true,
                btnTitle: '',
                isModify: false,
                previewImg:'',
                isPreview: false,
                title:'',
                editorContent: '<h3>请输入要发布的信息内容</h3>',
                tags:[],
                checkAll:true,
                checkedRoles:[],
                isIndeterminate:false,
                allTags:[],
            }
        },
        mounted() {
            this.getTagInfos();
            this.getParams();
        },
        watch: {
            imgUrls: 'toggleAddPic',
            $route(to){
                //对传递的id进行验证(防止篡改)
                let reg=/edittiezi\/\d+/;
                if(reg.test(to.path)){
                    let newsId=this.$route.params.tieId || 0;
                    this.fetchData(newsId);
                }
            }
        },
        methods: {
            getParams(){
                this.fetchData(this.$route.params.tieId);
            },
            fetchData(tieId){
                getNewsDetail(tieId).then((res)=>{
                    let tempTags = [];
                    if(res.status === 200){
                        this.title = res.data.data.detail.title;
                        this.imgUrls = res.data.data.detail.image;
                        tempTags = res.data.data.detail.tags;
                        for(let tag of tempTags){
                            this.checkedRoles.push(tag.name);
                        }
                        this.editorContent = res.data.data.detail.body;
                        this.initEditor();
                    }
                },(err)=>{
                });
            },
            toggleAddPic(){
                let vm = this;
                if(vm.imgUrls!==null || vm.imgUrls!==''){
                    if(vm.imgUrls.length >= 1) {
                        vm.isPhoto = false;
                    } else {
                        vm.isPhoto = true;
                    }
                }

            },
            /**
             *  选择相册或者拍照
             * */
            addPic(){
                $('input[type=file]').trigger('click');
                return false;
            },
            /**
             * 重新选择图片,将之前的进行覆盖操作
             * */
            onFileChange(e){
                const files = e.target.files || e.dataTransfer.files;
                if(!files.length) return;
                this.createImage(files, e);
            },
            /***
             * 创建用户头像并进行压缩处理
             * */
            createImage(file,e){
                let vm = this;
                /**
                 * rst:用于对图片进行压缩，获取图片相关信息（图片大小、文件名、类型等）的对象
                 * */
                lrz(file[0], { width: 750 }).then(function(rst) {
                    vm.imgUrls = rst.base64;
                    /* vm.saveImage(vm.imgUrls);*/
                    /*  localStorage.removeItem('avatar');
                     localStorage.setItem('user-avatar',vm.imgUrls);
                     history.back(-1);*/
                    return rst;
                }).always(function() {
                    // 清空文件上传控件的值
                    e.target.value = null;
                });
            },
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
            handleCheckAllChange(event) {
                this.checkedRoles = event.target.checked ? this.tags : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.tags.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.tags.length;
            },
            /**
             * 得到编辑的内容
             */
            getContent: function () {
                const _this = this;
                if(this.title===''){
                    this.showWMsg("文章标题不能为空",false);
                    return;
                }
                if(this.checkedRoles.length<=0){
                    this.showWMsg("选择对应的标签",false);
                    return;
                }
                //限制选择文章头图
                if(this.imgUrls===''|| this.imgUrls===null){
                    this.showWMsg("请选择文章的首图",false);
                    return;
                }
                if(this.editorContent===''){
                    this.showWMsg("文章内容不能为空",false);
                    return;
                }
                console.log("当前帖子的头图是:",this.imgUrls);
                if(this.imgUrls.indexOf("http")>=0){
                    this.imgUrls = "";
                }
                let tTgas = [];
                for(let i = 0;i<this.allTags.length;i++){
                    for(let j = 0;j<this.checkedRoles.length;j++){
                        if(this.allTags[i].name === this.checkedRoles[j]){
                            tTgas.push(this.allTags[i]);
                        }
                    }
                }
                /**
                 * 发表帖子
                 */
                edtiTieZiById(this.$route.params.tieId,this.title,this.editorContent,tTgas,1,this.imgUrls).then((res)=>{
                    this.showWMsg("修改文章成功!",true);
                    setTimeout(()=>{
                        _this.$router.push({path: '/tiezi/index', replace: true});
                    },500)
                },(err)=>{
                    this.showWMsg("修改文章失败，请重试!",false);
                    this.fetchData(this.$route.params.tieId);
                });
            },
            showWMsg(str,flag){
                this.$message({
                    message: str,
                    type: flag?'success':"warning"
                });
            },
            /**
             * 初始化富文本框
             */
            initEditor(){
                const editor = new E('#editorElem');
                //显示上传图片
                editor.customConfig.uploadImgShowBase64 = true;
                //隐藏网络图片
                editor.customConfig.showLinkImg = false;
                editor.customConfig.onchange = (html) => {
                    this.editorContent = html
                };
                editor.create();
                editor.txt.html(this.editorContent);
            }
        },
    }
</script>
<style scoped>
    .send-news-layout{
        padding: 20px;
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

    .avatar-main{
        width: 100%;
        height: 100%;
        border: 1px dashed #ccc;
    }
    .avatar-main>.avatar-img{
        text-align: center;
    }
    .avatar-i{
        width: 500px;
        height: 200px;
        border: 1px solid #cccccc;
        margin-top: 8px;
    }
    .avatar-choice{
        width: 100%;
        /*height: 200px;*/
        padding: 10px;

    }
    .avatar-choice>.choice-xiangce{
        width: 100%;
        height: 40px;
        background: #20A0FF;
        font-size: 18px;
        color: #ffffff;
        border: none;
    }

</style>