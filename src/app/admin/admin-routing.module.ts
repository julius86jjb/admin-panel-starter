import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/main/admin-layout.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { UsuariosComponent } from './usuarios/pages/usuarios/usuarios.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule )
      },
      { path: '', component: DashboardComponent},
      { path: '**', redirectTo: '/admin'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
