import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from './primeng/primeng.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MaterialModule } from './material/material.module';

import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CardComponent } from './components/card/card.component';
import { UpperTitleComponent } from './components/upper-title/upper-title.component';

import { DialogComponent } from './components/dialog/dialog.component';
import { DialogExampleComponent } from './components/dialog/components/dialog-example/dialog-template.component'

import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';

const componentToExport = [
  CarouselComponent, 
  ContactFormComponent, 
  CardComponent, 
  PhoneFormatPipe,
  SpinnerComponent,
  UpperTitleComponent, 
  DialogComponent,
  DialogExampleComponent,
];

const modulesToExport = [CKEditorModule, PrimengModule, ReactiveFormsModule, MaterialModule];
@NgModule({
  declarations: [...componentToExport],
  imports: [CommonModule, ...modulesToExport],
  exports: [...modulesToExport, ...componentToExport],
})
export class SharedModule {}
