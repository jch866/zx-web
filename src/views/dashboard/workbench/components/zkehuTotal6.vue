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
                },
                tooltip: {},
                dataset: {
                    dimensions: ['product', '2015', '2016', '2017'],
                    source: [
                        { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
                        { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
                        { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
                        { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
                    ]
                },
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{
                    type: 'bar',
                    
                }, {
                    type: 'bar',
                     
                }, {
                    type: 'bar',
                    // emphasis: {
                    //     focus: 'series'
                    // },
                }]
            };

            this.myChart.setOption(option)
        }
    },
    mounted() {
        console.log(23)
        this.myChart = this.$echarts.init(document.getElementById('region6'))
        this.drawLine()
    }
}
</script>

<style scoped lang="scss"></style>
