import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
addCategory() {
throw new Error('Method not implemented.');
}
  categories = [
    { name: 'קטגוריה 1', words: ['מילה 1', 'מילה 2', 'מילה 3'], lastModified: 'תאריך 1' },
    { name: 'קטגוריה 2', words: ['מילה 4', 'מילה 5', 'מילה 6'], lastModified: 'תאריך 2' },
    { name: 'קטגוריה 3', words: ['מילה 7', 'מילה 8', 'מילה 9'], lastModified: 'תאריך 3' }
  ];

  editCategory(category: any) {
    
  }
  
  deleteCategory(category: any) {
    
  }
}