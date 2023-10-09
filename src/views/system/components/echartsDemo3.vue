<!-- 双向柱状图 -2 -->
<template>
    <div id="demo3" style="width: 800px;height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    name: 'echartsDemo3',
    props: {

    },

    data() {
        this.myChart = null
        return {
            data: []
        }
    },
    methods: {
        drawLine() {
            const backgroundColor = '#ffffff'
            const colors = ['#3072ef', '#00c1ff']
            const title = {
                show: true,
                text: '图表类型',
                textStyle: {
                    fontSize: 14
                    // color: '#ffffff',
                    // fontFamily: 'PingFangSC-Medium, PingFang SC',
                    // fontWeight: 500,
                    // textShadowColor: '#4bb2ff',
                    // textShadowBlur: 12,
                    // textShadowOffsetX: 0,
                    // textShadowOffsetY: 0,
                },
                padding: 0,
                top: 20,
                left: 20
            }
            const legend = {
                show: true,
                // data，就是取得每个series里面的name属性。
                orient: 'horizontal',
                icon: 'rect', // 图例形状
                padding: 0,
                bottom: 0,
                // right: 200,
                itemWidth: 10, // 小圆点宽度
                itemHeight: 10, // 小圆点高度
                itemGap: 20, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
                textStyle: {
                    fontSize: 12,
                    color: '#000'
                },
                itemStyle: {
                    borderWidth: 0
                }
                // align:"left"
            }
            const tooltip = {
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                // 之所以formatter写的那么复杂是因为数据里面是负数。要把负数转为正数
                formatter: (params) => {
                    let str = `<div>${params[0].name}</div>`
                    return str += params
                        .map((item) => {
                            return `<div><span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color}"></span>
                ${item.seriesName} ${Math.abs(item.value)}</div>
                `
                        })
                        .join('')
                }
            }
            const getBorderRadius = (index) => {
                if (index === 0) return [0, 5, 5, 0]
                if (index === 1) return [5, 0, 0, 5]
                return 0
            }
            // x轴
            const myData = ['合肥', '杭州', '苏州', '宁波', '南京', '上海', '深圳', '长春', '北京', '天津'];

            const originData = [
                {
                    name: '产品规模',
                    value: [400, 241, 360, 320, 302, 341, 374, 390, 450, 420, 345, 257]
                },
                {
                    name: '资产规模',
                    value1: [-120, -180, -320, -220, -132, -301, -434, -190, -230, -210, -234, -145],
                    value: [120, 180, 320, 220, 132, 301, 434, 190, 230, 210, 234, 145]
                }
            ]


            const option = {
                backgroundColor: "#ffffff",
                tooltip: {
                    show: true,
                    formatter(params) {
                        const { name, seriesIndex, seriesName, dataIndex, data } = params;
                        let index = seriesIndex === 0 ? 1 : 0;
                        const other = originData[index];
                        const str = `<div>${name}</div>`;
                        const str1 = `<div>${seriesName} ${data}</div>`;
                        const str2 = `<div>${other.name} ${other.value[dataIndex]}</div>`;
                        if (seriesName === originData[0].name) {
                            return [str,str1,str2].join('')
                        } else {
                            return [str,str2,str1].join('')
                        }

                    }
                },
                grid: [
                    {
                        show: false,
                        left: 10,
                        top: 10,
                        bottom: 20,
                        width: '10%',
                        // borderColor: '#f00',
                        // backgroundColor:'#ff0',
                    },
                    {
                        show: false,
                        left: '10%',
                        top: 10,
                        bottom: 20,
                        containLabel: true,
                        width: '43%',
                        borderColor: '#333'
                    },
                    {
                        show: false,
                        right: '4%',
                        top: 10,
                        bottom: 20,
                        containLabel: true,
                        width: '43%',
                        borderColor: '#f60'
                    }
                ],
                xAxis: [
                    {
                        gridIndex: 0,
                        show: false,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },

                    },
                    {
                        gridIndex: 1,
                        type: 'value',
                        inverse: true,
                        offset: 0,
                        axisLine: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            verticalAlign: 'middle',
                            textStyle: {
                                color: '#B2B2B2',
                                fontSize: 12
                            }
                        },

                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed'

                            },
                        }
                    },
                    {
                        gridIndex: 2,
                        type: 'value',
                        axisLine: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            verticalAlign: 'middle',
                            textStyle: {
                                color: '#B2B2B2',
                                fontSize: 12
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed'

                            },
                        }
                    }
                ],
                yAxis: [
                    {
                        gridIndex: 0,
                        type: 'category',
                        inverse: true,
                        // position: 'center',
                        offset: 0,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false,
                        
                        },
                        data: myData,
                        // data: myData.map(function (value) {
                        //   return {
                        //     value: value,
                        //     // textStyle: {
                        //     //   align: 'right',
                        //     // }
                        //   }
                        // }),
                        axisLabel: {
                            fontSize: 12,
                            //   align: 'right',
                            margin: -40
                        }
                    },
                    {
                        gridIndex: 1,
                        type: 'category',
                        inverse: true,
                        position: 'right',
                        axisLine: {
                            show: true
                        },
                        axisTick: {
                            show: true
                        },
                        axisLabel: {
                            show: false,
                            margin: 8,
                            textStyle: {
                                color: '#f00',
                                fontSize: 12
                            }
                        },
                        data: myData
                    },
                    {
                        gridIndex: 2,
                        type: 'category',
                        inverse: true,
                        position: 'left',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: true
                        },
                        axisLabel: {
                            show: false,
                            textStyle: {
                                color: '#000',
                                fontSize: 12
                            }
                        },
                        data: myData
                    }
                ],
                series: [
                    {
                        name: originData[0].name,
                        type: 'bar',
                        barWidth: 10,
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        // showBackground: true,
                        // backgroundStyle: {
                        //   color: 'rgba(180, 180, 180, 0.2)'
                        // },
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                                position: 'left',
                                offset: [0, 0],
                                textStyle: {
                                    color: '#666666',
                                    fontSize: 14
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: [10, 0, 0, 10]

                            }
                        },
                        data: originData[0].value
                    },

                    {
                        name: originData[1].name,
                        type: 'bar',
                        barWidth: 10,
                        xAxisIndex: 2,
                        yAxisIndex: 2,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                                position: 'right',
                                offset: [0, 0],
                                textStyle: {
                                    color: '#666666',
                                    fontSize: 14
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: [0, 10, 10, 0]
                            }
                        },
                        data: originData[1].value
                    }
                ],
                legend: [
                    {
                        show: true,
                        gridIndex: 1,
                        // data，就是取得每个series里面的name属性。
                        orient: 'horizontal',
                        icon: 'rect', // 图例形状
                        padding: 0,
                        bottom: 0,
                        // right: 200,
                        itemWidth: 10,
                        itemHeight: 10,
                        // itemGap: 20, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
                        textStyle: {
                            fontSize: 12,
                            color: '#000'
                        },
                        itemStyle: {
                            borderWidth: 0
                        }
                    }
                ]
            }
            this.myChart.setOption(option)
        }

    },
    mounted() {
        this.myChart = this.$echarts.init(document.getElementById('demo3'))
        this.drawLine()
    }
}
</script>

<style scoped lang="scss"></style>
