import { Component, signal, computed} from '@angular/core';
import { Product } from '../../models/product.model';
import {FormsModule} from '@angular/forms';
// import {CurrencyPipe} from '@angular/common';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [
    FormsModule,
    // CurrencyPipe,
    CommonModule
  ],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent {
  stars = [1, 2, 3, 4, 5];
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: "Samsung Galaxy S25 Ultra",
      description: "Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн.",
      price: 900000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p60/p27/20120111.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000"
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      description: "Флагман Apple с мощным чипом A17 Pro, премиальным титановым корпусом и продвинутой камерой.",
      price: 850000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hcb/h30/86596770693150.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hab/hbf/86596770758686.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h26/hb4/86596770824222.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hf3/h2d/86596770889758.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-512gb-dual-esim-seryi-121703242/?c=750000000"
    },
    {
      id: 3,
      name: "Xiaomi 14 Ultra",
      description: "Мощный камерофон с Leica оптикой, топовым Snapdragon и премиальным дисплеем.",
      price: 650000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p65/p99/45808873.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p81/p99/45808874.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb9/p99/45808876.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000"
    },
    {
      id: 4,
      name: "Samsung Galaxy S24 Ultra",
      description: "Флагман Samsung с S Pen, отличной камерой и мощным процессором.",
      price: 780000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hdb/h7e/84963123494942.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000"
    },
    {
      id: 5,
      name: "Google Pixel 10 Pro",
      description: "Смартфон с лучшей вычислительной фотографией и чистым Android.",
      price: 620000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pdc/p5f/62213707.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pb1/pe6/66006359.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p1d/pe9/66006360.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p39/pe9/66006361.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/google-pixel-10-pro-xl-16-gb-512-gb-chernyi-145063783/?c=750000000"
    },
    {
      id: 6,
      name: "OnePlus 12",
      description: "Быстрый и плавный смартфон с мощной зарядкой и топовым железом.",
      price: 550000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pb0/pe2/49454547.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pcc/pe2/49454548.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pe8/pe2/49454549.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p55/pe5/49454550.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/oneplus-13s-12-gb-512-gb-zelenyi-141512103/?c=750000000"
    },
    {
      id: 7,
      name: "Xiaomi Redmi Note 13 Pro+",
      description: "Отличный баланс цены и характеристик с хорошей камерой.",
      price: 320000,
      rating: 4,
      image: "https://c.dns-shop.kz/thumb/st1/fit/500/500/a86e5982a02828d0a77d2638b70091dd/72797e5d534c12438cf3425d2674fa810fdd3d94f8310677a7254a7c5a85e9bd.jpg.webp",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h11/h22/85234567890222.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h33/h44/85234567890333.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h55/h66/85234567890444.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz"
    },
    {
      id: 8,
      name: "Nothing Phone (2)",
      description: "Уникальный дизайн с подсветкой Glyph и чистым Android.",
      price: 420000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h4b/82547092291614.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p5b/pdd/15562936.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p3f/pdd/15562937.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p23/pdd/15562938.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000"
    },
    {
      id: 9,
      name: "Samsung Galaxy A55",
      description: "Надежный средний класс от Samsung с хорошей автономностью.",
      price: 250000,
      rating: 3 ,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h14/hea/85428899479582.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h96/h5b/85428899545118.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000"
    },
    {
      id: 10,
      name: "iPhone 14",
      description: "Популярный смартфон Apple с отличной оптимизацией и камерой.",
      price: 520000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h9f/h4b/86042949681182.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/ha8/h64/86042949713950.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hd4/h92/86042949746718.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000"
    }
  ]);
  protected readonly Math = Math;
  search = signal('');
  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('searchProducts', (e: any) => {
        this.search.set(e.detail || '');
      });
    }
  }
  filteredProducts = computed(() => {
    const q = this.search().toLowerCase();
    return this.products().filter(p =>
      p.name.toLowerCase().includes(q)
    );
  });
}
