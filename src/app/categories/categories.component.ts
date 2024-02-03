import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
<<<<<<< HEAD
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

=======
import { Router } from '@angular/router';
>>>>>>> 5453b6c9f5fc033c4fc66c2cba2c8bc694fdfa0d

@Component({
 imports: [MatTableModule, MatButtonModule,MatIconModule],
 standalone: true, 
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
[x: string]: any;
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
    selector:'app-categories'
    imports: ['MatFormFieldModule','MatInputModule' ]
  }
  
  
  deleteCategory(category: any) {
    
  }
  constructor(private router: Router) { }
  navigateToNewCategory() {
    this.router.navigate(['/new-category']);
  

}
