import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-maccaiquan2',
  templateUrl: './maccaiquan2.component.html',
  styleUrls: ['./maccaiquan2.component.scss']
})
export class Maccaiquan2Component {
  formInfo: FormGroup;
  name: FormControl = new FormControl("", Validators.required);
  nameRequired: FormControl = new FormControl(false);
  constructor() {
    console.log("Constructor run");
    this.formInfo = new FormGroup({
      name: this.name
    })
  }
  ngOnInit() {
    this.nameRequired.valueChanges.subscribe((nameRequiredValue) => {
      if (nameRequiredValue) {
        this.name.addValidators([Validators.required])
        this.name.updateValueAndValidity();
      }
      else {
        this.name.clearValidators();               
        this.name.updateValueAndValidity();
      }
    })

    this.name.valueChanges.subscribe((newValue) => {
      console.log("Validator or value change always active this observer");
      console.log("name Change = ", newValue);
    })

  }
  onSubmit() {
    console.log("Submit form");
  }
}
