import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import * as L from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { leafletOptions } from './map.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LeafletModule],
})
export class MapPage implements OnInit {
  map!: L.Map;
  protected options = leafletOptions

  async ngOnInit() {
  }

  async onMapReady(lmap: L.Map) {
    this.map = lmap;
    setTimeout(() => lmap.invalidateSize(true), 0);

  }
}