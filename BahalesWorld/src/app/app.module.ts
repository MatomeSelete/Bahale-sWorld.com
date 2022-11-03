import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomPageComponent } from './welcom-page/welcom-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { DesignsPageComponent } from './designs-page/designs-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomPageComponent,
    AboutUsPageComponent,
    ContactUsPageComponent,
    DesignsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
