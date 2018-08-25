import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(input: any): string {
    return !!input ? input
          .charAt(0)
          .toUpperCase() + input.substr(1).toLowerCase() : '';
  }

}
