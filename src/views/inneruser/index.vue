<template xmlns="http://www.w3.org/1999/html">
    <div class="news">
        <div class="filter-container" style="display: none">
            <el-input style="width: 200px;" class="filter-item" placeholder="管理员ID" type="number" v-model="adminId" id="adminId">
            </el-input>
            <el-input style="width: 200px;" class="filter-item" placeholder="用户名" v-model="adminName" id="adminName">
            </el-input>
            <el-input style="width: 200px;" class="filter-item" placeholder="手机号" v-model="adminPhone" id="adminPhone">
            </el-input>
            <el-button class="filter-item" type="primary" icon="search">搜索</el-button>
        </div>
        <div class="news-list">
            <el-table :data="adminData"   border fit highlight-current-row style="width: 100%" >
                <el-table-column align="center" label="序号" width="65" type="expand">
                    <template scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="管理员ID">
                                <span>{{ props.row.id }}</span>
                            </el-form-item>
                            <el-form-item label="用户名">
                                <span>{{ props.row.uName }}</span>
                            </el-form-item>
                            <el-form-item label="手机号">
                                <span>{{ props.row.phone }}</span>
                            </el-form-item>
                            <el-form-item label="角色">
                                <span>{{props.row.roles}}</span>
                            </el-form-item>

                        </el-form>
                    </template>
                </el-table-column>

                <el-table-column width="180px" align="center" label="管理员ID">
                    <template scope="scope">
                        <span>{{scope.row.id}}</span>
                    </template>
                </el-table-column>

                <el-table-column width="180px" label="用户名" align="center">
                    <template scope="scope">
                        <span class="link-type">{{scope.row.uName}}</span>
                    </template>
                </el-table-column>

                <el-table-column width="180px" align="center" label="手机号">
                    <template scope="scope" >
                        <span>{{scope.row.phone}}</span>
                    </template>
                </el-table-column>
                <el-table-column class-name="status-col" label="状态" width="90">
                    <template scope="scope">
                        <el-tag v-if="scope.row.is_active === false">禁用</el-tag>
                        <el-tag v-if="scope.row.is_active === true" type="success">已启用</el-tag>
                    </template>
                </el-table-column>

                <el-table-column align="center" label="操作">
                    <template scope="scope">
                        <el-button size="small" type="success"  @click="editAdmin(scope.row)">编辑</el-button>
                        <el-button size="small" type="success" v-if="scope.row.is_active === false" @click="ableAdmin(scope.row,true)">启用
                        </el-button>
                        <el-button  size="small" v-if="scope.row.is_active === true" @click="ableAdmin(scope.row,false)">禁用
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
    import {getAllAdminInfos} from '../../api/user';
    import {delAdminById} from '../../api/user';
    import { Message } from 'element-ui';
    import Log from '../../utils/log';
    import {searchUserInfo} from '../../api/user'
    import {enORdisAble} from '../../api/user'
    export default{
        data(){
            return{
                id:-111,
                dialogVisible:false,
                adminData:[],
                userId:'',
                serachContent:"",
                adminId:"",
                adminName:"",
                adminPhone:"",
            }
        },
        mounted(){
          this.getAdminDatas();
        },
        methods: {
            //adminId
            editAdmin(adminInfo){
                this.$router.push({name: '编辑管理员', params: {
                    adminId: adminInfo.id,
                },replace: true})
            },
            /**
             * 启用某个管理员
             * */
            ableAdmin(row,flag){
                enORdisAble(row.id,flag).then((res)=>{
                    this.$message({
                        message: '操作成功',
                        type: 'success'
                    });
                    //改变这行的active的值
                    row.is_active = flag;
                },(err)=>{
                    this.$message({
                        message: '操作失败，请重试!',
                        type: 'success'
                    });
                });
            },
            /**
             * 获取管理员的信息
             * */
            getAdminDatas(){
                getAllAdminInfos().then((res)=>{
                    this.initAdmins(res);
                },(err)=>{
                    Log.printLog("fail:",err);
                });
            },
            initAdmins(res){
                let tempArr = [];
                if(res.data.code === 200){
                    tempArr = res.data.data.detail;
                }
//                Log.printLog("获取到的管理员列表信息为:",res);
                for(let item of tempArr){
                    let obj = {};
                    obj.id = item.id;
                    obj.uName = item.personal_info !== null ? item.personal_info.name:"无";
                    obj.is_active = item.member.is_active;
                    obj.phone = item.mobile;
                    obj.roles = '';
                    for(let role of item.roles){
                        obj.roles+=role.name+" ";
                    }
                    this.adminData.push(obj);
                }
            },
            /**
             * 删除管理员
             * */
            delReal(){
                this.dialogVisible = false;
                console.log("获取到删除用户的id是:",this.id);
                delAdminById(this.id).then((res)=>{
                    this.$router.go(0);
                },(err)=>{
                    this.showMessage("删除失败");
                });
            },
            delById(id){
                this.dialogVisible = true;
                this.id = id;
            },
            /**
             * 显示提示信息
             * */
            showMessage(str){
                Message({
                    message: str,
                    type: 'error',
                    duration: 5 * 1000
                });
            },
            /**
             * 添加用户
             */
            handleCreate(){
                this.$router.push({path: '/inneruser/adduser', replace: true});
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
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>