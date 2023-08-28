import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addemployee(data: any) {
    return this._http.post('http://localhost:3000/employee', data)
  }

}
