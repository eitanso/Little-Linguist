import { Component, Input, OnInit, ViewChild, forwardRef } from '@angular/core';
import { AbstractControl, FormsModule, NG_VALIDATORS, NgModelGroup, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Category } from '../../shared/model/wordCategory';
import { Language } from '../../shared/model/language';
import { MatTableModule } from '@angular/material/table';

import { Router, RouterModule } from '@angular/router';
import { categoryService } from '../../app/services/categoryService.service';
import { NgForm } from '@angular/forms'; 
import { CdkTableDataSourceInput } from '@angular/cdk/table';






@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatSelectModule ,MatButtonModule,
    CommonModule,MatTableModule,MatIconModule,RouterModule  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CategoryFormComponent),
      multi: true,
    },
  ],

})



export class CategoryFormComponent implements OnInit, Validator    {
sortData() {
throw new Error('Method not implemented.');
}
calculateNumberOfWords(_t23: any) {
throw new Error('Method not implemented.');
}
getDateAsString() {
throw new Error('Method not implemented.');
}
deleteCategory(arg0: any,arg1: any) {
throw new Error('Method not implemented.');
}
navigateToNewCategory() {
throw new Error('Method not implemented.');
}
  currentCategory:Category = new Category(0,"",Language.English,Language.Hebrew,[]);
  @ViewChild('wordsGroup') wordsGroup? : NgModelGroup;


  @Input()
  id? : string;
  dataSource: CdkTableDataSourceInput<any> = [];
displayedColumns: any;

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

  validateWords(form: NgForm) {
    const wordsArray = this.currentCategory.Words;
  
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
    this.currentCategory.Words.push({ sourceWord: '', targetWord: '' });
  }


  deleteNewWord(index: number) {
    this.currentCategory.Words.splice(index, 1);
    this.wordsGroup?.control.markAsDirty();

  }
}


export class CategoriesComponent{

}






