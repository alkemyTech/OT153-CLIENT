import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ActivityFormComponent } from "./backoffice/pages/activities/activity-form/activity-form.component";
import { DashboardComponent } from "./backoffice/pages/dashboard/dashboard.component";
import { AboutComponent } from "./public/pages/about/about.component";
import { OrganizationDetailsComponent } from "./backoffice/pages/organization-details/organization-details.component";
import { SlidesFormComponent } from "./backoffice/pages/slides/slides-form/slides-form.component";
import { DonationsComponent } from "./public/components/donations/donations.component";
import { ErrorComponent } from "./public/components/donations/error/error.component";
import { ThanksComponent } from "./public/components/donations/thanks/thanks.component";
import { LoginFormComponent } from "./backoffice/pages/auth/login-form/login-form.component";
import { NewActivityFormComponent } from "./backoffice/pages/activities/new-activity-form/new-activity-form.component";
import { EditActivityFormComponent } from "./backoffice/pages/activities/edit-activity-form/edit-activity-form.component";
const routes: Routes = [
  {
    path: "",
    component: ActivityFormComponent, // Replace with HomeComponent once object is created
    children: [
      {
        path: "actividades",
        component: ActivityFormComponent,
      },
      {
        path: "nosotros",
        component: AboutComponent,
      },
      {
        path: "donacion",
        component: DonationsComponent,
      },
      {
        path: "gracias",
        component: ThanksComponent,
      },
    ],
  },
  {
    path: "backoffice",
    children: [
      {
        path: "organization",
        component: OrganizationDetailsComponent,
      },
      {
        path: "slides",
        component: SlidesFormComponent,
      },
      {
        path: "slides/:id",
        component: SlidesFormComponent,
      },
      {
        path: "organization",
        component: OrganizationDetailsComponent,
      },
      {
        path: "actividades/crear",
        component: NewActivityFormComponent,
      },
      {
        path: "actividades/editar/:id",
        component: EditActivityFormComponent,
      },
      {
        path: "",
        component: DashboardComponent,
        pathMatch: "full",
      },
    ],
  },
  {
    path: "donar",
    component: DonationsComponent,
  },
  {
    path: "error",
    component: ErrorComponent,
  },
  {
    path: "nosotros",
    component: AboutComponent,
  },
  {
    path: "login",
    component: LoginFormComponent,
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "gracias",
    component: ThanksComponent,
  },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
