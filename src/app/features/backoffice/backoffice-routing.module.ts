import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { EditActivityFormComponent } from './pages/activities/edit-activity-form/edit-activity-form.component';
import { ListActivititesComponent } from './pages/activities/list-activitites/list-activitites.component';
import { NewActivityFormComponent } from './pages/activities/new-activity-form/new-activity-form.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListMembersComponent } from './pages/members/list-members/list-members.component';
import { MembersFormComponent } from './pages/members/members-form/members-form.component';
import { SlidesFormComponent } from './pages/slides/slides-form/slides-form.component';
import { SlidesListComponent } from './pages/slides/slides-list/slides-list.component';
import { NewUserComponent } from './pages/users/new-user/new-user.component';
import { UsersCrudComponent } from './pages/users/users.component';
import { ListNewsComponent } from './pages/news/list-news/list-news.component';
import { NewNewsFormComponent } from './pages/news/new-news-form/new-news-form.component';
import { EditNewsFormComponent } from './pages/news/edit-news-form/edit-news-form.component';

const routes: Routes = [
  {
    path: 'backoffice',
    component: BackofficeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'actividades',
        children: [
          { path: '', component: ListActivititesComponent },
          { path: 'crear', component: NewActivityFormComponent },
          { path: 'editar/:id', component: EditActivityFormComponent },
        ],
      },
      {
        path: 'novedades',
        children: [
          { path: '', component: ListNewsComponent },
          { path: 'crear', component: NewNewsFormComponent },
          { path: 'editar/:id', component: EditNewsFormComponent },
        ],
      },
      {
        path: 'categorias',
        component: CategoriesFormComponent,
      },
      {
        path: 'diapositivas',
        children: [
          { path: '', component: SlidesListComponent },
          { path: 'crear', component: SlidesFormComponent },
        ],
      },
      {
        path: 'miembros',
        children: [
          { path: '', component: ListMembersComponent },
          { path: 'crear', component: MembersFormComponent },
        ],
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
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
