import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import "../../../admin-scripts"

//probar en angular.json y luego intentar con otra plantilla


@Component({
  selector: 'admin-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  private authService = inject(AuthService);

  public user = computed( () => this.authService.currentUser())

  // get user() {
  //   return this.authService.currentUser();
  // }

}
