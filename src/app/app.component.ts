import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FrameworkService } from './service/framework.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  framewoks: any;

  frameworksName: string[] = [];
  selectedFramework: string = '';
  frameworksVersion: string[] = [];

  profileForm = this.fb.group({
    firstName: ['fffff', Validators.required],
    lastName: ['llln', Validators.required],
    dateOfBirth: ['11-11-15', Validators.required],
    framework: ['', Validators.required],
    frameworkVersion: ['', Validators.required],
    email: ['dsd@dsa', [Validators.required, Validators.email], []],

    hobbyName: this.fb.array([
      this.fb.control('', Validators.required)
    ]),
    hobbyDuration: this.fb.array([
      this.fb.control('', Validators.required)
    ])
  });

  constructor(private fb: FormBuilder, private framewoksService: FrameworkService) { 
       
   }

   ngOnInit(): void {
    this.framewoksService.getFrameworks().subscribe((data: any) => {
      this.framewoks = Object.assign({}, data);
      this.frameworksName = Object.keys(data)
    });
   }

  

  get hobbyName() {
    return this.profileForm.get('hobbyName') as FormArray;
  }

  get hobbyDuration() {
    return this.profileForm.get('hobbyDuration') as FormArray;
  }
  
  addHobby() {
    this.hobbyName.push(this.fb.control(''));
    this.hobbyDuration.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  onClickFramework () {
    this.frameworksVersion = this.framewoks[this.selectedFramework];
    // console.log(this.frameworksVersion);
  }

  
  checkSuchEmail() {

  }


} 
