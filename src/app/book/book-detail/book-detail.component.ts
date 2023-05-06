import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from 'src/app/core/models/Book';
import { Category } from 'src/app/core/models/Category';
import { BookService } from 'src/app/core/service/book.service';
import { CategoryService } from 'src/app/core/service/category.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  bookId: number = 0;
  bookModel: Book = {};
  categoryList: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bookId = params['bookId'];
      this.getBookById();
      this.getCategories();
    });
  }

  getBookById() {
    this.bookService.get({ id: this.bookId }).subscribe({
      next: (data) => {
        console.log(data);
        if (data && data.isSuccessful) {
          this.bookModel = data.data || {};
          // console.log(this.bookModel);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getCategories() {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        // console.log(data);
        if (data && data.isSuccessful) {
          // this.categoryList = data.data || [];
          console.log(data.data);
          // this.categoryList = this.bookModel.categories?.filter(val => !data.data.includes(val.id)) || [];
          this.categoryList = this.getDifference(
            data.data,
            this.bookModel.categories || []
          );
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getDifference(array1: Category[], bookCategories: Category[]) {
    return array1.filter((category) => {
      return !bookCategories.some((bCategory) => {
        return category.id === bCategory.id;
      });
    });
  }

  deleteBookCategory(category: Category) {
    this.bookService
      .deleteCategory({ id: this.bookId, categoryId: category.id || 0 })
      .subscribe({
        next: () => {
          this.bookModel.categories = this.bookModel.categories?.filter(
            (categoryBook) => categoryBook.id != category.id
          );
          this.categoryList.push(category);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  addBookCategory(category: Category) {
    this.bookService
      .addCategory({ id: this.bookId, categoryId: category.id || 0 })
      .subscribe({
        next: () => {
          this.bookModel.categories?.push(category);
          this.categoryList = this.categoryList?.filter(
            (categoryElement) => categoryElement.id != category.id
          );
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
