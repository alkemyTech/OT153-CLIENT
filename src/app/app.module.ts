import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogService } from '@app/core/services/dialog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { DialogComponent } from './shared/components/dialog/dialog.component';

@NgModule({
  declarations: [AppComponent,DialogComponent],
  imports: [
    BrowserModule, 
    CoreModule, 
    FeaturesModule, 
    ToastModule, 
    BrowserAnimationsModule, 
    ToastModule,
    StoreModule,
  ],
  providers: [MessageService, DialogService, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
