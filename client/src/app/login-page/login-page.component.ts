import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup
  aSub!: Subscription

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,]),
      password: new FormControl('', Validators.required)
    })

    this.route.queryParams.subscribe((params: Params) => {
      if (params['reg']) {

      } else if (params['accessDenied']) {

      }
    })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onSubmit() {
    this.loginForm.disable()

    this.aSub = this.auth.login(this.loginForm.value).subscribe(
      () => this.router.navigate(['/overview']),
      error => {
        console.warn(error)
        this.loginForm.enable()
      }
    )
  }
}
