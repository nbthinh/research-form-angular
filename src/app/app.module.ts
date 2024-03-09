import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HelloComponent } from './hello/hello.component';
import { ToggleComponent } from './toggle/toggle.component';
import { LearningFormComponent } from './learning-form/learning-form.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { MaccaiquanComponent } from './maccaiquan/maccaiquan.component';
import { Maccaiquan2Component } from './maccaiquan2/maccaiquan2.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ToggleComponent,
    LearningFormComponent,
    DemoFormComponent,
    MaccaiquanComponent,
    Maccaiquan2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
