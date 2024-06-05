import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import * as customValidators from 'src/app/shared/validators/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';


@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern), [ EmailValidator ] ]],
    email: [ '', [ Validators.required, Validators.email, Validators.pattern(this.validatorsService.emailPattern), [ this.emailValidator ] ] ],
    username: [ '', [ Validators.required, this.validatorsService.cantBeStrider ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ]],
    password2: [ '', [ Validators.required ]]
  })

  constructor( private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator
   ){}

  isValidField( field: string ){
    return this.validatorsService.isValidField( this.myForm, field );
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
