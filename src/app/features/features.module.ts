import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ActivityFormComponent } from './backoffice/pages/activities/activity-form/activity-form.component';
import { LoginFormComponent } from './backoffice/pages/auth/login-form/login-form.component';
import { RegisterFormComponent } from './backoffice/pages/auth/register-form/register-form.component';
import { CategoriesFormComponent } from './backoffice/pages/categories/categories-form/categories-form.component';
import { NewsFormComponent } from './backoffice/pages/news/news-form/news-form.component';
import { SlidesFormComponent } from './public/components/slides/slides-form/slides-form.component';
import { TestimonialFormComponent } from './backoffice/pages/testimonials/testimonial-form/testimonial-form.component';
import { UserFormComponent } from './backoffice/pages/users/user-form/user-form.component';
import { AboutComponent } from './public/pages/about/about.component';
import { AboutTextComponent } from './public/pages/about/components/about-text/about-text.component';
import { DashboardComponent } from './backoffice/pages/dashboard/dashboard.component';
import { OrganizationDetailsComponent } from "./backoffice/pages/organization-details/organization-details.component";


@NgModule({
  declarations: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    AboutComponent,
    AboutTextComponent,
    DashboardComponent,
    OrganizationDetailsComponent
  ],
  exports: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    RouterModule,
    SharedModule,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule,
  ],
})
export class FeaturesModule {}
