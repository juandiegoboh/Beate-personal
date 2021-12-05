import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true, // Evita que se recargue siempre la página
      scrollPositionRestoration: 'disabled',
    }),
    CommonModule
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
