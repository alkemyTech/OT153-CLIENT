import { DialogService } from '@app/core/services/dialog.service';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LeafletControlLayersConfig } from '@asymmetrik/ngx-leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {
  private coordOrganization :L.LatLngTuple= [4.668740392164804, -74.0620359551276];

  // Define our base layers
  wMaps = L.tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="">WikimediaMap</a> contributors'
  });

  streetMaps = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Marker
  organization = L.marker(this.coordOrganization, { //???
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -14],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
      iconUrl: 'assets/map/marker.png',
      shadowUrl: 'leaflet/marker-shadow.png',
    }),
  })
  .bindPopup( '<h2>Somos Mas</h2> <p>Cra. 22 ## 80-73, Bogotá, Colombia</p>' )
  .on( 'mouseover',function(ev:L.LeafletEvent) { ev.target.openPopup(); } )
  .on( 'mouseout',function(ev:L.LeafletEvent) { ev.target.closePopup(); } );

  // Layers control object, base layers and overlay layers
  layersControl: LeafletControlLayersConfig = {
    baseLayers: {
      'Wikimedia Maps': this.wMaps,
    },
    overlays: {
    }, 
  };

  // Options
  options: L.MapOptions = {
    layers: [ this.wMaps, this.organization ],
    zoom: 14,
    zoomAnimation:true,
    markerZoomAnimation: true,
    center: L.latLng(this.coordOrganization) //???
  };

	constructor() {
	}
  
  ngOnInit() {
  }

}
