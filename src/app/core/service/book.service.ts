import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { CommonService } from './CommonService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService extends CommonService<Book> {
  constructor(http: HttpClient) {
    super(http, '/Book');
  }

  deleteCategory(params: {
    id: number;
    categoryId: number;
    uri?: string;
  }): any {
    return this.http.delete<any>(
      `${environment.URL}${this.uri}/${params.id}/Category/${params.categoryId}`
    );
  }

  addCategory(params: { id: number; categoryId: number; uri?: string }): any {
    return this.http.get<any>(
      `${environment.URL}${this.uri}/${params.id}/Category/${params.categoryId}`
    );
  }
}
