import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryFormComponent } from './new-category/new-category.component';
import { CategorySelectionComponent } from './category-selection/category-selection.component';
import { TranslationGameComponent } from './translation-game/translation-game.component';

export const routes: Routes = [
    { path: "", component: CategoriesComponent },
    { path: "newcategory", component: CategoryFormComponent },
    { path: "editcategory/:id", component: CategoryFormComponent }, 
    {path: "game", component:CategorySelectionComponent},
    { path: "game/:id", component:TranslationGameComponent }
];
