import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { RecruiterService } from './recruiter.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    RecruiterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [RecruiterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
