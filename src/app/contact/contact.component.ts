//Author: Kyle Hochdoerfer
//Title: book-list.component.ts
//Date: 11/15/23
//Description: Typescript contact component

//Import component and oninit from angular
import { Component, OnInit } from '@angular/core';

//Create and export the contact component
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  //Leave the contact component constructor blank
  constructor() { }

  ngOnInit(): void {
  }

}
