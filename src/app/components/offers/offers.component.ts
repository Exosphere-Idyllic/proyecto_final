import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
offers = [
    {
      name: 'Refrigeradora Samsung 400L',
      description: 'Tecnología inverter y eficiencia energética.',
      price: 799.99,
      oldPrice: 999.99,
      discount: 20,
      image: 'assets/images/of.webp'
    },
    {
      name: 'Microondas LG Smart',
      description: 'Con sensor de cocción y diseño moderno.',
      price: 129.99,
      oldPrice: 179.99,
      discount: 28,
      image: 'assets/images/microwave.webp'
    },
    {
      name: 'Aspiradora Dyson V12',
      description: 'Sin cables, máxima potencia y duración.',
      price: 469.00,
      oldPrice: 599.99,
      discount: 22,
      image: 'assets/imges/dyson.webp'
    }
  ];
}
