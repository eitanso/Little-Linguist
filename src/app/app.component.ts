import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ReactiveFormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table';
import { FooterComponent } from "./footer/footer.component";
import { BrowserModule } from '@angular/platform-browser';

export class YourModuleName { }
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, MatTableModule, FooterComponent,ReactiveFormsModule,BrowserModule]
})
export class AppComponent {
  title = 'Little Linguist';
}
