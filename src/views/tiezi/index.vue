<template>
    <div class="news">
        <div class="filter-container">
            <el-input  style="width: 250px;" class="filter-item" placeholder="标题" id="sT" v-model="searchTitle">
            </el-input>
            <el-select clearable style="width: 250px" class="filter-item" placeholder="标签" v-model="selectTag"  multiple
                       allow-create>
                <el-option v-for="item in tags" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-button class="filter-item" type="primary" icon="search" @click="handleFilter">搜索</el-button>
            <el-button class="filter-item" style="margin-left: 10px;"  type="primary" icon="edit">添加</el-button>
        </div>
        <div class="news-list">
            <el-table :data="newsDatas"  border fit highlight-current-row style="width: 100%">
                <el-table-column align="center" label="序号" width="65">
                    <template scope="scope">
                        <span>{{scope.row.id}}</span>
                    </template>
                </el-table-column>

                <el-table-column width="180px" align="center" label="发布时间">
                    <template scope="scope">
                        <span>{{scope.row.created_at}}</span>
                    </template>
                </el-table-column>

                <el-table-column min-width="300px" label="标题">
                    <template scope="scope">
                        <span class="link-type" @click="handleUpdate(scope.row)">{{scope.row.title}}</span>
                        <el-tag v-for="tag in scope.row.tags" style="margin-left: 2px" :key="tag.id">{{tag.name}}</el-tag>
                    </template>
                </el-table-column>

                <el-table-column width="110px" align="center" label="作者">
                    <template scope="scope">
                        <span>{{scope.row.author}}</span>
                    </template>
                </el-table-column>

                <el-table-column align="center" label="阅读数" width="95">
                    <template scope="scope">
                        <span class="link-type">{{scope.row.article_views_count}}</span>
                    </template>
                </el-table-column>

                <el-table-column align="center" label="操作" width="150">
                    <template scope="scope">
                        <el-button  size="small" type="primary" @click="editTieZi(scope.row)">编辑
                        </el-button>
                        <el-button  size="small" type="danger" @click="delNewsById(scope.row.id)">删除
                        </el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>
        <div class="block">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size=pageSize
                    layout="total, prev, pager, next,jumper"
                    :total=totalCount>
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

    import {getNTieZi} from '../../api/news'
    import {getTags} from '../../api/news'
    import {delNewsById} from '../../api/news'
    import {getSearchNews} from '../../api/news'
    export default{
        data(){
            return{
                dialogVisible:false,
                id:-111,
                currentPage:1,//当前页
                pageSize:10,//每页显示的条目数
                newsDatas:[],
                totalCount:0,//总条数
                searchTitle:"",
                searchAuthor:"",
                tags:[],
                selectTag:[]
            }
        },
        mounted(){
            this.$nextTick(function () {
                this.getNewsData(1,this.pageSize);
                this.searchNews();
                this.getTags();
            })
        },
        methods: {
            showMsg(str,flag){
                this.$message({
                    message:str,
                    type:flag ? "success":"warning"
                })
            },
            editTieZi(tieziInfo){
                this.$router.push({name: '编辑帖子', params: {
                    tieId: tieziInfo.id,
                },replace: true})
            },
            delReal(){
                this.dialogVisible = false;
                delNewsById(this.id).then((res)=>{
                    const _this = this;
                    _this.showMsg("删除成功!",true);
                    setTimeout(function () {
                        _this.$router.go(0);
                    },1000);
                },(err)=>{
                    this.showMsg("删除失败!",false);
                });
            },
            delNewsById(id){
                this.dialogVisible = true;
                this.id = id;

            },
            /**
             * 通过tag去搜索
             * */
            handleFilter(){
                if(this.selectTag.length<=0){
                    this.$message({
                        message: "请选择要搜索的标签",
                        type: 'success',
                    });
                    return;
                }
                let searchUrl = `/api1.0/search/?tag=${this.selectTag}&article_type=1&search_type=1`;
                this.getSearchNewsData(searchUrl,1,this.pageSize);
            },
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
            searchNews(){
                const _this = this;
                $('#sT').bind('input propertychange', function() {
                    _this.goSearch(_this.searchTitle);
                });

            },
            goSearch(content){
                let searchUrl = `/api1.0/search/?q=${content}&article_type=1&search_type=1`;
                this.getSearchNewsData(searchUrl,1,this.pageSize);
            },
            getSearchNewsData(searchUrl){
                getSearchNews(searchUrl,1,this.pageSize).then((res)=>{
                    this.newsDatas = [];
                    let tempArr = [];
                    if(res.status === 200){
                        tempArr = res.data.data.detail.hits.hits;
                        this.totalCount = res.data.data.detail.hits.total;
                    }
                    const len = tempArr.length;
                    if(len<=0){
                        this.getNewsData(1,this.pageSize);
                    }else{
                        for(let i = 0;i<len;i++){
                            let tempT = [];
                            for(let t of tempArr[i]._source.tags){
                                let obj = {};
                                obj.name = t;
                                tempT.push(obj);
                            }
                            tempArr[i]._source.tags = tempT;
                            this.newsDatas.push(tempArr[i]._source);
                        }
                    }

                },(err)=>{
                });
            },
            getNewsData(page,pageSize){
                getNTieZi(page,pageSize).then((res)=>{
                    this.newsDatas = [];//刚加的
                    if(res.status === 200){
                        this.newsDatas = res.data.data.detail;
                        this.totalCount = res.data.data.total_count;
                    }
                },(err)=>{
                });
            },
            /**
             * 当前页改变时候去触发
             * */
            handleCurrentChange(val) {
                this.getNewsData(val,this.pageSize);
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