import { Component, OnInit } from '@angular/core';
import { Category } from '../core/models/Category';
import { CategoryService } from '../core/service/category.service';
import { alertType } from '../core/constants/alert-type';
import { AlertService } from '../core/service/alert.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryList: Category[] = [];

  page = 1;
  pageSize = 10;
  collectionSize = 0;

  constructor(
    private categoryService: CategoryService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        if (data && data.isSuccessful) {
          this.categoryList = data.data || [];
          console.log(data);
          this.collectionSize = this.categoryList.length;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteCategory(id: any) {
    if (confirm('Delete this category?')) {
      this.categoryService.delete({ id }).subscribe({
        next: () => {
          console.log('Deleted');
          this.categoryList = this.categoryList.filter(
            (category) => category.id != id
          );
          this.alertService.add({
            type: alertType.success,
            message: `The category has been deleted.`,
          });
        },
        error: (err) => {
          console.log(err);
          this.alertService.add({
            type: alertType.danger,
            message: `
            There was an error deleting this item. Please try again.`,
          });
        },
      });
    }
  }
}
