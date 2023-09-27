<!-- 环形图 -->
<template>
  <div id="region7" style="width: 300px;height: 300px;"></div>
</template>

<script>
import * as echarts from 'echarts'
import { mapState, mapGetters, mapActions } from 'vuex'
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
        grid: {
          // left: '3%',
          // right: '4%',
          // bottom: '3%',
          // containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thuo']
        },
        series: [
          {
            name: 'Direct',
            type: 'bar',
            label: {
              show: false
            },
            // emphasis: {
            //     focus: 'series'
            // },
            data: [320, 302, 301, 334]
          },
          {
            name: 'Mail Ad',
            type: 'bar',
            label: {
              show: false
            },
            data: [120, 132, 101, 134]
          },
          {
            name: 'Affiliate Ad',
            type: 'bar',
            label: {
              show: false
            },
            data: [220, 182, 191, 234]
          }
        ]
      }

      this.myChart.setOption(option)
    },
    resizeHandler () {
      const dom = document.getElementById('region7')
      const dow1 = document.querySelectorAll('.card-bottom')[0]
      dom.style.width = dow1.offsetWidth + 'px'
      console.log('resize')
      this.myChart.resize()
    }
  },
  mounted () {
    this.myChart = this.$echarts.init(document.getElementById('region7'))
    this.drawLine()
    window.addEventListener('resize', () => {
      this.resizeHandler()
    })
  }
}
</script>

<style scoped lang="scss"></style>
