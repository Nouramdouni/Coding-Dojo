import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }
  getbook(): Observable<any> {
    return this.http.get(`${this.baseUrl}/book`).pipe(catchError(this.handleError))
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => error.error.errors);
  }
  getbookById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/book/${id}`)
  }
  createIBook(data: Books): Observable<any> {
    return this.http.post(`${this.baseUrl}/book`, data).pipe(
      catchError(this.handleError)
    )
  }  
  editBooks(data: Books): Observable<any> {
    return this.http.put(`${this.baseUrl}/book/${data._id}`, data).pipe(
      catchError(this.handleError)
    )
  }
}