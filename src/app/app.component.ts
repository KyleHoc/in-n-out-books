//Author: Kyle Hochdoerfer
//Title: app.component.ts
//Date: 11/13/23
//Description: Typescript app component

//Import component from angular
import { Component } from '@angular/core';

//Create and export a component for the app root
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Create an assignment variable as a string
  assignment: string;

  //Initialize the assignment title variable with a constructor
  constructor(){
    this.assignment = "Welcome to In-N-Out-Books"
  }
}
