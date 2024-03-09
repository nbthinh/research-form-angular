import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {
  myForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  phoneNumber: FormControl;
  nickName: FormControl;
  agree: FormControl;
  constructor() {
    this.firstName = new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(50)]);
    this.lastName = new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(50)]);
    this.phoneNumber = new FormControl();
    this.nickName = new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(50)]);
    this.agree = new FormControl(false)
    this.myForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      nickName: this.nickName,
      agree: this.agree
    });
    this.initForm()

    
  }
  ngOnInit() {
    this.agree.valueChanges.subscribe((value) => {
      if (value == false) {
        this.agree.setErrors({
          mustAgree: "You must agree with our regulation to create account"
        });
      }
    })
  }
  initForm() {
    
    
    
  }


  onSubmit() {
    console.log("Submit Form");
  }
}
