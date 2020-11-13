import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CratService {
  addProductSubject = new BehaviorSubject('');
  constructor() { }
}
