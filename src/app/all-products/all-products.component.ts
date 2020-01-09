import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: any[];
  constructor() { }

  ngOnInit() {
    this.products = [
      {id: 1, name: 'Shoe 1', desc: 'good shoe', img: '../assets/bird.jpg', price: 300, class: 'shoe-images1'},
      {id: 2, name: 'Shoe 2', desc: 'even better shoe', img: '../assets/boots.jpg', price: 455, class: 'shoe-images2'},
      {id: 3, name: 'Shoe 3', desc: 'quite possibly the best shoe', img: '../assets/desert.jpg', price: 500, class: 'shoe-images3'},
      {id: 4, name: 'Shoe 4', desc: 'this one is alright', img: '../assets/nature.jpg', price: 245, class: 'shoe-images4'},
      {id: 5, name: 'Shoe 5', desc: 'this is beyond shoe...', img: '../assets/skateboard.jpg', price: 1000, class: 'shoe-images5'},
      {id: 6, name: 'Shoe 6', desc: 'straight from sneaker heaven', img: '../assets/converse.jpg', price: 1500, class: 'shoe-images6'},
    ];
  }

}
