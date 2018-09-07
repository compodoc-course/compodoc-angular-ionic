import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  /**
   * Values to use with dona graphic component
   */
  graphics: any = [
    {
      labels: ['Christopher Froome', 'Mikel Landa', 'Vincenzo Niballi', 'Nairo Quintana'],
      data: [24, 30, 44, 2],
      type: 'doughnut',
      legend: 'Who has won the tour of france 2017?'
    },
    {
      labels: ['France', 'Croatia'],
      data: [65, 35],
      type: 'doughnut',
      legend: 'Who has won the 2018 soccer world cup?'
    },
    {
      labels: ['Yes', 'No'],
      data: [95, 5],
      type: 'doughnut',
      legend: 'Do you like Football?'
    },
    {
      labels: ['No', 'Yes'],
      data: [85, 15],
      type: 'doughnut',
      legend: 'Do you like VAR?'
    }
  ];

  // lineChart
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: '2016'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: '2017'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: '2018'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // Bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // Pie Chart
  // Pie
  public pieChartLabels: string[] = ['Blue', 'Red', 'Yellow', 'Green', 'Ok'];
  public pieChartData: any[] =  [12.21, 15.58, 11.25, 8.32, 39];
  public pieChartColors = ['#007bff', '#dc3545', '#ffc107', '#28a745'];
  public pieChartType = 'pie';

  constructor(private selectPageService: SharedService) { }

  ngOnInit() {
    this.selectPageService.setSelectPage('Charts');
  }
}
