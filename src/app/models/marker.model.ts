import { MarkerIF } from '../interfaces/marker.interface';
/**
 * Google map marker model
 */
export class Marker implements MarkerIF {
    /**
     * @ignore
     */
    name: string;
    /**
     * Latitude location
     */
    lat: number;
    /**
     * Longitude location
     */
    lng: number;
    /**
     * @ignore
     */
    locality: string;
    /**
     * Add marker basic properties to construct
     * @param name Marker name
     * @param lat location latitude
     * @param lng location longitude
     * @param locality location name
     */
    constructor(name: string, lat: number, lng: number, locality: string) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.locality = locality;
    }
}
