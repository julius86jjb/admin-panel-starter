import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private authService = inject(AuthService);
  private router = inject(Router)

  constructor(private route: ActivatedRoute){}




  // public finishedAuthCheck = computed<boolean>(() => {
  //   if (this.authService.authStatus() === AuthStatus.checking) {
  //     return false
  //   }

  //   return true;
  // })

  // public authStatusChangedEffect = effect(() => {
  //   console.log('status:', this.authService.authStatus());
  //   switch(this.authService.authStatus()) {

  //     case AuthStatus.checking:
  //       return;

  //     case AuthStatus.authenticated:
  //       const url = localStorage.getItem('url') as string;
  //       if (url ) this.router.navigateByUrl(url);
  //       else this.router.navigateByUrl('usuarios');
  //       localStorage.removeItem('url');
  //       return;

  //     case AuthStatus.notAuthenticated:
  //       this.router.navigateByUrl('auth/login');
  //       return

  //   }
  // })
}
