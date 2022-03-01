import { ActivitiesCardComponent } from './public/pages/activities/components/activities-card/activities-card.component';
import { ActivitiesComponent } from './public/pages/activities/activities.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AboutTextComponent } from './public/pages/about/components/about-text/about-text.component';
import { ActivityFormComponent } from './backoffice/pages/activities/activity-form/activity-form.component';
import { LoginFormComponent } from './backoffice/pages/auth/login-form/login-form.component';
import { RegisterFormComponent } from './backoffice/pages/auth/register-form/register-form.component';
import { CategoriesFormComponent } from './backoffice/pages/categories/categories-form/categories-form.component';
import { CategoryDropdownComponent } from './backoffice/pages/news/components/category-dropdown/category-dropdown.component';
import { NewsFormComponent } from './backoffice/pages/news/news-form/news-form.component';
import { SlidesFormComponent } from './backoffice/pages/slides/slides-form/slides-form.component';
import { TestimonialFormComponent } from './backoffice/pages/testimonials/testimonial-form/testimonial-form.component';
import { AboutComponent } from './public/pages/about/about.component';
import { DashboardComponent } from './backoffice/pages/dashboard/dashboard.component';
import { OrganizationDetailsComponent } from './backoffice/pages/organization-details/organization-details.component';
import { DonationsComponent } from './public/pages/donations/donations.component';
import { ThanksComponent } from './public/pages/donations/thanks/thanks.component';
import { ErrorComponent } from './public/pages/donations/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewActivityFormComponent } from './backoffice/pages/activities/new-activity-form/new-activity-form.component';
import { EditActivityFormComponent } from './backoffice/pages/activities/edit-activity-form/edit-activity-form.component';
import { ListActivititesComponent } from './backoffice/pages/activities/list-activitites/list-activitites.component';
import { ListMembersComponent } from './backoffice/pages/members/list-members/list-members.component';
import { ActivitySelectedComponent } from './public/pages/activities/components/activity-selected/activity-selected.component';
import { ContactComponent } from "./public/pages/contact/contact.component";
import { ContactInfoComponent } from './public/pages/contact/components/contact-info/contact-info.component';
import { SlidesListComponent } from './backoffice/pages/slides/slides-list/slides-list.component';

@NgModule({
  declarations: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    CategoryDropdownComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    AboutComponent,
    AboutTextComponent,
    DashboardComponent,
    OrganizationDetailsComponent,
    DonationsComponent,
    ThanksComponent,
    ErrorComponent,
    ActivitiesCardComponent,
    ActivitiesComponent,
    NewActivityFormComponent,
    EditActivityFormComponent,
    ListActivititesComponent,
    ListMembersComponent,
    ActivitySelectedComponent,
    ContactComponent,
    ContactInfoComponent,
    SlidesListComponent,
  ],
  exports: [
    ActivityFormComponent,
    ActivitiesComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    RouterModule,
    SharedModule,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class FeaturesModule {}
