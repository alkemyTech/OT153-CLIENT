import { Component, Input, OnInit } from "@angular/core";
import { HttpService } from "@app/core/services/http.service";

@Component({
  selector: "app-contact-info",
  templateUrl: "./contact-info.component.html",
  styleUrls: ["./contact-info.component.scss"],
})
export class ContactInfoComponent implements OnInit {
  contactInfo: contactInfo;
  constructor(private http: HttpService) {}
  ngOnInit(): void {
    this.getContactInfo();
  }

  getContactInfo(): void {
    this.http
      .get("http://ongapi.alkemy.org/api/organization")
      .subscribe((res) => {
        console.log(res);
      });
  }
}

interface contactInfo {
  addres: string;
  phone: string;
  email: string;
}
