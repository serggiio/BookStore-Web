import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [BookComponent, BookCreateComponent, BookEditComponent],
  imports: [CommonModule, BookRoutingModule, FormsModule, NgbPaginationModule],
})
export class BookModule {}
