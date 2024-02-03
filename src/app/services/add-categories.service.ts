import { Injectable } from '@angular/core';
import { Category } from '../../shared/model/categories';


@Injectable({
    providedIn: 'root'
  })


add(NewCategory : Category) {
    let newId = this.nextId;
    Category.id = newId;
    this.categories.set(newId, Category);
    ++ this.nextId;
   }
 categories = new Map<number, Category>();
  nextId= 0;
  