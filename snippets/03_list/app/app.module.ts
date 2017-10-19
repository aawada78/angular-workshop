import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { GuestListComponent } from './guest-list/guest-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuestBookComponent,
    GuestListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
