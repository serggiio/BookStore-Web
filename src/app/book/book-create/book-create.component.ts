import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/core/models/Book';
import { BookService } from 'src/app/core/service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {

  createBookModel: Book = {}
  @ViewChild('createForm', { static: false })
  createBookForm: FormControl | undefined;

  constructor(private bookService: BookService, public router: Router) {}

  createBook() {
    if (this.createBookForm?.valid) {
      this.bookService
      .create({ entity: this.createBookModel })
      .subscribe({
        next: () => {
          this.router.navigate(['/book']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

}
