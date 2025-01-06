import { Component } from '@angular/core';
import { Books } from '../books';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edite',
  imports: [CommonModule,FormsModule],
  templateUrl: './edite.component.html',
  styleUrl: './edite.component.css'
})
export class EditeComponent {
  book:Books= {}
  errorMessage: any = {}

  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { } 
  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id')
    if (bookId) {
      this.apiService.getbookById(bookId).subscribe({
        next: data => this.book = data,
        error: err => console.error("Error fetching item:", err)
      })
    }
  } 
  updateItem(): void {
    this.apiService.editBooks(this.book).subscribe({
      next: (res) => this.router.navigate(['/']),
      error: (err) => this.errorMessage = err
    })
  }

}
