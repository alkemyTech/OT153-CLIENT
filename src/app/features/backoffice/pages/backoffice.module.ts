import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/features/public/pages/home/home.component';
import { EditActivityFormComponent } from './activities/edit-activity-form/edit-activity-form.component';
import { ListActivititesComponent } from './activities/list-activitites/list-activitites.component';
import { NewActivityFormComponent } from './activities/new-activity-form/new-activity-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListMembersComponent } from './members/list-members/list-members.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import { OrganizationEditComponent } from './organization-details/organization-edit/organization-edit.component';
import { SlidesFormComponent } from './slides/slides-form/slides-form.component';
import { SlidesListComponent } from './slides/slides-list/slides-list.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UsersCrudComponent } from './users/users.component';

const routes: Routes = [

  {
    path: '',
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
        path: 'organization/editar',
        component: OrganizationEditComponent,
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
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BackofficeModule { }
