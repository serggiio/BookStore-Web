import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { alertType } from 'src/app/core/constants/alert-type';
import { Book } from 'src/app/core/models/Book';
import { AlertService } from 'src/app/core/service/alert.service';
import { BookService } from 'src/app/core/service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
})
export class BookCreateComponent {
  createBookModel: Book = {};
  @ViewChild('createForm', { static: false })
  createBookForm: FormControl | undefined;

  constructor(
    private bookService: BookService,
    public router: Router,
    private alertService: AlertService
  ) {}

  createBook() {
    if (this.createBookForm?.valid) {
      this.bookService.create({ entity: this.createBookModel }).subscribe({
        next: () => {
          this.alertService.add({
            type: alertType.success,
            message: `The book has been created.`,
          });
          this.router.navigate(['/book']);
        },
        error: (err) => {
          console.log(err);
          this.alertService.add({
            type: alertType.danger,
            message: `
            There was an error creating this item. Please try again.`,
          });
        },
      });
    }
  }
}
