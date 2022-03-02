import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivityFormComponent } from './backoffice/pages/activities/activity-form/activity-form.component';
import { DashboardComponent } from './backoffice/pages/dashboard/dashboard.component';
import { AboutComponent } from './public/pages/about/about.component';
import { OrganizationDetailsComponent } from './backoffice/pages/organization-details/organization-details.component';
import { SlidesFormComponent } from './backoffice/pages/slides/slides-form/slides-form.component';
import { DonationsComponent } from './public/pages/donations/donations.component';
import { ErrorComponent } from './public/pages/donations/error/error.component';
import { ThanksComponent } from './public/pages/donations/thanks/thanks.component';
import { LoginFormComponent } from './backoffice/pages/auth/login-form/login-form.component';
import { NewActivityFormComponent } from './backoffice/pages/activities/new-activity-form/new-activity-form.component';
import { EditActivityFormComponent } from './backoffice/pages/activities/edit-activity-form/edit-activity-form.component';
import { ListActivititesComponent } from './backoffice/pages/activities/list-activitites/list-activitites.component';
import { ListMembersComponent } from './backoffice/pages/members/list-members/list-members.component';
import { SlidesListComponent } from './backoffice/pages/slides/slides-list/slides-list.component';
import { UsersCrudComponent } from './backoffice/pages/users/users.component';
import { NewUserComponent } from './backoffice/pages/users/new-user/new-user.component';
import { ActivitiesComponent } from "./public/pages/activities/activities.component";
import { ActivitySelectedComponent } from "./public/pages/activities/components/activity-selected/activity-selected.component";
import { ContactComponent } from "./public/pages/contact/contact.component";
import { UsComponent } from './public/pages/about/components/us/us.component';

import { UserFormComponent } from './backoffice/pages/users/user-form/user-form.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ActivityFormComponent, // Replace with HomeComponent once object is created
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
        path: 'donacion',
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
        path: "members",
        component: UsComponent,
      },

    ],
  },
  {
    path: 'backoffice',
    children: [
      {
        path: 'organization',
        component: OrganizationDetailsComponent,
      },
      {
        path: 'slides',
        children: [
          {
            path: '',
            component: SlidesListComponent,
          },
          {
            path: 'crear',
            component: SlidesFormComponent,
          },
          {
            path: ':id',
            component: SlidesFormComponent, // Replace with SlideDetailComponent once created
          },
        ],
      },
      {
        path: 'organizacion',
        component: OrganizationDetailsComponent,
      },
      {
        path: 'actividades',
        component: ListActivititesComponent,
      },
      {
        path: 'actividades/crear',
        component: NewActivityFormComponent,
      },
      {
        path: 'actividades/editar/:id',
        component: EditActivityFormComponent,
      },
      {
        path: 'users',
        component: UsersCrudComponent,
      },
      {
        path: 'users/create',
        component: NewUserComponent,
      },
      {
        path: 'members',
        component: ListMembersComponent,
      },
      {
        path: "users",
        component: UserFormComponent,
      },
      {
        path: "users/:id",
        component: UserFormComponent,
      },
      {
        path: "",
        component: DashboardComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'donar',
    component: DonationsComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'nosotros',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: '',
    redirectTo: 'actividades',
    pathMatch: 'full',
  },
  {
    path: 'gracias',
    component: ThanksComponent,
  },
  {
    path: '**',
    redirectTo: 'actividades',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
