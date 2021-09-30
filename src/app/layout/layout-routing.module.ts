import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(dm => dm.DashboardModule)
      },
      {
        path: 'parties',
        loadChildren: () => import('../parties/parties.module').then(pm => pm.PartiesModule) 
      },
      {
        path: '',
        redirectTo:'parties', 
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
