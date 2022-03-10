import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'alk-error-dialog-template',
  templateUrl: './error-dialog-template.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./error-dialog-template.component.scss']
})
export class ErrorDialogTemplateComponent {

  @Input() header: string | undefined = "";
  @Input() content: string | undefined = "";

  constructor() { }

}
