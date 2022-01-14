import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { SignOngsContainerComponent } from './components/sign-ongs-container/sign-ongs-container.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardContainerComponent },
  { path: 'sign-ongs', component: SignOngsContainerComponent},
  { path: 'sign-up', component: SignUpFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
