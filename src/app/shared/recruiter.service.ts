import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firmName: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(8),]),
    password2: new FormControl('',[Validators.required,Validators.minLength(8),]),
    email: new FormControl('', [Validators.email,Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10),Validators.pattern('[0-9]*')]),
    role: new FormControl(''),
    privacy: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      firmName: '',
      password:'',
      password2:'',
      email: '',
      phone: '',
      role: '',
      privacy: false
    });
  }
}
