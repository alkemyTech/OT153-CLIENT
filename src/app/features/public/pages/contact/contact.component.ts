import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Organization } from '@app/core/models/organization.interfaces';
import { HttpService } from '@app/core/services/http.service';
import { PublicapiService } from '@app/core/services/publicApi.service';
import { environment } from '@env/environment';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogData } from '@app/core/models/dialog.inteface';
import { DialogType } from '@app/core/enums/dialog.enum';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  title: string = 'Contactate con nosotros';
  colorBackground: string = 'transparent';
  organization_link: string = environment.apiUrlOrganization;
  organization_info: Organization;
  constructor(public http: PublicapiService, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.getContactInfo();
  }

  getContactInfo(): void {
    this.http.getPublicOrganization().subscribe(
      (res) => {
        this.organization_info = res;
      },
      (error) => {
        let dialog: DialogData = {
          type: DialogType.ERROR,
          header: 'Error al procesar la operación',
          content: 'Los datos de la organización no pudieron ser cargados.',
        };
        this.dialogService.show(dialog);
      }
    );
  }
}
