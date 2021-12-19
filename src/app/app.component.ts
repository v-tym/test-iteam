import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { map, switchMap, timer } from 'rxjs';
import { FrameworkService } from './service/framework.service';
import { MailService } from './service/mail.service';


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
  emails: any;

  mailAsyncValidator = 
  (authService: MailService) => {
    return (input: FormControl) => {
      return timer(2000).pipe(
        switchMap(() => authService.checkEmail(input.value)),
        map(res => {
          return res.isLoginAvailable ? null : {emailExist: true}
        })
      );
    };
  };

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: ["", Validators.required],
    framework: ['', Validators.required],
    frameworkVersion: ['', Validators.required],
    email: ['', [Validators.required, Validators.email], [this.mailAsyncValidator(this.mailService)]],
    // email: ['dsd@dsa', [Validators.required, Validators.email]],


    hobbyName: this.fb.array([
      this.fb.control('', Validators.required)
    ]),
    hobbyDuration: this.fb.array([
      this.fb.control('', Validators.required)
    ])
  });

  constructor(private fb: FormBuilder,
              private framewoksService: FrameworkService,
              private mailService: MailService
               ) { 
       
   }

   ngOnInit(): void {
    this.framewoksService.getFrameworks().subscribe((data: any) => {
      this.framewoks = Object.assign({}, data);
      this.frameworksName = Object.keys(data);
      this.profileForm.valueChanges.subscribe( i => console.log(i));
      this.profileForm.statusChanges.subscribe( i => console.log(i));
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
  }

  isMailToken(): any {
    return this.profileForm.get('email')?.hasError('emailExist');
  }
} 
