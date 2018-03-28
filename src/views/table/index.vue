<template>
  <div class="app-container">
    <div>
      <el-input placeholder="请输入爬取内容或文章链接" v-model="searchKey">
        <el-button slot="append" icon="search" @click="getFilterArticle()"></el-button>
      </el-input>
    </div>
    <div class="pa-content" v-show="isShowCommon">
      <el-table
              :data="filterData"
              style="width: 100%">
        <el-table-column
                label="爬取连接"
                >
          <template scope="scope">
            <a :href="scope.row.url" target="_blank" style="color: red">{{scope.row.url}}</a>
          </template>
        </el-table-column>
        <el-table-column
                label="爬取标题"
        >
          <template scope="scope">
            <span>{{scope.row.title}}</span>
          </template>

        </el-table-column>
        <el-table-column
                label="爬取摘要"

        >
          <template scope="scope">
            <span>{{scope.row.abstract}}</span>
          </template>

        </el-table-column>
        <el-table-column
                label="操作"
        >
          <template scope="scope">
            <el-button size="small" v-show="!isSave" type="success" @click="saveInDataBase(scope.row)">保存数据库</el-button>
            <el-button size="small" v-show="isSave" type="success">已保存数据库</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
   <div class="button-box">
     <el-button type="primary" class="next-button" @click="getBack()" v-show="isShowButton">上一页</el-button>
     <el-button type="primary" class="next-button" @click="getNext()" v-show="isShowButton">下一页</el-button>
   </div>
  </div>
</template>

<script>
  import {getFilterArticleData} from '../../api/filterlist';
  import {saveArticle} from '../../api/filterlist';
  import {getFilterArticleUrlData} from '../../api/filterlist';
  export default {
    data() {
      return {
          //搜索的关键词
          searchKey:"",
          filterData: [],
          page:1,
          isShowButton:false,
          isShowCommon:true,
          isShowUrl:true
      }
    },
    created() {

    },
    methods: {
        /**
         * 通过关键词搜索获取到相关的文章信息
         * */
        getFilterArticle(){
            this.fetchData(1);
        },
        getBack(){
            if(this.page!==0){
                this.page--;
            }
            if(this.page === 0){
                this.showMsg("已经是第一页了",false);
                this.page = 1;
                return;
            }
            this.fetchData(this.page);
        },
        getNext(){
            this.page++;
            this.fetchData(this.page);
        },
        /**
         * 保存信息到数据库
         * */
        saveInDataBase(articleInfos){
//            console.log("要保存的数据:",articleInfos);
            //保存数据库的操作
            const _this = this;
            saveArticle("api1.0/spiderinfos/",articleInfos.abstract,articleInfos.gzh_name,articleInfos.title,articleInfos.url,articleInfos.imgs[0]).then((res)=>{
                articleInfos.isSave = true;
                _this.showMsg("保存成功",true);
            },(err)=>{
                _this.showMsg("保存失败，请重试!");
            });
        },
        goEditPage(){
            //跳转到修改的页面
        },
        //分页操作
        handleCurrentChange(val){
            this.fetchData(val);
        },
        /**
         * 加载数据,内容不一样的情况
         * @param page
         * @param pageSize
         */
        fetchData(page){
            const _this = this;
            //限制搜索关键词
            if(this.searchKey===""){
                this.showMsg("搜索内容不能为空！");
                return;
            }
            if(this.searchKey.indexOf("http")!==-1 || this.searchKey.indexOf("https")!==-1){
                this.isShowCommon = false;
                getFilterArticleUrlData("api1.0/urlinfos/",this.searchKey).then((res)=>{
                    _this.showMsg("成功保存到数据库",true);
                },(err)=>{
                    _this.showMsg("保存失败，请重试!");
                });
            }else{
               this.isShowCommon = true;
                getFilterArticleData("api1.0/spiders/",this.searchKey,page).then((res)=>{
                    var tempArr = [];
                    this.filterData=[];
                    if(res.data!==null){
                        tempArr = res.data.data.detail;
                        if(tempArr.length>0){
                            this.isShowButton = true;
                        }else{
                            this.isShowButton = false;
                        }
                        for(let item of tempArr){

                            let obj = {};
                            obj.title = item.article.title;
                            obj.gzh_name = item.article.gzh_name;
                            obj.url = item.article.url;
                            obj.abstract = item.article.abstract;
                            obj.imgs = item.article.imgs;
                            obj.isSave = false;
//                      console.log(obj);
                            this.filterData.push(obj);
                        }
                    }
                },(err)=>{
                    _this.showMsg("搜索出错，请重试!");
                });
            }

        },
        showMsg(str,flag){
            this.$message({
                message:str,
                type:flag ? "success" : "warning"
            })
        }
    }
  };
</script>
<style>
  .el-select .el-input {
    width: 110px;
  }
  .pa-content{
    margin-top: 20px;
  }
  .block{
    width: 100%;
    margin: 20px auto;
  }
  .button-box{
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .next-button{
    width: 200px;
    display: inline-block;
  }
</style>
