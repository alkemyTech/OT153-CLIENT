import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesRxModule } from './activities/redux.activities.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    ActivitiesRxModule,
    StoreDevtoolsModule.instrument({
      name: 'REDUX STATES - devtools',
      maxAge: 25, // Retains last 25 states
    }),
  ],
  declarations: []
})
export class RootReduxModule{ }
