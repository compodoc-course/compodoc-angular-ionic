import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  @Input() datasets;
  @Input() labels;
  @Input() options;
  @Input() colors;
  @Input() legend;
  @Input() chartType;
}
