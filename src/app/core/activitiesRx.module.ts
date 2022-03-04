import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { fromRoot } from '@app/core/store/activities/activities.index';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ 
      activitiesState: fromRoot.activityReducer
    }),
    EffectsModule.forRoot([
      fromRoot.ActivitiesEffects
    ])
  ],
  declarations: []
})
export class ActivitiesRxModule { }
