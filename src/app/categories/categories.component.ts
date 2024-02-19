import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../services/local-storage.service'; 
import { Category, Language } from '../../shared/model/wordCategory';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {  RouterModule } from '@angular/router';


@Component({
  imports: [MatTableModule, MatIconModule ,RouterModule ],
  standalone: true,
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  [x: string]: any;
  dataSource: Category[] = [];
  displayedColumns: string[] = ['categoryName', 'numberOfWords', 'lastModificationDate', 'action'];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.dataSource = this.localStorageService.list();
  }

  addCategory(newCategoryData: Category) {
    this.localStorageService.add(newCategoryData);
    this.loadCategories(); 
  }

  editCategory(updatedCategory: Category) {
    this.localStorageService.update(updatedCategory);
    this.loadCategories(); 
  }

  deleteCategory(categoryId: number) {
    this.localStorageService.delete(categoryId);
    this.loadCategories(); 
  }
  
  
}


