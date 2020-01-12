import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products: { id: number; name: string; desc: string; img: string; price: number; class: string;}[];
  product: { id: number; name: string; desc: string; img: string; price: number; class: string;};
  
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  constructor(private route: ActivatedRoute,
              private cartService: CartService
    
    ) { }

  ngOnInit() {
    this.products = [
      {id: 7, name: 'Shoe 1', desc: 'good shoe', img: '../assets/bird.jpg', price: 300, class: 'shoe-images1'},
      {id: 1, name: 'Shoe 1', desc: 'also good shoe', img: '../assets/bird.jpg', price: 400, class: 'shoe-images1'},
      {id: 2, name: 'Shoe 2', desc: 'even better shoe', img: '../assets/boots.jpg', price: 455, class: 'shoe-images2'},
      {id: 3, name: 'Shoe 3', desc: 'quite possibly the best shoe', img: '../assets/desert.jpg', price: 500, class: 'shoe-images3'},
      {id: 4, name: 'Shoe 4', desc: 'this one is alright', img: '../assets/nature.jpg', price: 245, class: 'shoe-images4'},
      {id: 5, name: 'Shoe 5', desc: 'this is beyond shoe...', img: '../assets/skateboard.jpg', price: 1000, class: 'shoe-images5'},
      {id: 6, name: 'Shoe 6', desc: 'straight from sneaker heaven', img: '../assets/converse.jpg', price: 1500, class: 'shoe-images6'},
    ];

    this.route.paramMap.subscribe(params => {
      this.product = this.products[+params.get('productId')];
    });
  }

}
