import { Component, Input, OnInit } from "@angular/core";
import { Organization } from "@app/core/models/organization.interfaces";
import { HttpService } from "@app/core/services/http.service";

@Component({
  selector: "app-contact-info",
  templateUrl: "./contact-info.component.html",
  styleUrls: ["./contact-info.component.scss"],
})
export class ContactInfoComponent implements OnInit {
  @Input() info: Organization
  constructor() {}
  ngOnInit(): void {
  }
}


