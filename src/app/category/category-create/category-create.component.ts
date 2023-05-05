import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/core/models/Category';
import { CategoryService } from 'src/app/core/service/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
})
export class CategoryCreateComponent {
  categoryModel: Category = {};
  closeResult = '';

  @Input() categoryList?: Category[];

  constructor(
    private modalService: NgbModal,
    private categoryService: CategoryService
  ) {}

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

  createCategory() {
    this.modalService.dismissAll();
    this.categoryService.create({ entity: this.categoryModel }).subscribe({
      next: (data) => {
        this.categoryList?.push(this.categoryModel);
        this.categoryModel = {};
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
