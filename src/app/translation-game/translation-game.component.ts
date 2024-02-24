import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../shared/model/wordCategory';
import { LocalStorageService } from '../services/local-storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-translation-game',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './translation-game.component.html',
  styleUrls: ['./translation-game.component.css']
})
export class TranslationGameComponent implements OnInit {
  category: Category | undefined;
  words: { source: string, target: string }[] = [];
  correctTranslations: boolean[] = [];

  constructor(private route: ActivatedRoute, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categoryId = parseInt(params['id']);
      this.category = this.localStorageService.getCategoryById(categoryId);
      if (this.category) {
        this.words = this.category.Words.map(word => ({ source: word.sourceWord, target: '' }));
      }
    });
  }

  checkTranslations(): void {
    this.correctTranslations = this.words.map((word, index) => word.target === this.category?.Words[index].targetWord);
  }

  revealCorrectTranslations(): void {
    this.words.forEach((word, index) => {
      const correctWord = this.category?.Words[index]?.targetWord;
      word.target = correctWord ? correctWord : '';
    });
  }
}
