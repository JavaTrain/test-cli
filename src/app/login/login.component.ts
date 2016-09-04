import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router }              from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [UserService],
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }

  public loginForm;

  constructor(
      private userService: UserService,
      private router: Router,
      builder: FormBuilder
  ) { 
  	this.loginForm = builder.group({
      username: ['', [Validators.required, /*validatorFactory('email')*/]],
      password: ['', Validators.required],
    });
  }

  onSubmit(credentials) {
    this.userService.login(credentials.username, credentials.password).subscribe((result) => {
      if (result) {
        this.router.navigate(['list']);
      }
    });
  }

}
