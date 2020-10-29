import { passwordMatchValidator } from './../user';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { RecruiterService } from './../recruiter.service';
// import { User } from '../user';
import { Component, OnInit } from '@angular/core'; 
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit { 

  form:FormGroup


  constructor(private service: RecruiterService,private fb:FormBuilder) { 
    this.form=this.fb.group({
    $key: new FormControl(null),  
    firmName: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(8),]),
    password2: new FormControl('',[Validators.required,passwordMatchValidator]),
    email: new FormControl('', [Validators.email,Validators.required,]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10),Validators.pattern('[0-9]*')]),
    role: new FormControl(''),
    privacy: new FormControl(false)
  });
  this.form.controls.password.valueChanges
  .subscribe(x => this.form.controls.password2.updateValueAndValidity())
}
  
     
 





roles=[
  {id: 1,value:'HR from Job Consultancy Firm' },
  {id: 2,value:'HR from Training Company'},
  {id: 2,value:'HR from Hiring Companyy'},
  {id: 3,value:'Placement Officer'},
  {id: 4,value:'Questions Author'},
  {id: 5,value:'Candidate'}
]
   
ngOnInit() {  
  console.log("hell")
  }
  onsubmit(){ 
    console.log(this.form.value) 
    console.log(this.form.value.password)
    if(this.form.value.password != this.form.value.password2){
      console.log("jksfjhsd")  
    }
  }
  onClear() {
    this.form.reset()
  }  

}
