<template>
  <div>
    <div class="chart" />
    <el-button type="primary" @click="more">more</el-button>
  </div>
</template>

<script>
/** *
 * 可以考虑每个画一个图分别是独立的chart实例
 * https://www.echartsjs.com/examples/editor.html?c=bar-y-category-stack
 */
import 'echarts/lib/chart/bar'
// import echarts from 'echarts'
export default {
  data() {
    return {
      y: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    }
  },
  mounted() {
    this.initCharts()
    console.log(this.$el, this.$chart)
  },
  methods: {
    more() {
      // 应该获取数据 重新渲染图表
      this.setOptions()
    },
    initCharts() {
      this.chart = this.$chart.init(document.querySelector('div.chart'))
      this.setOptions()
    },
    setOptions() {
      this.chart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
        //   data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          show: false
        },
        yAxis: {
          // show : false,
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<style scope>
.chart {
    width: 600px;
    height: 400px;
}
</style>
