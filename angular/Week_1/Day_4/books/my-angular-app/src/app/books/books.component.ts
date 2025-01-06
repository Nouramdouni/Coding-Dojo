import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { Books } from '../books';

@Component({
  selector: 'app-books',
  imports: [CommonModule,RouterModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent { 
  books:Books[]=[] 
  constructor(private apiService:ApiService) {} 
  ngOnInit(): void {
    this.apiService.getbook().subscribe({
      next: (data) => this.books = data,
      error: (err) => console.error(err),
      complete: () => console.info('complete')
    })
  }
  

}
