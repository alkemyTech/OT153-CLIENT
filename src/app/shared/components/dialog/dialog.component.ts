import { MessageService } from 'primeng/api';
import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogExampleComponent } from './components/dialog-example/dialog-template.component';
import { DialogService } from '@core/services/dialog.service';

@Component({
  selector: 'custom-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  message = 'algo'
  public show$: Observable<boolean>;

  constructor(public dialog: MatDialog, public ds: DialogService, public messageService: MessageService) {
    this.show$ = ds.DialogShowObservable;
  }

  ngOnInit(): void {
    this.show$.subscribe( resp => { resp? this.openDialog(): null; } )
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '30vw',
      //disableClose: true, //force close with buttons
    })
    dialogRef.afterClosed().subscribe(result => {
      this.ds.DialogSelection=result
    });
  }
}
