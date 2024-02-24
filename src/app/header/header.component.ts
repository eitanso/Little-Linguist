import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuTrigger } from '@angular/material/menu';
import {  RouterModule , Router} from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatToolbarModule, MatIconModule,MatMenuModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
router: any;

menu: any;

}
@NgModule({
  imports: [
     MatMenuModule,
  ],
 })
 export class AppModule { }
