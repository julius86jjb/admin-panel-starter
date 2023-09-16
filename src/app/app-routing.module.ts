import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLayoutComponent } from './admin/layouts/main/admin-layout.component';
import { AdminRoutingModule } from './admin/admin-routing.module';

const routes: Routes = [

  {
    path: 'auth',
    // canActivate :[isNotAuthenticatedGuard],
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),

  },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   // canActivate :[isAuthenticatedGuard],
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: '**', component: Error404PageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    AdminRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
