<!-- 环形图 -->
<template>
    <div id="region6" style="width: 300px;height: 300px;"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {

    props: {

    },
    watch: {

    },
    data() {
        this.myChart = null
        return {
            data: []
        }
    },
    methods: {
        drawLine() {
            let option = {
                legend: {
                    left: 'center',
                    bottom: '0',
                    borderRadius: 10,
                    itemWidth: 10,
                    itemHeight: 10,
                    icon: 'circle',
                },
                tooltip: {},
                xAxis: { type: 'category',data:['北京分行', '上海分行', '厦门分行','福州分行'] },
                yAxis: {name:'万元'},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{
                    type: 'bar',
                    barWidth: "8px",
                    data:[43.3,83.1, 86.4,72.4],
                    name:'直销',

                }, {
                    type: 'bar',
                    barWidth: "8px",
                    data:[85,73.1, 65.4,53.9],
                    name:'母行代销',

                }, {
                    type: 'bar',
                    barWidth: "8px",
                    data:[93.3,55.1, 82.4,39.4],
                    name:'他行代销',
                    // emphasis: {
                    //     focus: 'series'
                    // },
                }]
            };
          
            this.myChart.setOption(option)
        }
    },
    mounted() {
        this.myChart = this.$echarts.init(document.getElementById('region6'))
        this.drawLine()
    }
}
</script>

<style scoped lang="scss"></style>
