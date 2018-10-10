import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {
  /**
   * @example
   * 20.22222 with precision 2 -> 20.22
   * 20.3452 with precision 3 -> 20.345
   *
   * @param value Input value
   * @param precision round values length
   */
  transform(value: number, precision: number): number {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
}
