import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
@Input() product?: {
  name: string;
  description: string;
  price: number;
  image: string;
};
}

