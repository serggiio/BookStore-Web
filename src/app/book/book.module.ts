import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookComponent, BookCreateComponent],
  imports: [CommonModule, BookRoutingModule, FormsModule],
})
export class BookModule {}
