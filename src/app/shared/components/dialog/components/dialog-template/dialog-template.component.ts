import { Observable } from 'rxjs';
import { Component, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from '@core/models/dialog.inteface';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogType } from '@core/enums/dialog.enum';

@Component({
  selector: 'dialog-template',
  templateUrl: 'dialog-template.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class DialogTemplateComponent{
  @ViewChild('infoTemplate') infoTemplate: TemplateRef<any>;
  @ViewChild('errorTemplate') errorTemplate: TemplateRef<any>;
  @ViewChild('successTemplate') successTemplate: TemplateRef<any>;

  public data$: Observable<DialogData>;
  public dialogData: DialogData;
  public type: DialogType;
  public isConfirm:boolean;
  public cancel = DialogType.CANCEL;
  public selectTemplate
  
  constructor(public dialog: MatDialog, ds: DialogService) {
    this.data$ = ds.DialogDataObservable;
    this.data$.subscribe({
      next: (data:DialogData) => {
        this.dialogData = data;
        this.isConfirm = (data.type===DialogType.CONFIRM);
        this.type = data.type;
        this.getSelectedType();
      },
      error: error => {
        console.warn('ERROR: dialog-template.component.ts -.',error);
      },
      
    })
  }

  async getSelectedType(){
    setTimeout( ()=> { this.selectTemplate = this.switchType() },0 );
  }

  switchType(){
    switch (this.type) {
      case 'info':
        return this.infoTemplate
      case 'danger':
        return this.errorTemplate  
      case 'success':
        return this.successTemplate        
      default:
        return this.infoTemplate;
    }
  }

}
