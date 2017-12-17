export interface Marker {
    // just an interface for type safety.
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
