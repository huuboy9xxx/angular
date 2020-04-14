import { Component, OnInit, NgZone } from '@angular/core';

import * as Highcharts from 'highcharts';

// const HighchartsMore = require("highcharts/highcharts-more.src");
// HighchartsMore(Highcharts);
// const HC_solid_gauge = require("highcharts/modules/solid-gauge.src");
// HC_solid_gauge(Highcharts);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Highcharts = Highcharts;

  constructor(private zone: NgZone) {}

  updateDemo: boolean = false;

  chartOptions = {
    chart: {
      type: 'column'
  },
  credits: {
    enabled: false
  },
  title: {
      text: null
  },
  subtitle: {
      text: null
  },
  xAxis: {
      type: 'category',
      labels: {
          rotation: -45,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Đơn vị ( Triệu )'
      }
  },
  legend: {
      enabled: false
  },
  tooltip: {
      pointFormat: 'Tổng thu nhập: <b>{point.y} đ</b>'
  },
  series: [{
      name: 'Population',
      data: [
          ['Thứ 2', 2000000],
          ['Thứ 3', 2200000],
          ['Thứ 4', 3000000],
          ['Thứ 5', 1800000],
          ['Thứ 6', 3200000],
          ['Thứ 7', 1500000],
          ['Chủ Nhật', 1000000],
      ],
      dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '14px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  }]
  };

  ngOnInit(): void {
  }

}
