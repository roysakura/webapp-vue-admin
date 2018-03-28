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
                <el-checkbox v-for="role in tags" :label="role" :key="role">{{role.name}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="news-title-layout news-tags">
            <span class="tag-text">选择新闻类别:</span>
            <div style="margin: 15px 0;"></div>
            <el-radio-group v-model="checkedCategory" @change="handleCategoryCitiesChange">
                <el-radio  v-for="role in category" :label="role" :key="role">{{role.name}}</el-radio>
            </el-radio-group>
        </div>
        <div class="news-title-layout">
            <span class="demonstration">请选择报价日期:</span>
            <el-date-picker
                    v-model="value2"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions1"
                    @change="changeDate()"
            >
            </el-date-picker>
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
        <el-button type="success" v-on:click="getContent" v-model="editorContent" class="pub-btn">发表</el-button>

    </div>
</template>

<script>
    import E from 'wangeditor'
    import {getTags} from '../../../api/news'
    import {getCategory} from '../../../api/news'
    import {sendNewsInfo} from '../../../api/news'
    import {getBaoJia} from '../../../api/news'
    import lrz from 'lrz';
    import domtoimage from 'dom-to-image';
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
                come:"",
                abstract:"",
                editorContent: '<span>请输入要发布的新闻内容</span>',
                tags:[],
                checkAll:true,
                checkedRoles:[],
                category:[],
                checkCategoryAll:true,
                checkedCategory:[],
                isIndeterminate:false,
                isIndeterminatec:false,
                value2:"",
                pickerOptions1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                baojia:[]
            }
        },
        mounted() {
            this.initEditor();
            this.getTagInfos();
            this.getCateInfos();
        },
        watch: {
            imgUrls: 'toggleAddPic'
        },
        methods: {
            changeDate(){
                const _this = this;
                let mDate = new Date(this.value2);
                let month = mDate.getMonth()+1<10? "0"+(mDate.getMonth()+1):mDate.getMonth()+1;
                this.value2 = `${mDate.getFullYear()}-${month}-${mDate.getDate()}`;
               let mBaoJias  = [
                ];


                getBaoJia(this.value2).then((res)=>{
                    console.log("获取到报价信息:",res);
                    mBaoJias = res.data.data.detail;
                    const len = mBaoJias.length;
                    if(len>0){
                        this.initBaoJia(mBaoJias,mDate);
                    }
                },(err)=>{
                    console.log("err:",err);
                });

            },
            initBaoJia(mBaoJias,mDate){
                var tmpl = mBaoJias => `
   <div style=" width: 100%;
            margin: 0 auto;
            border: 1px solid #000;" id="node">
        <div style="width: 100%;
            height: 40px;
            text-align: center;
            color: #fff;
            background: #091944;
            line-height: 40px;">
            ${mDate.getMonth()+1}月${mDate.getDate()}日稀土市场主流报价
        </div>
        <table style=" border: 1px solid #ccc;
            width: 100%;
            margin:0;
            padding:0;
            border-collapse: collapse;
            border-spacing: 0;
            margin: 0 auto;">
            <thead>
            <tr style=" border: 1px solid #ddd;
            padding: 5px;">
                <th style="padding: 10px;
            text-align: center;
            border: 1px solid #ddd; text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1px;">产品类别</th>
                <th style="padding: 10px;
            text-align: center;
            border: 1px solid #ddd; text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1px;">最(低-高)价</th>
                <th style="padding: 10px;
            text-align: center;
            border: 1px solid #ddd; text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1px;">平均价</th>
                <th style="padding: 10px;
            text-align: center;
            border: 1px solid #ddd; text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1px;">来源</th>
            </tr>
            </thead>
            <tbody>
    ${mBaoJias.map(baojia => `
   <tr style=" border: 1px solid #ddd;
            padding: 5px;font-size: 14px;">
                <td style="padding: 10px;
            text-align: center;
            border: 1px solid #ddd;" data-label="产品类别">${baojia.name}</td>
                <td style="padding: 10px;
            text-align: center;
            border: 1px solid #ddd;" data-label="最(低-高)价">${baojia.min_quote}-${baojia.max_quote}</td>
                <td style="padding: 10px;
            text-align: center;
            border: 1px solid #ddd;" data-label="平均价">${baojia.avg_quote}</td>
                <td style="padding: 10px;
            text-align: center;
            border: 1px solid #ddd;" data-label="来源">${baojia.source}</td>
    `).join('')}
     </tbody>
        </table>
    </div>
`;
                console.log(tmpl(mBaoJias));
                //追加上去
                this.editorContent += tmpl(mBaoJias);
                this.initEditor();
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
                   if(res.status === 200){
                       this.tags = res.data.data.detail;
                   }
                },(err)=>{

                });
            },
            /**
             * 获取类别信息
             * */
            getCateInfos(){
                getCategory().then((res)=>{
                   if(res.status === 200){
                       this.category = res.data.data.detail;
                   }
                },(err)=>{
//                        console.log("获取到的类别信息err:",err);
                });
            },
            /**
             * 全选操作角色
             * */
            handleCheckAllChange(event) {
                this.checkedRoles = event.target.checked ? this.tags : [];
                this.isIndeterminate = false;
            },
            /**
             * 过滤掉类别信息(只选择一个,单选)
             * */
            handleCategoryCitiesChange(value) {
                let checkedCount = value.length;
                this.checkCategoryAll = checkedCount === this.category.length;
                this.isIndeterminatec = checkedCount > 0 && checkedCount < this.category.length;
            },
            /**
             * 过滤标签信息(可以多个进行选择)
             * */
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
                   this.showWMsg("新闻标题不能为空",false);
                   return;
                }
                if(this.checkedRoles.length<=0){
                   this.showWMsg("选择对应的标签",false);
                   return;
                }
                if(this.checkedCategory.length<=0){
                   this.showWMsg("选择对应的类别名",false);
                   return;
                }
                if(this.imgUrls===''){
                    this.showWMsg("请选择新闻的首图",false);
                    return;
                }
                if(this.editorContent===''){
                    this.showWMsg("新闻内容不能为空",false);
                    return;
                }
                if(this.abstract === null || this.abstract === "null"){
                    this.abstract = "";
                }
                if(this.come===''){
                    this.showWMsg("新闻来源不能为空",false);
                    return;
                }
                sendNewsInfo(this.title,this.editorContent,this.checkedRoles,0,this.imgUrls,this.checkedCategory.id,this.come,this.abstract).then((res)=>{
                    this.showWMsg("发表新闻成功!",true);
                    setTimeout(()=>{
                        //刷新当前页面
                        _this.$router.go(0);
                    },500)
                },(err)=>{
                    this.showWMsg("发表新闻失败，请重试!",false);
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
                editor.create()
                //设置富文本框编辑器的编辑内容
                editor.txt.html(this.editorContent);
            }
        },
    }
</script>
<style>
    .el-date-picker{
        z-index: 999;
    }
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