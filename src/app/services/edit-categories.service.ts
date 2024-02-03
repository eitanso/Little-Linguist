import { Injectable } from '@angular/core';
import { Category } from '../../shared/model/categories';


@Injectable({
  providedIn: 'root'
})

export class EditCategoriesService {
  category: any;
  update(lastModifiedDate:Category): void {
    if (this.category.has(Category.lastModifiedDate)) {
      this.category.set(Category.lastModifiedDate, lastModifiedDate);
    }
  }
} 
/*
 
  list(): Category[] {
    return Array.from(this.categories.values())
 
  }
  get(id: number): Category | undefined {
    return this.categories.get(id);
   }
   
 

*/
