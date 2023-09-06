import { TileLayer, MapOptions } from 'leaflet';

const lat = -37.810933711079635;
const lng = 144.95775988243227;

export const leafletOptions = {
  zoom: 13,
  maxZoom: 18,
  zoomControl: false,
  preferCanvas: true,
  attributionControl: true,
  center: [lat, lng],
  layers: [new TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
} as MapOptions;
