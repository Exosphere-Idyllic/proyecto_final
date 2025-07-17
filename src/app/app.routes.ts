import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OffersComponent } from './components/offers/offers.component';

export const routes: Routes = [
    { path: 'footer', component: FooterComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'home', component: HomeComponent},
    { path: 'carousel', component: CarouselComponent},
    { path: 'offers', component:OffersComponent}
];