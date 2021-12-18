import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {

  constructor( private http: HttpClient) { }

  
  getFrameworks(): Observable<any> {
    return this.http.get('assets/frameworks.JSON');    
  } 
}
