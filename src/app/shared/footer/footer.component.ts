import { Component } from '@angular/core';

/**
 * Component to show template info
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  /**
   * Current Full Year
   */
  date = new Date().getFullYear();
}
