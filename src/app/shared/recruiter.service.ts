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
    email: new FormControl('', [Validators.email,Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    address: new FormControl(''),
    privacy: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      firmName: '',
      email: '',
      phone: '',
      address: '',
      privacy: false
    });
  }
}
