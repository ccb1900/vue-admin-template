<template>
  <div id="chart-pie" class="chart" />
</template>

<script>
import 'echarts/lib/chart/pie'
export default {
  data() {
    return {
      chart: {}
    }
  },
  mounted() {
    this.initCharts()
    console.log(this.$el)
  },
  methods: {
    initCharts() {
      this.chart = this.$chart.init(this.$el)
      this.setOptions()
    },
    setOptions() {
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          bottom: 10,
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      }
      this.chart.setOption(option)
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
