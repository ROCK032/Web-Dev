import { Component, signal, computed, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ProductService} from '../../services/product';
import {ProductItemComponent} from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ProductItemComponent
  ],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent {
  selectedCategoryId = input<number | null>();
  stars = [1, 2, 3, 4, 5];
  protected readonly Math = Math;

  search = signal('');

  constructor(private productService: ProductService) {
    if (typeof window !== 'undefined') {
      window.addEventListener('searchProducts', (e: any) => {
        this.search.set(e.detail || '');
      });
    }
  }

  products = computed(() => this.productService.products());

  filteredProducts = computed(() => {
    const q = this.search().toLowerCase();
    const catId = this.selectedCategoryId();

    return this.products().filter(p => {
      const matchesSearch =
        p.name.toLowerCase().includes(q);

      const matchesCategory =
        !catId || p.categoryId === catId;

      return matchesSearch && matchesCategory;
    });
  });
  onDelete(id: number) {
    this.productService.deleteProduct(id);
  }

  onLike(id: number) {
    this.productService.likeProduct(id);
  }
}
