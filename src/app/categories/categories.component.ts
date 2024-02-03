import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

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
    
  }
  
  deleteCategory(category: any) {
    
  }
  constructor(private router: Router) { }
  navigateToNewCategory() {
    this.router.navigate(['/new-category']);
  

}
