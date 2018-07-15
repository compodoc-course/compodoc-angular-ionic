import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {
  /**
   * Take Inputs need values to generate Dona type chart
   */
  @Input() data;
  @Input() labels;
  @Input() legend;
  type = 'doughnut';
}
