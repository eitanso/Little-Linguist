import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Category, Language } from '../../shared/model/wordCategory';



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
  dataSource: CdkTableDataSourceInput<Category> = [
  // { categoryName: 'חיות', numberOfWords: 3,   },
  // { categoryName: 'מספרים', numberOfWords: 3, lastModificationDate: '01/01/2024' },
  // { categoryName: 'צבעים', numberOfWords: 3, lastModificationDate: '01/01/2024' }

new Category(
  0,"test",Language.English,Language.Hebrew, []
)  
];
calculateNumberOfWords(_t23: any) {
;
}
getDateAsString() {
throw new Error('Method not implemented.');
}
  addCategory() {
  throw new Error('Method not implemented.');
  }
  
    
    displayedColumns: string[] = ['categoryName','numberOfWords','lastModificationDate','action'];
  
  
    editCategory(category: any) {
      
    }
    
    deleteCategory(category: any) {
      
    }
  }
  