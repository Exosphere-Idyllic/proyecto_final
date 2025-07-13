import { Routes } from '@angular/router';
import { FooterComponent } from './componets/footer/footer.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { HomeComponent } from './componets/home/home.component';

export const routes: Routes = [
    { path: 'footer', component: FooterComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'home', component: HomeComponent}
];
