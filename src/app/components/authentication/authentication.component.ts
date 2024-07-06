import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {ProfileService} from "../../services/profile.service";
import {FormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    NgIf
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  public view: boolean = true;
  signUp: any;
  signIn: any;
  confirmPassword: string = "";
  errorMessage: string = "";
  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.resetForm()
  }

  resetForm() {
    this.signUp =
      {
        "email": "",
        "password": "",
      }
    this.signIn =
      {
        "email": "",
        "password": "",
      }
    this.confirmPassword = "";
    this.errorMessage = "";
  }

  signup() {
    if (this.signUp.password !== this.confirmPassword) {
      this.errorMessage = "Submitted passwords do not match. Try again!";
      return;
    }
    this.authenticationService.signup(this.signUp).subscribe(
      (response) => {
        console.log(response);
        this.authenticationService.setToken(response.jwt);
        this.resetForm();
        this.router.navigate(['/']);},
    );
  }

  signin() {
    this.authenticationService.signin(this.signIn).subscribe(
      (response) => {
        console.log("User login successful:", this.signIn);
        console.log(response);
        this.authenticationService.setToken(response.jwt);
        this.resetForm();
        this.router.navigate(['/']);},
    );
  }
}
