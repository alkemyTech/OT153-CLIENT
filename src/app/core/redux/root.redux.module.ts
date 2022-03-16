import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ActivitiesReducer, ActivitiesEffects } from './activities/activities.index';
import { UserReducer, UsersEffects } from './users/user.index';
import { categoriesReducer } from './categories/categories.reducer';
import { CategoriesEffects } from './categories/categories.effects';
import { authReducer } from './auth/auth.reducers';
import { AuthEffects } from './auth/auth.effects';
import { MemberEffects, MemberReducer } from './members/member.index';
import { OrganizationReducer, OrganizationEffects } from './organization/organization.index';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      activitiesState: ActivitiesReducer.activityReducer,
      listCategories: categoriesReducer,
      userState: UserReducer.userReducer,
      authReducer: authReducer,
      memberState: MemberReducer.memberReducer,
      organizationState: OrganizationReducer.organizationReducer,
    }),
    EffectsModule.forRoot([
      ActivitiesEffects,
      CategoriesEffects,
      UsersEffects,
      AuthEffects,
      MemberEffects,
      OrganizationEffects,
    ]),
    StoreDevtoolsModule.instrument({
      name: 'REDUX STATES - devtools',
      maxAge: 25, // Retains last 25 states
    }),
  ],
  declarations: [],
})
export class RootReduxModule {}
