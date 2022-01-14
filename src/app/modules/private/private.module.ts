import { DirectivesModule } from './../../shared/directives/directives.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { CreateEventFormComponent } from './components/create-event-form/create-event-form.component';
@NgModule({
  declarations: [
    CreateEventFormComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    DirectivesModule
  ]
})
export class PrivateModule { }
