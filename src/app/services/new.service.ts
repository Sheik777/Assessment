import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http:HttpClient) { }

  getdata():Observable<any>
  {
     return this.http.get('http://localhost:3000/employee');
  }

  
  postdata(data:any):Observable<any>
  {
     return this.http.post('http://localhost:3000/employee',data);
  }

}
