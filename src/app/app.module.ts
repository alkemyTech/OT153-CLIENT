import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { fromRoot } from './indexActivities';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    CoreModule, 
    FeaturesModule, 
    ToastModule, 
    BrowserAnimationsModule, 
    ToastModule,
    StoreModule,
    // StoreModule.forRoot({ 
    //   activitiesState: fromRoot.activityReducer
    // }),
    // EffectsModule.forRoot([
    //   fromRoot.ActivitiesEffects
    // ])
  ],
  providers: [MessageService, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
