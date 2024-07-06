import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private authenticationService: AuthenticationService) {}

  logout(){
    this.authenticationService.logout();
  }
}
