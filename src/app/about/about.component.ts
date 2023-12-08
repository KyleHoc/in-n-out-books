//Author: Kyle Hochdoerfer
//Title: book-list.component.ts
//Date: 11/15/23
//Description: Typescript for about component

//Import component and oninit from angular
import { Component, OnInit } from '@angular/core';

//Create and export the about component
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  //Leave the about component constructor blank
  constructor() { }

  ngOnInit(): void {
  }

}
