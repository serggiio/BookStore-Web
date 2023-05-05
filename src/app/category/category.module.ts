import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CategoryComponent, CategoryCreateComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NgbPaginationModule,
    FormsModule,
  ],
})
export class CategoryModule {}
