import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyListComponent } from './party-list/party-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: PartyListComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full' 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartiesRoutingModule { }
