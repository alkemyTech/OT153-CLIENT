import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, FeaturesModule, ToastModule, BrowserAnimationsModule, ToastModule],
  providers: [MessageService, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
