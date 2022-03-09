import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { DialogData } from '@core/models/dialog.inteface';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogType } from '@core/enums/dialog.enum';

@Component({
  selector: 'dialog-template',
  templateUrl: 'dialog-template.component.html',
})
export class DialogTemplateComponent{
  public data$: Observable<DialogData>;
  public dialogData: DialogData;
  public type: DialogType;
  public isConfirm$ :boolean;
  public cancel = DialogType.CANCEL;
  
  constructor(public dialog: MatDialog, ds: DialogService) {
    this.data$ = ds.DialogDataObservable;
    this.data$.subscribe({
      next: (data:DialogData) => {
        this.dialogData = data;
        this.isConfirm$ = (data.type===DialogType.CONFIRM);
        this.type = data.type;
      },
      error: error => {
        console.warn('ERROR in 16: dialog-template.component.ts -.',error);
      },
    })
  }

}
