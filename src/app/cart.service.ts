import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  coll;

  constructor(private db: AngularFirestore) { 

    this.coll = this.db.collection('items')
  }

  addToCart(product) {
    this.items.push(product);
    this.coll.add(product);

  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  
}
