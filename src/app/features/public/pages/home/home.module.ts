import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { UserFormComponent } from '@app/features/backoffice/pages/users/user-form/user-form.component';
import { UsComponent } from '../about/components/us/us.component';
import { ActivitySelectedComponent } from '../activities/components/activity-selected/activity-selected.component';
import { ContactComponent } from '../contact/contact.component';
import { DonationsComponent } from '../donations/donations.component';
import { ThanksComponent } from '../donations/thanks/thanks.component';
import { ErrorComponent } from '../donations/error/error.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'actividades',
        component: ActivitiesComponent,
      },
      {
        path: 'actividades/:id',
        component: ActivitySelectedComponent,
      },
      {
        path: 'nosotros',
        component: AboutComponent,
      },
      {
        path: 'donar',
        component: DonationsComponent,
      },
      {
        path: 'gracias',
        component: ThanksComponent,
      },
      {
        path: 'error',
        component: ErrorComponent,
      },
      {
        path: 'contacto',
        component: ContactComponent,
      },
      {
        path: 'members',
        component: UsComponent,
      },
      {
        path: 'users/create',
        component: UserFormComponent,
      },
      {
        path: 'users/:id',
        component: UserFormComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
