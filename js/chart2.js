// charts2
// BarChartExample
var dom = document.getElementById("BarChartExample");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    color: ['#a6a6a6', '#8ceab9'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisTick: {show: false},
            data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {        // 属性lineStyle控制线条样式
                    color: '#eaeaea',
                    width: 2,
                    type: 'solid'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                interval: 'auto',
                // rotate: 0,
                // margin: 8,
                // formatter: null,
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#888888'
                }
            }
        }
    ],
    yAxis : [
        {
            type: 'value',
            min: 0,
            interval: 25,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {                // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#d5d5d5',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                interval: 'auto',
                // rotate: 0,
                // margin: 8,
                // formatter: null,
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#888888'
                }
            }
        }
    ],
    series : [
        {
            type:'bar',
            name:'Series A',
            barGap: 0.1,
            data:[100, 75, 50, 75, 50, 75, 100]
        },
        {
            type:'bar',
            name:'Series B',
            data:[90, 65, 40, 65, 40, 65, 90]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}

// LineChart
var dom = document.getElementById("LineChart");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    color: ['#a6a6a6', '#8ceab9'],
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: ['2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {        // 属性lineStyle控制线条样式
                color: '#eaeaea',
                width: 2,
                type: 'solid'
            }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            show: true,
            interval: 'auto',
            // rotate: 0,
            // margin: 8,
            // formatter: null,
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#888888'
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max:200,
        interval: 50,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {                // 分隔线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#d5d5d5',
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            show: true,
            interval: 'auto',
            // rotate: 0,
            // margin: 8,
            // formatter: null,
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#888888'
            }
        }
    },
    series: [
        {
            name:'Total Income',
            type:'line',
            data:[50, 165, 150, 175, 80, 90, 100, 155, 150, 80, 145, 160]
        },
        {
            name:'Total Outcome',
            type:'line',
            data:[90, 185, 130, 160, 65, 70, 125, 175, 175, 85, 155, 185]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}

// AreaChart
var dom = document.getElementById("AreaChart");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    color: ['#a6a6a6', '#8ceab9'],
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            // boundaryGap : false,
            data : ['2010 Q1','2010 Q2','2010 Q3','2010 Q4','2011 Q1','2011 Q2','2011 Q3','2011 Q4','2012 Q1','2012 Q2'],
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {        // 属性lineStyle控制线条样式
                    color: '#eaeaea',
                    width: 2,
                    type: 'solid'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                interval: 'auto',
                // rotate: 0,
                // margin: 8,
                // formatter: null,
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#888888'
                }
            }
        }
    ],
    yAxis : [
        {
            type: 'value',
            min: 0,
            // max:200,
            interval: 7500,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {                // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#d5d5d5',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                interval: 'auto',
                // rotate: 0,
                // margin: 8,
                // formatter: null,
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#888888'
                }
            }
        }
    ],
    series : [
        {
            name:'iphone',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[2666, 2778, 4912, 3767, 6810, 5670, 4820,15073,10687,8432]
        },
        {
            name:'ipad',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[0, 2294, 1969, 3597, 1914, 4293, 3795,5967,4460,5713]
        },
        {
            name:'ipod Touch',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[2647, 2441, 2501, 5689, 2293, 1881, 1588,5175,2028,1791]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}

// DonutChartExample
var dom = document.getElementById("DonutChartExample");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    color: ['#8ceab9','#a6a6a6'],
    series: [
        {
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '15',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:20, name:'In-Store Sales'},
                {value:12, name:'Download Sales'},
                {value:30, name:'In-Store Sales'}
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}