import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  @ViewChild('new_picture', { static: false }) picture!: ElementRef;
  profile: any | undefined;
  editProfile: any;
  confirmPassword: string = "";
  errorMessage: string = "";
  constructor(private profileService: ProfileService, private authenticationService: AuthenticationService) {
    this.editProfile =
      {
        "profilePicture": "",
        "firstName": "",
        "lastName": "",
        "prefix": "",
        "phoneNumber": "",
        "country": "",
        "city": "",
        "password": "",
      }
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (data: any) => {
        this.profile = data;
      }
    )
  }

  updateProfile() {
    if (this.editProfile.password !== this.confirmPassword) {
      this.errorMessage = "Submitted passwords do not match. Try again!";
    } else {
      this.errorMessage = "";
      this.profileService.updateProfile(this.editProfile).subscribe(
        (data: any) => {
          this.profile = data;
        }
      );
    }
  }

  logout(){
    this.authenticationService.logout();
  }

  delete(){
    this.profileService.deleteProfile().subscribe(() => console.log("Deleted!"));
    this.logout();
  }

  clear() {
    this.editProfile = {
      "profilePicture": "",
      "firstName": "",
      "lastName": "",
      "prefix": "",
      "phoneNumber": "",
      "country": "",
      "city": "",
      "password": ""
    };
    this.confirmPassword = "";
    this.errorMessage = "";
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.picture.nativeElement.src = URL.createObjectURL(file);
      this.editProfile.profilePicture = URL.createObjectURL(file);
    }
  }

}
