declare namespace google {
  export class maps {
    static Map: typeof google.maps.Map;
    static Marker: typeof google.maps.Marker;
  }

  export class Map {
    constructor(map: Element, options?: google.maps.MapOptions);
  }

  export class Marker {
    constructor(options?: google.maps.MarkerOptions);
    setMap(map: google.maps.Map | null): void;
  }

  export interface MapOptions {
    center: google.maps.LatLng | google.maps.LatLngLiteral;
    zoom?: number;
    mapTypeId?: google.maps.MapTypeId;
    disableDefaultUI?: boolean;
    zoomControl?: boolean;
  }

  export interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  export class LatLng implements google.maps.LatLngLiteral {
    constructor(lat: number, lng: number);
    lat(): number;
    lng(): number;
  }

  export enum MapTypeId {
    ROADMAP = "roadmap",
    SATELLITE = "satellite",
    HYBRID = "hybrid",
    TERRAIN = "terrain",
  }

  export interface MarkerOptions {
    position?: google.maps.LatLng | google.maps.LatLngLiteral;
    map?: google.maps.Map;
  }
}
