import { Organization } from './../../../../../../core/models/organization.interfaces';
import { DialogService } from '@app/core/services/dialog.service';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LeafletControlLayersConfig } from '@asymmetrik/ngx-leaflet';
import { environment } from '@env/environment';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {
  private coordOrganization :L.LatLngTuple= [4.668740392164804, -74.0620359551276];
  public mapOption: L.MapOptions;

	constructor() {
    // this.initMap();

	}
  
  ngOnInit() {
  }

  private initMap(): void {
    // Define our base layers
    const wMaps = L.tileLayer(environment.wikimediaMap, {
      detectRetina: true,
      attribution: '&copy; <a href="https://www.wikimedia.org/">Wikimedia</a> contributors'
    });
    const organizationMarker = this.organizationMarker()
    
    this.mapOption = {
      layers: [wMaps, organizationMarker],
      zoom: 14,
      zoomAnimation:true,
      center: L.latLng(this.coordOrganization),
    };


  }

  organizationMarker(){
    // Marker
    return L.marker(this.coordOrganization, { //???
      icon: L.icon({
        iconSize: [26, 41],
        iconAnchor: [13, 41],
        popupAnchor: [1, -15],
        shadowSize: [41, 41],
        iconUrl: 'assets/map/marker.png',
        shadowUrl: 'leaflet/marker-shadow.png',
      }),
    })
    .bindPopup( '<h2>Somos Mas</h2> <p>Cra. 22 ## 80-73, Bogotá, Colombia</p>' )
    .on( 'mouseover',function(ev:L.LeafletEvent) { ev.target.openPopup(); } )
    .on( 'mouseout',function(ev:L.LeafletEvent) { ev.target.closePopup(); } );
  }

  mapOptions = {
    zoom: 10,
    mapId: 'fadc1ec7936b54d3'
  };

  position = {
    lat: 4.668740392164804,
    lng: -74.0620359551276,
  }; 

  label = {
    color: 'navy',
    text: "SOMOS MAS",
  };

  icon = {
    url: "assets/map/marker.png", 
    scaledSize: new google.maps.Size(30, 43), 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0),
    labelOrigin: new google.maps.Point(0, 0),
  };

  svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 3,
    anchor: new google.maps.Point(14, 24),
  };

  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    icon: this.svgMarker,
  };
  

}
