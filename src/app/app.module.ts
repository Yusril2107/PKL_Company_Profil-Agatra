import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/headers/header.component';
import { FooterComponent } from './layouts/footers/footer.component';

import { HomeComponent } from './pages/homes/home.component';
import { AboutComponent } from './pages/abouts/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './pages/contacts/contact.component';
import { BlogComponent } from './pages/blogs/blog.component';
import { DetailblogComponent } from './pages/detailblogs/detailblog.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { AppDetailportofolioService } from './service/appdetailportofolio.service';
import { DetailclientService } from './service/detailclient.service';
import { DatePipe } from '@angular/common';
import { DetailportofolioComponent } from './pages/detailportofolios/detailportofolio.component';
import { DetailclientComponent } from './pages/detailclients/detailclient.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    DetailblogComponent,
    DetailportofolioComponent,
    DetailclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [ NewsapiservicesService, AppDetailportofolioService, DetailclientService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  NO_ERRORS_SCHEMA: any;
}
