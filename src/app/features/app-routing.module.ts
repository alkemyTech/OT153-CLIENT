
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ActivityFormComponent } from './backoffice/pages/activities/activity-form/activity-form.component';
import { DashboardComponent } from './backoffice/pages/dashboard/dashboard.component';
import { AboutComponent } from './public/pages/about/about.component';
import { OrganizationDetailsComponent } from "./backoffice/pages/organization-details/organization-details.component";

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
    ]
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
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
