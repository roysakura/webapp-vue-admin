<template>
    <div class="report-container">
        <el-table
                :data="reports"
                border fit highlight-current-row
                style="width: 100%">
            <el-table-column
                    label="举报时间"
                    width="180"
                    align="center"
            >
                <template scope="scope">
                    <span>{{scope.row.created_at}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="举报人"
                    width="180"
                    align="center"
            >
                <template scope="scope">
                    <span>{{scope.row.username}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="举报(询价)单号"
                    width="180"
                    align="center"
            >
                <template scope="scope">
                    <span>{{scope.row.ref}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="举报内容"
                    align="center"
                    width="180"
            >
                <template scope="scope" class="img-container">
                    <span v-show="scope.row.report_type_display !== '其他'">{{scope.row.report_type_display}}</span>
                    <span v-show="scope.row.report_type_display === '其他'">{{scope.row.content}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="操作"
                    align="center"
            >
                <template scope="scope">
                    <el-button  size="small" type="warning" @click="checkUReport(scope.row)" v-show="!scope.row.dealed">未处理
                    </el-button>
                    <el-button  size="small" type="primary" v-show="scope.row.dealed">已处理
                    </el-button>
                    <!-- <el-button  size="small" type="primary">
                     </el-button>-->
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size=pageSize
                    layout="total, prev, pager, next, jumper"
                    :total=totalCount>
            </el-pagination>
        </div>
       <!-- <el-dialog
                :visible.sync="dialogVisible"
                size="tiny"
        >
            <span>确认举报吗？</span>
           <div style="margin-top: 20px;display: flex;justify-content: space-between;margin-bottom: 20px;">
              &lt;!&ndash; <el-radio-group v-model="checkedCategory" @change="handleCategoryCitiesChange">
                   <el-radio  v-for="role in category" :label="role.id" :key="role">{{role.name}}</el-radio>
               <el-radio v-model="radio" label="1">违法</el-radio>
               <el-radio v-model="radio" label="2">广告</el-radio>
               <el-radio v-model="radio" label="1">色情</el-radio>
               <el-radio v-model="radio" label="2">暴力</el-radio>
               <el-radio v-model="radio" label="2">其他</el-radio>
               </el-radio-group>&ndash;&gt;
           </div>
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="delReal()">举报</el-button>
  </span>
        </el-dialog>-->
    </div>
</template>
<script>
    import {getReportInfo} from '../../api/report'
    import {submitCheckReport} from '../../api/report'
    export default{
        data(){
            return{
                checkedCategory:-1,
                dialogVisible:true,
                reports:[],
                currentPage:1,
                totalCount:0,
                pageSize:10,
            }
        },
        mounted(){
            this.fetchData(1,10);
        },
        methods:{
            handleCategoryCitiesChange(value){

            },
            fetchData(page,pageSize){
                getReportInfo(page,pageSize).then((res)=>{
                    this.reports = res.data.data.detail;
                    this.totalCount = res.data.data.total_count;
                },(err)=>{

                })
            },
            handleCurrentChange(currentPage){
                this.fetchData(currentPage,10);
            },
            checkUReport(reportInfo){
                submitCheckReport(reportInfo.id).then((res)=>{
                    reportInfo.dealed = true;
                    this.$message({
                        message: '已成功处理!',
                        type: 'success'
                    });
                },(err)=>{
                    this.showMsg("处理失败,请重试!",false);
                });
            },
            showMsg(str,flag){
                this.$message({
                    message:str,
                    type:flag ? "success":"warning"
                })
            },
        }
    }
</script>