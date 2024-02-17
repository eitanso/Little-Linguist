import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryFormComponent } from './new-category/new-category.component';

export const routes: Routes = [
    {path:"",component:CategoriesComponent},
    {path:"newcategory",component:CategoryFormComponent},
    {path:"editcategory/:id",component:CategoriesComponent},
];

