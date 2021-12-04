import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlanesCardComponent } from './planes-card/planes-card.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    PlanesCardComponent
  ],
  exports: [
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
