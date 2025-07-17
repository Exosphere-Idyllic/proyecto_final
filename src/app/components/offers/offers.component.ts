import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-offers',
  imports: [CarouselComponent, NavbarComponent, FooterComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {}
