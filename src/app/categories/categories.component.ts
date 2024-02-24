import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './../services/local-storage.service'; 
import { Category, Language } from '../../shared/model/wordCategory';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {  RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DelCategoryComponent } from '../del-category/del-category.component';

@Component({
  imports: [MatTableModule, MatIconModule, RouterModule],
  standalone: true,
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  dataSource: Category[] = [];
  displayedColumns: string[] = ['categoryName', 'numberOfWords', 'lastModificationDate', 'action'];

  constructor(private localStorageService: LocalStorageService, private router: Router, private dialogService: MatDialog) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    const categories = this.localStorageService.list();
    if (categories) {
      const validCategories = categories.filter(category => category !== null);
      this.dataSource = validCategories;
    }
  }

  addCategory(newCategoryData: Category) {
    this.localStorageService.add(newCategoryData);
    this.loadCategories(); 
  }

  editCategory(updatedCategory: Category) {
    this.localStorageService.update(updatedCategory);
    this.router.navigate(['editcategory', updatedCategory.id]);
  }

  deleteCategory(categoryId: number) {
    const categoryToDelete = this.dataSource.find(category => category.id === categoryId);
    if (categoryToDelete) {
      const dialogRef = this.dialogService.open(DelCategoryComponent, { data: categoryId });
      dialogRef.afterClosed().subscribe(deletionResult => {
        if (deletionResult) {
          this.localStorageService.delete(categoryId);
          this.loadCategories();
        }
      });
    } else {
      console.error('Category not found in dataSource. Cannot delete.');
    }
  }

  getWordCount(categoryId: number): number {
    return this.localStorageService.getWordCountInCategory(categoryId);
  }
}
