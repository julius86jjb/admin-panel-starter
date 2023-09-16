import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['../login-page/login-page.component.css']
})
export class RegisterPageComponent{

  private fb          = inject(FormBuilder);
  private authService = inject(AuthService);
  private router      = inject(Router);

  public myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [new EmailValidator()]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_repetir: ['', [Validators.required]],
  },{
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password', 'password_repetir')
    ]
  })


  constructor(
    private validatorsService: ValidatorsService,
  ) {}



  isValidField( field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  getFieldError(field: string): string | null {
    const a = this.validatorsService.getFieldError(this.myForm, field);
    return this.validatorsService.getFieldError(this.myForm, field);

  }


  register() {

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      Swal.fire('Error', 'Corrige los errores del formulario', 'error')
      return;
    }

    const {nombre, email, password} = this.myForm.value;
    this.authService.register(nombre, email, password)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/auth/login'),
          Swal.fire('Registro Completado', 'Introduce tus datos para iniciar sesión', 'success')
        },
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      })
  }


}
