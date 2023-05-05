import { Component, OnInit } from '@angular/core';
import { Category } from '../core/models/Category';
import { CategoryService } from '../core/service/category.service';

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

  constructor(private categoryService: CategoryService) {}

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
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
