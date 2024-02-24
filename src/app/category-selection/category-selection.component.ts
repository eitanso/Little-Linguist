import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/model/wordCategory';
import { LocalStorageService } from '../services/local-storage.service';
import {  RouterModule , Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-selection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.css']
})
export class CategorySelectionComponent implements OnInit {
  categories: Category[] = [];


  displayedColumns: string[] = ['categoryName']
  

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.loadCategories();
    
  }

  loadCategories() {
    const categories = this.localStorageService.list();
    if (categories) {
      const validCategories = categories.filter(categories => categories !== null);
      this.categories = validCategories;
    }
  }

  goToGame(categoryId: number): void {
    this.router.navigate(['/game', categoryId]);
  }
}