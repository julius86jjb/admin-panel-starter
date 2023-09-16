import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AdminLayoutComponent } from '../layouts/main/admin-layout.component';

const routes: Routes = [

      { path: '', component: UsuariosComponent },
      { path: 'nuevo', component: NuevoComponent },
      { path: ':id', component: UsuarioComponent },
      { path: '**' , redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
