import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule, 
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatSidenavModule,
    Material.MatListModule,
    Material.MatStepperModule,
     
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule, 
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatSidenavModule,
    Material.MatListModule,
    Material.MatStepperModule,
    
  ],
  declarations: []
})
export class MaterialModule { }
