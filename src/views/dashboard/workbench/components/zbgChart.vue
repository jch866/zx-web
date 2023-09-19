<!-- 环形图 -->
<template>
  <div :id="'cardbg' + id" :ref="'cardbg' + id" style="width: 100%;height: 250px;" class="card-bg"></div>
</template>

<script>
import * as echarts from 'echarts'
import { mapState} from 'vuex'
export default {

  props: {
    id: {
      type: String
    },
    list: {
      type: Array,
      default: []
    }
  },
  watch: {
    asideCollapse(newval, oldval) {
        this.resizeHandler();
    }
  },
  computed: {
    ...mapState('d2admin', {
      asideCollapse: (state) => state.menu.asideCollapse,
    }),
  },
  data () {
    return {
      data: [],
      colormap: {
        1: '#FF5850',
        2: '#4B73EF',
        3: '#9A74FF',
        4: '#FFA526',
        5: '#DB5CEE'
      }
    }
  },
  methods: {
    resizeHandler(){
      const dom = document.getElementById(`cardbg${this.id}`);
      const dow1 =  document.querySelectorAll('.card-top')[0];
      dom.style.width = dow1.offsetWidth + 'px';
      const myChart = this.$echarts.init(document.getElementById(`cardbg${this.id}`))
      myChart.resize();
    }
  },
  mounted () {
    const myChart = this.$echarts.init(document.getElementById(`cardbg${this.id}`))
    const option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2023/03', '2023/04', '2023/05', '2023/06', '2023/07', '2023/08', '2023/09'],
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisPointer: {
          show: false
        },
        splitArea: {
          show: false
        },
        show: false
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisPointer: {
          show: false
        },
        splitLine: {
          show: false
        },
        show: false
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
          // name:'资产规模总余额',
          data: (this.list.length > 0 && this.list.length === 7) ? this.list : [820, 932, 1901, 934, 1290, 930, 820],
          type: 'line',
          smooth: true,
          symbol: 'none',
          itemStyle: {
            color: this.colormap[this.id]
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: this.colormap[this.id]
              },
              {
                offset: 1,
                color: 'rgb(255, 255, 255)'
              }
            ])
          }
        }
      ]
    }
    myChart.setOption(option);
    window.addEventListener("resize", () => {
      this.resizeHandler();
    });
    // this.drawLine()
  }
}
</script>

<style scoped lang="scss">
.card-bg {
  position: absolute;
  top: -15%;
  left: 0;
  z-index: 0;
}
</style>
