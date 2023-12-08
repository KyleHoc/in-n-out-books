//Author: Kyle Hochdoerfer
//Title: book-list.component.ts
//Date: 11/13/23
//Description: Typescript book-list component

//Importing Component, IBook, Observable, BookService, and dialog components
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs'
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


//Create and export book list component
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  //Create an observable array of IBooks
  books: Array<IBook> = [];

  //Create a book variable of type IBook
  book: IBook;

  //Create a constructor for getting book information
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    //Call getBooks with a subscribe function
    this.booksService.getBooks().subscribe(res => {
      //Output the response to the console
      console.log(res)

      //For every key in the response:
      for (let key in res){
        //If the key has its own property
        if (res.hasOwnProperty(key)){
          //Set authors to an empty array
          let authors = []
          //If the response key has one or more authors"
          if (res[key].details.authors){
            //Map the name(s) of the authors to the array, and return their name(s)
            authors = res[key].details.authors.map(function(author) {
              return author.name
            })
          }

          //Push book information onto the books array
          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })
  }

  ngOnInit(): void {
  }

  //Define a function for outputting book information based on the provided isbn number
  showBookDetails(isbn: string){
    //Set the book object to equal the selected book
    this.book = this.books.find(book => book.isbn === isbn);

    //Create a dialog ref object with a book value set to match the current book
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      //Set disableClose to true, and the width to 800px
      disableClose: true,
      width: '800px'
    })

    //Output the book data
    console.log(this.book)

    //When the dialog box is closed, reset the value of book to null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}
