<template>
    <div class="card-top" :style="{ 'borderLeft': `4px solid ${this.values.color}` }">
        <div class="c_t_title" :style="{ 'color': this.values.color }">{{ this.values.title }}</div>
        <zbg-chart :id="this.values.cid" :list="this.values.data" />
        <div class="c_t_mid">
            <div class="c_t_mid_left">
                <p class="left1_t">净利润(万元)</p>
                <p class="left1_b">45,498</p>
            </div>
            <div class="c_t_mid_right">
                <p class="right1_t">目标达成率</p>
                <p class="right1_b">
                    <d2-icon-svg slot="title" name='up' style="width: 15px;height: 15px;" />
                    <span>15.48%</span>
                </p>
            </div>
        </div>
        <div class="c_t_bottom">
            <div class="c_t_bottom_text">
                <p class="t1">较上年末(亿)</p>
                <p class="t2"><i class="el-icon-caret-top caret_top_style"></i>45,498</p>
            </div>
            <div class="c_t_bottom_text">
                <p class="t1">较上月末(亿)</p>
                <p class="t2"><i class="el-icon-caret-top caret_top_style"></i>26,88</p>
            </div>
            <div class="c_t_bottom_text">
                <p class="t1">较上日(亿)</p>
                <p class="t2"><i class="el-icon-caret-bottom caret_bottom_style"></i>26,88</p>
            </div>
        </div>
    </div>
</template>

<script >
import zbgChart from './zbgChart.vue'
export default {
  components: {
    zbgChart
  },
  props: ['values'],
  data () {
    return {
      colormap: [{
        color: '#FF5850',
        cid: '1'
      }, {
        color: '#4B73EF',
        cid: '2'
      }, {
        color: '#9A74FF',
        cid: '3'
      }, {
        color: '#FFA526',
        cid: '4'
      }, {
        color: '#DB5CEE',
        cid: '5'
      }],
      colormap1: {
        1: '#FF5850',
        2: '#4B73EF',
        3: '#9A74FF',
        4: '#FFA526',
        5: '#DB5CEE'
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@import './../cards.scss';
</style>
