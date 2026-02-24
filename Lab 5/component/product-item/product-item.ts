import {Component, input, output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent  {
  product = input.required<Product>();
  delete = output<number>();
  like = output<number>();
  stars = [1, 2, 3, 4, 5];
  onDelete(){
  this.delete.emit(this.product().id);
  }
  onLike(){
    this.like.emit(this.product().id);
  }
  share(){
    window.open(this.product().link, '_blank');
  }
}
