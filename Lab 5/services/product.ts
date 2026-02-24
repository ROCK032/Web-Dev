import {Injectable, signal} from '@angular/core';
import {Product} from '../models/product.model';
import {Category} from '../models/category.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly categories  = signal<Category[]>([
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ]);
  readonly products = signal<Product[]>([
    {
      id: 1,
      name: "Samsung Galaxy S25 Ultra",
      description: "Флагман Samsung с топовой камерой и высокой производительностью.",
      price: 900000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p60/p27/20120111.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/",
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      description: "Мощный смартфон Apple с процессором A17 Pro.",
      price: 850000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hcb/h30/86596770693150.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hab/hbf/86596770758686.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h26/hb4/86596770824222.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hf3/h2d/86596770889758.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-512gb-dual-esim-seryi-121703242/",
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: "Samsung Galaxy A55",
      description: "Надежный смартфон среднего класса.",
      price: 250000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h14/hea/85428899479582.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h96/h5b/85428899545118.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/",
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: "Xiaomi 14 Ultra",
      description: "Камерофон с оптикой Leica.",
      price: 650000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p65/p99/45808873.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p81/p99/45808874.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb9/p99/45808876.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: "Nothing Phone (2)",
      description: "Смартфон с уникальной подсветкой Glyph.",
      price: 420000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h4b/82547092291614.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p5b/pdd/15562936.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p3f/pdd/15562937.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p23/pdd/15562938.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 1
    },
    {
      id: 6,
      name: "MacBook Air M2",
      description: "Легкий и мощный ноутбук Apple с чипом M2.",
      price: 720000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h9d/h3b/84020000000000.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h9d/h3b/84020000000000.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h9d/h3b/84020000000000.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: "ASUS ROG Strix G16",
      description: "Игровой ноутбук с мощной видеокартой.",
      price: 950000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pea/p02/60815937.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h11/h22/84020000000001.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h11/h22/84020000000001.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h11/h22/84020000000001.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: "Lenovo Legion 5",
      description: "Производительный игровой ноутбук.",
      price: 880000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p44/pb8/59691124.JPG?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h33/h44/84020000000002.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h33/h44/84020000000002.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h33/h44/84020000000002.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: "HP Pavilion 15",
      description: "Универсальный ноутбук для учебы и работы.",
      price: 450000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h4e/hb6/82089377726494.jpg?format=gallery-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h55/h66/84020000000003.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h55/h66/84020000000003.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h55/h66/84020000000003.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: "Dell XPS 13",
      description: "Компактный премиальный ультрабук.",
      price: 980000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p00/p2c/43905749.jpeg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h77/h88/84020000000004.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h77/h88/84020000000004.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h77/h88/84020000000004.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 2
    },
    {
      id: 11,
      name: "AirPods Pro 2",
      description: "Беспроводные наушники Apple с ANC.",
      price: 180000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=preview-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h99/h11/84020000000005.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h99/h11/84020000000005.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h99/h11/84020000000005.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: "Sony WH-1000XM5",
      description: "Топовые наушники с шумоподавлением.",
      price: 220000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=preview-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h22/h33/84020000000006.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h22/h33/84020000000006.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h22/h33/84020000000006.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: "JBL Tune 760NC",
      description: "Популярные Bluetooth-наушники.",
      price: 95000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hf3/h7c/64217926172702.jpg?format=preview-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h44/h55/84020000000007.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h44/h55/84020000000007.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h44/h55/84020000000007.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: "Samsung Buds 2 Pro",
      description: "Компактные TWS-наушники Samsung.",
      price: 120000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p1f/p7d/53123420.png?format=preview-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h66/h77/84020000000008.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h66/h77/84020000000008.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h66/h77/84020000000008.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: "Nothing Ear (2)",
      description: "Стильные прозрачные наушники.",
      price: 110000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h68/hd9/65054407753758.jpg?format=preview-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h88/h99/84020000000009.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h88/h99/84020000000009.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h88/h99/84020000000009.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 3
    },
    {
      id: 16,
      name: "iPad Pro 12.9",
      description: "Мощный планшет Apple для работы и творчества.",
      price: 650000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=preview-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h10/h20/84020000000010.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h10/h20/84020000000010.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h10/h20/84020000000010.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: "Samsung Galaxy Tab S9",
      description: "Флагманский Android-планшет.",
      price: 520000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=preview-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h30/h40/84020000000011.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h30/h40/84020000000011.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h30/h40/84020000000011.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: "Xiaomi Pad 6",
      description: "Доступный и мощный планшет.",
      price: 280000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=preview-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h50/h60/84020000000012.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h50/h60/84020000000012.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h50/h60/84020000000012.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: "Huawei MatePad 11",
      description: "Планшет для учебы и развлечений.",
      price: 240000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=preview-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h70/h80/84020000000013.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h70/h80/84020000000013.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h70/h80/84020000000013.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: "Lenovo Tab P12",
      description: "Большой планшет для мультимедиа.",
      price: 260000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p2b/p29/43598687.jpg?format=preview-large",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h90/h10/84020000000014.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h90/h10/84020000000014.jpg",
        "https://resources.cdn-kaspi.kz/img/m/p/h90/h10/84020000000014.jpg"
      ],
      link: "https://kaspi.kz/",
      likes: 0,
      categoryId: 4
    }
  ]);
  getProductsByCategory(categoryId: number) {
    return this.products().filter(p => p.categoryId === categoryId);
  }
  deleteProduct(productId: number) {
    this.products.update(products => products.filter(p => p.id !== productId));
  }
  likeProduct(productId: number) {
    this.products.update(products =>
      products.map(p =>
        p.id === productId ? { ...p, likes: p.likes + 1 } : p
      )
    );
  }
}
