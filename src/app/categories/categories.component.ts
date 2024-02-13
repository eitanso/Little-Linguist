import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';



@Component({
 imports: [MatTableModule, MatIconModule ],
 standalone: true, 
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
sortData() {
throw new Error('Method not implemented.');
}
  dataSource: CdkTableDataSourceInput<any> = [
  { categoryName: 'חיות', numberOfWords: 3, lastModificationDate: '01/01/2024' },
  { categoryName: 'מספרים', numberOfWords: 3, lastModificationDate: '01/01/2024' },
  { categoryName: 'צבעים', numberOfWords: 3, lastModificationDate: '01/01/2024' }];
calculateNumberOfWords(_t23: any) {
throw new Error('Method not implemented.');
}
getDateAsString() {
throw new Error('Method not implemented.');
}
  addCategory() {
  throw new Error('Method not implemented.');
  }
  
    categories = [
      { name: 'חיות', words: 3, lastModified: '01/01/2024' },
      { name: 'מספרים', words: 3, lastModified: '01/01/2024' },
      { name: 'צבעים', words: 3, lastModified: '01/01/2024' }
    ];
    displayedColumns: string[] = ['categoryName','numberOfWords','lastModificationDate','action'];
  
  
    editCategory(category: any) {
      
    }
    
    deleteCategory(category: any) {
      
    }
  }
  