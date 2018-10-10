import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: `wikipediaUrlMobile`
})
export class WikipediaUrlMobilePipe implements PipeTransform {
  /**
   * Convert wikipedia url to friendly mobile
   * @example
   * https://es.wikipedia.org/wiki/Fernando_Alonso -> https://es.m.wikipedia.org/wiki/Fernando_Alonso
   * @param value Wikipedia url to convert mobile format
   */
  transform(value: any): any {
    return value.replace(`wikipedia`, `m.wikipedia`);
  }
}
