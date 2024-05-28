import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavComponent} from "../nav/nav.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
