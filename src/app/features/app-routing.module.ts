import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: '',
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: '',
    loadChildren: () => import('./backoffice/backoffice.module').then((m) => m.BackofficeModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
