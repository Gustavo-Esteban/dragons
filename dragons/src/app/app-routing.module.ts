import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragonDeleteComponent } from './components/pages/dragon-delete/dragon-delete.component';
import { DragonFormComponent } from './components/pages/dragon-form/dragon-form.component';
import { DragonPageComponent } from './components/pages/dragon-page/dragon-page.component';
import { DragonProfileComponent } from './components/pages/dragon-profile/dragon-profile.component';
import { DragonUpdateComponent } from './components/pages/dragon-update/dragon-update.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: "full",
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dragon-page',
    component: DragonPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'dragon-form',
    component: DragonFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'dragon-profile/:id',
    component: DragonProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'dragon-update/:id',
    component: DragonUpdateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'dragon-delete/:id',
    component: DragonDeleteComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
