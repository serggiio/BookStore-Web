import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { alertType } from 'src/app/core/constants/alert-type';
import { Category } from 'src/app/core/models/Category';
import { AlertService } from 'src/app/core/service/alert.service';
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
    private categoryService: CategoryService,
    private alertService: AlertService
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
          this.alertService.add({
            type: alertType.success,
            message: `The category has been edited.`,
          });
        },
        error: (err) => {
          console.log(err);
          this.categoryModel = this.oldCategoryModel;
          this.alertService.add({
            type: alertType.danger,
            message: `
            There was an error editing this item. Please try again.`,
          });
        },
      });
  }
}
