import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../interfaces/location.interface';
import { GOOGLEMAPS } from '../../environments/api-keys';

@Pipe({
  name: `googleStaticMapUrl`
})
export class GoogleStaticMapUrlPipe implements PipeTransform {
  // Documentation:
  // https://developers.google.com/maps/documentation/maps-static/dev-guide

  STATICMAP = `https://maps.googleapis.com/maps/api/staticmap?`;

  // value | googleStaticMapUrl:<location: Location>:<type(r, t, h, s)><markerColor><label>

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

  private getKey(): string {
    return `&key=${GOOGLEMAPS}`;
  }

  private getSize(width: number, height: number): string {
    return `&size=${width}x${height}`;
  }

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

  private getZoom(zoom: number) {
    if (zoom < 5 || zoom > 16) {
      zoom = 13;
    }
    return `&zoom=${zoom}`;
  }
}
