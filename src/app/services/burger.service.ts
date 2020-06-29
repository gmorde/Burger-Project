import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categorie, product } from '../models/burger-models';
import { map, filter, scan } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  readonly rootURL = 'http://localhost:56339/api';

  constructor(private httpService: HttpClient) { }

  public getAllCategories() {
    return this.httpService.get<categorie[]>(`../../assets/json/categories.json`);
  }

  public getAllProducts() {
    return this.httpService.get<product[]>(`../../assets/json/products.json`);
  }
}
