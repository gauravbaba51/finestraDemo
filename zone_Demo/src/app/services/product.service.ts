
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts(): Promise<Product[]> {
    return new Promise<Product[]>(resolve => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Yoga Mat', price: 799, active: true },
          { id: 2, name: 'Meditation Cushion', price: 1299, active: true },
          { id: 3, name: 'Herbal Tea Pack', price: 499, active: false }
        ]);
      }, 6000);
    });
  }
}
