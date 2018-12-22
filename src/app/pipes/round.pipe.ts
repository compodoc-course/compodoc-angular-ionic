import { Pipe, PipeTransform } from '@angular/core';

/**
 * Round input value to select precision
 */
@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {
  transform(value: number, precision: number): number {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
}
