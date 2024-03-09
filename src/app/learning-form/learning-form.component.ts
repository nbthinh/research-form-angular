import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-learning-form',
  templateUrl: './learning-form.component.html',
  styleUrls: ['./learning-form.component.scss']
})
export class LearningFormComponent {
  firstName: FormControl =  new FormControl();
  lastName: FormControl =  new FormControl("", Validators.required);
  profileForm!: FormGroup
  constructor() {
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }
  updateName() {
    this.firstName.setValue("Thiết lập giá trị cho name")
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
