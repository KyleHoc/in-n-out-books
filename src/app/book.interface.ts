//Author: Kyle Hochdoerfer
//Title: book.interface.ts
//Date: 11/13/23
//Description: Typescript for book interface

//Create and export a book interface with isbn, title, description, page number, and authors values
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
