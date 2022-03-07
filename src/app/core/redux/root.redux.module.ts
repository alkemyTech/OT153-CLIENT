import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ActivitiesReducer, ActivitiesEffects } from './activities/activities.index';



@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ 
      activitiesState: ActivitiesReducer.activityReducer,

    }),
    EffectsModule.forRoot([
      ActivitiesEffects,

    ]),
    StoreDevtoolsModule.instrument({
      name: 'REDUX STATES - devtools',
      maxAge: 25, // Retains last 25 states
    }),
  ],
  declarations: []
})
export class RootReduxModule{ }
