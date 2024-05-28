import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {UserSignUpRequest} from "../../model/UserSignUpRequest";
import {UserSignInRequest} from "../../model/UserSignInRequest";
import {ProfileService} from "../../services/profile.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  public view: boolean = true;
  signUp: UserSignUpRequest;
  signIn: UserSignInRequest;
  constructor(private profileService: ProfileService) {
    this.signUp = new UserSignUpRequest(
      {
        "email": "",
        "password": "",
      })
    this.signIn = new UserSignInRequest(
      {
        "email": "",
        "password": "",
      })
  }

  createUser() {
    this.profileService.createUser(this.signUp).subscribe(
      () => {
        console.log(this.signUp)
      }
    )
  }
}
