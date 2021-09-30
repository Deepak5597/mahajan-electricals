import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionHeaderComponent } from '../components/action-header/action-header.component';



@NgModule({
  declarations: [
    ActionHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActionHeaderComponent
  ]
})
export class ActionHeaderModule { }
