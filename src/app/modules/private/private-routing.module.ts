import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventFormComponent } from './components/create-event-form/create-event-form.component';

const routes: Routes = [
  { path: 'create-event', component: CreateEventFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
