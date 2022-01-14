import { DirectivesModule } from './../directives/directives.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotLogComponent } from './not-log/not-log.component';
import { LoggedComponent } from './logged/logged.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { PipesModule } from '../pipes/pipes.module';
import { BackEndMsgComponent } from './back-end-msg/back-end-msg.component';
import { LoginModalComponent } from './login-modal/login-modal.component';

@NgModule({
  declarations: [
    NavBarComponent,
    NotLogComponent,
    LoggedComponent,
    ErrorMsgComponent,
    BackEndMsgComponent,
    LoginModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PipesModule,
    DirectivesModule,
  ],
  exports: [
    NavBarComponent,
    ErrorMsgComponent,
    BackEndMsgComponent
  ]
})
export class SharedComponentsModule { }
