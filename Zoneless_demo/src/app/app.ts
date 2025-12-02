
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  private productService = inject(ProductService);

  title = signal('Store');
  loading = signal(true);
  products = signal<Product[]>([]);
  status = signal('Initial');
  lastUpdated = signal<string | null>(null);

  ngOnInit(): void {
    this.productService.getProducts().then(items => {
      this.products.set(items);
      this.loading.set(false);
      this.lastUpdated.set(new Date().toLocaleTimeString());
    });

    setTimeout(() => {
      this.status.set('Refreshed after async task');
    }, 3000);
  }

  toggleActive(product: Product): void {
    const updated = this.products().map(p =>
      p.id === product.id ? { ...p, active: !p.active } : p
    );
    this.products.set(updated);
  }

  addProduct(): void {
    const nextId = (this.products().at(-1)?.id ?? 0) + 1;
    this.products.set([
      ...this.products(),
      { id: nextId, name: `New Item #${nextId}`, price: 999, active: true }
    ]);
    this.lastUpdated.set(new Date().toLocaleTimeString());
  }
}
