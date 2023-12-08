//Author: Kyle Hochdoerfer
//Title: wishlist.component.ts
//Date: 11/20/23
//Description: Typescript wishlist component

//Import Component, oninit, and the Wishlist item interface
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

//Create and export the wishlist interface
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  //Create an empty array of wishlist items
  items: Array<IWishlistItem> = []

  //Leave the constructor blank
  constructor() { }

  ngOnInit(): void {
  }

  //Create a function for adding items to the array
  updateItemsHandler(item: IWishlistItem){
    //Push an item to the wishlist item array
    this.items.push(item)
  }

}
