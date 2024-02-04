import { Component, Input, OnInit, ViewChild, forwardRef } from '@angular/core';
import { AbstractControl, FormsModule, NG_VALIDATORS, NgModelGroup, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Category } from '../../shared/model/wordCategory';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import{ categoryService } from '../services/categoryService.service';
import { NgForm } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatError} from '@angular/material/form-field';




@Component({
  selector: 'new-category',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule,
    CommonModule,MatIconModule,MatTableModule,ReactiveFormsModule, ],
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.css',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CategoryFormComponent),
      multi: true,
    },
  ],

})

@Component({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatError
  ],
})

export class CategoryFormComponent implements OnInit, Validator    {
  currentCategory:Category = new Category(0,"",this.currentDate,Language.English,Language.Hebrew,[]);
  @ViewChild('wordsGroup') wordsGroup? : NgModelGroup;


  @Input()
  id? : string;
  
  

  constructor(private  categoryService:  categoryService, private router: Router) {}

  ngOnInit(): void {
    console.log('Provided ID:', this.id);

    if (this.id) {
      let categoryFromService = this.categoryService.get(parseInt(this.id));
      console.log('Category loaded:', this.currentCategory);

      if (categoryFromService) {
        this.currentCategory = categoryFromService;
        console.log('Category loaded:', this.currentCategory);
      }
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.atLeastOneWordPair()(control);
  }

  validateWords(_form: NgForm) {
    const wordsArray = this.currentCategory.wordPairs;
  
    if (!wordsArray || wordsArray.length === 0) {
      this.wordsGroup?.control.setErrors({ 'noWords': true });
    } else {
      this.wordsGroup?.control.setErrors(null);
    }
  }


    atLeastOneWordPair(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const wordsArray = control.get('wordsGroup')?.value;
  
      if (!wordsArray || wordsArray.length === 0) {
        return { 'noWords': true };
      }
  
      for (const word of wordsArray) {
        if (word.sourceWord && word.targetWord) {
          return null; 
        }
      }
  
      return { 'noWords': true }; 
    };
  }
 
  onSubmitRegistration(form: NgForm) {
    console.log("Form submitted!");
    this.validateWords(form);
    
    if (form.valid && !this.wordsGroup?.control?.hasError('noWords')) {
      if (this.id) {
        this.categoryService.update(this.currentCategory);
      } else {
        this.categoryService.add(this.currentCategory);
      }
  
      this.router.navigate(['/']);
    }
  }



  addNewWord() {
    this.currentCategory.wordPairs.push({ sourceWord: '', targetWord: '' });
  }


  deleteNewWord(index: number) {
    this.currentCategory.wordPairs.splice(index, 1);
    this.wordsGroup?.control.markAsDirty();

  }
}