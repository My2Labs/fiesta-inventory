import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { fiesta } from './../fiestas';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  fetchFiesta() {
    throw new Error('Method not implemented.');
  }
  get(itemid: any) {
    throw new Error('Method not implemented.');
  }
  private fiestaUrl = 'https://fiesta-inventory.herokuapp.com/api/fiesta/';


getProducts(): Observable<fiesta[]> {
  return this.http.get<fiesta[]>(this.fiestaUrl).pipe(
    tap(data => console.log('All: ', JSON.stringify(data))),
    catchError(this.handleError)
  );
}





private handleError(err: HttpErrorResponse) {
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
    errorMessage = 'An error occurred: ${err.error.message}';
  } else {
    errorMessage = 'Server returned code: ${err.status}, error message is ${err.message}';
  }
  console.error(errorMessage);
  return throwError(()=>errorMessage);
}

  constructor(private http: HttpClient) { }
}
