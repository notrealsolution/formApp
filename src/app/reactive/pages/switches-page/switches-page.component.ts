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

  constructor( private fb: FormBuilder ){  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  onSave(){
    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return;
    }
  }
}
