import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestBookService } from './services/guest-book.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.moudule';

@NgModule({
  declarations: [
    AppComponent,
    GuestBookComponent,
    GuestListComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [ GuestBookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
