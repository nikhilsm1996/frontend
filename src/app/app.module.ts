import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecruiterComponent } from './registration/recruiter/recruiter.component';
import { RecruiterService } from './shared/recruiter.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    RecruiterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [RecruiterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
