import { Injectable } from '@angular/core';
import { CommonService } from './CommonService';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends CommonService<Category> {
  constructor(http: HttpClient) {
    super(http, '/Category');
  }
}
