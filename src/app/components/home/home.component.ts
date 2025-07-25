import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
products = [
  {
    name: 'Refrigeradora Samsung 400L',
    description: 'Tecnología inverter, ahorro energético.',
    price: 799.99,
    image: 'assets/products/fridge1.jpg'
  },
  {
    name: 'Lavadora LG 12kg',
    description: 'Carga frontal, eficiencia A+++.',
    price: 649.50,
    image: 'assets/products/washer1.jpg'
  },

];

}
