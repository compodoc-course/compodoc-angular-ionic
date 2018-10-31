import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../interfaces/location.interface';
import { GOOGLEMAPS } from '../../environments/api-keys';

@Pipe({
  name: `googleStaticMapUrl`
})
export class GoogleStaticMapUrlPipe implements PipeTransform {
  /**
   *  Documentation:
   * https://developers.google.com/maps/documentation/maps-static/dev-guide
   */
  STATICMAP = `https://maps.googleapis.com/maps/api/staticmap?`;

  /**
   * Pass location object data to generate correct url to show location static map image
   * @example
   * Use example to generate static map image
   * value | googleStaticMapUrl:<location: Location>:<type(r, t, h, s)><markerColor><label>
   * or
   * const googleStaticMapUrl = new GoogleStaticMapUrlPipe().transform( circuit.Location, `h`, `red`, `C`, 1000, 300, 5 );
   *
   * @param { Location } location : Select location coordinates
   * @param { String } type : Generate map type -> roadmap, satellite, hybrid or terrain
   * @param { String } markerColor: Marker color. Input color name or hexadecimal value
   * @param { String } label: Marker label.
   * @param { number } width: Map static image with in pixeles
   * @param { number } height : Map static image height in pixeles
   * @param { number } zoom : Map static image zoom
   */
  transform(
    location: Location,
    type: string = ``,
    markerColor: string = `red`,
    label: string = `C`,
    width: number = 1000,
    height: number = 300,
    zoom: number = -1
  ): string {
    const locate = `${location.lat},${location.long}`;
    const markers = `&markers=color:${markerColor}|label:${label}|${locate}`;
    const size = this.getSize(width, height);
    const mapType = this.getMapType(type);
    const zoomValue = this.getZoom(zoom);
    const key = this.getKey();
    return `${
      this.STATICMAP
    }center=${locate}${zoomValue}${size}${mapType}${markers}${key}`;
  }

  /**
   * Take Google maps api key from environment
   */
  private getKey(): string {
    return `&key=${GOOGLEMAPS}`;
  }

  /**
   * Create url properties size with width and height
   * @param width Image width
   * @param height Image height
   */
  private getSize(width: number, height: number): string {
    return `&size=${width}x${height}`;
  }

  /**
   * Create map type dependending input type
   * @param type Asign map type to show in image
   */
  private getMapType(type: string): string {
    const mapType = `&maptype=`;
    // roadmap, satellite, hybrid, and terrain
    if (type === `r`) {
      return `${mapType}roadmap`;
    } else if (type === `t`) {
      return `${mapType}terrain`;
    } else if (type === `h`) {
      return `${mapType}hybrid`;
    } else {
      return `${mapType}satellite`;
    }
  }

  /**
   * Asign input zoom. The value input must be > 5 or < 17
   * For example:
   * 7 -> 7
   * 19 -> 13
   * @param zoom Map zoom
   */
  private getZoom(zoom: number) {
    if (zoom < 5 || zoom > 16) {
      zoom = 13;
    }
    return `&zoom=${zoom}`;
  }
}
