import { MarkerIF } from '../interfaces/marker.interface';

/**
 * In this model manage marker important information
 */
export class Marker implements MarkerIF {
    /**
     * Location name. For example circuits names
     * @example
     * This is a good example: 'Autodromo Nazionale di Monza'
     */
    name: string;
    /**
     * Location latitude
     */
    lat: number;
    /**
     * Location longitude
     */
    lng: number;
    /**
     * Locality name
     * @example
     * This is a good example: 'Monza (Italy)'
     */
    locality: string;
    constructor(name: string, lat: number, lng: number, locality: string) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.locality = locality;
    }
}
