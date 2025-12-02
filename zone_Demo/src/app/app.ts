
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  private productService = inject(ProductService);

  title = 'Store';
  loading = true;
  products: Product[] = [];
  status = 'Initial';
  lastUpdated: string | null = null;

  ngOnInit(): void {
    this.productService.getProducts().then(items => {
      this.products = items;
      this.loading = false;
      this.lastUpdated = new Date().toLocaleTimeString();
    });

    setTimeout(() => {
      this.status = 'Refreshed after async task';
    }, 3000);
  }

  toggleActive(product: Product): void {
    product.active = !product.active;
  }

  addProduct(): void {
    const nextId = (this.products.at(-1)?.id ?? 0) + 1;
    this.products = [
      ...this.products,
      { id: nextId, name: `New Item #${nextId}`, price: 999, active: true }
    ];
    this.lastUpdated = new Date().toLocaleTimeString();
  }
}
