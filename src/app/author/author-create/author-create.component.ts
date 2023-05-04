import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from 'src/app/core/models/Author';
import { AuthorService } from 'src/app/core/service/author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent {

  createAuthorModel: Author = {}
  @ViewChild('createForm', { static: false })
  createAuthorForm: FormControl | undefined;

  constructor(private authorService: AuthorService, public router: Router) {}

  createAuuthor() {
    if (this.createAuthorForm?.valid) {
      this.authorService
      .create({ entity: this.createAuthorModel })
      .subscribe({
        next: () => {
          this.router.navigate(['/author']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
