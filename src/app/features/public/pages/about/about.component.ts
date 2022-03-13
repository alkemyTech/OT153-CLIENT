import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Organization } from '@core/models/organization.interfaces';
import { environment } from '@env/environment';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  load: boolean = true;
  public title = 'Sobre Nosotros';
  public backgroundColor = '#DB5752';
  public textColor = '#fff';
  public error = '';
  public text: string = '';

  constructor(private httpService: HttpService, private msjService:MessageService) {}

  ngOnInit(): void {
    this.httpService.get<Organization>(environment.apiUrlOrganization).subscribe((resp) => {
      this.text = resp.data.long_description;
      this.load = false;
    },
    
    error=>{
      this.load = false;
      this.msjService.add({
        severity: 'error',
        summary: 'Error',
        detail: `${error.status} ${error.statusText}`,
      });
    }
    );
  }
}
