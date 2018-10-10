import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../interfaces/location.interface';

@Pipe({
  name: 'locationText'
})
export class LocationTextPipe implements PipeTransform {
  /**
   * Create location name and country with friendly format to show
   * @param location Location object with coordinates, location locality, country,...
   */
  transform(location: Location): string {
    return `${location.locality} (${location.country})`;
  }

}
