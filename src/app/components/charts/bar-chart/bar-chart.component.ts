import { Component, Input } from '@angular/core';

/**
 * @ignore
 */
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  @Input() datasets;
  @Input() labels;
  @Input() options;
  @Input() colors;
  @Input() legend;
  @Input() chartType;
}
