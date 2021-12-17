import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

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
  //   aliases: this.formBuilder.array([
  //     this.formBuilder.control('')
  //   ])
  // });

  public frameworks = ['angular', 'react', 'vue'];
  public frameworkVersion = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  } 

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.myForm = formBuilder.group({
      "firstName": ["Tom", [Validators.required]],
      "lastName": ["Pupkin", [Validators.required]],
      "dateOfBirth": ["22-12-21", [Validators.required]],
      "framework": ["", [ Validators.required]],
      "frameworkVersion": ["", [ Validators.required]],      
      "email": ["dsa@ddd", [ Validators.required, Validators.email]],
      
      "hobby": this.formBuilder.group ({
        "name": [["dsa", Validators.required]],  
        "duration": [["sda",  Validators.required]],
      })   
            
    })
  }

  addForm() {
    // this.myForm.addControl('hobby', new FormControl('', Validators.required));
  }

  submit(){
    console.log(this.myForm);
  }

}
