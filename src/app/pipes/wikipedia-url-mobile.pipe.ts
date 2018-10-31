import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wikipediaUrlMobile'
})
export class WikipediaUrlMobilePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('wikipedia', 'm.wikipedia');
  }

}
