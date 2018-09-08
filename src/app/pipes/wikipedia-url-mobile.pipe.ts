import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wikipediaUrlMobile'
})
export class WikipediaUrlMobilePipe implements PipeTransform {

  transform(value: any): any {
    return value.replace('wikipedia', 'm.wikipedia');
  }

}
