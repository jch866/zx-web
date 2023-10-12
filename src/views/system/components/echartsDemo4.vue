<!-- 拆线图 -4 -->
<template>
    <div id="demo4" style="width: 400px;height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'echartsDemo4',
  props: {

  },

  data () {
    this.myChart = null
    return {
      data: []
    }
  },
  methods: {
    drawLine () {
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
          // formatter: (params) => {
          //     console.log(params)

          // }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['合肥', '杭州', '苏州', '宁波', '南京', '上海', '深圳', '长春', '北京', '天津']
        },
        yAxis: [{
          type: 'value',
          name: '万元'
        },
        {
          type: 'value',
          name: '',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} %'
          }
        }],
        legend: {
          left: 'center',
          bottom: '0',
          borderRadius: 10,
          itemWidth: 10,
          itemHeight: 10,
          icon: 'circle'
        },
        series: [
          {
            name: '加权平均期限',
            data: [32.6, 45.9, 39.0, 76.4, 58.7, 80.7, 125.6, 142.2, 148.7, 118.8, 56.0, 122.3],
            type: 'line',
            smooth: false,
            // symbol: 'none',
            showSymbol: false,

            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#a3d9f5'
                },
                {
                  offset: 0.9,
                  color: 'rgb(255, 255, 255)'
                }
              ])
            },

            // itemStyle: {
            //     color: '#3072ef'
            // },
            emphasis: {
              itemStyle: {
                color: 'yellow'
              }
            }
          }
        ]
      }
      this.myChart.setOption(option)
    }

  },
  mounted () {
    this.myChart = this.$echarts.init(document.getElementById('demo4'))
    this.drawLine()
  }
}
</script>

<style scoped lang="scss"></style>
