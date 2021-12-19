import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { delay, Observable, of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  public checkEmail(email: string) {    
    return of({ isLoginAvailable: email !== 'test@test.test'})
      .pipe(delay(0));
  }
}
