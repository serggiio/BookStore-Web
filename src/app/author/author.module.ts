import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AuthorEditComponent } from './author-edit/author-edit.component';


@NgModule({
  declarations: [
    AuthorComponent,
    AuthorCreateComponent,
    AuthorEditComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    NgbPaginationModule,
    FormsModule,
  ]
})
export class AuthorModule { }
