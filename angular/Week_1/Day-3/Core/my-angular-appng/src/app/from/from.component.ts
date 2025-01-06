import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user'; 
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-from',
  imports: [CommonModule,FormsModule], 
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent { 
  newItem: User = {}
  errorMessage: any = {}

  constructor(private apiService: ApiService, private router: Router) {}

  addItem(): void {
    this.apiService.createItem(this.newItem).subscribe({
      next: (res) => this.router.navigate(['/']),
      error: (err) => this.errorMessage = err
    })
  } 
  
  }


