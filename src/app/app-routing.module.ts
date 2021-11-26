import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './shared/components/dashboard-container/dashboard-container.component';
import { SignOngsContainerComponent } from './shared/components/sign-ongs-container/sign-ongs-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardContainerComponent},
  { path: 'sign-ongs', component: SignOngsContainerComponent},
  { path: 'private', loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule) },
  { path: 'public', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
