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
            <el-select clearable style="width: 250px" class="filter-item" placeholder="所在版块" v-model="selectCategory"
                       allow-create @change="choiceCategory2Search()">
                <el-option v-for="item in category" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-button class="filter-item" type="primary" icon="search" @click="handleFilter">搜索</el-button>
            <el-button class="filter-item" style="margin-left: 10px;"  type="primary" icon="edit" @click="addNews()">添加</el-button>
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
                        <span class="link-type">{{scope.row.title}}</span>
                        <el-tag v-for="tag in scope.row.tags" style="margin-left: 2px" :key="tag.id">{{tag.name}}</el-tag>
                    </template>
                </el-table-column>

                <el-table-column width="110px" align="center" label="作者">
                    <template scope="scope">
                        <span>{{scope.row.author}}</span>
                    </template>
                </el-table-column>
                <el-table-column width="110px" align="center" label="来源">
                    <template scope="scope">
                        <span>{{scope.row.source}}</span>
                    </template>
                </el-table-column>
                <el-table-column width="110px" align="center" label="版块">
                    <template scope="scope">
                        <span>{{scope.row.category_name}}</span>
                    </template>
                </el-table-column>

                <el-table-column align="center" label="阅读数" width="95">
                    <template scope="scope">
                        <span class="link-type">{{scope.row.article_views_count}}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="状态" width="95">
                    <template scope="scope">
                        <el-tag class="link-type" v-show="scope.row.status ===0">未审核</el-tag>
                        <el-tag class="link-type" v-show="scope.row.status ===1">已审核</el-tag>
                    </template>
                </el-table-column>

                <el-table-column align="center" label="操作" width="300">
                    <template scope="scope">
                        <el-button  size="small" type="primary" @click="editNews(scope.row)">编辑
                        </el-button>
                        <el-tooltip class="item" effect="dark" :content="scope.row.newsLink" placement="top">
                            <el-button size="small" type="primary">查看Url</el-button>
                        </el-tooltip>
                        <el-button  size="small" type="warning" @click="shenHeNews(scope.row,1)" v-show="scope.row.status ===0">未审核
                        </el-button>
                        <el-button  size="small" type="warning" @click="shenHeNewsNo(scope.row,0)" v-show="scope.row.status !==0">已审核
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
                    layout="total, prev, pager, next, jumper"
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

    import {getNews} from '../../api/news'
    import {getTags} from '../../api/news'
    import {delNewsById} from '../../api/news'
    import {getSearchNews} from '../../api/news'
    import {shenHeNewsById} from '../../api/news'
    import {getCategory} from '../../api/news'
    import {getSearchNewsByCategory} from '../../api/news'
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
                selectTag:[],
                category:[],
                selectCategory:"",
                showSearch:false,
                mSearchUrl:"",
                mUrl:"http://m.ciyigou.com/mobile/index#/newsdetail/354"
            }
        },
        mounted(){
          this.$nextTick(function () {
              this.getNewsData(1,this.pageSize);
              this.searchNews();
              this.getTags();
              this.getCateInfos();
          })
        },
        methods: {
            /**
             * 查看url
             * */
            lookNewsURL(newItem){

            },
            /**
             * 通过新闻类别去搜索
             * */
            choiceCategory2Search(){
               if(this.selectCategory === ""){
                   this.showMsg("所选择的新闻类别不能为空");
                   return;
               }
               let searchUrl = `api1.0/articles/categorys/search/?category_name=${this.selectCategory}`;
                this.mSearchUrl =searchUrl;
                this.getSearchNewsData(searchUrl,1,this.pageSize);

            },
            /**
             * 获取类别信息
             * */
            getCateInfos(){
                getCategory().then((res)=>{
                    if(res.status === 200){
                        let temTags = [];
                        temTags = res.data.data.detail;
                        for(let tag of temTags){
                            let obj = {};
                            obj.value = tag.name;
                            obj.label = tag.name;
                            this.category.push(obj);
                        }
                    }
                },(err)=>{
//                        console.log("获取到的类别信息err:",err);
                });
            },
            showMsg(str,flag){
              this.$message({
                  message:str,
                  type:flag ? "success":"warning"
              })
            },
            /**
             * 审核新闻
             * */
            shenHeNews(newsInfo,flag){
                shenHeNewsById(newsInfo.id,flag).then((res)=>{
                    this.showMsg("审核成功",true);
                    newsInfo.status = flag;
                },(err)=>{
                    this.showMsg("审核失败,请重试!",false);
                });
            },
            /**
             * 未审核
             * */
            shenHeNewsNo(newsInfo,flag){
                shenHeNewsById(newsInfo.id,flag).then((res)=>{
                    this.showMsg("已初始化为未审核状态",true);
                    newsInfo.status = flag;
                },(err)=>{
                    this.showMsg("审核失败,请重试!",false);
                });
            },
            /**
             * 编辑新闻
             * */
            editNews(newsInfo){
                //传递newsId
                this.$router.push({name: '编辑新闻', params: {
                    newsId: newsInfo.id,
                },replace: true})
            },
            /**
             * 删除谋篇新闻
             * */
            delReal(){
                this.dialogVisible = false;
                delNewsById(this.id).then((res)=>{
                    this.showMsg("删除成功",true);
                    const _this= this;
                    setTimeout(function () {
                        _this.$router.go(0);
                    },500);
                },(err)=>{
                    this.showMsg("删除失败",false);
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
                let searchUrl = `/api1.0/search/?tag=${this.selectTag}&article_type=0&search_type=1`;
                this.mSearchUrl =searchUrl;
                this.getSearchNewsData(searchUrl,1,this.pageSize);
            },
            /**
             * 获取标签数据
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
            /**
             * 按照标题去搜索
             * */
            searchNews(){
                const _this = this;
                $('#sT').bind('input propertychange', function() {
                    _this.goSearch(_this.searchTitle);
                });

            },
            goSearch(content){
               let searchUrl = `/api1.0/search/?q=${content}&article_type=0&search_type=1`;
                this.mSearchUrl =searchUrl;
               this.getSearchNewsData(searchUrl,1,this.pageSize);
            },
            /**
             * 搜索新闻的数据
             * */
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
                      this.getSearchNews(tempArr,len);
                  }

                },(err)=>{
                });
            },
            getSearchNews(tempArr,len){
                console.log("getSearchNews:",tempArr);
                this.showSearch = true;
                for(let i = 0;i<len;i++){
                    let obj = {
                        id:tempArr[i]._source.id,
                        newsLink:`http://m.ciyigou.com/mobile/index#/newsdetail/${tempArr[i]._source.id}`,
                        abstract:tempArr[i]._source.abstract,
                        title:tempArr[i]._source.title,
                        status:tempArr[i]._source.status,
                        author:tempArr[i]._source.author,
                        category_name:tempArr[i]._source.category_name,
                        source:tempArr[i]._source.source,
                        created_at:tempArr[i]._source.created_at,
                        article_views_count:tempArr[i]._source.article_views_count,
                        tags:tempArr[i]._source.tags
                    };
                    let tempT = [];
                    for(let t of obj.tags){
                        let obj = {};
                        obj.name = t;
                        tempT.push(obj);
                    }
                    obj.tags = tempT;
                    this.newsDatas.push(obj);
                }
            },
            /**
             * 获取新闻的数据
             * */
            getNewsData(page,pageSize){
                this.showSearch = false;
                getNews(page,pageSize).then((res)=>{
                    var tempArr = [];
                    if(res.status === 200){
                        tempArr = res.data.data.detail;
                        const len = tempArr.length;
                        for(let i=0;i<len;i++){
                            let obj = {
                                id:tempArr[i].id,
                                newsLink:`http://m.ciyigou.com/mobile/index#/newsdetail/${tempArr[i].id}`,
                                abstract:tempArr[i].abstract,
                                title:tempArr[i].title,
                                status:tempArr[i].status,
                                author:tempArr[i].author,
                                category_name:tempArr[i].category_name,
                                source:tempArr[i].source,
                                created_at:tempArr[i].created_at,
                                article_views_count:tempArr[i].article_views_count,
                                tags:tempArr[i].tags
                            };

                            this.newsDatas.push(obj);
                        }
//                        this.newsDatas = res.data.data.detail;
                        this.totalCount = res.data.data.total_count;
                    }
                },(err)=>{
                });
            },
            /**
             * 当前页改变时候去触发
             * */
            handleCurrentChange(val) {
                if(this.showSearch){
                    this.getSearchNewsData(this.mSearchUrl);
                }else{
                    this.getNewsData(val,this.pageSize);
                }
            },
            /**
             * 跳转到添加新闻的页面
             */
            addNews(){
                this.$router.push({path: '/news/SendNews', replace: true});
            }
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