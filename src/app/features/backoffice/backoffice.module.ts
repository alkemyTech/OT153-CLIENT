import { NewsFormComponent } from './pages/news/components/news-form/news-form.component';
import { EditNewsFormComponent } from './pages/news/edit-news-form/edit-news-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { ActivityFormComponent } from './pages/activities/activity-form/activity-form.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { CategoryDropdownComponent } from './pages/news/components/category-dropdown/category-dropdown.component';
import { SlidesFormComponent } from './pages/slides/slides-form/slides-form.component';
import { TestimonialFormComponent } from './pages/testimonials/testimonial-form/testimonial-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrganizationDetailsComponent } from './pages/organization-details/organization-details.component';
import { NewActivityFormComponent } from './pages/activities/new-activity-form/new-activity-form.component';
import { EditActivityFormComponent } from './pages/activities/edit-activity-form/edit-activity-form.component';
import { ListActivititesComponent } from './pages/activities/list-activitites/list-activitites.component';
import { ListMembersComponent } from './pages/members/list-members/list-members.component';
import { SlidesListComponent } from './pages/slides/slides-list/slides-list.component';
import { UsersCrudComponent } from './pages/users/users.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { NewUserComponent } from './pages/users/new-user/new-user.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { MembersFormComponent } from './pages/members/members-form/members-form.component';
import { OrganizationEditComponent } from './pages/organization-details/organization-edit/organization-edit.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { ListNewsComponent } from './pages/news/list-news/list-news.component';
import { NewNewsFormComponent } from './pages/news/new-news-form/new-news-form.component';
import { HeaderBackofficeComponent } from './header/header.component';


@NgModule({
  declarations: [
    BackofficeComponent,
    ActivityFormComponent,
    CategoriesFormComponent,
    CategoryDropdownComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    DashboardComponent,
    OrganizationDetailsComponent,
    NewActivityFormComponent,
    EditActivityFormComponent,
    ListActivititesComponent,
    ListMembersComponent,
    SlidesListComponent,
    UsersCrudComponent,
    EditUserComponent,
    NewUserComponent,
    UserFormComponent,
    MembersFormComponent,
    OrganizationEditComponent,
    HomeComponent,
    ListNewsComponent,
    NewNewsFormComponent,
    EditNewsFormComponent,
    NewsFormComponent,
    HeaderBackofficeComponent,
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    SharedModule,
    ActivityFormComponent,
    CategoriesFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    RouterModule,
    MembersFormComponent,
    ListActivititesComponent,
  ],
})
export class BackofficeModule {}
