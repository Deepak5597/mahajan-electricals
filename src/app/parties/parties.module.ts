import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartiesRoutingModule } from './parties-routing.module';
import { PartyListComponent } from './party-list/party-list.component';
import { ActionHeaderModule } from '../_shared/modules/action-header.module';
import { SideListModule } from '../_shared/modules/side-list.module';


@NgModule({
  declarations: [
    PartyListComponent
  ],
  imports: [
    CommonModule,
    PartiesRoutingModule,
    ActionHeaderModule,
    SideListModule
  ]
})
export class PartiesModule { }
