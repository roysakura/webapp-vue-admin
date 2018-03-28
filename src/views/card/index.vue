<template>
    <div class="card-container">
        <el-table
                :data="cards"
                border fit highlight-current-row
                style="width: 100%">
            <el-table-column
                    label="注册时间"
                    width="180"
                    align="center"
            >
                <template scope="scope">
                    <span>{{scope.row.created_at}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="姓名"
                    width="180"
                    align="center"
            >
                <template scope="scope">
                    <span>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="用户角色"
                    width="180"
                    align="center"
            >
                <template scope="scope">
                    <span>供应商</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="名片"
                    align="center"
                    width="180"
            >
                <template scope="scope" class="img-container">
                    <img :src="scope.row.namecard" alt=""   @click="showBigImg(scope.row.namecard)" class="u-icon">
                </template>
            </el-table-column>
            <el-table-column
                    label="操作"
                    align="center"
            >
                <template scope="scope">
                    <el-button  size="small" type="warning" @click="checkUCard(scope.row)" v-show="!scope.row.verified">未审核
                    </el-button>
                    <el-button  size="small" type="primary" v-show="scope.row.verified">已审核
                    </el-button>
                   <!-- <el-button  size="small" type="primary">
                    </el-button>-->
                </template>
            </el-table-column>
        </el-table>
        <div class="layer-box" id="layer-box" @click="closeLayer()">
            <img :src="img" alt="" class="layer-icon">
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
                title="名片审核"
                :visible.sync="centerDialogVisible"
                width="20%"
                center>
            <span style="color: #ff4949">若审核不通过请给出原因</span>
            <span slot="footer" class="dialog-footer">
    <el-button type="warning" @click="checkUnPass">不通过</el-button>
    <el-button @click="checkPass" type="primary">通过</el-button>
  </span>
        </el-dialog>
        <div class="layer-not-pass" v-show="showNotPass">
            <div class="not-pass-box">
                <p class="not-pass-tip">
                    请填写不通过的原因
                </p>
                <div class="not-pass-content">
                    <i class="close-icon" @click="closeNotePassLayer()"></i>
                    <textarea class="not-pass-text" placeholder="请输入理由" v-model="reason"></textarea>
                    <a class="submit-btn" @click="submitReason($event)">提交</a>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import {getCardInfo} from '../../api/card'
    import {submitCheckSuccess} from '../../api/card'
    export default {
        data() {
            return {
                img:"",
                cards:[],
                currentPage:1,
                totalCount:0,
                pageSize:10,
                centerDialogVisible: false,
                uId:-1,
                showNotPass:false,
                reason:"",
                checkObj:{}
            }
        },
        mounted(){
            this.getUserCardInfo(1,10);
        },
        methods:{
            submitReason($event){
                $event.preventDefault();
                $event.stopPropagation();
                if(!this.reason){
                    this.$message.error('理由不能为空!');
                    return;
                }
            },
            /**
             * 审核不通过
             * */
            checkUnPass(){
               /* this.centerDialogVisible = false;
                this.showNotPass = true;*/
                submitCheckSuccess(this.uId).then((res)=>{
                    this.checkObj.verified = false;
                    this.$message({
                        message: '审核不通过',
                        type: 'success'
                    });
                },(err)=>{
                    this.$message.error('审核失败，请重试!');
                });
                this.centerDialogVisible = false;
            },
            /**
             * 审核通过
             * */
            checkPass(){
              submitCheckSuccess(this.uId).then((res)=>{
                  this.checkObj.verified = true;
                  this.$message({
                      message: '审核通过',
                      type: 'success'
                  });
              },(err)=>{
                  this.$message.error('审核失败，请重试!');
              });
                this.centerDialogVisible = false;
            },
            /**
             * 审核名片
             * @param uInfo:用户基本信息
             */
            checkUCard(uInfo){
                this.centerDialogVisible = true;
                this.uId = uInfo.id;
                this.checkObj = uInfo;

            },
            getUserCardInfo(page,pageSize){
                getCardInfo(page,pageSize).then((res)=>{
                 this.cards = res.data.data.detail;
                 this.totalCount = res.data.data.total_count;
                })
            },
            closeNotePassLayer(){
                this.showNotPass = false;
            },
            closeLayer(){
                $("#layer-box").hide();
            },
            showBigImg(img){
                $("#layer-box").hide().show();
                this.img = img;
            },
            handleCurrentChange(page){
                this.getUserCardInfo(page,10);
            }
        }
    }
</script>
<style>
    .layer-box{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        outline: 0;
        -webkit-overflow-scrolling: touch;
        background-color: rgb(0, 0, 0);
        filter: alpha(opacity=60);
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 222;
        display: none;
    }
    .layer-not-pass{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        outline: 0;
        -webkit-overflow-scrolling: touch;
        background-color: rgb(0, 0, 0);
        filter: alpha(opacity=60);
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 222;
    }
    .not-pass-box{
        width: 300px;
        height: 300px;
        background: #fff;
        left: 50%;
        top: 50%;
        margin-left:-150px;
        margin-top: -150px;
        position: absolute;
    }
    .not-pass-tip{
        width: 100%;
        text-align: center;
        height: 40px;
        line-height: 40px;
        vertical-align: middle;

    }
    .not-pass-content{
        width: 100%;
        height: 180px;
    }
    .close-icon{
        position: absolute;
        right: 0;
        top: 0;
        width: 32px;
        height: 32px;
        background: url("../../assets/images/dialog-close.png")no-repeat center;
        cursor: pointer;
    }
    .not-pass-text{
        width: 100%;
        height: 120px;
        resize:none;
    }
    .submit-btn{
        width: 80%;
        margin: 0 auto;
        background-color: #13227a;
        color: #fff;
        text-align: center;
        height: 40px;
        line-height: 40px;
        vertical-align: middle;
        display: block;
        font-size: 16px;
        margin-top: 26px;
        border-radius: 4px;
    }
    .layer-icon{
        width: 400px;
        height: 400px;
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left:-200px;
        margin-top: -200px;
    }
    .el-table .cell:nth-of-type(4){
        text-align: center;
        padding-left: 0;
    }
    .el-table .cell, .el-table th>div{
        padding-left: 0;
    }
    .cell .u-icon{
        width: 180px;
        height: 100px;
        overflow: hidden;
        display: block;
    }
    .el-dialog--small{
        width: 24%;
    }
</style>