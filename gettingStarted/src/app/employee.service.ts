import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private _url: string = "/assets/data/employees1.json";

  constructor(private _http: HttpClient) { }
  getEmployees(): Observable<IEmployee[]>{
    return this._http.get<IEmployee[]>(this._url)
    .pipe(
      catchError(error => {
        return throwError(error.message ||'Server Error');
      })
    )
  }


}
