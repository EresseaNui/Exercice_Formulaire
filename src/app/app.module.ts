import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormbuilderUserComponent } from './formbuilder-user/formbuilder-user.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [AppComponent, FormbuilderUserComponent, UserCardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
