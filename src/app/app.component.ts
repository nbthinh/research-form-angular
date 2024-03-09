import { Component, VERSION, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // @ViewChild('toggleComp') maccaiquan!: ToggleComponent;
  @ViewChild(ToggleComponent) maccaiquan!: ToggleComponent;
  title = 'review-angular';
  name = "angular" + VERSION.major;
  isChecked: boolean = true;

  ngAfterViewInit() {
    // this.maccaiquan.toggle()
    console.log("this.maccaiquan = ", this.maccaiquan);
  }

}
