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
    this.initMap();
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

}
