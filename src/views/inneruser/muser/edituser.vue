<template>
    <div class="inner-user-add-layout">
        <div class="top-list">
            <el-input class="user-input" v-model="username" placeholder="用户名"></el-input>
            <el-input class="user-input" v-model="password" placeholder="密码"></el-input>
        </div>
        <div class="top-list" style="margin-top: 12px">
            <el-input class="user-input" v-model="phone" placeholder="手机号" type="tel"></el-input>
        </div>
        <div class="permission-list">
            <h3>赋予角色</h3>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedRoles" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="role in roles" :label="role" :key="role">{{role.name}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <el-dialog
                title="添加管理员"
                :visible.sync="dialogVisible"
                size="tiny"
                :before-close="handleClose">
            <span>是否还继续添加管理员？</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>
        <el-button type="primary" class="add-ser-btn" @click="add()">添加</el-button>
    </div>
</template>
<script>
    import {getAllRoles} from '../../../api/user'
    import {modifyAdminById} from '../../../api/user'
    import {getAdminById} from '../../../api/user'
    import { Message } from 'element-ui';

    import {validatePhoneNumber} from '../../../utils/validate'
    import logUtil from '../../../utils/log'
    export default{
        data(){
            return{
                dialogVisible:false,
                username:'',
                password:null,
                phone:'',
                roles: [],
                checkAll:true,
                checkedRoles: [],
                isIndeterminate: true
            }

        },
        mounted(){
            this.getRoles();
            this.getAdminId();
        },
        methods:{
            getAdminId(){
                getAdminById(this.$route.params.adminId).then((res)=>{
                    if(res.status === 200){
                        this.username = res.data.data.detail.personal_info.name;
                        this.phone = res.data.data.detail.mobile;
                        sessionStorage.setItem("phone",res.data.data.detail.mobile);
//                        this.username = res.data.data.detail.personal_info.name;
                    }
                },(err)=>{
                });
            },
            showMsg(str){
                Message({
                    message: str,
                    type: 'error',
                    duration: 5 * 1000
                });
            },
            showSuccessMsg(str){
                Message({
                    message: str,
                    type: 'success',
                    duration: 5 * 1000
                });
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            add(){
//                this.dialogVisible = true;
                if(this.username === ''){
                    this.showMsg("用户名不能为空");
                    return;
                }
                /*if(this.password === ''){
                    this.showMsg("密码不能为空");
                    return;
                }*/
                if(this.phone === ''){
                    this.showMsg("手机号不能为空");
                    return;
                }
                if(!validatePhoneNumber(this.phone)){
                    this.showMsg("手机号格式不正确");
                    return;
                }
                if(this.checkedRoles.length<=0){
                    this.showMsg("请赋予管理员权限");
                    return;
                }
                let member = {};
                member.password = this.password;
                let tempRoles = [];
                for(let item of this.checkedRoles){
                    let obj = {};
                    obj.id = item.id;
                    tempRoles.push(obj);
                    if(item.id === 3){
                        member.is_superuser = true;
                    }else{
                        member.is_superuser = false;
                    }
                }
                let phone = sessionStorage.getItem("phone");
                if(this.phone === phone){
                    this.phone = null;
                }
                let personal_info = {};
                personal_info.name = this.username;
                modifyAdminById(this.$route.params.adminId,member,this.phone,personal_info,tempRoles)
                    .then((res)=>{
                        if(res.data.code === 201){
                            this.showSuccessMsg("修改管理员成功!");
                            const _this = this;
                            setTimeout(function () {
                                _this.$router.push({path: '/inneruser/index', replace: true});
                            },500);
                        }
                        logUtil.printLog("成功:",res);
                    },(err)=>{
                       this.showMsg("修改管理信息失败");
                    });

            },
            handleCheckAllChange(event) {
                this.checkedRoles = event.target.checked ? this.roles : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.roles.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.roles.length;
            },
            getRoles(){
                getAllRoles().then((res)=>{
                   if(res.data.code === 200){
                       this.roles = res.data.data.detail;
                   }
                },(err)=>{
                    this.showMsg("获取角色信息失败");
                });
            },
        }

    }
</script>
<style scoped>
    .inner-user-add-layout{
        padding: 20px;
    }
    .top-list{
        display: flex;
        justify-content: space-between;
    }
    .inner-user-add-layout .user-input{
        float: left;
        display: block;
    }
    .inner-user-add-layout .user-input:last-of-type{
        margin-left: 10px;
    }
    .permission-list{
        margin-top: 20px;
        width: 100%;
        box-shadow: 2px 2px 6px #ccc;
        padding: 0 10px 10px 10px;
        border: 1px solid #ccc;
    }
    .add-ser-btn{
        width: 400px;
        margin: 20px auto;
        display: block;
    }
</style>