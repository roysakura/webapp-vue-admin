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
            <el-button class="filter-item" type="primary"  icon="search" @click="handleFilter">搜索</el-button>
            <el-button class="filter-item" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="edit">添加</el-button>
        </div>
        <div class="news-list">
            <el-table :data="datumData"  border fit highlight-current-row style="width: 100%">
                <el-table-column align="center" label="序号" width="65">
                    <template scope="scope">
                        <span>{{scope.row.id}}</span>
                    </template>
                </el-table-column>

                <el-table-column width="180px" align="center" label="上传时间">
                    <template scope="scope">
                        <span>{{scope.row.uploaded_at}}</span>
                    </template>
                </el-table-column>

                <el-table-column width="300px" label="标题">
                    <template scope="scope" class="title_c">
                        <span class="link-type title_c" @click="handleUpdate(scope.row)">{{scope.row.abstract}}</span>
                        <el-tag v-for="tag in scope.row.tags" style="margin-left: 4px" :key="tag.id">{{tag.name}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column min-width="150px" label="资料名" align="center">
                    <template scope="scope">
                        <span class="link-type" @click="handleUpdate(scope.row)">{{scope.row.file_name}}</span>
                    </template>
                </el-table-column>

                <el-table-column width="110px" align="center" label="上传者">
                    <template scope="scope">
                        <span>{{scope.row.user_name}}</span>
                    </template>
                </el-table-column>

                <el-table-column align="center" label="下载数" width="95">
                    <template scope="scope">
                        <span class="link-type">{{scope.row.download_count}}</span>
                    </template>
                </el-table-column>

                <el-table-column align="center" label="操作" width="150">
                    <template scope="scope">
                        <el-button  size="small" type="primary" @click="editDatum(scope.row.id)">编辑
                        </el-button>
                        <el-button  size="small" type="danger" @click="delDatum(scope.row.id)">删除
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
    import {getDatum} from '../../api/datum'
    import {searchDatumInfo} from '../../api/datum'
    import {delDatumById} from '../../api/datum'
    import {getTags} from '../../api/news'
    export default{
        data(){
            return{
                id:-111,
                dialogVisible:false,
                currentPage:1,//当前页
                pageSize:10,//每页显示的条目数
                totalCount:0,//总条数
                datumData:[],
                tags:[],
                selectTag:[],
                searchTitle:""
            }
        },
        mounted(){
          this.$nextTick(function () {
              this.getDatumInfos(1,this.pageSize);
              this.getTags();
              this.searchDatum();
          })
        },
        methods: {
            /**
             * 编辑某篇资料
             * */
            editDatum(id){
                this.$router.push({name: '编辑资料', params: {
                    datumId: id,
                },replace: true});
            },
            delReal(){
                const _this = this;
                this.dialogVisible = false;
                delDatumById(this.id).then((res)=>{
                    _this.$router.go(0);
                },(err)=>{
                    this.showMsg("删除失败!",false);
                });
            },
            /**
             * 删除资料库
             * */
            delDatum(id){
                this.dialogVisible = true;
                this.id = id;
            },
            /**
             * 搜索
             * */
            searchDatum(){
                    const _this = this;
                    $('#sT').bind('input propertychange', function() {
                        _this.goSearch(_this.searchTitle);
                    });
            },
            goSearch(content){
                let searchUrl = `/api1.0/files/search/?query_name=${content}`;
                this.getSearchDatumData(searchUrl,1,this.pageSize);
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
                //这里要判断一下，当长度是1的时候，去做修改searchUrl
                let searchUrl = `/api1.0/files/search/?tag=${this.selectTag}&search_type=2`;
                this.getSearchDatumData(searchUrl,1,this.pageSize);
            },
            /**
             * 搜索
             * */
            getSearchDatumData(url,page,pagSize){
                searchDatumInfo(url,page,pagSize).then((res)=>{
                    this.datumData = [];
                    let tempArr = [];
                    if(res.status === 200){
                        tempArr = res.data.data.detail.hits.hits;
                        this.totalCount = res.data.data.detail.hits.total;
                    }
                    const len = tempArr.length;
                    if(len<=0){
                        this.getDatumInfos(1,this.pageSize);
                    }else{
                        for(let i = 0;i<len;i++){
                            let tempT = [];
                            for(let t of tempArr[i]._source.tags){
                                let obj = {};
                                obj.name = t;
                                tempT.push(obj);
                            }
                            tempArr[i]._source.tags = tempT;
                            tempArr[i]._source.user_name = tempArr[i]._source.uploader_name;
                            tempArr[i]._source.id = tempArr[i]._id;
                            this.datumData.push(tempArr[i]._source);
                        }
                    }

                },(err)=>{
                    this.showMsg("搜索错误，请重试!",false);
                });
            },
            /**
             * 添加
             * */
            handleCreate(){
                this.$router.push({path: '/datum/upload', replace: true});
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
            getDatumInfos(page,pageSize){
                getDatum(page,pageSize).then((res)=>{
                    if(res.status === 200){
                        this.datumData = res.data.data.detail;
                        this.totalCount = res.data.data.total_count;
                        const len = this.datumData.length;
                        if(len<=0){
                            this.showMsg("无资料库信息!",false);
                        }
                    }
                },(err)=>{
                    this.showMsg("获取资料库信息失败!",false);
                });
            },
            showMsg(str,flag){
                this.$message({
                    type:flag ? "success":"warning",
                    message:str
                })
            },
            /**
             * 获取下一页的数据
             * */
            handleCurrentChange(val) {
                this.getDatumInfos(val,this.pageSize);
            },
        },
    }
</script>
<style scoped>
    .title_c{
        width: 300px;
        height: 50px;
        display: inline-block;
        overflow: hidden;
    }
    .filter-container{
        width: 100%;
        margin: 20px;
    }
    .block{
        width: 100%;
        margin: 20px auto;
    }
</style>