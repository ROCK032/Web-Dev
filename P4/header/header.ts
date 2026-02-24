import { Component, output } from '@angular/core';
import { Router } from '@angular/router';
import {ProductListComponent} from '../component/product-list/product-list';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-header',
  imports: [
    FormsModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(public router: Router) {}

  searchTitle: string = '';

  search() {
    const event = new CustomEvent('searchProducts', {
      detail: this.searchTitle
    });
    window.dispatchEvent(event);
  }
}
