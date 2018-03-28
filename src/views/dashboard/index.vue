<template>
  <div class="dashboard-container">
    <!--<div class='dashboard-text'>name:{{name}}</div>-->
    <!--<div class='dashboard-text'>role:<span v-for='role in roles' :key='role'>{{role}}</span></div>-->
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content">
          <div class="user-icon-container" style="display: inline-block;width: 100px;height: 100px;">
              <img :src="img" alt="" style="display: block;width: 100px;height: 100px;border-radius: 50%;border: 1px solid #000">
          </div>
        </div>
      </el-col>
      <el-col :span="16">
          <span class="user-info-name">{{name}}</span>
          <el-row>
            <el-col :span="6" class="user-article-info">
              <countTo :startVal='startVal' :endVal='endVal' :duration='3000' class="countall"></countTo>
              <span class="info-item-text">新闻</span>
              <icon-svg icon-class="a" class="dashboard-editor-icon"></icon-svg>
            </el-col>
            <el-col :span="6" class="user-article-info">
              <countTo :startVal='startVal' :endVal='endVal' :duration='3000' class="countall"></countTo>
              <span class="info-item-text">帖子</span>
              <icon-svg icon-class="a" class="dashboard-editor-icon"></icon-svg>
            </el-col>
            <el-col :span="6" class="user-article-info">
              <countTo :startVal='startVal' :endVal='endVal' :duration='3000' class="countall"></countTo>
              <span class="info-item-text">资料库</span>
              <icon-svg icon-class="a" class="dashboard-editor-icon"></icon-svg>
            </el-col>

          </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="24">
        <a class="pan-btn green-btn" v-for="role in roleData" v-show="role!==''">{{role}}</a>
      </el-col>

    </el-row>
    <el-row :gutter="24">
      <el-col :span="24">
        <div class="user-detail-home clearfix">
          <p class="finish-rec">最近完成</p>
          <el-table
                  :data="tableData"
                  style="width: 100%">
            <el-table-column
                   >
              <template scope="scope">
                <span>已发布</span>
                <span style="color: #30B08F;margin-left: 10px">{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column
                   >
              <template scope = "scope">
                <span class="el-icon-time">{{scope.row.date}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
      <div class="components-container" style='height:100vh'>
          <div class='chart-container'>
              <line-marker height='100%' width='100%'></line-marker>
          </div>
      </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import lineMarker from '../../components/Charts/lineMarker';
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";
    import countTo from 'vue-count-to';
    export default {
        components: {
            ElCol,
            ElRow,
            countTo,
            lineMarker
        },
      name: 'dashboard',
     /* computed: {
        ...mapGetters([
          'name',
          'roles'
        ])
      },*/
        computed: mapGetters(['sidebar','name']),
        mounted(){
          this.roleData = this.roles.split(",");
        },
      data(){
          return{

              roleData:[],
              img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502089137390&di=bc848a905cf5defbdb7d1a361608290e&imgtype=0&src=http%3A%2F%2Fpic74.nipic.com%2Ffile%2F20150728%2F18138004_201107753000_2.jpg',
              startVal: 0,
              endVal: 2017,
              tableData: [{
                  date: '2016-05-02',
                  name: '磁铁知识报告会展',
              }, {
                  date: '2016-05-04',
                  name: '磁铁知识报告会展',
              }, {
                  date: '2016-05-01',
                  name: '磁铁知识报告会展',
              }, {
                  date: '2016-05-03',
                  name: '磁铁知识报告会展',
              }]
          }
      },

    }
</script>

<style scoped>
  .chart-container{
    position: relative;
    width: 100%;
    height: 80%;
  }
    .dashboard-container{
      padding: 30px;
    }
    .pan-btn{
      margin-bottom: 8px;
    }
    .finish-rec{
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #ccc;
      color: #324157;
      height: 40px;
      line-height: 40px;
    }
    .el-icon-time{
      color: #ccc;
    }
    .user-detail-home{
      width: 100%;
      height: auto;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0 12px;
    }

    .el-row {
      margin-bottom: 20px;
    &:last-child {
       margin-bottom: 0;
     }
    }
    .countall{
      font-weight: 600;
      height: 40px;
      display: inline-block;
      font-size: 18px;
    }
    .user-info-name{
      display: block;
      font-size: 20px;
      height: 30px;
      line-height: 30px;
      font-weight: 600;
      margin-bottom: 30px;
      border-radius: 50%;
      width: 100px;
      text-align: left;
      color: #30B08F;
    }
    .user-icon{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .info-item-text{
      margin-left: 6px;
      font-size: 14px;
    }
    .dashboard-editor-icon{
      margin-left: 6px;
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
        text-align: center;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
</style>
