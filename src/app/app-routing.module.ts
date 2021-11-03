import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDlcComponent } from './Components/about-dlc/about-dlc.component';
// import { DummyComponent } from './Components/dummy/dummy.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  // {path: 'dummy', component: DummyComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'about-dlc', component: AboutDlcComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
