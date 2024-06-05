import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidator } from '../../../shared/service/email-validator.service'; // Asegúrate de usar la ruta correcta

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern) ]],
    email: [
      '',
      [ Validators.required, Validators.email, Validators.pattern(this.validatorsService.emailPattern) ],
      [ this.emailValidator.validate.bind(this.emailValidator) ] // Aquí va el validador asincrónico
    ],
    username: [ '', [ Validators.required, this.validatorsService.cantBeStrider ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ]],
    password2: [ '', [ Validators.required ]]
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator
  ){}

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
