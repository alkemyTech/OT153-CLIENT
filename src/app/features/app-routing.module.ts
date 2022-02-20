import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { UserFormComponent } from './pages/users/user-form/user-form.component';

const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivityFormComponent },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "user",
    component: UserFormComponent,
  },
  {
    path: "user/edit/:id",
    component: UserFormComponent,
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
