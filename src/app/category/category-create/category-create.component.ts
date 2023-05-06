import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { alertType } from 'src/app/core/constants/alert-type';
import { Category } from 'src/app/core/models/Category';
import { AlertService } from 'src/app/core/service/alert.service';
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
    private categoryService: CategoryService,
    private alertService: AlertService
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
        this.alertService.add({
          type: alertType.success,
          message: `The category has been created.`,
        });
      },
      error: (err) => {
        console.log(err);
        this.alertService.add({
          type: alertType.danger,
          message: `
          There was an error creating this item. Please try again.`,
        });
      },
    });
  }
}
