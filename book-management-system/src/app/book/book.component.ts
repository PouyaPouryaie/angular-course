import { Component } from '@angular/core';
import { BookModel } from '../models/book.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  newTitle: string = '';
  newAuthor: string = '';
  books: BookModel[] = [];

  ngOnInit(): void {
    let storedBooks = localStorage.getItem('bookList');

    this.books = storedBooks ? JSON.parse(storedBooks) : [];

    console.log('Loaded books from localStorage:', this.books);
  }


  addBook() {
    if (this.newTitle.trim() && this.newAuthor.trim()) {
      let newBook: BookModel = {
        id: this.books.length + 1,
        title: this.newTitle,
        author: this.newAuthor
      };
      
      this.books.push(newBook);
      this.newTitle = '';
      this.newAuthor = '';
      localStorage.setItem('bookList', JSON.stringify(this.books));
    }
  }

  deleteBook(id: number){
    this.books = this.books.filter(book => book.id !== id);
    localStorage.setItem('bookList', JSON.stringify(this.books));
  }

}
