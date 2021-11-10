import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDlcComponent } from './Components/about-dlc/about-dlc.component';
import { ExperiencesComponent } from './Components/experiences/experiences.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { OurWorldsComponent } from './Components/our-worlds/our-worlds.component';
import { PressComponent } from './Components/press/press.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'press', component: PressComponent},
  {path: 'about-dlc', component: AboutDlcComponent},
  {path: 'our-worlds', component: OurWorldsComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'gallery', component: GalleryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
