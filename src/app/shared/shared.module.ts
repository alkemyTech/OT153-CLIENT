import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PrimengModule } from './primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UpperTitleComponent } from './components/upper-title/upper-title.component';


@NgModule({
  declarations: [
    UpperTitleComponent
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  exports:[
    CKEditorModule,
    PrimengModule,
    ReactiveFormsModule,
    UpperTitleComponent
  ]
})
export class SharedModule { }
