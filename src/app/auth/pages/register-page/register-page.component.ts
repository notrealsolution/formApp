import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from 'src/app/shared/validators/validators';


@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( customValidators.firstNameAndLastnamePattern) ]],
    email: [ '', [ Validators.required, Validators.email ] ],
    username: [ '', [ Validators.required, customValidators.cantBeStrider, Validators.pattern(customValidators.emailPattern)] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ]],
    password2: [ '', [ Validators.required ]]
  })

  constructor( private fb: FormBuilder ){}

  isValidField( field: string ){
    //TODO: Obtener validacion desde un servicio
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
