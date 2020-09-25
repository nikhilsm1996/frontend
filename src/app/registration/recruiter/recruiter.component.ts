import { Component, OnInit } from '@angular/core';

import { RecruiterService } from '../../shared/recruiter.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {

  constructor(private service: RecruiterService) { }
roles=[
  {id: 1,value:'HR from Job Consultancy Firm' },
  {id: 2,value:'HR from Training Company'},
  {id: 2,value:'HR from Hiring Companyy'},
  {id: 3,value:'Placement Officer'},
  {id: 4,value:'Questions Author'},
  {id: 5,value:'Candidate'},
  


]
  

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
