<!-- 环形图 -->
<template>
  <div id="region2" style="width: 300px;height: 300px;"></div>
</template>

<script>

export default {

  props: {

  },
  watch: {

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
          trigger: 'item'
        },
        title: {
          text: '总额度(元)', // 图表内容文本
          subtext: '23,400',
          left: 'center', // 图表内容水平居中
          top: '40%', // 图表内容垂直居中
          textStyle: {
            color: '#191919',
            fontSize: 12
          },
          // 文本样式
          subtextStyle: {
            color: '#191919',
            fontSize: 40
          }
        },
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
            name: '资产规模',
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: 20,
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '货币市场工具' },
              { value: 735, name: '债权类' },
              { value: 580, name: '项目类' },
              { value: 484, name: '股票市场' },
              { value: 300, name: '非货币基金' },
              { value: 300, name: '其它资产' }
            ]
          }
        ]
      }

      this.myChart.setOption(option)
    }
  },
  mounted () {
    this.myChart = this.$echarts.init(document.getElementById('region2'))
    this.drawLine()
  }
}
</script>

<style scoped lang="scss"></style>
