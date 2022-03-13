import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alk-success-dialog-template',
  templateUrl: './success-dialog-template.component.html',
  styleUrls: ['./success-dialog-template.component.scss']
})
export class SuccessDialogTemplateComponent implements OnInit {
  @Input() title: string | undefined = "Procedimiento Exitoso";
  @Input() message: string | undefined = "La operación se efectuo correctamente";
  constructor(
  ) { }

  ngOnInit(): void {
  }



}
