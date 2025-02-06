import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showForm(type: string): void {
    console.log(`Show form for: ${type}`);
    // Add logic to display forms or navigate accordingly
  }
}
