import { PrimengModule } from './primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { UpperTitleComponent } from './components/upper-title/upper-title.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CardComponent } from './components/card/card.component';

const componentToExport = [UpperTitleComponent, CarouselComponent, ContactFormComponent, CardComponent];

const modulesToExport = [CKEditorModule, PrimengModule, ReactiveFormsModule];
@NgModule({
  declarations: [...componentToExport],
  imports: [CommonModule, ...modulesToExport],
  exports: [...modulesToExport, ...componentToExport],
})
export class SharedModule {}
