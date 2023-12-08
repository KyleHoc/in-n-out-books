//Author: Kyle Hochdoerfer
//Title: wishlist-create.component.ts
//Date: 11/20/23
//Description: Typescript wishlist create component

//Import Component, Oninit, output, and EventEmitter from angular, and the Wishlist item interface
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

//Declare and export the wishlist-create component
@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  //Create an output emitter property for adding items
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>()

  //Create an item property of type IWishListItem
  item: IWishlistItem;

  //Set the constructor to initialize a Wishlist item
  constructor() {
    this.item = {} as IWishlistItem;
   }

  ngOnInit(): void {
  }

  //Create a function for adding items
  addItem(){
    //Call addItemEmitter on an item to output the data
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    //Reset the item property
    this.item = {} as IWishlistItem;
  }

}
