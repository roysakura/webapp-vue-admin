<template>
    <div class="news">
        <div class="filter-container">
            <el-input id="sT" style="width: 300px;" class="filter-item" placeholder="评论人" v-model="searchTitle">
            </el-input >
           <el-input id="sContent" style="width: 300px;" class="filter-item" placeholder="评论内容" v-model="searchContent">
            </el-input >
<!--
            <el-button class="filter-item" type="primary" icon="search" @click="handleFilter">搜索</el-button>-->
        </div>
        <div class="news-list">
            <el-table :data="newsData"  border fit highlight-current-row style="width: 100%">

                <el-table-column align="center" label="序号" width="65">
                    <template scope="scope">
                        <span>{{scope.row.id}}</span>
                    </template>
                </el-table-column>

                <el-table-column width="180px" align="center" label="评论时间">
                    <template scope="scope">
                        <el-icon name="time"></el-icon>
                        <span>{{scope.row.created_at}}</span>
                    </template>
                </el-table-column>

                <el-table-column min-width="200px" label="标题">
                    <template scope="scope">
                        <span class="link-type">{{scope.row.article.title}}</span>
                        <el-tag v-for="tag in scope.row.article.tags" style="margin-left: 4px" :key="tag.id">{{tag.name}}</el-tag>
                    </template>
                </el-table-column>

                <el-table-column width="110px" align="center" label="评论人">
                    <template scope="scope">
                        <span>{{scope.row.commentator.personal_info.name}}</span>
                    </template>
                </el-table-column>

                <el-table-column width="250px" align="center" label="评论内容">
                    <template scope="scope">
                        <span style='color:red;'>{{scope.row.content}}</span>
                    </template>
                </el-table-column>

                <el-table-column align="center" label="操作">
                    <template scope="scope">
                        <el-button  size="small" type="danger" @click="delById(scope.row.id)">删除
                        </el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>
        <div class="block">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    layout="total, prev, pager, next, jumper"
                    :total="totalCount">
            </el-pagination>
        </div>
        <el-dialog
                :visible.sync="dialogVisible"
                size="tiny"
        >
            <span>确认删除吗？</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="delReal()">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>
<script>
    import {getCommentsInfo} from '../../api/comment'
    import {delComment} from '../../api/comment'
    import {getTags} from '../../api/news'
    import {getSearchComments} from '../../api/comment'
    export default{
        data(){
            return{
                dialogVisible:false,
                id:-111,
                newsData: [
                ],
                currentPage:1,
                pageSize:10,
                totalCount:0,
                tags:[],
                selectTag:[],
                searchTitle:"",
                searchContent:"",
            }
        },
        mounted(){
          this.getCommentData(1,this.pageSize);
            this.getTags();
            this.searchComments();
        },
        methods: {
            /**
             * 搜索评论
             * */
            searchComments(){
                const _this = this;
                $('#sT').bind('input propertychange', function() {
                    _this.goSearch(_this.searchTitle,1);//评论人
                });
                $('#sContent').bind('input propertychange', function() {
                    _this.goSearch(_this.searchContent,2);//评论内容
                });
            },
            /**
             * 去搜索
             * */
            goSearch(content,flag){
                let url = "";
                if(flag === 1){
                    url = `/api1.0/comments/search/?commentator=${this.searchTitle}`;
                }else{
                    url = `/api1.0/comments/search/?content=${this.searchContent}`;
                }
                getSearchComments(url,1,this.pageSize).then((res)=>{

//                   console.log("获取到的搜索信息为:",res);

                    if(res.status === 200){
                        this.newsData = [];
                        let tempArr = [];
                        this.totalCount = res.data.data.detail.hits.total;
                        tempArr = res.data.data.detail.hits.hits;
                        if(tempArr.length<=0){
                            this.getCommentData(1,this.pageSize);
                        }else{
                            for( let i=0;i<tempArr.length;i++){
                                let obj = {};
                                obj.article = {};
                                obj.commentator = {};
                                obj.commentator.personal_info = {};
                                obj.commentator.personal_info.name = "";
                                obj.article.title = tempArr[i]._source.aritcle_title;
                                obj.commentator.personal_info.name = tempArr[i]._source.commentator;
                                obj.content = tempArr[i]._source.content;
                                obj.created_at = tempArr[i]._source.created_at;
                                obj.status = tempArr[i]._source.status;
                                obj.id = tempArr[i]._id;
                                this.newsData.push(obj);
                            }
                        }

                    }
                },(err)=>{
//                   console.log("搜索错误:",err);
                });
            },
            /**
             * 获取标签的信息
             * */
            getTags(){
                getTags().then((res)=>{
                    let temTags = [];
                    if(res.status === 200){
                        temTags = res.data.data.detail;
                        const len = temTags.length;
                        for(let tag of temTags){
                            let obj = {};
                            obj.value = tag.name;
                            obj.label = tag.name;
                            this.tags.push(obj);
                        }
                    }
                },(err)=>{

                });
            },
            showMsg(str,flag){
                this.$message({
                    message:str,
                    type:flag ? "success":"warning"
                })
            },
            /**
             * 删除
             */
            delReal(){
                this.dialogVisible = false;
                delComment(this.id).then((res)=>{
                    const _this = this;
                    _this.showMsg("删除成功!",true);
                    setTimeout(function () {
                        _this.$router.go(0);
                    },500);
                },(err)=>{
                    this.showMsg("删除失败!",false);
                });
            },
            delById(id){
                this.dialogVisible = true;
                this.id = id;
            },
            getCommentData(page,pageSize){
                getCommentsInfo(page,pageSize).then((res)=>{
                   if(res.status === 200){
                       this.totalCount = res.data.data.totla_count;
                       this.newsData = res.data.data.detail;
                   }
                },(err)=>{
                });
            },
            handleCurrentChange(val) {
                this.getCommentData(val,this.pageSize);
            },

        },
    }
</script>
<style scoped>
    .filter-container{
        width: 100%;
        margin: 20px;
    }
    .block{
        width: 100%;
        margin: 20px auto;
    }
</style>