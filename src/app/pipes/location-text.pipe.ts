import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../interfaces/location.interface';

/**
 * Add location with name of city and country
 */
@Pipe({
  name: 'locationText'
})
export class LocationTextPipe implements PipeTransform {

  transform(location: Location): string {
    return `${location.locality} (${location.country})`;
  }

}
