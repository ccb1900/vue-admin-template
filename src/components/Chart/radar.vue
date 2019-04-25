<template>
  <div class="chart" />
</template>

<script>
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
export default {
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
      this.chart.setOption({
        backgroundColor: 'rgba(204,204,204,0.7 )',
        title: {
          text: '基础雷达图'
        },
        tooltip: {},
        legend: {
          width: 200,
          right: 10,
          bottom: 10,
          orient: 'vertical',
          data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
        // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: 'R型', max: 100 },
            { name: 'C型', max: 100 },
            { name: 'I型', max: 100 },
            { name: 'E型', max: 100 },
            { name: 'A型', max: 100 },
            { name: 'S型', max: 100 }
          ]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [20, 20, 20, 20, 20, 20],
              name: '预算分配（Allocated Budget）',
              areaStyle: {
                normal: {
                  color: 'rgba(255,0,0,0.6)'
                }
              }
            },
            {
              value: [60, 60, 60, 60, 60, 60],
              name: '实际开销（Actual Spending）',
              areaStyle: {
                normal: {
                  color: 'rgba(255,0,0,0.6)'
                }
              }
            }
          ]
        }]
      })
    }
  }
}
</script>

<style scope>
.chart {
    /* width: 600px; */
    height: 500px;
}
</style>
