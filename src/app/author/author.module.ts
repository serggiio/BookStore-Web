import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthorComponent,
    AuthorCreateComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    NgbPaginationModule,
    FormsModule,
  ]
})
export class AuthorModule { }
