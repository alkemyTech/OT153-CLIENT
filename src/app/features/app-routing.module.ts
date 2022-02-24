
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ActivityFormComponent } from './backoffice/pages/activities/activity-form/activity-form.component';
import { DashboardComponent } from './backoffice/pages/dashboard/dashboard.component';
import { AboutComponent } from './public/pages/about/about.component';
import { OrganizationDetailsComponent } from "./backoffice/pages/organization-details/organization-details.component";
import { SlidesFormComponent } from "./backoffice/pages/slides/slides-form/slides-form.component";
import { ThanksComponent } from "./public/pages/donations/thanks/thanks.component";
import { DonationsComponent } from "./public/pages/donations/donations.component";


const routes: Routes = [
  {
    path: '',
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
        path: 'gracias',
        component: ThanksComponent
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
      },
      {
        path: "slides",
        component: SlidesFormComponent
      },
      {
        path: "slides/:id",
        component: SlidesFormComponent
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
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
