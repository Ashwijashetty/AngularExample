import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers:[BookService]
})
export class BookListComponent implements OnInit {
books:Book[];
  constructor(private bookService:BookService) { }

  ngOnInit() {
  this.bookService.getAllBooks().subscribe(
  data=>this.books=<Book[]>data,
  err=>alert('No data found')
  );
  }

}
