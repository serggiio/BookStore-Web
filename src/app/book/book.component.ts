import { Component, OnInit } from '@angular/core';
import { BookService } from '../core/service/book.service';
import { Book } from '../core/models/Book';
import { alertType } from '../core/constants/alert-type';
import { AlertService } from '../core/service/alert.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  bookList: Book[] = [];

  page = 1;
  pageSize = 7;
  collectionSize = 0;

  constructor(
    private bookService: BookService,
    private alertService: AlertService
  ) {}

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
          this.bookList = this.bookList.filter((book) => book.id != id);
          this.alertService.add({
            type: alertType.success,
            message: `The book has been deleted.`,
          });
        },
        error: (err) => {
          console.log(err);
          this.alertService.add({
            type: alertType.danger,
            message: `
            There was an error deleting this item. Please try again.`,
          });
        },
      });
    }
  }
}
