import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image: './assets/images/glasses.jpg',
      price: 100
    },
    {
      id: '2',
      name: 'Product 2',
      image: './assets/images/album.jpg',
      price: 100
    },
    {
      id: '3',
      name: 'Product 3',
      image: './assets/images/books.jpg',
      price: 100
    }
  ]

  onLoaded(img: string){
    console.log("Log parent", img);
  }
}