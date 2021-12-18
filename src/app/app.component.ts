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
    framework: ['fr'],
    frameworkVersion: [''],
    email: ['dsd@dsa', [Validators.required, Validators.email]],

    hobbyName: this.fb.array([
      this.fb.control('')
    ])
  });

  get hobbyName() {
    return this.profileForm.get('hobbyName') as FormArray;
  }

  // profileForm = this.formBuilder.group({    
  //   firstName: ['Tom', Validators.required],
  //   lastName: ['Pupkin', Validators.required],
  //   dateOfBirth: ['22-12-21', Validators.required],
  //   framework: ['Pupkin', Validators.required],
  //   frameworkVersion: ['Pupkin', Validators.required],
  //   email: ['Pupkin@dsa', [ Validators.required, Validators.email]],
  //   hobby: this.formBuilder.group({
  //     hobbyName: ['hobbyNamewe'],
  //     hobbyDuration: ['Durationewew'],
  //   }),
  //   address: this.formBuilder.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   }),
  //   hobbyName: this.formBuilder.array([
  //     this.formBuilder.control('')
  //   ])
  // });

  public frameworks = ['angular', 'react', 'vue'];
  public frameworkVersion = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  } 

;

  constructor(private fb: FormBuilder) {  }

  addHobby() {
    this.hobbyName.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

} 
