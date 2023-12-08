//Author: Kyle Hochdoerfer
//Title: book-list.component.ts
//Date: 11/15/23
//Description: Typescript book-details-dialog component

//Import IBook, component, material dialog reference and data, and inject
import { IBook } from '../book.interface';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

//Create and export a book details dialog component
@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {
  //Create a book variable of type IBook
  book: IBook;

  //Define a constructor with dialog ref and data parameters
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    //Set the book variable to equal the current book data
    this.book = data.book;
  }

  ngOnInit(): void {
  }
}
