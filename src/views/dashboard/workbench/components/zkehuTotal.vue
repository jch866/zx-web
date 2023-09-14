<!-- 地图 -->
<template>
  <div id="region1" style="width: 400px;height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts'
// 引入中国地图的JSON数据
import chinaJSON from './china.json'
export default {
  // sort: 7,
  // title: '登录区域分布',
  // name: 'loginRegion',
  // icon: 'el-icon-s-data',
  // description: '登录区域分布详情',
  // height: 28,
  // width: 20,
  // isResizable: true,
  props: {
    // pxData: {
    //   type: Object,
    //   require: false,
    //   default: () => ({
    //     wpx: 0,
    //     hpx: 0
    //   })
    // }
  },
  watch: {
    // pxData: {
    //   handler () {
    //     // eslint-disable-next-line no-unused-expressions
    //     this.myChart?.resize({ width: this.pxData.wpx, height: this.pxData.hpx })
    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
  data () {
    this.myChart = null
    return {
      data: []
    }
  },
  methods: {

    // initGet () {
    //   request({
    //     url: '/api/system/datav/login_region/'
    //   }).then((res) => {
    //     this.data = res.data
    //     this.drawLine(this.data)
    //   })
    // },
    // 生成一个随机整数
    randomColor () {
      const color = ['#fffff']
      const ran = Math.floor(Math.random() * 4)
      return color[ran]
    },
    drawLine () {
      const option = {
        // 地图组件
        geo: {
          map: 'china', // 中国地图
          // roam: true, //鼠标缩放的效果
          // 地图的位置调试
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          // 地图上的文字的设置
          label: {
            show: false, // 文字显示出来
            color: 'white',
            fontSize: 12
          },

          itemStyle: {
            // 每一个多边形的样式
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#efefef' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#efefef' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            },
            opacity: 0.8
          },
          // 地图高亮的效果
          emphasis: {
            itemStyle: {
              color: 'gray'
            },
            label: {
              fontSize: 12,
              color: 'blue'
            }
          }
        },
        // 布局位置
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        },

        series: [
          {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [{ name: '荣成', value: 34 },
              { name: '连云港', value: 35 },
              { name: '葫芦岛', value: 35 },
              { name: '常熟', value: 36 }],
            symbolSize: function (val) {
              return val[2] / 10
            },
            encode: {
              value: 2
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: [{ name: '阳泉', value: 31 },
              { name: '莱州', value: 32 },
              { name: '湖州', value: 32 },
              { name: '汕头', value: 32 },
              { name: '昆山', value: 33 },
              { name: '宁波', value: 33 }],
            symbolSize: function (val) {
              return val[2] / 10
            },
            encode: {
              value: 2
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: true
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: '#333'
            },
            emphasis: {
              scale: true
            },
            zlevel: 1
          }
        ]
      }

      this.myChart.setOption(option)
    }
  },
  mounted () {
    this.myChart = this.$echarts.init(document.getElementById('region1'))
    this.$echarts.registerMap('china', chinaJSON)
    // this.initGet()
    this.drawLine()
  }
}
</script>

<style scoped lang="scss">
.card-view {
  //border-radius: 10px;
  color: $color-primary;
}

.el-card {
  height: 100%;
}
</style>
