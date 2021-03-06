import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatComponent } from './seat/seat.component';
import { ListSeatComponent } from './list-seat/list-seat.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatComponent,
    ListSeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
