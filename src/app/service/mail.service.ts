import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Form, Hobby } from '../form';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  dataForm: any;
  private hobby: Hobby[] = [];

  constructor() { }

  public checkEmail(email: string) {    
    return of({ isLoginAvailable: email !== 'test@test.test'})
      .pipe(delay(0));
  }

  public post(data: any) {
    this.dataForm = data;
    this.hobby = [];
    this.getHobby(this.dataForm.hobbyName, this.dataForm.hobbyDuration);

    let formExport = new Form(
      data.firstName,
      data.lastName,
      String(new Date(data.dateOfBirth).toISOString()).split("T")[0],
      data.framework,
      data.frameworkVersion,
      data.email,
      this.hobby );

      console.log("PostData: ", formExport);       
  }

   private getHobby(name: [], duration: []): any { 
    for (let index = 0; index < name.length; index++) {
        this.hobby.push(new Hobby(name[index], duration[index]));
      }
  }


}
