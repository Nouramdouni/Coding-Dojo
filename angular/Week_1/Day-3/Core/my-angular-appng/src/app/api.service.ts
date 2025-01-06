import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 
  private basUrl='https://swapi.py4e.com/api/people/';

  constructor(private http: HttpClient) { }
  getItems():Observable<any>{ 
    return this.http.get(`${this.basUrl}/items`);
  } 
  createItem(data:User): Observable<any> {
    return this.http.post(`${this.basUrl}/items`, data).pipe(
      catchError(this.handleError)
    )
  } 
  private handleError(err: any): Observable<any> {
    console.error('an error occurred!', err)
    return throwError(()=>err.error.errors)
  }
}
