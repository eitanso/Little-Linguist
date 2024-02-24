import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/model/wordCategory';
import { LocalStorageService } from '../services/local-storage.service';
import {  RouterModule , Router} from '@angular/router';

@Component({
  selector: 'app-category-selection',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.css']
})
export class CategorySelectionComponent implements OnInit {
  categories: Category[] = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categories = this.localStorageService.list();
  }
}
