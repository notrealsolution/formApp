import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit{

  public myForm: FormGroup = this.fb.group({
    gender: [ 'M', Validators.required ],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.required ]
  })

  public person = {
    gender:'F',
    wantNotifications: false
  }
  constructor( private fb: FormBuilder ){  }

  ngOnInit(): void {
    console.log("Iniciando switches")
    this.myForm.reset( this.person );
  }


  onSave(){
    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return;
    }
    const {  termsAndConditions, ... newPerson } = this.myForm.value;
    this.person = newPerson;
    console.log(this.person);
    console.log(this.myForm.value);
  }

  isValidField( field: string): boolean | null{
    if( this.myForm.value.termsAndConditions === false ) return true;
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

}
