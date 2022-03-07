import { Component, OnInit } from '@angular/core';
import { Organization } from '@app/core/models/organization.interfaces';
import { environment } from '@env/environment';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss'],
})
export class OrganizationDetailsComponent implements OnInit {
  organization: any;

  constructor(private httpSvc: HttpService) {}

  ngOnInit(): void {
    this.getOrganization();
  }

  getOrganization() {
    this.httpSvc.get<Organization>(environment.apiUrlOrganization, true).subscribe(
      (res) => {
        this.organization = res.data;
      },
      (error) => {
        // console.log(error);
      }
    );
  }
}
