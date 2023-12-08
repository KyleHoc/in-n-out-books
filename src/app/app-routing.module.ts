//Author: Kyle Hochdoerfer
//Title: app-routing.module.ts
//Date: 11/13/23
//Description: Routing for in-and-out-books

//Import ngmodule, routes, and all app components
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';

//Create routes for the in-n-out-books app
const routes: Routes = [
  {
    //Set book-list as the default route
    path: '',
    component: BookListComponent
  },
  {
    //Create the non-default book list component route
    path: 'book-list',
    component: BookListComponent
  },
  {
    //Create the contact component route
    path: "contact",
    component: ContactComponent
  },
  {
    //Create the about component route
    path: "about",
    component: AboutComponent
  },
  {
    //Create the wishlist component route
    path: "wishlist",
    component: WishlistComponent
  }
];

//Create and export the app routing module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
