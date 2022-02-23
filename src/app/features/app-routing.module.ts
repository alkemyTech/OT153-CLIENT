
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD
=======
import { AboutComponent } from "./public/pages/about/about.component";
import { DashboardComponent } from "./backoffice/pages/dashboard/dashboard.component";
import { OrganizationDetailsComponent } from "./backoffice/pages/organization-details/organization-details.component";
>>>>>>> Merge branch 'OT153-39_OrganizationDetailsScreen' into develop
import { ActivityFormComponent } from './backoffice/pages/activities/activity-form/activity-form.component';
import { DashboardComponent } from './backoffice/pages/dashboard/dashboard.component';
import { AboutComponent } from './public/pages/about/about.component';
import { OrganizationDetailsComponent } from "./pages/organization-details/organization-details.component";

const routes: Routes = [
  {
    path: "actividades",
    component: ActivityFormComponent,
  },
  {
    path: "backoffice",
    component: DashboardComponent,
  },
  { 
    path: "backoffice/organization", 
    component: OrganizationDetailsComponent 
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
