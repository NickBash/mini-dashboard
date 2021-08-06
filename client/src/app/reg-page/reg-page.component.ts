import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.scss']
})
export class RegPageComponent implements OnInit {
  regForm!: FormGroup
  aSub!: Subscription

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.regForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,]),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', [Validators.required]),
    }, this.passEqual);
  }

  onSubmit() {
    this.regForm.disable()

    const user = {
      email: this.regForm.value.email,
      password: this.regForm.value.password
    }

    this.aSub = this.auth.login(this.regForm.value).subscribe(
      () => this.router.navigate(['/overview']),
      error => {
        console.warn(error)
        this.regForm.enable()
      }
    )
  }

  private passEqual() {
    return (group: FormGroup) => {
      return (!group.dirty || !group.touched) ||
      group.value.password === group.value.passwordRepeat ?
        null :
        { custom: 'passwordRepeat' };
    }
  }
}


