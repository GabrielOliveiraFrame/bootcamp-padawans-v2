import { reducer as updateRequestReducer } from './../ngrx';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from './shared/components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
    HttpClientModule,
    StoreModule.forRoot({
      updateRequest: updateRequestReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
