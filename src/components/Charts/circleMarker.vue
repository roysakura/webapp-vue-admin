<template>
  <div :class="className" :id="id" :style="{height:height,width:width}" :options="options"></div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      id: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '200px'
      },
      height: {
        type: String,
        default: '200px'
      },
        options:{
          type:Object
        }
    },
    data() {
      return {
        chart: null,

      };
    },
    mounted() {
      this.initChart();
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      initChart() {
        this.chart = echarts.init(document.getElementById(this.id));
        //将数据进行填充
        this.chart.setOption(this.options);
      }
    }
}
</script>
