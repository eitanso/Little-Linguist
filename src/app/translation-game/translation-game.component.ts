import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Category } from '../../shared/model/wordCategory';

@Component({
  selector: 'app-translation-game',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './translation-game.component.html',
  styleUrls: ['./translation-game.component.css']
})
export class TranslationGameComponent implements OnInit {
  category: Category | undefined;
  words: { source: string, target: string }[] = [];
  correctTranslations: boolean[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categoryId = parseInt(params['id'], 10);
      this.loadCategory(categoryId);
    });
  }

  loadCategory(categoryId: number): void {
    const categoriesString = localStorage.getItem('categories');
    if (categoriesString) {
        try {
            const categories: Category[] = JSON.parse(categoriesString);
            if (Array.isArray(categories)) {
                const category = categories.find(c => c.id === categoryId);
                if (category) {
                    this.category = category;
                    this.words = this.category.Words.map(word => ({ source: word.sourceWord, target: '' }));
                    return; // Exit early if category is found
                } else {
                    console.error('Category with id', categoryId, 'not found in localStorage');
                    // Handle the case when the category is not found
                }
            } else {
                console.error('Categories data in localStorage is not an array');
                // Handle the case when categories data is not an array
            }
        } catch (error) {
            console.error('Error parsing categories data from localStorage:', error);
            // Handle the case when an error occurs during parsing
        }
    } else {
        console.error('Categories data not found in localStorage');
        // Handle the case when categories data is not found
    }

    // Clear category and words if not found or error occurred
    this.category = undefined;
    this.words = [];
}



  checkTranslations(): void {
    if (!this.category) {
      console.error('No category loaded.');
      return;
    }
    this.correctTranslations = this.words.map((word, index) => 
      word.target === this.category?.Words[index]?.targetWord);
  }

  revealCorrectTranslations(): void {
    if (!this.category) {
      console.error('No category loaded.');
      return;
    }
    this.words.forEach((word, index) => {
      const correctWord = this.category?.Words[index]?.targetWord;
      word.target = correctWord ? correctWord : '';
    });
  }
}
