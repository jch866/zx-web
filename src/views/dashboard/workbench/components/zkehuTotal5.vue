<!-- 环形图 -->
<template>
  <div id="region5" style="width: 300px;height: 300px;"></div>
</template>

<script>
import * as echarts from 'echarts'
import { mapState } from 'vuex'
export default {

  props: {

  },
  watch: {
    asideCollapse (newval, oldval) {
      this.resizeHandler()
    }
  },
  computed: {
    ...mapState('d2admin', {
      asideCollapse: (state) => state.menu.asideCollapse
    })
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
        legend: {
          left: 'center',
          bottom: '0',
          borderRadius: 10,
          itemWidth: 10,
          itemHeight: 10,
          icon: 'circle'
        },
        tooltip: {},
        dataset: {
          dimensions: ['product', '直销', '母行代销', '他行代销'],
          source: [
            { product: '北京分行', 直销: 43.3, 母行代销: 85.8, 他行代销: 93.7 },
            { product: '上海分行', 直销: 83.1, 母行代销: 73.4, 他行代销: 55.1 },
            { product: '厦门分行', 直销: 86.4, 母行代销: 65.2, 他行代销: 82.5 },
            { product: '福州分行', 直销: 72.4, 母行代销: 53.9, 他行代销: 39.1 }
          ]
        },
        xAxis: { type: 'category' },
        yAxis: { name: '万元' },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{
          type: 'bar',
          barWidth: '8px'

        }, {
          type: 'bar',
          barWidth: '8px'

        }, {
          type: 'bar',
          barWidth: '8px'
          // emphasis: {
          //     focus: 'series'
          // },
        }]
      }

      this.myChart.setOption(option)
    },
    resizeHandler () {
      const dom = document.getElementById('region5')
      const dow1 = document.querySelectorAll('.card-bottom')[0]
      dom.style.width = dow1.offsetWidth + 'px'
      console.log('resize')
      this.myChart.resize()
    }
  },
  mounted () {
    this.myChart = this.$echarts.init(document.getElementById('region5'))
    this.drawLine()
    window.addEventListener('resize', () => {
      this.resizeHandler()
    })
  }
}
</script>

<style scoped lang="scss"></style>
