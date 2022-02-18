import { PrimengModule } from './primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { UpperTitleComponent } from './components/upper-title/upper-title.component';

const componentToExport = [
  UpperTitleComponent
]

const modulesToExport = [
  CKEditorModule,
  PrimengModule,
  ReactiveFormsModule

]
@NgModule({
  declarations: [
    ...componentToExport
  ],
  imports: [
    CommonModule,
    ...modulesToExport
  ],
  exports:[
    ...modulesToExport,
    ...componentToExport
  ]
})
export class SharedModule { }
