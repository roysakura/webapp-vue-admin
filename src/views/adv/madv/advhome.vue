<template>
    <div class="adv-home-container">
        <el-table
                :data="tableData5"
                style="width: 100%">
            <el-table-column type="expand">
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
            <el-table-column
                    label="广告标题"
                    prop="id">
            </el-table-column>
            <el-table-column
                    label="到期日"
                    prop="name">
            </el-table-column>
            <el-table-column
                    label="点击率"
                    prop="desc">
            </el-table-column>
            <el-table-column
                    label="状态"
                    prop="category">
            </el-table-column>
        </el-table>
    </div>
</template>

<style>
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
    .detail-item{
        width: 100%;
    }
    .detail-item-left{
        float: left;
        width: 30%;
    }
</style>

<script>
    import circleMarker from '../../../components/Charts/circleMarker.vue';
    export default {
        components:{
            circleMarker
        },
        data() {
            return {
                options:{
                    tooltip: {
                        trigger: 'item',           // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
                        showDelay: 20,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                        hideDelay: 100,            // 隐藏延迟，单位ms
                        transitionDuration : 0.4,  // 动画变换时间，单位s
                        backgroundColor: 'rgba(0,0,0,0.7)',     // 提示背景颜色，默认为透明度为0.7的黑色
                        borderColor: '#333',       // 提示边框颜色
                        borderRadius: 4,           // 提示边框圆角，单位px，默认为4
                        borderWidth: 0,            // 提示边框线宽，单位px，默认为0（无边框）
                        padding: 5,                // 提示内边距，单位px，默认各方向内边距为5，
                                                   // 接受数组分别设定上右下左边距，同css
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
                            lineStyle : {          // 直线指示器样式设置
                                color: '#48b',
                                width: 2,
                                type: 'solid'
                            },
                            shadowStyle : {                       // 阴影指示器样式设置
                                width: 'auto',                   // 阴影大小
                                color: 'rgba(150,150,150,0.3)'  // 阴影颜色
                            }
                        },
                        textStyle: {
                            color: '#fff'
                        },
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        show: false,
                        orient: 'vertical',
                        x: 'left',
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
                                {value: 20, name: '20%\n投放位置 新能源汽车资讯\n阅读人数 223人\n点击次数 123次'},
                                {value: 30, name: '30%\n投放位置 新能源汽车资讯\n阅读人数 223人\n点击次数 123次'}
                            ]
                        }
                    ],
                    color: ['rgb(61,171,232)','rgb(95,193,215)','rgb(146,198,96)','rgb(59,175,134)','rgb(53,128,198)']
                },
                tableData5: [{
                    id: '好滋好味鸡蛋仔',
                    name: '2017-06-1',
                    category: '进行中',
                    desc: '342',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '好滋好味鸡蛋仔',
                    name: '2017-07-1',
                    category: '进行中',
                    desc: '342',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '好滋好味鸡蛋仔',
                    name: '2017-08-1',
                    category: '进行中',
                    desc: '342',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '好滋好味鸡蛋仔',
                    name: '2017-09-1',
                    category: '进行中',
                    desc: '342',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }],
                tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
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
        }
    }
</script>