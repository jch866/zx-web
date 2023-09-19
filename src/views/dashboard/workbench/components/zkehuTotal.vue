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
      var points = [
        // 点坐标
        { value: [110.81, 33.40], itemStyle: { color: '#c1bb1f' }, name: '11', total: 0, bj: 0, yj: 0, yx: 0, tj: 0, dw: 0 },
        { value: [116.55, 40.01], itemStyle: { color: '#3eef1d' }, name: '北京', total: 0, bj: 0, yj: 0, yx: 0, tj: 0, dw: 0 },
        { value: [113.11, 28.40], itemStyle: { color: '#3eef1d' }, name: '22', total: 5, bj: 0, yj: 0, yx: 5, tj: 0, dw: 0 },
        { value: [106.44, 29.50], itemStyle: { color: '#3eef1d' }, name: '33', total: 10, bj: 0, yj: 0, yx: 10, tj: 0, dw: 0 },
        { value: [112.85, 38.95], itemStyle: { color: '#3eef1d' }, name: '44', total: 8, bj: 0, yj: 0, yx: 8, tj: 0, dw: 0 },
        { value: [82.78, 43.27], itemStyle: { color: '#3eef1d' }, name: '55', total: 18, bj: 0, yj: 0, yx: 18, tj: 0, dw: 0 }
      ]
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
            name: 'companyPoint',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            // zlevel: 2, // zlevel用于 Canvas 分层 相同的绘制在同一个canvas上
            rippleEffect: {
              number: 4, // 波纹数量
              period: 4, // 动画周期 数值越大，波动越慢
              scale: 3.5, // 动画中波纹的最大缩放比例
              brushType: 'stroke' // 波纹的绘制方式 stroke fill
            },
            label: {
              show: false,
              position: 'right',
              formatter: '{b}',
              color: '#97e9e1',
              fontSize: 14
            },
            symbol: 'circle',
            symbolSize: 10,
            data: points,
            tooltip: {
              show: false,
              backgroundColor: 'rgba(0,0,0,0)',
              padding: 0,
              borderWidth: 0,
              extraCssText: 'box-shadow: 0 0 0 rgba(0, 0, 0, 0);', // 去除box-shadow阴影
              formatter: (params) => { }
            },
            z: 4
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
