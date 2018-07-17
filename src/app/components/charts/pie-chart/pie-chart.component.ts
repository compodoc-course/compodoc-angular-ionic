import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @Input() datasets;
  @Input() labels;
  @Input() options;
  @Input() colors;
  @Input() legend;
  @Input() chartType;

}
