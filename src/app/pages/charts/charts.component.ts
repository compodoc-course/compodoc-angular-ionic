import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
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
      legend: 'Who will win the 2018 soccer world cup in Russia?'
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
}
