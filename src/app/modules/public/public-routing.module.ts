import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { SignOngsContainerComponent } from './components/sign-ongs-container/sign-ongs-container.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardContainerComponent },
  { path: 'sign-ongs', component: SignOngsContainerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
