<!-- 柱状 拆线图 -->
<template>
    <div id="demo2" style="width: 800px;height: 400px; "></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'echartsDemo2',
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
        backgroundColor: '#ffffff',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        // toolbox: {
        //     feature: {
        //         dataView: { show: true, readOnly: false },
        //         magicType: { show: true, type: ['line', 'bar'] },
        //         restore: { show: true },
        //         saveAsImage: { show: true }
        //     }
        // },
        legend: {
          data: ['期初存量', '新增投放', '期末存量', '平均收益率-期初', '平均收益率-新增', '平均收益率-期末'],
          // icon: 'rect', //图例形状
          // padding: 0,
          bottom: 0
          // // right: 200,
          // itemWidth: 10, //小圆点宽度
          // itemHeight: 10, // 小圆点高度
          // itemGap: 20, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
          // textStyle: {
          //     fontSize: 12,
          //     color: '#000',
          // },
          // itemStyle:{
          //     borderWidth:0
          // },
        },
        xAxis: [
          {
            type: 'category',
            data: ['合肥', '杭州', '苏州', '宁波', '南京', '上海', '深圳', '长春', '北京', '天津'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '万元',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              // formatter: '{value} ml'
            }
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
          }
        ],
        series: [
          {
            name: '期初存量',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              borderWidth: 0,
              borderRadius: [3, 3, 0, 0]
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 万元'
              }
            },
            data: [
              22.0, 14.9, 27.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ]
          },
          {
            name: '新增投放',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              borderWidth: 0,
              borderRadius: [3, 3, 0, 0]
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 万元'
              }
            },
            data: [
              32.6, 45.9, 39.0, 76.4, 58.7, 40.7, 125.6, 142.2, 148.7, 118.8, 56.0, 22.3
            ]
          },
          {
            name: '期末存量',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              borderWidth: 0,
              borderRadius: [3, 3, 0, 0]
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 万元'
              }
            },
            data: [
              42.6, 25.9, 69.0, 46.4, 24.7, 70.7, 75.6, 48.7, 18.8, 182.2, 166.0, 2.3
            ]
          },
          {
            name: '平均收益率-期初',
            type: 'line',
            showSymbol: false,
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %'
              }
            },
            data: [12.0, 22.2, 10.2, 20.3, 13.4, 23.0, 8.3, 11.5, 6.3, 16.5, 12.0, 6.2]
          }, {
            name: '平均收益率-新增',
            type: 'line',
            showSymbol: false,
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %'
              }
            },
            data: [14.5, 21.3, 10.2, 8.0, 12.2, 13.3, 20.3, 23.4, 21.0, 16.5, 12.0, 6.2]
          },
          {
            name: '平均收益率-期末',
            type: 'line',
            yAxisIndex: 1,
            showSymbol: false,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %'
              }
            },
            data: [22.2, 23.3, 17.5, 24.3, 21.2, 20.3, 23.4, 23.0, 16.5, 22.0, 22.0, 12.2]
          }
        ]
      }

      this.myChart.setOption(option)
    }

  },
  mounted () {
    this.myChart = this.$echarts.init(document.getElementById('demo2'))
    this.drawLine()
  }
}
</script>

<style scoped lang="scss"></style>
