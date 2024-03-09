import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup,  ReactiveFormsModule, Validators  } from '@angular/forms';

@Component({
  selector: 'app-maccaiquan',
  templateUrl: './maccaiquan.component.html',
  styleUrls: ['./maccaiquan.component.scss']
})
export class MaccaiquanComponent {
  infoManager: FormGroup;
  name: FormControl = new FormControl();
  phone: FormControl = new FormControl("0906111226");
  isRequired: FormControl = new FormControl(false);
  isDisable: FormControl = new FormControl(false);
  scoreList: FormArray = new FormArray([
    new FormControl(null),
    new FormControl({subject: "Math", score: 8.5}),
    new FormControl({subject: "Physic", score: 6.5}),
    new FormControl({subject: "Chemistry", score: 10})
  ]);

  abc: FormArray = new FormArray([
    new FormControl("NLP"),
    new FormControl("ML"),
    new FormControl("AI"),
    new FormControl("PPL"),
  ]); 
  constructor() {
    this.infoManager = new FormGroup({
      name: this.name,
      isRequired: this.isRequired,
      phone: this.phone,
      scoreList: this.scoreList,
      isDisable: this.isDisable
    });
    
  }
  ngOnInit() {
    console.log("this.name = ", this.name);
    // this.name.registerOnChange(() => {
    //   console.log("Good evening");
    // })
    this.name.valueChanges.subscribe(() => {
      console.log("Cu hay đái");
    })

    this.isRequired.valueChanges.subscribe((e) => {
      console.log("Đái trong quần = ", e);
      if (e == true) {
        this.infoManager.controls["name"].setValidators(Validators.required);
      }
      else {
        // this.infoManager.controls["name"].removeValidators(Validators.required);
        this.infoManager.controls["name"].clearValidators();
      }
      console.log("Check validator = ", !!this.name.validator)
      // console.log(this.name.hasAsyncValidator)
    })


  }
  
  kiemtraFormArray() {
    console.log("this.scoreList.value = ", this.scoreList.value);
    console.log("this.scoreList = ", this.scoreList.at(1).value);
    
  }

  handleDeleteSubject(subjectIndex: number) {
    console.log("subjectIndex = ", subjectIndex);
    this.scoreList.removeAt(subjectIndex)
  }
  handleEditScore() {
    
  }
  kiemtra() {

    // console.log("this.scoreList.controls = ", this.scoreList.controls);
    // console.log("this.scoreList.value = ", this.scoreList.value);
    // for(let i = 0; i < this.abc.controls.length; i++) {
    //   let traverse = this.abc.controls[i];
    //   console.log("traverse = ", traverse);
    // }
  }

  kiemtraabc() {
    console.log("this.abc.controls = ", this.abc.controls);
    for (let i = 0; i < this.abc.controls.length; i++) {
      let control_i = this.abc.controls[i];
      console.log("control_i = ", control_i.value);
    }
  }

  learningFormControl() {
    this.name.markAsDirty({onlySelf: true})
  }
  handleTypeName(event: any) {
    console.log("Cu hay đái: ", event);
  }
}
