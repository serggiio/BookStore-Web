import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from 'src/app/core/models/Book';
import { BookService } from 'src/app/core/service/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  @Input() bookModel: Book = {};
  oldBookModel: Book = {};

  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.oldBookModel = this.bookModel;
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        () => {}
      );
  }

  editBook() {
    this.modalService.dismissAll();
    this.bookService
      .update({ id: this.bookModel.id || 0, entity: this.bookModel })
      .subscribe({
        next: () => {},
        error: (err) => {
          console.log(err);
          this.bookModel = this.oldBookModel;
        },
      });
  }
}
