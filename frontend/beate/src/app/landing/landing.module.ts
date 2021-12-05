import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlanesCardComponent } from './planes-card/planes-card.component';
import { RegisterComponent } from './landing-page/landing-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    RegisterComponent,
    PlanesCardComponent
  ],
  exports: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    LandingRoutingModule 
  ]
})
export class LandingModule { }
