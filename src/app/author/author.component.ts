import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../core/service/author.service';
import { Author } from '../core/models/Author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit{

  authorList: Author[] = [];

  page = 1;
	pageSize = 10;
	collectionSize = 0;

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    console.log('On init method');
    this.getAuthors();
  }

  getAuthors() {
    this.authorService
      .getAll()
      .subscribe({
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

}
