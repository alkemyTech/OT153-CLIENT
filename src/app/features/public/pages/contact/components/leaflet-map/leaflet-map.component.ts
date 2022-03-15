import { DialogService } from '@app/core/services/dialog.service';
import { Component, OnInit } from '@angular/core';
import { icon, latLng, LatLngTuple, Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {
  private coordOrganization :LatLngTuple= [4.668740392164804, -74.0620359551276];

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
  organization = marker(this.coordOrganization, { //???
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
    },
    overlays: {
    }, 
  };

  // Options
  options = {
    layers: [ this.wMaps, this.organization ],
    zoom: 14,
    center: latLng(this.coordOrganization) //???
  };

	constructor() {
	}
  
  ngOnInit() {
  }

}
