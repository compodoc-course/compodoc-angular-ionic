import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  /**
   * Convert input text with capitalize in first char.
   * @example
   * hello -> Hello
   *
   * @param input Text to convert capitalize
   */
  transform(input: any): string {
    return !!input ? input
          .charAt(0)
          .toUpperCase() + input.substr(1).toLowerCase() : '';
  }

}
