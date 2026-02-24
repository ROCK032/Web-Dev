import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';
import {Home} from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [CommonModule,
    Header,
    RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
  selectedCategoryId = signal<number | null>(null);
  constructor(public productService: ProductService) {}
  categories = computed(() => this.productService.categories());
  selectedProducts = computed(() => {
    const id = this.selectedCategoryId();
    if (id === null) return [];
    return this.productService.getProductsByCategory(id);
  });
  selectCategory(id: number) {
    this.selectedCategoryId.set(id);
  }
  onCategoryChange(id: number | null) {
    this.selectedCategoryId.set(id);
  }
}
