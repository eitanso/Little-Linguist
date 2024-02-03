import { WordCategory } from "../../shared/model/wordCategory";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class categoryService {
    categories = new Map<number, WordCategory>();
    nextId= 1;

    constructor() { }
    list() : WordCategory[] {
        return Array.from(this.categories.values());
      }

      get(id : number) : WordCategory | undefined {
        console.log('Fetching category with ID:', id);
        return this.categories.get(id);
      }
    
      add(newCategoryData:WordCategory) {
        newCategoryData.id = this.nextId
        this.categories.set(this.nextId, newCategoryData);
        this.nextId++;
      }
    
      update(existingCategory : WordCategory) : void {
        if (this.categories.has(existingCategory.id)) {
          this.categories.set(existingCategory.id, existingCategory);
        }
      }

      delete(existingCategoryId : number) : void {
        this.categories.delete(existingCategoryId);
      }
}