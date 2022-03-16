import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
