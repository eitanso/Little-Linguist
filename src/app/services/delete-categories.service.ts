import { Injectable } from '@angular/core';
import { Category } from '../../shared/model/categories';


@Injectable({
    providedIn: 'root'
  })


export class DeleteCategoriesService{
    Category: any;
    delete(id: number): void {
     this.Category.delete(id);
   }
}
