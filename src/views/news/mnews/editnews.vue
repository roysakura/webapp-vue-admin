<template>
    <div class="send-news-layout">
        <div class="news-title-layout">
            <el-input v-model="title" placeholder="请输入标题"></el-input>
        </div>
        <div class="news-title-layout">
            <el-input v-model="abstract" placeholder="请输入新闻摘要"></el-input>
        </div>
        <div class="news-title-layout">
            <el-input v-model="come" placeholder="请输入新闻来源"></el-input>
        </div>
        <div class="news-title-layout news-tags">
            <span class="tag-text">选择标签:</span>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedRoles" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="role in tags" :label="role" :key="role">{{role}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="news-title-layout news-tags">
            <span class="tag-text">选择新闻类别:</span>
            <div style="margin: 15px 0;"></div>
            <el-radio-group v-model="checkedCategory" @change="handleCategoryCitiesChange">
                <el-radio  v-for="role in category" :label="role.id" :key="role">{{role.name}}</el-radio>
            </el-radio-group>
        </div>
        <span style="margin-bottom: 0;font-size: 20px">选择新闻首图</span>
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
        <el-button type="success" @click="getContent()" class="pub-btn">发表</el-button>
    </div>
</template>

<script>
    import E from 'wangeditor'
    import {getTags} from '../../../api/news'
    import {sendNewsInfo} from '../../../api/news'
    import {getNewsDetail} from '../../../api/news'
    import {getCategory} from '../../../api/news'
    import {edtiNewsById} from '../../../api/news'
    import lrz from 'lrz';
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
                abstract:"",
                come:"",
                editorContent: '<span>请输入要发布的新闻内容</span>',
                tags:[],
                checkAll:true,
                checkedRoles:[],
                isIndeterminate:false,
                id:-1,
                category:[],
                checkCategoryAll:true,
                checkedCategory:-1,
                isIndeterminatec:false,
                allTags:[],
                allCate:[],
                customTag:"",
            }
        },
        mounted() {
            this.getTagInfos();
            this.getParams();
            this.getCateInfos();
        },
        watch: {
            imgUrls: 'toggleAddPic',
            $route(to){
                //对传递的id进行验证(防止篡改)
                let reg=/editnews\/\d+/;
                if(reg.test(to.path)){
                    let newsId=this.$route.params.newsId || 0;
                    this.fetchData(newsId);
                }
            }
        },
        methods: {
            getCateInfos(){
                getCategory().then((res)=>{
//                    let tempCate = [];
                    if(res.status === 200){
//                        tempCate = res.data.data.detail;
                     /*   for(let item of tempCate){
                            this.category.push(item.name);
                        }*/
                        this.allCate = res.data.data.detail;
                        this.category = res.data.data.detail;
                    }
                },(err)=>{

                });
            },
            /**
             * 获取参数，然后去进行修改
             * */
            getParams(){
                this.fetchData(this.$route.params.newsId);
            },
            /**
             * 通过新闻的id去获取对应新闻的详情信息
             * */
            fetchData(newsId){
                getNewsDetail(newsId).then((res)=>{
                    let tempTags = [];
                    if(res.status === 200){
                        this.title = res.data.data.detail.title;
                        this.imgUrls = res.data.data.detail.image;
                        tempTags = res.data.data.detail.tags;
                        this.come = res.data.data.detail.source;
                        this.abstract = res.data.data.detail.abstract;
                        this.checkedCategory = res.data.data.detail.category;
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
            handleCategoryCitiesChange(value) {
                if(value){
                    let checkedCount = value.length;
                    this.checkCategoryAll = checkedCount === this.category.length;
                    this.isIndeterminatec = checkedCount > 0 && checkedCount < this.category.length;
                }

            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.tags.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.tags.length;
            },
            /**
             * 得到编辑的内容
             */
            getContent() {
                const _this = this;
                if(this.title===''){
                    this.showWMsg("新闻标题不能为空",false);
                    return;
                }
                if(this.checkedRoles.length<=0){
                    this.showWMsg("选择对应的标签",false);
                    return;
                }
                if(this.abstract === null || this.abstract === "null"){
                    this.abstract = "";
                }
                //限制头图不能为空
                if(this.imgUrls===''|| this.imgUrls===null){
                    this.showWMsg("请选择新闻的首图",false);
                    return;
                }
                if(this.checkedCategory.length<=0){
                    this.showWMsg("选择对应的类别名",false);
                    return;
                }
                if(this.editorContent===''){
                    this.showWMsg("新闻内容不能为空",false);
                    return;
                }

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

                edtiNewsById(this.$route.params.newsId,this.title,this.editorContent,tTgas,0,this.imgUrls,this.checkedCategory,this.abstract,this.come).then((res)=>{
                    this.showWMsg("修改成功!",true);
                    setTimeout(()=>{
                        _this.$router.push({path: '/news/index', replace: true});
                    },500)
                },(err)=>{
                    this.fetchData(this.$route.params.newsId);
                    this.showWMsg("修改失败，请重试!",false);
                });
            },

            /*
            * show msg in toast way
            * **/
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
                var article_box=$("#editorElem").contents().find("body #js_article").prevObject[1];
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