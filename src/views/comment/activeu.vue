<template>
    <div class="components-container" style='height:100vh'>
        <div class='chart-container'>
            <div class="filter-container">
                <el-select v-model="value" placeholder="请选择" class="select-container">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <div class="block" style="display: inline-block">
                    <el-date-picker
                            v-model="value4"
                            type="datetimerange"
                            :picker-options="pickerOptions2"
                            placeholder="选择时间范围"
                            align="right">
                    </el-date-picker>
                </div>
                <el-button class="filter-item" type="primary" icon="search">搜索</el-button>
            </div>
            <mix-chart id='apple' height='100%' width='100%'></mix-chart>
        </div>
    </div>
</template>

<script>
    import mixChart from '../../components/Charts/mixChart';

    export default {
        components: { mixChart },
        data(){
            return{
                options: [{
                    value: '选项1',
                    label: '上周'
                }, {
                    value: '选项2',
                    label: '两周前'
                }, {
                    value: '选项3',
                    label: '五周前'
                }, {
                    value: '选项4',
                    label: '七周前'
                }, {
                    value: '选项5',
                    label: '九周前'
                }],
                value: '',
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
                value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                value4: ''
            }
        }
    };
</script>

<style scoped>
    .chart-container{
        position: relative;
        width: 100%;
        height: 90%;
        padding-bottom: 40px;
    }
    .select-container{
        width: 300px;
        display: inline-block;
        margin-left: 60px;
    }
    .filter-container{
        margin-bottom: 20px;
        width: 100%;
    }
</style>

