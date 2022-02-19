import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PrimengModule } from './primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    CarouselComponent
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
    CarouselComponent
  ]
})
export class SharedModule { }
