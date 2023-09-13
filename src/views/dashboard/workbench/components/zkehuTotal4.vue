<!-- 环形图 -->
<template>
    <div id="region4" style="width: 300px;height: 300px;"></div>
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
                xAxis: {
                    type: 'category',
                    boundaryGap:false,
                    data: ['2023/03', '2023/04', '2023/05', '2023/06', '2023/07', '2023/08', '2023/09']
                },
                yAxis: {
                    type: 'value'
                },
                legend: {
                    left: 'center',
                    bottom:'0',
                    borderRadius: 10,
                    itemWidth: 10,
                    itemHeight: 10,
                    icon: 'circle'
                },
                series: [
                    {
                        name:'资产规模总余额',
                        data: [820, 932, 901, 934, 1290, 930, 820],
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        itemStyle: {
                            color: 'rgb(255, 70, 131)'
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(255,86,98,1)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgb(255, 255, 255)'
                            }
                            ])
                        },
                    }
                ]
            };
            this.myChart.setOption(option)
        }
    },
    mounted() {
        console.log(23)
        this.myChart = this.$echarts.init(document.getElementById('region4'))
        this.drawLine()
    }
}
</script>

<style scoped lang="scss">
 
</style>
