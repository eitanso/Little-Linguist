import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA,
  MatDialogContent,MatDialogActions,MatDialogClose} from '@angular/material/dialog';

@Component({
  selector: 'app-del-category',
  standalone: true,
  imports: [MatButtonModule,MatDialogContent,MatDialogActions,MatDialogClose,MatIconModule],
  templateUrl: './del-category.component.html',
  styleUrl: './del-category.component.css'
})


export class DelCategoryComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public fullName: string,) {}
   }
   




