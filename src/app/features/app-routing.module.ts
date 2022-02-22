import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { DashboardComponent } from "./pages/backoffice/dashboard/dashboard.component";

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
