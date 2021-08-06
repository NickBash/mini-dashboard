import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.scss']
})
export class RegPageComponent {
  regForm!: FormGroup

  constructor() {
    this.initLoginForm()
  }

  initLoginForm() {
    this.regForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,]),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', Validators.required),
    });
  }

  onSubmit() {

  }
}
