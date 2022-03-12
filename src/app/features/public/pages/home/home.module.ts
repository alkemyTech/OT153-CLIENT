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
import { LoginFormComponent } from '@app/features/backoffice/pages/auth/login-form/login-form.component';
import { RegisterFormComponent } from '@app/features/backoffice/pages/auth/register-form/register-form.component';

const routes: Routes = [

  {
    path: '',
    // component: PublicComponent, // Add Component whit header/sidebar/footer when developed
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'actividades',
        children: [
          {
            path: '',
            component: ActivitiesComponent,
          },
          {
            path: ':id',
            component: ActivitySelectedComponent,
          },
        ]
      },
      {
        path: 'contacto',
        component: ContactComponent,
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
        path: 'iniciar-sesion',
        component: LoginFormComponent,
      },
      {
        path: 'miembros',
        component: UsComponent,
      },
      {
        path: 'nosotros',
        component: AboutComponent,
      },
      {
        path: 'registrarse',
        component: RegisterFormComponent,
      },
      {
        path: 'usuarios',
        children: [
          {
            path: 'crear',
            component: UserFormComponent,
          }
        ]
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
