"use strict";

// Class definition
var KTTablesWidget16 = function () {
    // Private methods
    var initChart = function(toggle, selector, data, initByDefault) {
        var element = document.querySelector(selector);

        if ( !element ) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var color = element.getAttribute('data-kt-chart-color');
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-800');
        var strokeColor = KTUtil.getCssVariableValue('--bs-gray-300');
        var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
        var lightColor = KTUtil.getCssVariableValue('--bs-white');

        var options = {
            series: [{
                name: 'Net Profit',
                data: data
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [baseColor]
            },
            xaxis: {                
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false                    
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: strokeColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: false
                }
            },
            yaxis: {
                min: 0,
                max: 60,
                labels: {
                    show: false,
                    ontSize: '12px'                   
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                enabled: false
            },
            colors: [lightColor],
            markers: {
                colors: [lightColor],
                strokeColor: [baseColor],
                strokeWidth: 3
            }
        };

        var initialized = false;
        var chart = new ApexCharts(element, options);        
        var tab = document.querySelector(toggle);
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.render();  
                initialized = true;
            }, 200);
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (initialized === false) {
                chart.render();
                initialized = true;
            }
        })         
    }

    // Public methods
    return {
        init: function () {           
            initChart(
                '#kt_stats_widget_16_tab_link_1', 
                '#kt_table_widget_16_chart_1_1', 
                [7, 10, 5, 21, 6, 11, 5, 23, 5, 11, 18, 7, 21,13],
                true            
            );
            
            initChart(
                '#kt_stats_widget_16_tab_link_1', 
                '#kt_table_widget_16_chart_1_2', 
                [17, 5, 23, 2, 21, 9, 17, 23, 4, 24, 9, 17, 21,7],  
                true            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_1', 
                '#kt_table_widget_16_chart_1_3', 
                [13, 5, 20, 2, 21, 9, 17, 23, 4, 24, 4, 17, 21,7],  
                true            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_1', 
                '#kt_table_widget_16_chart_1_4', 
                [8, 5, 16, 2, 19, 9, 17, 21, 4, 24, 4, 13, 21,5],  
                true            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_2', 
                '#kt_table_widget_16_chart_2_1', 
                [16, 10, 15, 21, 6, 11, 5, 23, 5, 11, 18, 7, 21, 13],
                false            
            );
            
            initChart(
                '#kt_stats_widget_16_tab_link_2', 
                '#kt_table_widget_16_chart_2_2', 
                [12, 5, 23, 12, 21, 9, 17, 20, 4, 24, 9, 17, 21, 7],  
                false            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_2', 
                '#kt_table_widget_16_chart_2_3', 
                [8, 10, 14, 21, 6, 31, 5, 21, 5, 11, 15, 7, 23, 13],
                false            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_2', 
                '#kt_table_widget_16_chart_2_4', 
                [6, 10, 12, 21, 6, 11, 7, 23, 5, 12, 18, 7, 21, 15],
                false            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_3', 
                '#kt_table_widget_16_chart_3_1', 
                [7, 10, 5, 21, 6, 11, 5, 23, 5, 11, 18, 7, 21,13],
                false            
            );
            
            initChart(
                '#kt_stats_widget_16_tab_link_3', 
                '#kt_table_widget_16_chart_3_2', 
                [8, 5, 16, 2, 19, 9, 17, 21, 4, 24, 4, 13, 21,5],  
                false            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_3', 
                '#kt_table_widget_16_chart_3_3', 
                [15, 10, 12, 21, 6, 11, 23, 11, 5, 12, 18, 7, 21, 15],
                false            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_3', 
                '#kt_table_widget_16_chart_3_4', 
                [3, 9, 12, 23, 6, 11, 7, 23, 5, 12, 14, 7, 21, 8],
                false            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_4', 
                '#kt_table_widget_16_chart_4_1', 
                [9, 14, 15, 21, 8, 11, 5, 23, 5, 11, 18, 5, 23, 8],
                false            
            );
            
            initChart(
                '#kt_stats_widget_16_tab_link_4', 
                '#kt_table_widget_16_chart_4_2', 
                [7, 5, 23, 12, 21, 9, 17, 15, 4, 24, 9, 17, 21, 7],  
                false            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_4', 
                '#kt_table_widget_16_chart_4_3', 
                [8, 10, 14, 21, 6, 31, 8, 23, 5, 3, 14, 7, 21, 12],
                false            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_4', 
                '#kt_table_widget_16_chart_4_4', 
                [6, 12, 12, 19, 6, 11, 7, 23, 5, 12, 18, 7, 21, 15],
                false            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_5', 
                '#kt_table_widget_16_chart_5_1', 
                [5, 10, 15, 21, 6, 11, 5, 23, 5, 11, 17, 7, 21, 13],
                false            
            );
            
            initChart(
                '#kt_stats_widget_16_tab_link_5', 
                '#kt_table_widget_16_chart_5_2', 
                [4, 5, 23, 12, 21, 9, 17, 15, 4, 24, 9, 17, 21, 7],  
                false            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_5', 
                '#kt_table_widget_16_chart_5_3', 
                [7, 10, 14, 21, 6, 31, 5, 23, 5, 11, 15, 7, 21, 17],
                false            
            );

            initChart(
                '#kt_stats_widget_16_tab_link_5', 
                '#kt_table_widget_16_chart_5_4', 
                [3, 10, 12, 23, 6, 11, 7, 22, 5, 12, 18, 7, 21, 14],
                false            
            );  
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTablesWidget16;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTTablesWidget16.init();
});


 