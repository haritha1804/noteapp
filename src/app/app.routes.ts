import { RouterModule, Routes } from '@angular/router';
import { NotecreateComponent } from './notecreate/notecreate.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NoteeditComponent } from './noteedit/noteedit.component';
import { NotedetailsComponent } from './notedetails/notedetails.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"add",component:NotecreateComponent},
    {path:"edit",component:NoteeditComponent},
    {path:"details",component:NotedetailsComponent}

  ];
  @NgModule({
    imports:[
      BrowserModule, FormsModule,
      RouterModule.forRoot(
          routes, {enableTracing: true}  // <-- debugging purposes only
          )
    ],
    // declarations: [
    //   AppComponent,NotecreateComponent,
    // ],
    //bootstrap: [AppComponent]
  })
  export class AppModule {
  }
