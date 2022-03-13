import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { UsComponent } from './pages/about/components/us/us.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivitySelectedComponent } from './pages/activities/components/activity-selected/activity-selected.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { ThanksComponent } from './pages/donations/thanks/thanks.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'actividades',
        children: [
          { path: '', component: ActivitiesComponent },
          { path: ':id', component: ActivitySelectedComponent },
        ],
      },
      {
        path: 'contacto',
        component: ContactComponent,
      },
      {
        path: 'campañas',
        component: CampaignsComponent,
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
        path: 'campañas',
        children: [
          { path: 'vuelta-al-cole', component: HomeComponent },
          { path: 'juguetes', component: HomeComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
