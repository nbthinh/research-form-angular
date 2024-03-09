# Cách làm một form cơ bản có validate (Repo: research-form-angular)

- HTML
```
<div class="row">
    <div class="col-12">
        <h1>Mặc cái quần</h1>
    </div>
</div>
<div class="col-12">
    <form [formGroup]="formInfo" (ngSubmit)="onSubmit()">
        <div class="row">
            <div class="col-4">
                <label>Fullname</label>
                <input class="form-control" type="text" [formControl]="name" />
                <div>
                    <input type="checkbox" [formControl]="nameRequired" />
                    <span style="margin-left: 10px;">Name required?</span>
                </div>
                <div>Name is valid: <b>{{name.valid}}</b></div>
            </div>
        </div>
        <div class="row">
            <div class="col-10"></div>
            <div class="col-2">
                <button
                    class="btn btn-primary"
                    type="submit"
                    [disabled]="!!!formInfo.valid"
                >Submit</button>
            </div>
        </div>
    </form>
    <div style="margin-top: 10px;">
        Form Valid: {{formInfo.valid}}
    </div>
</div>
```

- COMPONENT
```
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

```