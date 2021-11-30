import { PublicRoutingModule } from './public-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { SignOngsContainerComponent } from './components/sign-ongs-container/sign-ongs-container.component';

@NgModule({
  declarations: [
    DashboardContainerComponent,
    SignOngsContainerComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
