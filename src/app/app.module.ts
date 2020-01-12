import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD6piKZwCVNfyv1nt5Im5CqUAWYH0W61SE",
  authDomain: "fir-trial-ed3e4.firebaseapp.com",
  databaseURL: "https://fir-trial-ed3e4.firebaseio.com",
  projectId: "fir-trial-ed3e4",
  storageBucket: "fir-trial-ed3e4.appspot.com",
  messagingSenderId: "100908752650",
  appId: "1:100908752650:web:24cf5a2f9d0f9e4ebfe4f3",
  measurementId: "G-99BGN4K7RC"
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailsComponent,
    AllProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
