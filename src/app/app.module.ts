import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component'; // Import UserListComponent

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [UserListComponent], // Add UserListComponent to exports
  bootstrap: [AppComponent] // Add AppComponent to bootstrap
})
export class AppModule {}
