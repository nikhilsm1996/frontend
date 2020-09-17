import { Component, OnInit } from '@angular/core';

import { RecruiterService } from '../../shared/recruiter.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {

  constructor(private service: RecruiterService) { }

  

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
