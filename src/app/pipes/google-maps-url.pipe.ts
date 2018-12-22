import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../interfaces/location.interface';

/**
 * Generate google maps url with take location
 */
@Pipe({
  name: 'googleMapsUrl'
})
export class GoogleMapsUrlPipe implements PipeTransform {
  transform(location: Location, zoom: number = 10): string {
    const locate = `${location.lat},${location.long}`;
    return `https://www.google.com/maps/@${locate},${zoom}z`;
  }

}
