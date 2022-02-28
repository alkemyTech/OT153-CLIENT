import { Component, Input, OnInit } from "@angular/core";
import { Organization } from "@app/core/models/organization.interfaces";
import { HttpService } from "@app/core/services/http.service";
import { PublicapiService } from "@app/core/services/publicapi.service";


@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  title: string = "Contactate con nosotros";
  colorBackground: string = "transparent";
  organization_link:string = 'api/organization'
  organization_info:Organization 
  constructor(public http:PublicapiService) {}


  ngOnInit(): void {
    this.getContactInfo()
  }

  getContactInfo():void{
    this.http.get<Organization>(this.organization_link).subscribe((res)=>{
      console.log(res.data)
      this.organization_info = res
    },(error)=>{console.log(error)})
  }
}
