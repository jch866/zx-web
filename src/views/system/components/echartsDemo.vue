<!-- 双向柱状图 -1 -->
<template>
  <div id="demo1" style="width: 800px;height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'echartsDemo',
  props: {

  },

  data() {
    this.myChart = null
    return {
      data: []
    }
  },
  methods: {
    drawLine() {
      const backgroundColor = '#ffffff'
      const colors = ['#3072ef', '#00c1ff']
      const title = {
        show: true,
        text: '图表类型',
        textStyle: {
          fontSize: 14
          // color: '#ffffff',
          // fontFamily: 'PingFangSC-Medium, PingFang SC',
          // fontWeight: 500,
          // textShadowColor: '#4bb2ff',
          // textShadowBlur: 12,
          // textShadowOffsetX: 0,
          // textShadowOffsetY: 0,
        },
        padding: 0,
        top: 20,
        left: 20
      }
      const legend = {
        show: true,
        // data，就是取得每个series里面的name属性。
        orient: 'horizontal',
        icon: 'rect', // 图例形状
        padding: 0,
        bottom: 0,
        // right: 200,
        itemWidth: 10, // 小圆点宽度
        itemHeight: 10, // 小圆点高度
        itemGap: 20, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
          fontSize: 12,
          color: '#000'
        },
        itemStyle: {
          borderWidth: 0
        }
        // align:"left"
      }
      const tooltip = {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        // 之所以formatter写的那么复杂是因为数据里面是负数。要把负数转为正数
        formatter: (params) => {
          let str = `<div>${params[0].name}</div>`
          return str += params
            .map((item) => {
              return `<div><span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color}"></span>
                ${item.seriesName} ${Math.abs(item.value)}</div>
                `
            })
            .join('')
        }
      }
      const getBorderRadius = (index) => {
        if (index === 0) return [0, 5, 5, 0]
        if (index === 1) return [5, 0, 0, 5]
        return 0
      }
      // x轴
      const nameArr = [
        '合肥',
        '杭州',
        '苏州',
        '宁波',
        '南京',
        '上海',
        '深圳',
        '长春',
        '北京',
        '天津'
      ]

      const originData = [
        {
          name: '产品规模',
          value: [400, 241, 360, 320, 302, 341, 374, 390, 450, 420, 345, 257]
        },
        {
          name: '资产规模',
          value: [-120, -180, -320, -220, -132, -301, -434, -190, -230, -210, -234, -145]
        }
      ]

      const series = originData.map((item, index) => ({
        name: item.name,
        type: 'bar',
        stack: 'total',
        label: {
          show: false // 不显示item上面的数字
        },
        lineStyle: {
          width: 2,
          color: colors[index] // 线条颜色
        },
        barWidth: 12,
        itemStyle: {
          color: colors[index],
          borderColor: '#ccc',
          borderWidth: 0,
          borderRadius: getBorderRadius(index)
        },
        data: item.value
      }))

      const option = {
        backgroundColor,
        title,
        tooltip,
        legend,

        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value',
            show: true,
            axisLabel: {
              show: true,
              formatter: function (value, index) {
                return value < 0 ? -value : value;
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed'

              },
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: nameArr,
            axisLabel: {
              color: '#333',
              fontSize: 14
            },
            axisLine: {
              show: false
            }
          }
        ],

        series: series
      }

      this.myChart.setOption(option)
    }
    //   resizeHandler () {
    //     const dom = document.getElementById('demo1')
    //     const dow1 = document.querySelectorAll('.card-bottom')[0]
    //     dom.style.width = dow1.offsetWidth + 'px'
    //     console.log('resize')
    //     this.myChart.resize()
    //   }
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById('demo1'))
    this.drawLine()
    //   window.addEventListener('resize', () => {
    //     this.resizeHandler()
    //   })
  }
}
</script>

<style scoped lang="scss"></style>
