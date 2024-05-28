import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isActive: boolean[] = [true, false, false, false];

  toggleActive(index: number) {
    for (let i = 0; i < this.isActive.length; i++) {
      this.isActive[i] = i === index;
    }
  }
}
