import { Injectable } from '@angular/core';
import { CommonService } from './CommonService';
import { Author } from '../models/Author';
import { HttpClient } from '@angular/common/http';
import { ApiResult } from '../models/ApiResult';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends CommonService<Author>{

  constructor(http: HttpClient) {
    super(http, '/Author');
  }
}
