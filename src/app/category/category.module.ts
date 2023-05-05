import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
  declarations: [CategoryComponent, CategoryCreateComponent, CategoryEditComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NgbPaginationModule,
    FormsModule,
  ],
})
export class CategoryModule {}
