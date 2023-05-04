import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BookCreateComponent } from './book-create/book-create.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'create',
    component: BookCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
