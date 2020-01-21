import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactComponent } from './components/contact';
import { MainComponent } from './components/main';
import { NotFoundComponent } from './components/not-found';
import {
  HeaderComponent,
  FooterComponent,
  SidebarComponent
} from './components/layout';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MainComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
