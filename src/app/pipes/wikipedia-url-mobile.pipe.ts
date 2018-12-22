import { Pipe, PipeTransform } from '@angular/core';

/**
 * Convert Wikipedia URL to mobile url friendly
 */
@Pipe({
  name: 'wikipediaUrlMobile'
})
export class WikipediaUrlMobilePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('wikipedia', 'm.wikipedia');
  }

  hola() {
    console.log('hola');
  }

}
