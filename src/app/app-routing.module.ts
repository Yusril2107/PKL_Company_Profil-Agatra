import { HomeComponent } from './pages/homes/home.component';
import { AboutComponent } from './pages/abouts/about.component';
import { ContactComponent } from './pages/contacts/contact.component';
import { BlogComponent } from './pages/blogs/blog.component';
import { DetailblogComponent } from './pages/detailblogs/detailblog.component';
import { DetailclientComponent } from './pages/detailclients/detailclient.component';
import { DetailportofolioComponent } from './pages/detailportofolios/detailportofolio.component';
import { DetailourteamComponent } from './pages/detailourteams/detailourteam.component';

import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detailclient/:id', component: DetailclientComponent },
  { path: 'home/detailclient', component: DetailclientComponent },
  { path: 'detailportofolio', component: DetailportofolioComponent },
  { path: 'home/detailportofolio', component: DetailportofolioComponent },
  { path: 'detailourteam', component: DetailourteamComponent },
  { path: 'home/detailourteam', component: DetailourteamComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home/about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/detailblog', component: DetailblogComponent },
  { path: 'blog/detailblog/:id', component: DetailblogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
