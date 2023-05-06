import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { alertType } from 'src/app/core/constants/alert-type';
import { Author } from 'src/app/core/models/Author';
import { AlertService } from 'src/app/core/service/alert.service';
import { AuthorService } from 'src/app/core/service/author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css'],
})
export class AuthorCreateComponent {
  createAuthorModel: Author = {};
  @ViewChild('createForm', { static: false })
  createAuthorForm: FormControl | undefined;

  constructor(
    private authorService: AuthorService,
    public router: Router,
    private alertService: AlertService
  ) {}

  createAuuthor() {
    if (this.createAuthorForm?.valid) {
      this.authorService.create({ entity: this.createAuthorModel }).subscribe({
        next: () => {
          this.alertService.add({
            type: alertType.success,
            message: `The author has been created.`,
          });
          this.router.navigate(['/author']);
        },
        error: (err) => {
          console.log(err);
          this.alertService.add({
            type: alertType.danger,
            message: `
            There was an error creating this author. Please try again.`,
          });
        },
      });
    }
  }
}
