
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ActivityFormComponent } from './backoffice/pages/activities/activity-form/activity-form.component';
import { DashboardComponent } from './backoffice/pages/dashboard/dashboard.component';
import { AboutComponent } from './public/pages/about/about.component';
import { OrganizationDetailsComponent } from "./backoffice/pages/organization-details/organization-details.component";
import { DonationsComponent } from "./public/components/donations/donations.component";
import { ErrorComponent } from "./public/components/donations/error/error.component";
import { ThanksComponent } from "./public/components/donations/thanks/thanks.component";

const routes: Routes = [
  {
    path: '',
    component: ActivityFormComponent, // Replace with HomeComponent once object is created
    children: [
      {
        path: "actividades",
        component: ActivityFormComponent,
      },
      {
        path: "nosotros",
        component: AboutComponent,
      }
    ]
  },
  {
    path: "backoffice",
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      { 
        path: "organization", 
        component: OrganizationDetailsComponent 
      }
    ],
    component: DashboardComponent,
  },
  {
    path: "donar",
    component: DonationsComponent ,
  },
  {
    path: "error",
    component: ErrorComponent ,
  },
  {
    path: "nosotros",
    component: AboutComponent,
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "gracias",
    component: ThanksComponent ,
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
