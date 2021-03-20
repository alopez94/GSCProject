import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  api_url = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getCategories(){
    return this.http.get<Category[]>(this.api_url + "category");
  }
}
