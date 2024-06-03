import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {UserResponse} from "../../model/UserResponse";
import {FormsModule} from "@angular/forms";
import {UserEditProfileRequest} from "../../model/UserEditProfileRequest";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  profile: UserResponse | undefined;
  editProfile: UserEditProfileRequest;
  constructor(private profileService: ProfileService) {
    this.editProfile = new UserEditProfileRequest(
      {
        "profilePicture": "",
        "firstName": "",
        "lastName": "",
        "prefix": "",
        "phoneNumber": "",
        "country": "",
        "city": "",
        "password": "",
      })
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (data: UserResponse) => {
        this.profile = data;
      }
    )
  }

  updateProfile(){
    this.profileService.updateProfile(this.editProfile).subscribe(
      (data: UserResponse) => {
        this.profile = data;}
    )
  }

  clear(){
    this.editProfile = new UserEditProfileRequest(
      {
        "profilePicture": "",
        "firstName": "",
        "lastName": "",
        "prefix": "",
        "phoneNumber": "",
        "country": "",
        "city": "",
        "password": "",
      })
  }
}
