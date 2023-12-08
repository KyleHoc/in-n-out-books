//Author: Kyle Hochdoerfer
//Title: books.service.ts
//Date: 11/13/23
//Description: Typescript for book service

//Import Injectable, Observable, map, of, and the IBook interface
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { of } from "rxjs"
import { IBook } from './book.interface';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

//Create and export the books service
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //Create an array of specific isbn numbers
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ]

  //Create a constructor that accepts httpClient as a parameter
  constructor(private http: HttpClient) {

   }

   //Create a function to return the array of books
   getBooks() {
    //Set params as an httpParams object
    let params = new HttpParams();

    //Append bibkeys/ISBN array, JSON format, and jscmd details to the params variable
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`)
    params = params.append('format', 'json')
    params = params.append('jscmd', 'details')

    //Return the book information using openlibrary API for the chosen I
    return this.http.get('https://openlibrary.org/api/books', {params: params})
  }
}
