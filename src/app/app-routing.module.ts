import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';
import { RegisterComponent } from './register/register.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'tour-packages', component: TourPackagesComponent },
  { path: 'registration', component: RegisterComponent},
  { path: 'content', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
