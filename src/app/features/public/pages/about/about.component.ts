import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Organization } from '@core/models/organization.interfaces';
import { environment } from '@env/environment';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogData } from '@app/core/models/dialog.inteface';
import { DialogType } from '@app/core/enums/dialog.enum';

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

  constructor(private httpService: HttpService, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.httpService.get<Organization>(environment.apiUrlOrganization).subscribe((resp) => {
      this.text = resp.data.long_description;
      this.load = false;
    },(error)=>{
      this.load = false;
      let dialog: DialogData = { type: DialogType.ERROR, header:  'Error al procesar la operación', content: 'El listado de miembros de la organización no se ha encontrado.'};
      this.dialogService.show(dialog);
    }
    );
  }
}
