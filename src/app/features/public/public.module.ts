import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { UserFormComponent } from '@app/features/backoffice/pages/users/user-form/user-form.component';
import { UsComponent } from './pages/about/components/us/us.component';
import { ActivitySelectedComponent } from './pages/activities/components/activity-selected/activity-selected.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { ThanksComponent } from './pages/donations/thanks/thanks.component';
import { PublicComponent } from './public.component';

const routes: Routes = [

  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
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
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },

];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
