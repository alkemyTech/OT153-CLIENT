import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'alk-success-dialog-template',
  templateUrl: './success-dialog-template.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./success-dialog-template.component.scss']
})
export class SuccessDialogTemplateComponent implements OnInit {

  @Input() title: string | undefined = "Procedimiento Exitoso";
  @Input() message: string | undefined = "La operación se efectuo correctamente";
  @Input() filePDF: string | undefined;
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
