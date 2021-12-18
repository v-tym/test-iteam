import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  profileForm = this.fb.group({
    firstName: ['fffff', Validators.required],
    lastName: ['llln', Validators.required],
    dateOfBirth: ['11-11-15', Validators.required],
    framework: ['', Validators.required],
    frameworkVersion: ['', Validators.required],
    email: ['dsd@dsa', [Validators.required, Validators.email]],

    hobbyName: this.fb.array([
      this.fb.control('', Validators.required)
    ]),
    hobbyDuration: this.fb.array([
      this.fb.control('', Validators.required)
    ])
  });

  get hobbyName() {
    return this.profileForm.get('hobbyName') as FormArray;
  }

  get hobbyDuration() {
    return this.profileForm.get('hobbyDuration') as FormArray;
  }
   
  public framewoks = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  }

  public frameworksName = Object.keys(this.framewoks);

  constructor(private fb: FormBuilder) { 
    
   }

  addHobby() {
    this.hobbyName.push(this.fb.control(''));
    this.hobbyDuration.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

} 
