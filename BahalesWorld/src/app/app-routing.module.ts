import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DesignsPageComponent } from './designs-page/designs-page.component';
import { WelcomPageComponent } from './welcom-page/welcom-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

const routes: Routes = [
  {path:'', component: WelcomPageComponent},
  {path:'design', component: DesignsPageComponent},
  {path:'contact', component: ContactUsPageComponent},
  {path:'about', component: AboutUsPageComponent},
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
