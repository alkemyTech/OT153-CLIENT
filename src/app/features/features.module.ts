import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackofficeModule } from './backoffice/backoffice.module';

@NgModule({
  declarations: [

  ],
  exports: [
    RouterModule
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    BackofficeModule,
  ],
})
export class FeaturesModule {}
