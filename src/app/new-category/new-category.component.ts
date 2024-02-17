import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormsModule, NgModelGroup, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Category } from '../../shared/model/wordCategory';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Language } from '../../shared/model/language';

@Component({
  selector: 'new-category',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css'],
})
export class CategoryFormComponent implements OnInit, Validator {
  currentCategory: Category = new Category(0, "", Language.English, Language.Hebrew, []);
  @ViewChild('wordsGroup') wordsGroup?: NgModelGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCategoryFromLocalStorage();
  }

  loadCategoryFromLocalStorage(): void {
    const savedCategory = localStorage.getItem('currentCategory');
    if (savedCategory) {
      this.currentCategory = JSON.parse(savedCategory);
    }
  }

  saveCategoryToLocalStorage(): void {
    localStorage.setItem('currentCategory', JSON.stringify(this.currentCategory));
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.atLeastOneWordPair()(control);
  }

  atLeastOneWordPair(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const words = this.currentCategory.Words;
      if (!words || words.length === 0 || words.some(word => !word.sourceWord || !word.targetWord)) {
        return { 'noWords': true };
      }
      return null;
    };
  }

  onSubmitRegistration(form: NgForm) {
    if (form.valid) {
      this.saveCategoryToLocalStorage();
      this.router.navigate(['/']);
    }
  }

  addNewWord() {
    this.currentCategory.Words.push({ sourceWord: '', targetWord: '' });
  }

  deleteNewWord(index: number) {
    this.currentCategory.Words.splice(index, 1);
  }
}
