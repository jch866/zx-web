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
     let  option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    left: 'center',
    bottom:'0',
    borderRadius: 10,
    itemWidth: 10,
    itemHeight: 10,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['55%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

      this.myChart.setOption(option)
    }
  },
  mounted () {
    this.myChart = this.$echarts.init(document.getElementById('region2'))
    this.drawLine()
  }
}
</script>

<style scoped lang="scss">
 
</style>
