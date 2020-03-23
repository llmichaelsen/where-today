import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private loginServ: LoginService) { }

  initForm() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }
    if (!this.loginServ.login(this.loginForm.value.email, this.loginForm.value.password)){
      alert('Usuário e/ou inválidos.')
    }
  }

  ngOnInit() {

    this.initForm();
  }

}
