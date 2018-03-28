<template>
    <div class="news">
        <div class="filter-container" style="margin: 0 auto;width: 700px">
            <el-input  style="width: 300px;" class="filter-item" placeholder="标题" v-model="searchContent">
            </el-input>
            <el-input style="width: 300px;" class="filter-item" placeholder="手机号" v-model="serachContent">
            </el-input>
        </div>
        <div class="news-list">
            <el-table :data="permissionDatas" border  style="width: 100%" class="table-container">
                <el-table-column align="center" label="权限ID" width="110px">
                    <template scope="scope">
                        <span>{{scope.row.id}}</span>
                    </template>
                </el-table-column>

                <el-table-column width="280px" align="center" label="权限名">
                    <template scope="scope">
                        <span>{{scope.row.codename}}</span>
                    </template>
                </el-table-column>

                <el-table-column width="330px" align="center" label="权限说明">
                    <template scope="scope">
                        <span>{{scope.row.name}}</span>
                    </template>
                </el-table-column>

                <el-table-column align="center" label="操作">
                    <template scope="scope">
                        <el-button  size="small" type="danger" @click="deletePId(scope.row.id)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    import {getPermissionList} from '../../api/permission';
    import {deletePerById} from '../../api/permission';
    import { Message } from 'element-ui';
    export default{
        data(){
            return{
                permissionDatas:[],
                listLoading: true,
                searchContent:'',
            }
        },

        mounted(){
          this.$nextTick(function () {
              this.getPerList();
          })
        },
        methods: {
            getPerList(){
                this.listLoading = true;
                getPermissionList().then((res)=>{
                    if(res.data.code === 200){
                       this.permissionDatas =  res.data.data.detail;
                    }else{
                       this.showMessage("获取权限列表失败");
                    }
                    this.listLoading = false;
                },(err)=>{
                    this.showMessage("获取权限列表失败");
                    this.listLoading = false;
                })

            },
            /**
             * 通过id去删除权限
             * */
            deletePId(id){
                deletePerById(id).then((res)=>{
                   if(res.status === 204){
                       this.showMessage("删除权限成功!");
                       this.$router.go(0);
                   }
                },(err)=>{
                    this.showMessage("删除权限失败!");
                });
            },
            showMessage(str){
                Message({
                    message: str,
                    type: 'error',
                    duration: 5 * 1000
                });
            },
            /**
             * 根据条件去查询符合条件需要的数据
             */
            handleFilter(){

            }
        },
    }
</script>
<style scoped>
    .filter-container{
        width: 100%;
        margin: 20px;
    }
    .news-list{
        padding: 20px;
    }
    .news-list >.table-container{
        width: auto;
    }
</style>