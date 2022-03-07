import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { fromRoot } from '@app/core/redux/activities/activities.index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ 
      activitiesState: fromRoot.activityReducer
    }),
    EffectsModule.forRoot([
      fromRoot.ActivitiesEffects
    ]),
    StoreDevtoolsModule.instrument({name : 'test'})
  ],
  declarations: []
})
export class ActivitiesRxModule { }