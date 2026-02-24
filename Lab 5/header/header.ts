import {Component, computed, output, signal} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {

  constructor(
    public router: Router,
    private productService: ProductService
  ) {}
  searchTitle: string = '';

  search() {
    const event = new CustomEvent('searchProducts', {
      detail: this.searchTitle
    });
    window.dispatchEvent(event);
  }
  categories = computed(() => this.productService.categories());

  selected = signal<number | null>(null);

  categoryChange = output<number | null>();

  onChange(value: string) {
    const id = value ? Number(value) : null;
    this.selected.set(id);
    this.categoryChange.emit(id);
  }
}
