import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Author } from 'src/app/core/models/Author';
import { AuthorService } from 'src/app/core/service/author.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css'],
})
export class AuthorEditComponent implements OnInit {
  @Input() authorModel: Author = {};
  oldAuthorModel: Author = {};

  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.oldAuthorModel = this.authorModel;
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

  editAuthor() {
    this.modalService.dismissAll();
    let patchModel = [
      {
        path: '/Name',
        op: 'replace',
        value: this.authorModel.name,
      },
      {
        path: '/Country',
        op: 'replace',
        value: this.authorModel.country,
      },
    ];
    this.authorService
      .patch({ id: this.authorModel.id || 0, entity: patchModel })
      .subscribe({
        next: () => {},
        error: (err) => {
          console.log(err);
          this.authorModel = this.oldAuthorModel;
        },
      });
  }
}
