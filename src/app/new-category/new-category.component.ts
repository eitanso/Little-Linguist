import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgModelGroup, NgForm, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Category } from '../../shared/model/wordCategory';
import { Language } from '../../shared/model/language';

@Component({
  selector: 'new-category',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css'],
})
export class CategoryFormComponent implements OnInit {
  category: Category;
  @ViewChild('wordsGroup') wordsGroup?: NgModelGroup;

  constructor(private router: Router) {
    
    this.category = new Category(this.getNewCategoryId(), "", Language.English, Language.Hebrew, []);
  }

  ngOnInit(): void {
  
  }

  getNewCategoryId(): number {
    const lastId = parseInt(localStorage.getItem('lastCategoryId') || '0');
    return lastId + 1;
  }

  saveCategoryToLocalStorage(): void {
    if (this.category && this.category.categoryName) {
      const newId = this.getNewCategoryId();
      this.category.id = newId; 
      localStorage.setItem(`category-${newId}`, JSON.stringify(this.category));
      localStorage.setItem('lastCategoryId', newId.toString());
    }
  }



  validate(control: AbstractControl): ValidationErrors | null {
  
    const isValid = this.atLeastOneWordPair()(control);
    return isValid ? null : { 'invalidCategory': true };
}

atLeastOneWordPair(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        
        const words = (control.value as Category).Words || [];
        if (!words.length || words.some(word => !word.sourceWord || !word.targetWord)) {
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
    this.category.Words.push({ sourceWord: '', targetWord: '' });
  }

  deleteNewWord(index: number) {
    this.category.Words.splice(index, 1);
  }
}
