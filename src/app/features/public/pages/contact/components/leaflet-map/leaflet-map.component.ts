import { DialogService } from '@app/core/services/dialog.service';
import { Component, OnInit } from '@angular/core';
import { icon, latLng, Layer, Map, marker, point, tileLayer } from 'leaflet';
import { Subject } from 'rxjs';
import { debounceTime, scan } from 'rxjs/operators';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {

  // Define our base layers
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="">WikimediaMap</a> contributors'
  });

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Marker
  organization = marker([4.668740392164804, -74.0620359551276], { //???
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });
  
  // Layers control object, base layers and overlay layers
  layersControl = {
    baseLayers: {
      'Wikimedia Maps': this.wMaps,
      'OpenStreet Maps': this.streetMaps
    },
    overlays: {
      'Somos Mas': this.organization,
    }, 
  };

  // Options
  options = {
    layers: [ this.wMaps, this.organization ],
    zoom: 14,
    center: latLng([4.668740392164804, -74.0620359551276]) //???
  };

	constructor( public dialog: DialogService) {
	}

  onMapReady(map: Map) {
  }

  ngOnInit() {
  }

}
