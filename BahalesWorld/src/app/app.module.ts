import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomPageComponent } from './welcom-page/welcom-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { DesignsPageComponent } from './designs-page/designs-page.component';
import { AppRoutingModule } from './app-routing.module';

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
<<<<<<< HEAD
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
=======
    BrowserModule
>>>>>>> cd02028ddf77f757c26feb790786473e3b75e4ba
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
