import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb          = inject(FormBuilder);
  private authService = inject(AuthService);
  private router      = inject(Router);

  public myForm: FormGroup = this.fb.group({

    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],

  })

  constructor( private validatorsService: ValidatorsService) {

  }

  isValidField( field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  getFieldError(field: string): string | null {
    const a = this.validatorsService.getFieldError(this.myForm, field);
    console.log(a);
    return this.validatorsService.getFieldError(this.myForm, field);

  }




  login() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    const {email, password} = this.myForm.value;
    this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      })
  }


}
