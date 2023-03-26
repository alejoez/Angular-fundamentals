import { Component } from '@angular/core';
import {Product} from './product.model';

//a component  in angular is divide in 3 files: one for typescript code, 
//other for Html code and the last one for CSS code.

//Angular use the concept decorators to modify the behaviour of the classes.
//Class AppComponen implements the decoratos @Component() to indicate it to angular that this class
//will be a component. inside os this decorator, you can observe the component "selector", Html template and 
//style sheet that will use.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//In the selector @Component and the HTML template We are defining the url where will see printed the values
//that we have defined in the class AppComponent

export class AppComponent {
  name: string = 'Alejandro';
  age = "25";
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;

  person = {
    name: 'Alejandro',
    age: 25,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  emojis: string[] = [ '😂' , '🐦', '🐳','🌮', '💚'];
  newEmoji = '';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
      nameProduct: 'juguete'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/robot.jpg',
      nameProduct: 'juguete'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
      nameProduct: 'juguete'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
      nameProduct: 'juguete'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
      nameProduct: 'juguete'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
      nameProduct: 'juguete'
    }
  ];

  toggleButton(){
    this.btnDisabled=!this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addEmoji(){
    this.emojis.push(this.newEmoji);
    this.newEmoji='';
  }
  deleteEmoji(i: number){
    this.emojis.splice(i, 1);
  }
}