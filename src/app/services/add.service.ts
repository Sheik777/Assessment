import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  name: any = 'sheik'

  constructor() { }

  addone() {
    this.name
  }
}