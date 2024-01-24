import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
 imports: [MatTableModule],
 standalone: true, 
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
addCategory() {
throw new Error('Method not implemented.');
}

  categories = [
    { name: 'חיות', words: 3, lastModified: '01/01/2024' },
    { name: 'מספרים', words: 3, lastModified: '01/01/2024' },
    { name: 'צבעים', words: 3, lastModified: '01/01/2024' }
  ];
  displayedColumns: string[] = ['name','words','lastModified','actions'];


  editCategory(category: any) {
    
  }
  
  deleteCategory(category: any) {
    
  }
}
