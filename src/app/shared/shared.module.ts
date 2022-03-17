import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from './primeng/primeng.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MaterialModule } from './material/material.module';

import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CardComponent } from './components/card/card.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { UpperTitleComponent } from './components/upper-title/upper-title.component';
import { SimpleListComponent } from './components/simple-list/simple-list.component';

import { ErrorDialogTemplateComponent } from './components/dialog/components/error-dialog-template/error-dialog-template.component';
import { DialogTemplateComponent } from './components/dialog/components/dialog-template/dialog-template.component';
import { DialogComponent } from './components/dialog/dialog.component';

import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { WeekdayFormatPipe } from './pipes/weekday-format.pipe';
import { MonthNumberFormatPipe } from './pipes/monthnumber-format.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SuccessDialogTemplateComponent } from './components/dialog/components/success-dialog-template/success-dialog-template.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { GoogleMapsModule } from "@angular/google-maps";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

const componentToExport = [
  CarouselComponent,
  ContactFormComponent,
  CardComponent,
  ErrorDialogTemplateComponent,
  MonthNumberFormatPipe,
  PhoneFormatPipe,
  SkeletonComponent,
  SpinnerComponent,
  UpperTitleComponent,
  WeekdayFormatPipe,
  DialogTemplateComponent,
  SimpleListComponent,
  SuccessDialogTemplateComponent,
];

const modulesToExport = [CKEditorModule, PrimengModule, ReactiveFormsModule, MaterialModule, GoogleMapsModule, GooglePlaceModule,NgxExtendedPdfViewerModule];
@NgModule({
  declarations: [...componentToExport, SkeletonComponent],
  imports: [CommonModule, ...modulesToExport],
  exports: [...modulesToExport, ...componentToExport],
})
export class SharedModule {}
