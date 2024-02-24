import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../shared/model/wordCategory';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.css']
})
export class CategorySelectionComponent implements OnInit {
  categories: Category[] = [];

  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.categories = this.localStorageService.list();
  }

  startGame(categoryId: number): void {
    this.router.navigate(['/game', categoryId]);
  }
}
