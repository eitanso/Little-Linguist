import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
  

}}
