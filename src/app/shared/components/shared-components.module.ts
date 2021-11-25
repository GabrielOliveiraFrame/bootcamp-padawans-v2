import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventsListComponent } from './events-list/events-list.component';
import { NotLogComponent } from './not-log/not-log.component';
import { LoggedComponent } from './logged/logged.component';
import { ContainerComponent } from './container/container.component';
import { EventCardComponent } from './event-card/event-card.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
@NgModule({
  declarations: [
    NavBarComponent,
    EventsListComponent,
    NotLogComponent,
    LoggedComponent,
    ContainerComponent,
    EventCardComponent,
    CalendarComponent,
    LoginModalComponent,
    SignUpModalComponent,
    ErrorMsgComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavBarComponent,
    ContainerComponent,
  ]
})
export class SharedComponentsModule { }
