import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  /**
   * Return input text with first letter is uppercase
   * @example
   * This is a good example
   * transform(hello) (input is string!!!)
   * RESULT: Hello
   * @param input text to want return with first letter is uppercase
   * @returns {string} Return input string with first letter is uppercase
   */
  transform(input: string): string {
    return !!input
      ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase()
      : ``;
  }
}
