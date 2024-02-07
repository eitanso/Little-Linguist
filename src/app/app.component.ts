import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {CategoriesComponent} from './categories/categories.component';

import { FooterComponent } from "./footer/footer.component";



export class YourModuleName { }
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent,CategoriesComponent, FooterComponent]
})
export class AppComponent {
  title = 'Little Linguist';
}
