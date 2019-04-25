import echarts from 'echarts/lib/echarts'

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$chart', {
      value: echarts
    })
  }
}
