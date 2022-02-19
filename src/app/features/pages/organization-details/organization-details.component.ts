import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/shared/models/organization.model';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})
export class OrganizationDetailsComponent implements OnInit {

  organization: Organization; 

  constructor() { }

  ngOnInit(): void {
    // ERASE -> Mock data until proper service is set. 
    this.organization = {
      "id": 1,
      "name": "Organizacion SomosMas",
      "logo": "http://ongapi.alkemy.org/storage/uyxA3bAbI2.jpeg",
      "short_description": "<p>prueba prueba SDAS</p>",
      "long_description": "prueba prueba",
      "welcome_text": "Bienvenido a Somos Más",
      "address": "Cra. 22 ## 80-73, Bogotá, Colombia",
      "phone": "string",
      "cellphone": "string",
      "created_at": "2021-03-31T12:33:48.000000Z",
      "updated_at": "2022-02-15T16:01:48.000000Z",
      "facebook_url": "https://github.com/alkemyTech/OT130-CLIENT/pull/20",
      "linkedin_url": "https://github.com/alkemyTech/OT130-CLIENT/pull/20",
      "instagram_url": "https://github.com/alkemyTech/OT130-CLIENT/pull/20",
      "twitter_url": "https://github.com/alkemyTech/OT130-CLIENT/pull/20"
    }
    // END ERASE - Mock Data
  }

}
