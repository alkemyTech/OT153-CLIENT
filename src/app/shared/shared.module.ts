import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from './primeng/primeng.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CardComponent } from './components/card/card.component';
import { UpperTitleComponent } from './components/upper-title/upper-title.component';

import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgrxModule } from './ngrx.module';


const componentToExport = [
  CarouselComponent, 
  ContactFormComponent, 
  CardComponent, 
  PhoneFormatPipe,
  SpinnerComponent,
  UpperTitleComponent, 
];

const modulesToExport = [CKEditorModule, PrimengModule, ReactiveFormsModule, NgrxModule];
@NgModule({
  declarations: [...componentToExport],
  imports: [CommonModule, ...modulesToExport],
  exports: [...modulesToExport, ...componentToExport],
})
export class SharedModule {}
