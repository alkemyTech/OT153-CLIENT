import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { SlidesFormComponent } from '@app/features/backoffice/pages/slides/slides-form/slides-form.component';

const routes: Routes = [
  { 
    path: "", 
    component: HomeComponent,
    children:[
      {
        path:'',
        component: IndexComponent
      },
      {
        path:'about',
        component: SlidesFormComponent
      }
    ]
  },
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
