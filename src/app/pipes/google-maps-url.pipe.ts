import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../interfaces/location.interface';

@Pipe({
  name: 'googleMapsUrl'
})
export class GoogleMapsUrlPipe implements PipeTransform {
  /**
   * Generate Google Maps url with location and input zoom
   * @param location Location coordinates
   * @param zoom map zoom
   */
  transform(location: Location, zoom: number = 10): string {
    const locate = `${location.lat},${location.long}`;
    return `https://www.google.com/maps/@${locate},${zoom}z`;
  }

}
