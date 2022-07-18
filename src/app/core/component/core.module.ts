import { Error404Component } from './error-404/error-404.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav.bar/nav-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**', component: Error404Component 
      }
    ])

  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
