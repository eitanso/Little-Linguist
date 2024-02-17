import { Injectable } from '@angular/core';
import { Category } from '../../shared/model/wordCategory';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  categories= new Map<number, Category>();
  nextId= 1;

  constructor() { }

  list() : Category[] {
    return Array.from(this.categories.values());
   }

   get(id : number) : Category | undefined {
    return this.categories.get(id);
   }

   add(newCategoryData:Category) {
    newCategoryData.id = this.nextId
    this.categories.set(this.nextId, newCategoryData);
    this.nextId++;
    }
    
    update(existingCategories: Category) : void{
      if(this.categories.has(existingCategories.id)) {
        this.categories.set(existingCategories.id, existingCategories);
      }
    }

    delete(existingCategoriesId : number) : void {
      if (this.categories.has(existingCategoriesId)){
        this.categories.delete(existingCategoriesId);
      }
    }
   }


