Highcharts.setOptions({
    colors: [    '#31ABE4',
                '#1EA933',
                '#4572A7', 
                '#AA4643', 
                '#89A54E', 
                '#80699B', 
                '#3D96AE', 
                '#DB843D', 
                '#92A8CD', 
                '#A47D7C', 
                '#B5CA92'
                ]
});
var chart;
$(document).ready(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container', 
            defaultSeriesType: 'area'
        },
        title: {
            text: '18대 국회의원 출석률'
        },
        subtitle: {
            text: 'Source: <a href="#">'+'popong.com</a>'
        },
        xAxis: {
            labels: {
                formatter: function() {
                    return this.value; // clean, unformatted number for year
                }
            }                            
        },
        yAxis: {
            title: {
                text: '횟수'
            },
            labels: {
                formatter: function() {
                    //return this.value / 1000 +'k';
                    return this.value;
                }
            }
        },
        tooltip: {
            formatter: function() {
                return this.series.name + '의 출석률은 '+
                    this.x + '년에<br/><b>' + Highcharts.numberFormat(this.y, 0) +'회</b> 였음';
            }
        },
        plotOptions: {
            area: {
                pointStart: 2008,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: '한나라당',
            data: [6 , 11, 32, 10, 35, 39, 60, 
                10, 16, 20, 30, 48, 44, 92, 68, 34, 26, 
                27, 29, 31, 32, 40, 33, 24, 42, 62, 
                26, 22, 28, 25, 26, 79, 22, 26, 15, 
                24, 23, 23, 24, 27, 27, 21, 24, 86, 
                22, 21, 17, 14, 76, 15, 14, 19, 10, 
                10, 10, 10, 17, 75, 21, 18, 15, 14 ]
        }, {
            name: '민주당',
            data: [null, null , null , null ,null, 
            5, 25, 50, 12, 15, 20, 26, 66, 69, 60, 15, 21, 32, 
            4, 51, 69, 7, 8, 9, 10, 11, 13, 14, 
            15, 17, 15, 25, 24, 23, 25, 62, 49, 
            33, 35, 37, 37, 45, 43, 41, 39, 37, 
            30, 33, 31, 29, 20, 25, 24, 20, 22, 
            21, 20, 19, 18, 10, 100, 16]
        }]
    });    
});