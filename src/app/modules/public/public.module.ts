import { DirectivesModule } from './../../shared/directives/directives.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { SignOngsContainerComponent } from './components/sign-ongs-container/sign-ongs-container.component';
import { SignOngsCardsComponent } from './components/sign-ongs-cards/sign-ongs-cards.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { RedirectCreateEventsComponent } from './components/redirect-create-events/redirect-create-events.component';
import { CalendarGroupComponent } from './components/calendar-group/calendar-group.component';
import { EventsCardComponent } from './components/events-card/events-card.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { RequestLoginModalComponent } from './components/request-login-modal/request-login-modal.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    DashboardContainerComponent,
    SignOngsContainerComponent,
    SignOngsCardsComponent,
    RedirectCreateEventsComponent,
    CalendarGroupComponent,
    EventsCardComponent,
    EventListComponent,
    RequestLoginModalComponent,
    SignUpFormComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule,
    PublicRoutingModule,
    PipesModule,
    ReactiveFormsModule,
    DirectivesModule
  ]
})
export class PublicModule { }
