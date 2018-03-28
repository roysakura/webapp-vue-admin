<template>
    <div class="news">
        <div class="news-list">
            <el-table :data="newsData"  border fit highlight-current-row style="width: 100%">
                <el-table-column align="center" label="序号" width="100px">
                    <template scope="scope">
                        <span>{{scope.row.id}}</span>
                    </template>
                </el-table-column>

                <el-table-column width="200px" align="center" label="积分标题">
                    <template scope="scope">
                        <span>{{scope.row.credit_item_name}}</span>
                    </template>
                </el-table-column>

                <el-table-column min-width="150px" label="积分数" align="center">
                    <template scope="scope">
                        <el-tag>{{scope.row.item_credit}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column min-width="150px" label="每天限制" align="center">
                    <template scope="scope">
                        <el-tag v-show="scope.row.credit_per_day === true" type="success">是</el-tag>
                        <el-tag v-show="scope.row.credit_per_day === false" type="primary">否</el-tag>
                        <span>{{scope.row.restrict_max_num}}积分</span>
                    </template>
                </el-table-column>

                <el-table-column align="center" label="操作">
                    <template scope="scope">
                        <el-button size="small" type="success"  @click="editById(scope.row.id)">修改
                        </el-button>
                        <el-button  size="small" type="danger" @click="delById(scope.row.id)">删除
                        </el-button>
                    </template>
                </el-table-column>

            </el-table>
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
    import {getJiFen} from '../../api/jifen'
    import {delJiFenById} from '../../api/jifen'
    export default{
        data(){
            return{
                dialogVisible:false,
                id:-111,
                newsData: [
                ],

            }
        },
        mounted(){
            this.getCate();
        },
        methods: {
            editById(id){
                this.$router.push({name: '编辑积分', params: {
                    jId: id,
                },replace: true})
            },
            delReal(){
                this.dialogVisible = false;
                delJiFenById(this.id).then((res)=>{
                    this.showMsg("删除成功!",true);
                    const _this = this;
                    setTimeout(function () {
                        _this.$router.go(0);
                    },500)
                },(err)=>{
                    this.showMsg("删除失败!",false)
                })
            },
            delById(id){
                this.dialogVisible = true;
                this.id = id;

            },
            getCate(){
                getJiFen().then((res)=>{
                    if(res.status === 200){
                        this.newsData = res.data.data.detail;
                    }
                },(err)=>{

                });
            },
            showMsg(str,flag){
                this.$message({
                    message:str,
                    type:flag ? "success":"warning"
                })
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