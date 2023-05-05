import { Component, OnInit } from '@angular/core';
import { BookService } from '../core/service/book.service';
import { Book } from '../core/models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        if (data && data.isSuccessful) {
          this.bookList = data.data || [];
          console.log(this.bookList);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteBook(id: any) {
    if (confirm('Delete this book?')) {
      this.bookService.delete({ id }).subscribe({
        next: () => {
          console.log('Deleted');
          this.bookList = this.bookList.filter((book) => book.id != id);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
