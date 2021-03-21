import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias: Category[] = [];

  constructor(
    private _categoryService: CategoriasService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this._categoryService.getCategories()
      .subscribe(
        res => {
          this.categorias = res;
          console.log(res);
        }
      )
  }

}
