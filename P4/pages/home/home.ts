import { Component } from '@angular/core';
import { ProductListComponent } from '../../component/product-list/product-list';
import {Header} from '../../header/header';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
