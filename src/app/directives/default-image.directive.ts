import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'img[default]',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(error)': 'updateUrl()', '[src]': 'src'
  }
})
export class DefaultImageDirective {
  /**
   * Input image path
   */
  @Input()
  src: string;
  /**
   * Add default image to show if not load correct select src
   */
  @Input()
  default = './assets/img/Unknown.png';

  /**
   * Use if error in load src to replace image with default image
   */
  updateUrl() {
    this.src = this.default;
  }
}
