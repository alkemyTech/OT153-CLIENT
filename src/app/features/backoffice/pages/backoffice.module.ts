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
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { MembersFormComponent } from './members/members-form/members-form.component';

const routes: Routes = [
  {
    path: '',
    // component: BackofficeComponent, // Add whenever component is created
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full',
      },
      {
        path: 'actividades',
        children: [
          {
            path: '', 
            component: ListActivititesComponent,
          },
          {
            path: 'crear',
            component: NewActivityFormComponent,
          },
          {
            path: 'editar/:id',
            component: EditActivityFormComponent,
          },
        ]
      },
      {
        path: 'categorias',
        component: CategoriesFormComponent,
      },
      {
        path: 'diapositivas',
        children: [
          {
            path: '',
            component: SlidesListComponent,
          },
          {
            path: 'crear',
            component: SlidesFormComponent,
          },
        ],
      },
      {
        path: 'miembros',
        children: [
          {
            path: '',
            component: ListMembersComponent,
          },
          {
            path: 'crear',
            component: MembersFormComponent,
          },
        ]
      },
      {
        path: 'organizacion',
        children: [
          {
            path: '',
            component: OrganizationDetailsComponent,
          },
          {
            path: 'editar',
            component: OrganizationEditComponent,
          },
        ]
      },
      {
        path: 'usuarios',
        children: [
          {
            path: '',
            component: UsersCrudComponent,
          },
          {
            path: 'crear',
            component: NewUserComponent,
          },
        ]
      }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BackofficeModule {}
