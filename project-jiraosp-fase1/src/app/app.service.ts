import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  

  constructor(private http: HttpClient) { }

  getJiraProject(): Observable<any> {
    const queryParams = { project: '10000' };
    const apiUrl = '/api/rest/api/3/project/search?jql=';
    return this.http.get(apiUrl,{ params: queryParams }).pipe(
      catchError(error => {
        console.error('Error al obtener los datos:', error);
        return throwError(error);
      })
    );
  }
}