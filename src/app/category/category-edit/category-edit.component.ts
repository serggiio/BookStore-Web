import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/core/models/Category';
import { CategoryService } from 'src/app/core/service/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
})
export class CategoryEditComponent implements OnInit {
  closeResult = '';

  @Input() categoryList?: Category[];
  @Input() categoryModel: Category = {};
  oldCategoryModel: Category = {};

  constructor(
    private modalService: NgbModal,
    private categoryService: CategoryService
  ) {}
  ngOnInit(): void {
    this.oldCategoryModel = this.categoryModel;
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

  editCategory() {
    this.modalService.dismissAll();
    this.categoryService
      .update({ id: this.categoryModel.id || 0, entity: this.categoryModel })
      .subscribe({
        next: () => {
          this.categoryList?.forEach((category) => {
            if (category.id == this.categoryModel.id) {
              category = this.categoryModel;
            }
          });
        },
        error: (err) => {
          console.log(err);
          this.categoryModel = this.oldCategoryModel;
          this.categoryList?.forEach((category) => {
            if (category.id == this.categoryModel.id) {
              category = this.categoryModel;
            }
          });
        },
      });
  }
}
