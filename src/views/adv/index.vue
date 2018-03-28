<template>
    <div class="news">
        <div class="filter-container">
            <el-input  style="width: 200px;" class="filter-item" placeholder="标题" v-model="advTi" id="sT">
            </el-input>
            <el-input  style="width: 200px;" class="filter-item" placeholder="公司名" v-model="cName" id="cName">
            </el-input>
             <el-date-picker
                        v-model="timeRange"
                        type="datetimerange"
                        :picker-options="pickerOptions2"
                        placeholder="选择有效期范围"
                        align="right">
             </el-date-picker>
            <el-button class="filter-item" type="primary"  icon="search" @click="goSearch(3)">搜索</el-button>
            <el-button class="filter-item" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="edit">添加</el-button>
        </div>
        <div class="news-list">
            <el-table :data="advDatas" border fit highlight-current-row style="width: 100%">
                <!--显示每一行的详细信息-->
                <el-table-column type="expand" align="center"  width="100">
                    <template scope="props">
                        <circleMarker height='200px' width='600px' :options="options"></circleMarker>
                        <div class="detail-item">
                            <div class="detail-item-left">
                                <el-table
                                        :data="tableData3"
                                        height="250"
                                        border
                                        style="width: 100%;float:left;">
                                    <el-table-column
                                            prop="address"
                                            label="投放位置">
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div class="detail-item-right" style="float: left;width: 70%;">
                                <el-table
                                        :data="table2"
                                        height="250"
                                        border
                                        style="width: 100%;float: left;">
                                    <el-table-column
                                            prop="ip"
                                            label="用户IP"
                                            width="180"
                                            align="center"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                            prop="cishu"
                                            label="次数"
                                            width="180"
                                            align="center"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                            prop="address"
                                            label="地区"
                                            align="center"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                            prop="time"
                                            label="时间"
                                            align="center"
                                    >
                                    </el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="序号" width="65">
                    <template scope="scope">
                        <span>{{scope.row.id}}</span>
                    </template>
                </el-table-column>
                <el-table-column width="110px" align="center" label="公司名">
                    <template scope="scope">
                        <span style='color:red;'>{{scope.row.company}}</span>
                    </template>
                </el-table-column>
                <el-table-column  label="标题" >
                    <template scope="scope">
                        <span class="link-type">{{scope.row.ad_name}}</span>
                    </template>
                </el-table-column>
               <!-- <el-table-column width="300px" align="center" label="连接">
                    <template scope="scope">
                        <a :href="scope.row.ad_link">{{scope.row.ad_link}}</a>
                    </template>
                </el-table-column>-->
                <el-table-column width="110px" align="right" label="点击率">
                    <template scope="scope">
                        <span >{{scope.row.click_count}}</span>
                    </template>
                </el-table-column>

                <el-table-column class-name="status-col" label="到期日" width="200px" align="right">
                    <template scope="scope">
                       <!-- <el-tag style="padding: 0 10px">{{scope.row.start_date}}</el-tag>
                        至-->
                        <el-tag style="padding: 0 10px">{{scope.row.end_date}}</el-tag>
                    </template>
                </el-table-column>

                <el-table-column align="center" label="操作" width="150">
                    <template scope="scope">
                        <el-button size="small" type="success" @click="goEditPage(scope.row.id)">编辑
                        </el-button>
                        <el-button  size="small" type="danger" @click="delById(scope.row.id)">删除
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
    import {getAdvs} from '../../api/adv'
    import {delAdvById} from '../../api/adv'
    import {searchAdv} from '../../api/adv'
    import circleMarker from '../../components/Charts/circleMarker.vue';
    export default{
        components:{
            circleMarker
        },
        data(){
            return{
                options:{
                    tooltip: {
                        trigger: 'item',           // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
                        //格式化显示数据的规则
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        show: false,
                        orient: 'vertical',
                        left: 'left',
                        //这里的数据也需要从服务器端进行填充
                        data: ['投放位置 新能源汽车资讯\n阅读人数 223人\n点击次数 123次', '投放位置 新能源汽车资讯\n阅读人数 223人\n点击次数 123次']
                    },
                    graphic:{
                        type:'text',
                        left:'center',
                        top:'center',
                        //这里的数据也需要从服务器端进行填充
                        style:{
                            text:'576次\n419人\n 阅读总数',
                            textAlign:'center',
                            fill:'#000',
                            width:40,
                            height:40
                        }
                    },
                    series: [
                        {
                            name:'访问来源',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            itemStyle: {
                                normal:{
                                    label:{
                                        show:true,
                                        textStyle:{color:'#3c4858',fontSize:"18"},
                                        formatter:function(val){   //让series 中的文字进行换行
                                            return val.name.split("-").join("\n");}
                                    },
                                    title:{
                                        text:'aaaa'
                                    },
                                    labelLine:{
                                        show:true,
                                        lineStyle:{color:'#3c4858'}
                                    }
                                },
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                                    textColor:'#000'
                                }
                            },
                            //这里的数据需要从服务器端进行填充
                            data: [
                                {value: 20, name: '40%\n投放位置 新能源汽车资讯\n阅读人数 223人\n点击次数 123次'},
                                {value: 30, name: '60%\n投放位置 新能源汽车资讯\n阅读人数 223人\n点击次数 123次'}
                            ]
                        }
                    ],
                    color: ['rgb(61,171,232)','rgb(95,193,215)','rgb(146,198,96)','rgb(59,175,134)','rgb(53,128,198)']
                },
                id:-111,
                dialogVisible:false,
                advTi:"",
                cName:"",
                currentPage:1,
                pageSize:8,//每页显示的条目数
                totalCount:0,//总条数
                advDatas:[],
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                timeRange: '',
                //临时数据
                tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                //临时数据
                table2:[
                    {
                        ip:"192.168.0.11",
                        cishu:32,
                        address:"深圳",
                        time:"2017-09-1"
                    },
                    {
                        ip:"192.168.0.11",
                        cishu:32,
                        address:"深圳",
                        time:"2017-09-1"
                    },
                    {
                        ip:"192.168.0.11",
                        cishu:32,
                        address:"深圳",
                        time:"2017-09-1"
                    },
                    {
                        ip:"192.168.0.11",
                        cishu:32,
                        address:"深圳",
                        time:"2017-09-1"
                    },
                    {
                        ip:"192.168.0.11",
                        cishu:32,
                        address:"深圳",
                        time:"2017-09-1"
                    },
                    {
                        ip:"192.168.0.11",
                        cishu:32,
                        address:"深圳",
                        time:"2017-09-1"
                    }
                ]
            }
        },
        mounted(){
          this.$nextTick(function () {
             this.getAdvDatas(1,this.pageSize);
             this.initSearch();
          });
        },
        methods: {
            initSearch(){
                const _this = this;
                //根据标题进行搜索
                $('#sT').bind('input propertychange', function() {
                    _this.goSearch(1);
                });
                //根据公司名进行搜索
                $('#cName').bind('input propertychange', function() {
                    _this.goSearch(2);
                });
            },
            /**
             * 根据flage去进行搜索
             * */
            goSearch(flag){
                let start_date = null;
                let end_date = null;
                if(flag ===1){
                    this.cName = null;
                }
                if(flag ===2){
                    this.advTi = null;
                }
                //根据有效日期的范围去进行搜索
                if(flag === 3){
                    this.advTi = null;
                    this.cName = null;
                    start_date = this.timeRange[0];
                    end_date = this.timeRange[1]
                }
                //搜索广告
                searchAdv(this.advTi,this.cName,start_date,end_date,0,this.pageSize).then((res)=>{
                    this.advDatas = [];
                    let tempArr = [];
                    if(res.status === 200){
                        tempArr = res.data.data.detail.hits.hits;
                        this.totalCount = res.data.data.detail.hits.total;
                    }
                    console.log("TempArr length:",tempArr.length);
                    const len = tempArr.length;
                    if(len<=0){
                        this.getAdvDatas(1,this.pageSize);
                    }else{
                        for(let i = 0;i<len;i++){
                            tempArr[i]._source.id = tempArr[i]._id;
                            tempArr[i]._source.ad_name = tempArr[i]._source.title;
                            this.advDatas.push(tempArr[i]._source);
                        }
                    }

                },(err)=>{

                });
            },
            showMsg(str,flag){
                this.$message({
                    message:str,
                    type:flag ? "success":"warning"
                })
            },
            /**
             * 获取广告数据
             * @param page
             * @param pageSize
             */
            getAdvDatas(page,pageSize){
                getAdvs(page,pageSize).then((res)=>{
                    if(res.status === 200){
                        this.totalCount = res.data.data.total_count;
                        this.advDatas = res.data.data.detail;
                        console.log("获取到的广告数据是:",this.advDatas);
                    }
                },(err)=>{

                });
            },
            /**
             * 根据当前页请求数据
             * */
            handleCurrentChange(val) {
                this.getAdvDatas(val,this.pageSize);
            },

            //添加新闻
            handleCreate(){
                this.$router.push({path: '/adv/addadv', replace: true});
            },
            /**
             * 删除处理操作
             */
            delReal(){
                this.dialogVisible = false;
                const _this = this;
                delAdvById(this.id).then((res)=>{
                 _this.showMsg("删除成功!",true);
                 setTimeout(function () {
                 _this.$router.go(0);
                 },500)
                 },(err)=>{
                  _this.showMsg("删除失败",false);
                 });
            },
            delById(id){
                this.dialogVisible = true;
                this.id = id;

            },
            goEditPage(id){
                this.$router.push({name: '编辑广告', params: {
                    advId: id,
                },replace: true})
            },
        },
    }
</script>
<style scoped>
    #chart{
        margin: 0 auto;
    }
    .filter-container{
        width: 100%;
        margin: 20px;
    }
    .block{
        width: 100%;
        margin: 20px auto;
    }
    .detail-item{
        width: 100%;
    }
    .detail-item-left{
        float: left;
        width: 30%;
    }
</style>