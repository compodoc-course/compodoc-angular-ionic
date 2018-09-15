export interface MarkerIF {
    /**
     * Marker name
     */
    name: string;

    /**
     * Marker location.
     * lat: Latitude / lng: Longitude
     */
    lat: number;
    lng: number;

    /**
     * Locality to celebrate Grand Prix. For example: Barcelona (Spain)
     */
    locality: string;
    color?: string;
    label?: string;
}
