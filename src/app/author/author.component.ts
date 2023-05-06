import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../core/service/author.service';
import { Author } from '../core/models/Author';
import { AlertService } from '../core/service/alert.service';
import { alertType } from '../core/constants/alert-type';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  authorList: Author[] = [];

  page = 1;
  pageSize = 10;
  collectionSize = 0;

  constructor(
    private authorService: AuthorService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    console.log('On init method');
    this.getAuthors();
  }

  getAuthors() {
    this.authorService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        if (data && data.isSuccessful) {
          this.authorList = data.data || [];
          this.collectionSize = this.authorList.length;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteAuthor(id: any) {
    if (confirm('Delete this author?')) {
      this.authorService.delete({ id }).subscribe({
        next: () => {
          this.authorList = this.authorList.filter((author) => author.id != id);
          this.alertService.add({
            type: alertType.success,
            message: `The author has been deleted.`,
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
