import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Organization } from '../../../core/models/organization.interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public title = "Sobre Nosotros";
  public backgroundColor = "#DB5752";
  public textColor = "#fff"

  public text: string = '';

  constructor( private httpService: HttpService ) { }

  ngOnInit(): void {
    this.httpService.get<Organization>('http://ongapi.alkemy.org/api/organization').subscribe((resp)=>{
      this.text = resp.data.long_description;
    })
  }

}
