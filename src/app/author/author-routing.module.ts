import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author.component';
import { AuthorCreateComponent } from './author-create/author-create.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorComponent,
  },
  {
    path: 'create',
    component: AuthorCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorRoutingModule {}
