import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  coll: any;
  items: any;

  constructor(private cartService: CartService,
              private db: AngularFirestore) {
                this.coll = this.db.collection('items');
                this.items = this.coll.valueChanges();

  }
  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_ES1SxdvGiz46tHBZx0S1BAlA00rSZKN6Ey',
      locale: 'auto',
      token: (token: any) => {
        this.coll.add({mycustomerId: token.id});
    
    
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });


    handler.open({
      name: 'Dax Site',
      description: 'Shoe',
      amount: '$300'
    });

  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }
}
