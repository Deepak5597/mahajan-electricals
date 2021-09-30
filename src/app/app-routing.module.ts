import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './error/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    loadChildren : () => import ('./layout/layout-routing.module').then(lm => lm.LayoutRoutingModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
