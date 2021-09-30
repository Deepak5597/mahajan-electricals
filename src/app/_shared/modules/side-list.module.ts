import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideListComponent } from '../components/side-list/side-list.component';

@NgModule({
  declarations: [
    SideListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideListComponent
  ]
})
export class SideListModule { }
