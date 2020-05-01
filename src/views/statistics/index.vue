<template>
  <div>
    <CRow>
      <CCol md="8">
        <CCard class="no-border border-radius-18">
          <div ref="chartdivLine" style="height: 35vh"></div>
          <CCardBody> </CCardBody>
        </CCard>
      </CCol>
      <CCol md="4">
        <CCard class="no-border border-radius-18">
          <div ref="chartdivPie" style="height: 35vh"></div>
          <CCardBody> </CCardBody>
        </CCard>
      </CCol>
      <CCol md="4">
        <CCard class="no-border border-radius-18">
          <div ref="chartdivBar" style="height: 35vh"></div>
          <CCardBody> </CCardBody>
        </CCard>
      </CCol>
      <CCol md="4">
        <CCard class="no-border border-radius-18">
          <div ref="chartdivPie2" style="height: 35vh"></div>
          <CCardBody> </CCardBody>
        </CCard>
      </CCol>
      <CCol md="4">
        <CCard class="no-border border-radius-18">
          <CCardBody>
            <h6>No label</h6>
            <CProgress :value="11" :max="23" class="mb-3" />
            <h6>Value label</h6>
            <CProgress :value="12" :max="23" show-value class="mb-3" />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
  name: "Statistics",
  data() {
    return {
      page: 2,
      showFilter: false
    };
  },
  mounted() {
    am4core.useTheme(am4themes_animated);
    this.pieChart();
    this.lineChart();
    this.barChart();
    this.pie2Chart();
  },
  beforeDestroy() {
    if (this.Piechart) {
      this.Piechart.dispose();
    }
    if (this.Linechart) {
      this.Linechart.dispose();
    }
    if (this.Barchart) {
      this.Barchart.dispose();
    }
    if (this.pie2Chart) {
      this.pie2Chart.dispose();
    }
  },
  methods: {
    pieChart() {
      let chart = am4core.create(this.$refs.chartdivPie, am4charts.PieChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.data = [
        {
          country: "Lithuania",
          value: 401
        },
        {
          country: "Czech Republic",
          value: 300
        },
        {
          country: "Ireland",
          value: 200
        }
      ];
      chart.radius = am4core.percent(70);
      chart.innerRadius = am4core.percent(40);
      chart.startAngle = 180;
      chart.endAngle = 360;
      chart.contentAlign = "center";
      let series = chart.series.push(new am4charts.PieSeries());
      series.dataFields.value = "value";
      series.dataFields.category = "country";
      series.slices.template.cornerRadius = 10;
      series.slices.template.innerCornerRadius = 7;
      series.slices.template.draggable = true;
      series.labels.template.text = "";
      series.slices.template.inert = true;
      series.alignLabels = false;
      series.hiddenState.properties.startAngle = 90;
      series.hiddenState.properties.endAngle = 90;
      chart.legend = new am4charts.Legend();
      chart.legend.maxWidth = 100;

      this.Piechart = chart;
    },
    lineChart() {
      let chart = am4core.create(this.$refs.chartdivLine, am4charts.XYChart);
      chart.hiddenState.properties.opacity = 0;
      // Add data
      chart.data = [
        {
          date: "2012-03-01",
          price: 20
        },
        {
          date: "2012-03-02",
          price: 75
        },
        {
          date: "2012-03-03",
          price: 15
        },
        {
          date: "2012-03-04",
          price: 75
        },
        {
          date: "2012-03-05",
          price: 158
        },
        {
          date: "2012-03-06",
          price: 57
        },
        {
          date: "2012-03-07",
          price: 107
        },
        {
          date: "2012-03-08",
          price: 89
        },
        {
          date: "2012-03-09",
          price: 75
        },
        {
          date: "2012-03-10",
          price: 132
        },
        {
          date: "2012-03-11",
          price: 380
        },
        {
          date: "2012-03-12",
          price: 56
        },
        {
          date: "2012-03-13",
          price: 169
        },
        {
          date: "2012-03-14",
          price: 24
        },
        {
          date: "2012-03-15",
          price: 147
        }
      ];

      // Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.minGridDistance = 50;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.logarithmic = true;
      valueAxis.renderer.minGridDistance = 20;

      // Create series
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "price";
      series.dataFields.dateX = "date";
      series.tensionX = 0.8;
      series.strokeWidth = 3;

      let bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.fill = am4core.color("#fff");
      bullet.circle.strokeWidth = 3;

      // Add cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.fullWidthLineX = true;
      chart.cursor.xAxis = dateAxis;
      chart.cursor.lineX.strokeWidth = 0;
      chart.cursor.lineX.fill = am4core.color("#000");
      chart.cursor.lineX.fillOpacity = 0.1;

      // Add a guide
      let range = valueAxis.axisRanges.create();
      range.value = 90.4;
      range.grid.stroke = am4core.color("#396478");
      range.grid.strokeWidth = 1;
      range.grid.strokeOpacity = 1;
      range.grid.strokeDasharray = "3,3";
      range.label.inside = true;
      range.label.text = "Average";
      range.label.fill = range.grid.stroke;
      range.label.verticalCenter = "bottom";
      this.Linechart = chart;
    },
    barChart() {
      let chart = am4core.create(this.$refs.chartdivBar, am4charts.XYChart);

      chart.data = [
        {
          country: "India",
          visits: 984
        },
        {
          country: "Spain",
          visits: 711
        },
        {
          country: "Netherlands",
          visits: 665
        },
        {
          country: "Russia",
          visits: 580
        },
        {
          country: "South Korea",
          visits: 443
        }
      ];

      chart.padding(40, 40, 40, 40);

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.minGridDistance = 60;
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.disabled = true;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.extraMax = 0.1;
      //valueAxis.rangeChangeEasing = am4core.ease.linear;
      //valueAxis.rangeChangeDuration = 1500;

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX = "country";
      series.dataFields.valueY = "visits";
      series.tooltipText = "{valueY.value}";
      series.columns.template.strokeOpacity = 0;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.cornerRadiusTopLeft = 10;
      //series.interpolationDuration = 1500;
      //series.interpolationEasing = am4core.ease.linear;
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.verticalCenter = "bottom";
      labelBullet.label.dy = -10;
      labelBullet.label.text =
        "{values.valueY.workingValue.formatNumber('#.')}";

      chart.zoomOutButton.disabled = true;

      // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      setInterval(function() {
        am4core.array.each(chart.data, function(item) {
          item.visits += Math.round(Math.random() * 200 - 100);
          item.visits = Math.abs(item.visits);
        });
        chart.invalidateRawData();
      }, 2000);

      categoryAxis.sortBySeries = series;
      this.Barchart = chart;
    },
    pie2Chart() {
      am4core.useTheme(am4themes_animated);
      // Themes end

      /**
       * Define data for each year
       */
      let chartData = {
        "1995": [
          { sector: "Agriculture", size: 6.6 },
          { sector: "Mining and Quarrying", size: 0.6 },
          { sector: "Manufacturing", size: 23.2 },
          { sector: "Electricity and Water", size: 2.2 },
          { sector: "Construction", size: 4.5 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 14.6 },
          { sector: "Transport and Communication", size: 9.3 },
          { sector: "Finance, real estate and business services", size: 22.5 }
        ],
        "1996": [
          { sector: "Agriculture", size: 6.4 },
          { sector: "Mining and Quarrying", size: 0.5 },
          { sector: "Manufacturing", size: 22.4 },
          { sector: "Electricity and Water", size: 2 },
          { sector: "Construction", size: 4.2 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 14.8 },
          { sector: "Transport and Communication", size: 9.7 },
          { sector: "Finance, real estate and business services", size: 22 }
        ],
        "1997": [
          { sector: "Agriculture", size: 6.1 },
          { sector: "Mining and Quarrying", size: 0.2 },
          { sector: "Manufacturing", size: 20.9 },
          { sector: "Electricity and Water", size: 1.8 },
          { sector: "Construction", size: 4.2 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 13.7 },
          { sector: "Transport and Communication", size: 9.4 },
          { sector: "Finance, real estate and business services", size: 22.1 }
        ],
        "1998": [
          { sector: "Agriculture", size: 6.2 },
          { sector: "Mining and Quarrying", size: 0.3 },
          { sector: "Manufacturing", size: 21.4 },
          { sector: "Electricity and Water", size: 1.9 },
          { sector: "Construction", size: 4.2 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 14.5 },
          { sector: "Transport and Communication", size: 10.6 },
          { sector: "Finance, real estate and business services", size: 23 }
        ],
        "1999": [
          { sector: "Agriculture", size: 5.7 },
          { sector: "Mining and Quarrying", size: 0.2 },
          { sector: "Manufacturing", size: 20 },
          { sector: "Electricity and Water", size: 1.8 },
          { sector: "Construction", size: 4.4 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 15.2 },
          { sector: "Transport and Communication", size: 10.5 },
          { sector: "Finance, real estate and business services", size: 24.7 }
        ],
        "2000": [
          { sector: "Agriculture", size: 5.1 },
          { sector: "Mining and Quarrying", size: 0.3 },
          { sector: "Manufacturing", size: 20.4 },
          { sector: "Electricity and Water", size: 1.7 },
          { sector: "Construction", size: 4 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 16.3 },
          { sector: "Transport and Communication", size: 10.7 },
          { sector: "Finance, real estate and business services", size: 24.6 }
        ],
        "2001": [
          { sector: "Agriculture", size: 5.5 },
          { sector: "Mining and Quarrying", size: 0.2 },
          { sector: "Manufacturing", size: 20.3 },
          { sector: "Electricity and Water", size: 1.6 },
          { sector: "Construction", size: 3.1 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 16.3 },
          { sector: "Transport and Communication", size: 10.7 },
          { sector: "Finance, real estate and business services", size: 25.8 }
        ],
        "2002": [
          { sector: "Agriculture", size: 5.7 },
          { sector: "Mining and Quarrying", size: 0.2 },
          { sector: "Manufacturing", size: 20.5 },
          { sector: "Electricity and Water", size: 1.6 },
          { sector: "Construction", size: 3.6 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 16.1 },
          { sector: "Transport and Communication", size: 10.7 },
          { sector: "Finance, real estate and business services", size: 26 }
        ],
        "2003": [
          { sector: "Agriculture", size: 4.9 },
          { sector: "Mining and Quarrying", size: 0.2 },
          { sector: "Manufacturing", size: 19.4 },
          { sector: "Electricity and Water", size: 1.5 },
          { sector: "Construction", size: 3.3 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 16.2 },
          { sector: "Transport and Communication", size: 11 },
          { sector: "Finance, real estate and business services", size: 27.5 }
        ],
        "2004": [
          { sector: "Agriculture", size: 4.7 },
          { sector: "Mining and Quarrying", size: 0.2 },
          { sector: "Manufacturing", size: 18.4 },
          { sector: "Electricity and Water", size: 1.4 },
          { sector: "Construction", size: 3.3 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 16.9 },
          { sector: "Transport and Communication", size: 10.6 },
          { sector: "Finance, real estate and business services", size: 28.1 }
        ],
        "2005": [
          { sector: "Agriculture", size: 4.3 },
          { sector: "Mining and Quarrying", size: 0.2 },
          { sector: "Manufacturing", size: 18.1 },
          { sector: "Electricity and Water", size: 1.4 },
          { sector: "Construction", size: 3.9 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 15.7 },
          { sector: "Transport and Communication", size: 10.6 },
          { sector: "Finance, real estate and business services", size: 29.1 }
        ],
        "2006": [
          { sector: "Agriculture", size: 4 },
          { sector: "Mining and Quarrying", size: 0.2 },
          { sector: "Manufacturing", size: 16.5 },
          { sector: "Electricity and Water", size: 1.3 },
          { sector: "Construction", size: 3.7 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 14.2 },
          { sector: "Transport and Communication", size: 12.1 },
          { sector: "Finance, real estate and business services", size: 29.1 }
        ],
        "2007": [
          { sector: "Agriculture", size: 4.7 },
          { sector: "Mining and Quarrying", size: 0.2 },
          { sector: "Manufacturing", size: 16.2 },
          { sector: "Electricity and Water", size: 1.2 },
          { sector: "Construction", size: 4.1 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 15.6 },
          { sector: "Transport and Communication", size: 11.2 },
          { sector: "Finance, real estate and business services", size: 30.4 }
        ],
        "2008": [
          { sector: "Agriculture", size: 4.9 },
          { sector: "Mining and Quarrying", size: 0.3 },
          { sector: "Manufacturing", size: 17.2 },
          { sector: "Electricity and Water", size: 1.4 },
          { sector: "Construction", size: 5.1 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 15.4 },
          { sector: "Transport and Communication", size: 11.1 },
          { sector: "Finance, real estate and business services", size: 28.4 }
        ],
        "2009": [
          { sector: "Agriculture", size: 4.7 },
          { sector: "Mining and Quarrying", size: 0.3 },
          { sector: "Manufacturing", size: 16.4 },
          { sector: "Electricity and Water", size: 1.9 },
          { sector: "Construction", size: 4.9 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 15.5 },
          { sector: "Transport and Communication", size: 10.9 },
          { sector: "Finance, real estate and business services", size: 27.9 }
        ],
        "2010": [
          { sector: "Agriculture", size: 4.2 },
          { sector: "Mining and Quarrying", size: 0.3 },
          { sector: "Manufacturing", size: 16.2 },
          { sector: "Electricity and Water", size: 2.2 },
          { sector: "Construction", size: 4.3 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 15.7 },
          { sector: "Transport and Communication", size: 10.2 },
          { sector: "Finance, real estate and business services", size: 28.8 }
        ],
        "2011": [
          { sector: "Agriculture", size: 4.1 },
          { sector: "Mining and Quarrying", size: 0.3 },
          { sector: "Manufacturing", size: 14.9 },
          { sector: "Electricity and Water", size: 2.3 },
          { sector: "Construction", size: 5 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 17.3 },
          { sector: "Transport and Communication", size: 10.2 },
          { sector: "Finance, real estate and business services", size: 27.2 }
        ],
        "2012": [
          { sector: "Agriculture", size: 3.8 },
          { sector: "Mining and Quarrying", size: 0.3 },
          { sector: "Manufacturing", size: 14.9 },
          { sector: "Electricity and Water", size: 2.6 },
          { sector: "Construction", size: 5.1 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 15.8 },
          { sector: "Transport and Communication", size: 10.7 },
          { sector: "Finance, real estate and business services", size: 28 }
        ],
        "2013": [
          { sector: "Agriculture", size: 3.7 },
          { sector: "Mining and Quarrying", size: 0.2 },
          { sector: "Manufacturing", size: 14.9 },
          { sector: "Electricity and Water", size: 2.7 },
          { sector: "Construction", size: 5.7 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 16.5 },
          { sector: "Transport and Communication", size: 10.5 },
          { sector: "Finance, real estate and business services", size: 26.6 }
        ],
        "2014": [
          { sector: "Agriculture", size: 3.9 },
          { sector: "Mining and Quarrying", size: 0.2 },
          { sector: "Manufacturing", size: 14.5 },
          { sector: "Electricity and Water", size: 2.7 },
          { sector: "Construction", size: 5.6 },
          { sector: "Trade (Wholesale, Retail, Motor)", size: 16.6 },
          { sector: "Transport and Communication", size: 10.5 },
          { sector: "Finance, real estate and business services", size: 26.5 }
        ]
      };

      // Create chart instance
      let chart = am4core.create(this.$refs.chartdivPie2, am4charts.PieChart);

      // Add data
      chart.data = [
        { sector: "Agriculture", size: 6.6 },
        { sector: "Mining and Quarrying", size: 12 }
      ];

      // Add label
      chart.innerRadius = 100;
      let label = chart.seriesContainer.createChild(am4core.Label);
      label.text = "1995";
      label.horizontalCenter = "middle";
      label.verticalCenter = "middle";
      label.fontSize = 50;
      chart.legend = new am4charts.Legend();
      chart.legend.scrollable = true;
      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "size";
      pieSeries.dataFields.category = "sector";
      pieSeries.labels.template.text = "";

      // Animate chart data
      let currentYear = 1995;
      function getCurrentData() {
        label.text = currentYear;
        let data = chartData[currentYear];
        currentYear++;
        if (currentYear > 2014) currentYear = 1995;
        return data;
      }

      function loop() {
        //chart.allLabels[0].text = currentYear;
        let data = getCurrentData();
        for (var i = 0; i < data.length; i++) {
          chart.data[i].size = data[i].size;
        }
        chart.invalidateRawData();
        chart.setTimeout(loop, 4000);
      }

      loop();
      this.pie2Chart = chart;
    }
  }
};
</script>
